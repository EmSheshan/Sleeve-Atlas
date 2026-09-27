import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Tim Buckley",
  album: "Goodbye And Hello",
  year: "1967",
  heading: "Goodbye and Hello — Tim Buckley (1967)",

  albumLine:
    "Released in 1967 on Elektra, produced by Jerry Yester and Jac Holzman, recorded that June at Western Recorders and Whitney Studios in Los Angeles. It's folk-rock pulled toward psychedelia and baroque pop — Tim Buckley's second album, made at twenty.",

  overview: [
    "Buckley's first album had been a fairly conventional folk-rock record. This one abandons that almost entirely: orchestration, unusual metres, songs that run long and don't repeat their shapes, and a voice used as an instrument rather than a delivery system for words. He plays six- and twelve-string guitar, bottleneck, kalimba and vibraphone; Lee Underwood is on lead guitar and Jim Fielder on bass, with session players including Don Randi.",

    "A great deal of the record's character comes from Larry Beckett, Buckley's school friend and lyricist, who co-wrote several pieces including the title track. Beckett wrote in a dense, literary, deliberately ornate register — the kind of writing that dates a record precisely to 1967 and that Buckley himself moved away from afterwards. The partnership produced the album's most ambitious and most overreaching moments, sometimes in the same song.",

    "It's worth being careful about how directly this engages with its moment. One song, \"No Man Can Find the War,\" is explicitly about Vietnam and was co-written with Beckett; that much is clear. But the broader record isn't a protest album so much as a young musician absorbing everything available to him in mid-1967 — Elektra's baroque-pop house style, the jazz records Underwood was steeped in, the general licence psychedelia had granted to make songs strange. Reading the whole thing as a response to the war would be applying an era's mood to an album that mostly has other things on its mind.",

    "Commercially it barely registered: No. 171 on the Billboard chart across five weeks. Its standing came later and largely from other musicians, who heard in Buckley's vocal approach a way of using the voice that almost nobody in rock was attempting. AllMusic's Matthew Greenwald called it \"an excellent and revolutionary album that was a quantum leap.\" Buckley kept moving — toward jazz, then toward something much rawer — and died in 1975 at twenty-eight.",
  ],

  listeningNotes: [
    {
      label: "A voice with an enormous range",
      text: "Buckley moves from a low croon to a high, keening falsetto within phrases, and holds notes past where they should comfortably last. The voice is the lead instrument throughout.",
    },
    {
      label: "Metres that don't sit still",
      text: "Several songs move in unusual or shifting time signatures rather than straight four. You notice it as a slight inability to tap along — the phrases keep arriving a beat early or late.",
    },
    {
      label: "Baroque-pop orchestration",
      text: "Harpsichord, strings and woodwind appear in arrangements a folk singer wouldn't normally have access to. Elektra was building this sound across its roster at the time.",
    },
    {
      label: "Twelve-string as a drone",
      text: "Buckley's twelve-string is often strummed in open tunings that ring and blur rather than stating clean chords, giving several tracks an Eastern-leaning suspended quality.",
    },
    {
      label: "Songs that outstay pop length",
      text: "The longer pieces run well past three minutes and don't return to a chorus, moving through sections instead. It's closer to through-composed song than to verse-chorus writing.",
    },
    {
      label: "Beckett's ornate lyrics",
      text: "The words are elaborate and symbol-heavy, and the contrast with Buckley's later, plainer material is stark. Whether they soar or strain is the main thing listeners disagree about.",
    },
  ],

  sources: [
    { title: "Goodbye and Hello (Tim Buckley album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Goodbye_and_Hello_(Tim_Buckley_album)" },
    { title: "Tim Buckley — Wikipedia", url: "https://en.wikipedia.org/wiki/Tim_Buckley" },
    { title: "Goodbye and Hello — AllMusic", url: "https://www.allmusic.com/album/goodbye-and-hello-mw0000202593" },
  ],

  influencedBy: [
    { artist: "Bob Dylan", album: "Bringing It All Back Home", year: "1965", note: "The folk singer turning literary and electric — the permission structure every 1967 songwriter of this kind was working from." },
    { artist: "Love", album: "Forever Changes", year: "1967", note: "Elektra labelmates making the same year's other great baroque-psychedelic folk record with orchestral arrangements." },
  ],

  influenced: [
    { artist: "Jeff Buckley", album: "Grace", year: "1994", note: "His son, who never knew him, built a strikingly similar vocal approach — the wide range and sustained falsetto — from these records." },
    { artist: "Robert Plant", album: "Led Zeppelin III", year: "1970", note: "Plant has cited Buckley; the high, wordless, sustained vocal lines in acoustic rock come partly from here." },
  ],
});
