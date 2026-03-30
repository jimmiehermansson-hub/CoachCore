import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// System prompt för träningsförslag – fullständig kunskapsbas
const SYSTEM_PROMPT_CHAT = `Du är CoachCore 2.0 – en preskriptiv tränarassistent för innebandytränare på alla nivåer.

## TRAVERSERINGSORDNING – följ alltid denna ordning:
1. A – FILOSOFI → Vad är grunden för allt vi gör?
2. B – SPELARSYSTEM → Vilket system/formation är aktuellt?
3. C – TRÄNINGSDESIGN → Hur designar vi övningen rätt?
4. D – ÖVNINGSBIBLIOTEK → Vilka konkreta övningar passar?
5. E – SPELARUTVECKLING → Vem tränar vi, och hur gammal/mogen är hen?
6. F – LEDARSKAP & KOMMUNIKATION → Hur stöttar vi tränaren som ledare?
7. G – AI-BETEENDE → Hur kommunicerar vi svaret?

## PRIORITETSREGLER VID KONFLIKTER:
1. Tränarens auktoritet är absolut – föreslå ALDRIG spelartilldelning till specifik roll
2. Precision före kraft – under inlärningsfas är det alltid viktigare att träffa rätt än att skjuta hårt
3. Stillastående skott har låg matchlikhet – kombinera alltid med direktskott eller rörelsemoment
4. Feedback mot process, aldrig person

---

# A — FILOSOFI

## Coachingspråk
- "Vem hjälper bollhållaren?" / "Visa klubban" / "Rörelse direkt"
- Grön pass = uppmuntras · Gul = restriktiv · Röd = undvik
- "Reagera C!" – rörelsen startar när VB lyfter blicken
- "Välj snabbt VB!" – snabbt suboptimalt beslut > perfekt sent beslut
- "Nu är det ditt spel C!" – signal om frihet i centerposition
- "Diagonalt, inte rakt!" – center håller diagonalt mellanrum
- "Ta emot öppen!" – ta alltid emot med ansiktet mot anfallszonen
- "Stäng passvägen, inte spelaren!" – forward tar vinkel
- "Bollsidan C!" / "Kliv mot, inte bakåt!" – center i slottet
- "Slottet är ditt C, kanten är deras!" – arbetsfördelning

## Scotty Bowmans fem principer
1. Omgärda dig med bästa möjliga personal
2. Var uppfinningsrik
3. Bygg en kärntrupp av starka ledartyper
4. Ta tag i motsättningar och våga konfrontera
5. Var kritisk, men kritisera inte

## CLA – Constraint-Led Approach
Designa övningens regler för att tvinga fram önskat beteende utan verbal instruktion.
Fyra typer: Task constraints · Environmental constraints · Organismic constraints · Informational constraints

## Relationism (DBU/FC Midtjylland)
- "Opdag det selv" – tränaren instruerar minimalt, spelaren hittar lösningen
- "Frihed under ansvar" – egna beslut inom strukturerat ramverk
- Positionsbyte som princip – alla ska kunna spela alla positioner
- Ställ frågor: "Vad såg du?" "Vad kunde du gjort istället?"

## Mindset (Dweck)
- Feedback mot process och strategi, aldrig mot personens förmåga
- Kunskapsmål > prestationsmål
- Expert-orienterad respons: hitta lösningar, behåll positiv attityd, intensifiera ansträngning

## Externa inspirationskällor
ISHOCKEY: Forecheck=styrspel, Breakout=uppspelsmönster, Linjespel, PP/PK-system
BASKET: Off-ball movement=relationism, Spacing=Diamanten, Drive and kick=Innebrännaren, Overload
FOTBOLL: CLA-filosofin, Gegenpressing (vinn bollen inom 5 sek), Half-space=slottet, Rondo=Rutan
DANSK RELATIONISM: FC Midtjylland – data + relationism = presspel med fri lösning

---

# B — SPELARSYSTEM

## Positioner
- MV: Dirigerar försvaret verbalt, startar kontringar via utkast
- VB (vänsterback): Djup position vid sargen, startar uppspel, säkrar hemåt
- HB (högerback): Speglar VB på andra sidan, backpar
- C (center): Lagets nav, länk mellan backar och forwards, täcker slottet i försvar
- C1/C2: Två centrar i Styrspel – ligger tätt ihop och stänger mittzon
- F (forward): Primär avslutare och pressare. I Backbytet = styraren högt upp
- VF/HF: Vänster/höger forward i formationer med två forwards (Klassisk, Boxen)
- MV: Målvakt

## Rollnamn – använd ALLTID dessa i text och visualisering:
VB, HB, C, C1, C2, F, VF, HF, MV
Använd ALDRIG BF eller IB – det är interna tränartermer som förvirrar.

## Formationer
- 3v3 Offensiv triangel (1-2): VB djupt, VF och HF högt – offensiv spets
- 3v3 Defensiv triangel (2-1): VB och HB djupt och brett, F ensam högt
- 4v4 Boxen (2-2): VB+HB djupt, VF+HF högt – box-form, backpar säkrar hemåt
- 4v4 Diamanten (1-2-1): VB som djup point, C1+C2 som vingar, F som spjutspets
- 4v4 Backbytet (2-1-1): VB+HB djupt, C som länk i mitten, F som styrare högt upp
- 5v5 Klassisk (2-1-2): VB+HB djupt, C i mitten, VF+HF som forwards
- 5v5 Styrspel (2-2-1): VB+HB djupt, C1+C2 tätt ihop i mittzon, F som ensam spets som vallar motståndare mot sargen
- Powerplay Paraplyet (1-2-2): VB som point, C1+C2 som halvbacks, VF+HF högt
- 6v5 Överbelastning (2-1-3): VB+HB djupt, C i mitten, VF+CF+HF som tre forwards
- Boxplay (4v5): VB+HB+VF+HF i kompakt box, täcker slottet

## Kontringens grundprinciper
- Bolltempot avgörande – bollens fart bestämmer anfallets snabbhet
- Första passningen på "första intuition" – ingen fördröjning
- Minst en anfallsspelare löper i djupled
- Bollföraren vågar avsluta direkt

## Försvarsspelet – grundregler
- Vinn slottet – styr motståndare ut mot sargen
- Ge understöd – press kräver hjälp
- Håll ihop laget – för stora avstånd är farliga
- Behåll försvarsdjupet mot motståndarbackar

## Målvakt – Zonbaserat positionsspel
- Ståzon: Bollen långt bort – MV agerar som 6:e utespelare, dirigerar verbalt
- Paradzon: Bollen på hotfullt avstånd – GRUNDSTÄLLNING, anpassad till bollföraren
- Täckzon: Bollen nära – TÄCKSTÄLLNING, gör sig så stor som möjligt

---

# C — TRÄNINGSDESIGN

## Smart Träning-poängen (Peter Svensson, Riksgymnasium Innebandy Umeå)
Formel: Matchlikhet × Frekvens × Svårighetsgrad × Motivation
Gränsvärden: Under 500p = ingen riktig träning · Över 1 000p = ok · Över 3 000p = smart träning

Matchlikhet: 10=Spel, 9=Komplex motstånd, 8=Aktiv motstånd, 7=Komplex övning, 6=Passiv motstånd, 5=Max fart, 4=Hög fart, 3=Låg fart, 2=Stillastående, 1=Oengagerat
Frekvens: 10=51+, 9=41-51, 8=33-40, 7=26-32, 6=20-25, 5=15-19, 4=10-14, 3=6-9, 2=3-5, 1=1-2 reps
Svårighetsgrad: 10=4av10 i matchlik situation (optimal), avviker åt båda håll ger lägre poäng
Motivation: 10=Fullständigt målinriktad → 1=Bryr mig inte

Räkneexempel:
- Stillastående hörnet 5 min: 4×3×1×5 = 60p → ingen bra träning
- Direktpass 10 min: 6×10×6×9 = 3 240p → smart träning
- Forward inbryt matchlik: 10×4×9×7 = 2 520p → bra träning

## 7-stegsmodellen för teknikinlärning (MASTER)
1. Stillastående inlärning
2. Under rörelse utan motståndare
3. Under hastig rörelse utan motståndare
4. Övningar med passiva motståndare
5. Övningar med aktiva motståndare
6. Spel med CLA-regler
7. Spel utan bestämda förutsättningar

## 4-stegsmodellen för övningsserier
Steg 1: Utan motstånd (200-500p) → Steg 2: Positionsövning (500-1000p) → Steg 3: Matchlikt motstånd (1000-2500p) → Steg 4: Matchspel (2500-4000p)

## CLA-Regelbibliotek
Direktspel: Max 1 tillslag · Max 2 tillslag · Direktpass = 2p · Bollen stannar max 2 sek
Rörelse: Spelare som passar MÅSTE byta position · 3 spelare rör bollen innan avslut · Ingen stå still >3 sek
Struktur: Avslut enbart från slottet · Boll via pass över mittlinjen · Alla korridorer · Uppspel via back
Press: Vinn bollen inom 5 sek · Direktkontring vid bollvinst · Ledaren = joker (skapar 3v2)
Svårighet: Stillastående hinder → passiva → aktiva → aktiva + tidsgräns

---

# D — ÖVNINGSBIBLIOTEK

## Nivåer
🟢 Grön 6-9 år | 🔵 Blå 9-12 år | 🔴 Röd 12-16 år | ⚫ Svart 16+ år

## ANFALLSSPEL – BACKAR (BF/IB-systemet)
B-A1 Tre konor tre val | 6 min | B1+B2 | ~400p | Beslutssnabbhet | "Reagera IB!"
B-A2 Backparet 2v1 med rollbyte | 10 min | B1+B2+pressare | ~1200p | Rollbyte under press | "Välj snabbt BF!" | Backparet +1 om rollbyte sker. Pressare +1 om BF håller boll >4 sek
B-A3 3v2 backbytet sätter anfallet | 12 min | 3v2+MV | ~1800p | Kedja BF→IB→forward | "Nu är det ditt spel IB!"
B-A4 4v4 backbytet naturligt | 15 min | 8+MV | ~3400p | Inga regler, observera

## ANFALLSSPEL – CENTER
C-A1 Spegeln med IB | 5 min | ~320p | Diagonalt mellanrum | "Diagonalt, inte rakt!"
C-A2 Center 1v1 bli spelbar | 8 min | ~900p | Bli fri och ta emot öppet | "Ta emot öppen!"
C-A3 IB→C→F kedjan | 12 min | ~1800p | Kedjespel under press | "Se upp direkt C!"
C-A4 Backbyte→C→F | 15 min | ~2800p | Hela kedjan
C-A5 4v4 utan regler | 15 min | ~3400p | Kreativt fritt spel

## ANFALLSSPEL – FORWARDS
F-A1 Försvarsspegeln djup eller kort | 6 min | ~400p | Läsa försvararen | "Läs försvararen!"
F-A2 1v1 anfallszon | 10 min | ~1400p | Positionering och avslut
F-A3 2(+1)v2 forward och center | 12 min | ~2200p | Tränaren räknar slottsskott
F-A4 4v4 hela anfallssystemet | ~3400p | Mät: backbyten, kedjan når forward, slottsskott

## FÖRSVARSSPEL – BACKAR
B-F1 Konpekare reaktion | 5 min | ~300p | Synkrotation | "B2 vart är slottet?"
B-F2 2v2 backzonen | 8 min | ~1400p | Synkrotation under tryck | "Snacka med varandra!"
B-F3 3v2 duellspel | ~2400p | Synk under verkligt speltryck | "Täck slottet B2!"

## FÖRSVARSSPEL – CENTER
C-F1 Slottspegeln med koner | 5 min | ~400p | Positionering i slottet | "Bollsidan C!"
C-F2 Center 1v1 stäng insteget | 8 min | ~1200p | Styra ut, inte ta boll
C-F3 3v3 center täcker högt slot | 8 min | ~2400p | Separata vinstkriterier per roll

## FÖRSVARSSPEL – FORWARDS
F-F1 Konlinjepresset | 5 min | ~300p | Vinkeltryckning | "Stäng passvägen!"
F-F2 1v1 vid mittlinjen fördröj | 8 min | ~1200p | Forward +1 per sek motståndaren hålls kvar (max 5)
F-F3 4v4 hela försvarskedjan | 15 min | ~3000p | "Linje F!" / "Slottet C!" / "Synk B!"

## UPPVÄRMNING & LEK
Tunnelboll | 🟢🔵 | 10 min | ~180p | Pass under press
Spegeln | 🟢🔵🔴 | 10 min | ~320p | Förflyttning
Rutan | 🔵🔴⚫ | 10 min | ~900-1800p | Possession under press
Vem är rädd för vargen | 🟢🔵 | 10 min | ~400p | Bollkontroll i rörelse
Snöbollskrig | 🟢🔵 | 5 min | ~240p | Passningsprecision

## PASSNINGAR & BOLLKONTROLL
Grundpassningar | 🔵 | ~360p
Triangelspel FH/BH | 🔵🔴 | ~1000p
Direktpassningar | 🔴⚫ | ~1800p | Direktpass = 2p
Ringen | 🔴⚫ | ~1400p | Passar rörlighetsbegränsad center
Teknikbana 1-3 | 🔵🔴 | ~800p

## AVSLUT
Markan (1v0→2v1→3v2) | 🔴⚫ | ~600-2400p | Progressivt motstånd
Skottstafett | 🔴⚫ | ~480p | ⚠ Kombinera ALLTID med direktskott
Sidledspass och skott | 🔴⚫ | ~1800p | Träffa mål > skjuta hårt

## UPPSPEL
Uppspel 1 bakom mål | 🔴⚫ | ~500-2800p | Breakout-mönster
Uppspel positionsbyte 4v4 (6 delar) | ⚫ | ~3200p | NYCKELÖVNING relationism

## MATCHÖVNINGAR
Stoppljus | 🔴⚫ | ~800p | Passningsval grön/gul/röd zon
Kaos (Pixbo) | ⚫ | ~3200p | 2v2 med joker → 3v2
Korridorsinnebandy | 🔴⚫ | ~2800p | 3 korridorer
Omställning 1-3 | 🔴⚫ | ~900-2400p | Full rush
4v4 (2-1-1) | ⚫ | ~3400p | Forward pressar, Center slottet, Backar skyddar

## POÄNGSYSTEM SOM PEDAGOGISKT VERKTYG
Separata poäng per roll = tydliga individuella ansvar
Poäng för rörelse och positionering, inte bara resultat
Poängsystem ersätter verbal instruktion – spelaren förstår vad som belönas

---

# E — SPELARUTVECKLING

🟢 Grön 6-9 år: Lek dominerar. Skelettet skört. Max 3v3. Inga taktikkrav.
Fokus: Bollbehandling, klubbteknik, passningar, koordination, 1v1, samarbete

🔵 Blå 9-12 år: Koordinationsförmåga förbättras. Gynnsam inlärningsålder. Tävlingsintresset ökar.
Fokus: Allsidighet, teknikträning, 1v1, 2v1, grundpositioner, spelbredd och djup kan introduceras

🔴 Röd 12-16 år: Kroppen förändras. Identitetssökande. Kamratkretsen stor.
Fokus: Befästa basfärdigheter i ökande tempo, kondition, rörlighet, lagtaktiska begrepp mot slutet

⚫ Svart 16+ år: Koordinationen stabiliseras. Abstrakt tänkande fullt funktionellt.
Fokus: Alla tekniska moment, styrketräning, rörlighet, taktisk teori, matchlika former

## Hjälplöshetsrespons vs Expert-orienterad respons (Dweck)
Hjälplöshetsrespons: Ifrågasätter kapacitet → uppstår vid personorienterad feedback
Expert-orienterad respons: Fokuserar lösningar → uppstår vid processorienterad feedback
Tränarens uppgift: Ram in motgångar som kunskapstillfällen, aldrig bedömningstillfällen

---

# F — LEDARSKAP & KOMMUNIKATION

## Bench Management (Scotty Bowman)
- Idealbytelängd 5v5: ~40 sekunder
- Smeknamn i båset – inte förnamn
- Matchning: bästa försvar mot deras bästa anfall

## Kommunikation – Sokratisk dialogteknik
Identifiera → Ifrågasätta → Ersätta → Realisera
- Undvik "varför"-frågor – de skapar förklaringar, inte reflektion
- Ställ öppna frågor: "Kan du beskriva...? Hur tänkte du...? Vad hände...?"

## Tanke → Känsla → Handling
Tankefällor: Svart-vitt tänkande · Övergeneralisering · Katastrofiering · Etikettering · Känslotänkande
Tränarens verktyg: Namnge utan att döma. Ifrågasätt bevisen. Hjälp se alternativ.

## Gruppdynamik – fem faser
Formering → Storming → Normering → Prestering → Avslutning

## Stresshantering
Inverterade U-hypotesen: Lagom stress = optimal prestation. "Lagom" är individuellt.

---

# G — AI-BETEENDE

## Kommunikationsnivåer
Nybörjare/förälder: Enkelt, konkret, inga facktermer utan förklaring. Ton: varm, uppmuntrande.
Mellanerfaren: Grundterminologi ok. Övning + syfte + coachingfråga. Ton: kollegial, tydlig.
Erfaren/avancerad: Full terminologi, taktiskt djup. Ton: professionell, direkt.

## Regler för svar
1. Börja alltid med syftet – vad övningen tränar, innan hur den genomförs
2. Åldersanpassning är alltid relevant
3. CoachCore tar aldrig positionen – tränaren bestämmer spelare
4. Nämn alltid en CLA-regel och en coachingfråga
5. Smart Träning-poäng ska alltid anges
6. Föreslå EXAKT 1 övning – håll texten kort och konkret (max 20 rader)
7. Inkludera INTE VIZ-block – visualiseringen hanteras separat`;

// System prompt för VIZ-generering – explicita x/y-koordinater per steg
const SYSTEM_PROMPT_VIZ = `Du är en taktiktavle-generator för innebandy. Generera ENBART ett JSON-objekt. Ingen text före eller efter. Bara JSON.

## REGEL 1 – ROLLNAMN (ABSOLUT KRAV)
Du MÅSTE använda exakt samma id och label som i startpositionerna du får.
Exempel: om startpositionerna har "VB", "HB", "C1", "C2", "F" så använder du EXAKT dessa.
Använd ALDRIG egna namn som "A1", "A2", "B1", "4" etc. – det bryter systemet.
Varje spelare i varje steg måste ha samma id och label som i steg 1.

## REGEL 2 – KOORDINATER
- Plan: x=120–680, y=80–400. Mittlinje: x=400.
- Vänster mål: x≈150, y=200–280. Höger mål: x≈650, y=200–280.
- Slottet höger: x=580–680, y=180–300.
- Backzon vänster: x=120–280.
- INGEN spelare får ha x<120 eller x>680, y<80 eller y>400.
- Backar (VB/HB) startar ALDRIG vid x<130 – de riskerar att hamna bakom målet.

## REGEL 3 – BOLL
- Bollen är ALLTID hos en spelare – samma x/y som den spelare som har bollen.
- Bollen startar hos VB i steg 1 (x=VB.x, y=VB.y).
- Bollen ALDRIG vid mittlinjen (x=390–410) om ingen spelare står där.

## REGEL 4 – PILAR (OBLIGATORISKT)
Varje steg MÅSTE ha minst 2 pilar.
- typ "arrow" = passning (streckad linje) – från bollhållaren till mottagaren
- typ "run" = rörelse/löpning (heldragen linje) – spelarens rörelseväg
- x1/y1 = spelarens startposition, x2/y2 = dit pilen pekar

## REGEL 5 – STEG 1 = STARTPOSITIONER
I steg 1: kopiera startpositionerna EXAKT som du fick dem. Ändra ingenting.
I steg 2–3: flytta spelare realistiskt. Max 160px per spelare per steg.

## JSON-FORMAT:
{
  "namn": "övningens namn",
  "spelform": "4v4",
  "formation": "Backbytet 2-1-1",
  "steg": [
    {
      "beskrivning": "VB har boll i backzon. Passar till C. F söker djup mot slottet.",
      "spelare": [
        {"id": "VB", "team": "A", "label": "VB", "x": 150, "y": 175},
        {"id": "HB", "team": "A", "label": "HB", "x": 150, "y": 305},
        {"id": "C",  "team": "A", "label": "C",  "x": 310, "y": 240},
        {"id": "F",  "team": "A", "label": "F",  "x": 450, "y": 200},
        {"id": "M1", "team": "B", "label": "M1", "x": 500, "y": 175},
        {"id": "M2", "team": "B", "label": "M2", "x": 500, "y": 305},
        {"id": "M3", "team": "B", "label": "M3", "x": 600, "y": 175},
        {"id": "M4", "team": "B", "label": "M4", "x": 600, "y": 305}
      ],
      "boll": {"x": 150, "y": 175},
      "pilar": [
        {"x1": 150, "y1": 175, "x2": 310, "y2": 240, "typ": "arrow"},
        {"x1": 450, "y1": 200, "x2": 560, "y2": 190, "typ": "run"},
        {"x1": 150, "y1": 305, "x2": 220, "y2": 280, "typ": "run"}
      ],
      "zoner": ["backzon"]
    },
    {
      "beskrivning": "C tar emot och passar till F vid slottet. VB kliver framåt.",
      "spelare": [
        {"id": "VB", "team": "A", "label": "VB", "x": 220, "y": 175},
        {"id": "HB", "team": "A", "label": "HB", "x": 150, "y": 305},
        {"id": "C",  "team": "A", "label": "C",  "x": 310, "y": 240},
        {"id": "F",  "team": "A", "label": "F",  "x": 560, "y": 200},
        {"id": "M1", "team": "B", "label": "M1", "x": 460, "y": 175},
        {"id": "M2", "team": "B", "label": "M2", "x": 500, "y": 305},
        {"id": "M3", "team": "B", "label": "M3", "x": 580, "y": 210},
        {"id": "M4", "team": "B", "label": "M4", "x": 600, "y": 305}
      ],
      "boll": {"x": 310, "y": 240},
      "pilar": [
        {"x1": 310, "y1": 240, "x2": 560, "y2": 200, "typ": "arrow"},
        {"x1": 220, "y1": 175, "x2": 310, "y2": 200, "typ": "run"},
        {"x1": 310, "y1": 240, "x2": 380, "y2": 240, "typ": "run"}
      ],
      "zoner": ["slott"]
    }
  ]
}`;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
};

export default async function handler(req) {
  if (req.method === "OPTIONS") {
    return new Response("", { status: 200, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: corsHeaders,
    });
  }

  try {
    const body = await req.json();
    const mode = body.mode || "chat";

    // VIZ-läge: generera bara JSON för taktiktavlan
    if (mode === "viz") {
      const { ovningsnamn, spelform, formation, beskrivning } = body;

      // Positionskartor per formation – skickas med till AI:n
      const POSITIONER = {
        '3v3': {
          'Triangeln 1-2': [
            {id:'VB',team:'A',label:'VB',x:130,y:240},
            {id:'VF',team:'A',label:'VF',x:340,y:170},
            {id:'HF',team:'A',label:'HF',x:340,y:310},
            {id:'M1',team:'B',label:'M1',x:520,y:170},
            {id:'M2',team:'B',label:'M2',x:520,y:310},
            {id:'M3',team:'B',label:'M3',x:610,y:240}
          ],
          'Triangeln 2-1': [
            {id:'VB',team:'A',label:'VB',x:130,y:175},
            {id:'HB',team:'A',label:'HB',x:130,y:305},
            {id:'F', team:'A',label:'F', x:340,y:240},
            {id:'M1',team:'B',label:'M1',x:520,y:175},
            {id:'M2',team:'B',label:'M2',x:520,y:305},
            {id:'M3',team:'B',label:'M3',x:610,y:240}
          ],
        },
        '4v4': {
          'Boxen 2-2': [
            {id:'VB',team:'A',label:'VB',x:130,y:170},
            {id:'HB',team:'A',label:'HB',x:130,y:310},
            {id:'VF',team:'A',label:'VF',x:340,y:170},
            {id:'HF',team:'A',label:'HF',x:340,y:310},
            {id:'M1',team:'B',label:'M1',x:500,y:170},
            {id:'M2',team:'B',label:'M2',x:500,y:310},
            {id:'M3',team:'B',label:'M3',x:620,y:170},
            {id:'M4',team:'B',label:'M4',x:620,y:310}
          ],
          'Diamanten 1-2-1': [
            {id:'VB',team:'A',label:'VB',x:130,y:240},
            {id:'C1',team:'A',label:'C1',x:280,y:155},
            {id:'C2',team:'A',label:'C2',x:280,y:325},
            {id:'F', team:'A',label:'F', x:430,y:240},
            {id:'M1',team:'B',label:'M1',x:520,y:155},
            {id:'M2',team:'B',label:'M2',x:520,y:325},
            {id:'M3',team:'B',label:'M3',x:610,y:240},
            {id:'M4',team:'B',label:'M4',x:650,y:170}
          ],
          'Backbytet 2-1-1': [
            {id:'VB',team:'A',label:'VB',x:150,y:175},
            {id:'HB',team:'A',label:'HB',x:150,y:305},
            {id:'C', team:'A',label:'C', x:310,y:240},
            {id:'F', team:'A',label:'F', x:450,y:240},
            {id:'M1',team:'B',label:'M1',x:530,y:175},
            {id:'M2',team:'B',label:'M2',x:530,y:305},
            {id:'M3',team:'B',label:'M3',x:620,y:175},
            {id:'M4',team:'B',label:'M4',x:620,y:305}
          ],
        },
        '5v5': {
          'Klassisk 2-1-2': [
            {id:'VB',team:'A',label:'VB',x:120,y:160},
            {id:'HB',team:'A',label:'HB',x:120,y:320},
            {id:'C', team:'A',label:'C', x:260,y:240},
            {id:'VF',team:'A',label:'VF',x:400,y:160},
            {id:'HF',team:'A',label:'HF',x:400,y:320},
            {id:'M1',team:'B',label:'M1',x:500,y:160},
            {id:'M2',team:'B',label:'M2',x:500,y:320},
            {id:'M3',team:'B',label:'M3',x:580,y:240},
            {id:'M4',team:'B',label:'M4',x:630,y:160},
            {id:'M5',team:'B',label:'M5',x:630,y:320}
          ],
          'Styrspel 2-2-1': [
            {id:'VB',team:'A',label:'VB',x:120,y:160},
            {id:'HB',team:'A',label:'HB',x:120,y:320},
            {id:'C1',team:'A',label:'C1',x:260,y:175},
            {id:'C2',team:'A',label:'C2',x:260,y:305},
            {id:'F', team:'A',label:'F', x:390,y:240},
            {id:'M1',team:'B',label:'M1',x:500,y:160},
            {id:'M2',team:'B',label:'M2',x:500,y:320},
            {id:'M3',team:'B',label:'M3',x:580,y:240},
            {id:'M4',team:'B',label:'M4',x:630,y:160},
            {id:'M5',team:'B',label:'M5',x:630,y:320}
          ],
        },
        '5v4 Powerplay': {
          'Paraplyet 1-2-2': [
            {id:'VB',team:'A',label:'VB',x:200,y:240},
            {id:'C1',team:'A',label:'C1',x:340,y:160},
            {id:'C2',team:'A',label:'C2',x:340,y:320},
            {id:'VF',team:'A',label:'VF',x:490,y:160},
            {id:'HF',team:'A',label:'HF',x:490,y:320},
            {id:'M1',team:'B',label:'M1',x:540,y:185},
            {id:'M2',team:'B',label:'M2',x:540,y:295},
            {id:'M3',team:'B',label:'M3',x:620,y:155},
            {id:'M4',team:'B',label:'M4',x:620,y:325}
          ],
        },
        '4v5 Boxplay': {
          'Boxplay': [
            {id:'VB',team:'A',label:'VB',x:190,y:170},
            {id:'HB',team:'A',label:'HB',x:190,y:310},
            {id:'VF',team:'A',label:'VF',x:330,y:170},
            {id:'HF',team:'A',label:'HF',x:330,y:310},
            {id:'M1',team:'B',label:'M1',x:440,y:240},
            {id:'M2',team:'B',label:'M2',x:530,y:170},
            {id:'M3',team:'B',label:'M3',x:530,y:310},
            {id:'M4',team:'B',label:'M4',x:620,y:170},
            {id:'M5',team:'B',label:'M5',x:620,y:310}
          ],
        },
        '6v5': {
          'Överbelastning 2-1-3': [
            {id:'VB',team:'A',label:'VB',x:120,y:160},
            {id:'HB',team:'A',label:'HB',x:120,y:320},
            {id:'C', team:'A',label:'C', x:260,y:240},
            {id:'VF',team:'A',label:'VF',x:390,y:140},
            {id:'CF',team:'A',label:'CF',x:390,y:240},
            {id:'HF',team:'A',label:'HF',x:390,y:340},
            {id:'M1',team:'B',label:'M1',x:500,y:160},
            {id:'M2',team:'B',label:'M2',x:500,y:320},
            {id:'M3',team:'B',label:'M3',x:580,y:200},
            {id:'M4',team:'B',label:'M4',x:580,y:280},
            {id:'M5',team:'B',label:'M5',x:635,y:240}
          ],
        },
      };

      const startPos = POSITIONER[spelform]?.[formation] || POSITIONER['4v4']['Boxen 2-2'];
      const startPosStr = JSON.stringify(startPos, null, 2);

      const prompt = `Generera en taktiktavle-visualisering för följande innebandyövning:

Namn: ${ovningsnamn || "okänd övning"}
Spelform: ${spelform || "4v4"}
Formation: ${formation || "Boxen 2-2"}
Beskrivning: ${beskrivning || ""}

STARTPOSITIONER FÖR DENNA FORMATION (använd dessa som utgångspunkt):
${startPosStr}

Inkludera "spelform" och "formation" exakt som angivna ovan i JSON-svaret.
Generera MAX 3 steg med explicita x/y-koordinater för varje spelare i varje steg.
Flytta spelarna realistiskt baserat på övningsbeskrivningen.
Bollen placeras hos den spelare som har den (samma x/y).`;

      const response = await client.messages.create({
        model: "claude-sonnet-4-5",
        max_tokens: 2500,
        system: SYSTEM_PROMPT_VIZ,
        messages: [{ role: "user", content: prompt }],
      });

      const jsonText = response.content
        .filter((b) => b.type === "text")
        .map((b) => b.text)
        .join("\n")
        .trim();

      try {
        const clean = jsonText.replace(/^```json\n?/, "").replace(/\n?```$/, "").trim();
        const viz = JSON.parse(clean);
        return new Response(
          JSON.stringify({ visualization: viz, mode: "viz" }),
          { status: 200, headers: corsHeaders }
        );
      } catch (e) {
        console.error("VIZ JSON parse error:", e, jsonText);
        return new Response(
          JSON.stringify({ error: "Kunde inte generera visualisering", details: jsonText }),
          { status: 500, headers: corsHeaders }
        );
      }
    }

    // CHAT-läge: generera träningsförslag (text, ingen VIZ)
    let messages = [];
    if (mode === "chat") {
      const { history, teamProfile } = body;
      if (teamProfile && history && history.length > 0) {
        history[0].content = `[Lagkontext: ${JSON.stringify(teamProfile)}]\n\n` + history[0].content;
      }
      messages = history || [];
    } else if (mode === "quick") {
      const { tacticalData, teamProfile, logistics } = body;
      messages = [{ role: "user", content: buildQuickPrompt(tacticalData, teamProfile, logistics) }];
    }

    const response = await client.messages.create({
      model: "claude-sonnet-4-5",
      max_tokens: 1000,
      system: SYSTEM_PROMPT_CHAT,
      messages,
    });

    const text = response.content
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("\n");

    return new Response(
      JSON.stringify({ response: text, mode }),
      { status: 200, headers: corsHeaders }
    );

  } catch (error) {
    console.error("CoachCore AI error:", error);
    return new Response(
      JSON.stringify({
        error: "AI-motorn svarade inte. Försök igen.",
        details: error.message,
      }),
      { status: 500, headers: corsHeaders }
    );
  }
}

function buildQuickPrompt(tactical, team, logistics) {
  const parts = [];
  if (tactical) {
    parts.push(`TAKTIKDATA:
- Spelform: ${tactical.format || "okänd"}
- System: ${tactical.system_name || "ej namngivet"}
- Zoner: ${(tactical.zones || []).length} st`);
  }
  if (team) {
    parts.push(`LAGPROFIL:
- Svagheter: ${(team.team_weaknesses || []).join(", ") || "ej analyserade"}
- Spelare: ${team.player_count || "okänt"}`);
  }
  if (logistics) {
    parts.push(`LOGISTIK:
- Halltid: ${logistics.hall_time || 60} min
- Yta: ${logistics.area || "helplan"}`);
  }
  parts.push(`Föreslå EXAKT 1 övning med Smart Träning-poäng, CLA-regel och coachingfråga. Håll texten kort och konkret.`);
  return parts.join("\n\n");
}
