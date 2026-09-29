import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Otis Redding",
  album: "Otis Blue/Otis Redding Sings Soul",
  year: "1965",
  heading: "Otis Blue — Otis Redding (1965)",

  albumLine:
    "Released 15 September 1965 on Volt, produced by Jim Stewart with Steve Cropper engineering, and cut almost entirely in about 22 hours across two sessions on 9 and 10 July at the Stax studio in Memphis. His third album, and the record Southern soul is usually measured against.",

  overview: [
    "The speed is not a novelty detail; it is the method. Stax worked with a house band who played together every day — Booker T. Jones on organ, Steve Cropper on guitar, Donald \"Duck\" Dunn on bass and Al Jackson Jr. on drums, with Isaac Hayes on piano and the Memphis Horns — and arrangements were worked out in the room rather than written down. An album in a day and a night was possible because nobody needed telling what to play.",

    "Sam Cooke had been shot dead in December 1964, seven months before these sessions, and three of the eleven tracks are his. That makes the album partly a memorial and partly a statement of succession: Cooke had been the model for moving gospel technique into secular song, and Redding is both saluting him and demonstrating a rougher, harder-pushed way of doing the same thing.",

    "Only three tracks are Redding originals, and one of them is \"Respect\" — which Aretha Franklin recorded two years later, rearranged it so completely, and turned into something Redding himself acknowledged she had taken from him. That the most famous song here is better known in someone else's version is a fair emblem of how Stax worked: the song was material, and the performance was the point.",

    "It topped the R&B chart and sold over 250,000 copies — substantial for a soul album in 1965, and nothing like the pop numbers Motown was doing in the same years with a far more controlled product. Its standing has only risen since; it sits on Rolling Stone's 500 greatest and Time's all-time 100. Redding died in a plane crash in December 1967, aged 26, weeks after recording \"(Sittin' On) The Dock of the Bay.\"",
  ],

  listeningNotes: [
    {
      label: "Redding pushing his voice past comfort",
      text: "He sings hoarse and at full effort, letting notes break rather than easing off. The strain is the expressive device, not a limitation.",
    },
    {
      label: "The Stax horn sound",
      text: "Punchy unison riffs, arranged on the spot, answering the vocal line rather than padding underneath it — the defining Memphis signature.",
    },
    {
      label: "Al Jackson Jr.'s drumming",
      text: "Dead-centre, unhurried, almost no fills. The band's whole feel rests on a drummer who refuses to decorate anything.",
    },
    {
      label: "Cropper's guitar as punctuation",
      text: "Short, clean, single-note figures placed in the gaps rather than chords underneath, which leaves enormous space in the arrangements.",
    },
    {
      label: "Covers taken somewhere else",
      text: "Songs by Sam Cooke, the Rolling Stones and others are rebuilt rather than reproduced, which in 1965 was how a soul album was normally assembled.",
    },
  ],

  sources: [
    { title: "Otis Blue — Wikipedia", url: "https://en.wikipedia.org/wiki/Otis_Blue" },
    { title: "Otis Redding — Wikipedia", url: "https://en.wikipedia.org/wiki/Otis_Redding" },
    { title: "Booker T. & the M.G.'s — Wikipedia", url: "https://en.wikipedia.org/wiki/Booker_T._%26_the_M.G.%27s" },
  ],

  influencedBy: [
    { artist: "Sam Cooke", album: "Live at the Harlem Square Club, 1963", year: "1963", note: "Three of his songs are here; Cooke's move from gospel into secular song is the template Redding is working from and roughening." },
    { artist: "Booker T. & the M.G.s", album: "Green Onions", year: "1962", note: "The same band, and the source of the spare, space-heavy Memphis arrangement style." },
  ],

  influenced: [
    { artist: "Aretha Franklin", album: "I Never Loved a Man the Way I Love You", year: "1967", note: "Her version of \"Respect\" rebuilt his song entirely; Redding said publicly that she had taken it from him." },
    { artist: "Dexys Midnight Runners", album: "Searching For The Young Soul Rebels", year: "1980", note: "The Stax horn-section template and the model of a singer whose audible effort is the point." },
    { artist: "The Rolling Stones", album: "Beggars Banquet", year: "1968", note: "Redding's reworking of their own song fed directly back into how the band approached soul material." },
  ],
});
