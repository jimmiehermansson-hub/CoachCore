import Anthropic from "@anthropic-ai/sdk";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Läs KNOWLEDGE.md en gång vid cold start
const KNOWLEDGE = readFileSync(
  join(__dirname, "../../KNOWLEDGE.md"),
  "utf-8"
);

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `Du är CoachCore – en preskriptiv tränarassistent för innebandytränare.
Du har djup kunskap om innebandytaktik, träningsmetodik och Constraint-Led Approach (CLA).
Du svarar alltid på svenska, konkret och handlingsorienterat.
Du föreslår aldrig mer än tre övningar per svar i knapp-läge.
Du ställer aldrig fler än två följdfrågor i rad.
Du refererar alltid till tränarens egna övningar och spelfilosofi i första hand.
Du hämtar inspiration från basket, ishockey, fotboll och dansk relationism när det tillför värde.

Här är din kompletta kunskapsbas:

${KNOWLEDGE}`;

export default async function handler(req, res) {
  // CORS-headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = req.body;
    const mode = body.mode || "quick"; // "quick" eller "chat"

    let messages = [];

    if (mode === "quick") {
      // Knapp-läge: taktikdata + spelarprofil → direkt förslag
      const { tacticalData, teamProfile, logistics } = body;

      const userPrompt = buildQuickPrompt(tacticalData, teamProfile, logistics);
      messages = [{ role: "user", content: userPrompt }];

    } else if (mode === "chat") {
      // Chatt-läge: konversationshistorik
      const { history, teamProfile } = body;

      // Injicera lagkontext i första meddelandet om det finns
      if (teamProfile && history.length > 0) {
        const contextPrefix = `[Lagkontext: ${JSON.stringify(teamProfile)}]\n\n`;
        history[0].content = contextPrefix + history[0].content;
      }

      messages = history;
    }

    const response = await client.messages.create({
      model: "claude-sonnet-4-5",
      max_tokens: 1500,
      system: SYSTEM_PROMPT,
      messages,
    });

    const text = response.content
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("\n");

    return res.status(200).json({
      response: text,
      mode,
      usage: response.usage,
    });

  } catch (error) {
    console.error("CoachCore AI error:", error);
    return res.status(500).json({
      error: "AI-motorn svarade inte. Försök igen.",
      details: error.message,
    });
  }
}

function buildQuickPrompt(tactical, team, logistics) {
  const parts = [];

  if (tactical) {
    parts.push(`TAKTIKDATA FRÅN TAVLAN:
- Spelform: ${tactical.format || "okänd"}
- System: ${tactical.system_name || "ej namngivet"}
- Positioner: ${JSON.stringify(tactical.players || [])}
- Zoner markerade: ${(tactical.zones || []).length} st
- Rörelseinspelningar: ${(tactical.tracks || []).length} st`);
  }

  if (team) {
    parts.push(`LAGPROFIL:
- Lagets svagheter: ${(team.team_weaknesses || []).join(", ") || "ej analyserade"}
- Antal spelare: ${team.player_count || "okänt"}
- Spelarna:\n${formatPlayers(team.players || [])}`);
  }

  if (logistics) {
    parts.push(`LOGISTIK:
- Halltid: ${logistics.hall_time || 60} minuter
- Tillgänglig yta: ${logistics.area || "helplan"}
- Antal spelare på träning: ${logistics.players_available || team?.player_count || "okänt"}`);
  }

  parts.push(`UPPDRAG:
Föreslå ett träningspass med max tre övningar som adresserar lagets svagheter och passar det ritade systemet.
För varje övning – ange: namn, tid, CLA-regler, koppling till lagets svaghet och var inspirationen kommer ifrån (eget bibliotek / förbund / basket / hockey / fotboll / relationism).
Avsluta med ett tidsschema som minimerar dötid.`);

  return parts.join("\n\n");
}

function formatPlayers(players) {
  return players
    .map((p) => {
      const scores = Object.entries(p.scores || {})
        .map(([k, v]) => `${k}: ${v}`)
        .join(", ");
      const focus = (p.focus_areas || []).join(", ");
      return `  - ${p.name || p.id} | ${p.role || "okänd position"} | Poäng: ${scores} | Fokusområden: ${focus}`;
    })
    .join("\n");
}
