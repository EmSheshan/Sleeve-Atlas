import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "David Bowie",
  album: "Hunky Dory",
  year: "1971",

  heading: "Hunky Dory — David Bowie (1971)",

  albumLine:
    "Released in the UK on 17 December 1971 by RCA and co-produced by Bowie with Ken Scott, the engineer on his two previous records and a first-time producer here. It's art pop built around a piano rather than a guitar — his fourth album, sitting between the hard rock of The Man Who Sold the World and the glam of Ziggy Stardust. Sources differ: some give 17 November.",

  overview: [
    "Bowie went into 1971 with almost nothing in place. After finishing The Man Who Sold the World in May 1970 he lost his band — producer and bassist Tony Visconti, guitarist Mick Ronson and drummer Mick Woodmansey all walked that August — and his publishing deal had lapsed. Manager Tony Defries forced the end of his Mercury contract in May 1971 by threatening to deliver a deliberately poor album, cleared the debts, and shopped the finished record around until RCA signed Bowie that September. Label head Dennis Katz had never heard of him.",

    "The songs came out of a promotional radio tour of America that Mercury sent him on in February 1971. Bowie said in 1999 that the album \"reflected my newfound enthusiasm for this new continent that had been opened up to me,\" and that it was the first time an outside situation had changed how he wrote. Three Americans got tribute songs: artist Andy Warhol, songwriter Bob Dylan — addressed by his birth name, Robert Zimmerman — and the Velvet Underground, acknowledged in Bowie's handwritten sleeve note, \"some V.U. White Light returned with thanks.\" Around them he piled Friedrich Nietzsche's Übermensch, the occultist Aleister Crowley and the Golden Dawn. He wrote most of it at Haddon Hall in Beckenham, at a piano rather than an acoustic guitar — his then-wife Angela Bowie's recollection, and the reason the record sounds as it does.",

    "RCA then barely promoted it, wary of the cover and of warnings that their new artist was about to change image again. It failed to reach the UK chart at all, and biographer Christopher Sandford reports it sold barely 5,000 copies in its first quarter — despite strong reviews. Critic Robert Christgau, in The Village Voice, called Bowie \"a singer-composer with brains, imagination, and a good idea of how to use a recording console,\" and critic Danny Holloway wrote in NME that he was \"not following trends – he's setting them.\" Only once Ziggy Stardust broke in mid-1972 did the public catch up: it then climbed to No. 3 in Britain and stayed 69 weeks, two places higher than Ziggy itself.",
  ],

  listeningNotes: [
    {
      label: "Piano in front, guitar behind it",
      text: "Session pianist Rick Wakeman, weeks from joining Yes, plays the 1898 Bechstein at Trident Studios that Paul McCartney had used on \"Hey Jude.\" Credits disagree over which parts are his: Wakeman and Bowie have both been credited with the piano on \"Oh! You Pretty Things.\"",
    },
    {
      label: "Ronson's first string arrangements",
      text: "Ronson, the guitarist, wrote the orchestral parts instead of an outside arranger being hired. The strings on \"Life on Mars?\" were his first attempt at it, and writer Peter Doggett calls the result gargantuan.",
    },
    {
      label: "Vocals kept on the first pass",
      text: "Scott said of Bowie that he was \"the only singer I ever worked with where virtually every take was a master.\"",
    },
    {
      label: "Stacked acoustic guitars",
      text: "Scott had engineered George Harrison's All Things Must Pass and borrowed its acoustic sound, piling layer on layer at his own insistence — densest on \"Quicksand,\" where massed strumming does the work a drum kit would.",
    },
    {
      label: "Studio chatter left in",
      text: "\"Andy Warhol\" opens with Scott announcing take one and mispronouncing the name, Bowie correcting him on tape. Scott also plays the ARP synthesiser on it.",
    },
    {
      label: "The one guitar-led song",
      text: "Near the end of side two the piano drops away for a scuzzy Velvet Underground pastiche. Daryl Easlea of BBC Music writes that this is where the glam of Ziggy Stardust is already audible.",
    },
  ],

  sources: [
    { title: "Classic Albums: David Bowie — Hunky Dory, Anna Wilson, Clash", url: "https://www.clashmusic.com/features/classic-albums-david-bowie-hunky-dory/" },
    { title: "Hunky Dory — Wikipedia", url: "https://en.wikipedia.org/wiki/Hunky_Dory" },
  ],

  influencedBy: [
    { artist: "The Velvet Underground", album: "White Light/White Heat", year: "1968", note: "Acknowledged by name on the sleeve. The album's one guitar-led song copies the deadpan, chugging two-chord manner of singer and guitarist Lou Reed outright." },
    { artist: "Bob Dylan", album: "Bob Dylan", year: "1962", note: "Bowie's tribute parodies the title of \"Song to Woody\" from this record and works in Dylanesque chord changes and plain-spoken second-person address." },
    { artist: "Frank Sinatra", album: "My Way", year: "1969", note: "The sleeve note reads \"Inspired by Frankie\": the album's big ballad is a parody of \"My Way,\" using the same chord sequence in its opening bars." },
  ],

  influenced: [
    { artist: "Eurythmics", album: "Sweet Dreams (Are Made of This)", year: "1983", note: "Guitarist and producer Dave Stewart said in 1999 that he loved the sound of this album and still used it as a reference point for his own records." },
    { artist: "Elbow", album: "The Seldom Seen Kid", year: "2008", note: "Singer Guy Garvey named it the album that influenced him most; the piano-led songwriting with strings scored by a band member rather than an outside arranger follows the same model." },
  ],
});
