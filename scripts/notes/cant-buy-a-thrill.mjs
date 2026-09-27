import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Steely Dan",
  album: "Can't Buy A Thrill",
  year: "1972",
  heading: "Can't Buy a Thrill — Steely Dan (1972)",

  albumLine:
    "Released in November 1972 on ABC Records, produced by Gary Katz and engineered by Roger Nichols, recorded at the Village Recorder in Los Angeles that August. It's rock built on jazz harmony — Steely Dan's debut, and the only one of their records made by something resembling a working band.",

  overview: [
    "Walter Becker and Donald Fagen were songwriters before they were a group. They had been hired as staff writers at ABC/Dunhill, an arrangement neither enjoyed, and their producer Gary Katz effectively assembled a band around them so they could record their own material. That origin explains a lot: the songs came first, the band was a means, and within two albums Becker and Fagen would abandon the band format entirely in favour of hired session players.",

    "What made them peculiar in 1972 was the harmony. American rock ran on blues-derived chords; these songs use extended and altered jazz voicings — the sort of thing found in bebop rather than on FM radio — under melodies catchy enough to chart. The lyrics were similarly out of step: elliptical, sardonic, populated by losers and hustlers, and delivered with a dryness that gave no clue how seriously to take them.",

    "The band itself was unusually capable — Jeff Baxter on guitar and pedal steel, Denny Dias on guitar, Jim Hodder on drums, with Elliott Randall brought in for several lead parts. One detail from the sessions is telling about where this was heading: Fagen was reluctant to be the frontman, so David Palmer was recruited mid-project to sing lead on two tracks. Fagen took over permanently afterwards, and his flat, nasal delivery became inseparable from the band's identity.",

    "It worked immediately. \"Do It Again\" reached No. 6 and \"Reelin' In the Years\" No. 11, the album hit No. 17 and eventually went platinum. Critics have generally treated it as the sound of a group still assembling itself — the stylistic range is wide, taking in Latin rhythm, straight rock, ballads and blues — which is fair, and also why it's warmer and looser than the immaculate records that followed.",
  ],

  listeningNotes: [
    {
      label: "Jazz chords under pop melodies",
      text: "The harmony uses extended and altered voicings borrowed from jazz rather than blues-based rock chords. It's why the songs sound sophisticated even when the hooks are simple.",
    },
    {
      label: "The electric sitar solo",
      text: "\"Do It Again\" features a solo played on an electric sitar, a buzzing drone-heavy instrument, over a Latin-leaning groove — a genuinely strange choice for a top-ten American single.",
    },
    {
      label: "Two different lead singers",
      text: "David Palmer sings lead on two tracks while Fagen takes the rest. Palmer's warmer, more conventional voice makes the contrast with Fagen's dry delivery obvious.",
    },
    {
      label: "Pedal steel out of context",
      text: "Baxter plays pedal steel, a country instrument, on material that isn't remotely country, using it for smooth melodic lines rather than twang.",
    },
    {
      label: "Precision over feel",
      text: "Even at this early stage the performances are unusually tidy, with little of the looseness most 1972 rock records carry. That instinct would harden into method on later albums.",
    },
    {
      label: "Lyrics that withhold",
      text: "The words describe situations without explaining them, and the tone stays deadpan throughout. You get characters and fragments rather than a story you can settle.",
    },
  ],

  sources: [
    { title: "Can't Buy a Thrill — Wikipedia", url: "https://en.wikipedia.org/wiki/Can%27t_Buy_a_Thrill" },
    { title: "Steely Dan — Wikipedia", url: "https://en.wikipedia.org/wiki/Steely_Dan" },
    { title: "Can't Buy a Thrill — AllMusic", url: "https://www.allmusic.com/album/cant-buy-a-thrill-mw0000189507" },
  ],

  influencedBy: [
    { artist: "Miles Davis", album: "Kind of Blue", year: "1959", note: "The modal and extended jazz harmony Becker and Fagen imported wholesale into rock songwriting." },
    { artist: "The Beatles", album: "Revolver", year: "1966", note: "The precedent for studio-minded pop songwriting with unconventional instrumentation and harmonic left turns." },
  ],

  influenced: [
    { artist: "Steely Dan", album: "Aja", year: "1977", note: "Their own later record, where the session-musician method hinted at here is taken to its logical conclusion." },
    { artist: "Donald Fagen", album: "The Nightfly", year: "1982", note: "Fagen's solo continuation of the same harmonic and lyrical approach." },
    { artist: "Mac DeMarco", album: "Salad Days", year: "2014", note: "Part of the later indie generation that took up Steely Dan's jazz-chord songwriting and deadpan delivery." },
  ],
});
