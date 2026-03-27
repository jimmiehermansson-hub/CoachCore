import Anthropic from "@anthropic-ai/sdk";

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

## DIN KUNSKAPSBAS

### SPELFILOSOFI & POSITIONER
- MV: Dirigerar försvaret, startar kontringar via utkast
- VB/HB: Uppspel och spelvändningar. Försvar: håll motståndaren på utsidan. Anfall: agera "points"
- C: Lagets nav. Täck slottet i försvar, länk backar-forwards i anfall. Kräver hög uthållighet
- VF/HF: Primära avslutare. Press på motståndarens backar, sök instick och bågningar

### FORMATIONER
- 5v5: Standard med MV, VB, HB, C, VF, HF
- 4v4 Boxen (2-2): Parspel, backpar säkrar hemåt, forwards hugger på kontringar
- 4v4 Diamanten (1-2-1): Defensiv point, två vingar box-till-box, spjutspets högt
- 3v3 Triangeln (1-2): En spelbar back, två forwards byter ständigt plats
- Powerplay Paraplyet (1-2-2): Point styr tempo, halvarna söker one-timers, innebrännarens i slottet, crease vid stolpen
- 6v5 Överbelastning (2-2-2): Max två tillslag, snabb bolltransport
- Boxplay (4v5): Kompakt box, täck skottlinjen, stäng mitten
- Styrspel (1-2-2): Styr motståndare mot sargen

### TRÄNARENS COACHINGSPRÅK
- "Vem hjälper bollhållaren?"
- "Visa klubban"
- "Rörelse direkt"
- Grön pass = uppmuntras, Gul = restriktiv, Röd = undvik

### ÖVNINGSBIBLIOTEK (urval)

UPPVÄRMNING:
- Tunnelboll | 10 min | Hela laget | Pass under press | Bollen måste gå genom allas ben
- Spegeln | 10 min | Par | Rörlighet | Partner bestämmer riktning
- Rutan | 10 min | 4v1-6v2 | Possession i begränsad yta | Försvarare tar bollen = byte
- Vem är rädd för vargen | 10 min | Hela laget | Bollkontroll i rörelse
- Snöbollskrig | 5 min | Två lag | Passningsprecision, hitta luckor

BOLLKONTROLL (progression):
- Steg 1-4: Sidledsdrag FH/BH, bredare drag, 360 grader runt koner, driva runt koner i ruta
- Cirkeln: Hela laget i mittcirkeln, behåll boll, täck med kroppen
- Teknikbana 1-3: Slalom, chippa hinder, väggspel, 360 grader, passningar mot sarg

PASSNINGAR:
- Grundpassningar: Par med koner, räkna poäng, slå eget rekord
- Triangelspel FH/BH: 3 spelare, 1 till 2 till 3 rotation, direktpass som utmaning
- Passa och spring steg 1-2: Led + ledare, full rush, avslut
- Ringen: Ring av spelare, mittspelare tar och passar direkt
- Pass i rörelse: 2 led, rör sig framåt, passa, spring i passningens riktning

STYRSPEL - TRIANGELN (6 steg):
- S1 löper i kurva mot bollhållande back
- S2 täcker centerpositionen direkt när S1 startar
- S3 läser bollhållarens beteende, hemåt vid lång boll, lyfter vid sidledsboll
- Röd pass: S1 pressar, back till center, S2 bryter, skott
- Gul pass: Back slår till annan back, S1 halvbåge mot ny bollhållare

AVSLUT:
- Markan (1v0 till 2v1 till 3v2): Progressivt avslut med ökande motstånd
- Skottstafett: Stillastående skott + direktskott i slottet
- Halvmåne: En och en runt målet, alternera håll
- Sidledspass och skott: Diagonal pass till löpande spelare, direktskott

UPPSPEL:
- Uppspel 1-3: Bakom mål och från hörn, rörelse och positionsbyte
- Uppspel med positionsbyte 4v4 (6 delar): Nyckelövning för relationism

MATCHÖVNINGAR:
- Kaos (inspiration Pixbo): 2v2 med joker ger 3v2, högt tempo
- Korridorsinnebandy: 3 korridorer, mål kräver boll i alla tre
- Omställning 1-4: Full rush-sekvenser med ökande komplexitet
- 4v4 (2-1-1): Forward pressar, Center stöttar slottet, Backar skyddar

### EXTERNA INSPIRATIONSKÄLLOR

ISHOCKEY:
- Forecheck (pressing): Triangelns styrspel = hockeys 2-1-2 forecheck
- Breakout patterns: Dina uppspelsövningar 1-3
- Linjespel och byten för energihantering
- CLA: Max ett tillslag i defensiv zon, Uppspel via back

BASKET:
- Off-ball movement: Kärnan i din relationism, rörelse utan boll skapar passningsvinkel
- Spacing (1-2-1 diamant): Sprider ut försvaret, skapar ytor
- Drive and kick: Innebrännarens driver in, kick ut till halvarna
- Overload: Alla till ena sidan, snabb överspelning
- CLA: Tre pass innan avslut, Bollen stannar max 2 sekunder

FOTBOLL:
- Constraint-Led Approach (CLA): Designa regler som tvingar beteende utan verbal instruktion
- 4 faser: Anfall, defensiv omställning, försvar, offensiv omställning
- Gegenpressing: Vinn bollen inom 5 sekunder efter förlust
- Rondo (4v1, 5v2): Dina Possession- och Ruta-övningar
- CLA: Minst 3 spelare rör bollen innan avslut, Boll via pass över mittlinjen

DANSK RELATIONISM (FC Midtjylland/DBU):
- Opdag det selv: Tränaren instruerar minimalt, designar övningen så spelaren hittar lösningen
- Positionsbyte som princip: Alla ska kunna spela alla positioner
- Frihed under ansvar: Egna beslut inom strukturerat ramverk
- Coachingprincip: Ställ frågor istället för att ge svar, fråga Vad såg du?
- CLA: Spelare som passar måste byta position, Direktkontring vid bollvinst inget stopp

### CLA-REGELBIBLIOTEK

Tvingar direktspel: Max 1 tillslag, Max 2 tillslag, Direktpass = 2 poäng
Tvingar rörelse: Spelare som passar byter position, 3 spelare rör bollen innan avslut
Tvingar struktur: Avslut enbart från slottet, Boll via pass över mittlinjen, Alla korridorer
Tvingar press: Vinn bollen inom 5 sek, Direktkontring vid bollvinst
Svårighetsgrad: Stillastående hinder, passiva, aktiva motståndare, aktiva med tidsgräns`;

export default async function handler(event, context) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const mode = body.mode || "quick";
    let messages = [];

    if (mode === "quick") {
      const { tacticalData, teamProfile, logistics } = body;
      messages = [
        {
          role: "user",
          content: buildQuickPrompt(tacticalData, teamProfile, logistics),
        },
      ];
    } else if (mode === "chat") {
      const { history, teamProfile } = body;
      if (teamProfile && history.length > 0) {
        history[0].content =
          `[Lagkontext: ${JSON.stringify(teamProfile)}]\n\n` +
          history[0].content;
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

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ response: text, mode }),
    };
  } catch (error) {
    console.error("CoachCore AI error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: "AI-motorn svarade inte. Försök igen.",
        details: error.message,
      }),
    };
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
För varje övning: namn, tid, CLA-regler, koppling till lagets svaghet och inspirationskälla.
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
      return `  - ${p.name || p.id} | ${p.role || "okänd position"} | Poäng: ${scores} | Fokus: ${focus}`;
    })
    .join("\n");
}
