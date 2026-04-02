import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// ─────────────────────────────────────────────────────────────────
// GRID → PIXEL KONVERTERING
// Plan: 40 kolumner × 20 rader. Canvas planyta: PX=40,PY=40,PW=720,PH=400
// ─────────────────────────────────────────────────────────────────
const PX = 40, PY = 40, PW = 720, PH = 400;
const COLS = 40, ROWS = 20;

function gridToPixel(col, row) {
  return {
    x: Math.round(PX + (col / COLS) * PW),
    y: Math.round(PY + (row / ROWS) * PH),
  };
}

// ─────────────────────────────────────────────────────────────────
// STARTPOSITIONER PER FORMATION (i grid-koordinater)
// ─────────────────────────────────────────────────────────────────
const GRID_POSITIONER = {
  "3v3": {
    "Triangeln 1-2": {
      VB:  { col: 5,  row: 10, team: "A" },
      VF:  { col: 17, row: 7,  team: "A" },
      HF:  { col: 17, row: 14, team: "A" },
      M1:  { col: 26, row: 7,  team: "B" },
      M2:  { col: 26, row: 14, team: "B" },
      M3:  { col: 31, row: 10, team: "B" },
    },
    "Triangeln 2-1": {
      VB:  { col: 5,  row: 7,  team: "A" },
      HB:  { col: 5,  row: 14, team: "A" },
      F:   { col: 17, row: 10, team: "A" },
      M1:  { col: 26, row: 7,  team: "B" },
      M2:  { col: 26, row: 14, team: "B" },
      M3:  { col: 31, row: 10, team: "B" },
    },
  },
  "4v4": {
    "Boxen 2-2": {
      VB:  { col: 5,  row: 7,  team: "A" },
      HB:  { col: 5,  row: 14, team: "A" },
      VF:  { col: 17, row: 7,  team: "A" },
      HF:  { col: 17, row: 14, team: "A" },
      M1:  { col: 26, row: 7,  team: "B" },
      M2:  { col: 26, row: 14, team: "B" },
      M3:  { col: 32, row: 7,  team: "B" },
      M4:  { col: 32, row: 14, team: "B" },
    },
    "Diamanten 1-2-1": {
      VB:  { col: 5,  row: 10, team: "A" },
      C1:  { col: 13, row: 6,  team: "A" },
      C2:  { col: 13, row: 14, team: "A" },
      F:   { col: 22, row: 10, team: "A" },
      M1:  { col: 27, row: 6,  team: "B" },
      M2:  { col: 27, row: 14, team: "B" },
      M3:  { col: 32, row: 10, team: "B" },
      M4:  { col: 34, row: 7,  team: "B" },
    },
    "Backbytet 2-1-1": {
      VB:  { col: 6,  row: 7,  team: "A" },
      HB:  { col: 6,  row: 13, team: "A" },
      C:   { col: 15, row: 10, team: "A" },
      F:   { col: 23, row: 10, team: "A" },
      M1:  { col: 27, row: 7,  team: "B" },
      M2:  { col: 27, row: 13, team: "B" },
      M3:  { col: 32, row: 7,  team: "B" },
      M4:  { col: 32, row: 13, team: "B" },
    },
  },
  "5v5": {
    "Klassisk 2-1-2": {
      VB:  { col: 4,  row: 6,  team: "A" },
      HB:  { col: 4,  row: 14, team: "A" },
      C:   { col: 12, row: 10, team: "A" },
      VF:  { col: 20, row: 6,  team: "A" },
      HF:  { col: 20, row: 14, team: "A" },
      M1:  { col: 26, row: 6,  team: "B" },
      M2:  { col: 26, row: 14, team: "B" },
      M3:  { col: 30, row: 10, team: "B" },
      M4:  { col: 33, row: 6,  team: "B" },
      M5:  { col: 33, row: 14, team: "B" },
    },
    "Styrspel 2-2-1": {
      VB:  { col: 4,  row: 6,  team: "A" },
      HB:  { col: 4,  row: 14, team: "A" },
      C1:  { col: 12, row: 7,  team: "A" },
      C2:  { col: 12, row: 13, team: "A" },
      F:   { col: 19, row: 10, team: "A" },
      M1:  { col: 26, row: 6,  team: "B" },
      M2:  { col: 26, row: 14, team: "B" },
      M3:  { col: 30, row: 10, team: "B" },
      M4:  { col: 33, row: 6,  team: "B" },
      M5:  { col: 33, row: 14, team: "B" },
    },
  },
  "5v4 Powerplay": {
    "Paraplyet 1-2-2": {
      VB:  { col: 8,  row: 10, team: "A" },
      C1:  { col: 17, row: 6,  team: "A" },
      C2:  { col: 17, row: 14, team: "A" },
      VF:  { col: 24, row: 6,  team: "A" },
      HF:  { col: 24, row: 14, team: "A" },
      M1:  { col: 27, row: 7,  team: "B" },
      M2:  { col: 27, row: 13, team: "B" },
      M3:  { col: 32, row: 6,  team: "B" },
      M4:  { col: 32, row: 14, team: "B" },
    },
  },
  "4v5 Boxplay": {
    "Boxplay": {
      VB:  { col: 9,  row: 7,  team: "A" },
      HB:  { col: 9,  row: 14, team: "A" },
      VF:  { col: 16, row: 7,  team: "A" },
      HF:  { col: 16, row: 14, team: "A" },
      M1:  { col: 22, row: 10, team: "B" },
      M2:  { col: 27, row: 7,  team: "B" },
      M3:  { col: 27, row: 14, team: "B" },
      M4:  { col: 32, row: 7,  team: "B" },
      M5:  { col: 32, row: 14, team: "B" },
    },
  },
  "6v5": {
    "Överbelastning 2-1-3": {
      VB:  { col: 4,  row: 6,  team: "A" },
      HB:  { col: 4,  row: 14, team: "A" },
      C:   { col: 12, row: 10, team: "A" },
      VF:  { col: 19, row: 5,  team: "A" },
      CF:  { col: 19, row: 10, team: "A" },
      HF:  { col: 19, row: 15, team: "A" },
      M1:  { col: 26, row: 6,  team: "B" },
      M2:  { col: 26, row: 14, team: "B" },
      M3:  { col: 30, row: 8,  team: "B" },
      M4:  { col: 30, row: 12, team: "B" },
      M5:  { col: 33, row: 10, team: "B" },
    },
  },
};

// ─────────────────────────────────────────────────────────────────
// SYSTEM PROMPT – CHAT
// ─────────────────────────────────────────────────────────────────
const SYSTEM_PROMPT_CHAT = `Du är CoachCore 2.0 – en preskriptiv tränarassistent för innebandytränare på alla nivåer.

## TRAVERSERINGSORDNING:
1. A – LEDARNIVÅ → Vem pratar vi med?
2. B – FILOSOFI → Grunden för allt vi gör
3. C – SPELARSYSTEM → System/formation
4. D – TRÄNINGSDESIGN → Hur designar vi övningen?
5. E – ÖVNINGSBIBLIOTEK → Vilka övningar passar?
6. F – SPELARUTVECKLING → Vem tränar vi?
7. G – LEDARSKAP → Hur stöttar vi tränaren?
8. H – AI-BETEENDE → Svarsformat

## PRIORITETSREGLER:
1. Tränarens auktoritet är absolut – föreslå ALDRIG spelartilldelning
2. Precision före kraft
3. Stillastående skott = låg matchlikhet, kombinera alltid med rörelse
4. Feedback mot process, aldrig person

---

# A — LEDARNIVÅ (LÄS ALLTID FÖRST)

## ASSISTENT
Enkelt, varmt, uppmuntrande. Inga facktermer. smart_traning=null.

## AKTIVITETSLEDARE
Tillgängligt och strukturerat. Grundtermer ok. smart_traning kort.

## INSTRUKTIONSLEDARE
Normal terminologi. CLA, 7-stegsmodellen ok. smart_traning med formel.

## MATCH- & TAKTIKLEDAREN
Full terminologi. Systemanalys. smart_traning djupanalys.

## ELITUTVECKLAREN
ETU-ramverk, periodisering. smart_traning med ETU-kontext.

---

# B — FILOSOFI
CLA: Designa regler som tvingar fram beteende utan verbal instruktion.
Relationism: "Opdag det selv" – tränaren designar, spelaren hittar lösningen.
Mindset (Dweck): Feedback mot process. Kunskapsmål > prestationsmål.

Coachingspråk: "Vem hjälper bollhållaren?" / "Visa klubban" / "Rörelse direkt"
"Reagera C!" / "Ta emot öppen!" / "Stäng passvägen, inte spelaren!"

---

# C — SPELARSYSTEM
Rollnamn: VB, HB, C, C1, C2, F, VF, HF, MV — ALDRIG BF eller IB.

Formationer:
4v4 Boxen (2-2): VB+HB djupt, VF+HF högt
4v4 Diamanten (1-2-1): VB point, C1+C2 vingar, F spjutspets
4v4 Backbytet (2-1-1): VB+HB djupt, C länk, F styrare högt
5v5 Klassisk (2-1-2): VB+HB djupt, C mitten, VF+HF forwards
5v5 Styrspel (2-2-1): VB+HB djupt, C1+C2 mittzon, F ensam spets

---

# D — TRÄNINGSDESIGN
Smart Träning: Matchlikhet × Frekvens × Svårighetsgrad × Motivation
<500p=ingen träning · >1000p=ok · >3000p=smart träning

7-stegsmodellen: Stillastående → Rörelse → Hastig rörelse → Passiva → Aktiva → CLA-spel → Fritt
CLA-regler: Max 2 tillslag · Direktpass=2p · Spelare som passar MÅSTE byta pos · Vinn bollen inom 5 sek

---

# E — ÖVNINGSBIBLIOTEK
🟢 Grön 6-9 | 🔵 Blå 9-12 | 🔴 Röd 12-16 | ⚫ Svart 16+
Rutan ~900-1800p | Direktpassningar ~1800p | Uppspel pos.byte 4v4 ~3200p | 4v4 (2-1-1) ~3400p

---

# F — SPELARUTVECKLING
🟢 Lek, max 3v3, glädje. 🔵 Teknik, 1v1. 🔴 Taktik, kondition. ⚫ Allt, matchlikt.

---

# G — LEDARSKAP
Bench Management: ~40 sek bytelängd. Sokratisk dialog. Gruppdynamik 5 faser.

---

# H — AI-BETEENDE: SVARSFORMAT

## Returnera EXAKT ett JSON-objekt. INGEN text utanför JSON.

{
  "rubrik": "Övningens namn",
  "tema": "SIBF-tema",
  "fardigheter": ["Färdighet 1", "Färdighet 2"],
  "niva": "🔴 Röd 12–16 år",
  "smart_traning": "2 400p (8×6×5×10)",
  "intro": "1–3 meningar om VAD och VARFÖR. Anpassas till ledarroll.",
  "syfte": "Träningssyfte + CLA-regel + coachingfråga. Anpassas till ledarroll.",
  "genomforande": "Steg-för-steg. Inga rollnamn på specifika spelare.",
  "material": "Koner, bollar, mål, västar etc."
}

## REGLER:
1. Returnera BARA JSON – noll text utanför, inga backticks
2. smart_traning=null för Assistent/Aktivitetsledare
3. genomforande nämner ALDRIG rollnamn för specifika spelare
4. Max 15 rader totalt i svaret`;

// ─────────────────────────────────────────────────────────────────
// SYSTEM PROMPT – VIZ (grid-baserad, separerat anrop)
// ─────────────────────────────────────────────────────────────────
const SYSTEM_PROMPT_VIZ_GRID = `Du är en taktiktavle-generator för innebandy. Generera ENBART ett JSON-objekt. Ingen text före eller efter. Bara JSON.

## GRID-SYSTEMET
Planen är 40 kolumner (vänster→höger) × 20 rader (topp→botten).
- col 0 = vänster kant · col 40 = höger kant · col 20 = mittlinje
- row 0 = övre kant · row 20 = nedre kant · row 10 = mittrad

NYCKELZONER:
- Vänster backzon (anfallande lag): col 1–8, row 2–18
- Mittzon: col 9–31, row 2–18
- Höger backzon (försvarande lag): col 32–39, row 2–18
- Höger slott: col 34–39, row 8–13
- Höger mål: col 38–40, row 8–12

## ABSOLUTA REGLER
1. Steg 1: Kopiera startpositionerna EXAKT som du fick dem — ändra ingenting
2. Steg 2–3: Flytta spelare realistiskt — max 8 kolumner / 6 rader per spelare per steg
3. Varje spelares id och label måste vara identiska i ALLA steg
4. Bollen är alltid på samma col/row som den spelare som har den
5. Varje steg MÅSTE ha minst 2 pilar: "arrow"=passning (streckad), "run"=rörelse (heldragen)
6. Ingen spelare på exakt samma col+row som en annan
7. Backar (VB/HB) i col 1–15 i steg 1, forwards rör sig mot höger (ökande col)
8. Motståndare (M1–M5) rör sig mot vänster (minskande col)

## JSON-FORMAT (använd col/row — ALDRIG x/y i pixlar):
{
  "namn": "övningens namn",
  "spelform": "4v4",
  "formation": "Backbytet 2-1-1",
  "steg": [
    {
      "beskrivning": "VB har boll i backzon. Passar till C. F söker djup.",
      "spelare": [
        {"id": "VB", "team": "A", "label": "VB", "col": 6,  "row": 7},
        {"id": "HB", "team": "A", "label": "HB", "col": 6,  "row": 13},
        {"id": "C",  "team": "A", "label": "C",  "col": 15, "row": 10},
        {"id": "F",  "team": "A", "label": "F",  "col": 23, "row": 10},
        {"id": "M1", "team": "B", "label": "M1", "col": 27, "row": 7},
        {"id": "M2", "team": "B", "label": "M2", "col": 27, "row": 13},
        {"id": "M3", "team": "B", "label": "M3", "col": 32, "row": 7},
        {"id": "M4", "team": "B", "label": "M4", "col": 32, "row": 13}
      ],
      "boll": {"col": 6, "row": 7},
      "pilar": [
        {"col1": 6, "row1": 7, "col2": 15, "row2": 10, "typ": "arrow"},
        {"col1": 23, "row1": 10, "col2": 30, "row2": 8, "typ": "run"}
      ],
      "zoner": []
    },
    {
      "beskrivning": "C tar emot och passar till F vid slottet. VB kliver framåt.",
      "spelare": [
        {"id": "VB", "team": "A", "label": "VB", "col": 10, "row": 7},
        {"id": "HB", "team": "A", "label": "HB", "col": 6,  "row": 13},
        {"id": "C",  "team": "A", "label": "C",  "col": 15, "row": 10},
        {"id": "F",  "team": "A", "label": "F",  "col": 30, "row": 9},
        {"id": "M1", "team": "B", "label": "M1", "col": 24, "row": 7},
        {"id": "M2", "team": "B", "label": "M2", "col": 27, "row": 13},
        {"id": "M3", "team": "B", "label": "M3", "col": 31, "row": 8},
        {"id": "M4", "team": "B", "label": "M4", "col": 32, "row": 13}
      ],
      "boll": {"col": 15, "row": 10},
      "pilar": [
        {"col1": 15, "row1": 10, "col2": 30, "row2": 9, "typ": "arrow"},
        {"col1": 10, "row1": 7,  "col2": 15, "row2": 8, "typ": "run"}
      ],
      "zoner": []
    }
  ]
}`;

// ─────────────────────────────────────────────────────────────────
// CORS
// ─────────────────────────────────────────────────────────────────
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
};

// ─────────────────────────────────────────────────────────────────
// HANDLER
// ─────────────────────────────────────────────────────────────────
export default async function handler(req) {
  if (req.method === "OPTIONS") return new Response("", { status: 200, headers: corsHeaders });
  if (req.method !== "POST") return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers: corsHeaders });

  try {
    const body = await req.json();
    const mode = body.mode || "chat";

    // ── CHAT-läge ─────────────────────────────────────────────────
    let messages = [];
    if (mode === "chat") {
      const { history, teamProfile } = body;
      if (teamProfile && history?.length > 0) {
        history[0].content = `[Lagkontext: ${JSON.stringify(teamProfile)}]\n\n` + history[0].content;
      }
      messages = history || [];
    } else if (mode === "quick") {
      messages = [{ role: "user", content: buildQuickPrompt(body.tacticalData, body.teamProfile, body.logistics) }];
    }

    if (mode === "chat" || mode === "quick") {
      const chatResponse = await client.messages.create({
        model: "claude-sonnet-4-5",
        max_tokens: 1000,
        system: SYSTEM_PROMPT_CHAT,
        messages,
      });

      const rawText = chatResponse.content.filter(b => b.type === "text").map(b => b.text).join("\n").trim();

      try {
        const clean = rawText.replace(/^```json\n?/, "").replace(/\n?```$/, "").trim();
        const ovning = JSON.parse(clean);

        // Konvertera viz_sekvens från grid → pixlar och bygg taktiktavle-format
        let visualization = null;
        if (ovning.viz_sekvens && Array.isArray(ovning.viz_sekvens)) {
          visualization = buildVisualization(ovning, body);
        }

        return new Response(
          JSON.stringify({ ovning, visualization, mode: "chat" }),
          { status: 200, headers: corsHeaders }
        );
      } catch (parseErr) {
        console.warn("Chat JSON parse failed:", parseErr.message);
        return new Response(
          JSON.stringify({ response: rawText, mode: "chat_raw" }),
          { status: 200, headers: corsHeaders }
        );
      }
    }

    // ── VIZ-läge (grid-baserad, triggas av "Rita upp på tavlan") ──
    if (mode === "viz") {
      const { ovningsnamn, spelform, formation, ovning_beskrivning } = body;
      const gridPos = GRID_POSITIONER[spelform]?.[formation] || GRID_POSITIONER["4v4"]["Boxen 2-2"];

      // Bygg startpositioner i grid-format
      const startPosGrid = Object.entries(gridPos).map(([id, pos]) => ({
        id, team: pos.team, label: id, col: pos.col, row: pos.row,
      }));

      const prompt = `Generera en taktiktavle-visualisering för följande innebandyövning.

Namn: ${ovningsnamn || "Övning"}
Spelform: ${spelform || "4v4"}
Formation: ${formation || "Boxen 2-2"}

Övningsbeskrivning (vad som händer):
${ovning_beskrivning || "Anfallande lag bygger upp spel från backzon mot motståndarlaget."}

STARTPOSITIONER FÖR STEG 1 (kopiera dessa EXAKT):
${JSON.stringify(startPosGrid, null, 2)}

Generera MAX 3 steg. Inkludera "spelform" och "formation" i JSON-svaret.`;

      const vizResponse = await client.messages.create({
        model: "claude-sonnet-4-5",
        max_tokens: 2500,
        system: SYSTEM_PROMPT_VIZ_GRID,
        messages: [{ role: "user", content: prompt }],
      });

      const vizText = vizResponse.content.filter(b => b.type === "text").map(b => b.text).join("\n").trim();

      try {
        const clean = vizText.replace(/^```json\n?/, "").replace(/\n?```$/, "").trim();
        const vizGrid = JSON.parse(clean);

        // Konvertera grid → pixlar
        const visualization = convertVizToPixels(vizGrid, spelform, formation);
        return new Response(JSON.stringify({ visualization, mode: "viz" }), { status: 200, headers: corsHeaders });
      } catch (e) {
        console.error("VIZ parse error:", e.message, vizText.slice(0, 200));
        return new Response(JSON.stringify({ error: "Kunde inte generera visualisering", details: vizText.slice(0, 300) }), { status: 500, headers: corsHeaders });
      }
    }

    return new Response(JSON.stringify({ error: "Unknown mode" }), { status: 400, headers: corsHeaders });

  } catch (error) {
    console.error("CoachCore error:", error);
    return new Response(JSON.stringify({ error: "AI-motorn svarade inte. Försök igen.", details: error.message }), { status: 500, headers: corsHeaders });
  }
}

// ─────────────────────────────────────────────────────────────────
// Konvertera VIZ-svar (grid) → pixlar för taktiktavlan
// ─────────────────────────────────────────────────────────────────
function convertVizToPixels(vizGrid, spelform, formation) {
  const gridPos = GRID_POSITIONER[spelform]?.[formation] || GRID_POSITIONER["4v4"]["Boxen 2-2"];

  const steg = (vizGrid.steg || []).map((s, idx) => {
    // Konvertera spelare
    let spelare = (s.spelare || []).map(p => {
      const px = clampPixel(gridToPixel(p.col, p.row));
      return { team: p.team || "A", x: px.x, y: px.y, label: p.label || p.id || "?" };
    });

    // Steg 1: Tvinga exakta startpositioner
    if (idx === 0) {
      spelare = Object.entries(gridPos).map(([id, pos]) => {
        const px = clampPixel(gridToPixel(pos.col, pos.row));
        return { team: pos.team, x: px.x, y: px.y, label: id };
      });
    }

    // Boll
    const bollGrid = s.boll || { col: 6, row: 10 };
    const bollPx = clampPixel(gridToPixel(bollGrid.col ?? 6, bollGrid.row ?? 10));

    // Steg 1: sätt bollen hos VB eller första A-spelare
    let boll = bollPx;
    if (idx === 0) {
      const vb = spelare.find(p => p.label === "VB") || spelare.find(p => p.team === "A");
      if (vb) boll = { x: vb.x, y: vb.y };
    }

    // Pilar
    const pilar = (s.pilar || []).map(p => {
      const s1 = clampPixel(gridToPixel(p.col1, p.row1));
      const s2 = clampPixel(gridToPixel(p.col2, p.row2));
      return { type: p.typ === "run" ? "run" : "arrow", x1: s1.x, y1: s1.y, x2: s2.x, y2: s2.y };
    });

    return {
      beskrivning: s.beskrivning || `Steg ${idx + 1}`,
      spelare, boll, pilar,
      zoner: s.zoner || [],
    };
  });

  return {
    namn: vizGrid.namn || "Övning från CoachCore",
    spelform: vizGrid.spelform || spelform,
    formation: vizGrid.formation || formation,
    steg,
  };
}

function clampPixel({ x, y }) {
  return {
    x: Math.min(Math.max(x, 50), 750),
    y: Math.min(Math.max(y, 50), 430),
  };
}

// ─────────────────────────────────────────────────────────────────
// Quick prompt builder
// ─────────────────────────────────────────────────────────────────
function buildQuickPrompt(tactical, team, logistics) {
  const parts = [];
  if (tactical) parts.push(`TAKTIKDATA:\n- Spelform: ${tactical.format || "okänd"}\n- System: ${tactical.system_name || "ej namngivet"}`);
  if (team) parts.push(`LAGPROFIL:\n- Svagheter: ${(team.team_weaknesses || []).join(", ") || "ej analyserade"}`);
  if (logistics) parts.push(`LOGISTIK:\n- Halltid: ${logistics.hall_time || 60} min\n- Yta: ${logistics.area || "helplan"}`);
  parts.push("Returnera svaret som JSON enligt H — AI-BETEENDE.");
  return parts.join("\n\n");
}
