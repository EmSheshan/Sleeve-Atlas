import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Screaming Trees",
  album: "Dust",
  year: "1996",
  heading: "Dust — Screaming Trees (1996)",

  albumLine:
    "Released 25 June 1996 on Epic, produced by George Drakoulias after sessions with Don Fleming were abandoned, and recorded at Capitol and Sunset Sound in Hollywood and the Hit Factory in New York. Hard rock with folk and blues pulled through it — their seventh album, and their last for twenty years.",

  overview: [
    "They were from Ellensburg, a small town in central Washington, and had been going since 1985 — which made them older than almost everyone they got lumped in with. When Seattle became a marketable idea in 1991 the Screaming Trees were already a psychedelic punk band with half a dozen records behind them, and the grunge label never fitted: Mark Lanegan sang in a deep, weathered baritone with nothing adolescent in it, and the Conner brothers, Gary Lee on guitar and Van on bass, wrote from sixties garage rock rather than from hardcore.",

    "By 1996 the moment had passed and the band were in poor shape — the first attempt at this album was scrapped entirely. What Drakoulias got out of the second attempt is their best record, and it works by abandoning the scene they had been filed under. Folk and blues structures carry most of it, with Benmont Tench, the Heartbreakers' keyboard player, adding organ and piano, and Mike McCready of Pearl Jam guesting on a solo. There are sitars and strings. It sounds like a band that has stopped trying to be young.",

    "That timing is the whole story of the record's reception. Alternative rock in 1996 was collapsing into either post-grunge formula or Britpop, and an album this rooted and this unfashionable was never going to chart — it stalled at No. 134 in America. Critics knew exactly what it was: NME gave it 9 out of 10 and Kerrang! made it their album of the year.",

    "They toured it for two years, went on hiatus and dissolved in 2000. Lanegan went on to a long second career as a solo singer and collaborator, and the reputation of his voice largely rests on what he does here. It is the sort of album that gets described as underrated for so long that the description becomes the received view.",
  ],

  listeningNotes: [
    {
      label: "Lanegan's baritone",
      text: "Low, gravelled and unhurried, sung well behind the beat. He never shouts, which in 1996 was itself a position.",
    },
    {
      label: "Organ and piano underneath",
      text: "Benmont Tench's keyboards fill the middle of the arrangements, giving a rock band a warmth and body that guitars alone wouldn't.",
    },
    {
      label: "Sitar and strings",
      text: "Eastern-sounding textures and orchestration appear on several tracks — a return to the band's psychedelic roots rather than a grunge move.",
    },
    {
      label: "Blues structures at rock volume",
      text: "Many songs sit on modal riff figures and twelve-bar-adjacent movement, played heavy but never fast.",
    },
    {
      label: "Space in the mix",
      text: "Drakoulias records the band dry and separated rather than as one wall, so each instrument is audible and nothing is buried.",
    },
  ],

  sources: [
    { title: "Dust (Screaming Trees album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Dust_(Screaming_Trees_album)" },
    { title: "Screaming Trees — Wikipedia", url: "https://en.wikipedia.org/wiki/Screaming_Trees" },
    { title: "Mark Lanegan — Wikipedia", url: "https://en.wikipedia.org/wiki/Mark_Lanegan" },
  ],

  influencedBy: [
    { artist: "The Doors", album: "The Doors", year: "1967", note: "Organ-led psychedelic rock behind a deep, declamatory male voice — the clearest structural model." },
    { artist: "Led Zeppelin", album: "Led Zeppelin III", year: "1970", note: "The precedent for a heavy band turning towards folk and acoustic blues without losing weight." },
  ],

  influenced: [
    { artist: "Queens of the Stone Age", album: "Songs for the Deaf", year: "2002", note: "Lanegan joined the band and sings on it; the heavy-but-unhurried desert rock register carries over directly." },
  ],
});
