import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Common",
  album: "Like Water For Chocolate",
  year: "2000",
  heading: "Like Water for Chocolate — Common (2000)",

  albumLine:
    "Released 28 March 2000 on MCA, executive-produced by Questlove with most of the beats by J Dilla and further production from James Poyser and DJ Premier. It's conscious hip-hop grounded in live soul playing — his fourth album, his first for a major, and the record that made the Soulquarians a public thing.",

  overview: [
    "The Soulquarians were a loose collective working out of Electric Lady in New York — Questlove, J Dilla, James Poyser, D'Angelo, the bassist Pino Palladino and others — and this is where their method arrives fully formed. Instead of a rapper over sampled loops, the tracks are played by musicians who groove deliberately slightly behind the beat, a feel Dilla built into his programming and Questlove learned to reproduce on a kit. It makes the whole record sound like it is leaning backwards.",

    "Common named it after Laura Esquivel's 1989 novel, in which a cook's emotions pass into her food, and glossed the title twice: \"I put all my heart, my mind and my rawness\" into it, and separately that it stood for \"the water side in me, which is a Pisces, and the chocolate represents the soul, the blackness in the music.\" The cover is Gordon Parks's 1956 photograph of a young Black woman in Alabama, dressed for church, drinking from a \"Colored Only\" fountain — which tells you the register before a note plays.",

    "The politics are specific rather than atmospheric. One track is a tribute to Fela Kuti; another is addressed to Assata Shakur, the former Black Liberation Army member convicted of murder in 1977 who escaped prison and has lived in Cuba since 1984 — a subject almost nothing else on a major label in 2000 would touch. Around it, the album is unusually willing to make its author look bad, and reviewers noticed: he was described as \"a hip-hop MC willing to actually examine himself.\"",

    "The timing mattered. In 2000 commercial rap was dominated by high-gloss, high-budget production, and an album of live-played, deliberately unquantised soul with a civil rights photograph on the cover was a position statement. It sold 70,000 in its first week and was gold by August — modest numbers that nonetheless made the case that the approach could work outside the underground. Pitchfork later placed it 169th among the decade's best albums, and everything that followed for Dilla, Erykah Badu and D'Angelo runs through this room.",
  ],

  listeningNotes: [
    {
      label: "Drums a fraction behind the beat",
      text: "Dilla programmed without quantising and Questlove played to match, so the groove drags very slightly. That lurch is the Soulquarian signature.",
    },
    {
      label: "Played, not looped",
      text: "Live bass, keys and drums replace sampled breaks on most tracks, which is why the arrangements breathe and shift rather than repeating exactly.",
    },
    {
      label: "Pino Palladino's fretless bass",
      text: "Rounded, sliding low notes with no fret click, sitting deep under everything. It's the warmest element on the record.",
    },
    {
      label: "Common's conversational delivery",
      text: "He raps close to speech, often ending lines early and letting the bar finish empty, which puts the emphasis on what's being said.",
    },
    {
      label: "Guests used as texture",
      text: "Sung hooks and spoken passages from the collective's singers drift in without being announced as features, treated as another instrument.",
    },
    {
      label: "A tribute in Afrobeat time",
      text: "The Fela Kuti piece borrows the long instrumental build and horn punctuation of Africa '70 rather than sampling it.",
    },
  ],

  sources: [
    { title: "Like Water for Chocolate (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Like_Water_for_Chocolate_(album)" },
    { title: "Soulquarians — Wikipedia", url: "https://en.wikipedia.org/wiki/Soulquarians" },
    { title: "Gordon Parks — Wikipedia", url: "https://en.wikipedia.org/wiki/Gordon_Parks" },
  ],

  influencedBy: [
    { artist: "A Tribe Called Quest", album: "The Low End Theory", year: "1991", note: "The jazz-informed, bass-forward, conversational alternative to hard rap that this record inherits directly." },
    { artist: "Fela Kuti", album: "Zombie", year: "1977", note: "Explicitly saluted on the album, and the source of its long-form Afrobeat feel." },
    { artist: "Marvin Gaye", album: "What's Going On", year: "1971", note: "The template for a soul record that is political without being a lecture, and plays as one continuous piece." },
  ],

  influenced: [
    { artist: "Kanye West", album: "The College Dropout", year: "2004", note: "Soul-sampling, self-examining, major-label conscious rap — West went on to produce Common's next album." },
    { artist: "Erykah Badu", album: "Mama's Gun", year: "2000", note: "Made by the same collective in the same room months later, with the same live, behind-the-beat feel." },
    { artist: "Kendrick Lamar", album: "To Pimp a Butterfly", year: "2015", note: "Live players, jazz and funk musicians, and an explicitly political frame — the lineage is unbroken." },
  ],
});
