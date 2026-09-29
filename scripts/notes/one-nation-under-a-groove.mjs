import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Funkadelic",
  album: "One Nation Under A Groove",
  year: "1978",
  heading: "One Nation Under a Groove — Funkadelic (1978)",

  albumLine:
    "Released 22 September 1978 on Warner Bros., produced by George Clinton at United Sound in Detroit with a live side recorded at the Monroe Civic Center in Louisiana that April. Funk fused with psychedelic rock — their tenth album, and their biggest.",

  overview: [
    "Funkadelic and Parliament were the same people under two names, an arrangement George Clinton ran deliberately: Parliament made the horn-driven, science-fiction dance records, Funkadelic made the guitar ones. The collective around both was enormous and fluid — Bootsy Collins on bass, Garry Shider and Michael Hampton on guitars, and here Walter \"Junie\" Morrison's first appearance on keyboards. The Hendrix influence in Funkadelic is not implied: AllMusic's Steve Huey describes the album as \"full of fuzzed-out, Hendrix-style guitar licks,\" and that is the whole difference between the two bands.",

    "The title is doing real work. In 1978 disco had become the dominant commercial Black music and was already collecting a backlash that would turn ugly the following year; funk's relationship to it was competitive and slightly anxious. \"One nation under a groove\" answers both by claiming the dancefloor as a political space — a deliberate echo of the Pledge of Allegiance, proposing dancing as the thing that actually unites people, offered without irony and with a good deal of humour.",

    "Musically it is the point where the P-Funk method is most legible. Songs are built on long single-chord vamps with the bass carrying melody, guitars playing rock rather than funk figures over the top, and vocals passed between a dozen people in call-and-response. Sides shift between studio construction and live recording without announcing it.",

    "It topped the R&B chart, reached No. 16 on the Billboard 200 and went platinum — by some distance Funkadelic's most successful record. Huey calls it \"the best realization of Funkadelic's ambitions.\" Rolling Stone had it at 177 in their 500 greatest for two editions before moving it to 360. Its afterlife is mostly in hip-hop, where the P-Funk catalogue became one of the most sampled bodies of work in existence, and where Dr. Dre's G-funk was built almost entirely from it.",
  ],

  listeningNotes: [
    {
      label: "Rock guitar over funk rhythm",
      text: "Hampton and Shider play distorted, Hendrix-descended lead lines across grooves that would otherwise be pure dance music. That collision is what Funkadelic is for.",
    },
    {
      label: "Bass carrying the melody",
      text: "Bootsy Collins plays lead lines rather than root notes, high and rubbery with heavy envelope filtering, so the bottom of the record is also its hook.",
    },
    {
      label: "Vocals passed around a crowd",
      text: "A dozen voices trade lines and shout responses rather than one singer fronting the band — the congregation the title is describing.",
    },
    {
      label: "One-chord vamps at length",
      text: "Tracks sit on a single harmonic centre for minutes at a time and develop by adding parts, a structure taken from James Brown and extended.",
    },
    {
      label: "A live side inside a studio album",
      text: "Part of the record is a concert recording, and the shift in room sound is audible — the band's live identity treated as material rather than a bonus.",
    },
  ],

  sources: [
    { title: "One Nation Under a Groove — Wikipedia", url: "https://en.wikipedia.org/wiki/One_Nation_Under_a_Groove" },
    { title: "Funkadelic — Wikipedia", url: "https://en.wikipedia.org/wiki/Funkadelic" },
    { title: "Parliament-Funkadelic — Wikipedia", url: "https://en.wikipedia.org/wiki/Parliament-Funkadelic" },
  ],

  influencedBy: [
    { artist: "Jimi Hendrix", album: "Electric Ladyland", year: "1968", note: "The fuzzed, exploratory lead guitar that separates Funkadelic from every other funk band of the period." },
    { artist: "Sly & The Family Stone", album: "Stand!", year: "1969", note: "The model of a large mixed band trading lead vocals over rock-inflected funk with a political frame." },
    { artist: "James Brown", album: "Cold Sweat", year: "1967", note: "The one-chord vamp with every instrument playing rhythm, which P-Funk extended to album length." },
  ],

  influenced: [
    { artist: "Dr. Dre", album: "The Chronic", year: "1992", note: "G-funk is built almost entirely from the P-Funk catalogue — the whining synth lead and rubber bass are lifted directly." },
    { artist: "Prince", album: "Sign o' the Times", year: "1987", note: "The fusion of rock guitar with funk rhythm under a single band-leading auteur descends from Clinton's method." },
    { artist: "Red Hot Chili Peppers", album: "Blood Sugar Sex Magik", year: "1991", note: "Clinton produced an earlier album for them; rock guitar over slap-bass funk is the inheritance." },
  ],
});
