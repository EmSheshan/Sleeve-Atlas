import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "The Icarus Line",
  album: "Penance Soiree",
  year: "2004",
  heading: "Penance Soiree — The Icarus Line (2004)",

  albumLine:
    "Released 2 May 2004 on V2, produced by Michael Musmanno with the band and mixed by Alan Moulder. Garage rock with the noise-rock plumbing left exposed. It's the Icarus Line's second album and their first for a major, after Mono (2001) came out on their friends' label Buddyhead.",

  overview: [
    "The Icarus Line formed in Los Angeles in 1998, out of the wreckage of a band whose drummer, Tim Childs, had died in a car crash the year before. Mono, recorded in 2000 with producers Mark Trombino and Alex Newport, was hardcore in the Californian lineage — critic Wilson Drozdowski called it \"a full on sonic assault, channeling Drive Like Jehu, The Stooges and The Jesus Lizard.\" What the band were better known for was damage. At SXSW in Austin, singer Joe Cardamone's bandmate, guitarist Aaron North, broke open a display case at the Hard Rock Cafe and pulled out one of Stevie Ray Vaughan's guitars. Drummer Jeff Watson quit soon after.",

    "Penance Soiree is the record where that fury slows down and turns lecherous. Nothing here is faster than it needs to be; the guitars sprawl rather than stab. Critics heard a very specific set of ancestors in it — Drozdowski kept the Jesus Lizard comparison but added \"a bit of Stone Roses and old school rock 'n roll,\" plus \"more reverb,\" and heard Spiritualized and Spacemen 3 in the slower stretches. The band's own account of their influences is less documented than the comparisons made for them; what's clear from the record is that the thing it was arguing with was their own previous album, not a scene.",

    "It was recorded across 2003 in a scatter of rooms — Hollywood, Highland Park, Torrance, Silverlake — and then shipped to London, where Alan Moulder mixed it at Eden Studios with Cardamone and North in the room and added some last-minute recording of his own. One song was remixed back in Los Angeles by Ken Andrews after the band got home and decided they hated Moulder's version; Howie Weinberg mastered it in New York. Reviews ran hot: Metacritic gathered an 81, Drowned in Sound's Mike Diver gave it ten out of ten and called it \"the album no one was brave enough to make,\" Mojo and Alternative Press were nearly as enthusiastic. Drozdowski was the dissent, filing it as \"a slightly above mediocre record\" and \"dirty, nasty, and monotonous.\" No chart placing is documented for it. It was North's last album with the band — he left in 2005 and joined Nine Inch Nails — and the Icarus Line carried on until 2015. Guitarist Alvin DeGuzman died in 2017.",
  ],

  listeningNotes: [
    {
      label: "Moulder's reverb depth",
      text: "Nearly the whole record was mixed in London by Alan Moulder, who drowns it. Guitars, voice and room blur into a single wash instead of sitting in separate lanes, which is why something this loud ends up feeling narcotic rather than sharp.",
    },
    {
      label: "Two guitars smeared into one",
      text: "Aaron North and Alvin DeGuzman mostly refuse the rhythm-and-lead split, playing overlapping figures that cancel each other into haze. It's the quality that had reviewers reaching for the Jesus and Mary Chain.",
    },
    {
      label: "Saxophone as noise, not solo",
      text: "Jon Wahl plays saxophone on \"White Devil,\" but never as a featured voice — it's shoved in alongside the guitars as one more squalling texture.",
    },
    {
      label: "A drum machine under a live kit",
      text: "\"Meatmaker\" sets programmed 808 pulse against the played drums. Wilson Drozdowski, otherwise unimpressed, singled it out as the one thing that breaks the record's repetition.",
    },
    {
      label: "Vocals buried inside the band",
      text: "Joe Cardamone sits level with the guitars rather than over them, so the words arrive mostly as texture. Drozdowski reviewed the album without a lyric sheet and admitted he could only make out fragments.",
    },
  ],

  sources: [
    { title: "Penance Soiree — Wikipedia", url: "https://en.wikipedia.org/wiki/Penance_Soiree" },
    { title: "The Icarus Line — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Icarus_Line" },
    { title: "Mike Diver, album review — Drowned in Sound", url: "https://www.drownedinsound.org/archive-album-review-the-icarus-line-penance-soiree-9142/" },
    { title: "Wilson Drozdowski, album review — Treble", url: "https://www.treblezine.com/the-icarus-line-penance-soiree/" },
  ],

  influencedBy: [
    { artist: "The Stooges", album: "Fun House", year: "1970", note: "The template reviewers named repeatedly: slow, sleazy two-guitar rock with a saxophone used as abrasion rather than melody." },
    { artist: "The Jesus Lizard", album: "Goat", year: "1991", note: "Carried over from the band's debut — the lurching, bass-anchored noise rock underneath a vocalist mixed into the band rather than above it." },
    { artist: "The Jesus and Mary Chain", album: "Psychocandy", year: "1985", note: "The washed-out, reverb-smothered guitar sound critics heard here, where two guitars blur into one texture." },
    { artist: "The Birthday Party", album: "Junkyard", year: "1982", note: "Named as an influence on the band's turn here: theatrical menace and a swampy, dragging groove in place of hardcore speed." },
  ],

  influenced: [],
});
