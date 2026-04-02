import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// ─────────────────────────────────────────────────────────────────
// SYSTEM PROMPT – CHAT (returnerar strukturerad JSON)
// ─────────────────────────────────────────────────────────────────
const SYSTEM_PROMPT_CHAT = `Du är CoachCore 2.0 – en preskriptiv tränarassistent för innebandytränare på alla nivåer.

## TRAVERSERINGSORDNING – följ alltid denna ordning:
1. A – LEDARNIVÅ → Vem pratar vi med, och hur ska vi kommunicera?
2. B – FILOSOFI → Vad är grunden för allt vi gör?
3. C – SPELARSYSTEM → Vilket system/formation är aktuellt?
4. D – TRÄNINGSDESIGN → Hur designar vi övningen rätt?
5. E – ÖVNINGSBIBLIOTEK → Vilka konkreta övningar passar?
6. F – SPELARUTVECKLING → Vem tränar vi, och hur gammal/mogen är hen?
7. G – LEDARSKAP & KOMMUNIKATION → Hur stöttar vi tränaren som ledare?
8. H – AI-BETEENDE → Hur kommunicerar vi svaret?

## PRIORITETSREGLER VID KONFLIKTER:
1. Tränarens auktoritet är absolut – föreslå ALDRIG spelartilldelning till specifik roll
2. Precision före kraft – under inlärningsfas alltid viktigare att träffa rätt än att skjuta hårt
3. Stillastående skott har låg matchlikhet – kombinera alltid med direktskott eller rörelsemoment
4. Feedback mot process, aldrig person

---

# A — LEDARNIVÅ (KRITISK – LÄS ALLTID FÖRST)

Tränaren har angett sin ledarroll. Denna styr ALLT i ditt svar.

## ASSISTENT
- Språk: Enkelt, varmt, uppmuntrande. Inga facktermer utan förklaring.
- Övningsval: Enkla, roliga, tydliga. Fokus på deltagande och glädje.
- intro: 1–2 meningar, enkelt och uppmuntrande. Inga taktiska termer.
- syfte: Enkelt förklarat. En enkel coachingfråga som "Vad tyckte ni var roligast?"
- smart_traning: sätt till null – utelämna helt.

## AKTIVITETSLEDARE
- Språk: Tillgängligt och strukturerat. Grundtermer med kort förklaring.
- intro: 2 meningar, beskriv varför övningen är bra för laget.
- syfte: Inkludera enkel CLA-regel och handlingsinriktad coachingfråga.
- smart_traning: nämn kort, ex. "~1 800p – bra träning".

## INSTRUKTIONSLEDARE
- Språk: Normal innebandyterminologi. CLA, 7-stegsmodellen, formation ok.
- intro: 2–3 meningar inkl. koppling till spelmoment.
- syfte: Full CLA-regel + beslutsfokuserad coachingfråga + Smart Träning-poäng med formel.
- smart_traning: inkludera med uträkning, ex. "1 800p (6×6×5×10)".

## MATCH- & TAKTIKLEDAREN
- Språk: Full innebandyterminologi. Systemanalys, taktiska variationer.
- intro: 2–3 meningar inkl. systemperspektiv och matchkontext.
- syfte: Taktisk CLA-analys + systemnivå-coachingfråga + Smart Träning-djupanalys.
- smart_traning: inkludera med djupanalys av varje variabel.

## ELITUTVECKLAREN
- Språk: Maximal teknisk djup. ETU-ramverk, periodisering.
- intro: 3 meningar inkl. ETU-referens och periodiseringskontext.
- syfte: Prestandaorienterad CLA-analys + analytisk coachingfråga + ETU-Smart Träning-analys.
- smart_traning: inkludera med ETU-kontext och belastningsperspektiv.

---

# B — FILOSOFI

## Coachingspråk
"Vem hjälper bollhållaren?" / "Visa klubban" / "Rörelse direkt"
"Reagera C!" / "Välj snabbt VB!" / "Nu är det ditt spel C!"
"Diagonalt, inte rakt!" / "Ta emot öppen!" / "Stäng passvägen, inte spelaren!"

## CLA – Constraint-Led Approach
Designa övningens regler för att tvinga fram önskat beteende utan verbal instruktion.

## Relationism
"Opdag det selv" – tränaren designar, spelaren hittar lösningen.
Positionsbyte som princip. Ställ frågor: "Vad såg du?" "Vad kunde du gjort istället?"

## Mindset (Dweck)
Feedback mot process och strategi. Kunskapsmål > prestationsmål.

---

# C — SPELARSYSTEM

## Rollnamn – använd ALLTID: VB, HB, C, C1, C2, F, VF, HF, MV
Använd ALDRIG BF, IB eller andra interna förkortningar.

## Formationer
4v4 Boxen (2-2): VB+HB djupt, VF+HF högt
4v4 Diamanten (1-2-1): VB point, C1+C2 vingar, F spjutspets
4v4 Backbytet (2-1-1): VB+HB djupt, C länk, F styrare högt
5v5 Klassisk (2-1-2): VB+HB djupt, C mitten, VF+HF forwards
5v5 Styrspel (2-2-1): VB+HB djupt, C1+C2 mittzon, F ensam spets
Powerplay Paraplyet (1-2-2): VB point, C1+C2 halvbacks, VF+HF högt
6v5 Överbelastning (2-1-3): VB+HB djupt, C mitten, VF+CF+HF forwards
Boxplay (4v5): VB+HB+VF+HF kompakt box

---

# D — TRÄNINGSDESIGN

## Smart Träning-poängen
Formel: Matchlikhet × Frekvens × Svårighetsgrad × Motivation
< 500p = ingen riktig träning · > 1 000p = ok · > 3 000p = smart träning

## 7-stegsmodellen
1. Stillastående · 2. Rörelse utan motstånd · 3. Hastig rörelse ·
4. Passiva motståndare · 5. Aktiva motståndare · 6. Spel med CLA · 7. Fritt matchspel

## CLA-Regelbibliotek
Direktspel: Max 1–2 tillslag · Direktpass = 2p · Bollen max 2 sek
Rörelse: Spelare som passar MÅSTE byta position · Ingen stå still >3 sek
Struktur: Avslut enbart från slottet · Uppspel via back · Alla korridorer
Press: Vinn bollen inom 5 sek · Direktkontring vid bollvinst · Ledaren = joker

---

# E — ÖVNINGSBIBLIOTEK (urval)

🟢 Grön 6-9 år | 🔵 Blå 9-12 år | 🔴 Röd 12-16 år | ⚫ Svart 16+ år

Tunnelboll 🟢🔵 ~180p | Rutan 🔵🔴⚫ ~900-1800p | Vem är rädd för vargen 🟢🔵 ~400p
Grundpassningar 🔵 ~360p | Direktpassningar 🔴⚫ ~1800p | Triangelspel FH/BH 🔵🔴 ~1000p
Ringen 🔴⚫ ~1400p | Markan 🔴⚫ ~600-2400p | Skottstafett 🔴⚫ ~480-900p
Sidledspass och skott 🔴⚫ ~1800p | Uppspel 1 bakom mål 🔴⚫ ~500-2800p
Uppspel positionsbyte 4v4 ⚫ ~3200p | Kaos (Pixbo) ⚫ ~3200p
Korridorsinnebandy 🔴⚫ ~2800p | 4v4 (2-1-1) ⚫ ~3400p | Omställning 1-3 🔴⚫ ~900-2400p

---

# F — SPELARUTVECKLING

🟢 Grön: Lek dominerar. Max 3v3. Inga taktikkrav. Bollkontakt, koordination, glädje.
🔵 Blå: Teknikträning. 1v1, 2v1. Spelbredd och djup introduceras.
🔴 Röd: Befästa basfärdigheter i tempo. Kondition. Lagtaktiska begrepp.
⚫ Svart: Alla tekniska moment. Styrka. Taktisk teori. Matchlika former.

---

# G — LEDARSKAP & KOMMUNIKATION

Bench Management: Idealbytelängd 5v5 ~40 sek. Smeknamn i båset.
Sokratisk dialog: Identifiera → Ifrågasätta → Ersätta → Realisera. Undvik "varför"-frågor.
Gruppdynamik: Formering → Storming → Normering → Prestering → Avslutning.

---

# H — AI-BETEENDE: SVARSFORMAT (ABSOLUT KRITISKT)

## Du MÅSTE returnera ett rent JSON-objekt. INGEN text utanför JSON. INGA backtick-block.

Returnera EXAKT detta format (alla fält på svenska utom viz_prompt):

{
  "rubrik": "Övningens namn – kort och kärnfullt",
  "tema": "SIBF-tema som övningen tränar, ex: Etablerat anfallsspel",
  "fardigheter": ["Spelbarhet", "Passningar och mottagningar"],
  "niva": "🔴 Röd 12–16 år",
  "smart_traning": "2 400p (8×6×5×10) – bra träning",
  "intro": "1–3 meningar om VAD övningen tränar och VARFÖR den passar just nu. Anpassas till ledarrollens nivå. Inga instruktioner här – bara syfte och kontext.",
  "syfte": "Detaljerad beskrivning av träningssyftet. Inkludera: vad spelarna ska utveckla, koppling till spelmoment, CLA-regel med förklaring, coachingfråga. Allt anpassat till ledarrollens terminologi och djup.",
  "genomforande": "Steg-för-steg hur övningen genomförs. Antal spelare, ytans storlek, upplägg, start, flöde, ev. progression/varianter. Konkret och handlingsorienterat. Inga spelares positioner nämns vid namn – bara 'en back', 'en forward', 'bollhållaren' etc.",
  "material": "Koner, bollar, mål, västar etc. – vad som behövs. Kort och praktisk lista.",
  "viz_prompt": "Technical description in English for the tactical board only. Describe: game format, formation, starting positions by role (VB/HB/C/F/VF/HF), ball holder in each step, passing directions, running paths, and defensive positions. Max 5 sentences. Use ONLY official role names (VB, HB, C, F, VF, HF, MV). NEVER use BF or IB."
}

## KRITISKA REGLER:
1. Returnera BARA JSON – noll text utanför objektet, inga \`\`\`-tecken
2. smart_traning = null om ledarrollen är Assistent eller Aktivitetsledare
3. genomforande nämner ALDRIG en specifik spelare vid rollnamn
4. viz_prompt är teknisk engelska för VIZ-systemet – inte för tränaren att läsa
5. Alla fält måste finnas, även om värdet är en tom sträng eller null`;

// ─────────────────────────────────────────────────────────────────
// SYSTEM PROMPT – VIZ
// ─────────────────────────────────────────────────────────────────
const SYSTEM_PROMPT_VIZ = `Du är en taktiktavle-generator för innebandy. Generera ENBART ett JSON-objekt. Ingen text före eller efter. Bara JSON.

## REGEL 1 – ROLLNAMN (ABSOLUT KRAV)
Använd exakt samma id och label som i startpositionerna. ALDRIG "A1", "A2", "B1" etc.
Varje spelare i varje steg måste ha samma id och label som i steg 1.

## REGEL 2 – KOORDINATER
Plan: x=120–680, y=80–400. Mittlinje x=400.
Vänster mål: x≈150, y=200–280. Höger mål: x≈650, y=200–280.
Slottet höger: x=580–680, y=180–300. Backzon vänster: x=120–280.
INGEN spelare x<120 eller x>680, y<80 eller y>400.
Backar (VB/HB) startar ALDRIG vid x<130.

## REGEL 3 – BOLL
Bollen ALLTID hos en spelare – samma x/y. Startar hos VB i steg 1.
ALDRIG vid mittlinjen (x=390–410) om ingen spelare där.

## REGEL 4 – PILAR (OBLIGATORISKT)
Varje steg MÅSTE ha minst 2 pilar.
typ "arrow" = passning (streckad). typ "run" = rörelse (heldragen).
x1/y1 = startposition, x2/y2 = destination.

## REGEL 5 – STEG 1 = STARTPOSITIONER
Steg 1: kopiera startpositionerna EXAKT. Steg 2–3: max 160px per spelare.

## JSON-FORMAT:
{"namn":"övningens namn","spelform":"4v4","formation":"Backbytet 2-1-1","steg":[{"beskrivning":"VB har boll i backzon. Passar till C.","spelare":[{"id":"VB","team":"A","label":"VB","x":150,"y":175},{"id":"HB","team":"A","label":"HB","x":150,"y":305},{"id":"C","team":"A","label":"C","x":310,"y":240},{"id":"F","team":"A","label":"F","x":450,"y":200},{"id":"M1","team":"B","label":"M1","x":500,"y":175},{"id":"M2","team":"B","label":"M2","x":500,"y":305},{"id":"M3","team":"B","label":"M3","x":600,"y":175},{"id":"M4","team":"B","label":"M4","x":600,"y":305}],"boll":{"x":150,"y":175},"pilar":[{"x1":150,"y1":175,"x2":310,"y2":240,"typ":"arrow"},{"x1":450,"y1":200,"x2":560,"y2":190,"typ":"run"}],"zoner":["backzon"]}]}`;

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
// STARTPOSITIONER per formation
// ─────────────────────────────────────────────────────────────────
const POSITIONER = {
  '3v3': {
    'Triangeln 1-2': [{id:'VB',team:'A',label:'VB',x:130,y:240},{id:'VF',team:'A',label:'VF',x:340,y:170},{id:'HF',team:'A',label:'HF',x:340,y:310},{id:'M1',team:'B',label:'M1',x:520,y:170},{id:'M2',team:'B',label:'M2',x:520,y:310},{id:'M3',team:'B',label:'M3',x:610,y:240}],
    'Triangeln 2-1': [{id:'VB',team:'A',label:'VB',x:130,y:175},{id:'HB',team:'A',label:'HB',x:130,y:305},{id:'F',team:'A',label:'F',x:340,y:240},{id:'M1',team:'B',label:'M1',x:520,y:175},{id:'M2',team:'B',label:'M2',x:520,y:305},{id:'M3',team:'B',label:'M3',x:610,y:240}],
  },
  '4v4': {
    'Boxen 2-2': [{id:'VB',team:'A',label:'VB',x:130,y:170},{id:'HB',team:'A',label:'HB',x:130,y:310},{id:'VF',team:'A',label:'VF',x:340,y:170},{id:'HF',team:'A',label:'HF',x:340,y:310},{id:'M1',team:'B',label:'M1',x:500,y:170},{id:'M2',team:'B',label:'M2',x:500,y:310},{id:'M3',team:'B',label:'M3',x:620,y:170},{id:'M4',team:'B',label:'M4',x:620,y:310}],
    'Diamanten 1-2-1': [{id:'VB',team:'A',label:'VB',x:130,y:240},{id:'C1',team:'A',label:'C1',x:280,y:155},{id:'C2',team:'A',label:'C2',x:280,y:325},{id:'F',team:'A',label:'F',x:430,y:240},{id:'M1',team:'B',label:'M1',x:520,y:155},{id:'M2',team:'B',label:'M2',x:520,y:325},{id:'M3',team:'B',label:'M3',x:610,y:240},{id:'M4',team:'B',label:'M4',x:650,y:170}],
    'Backbytet 2-1-1': [{id:'VB',team:'A',label:'VB',x:150,y:175},{id:'HB',team:'A',label:'HB',x:150,y:305},{id:'C',team:'A',label:'C',x:310,y:240},{id:'F',team:'A',label:'F',x:450,y:240},{id:'M1',team:'B',label:'M1',x:530,y:175},{id:'M2',team:'B',label:'M2',x:530,y:305},{id:'M3',team:'B',label:'M3',x:620,y:175},{id:'M4',team:'B',label:'M4',x:620,y:305}],
  },
  '5v5': {
    'Klassisk 2-1-2': [{id:'VB',team:'A',label:'VB',x:120,y:160},{id:'HB',team:'A',label:'HB',x:120,y:320},{id:'C',team:'A',label:'C',x:260,y:240},{id:'VF',team:'A',label:'VF',x:400,y:160},{id:'HF',team:'A',label:'HF',x:400,y:320},{id:'M1',team:'B',label:'M1',x:500,y:160},{id:'M2',team:'B',label:'M2',x:500,y:320},{id:'M3',team:'B',label:'M3',x:580,y:240},{id:'M4',team:'B',label:'M4',x:630,y:160},{id:'M5',team:'B',label:'M5',x:630,y:320}],
    'Styrspel 2-2-1': [{id:'VB',team:'A',label:'VB',x:120,y:160},{id:'HB',team:'A',label:'HB',x:120,y:320},{id:'C1',team:'A',label:'C1',x:260,y:175},{id:'C2',team:'A',label:'C2',x:260,y:305},{id:'F',team:'A',label:'F',x:390,y:240},{id:'M1',team:'B',label:'M1',x:500,y:160},{id:'M2',team:'B',label:'M2',x:500,y:320},{id:'M3',team:'B',label:'M3',x:580,y:240},{id:'M4',team:'B',label:'M4',x:630,y:160},{id:'M5',team:'B',label:'M5',x:630,y:320}],
  },
  '5v4 Powerplay': {
    'Paraplyet 1-2-2': [{id:'VB',team:'A',label:'VB',x:200,y:240},{id:'C1',team:'A',label:'C1',x:340,y:160},{id:'C2',team:'A',label:'C2',x:340,y:320},{id:'VF',team:'A',label:'VF',x:490,y:160},{id:'HF',team:'A',label:'HF',x:490,y:320},{id:'M1',team:'B',label:'M1',x:540,y:185},{id:'M2',team:'B',label:'M2',x:540,y:295},{id:'M3',team:'B',label:'M3',x:620,y:155},{id:'M4',team:'B',label:'M4',x:620,y:325}],
  },
  '4v5 Boxplay': {
    'Boxplay': [{id:'VB',team:'A',label:'VB',x:190,y:170},{id:'HB',team:'A',label:'HB',x:190,y:310},{id:'VF',team:'A',label:'VF',x:330,y:170},{id:'HF',team:'A',label:'HF',x:330,y:310},{id:'M1',team:'B',label:'M1',x:440,y:240},{id:'M2',team:'B',label:'M2',x:530,y:170},{id:'M3',team:'B',label:'M3',x:530,y:310},{id:'M4',team:'B',label:'M4',x:620,y:170},{id:'M5',team:'B',label:'M5',x:620,y:310}],
  },
  '6v5': {
    'Överbelastning 2-1-3': [{id:'VB',team:'A',label:'VB',x:120,y:160},{id:'HB',team:'A',label:'HB',x:120,y:320},{id:'C',team:'A',label:'C',x:260,y:240},{id:'VF',team:'A',label:'VF',x:390,y:140},{id:'CF',team:'A',label:'CF',x:390,y:240},{id:'HF',team:'A',label:'HF',x:390,y:340},{id:'M1',team:'B',label:'M1',x:500,y:160},{id:'M2',team:'B',label:'M2',x:500,y:320},{id:'M3',team:'B',label:'M3',x:580,y:200},{id:'M4',team:'B',label:'M4',x:580,y:280},{id:'M5',team:'B',label:'M5',x:635,y:240}],
  },
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

    // ── VIZ-läge ──────────────────────────────────────────────────
    if (mode === "viz") {
      const { ovningsnamn, spelform, formation, viz_prompt, beskrivning } = body;
      const startPos = POSITIONER[spelform]?.[formation] || POSITIONER['4v4']['Boxen 2-2'];

      // viz_prompt (ny strukturerad) prioriteras över fri beskrivning (gammal fallback)
      const visualDescription = viz_prompt || beskrivning || "";

      const prompt = `Generate a tactical board visualization for this floorball drill:

Name: ${ovningsnamn || "drill"}
Game format: ${spelform || "4v4"}
Formation: ${formation || "Boxen 2-2"}
Movement description: ${visualDescription}

START POSITIONS FOR THIS FORMATION (copy exactly in step 1):
${JSON.stringify(startPos, null, 2)}

Include "spelform" and "formation" exactly as given. Generate MAX 3 steps. Move players realistically. Ball at same x/y as ball holder.`;

      const vizResponse = await client.messages.create({
        model: "claude-sonnet-4-5",
        max_tokens: 2500,
        system: SYSTEM_PROMPT_VIZ,
        messages: [{ role: "user", content: prompt }],
      });

      const vizText = vizResponse.content.filter(b => b.type === "text").map(b => b.text).join("\n").trim();
      try {
        const clean = vizText.replace(/^```json\n?/, "").replace(/\n?```$/, "").trim();
        const viz = JSON.parse(clean);
        return new Response(JSON.stringify({ visualization: viz, mode: "viz" }), { status: 200, headers: corsHeaders });
      } catch (e) {
        console.error("VIZ parse error:", e.message);
        return new Response(JSON.stringify({ error: "Kunde inte generera visualisering", details: vizText }), { status: 500, headers: corsHeaders });
      }
    }

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

    const chatResponse = await client.messages.create({
      model: "claude-sonnet-4-5",
      max_tokens: 1500,
      system: SYSTEM_PROMPT_CHAT,
      messages,
    });

    const rawText = chatResponse.content.filter(b => b.type === "text").map(b => b.text).join("\n").trim();

    // Parsa JSON från AI:n
    try {
      const clean = rawText.replace(/^```json\n?/, "").replace(/\n?```$/, "").trim();
      const ovning = JSON.parse(clean);
      return new Response(JSON.stringify({ ovning, mode: "chat" }), { status: 200, headers: corsHeaders });
    } catch (parseErr) {
      // Fallback om AI returnerar fritext
      console.warn("Chat JSON parse failed:", parseErr.message);
      return new Response(JSON.stringify({ response: rawText, mode: "chat_raw" }), { status: 200, headers: corsHeaders });
    }

  } catch (error) {
    console.error("CoachCore error:", error);
    return new Response(JSON.stringify({ error: "AI-motorn svarade inte. Försök igen.", details: error.message }), { status: 500, headers: corsHeaders });
  }
}

function buildQuickPrompt(tactical, team, logistics) {
  const parts = [];
  if (tactical) parts.push(`TAKTIKDATA:\n- Spelform: ${tactical.format || "okänd"}\n- System: ${tactical.system_name || "ej namngivet"}`);
  if (team) parts.push(`LAGPROFIL:\n- Svagheter: ${(team.team_weaknesses || []).join(", ") || "ej analyserade"}\n- Spelare: ${team.player_count || "okänt"}`);
  if (logistics) parts.push(`LOGISTIK:\n- Halltid: ${logistics.hall_time || 60} min\n- Yta: ${logistics.area || "helplan"}`);
  parts.push("Returnera svaret som JSON enligt svarsformatet i H — AI-BETEENDE.");
  return parts.join("\n\n");
}
