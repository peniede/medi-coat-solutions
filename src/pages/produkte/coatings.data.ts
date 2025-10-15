export type Coating = { name: string; color: string; hardness: string; thickness: string; corrosion: string; features: string[]; };
export const COATINGS: Coating[] = [
  { name: "TiN-mod (Titannitrid) – Der „Allrounder“", color: "goldgelb (L*/ a*/ b*: 76/ 4/ 38 ±5)", hardness: "3100 ±200 HV", thickness: "1 – 3 µm", corrosion: "gut",
    features: ["Guter Verschleißschutz","Sehr gut für Bauteile aus Ti und Ti-Legierungen geeignet","Bewährtes und sicheres Schichtsystem für Medizinprodukte"]},
  { name: "CrN-mod (Chromnitrid) – Die „Erfahrene“", color: "silbergrau (L*/ a*/ b*: 70/ 1/ 3 ±5)", hardness: "2700 ±200 HV", thickness: "1 – 8 µm", corrosion: "sehr gut",
    features: ["Gängigster Ersatz des galvanischen Hartchroms und Cr(VI)-frei","Geringer Reibungskoeffizient","Ästhetisches Aussehen der Metallic-Farbe"]},
  { name: "ZrN (Zirkonnitrid) – Die „Unterschätzte“", color: "weißgelb (L*/ a*/ b*: 87/ -2/ 23 ±5)", hardness: "2600 ±200 HV", thickness: "1 – 3 µm", corrosion: "sehr gut",
    features: ["Verbesserte Röntgensichtbarkeit im Vergleich zu TiN, DLC und CrN","Hohe Abriebsfestigkeit","Chemische Langzeitstabilität"]},
  { name: "CrN-MC (Chromoxinitrid) – Die „Starke“", color: "anthrazit-regenbogen (L*/ a*/ b*: 55/ -3/ -1 ±5)", hardness: "2600 ±200 HV", thickness: "1 – 3 µm", corrosion: "exzellent",
    features: ["Hervorragend geeignet auf Edelstahl (z. B. 1.4301)","Hydrophile Oberflächeneigenschaften (abhängig vom Bauteil)","Geeignet für eine Vielzahl medizinischer Instrumente / Produkte"]},
  { name: "DLC (a-C:H) – Der „Diamant“ (externer Partner)", color: "anthrazit (L*/ a*/ b*: 54/ 1/ 2 ±5)", hardness: "2000 ±200 HV", thickness: "1 – 3 µm", corrosion: "exzellent",
    features: ["Verschleiß- und korrosionsmindernden Eigenschaften","Hydrophobe Oberflächeneigenschaften","Sehr geringer Reibungskoeffizient"]},
];
export const STORAGE_KEY = "produktePortfolio.activeIdx";
