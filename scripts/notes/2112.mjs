import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Rush",
  album: "2112",
  year: "1976",
  heading: "2112 — Rush (1976)",

  albumLine:
    "Released 24 March 1976 on Mercury Records, produced by Rush with longtime engineer Terry Brown and recorded that January at Toronto Sound Studios. Side one is a seven-part, twenty-minute science-fiction suite; side two is five short, harder songs. It's the album a band on the edge of being dropped made when they stopped trying to sound like the radio.",

  overview: [
    "The context is blunt: 1975's Caress of Steel had flopped, the tour that followed was nicknamed the Down the Tubes Tour by the band itself, and Mercury Records' parent company, PolyGram, had reportedly left Rush off its sales projections for the coming year entirely. Manager Ray Danniels talked the label into one more record. Mercury wanted something commercial. Rush, by Alex Lifeson's account, decided instead: \"We're going to make 2112 and if we go down in flames then at least they're our flames.\"",

    "What they made was a side-long title suite — Overture, The Temples of Syrinx, Discovery, Presentation, Oracle: The Dream, Soliloquy, Grand Finale — about a future where life is administered by priests of a computer-god called Syrinx, and a man who finds a guitar and rediscovers music and individual will. Side two drops the concept entirely for five compact songs: a drug travelogue (\"A Passage to Bangkok\"), a Rod Serling tribute, a Mellotron ballad, and a closing anthem of self-reliance. It is a hard pivot from epic to single-length song inside one record.",

    "The title track's debt to Ayn Rand is specific, not vague mood-borrowing: Neil Peart has said the parallels to her novella Anthem — a lone creator rediscovering what a collectivist society has suppressed — became obvious enough as he wrote the lyrics that he added a line to the sleeve to head off any accusation of plagiarism. The liner notes read, exactly: \"With acknowledgement to the genius of Ayn Rand.\" It cost them later — NME critic Barry Miles called the record fascist, which Geddy Lee, whose parents survived the Holocaust, pushed back on hard, insisting the story was anti-totalitarian rather than an endorsement of any regime.",

    "It worked commercially in a way nothing the band had done before had: 2112 went on to sell four million copies in the US alone, Rush's second-biggest seller after Moving Pictures, and the tour that followed finally sold out rooms. Rolling Stone's readers later ranked it the second-favorite progressive rock album ever made, and it sits in the 1001 Albums canon as the record that bought Rush the creative freedom to keep making Hemispheres and A Farewell to Kings on their own terms. Its fingerprints are all over the heavier end of prog that came after — Dream Theater and Metallica both point to this record specifically as the moment technical hard rock and science-fiction ambition became the same thing.",
  ],

  listeningNotes: [
    {
      label: "Overture's cold open",
      text: "Hugh Syme's ARP Odyssey and Mellotron swell before any riff lands, a synth intro that was unusual for a trio this guitar-driven in 1976.",
    },
    {
      label: "Temples of Syrinx",
      text: "The hook of the whole suite: a snarling, downtuned riff under Geddy Lee's shrillest, most deliberately inhuman vocal, voicing the computer-priests themselves.",
    },
    {
      label: "The side flips completely",
      text: "After twenty minutes of suite, \"A Passage to Bangkok\" opens side two as a loose, almost funky riff about drug tourism — a tonal reset that tells you the concept is over.",
    },
    {
      label: "Twilight Zone's economy",
      text: "A tight, verse-chorus tribute to Rod Serling's show, proof the band could still write a normal three-minute song when they wanted to.",
    },
    {
      label: "Tears, the one soft track",
      text: "Mellotron strings carry a ballad that is almost out of character for the record — the quietest thing on either side.",
    },
    {
      label: "Something for Nothing's closing line",
      text: "The last song states the album's individualist moral directly — nothing is free, no one owes you anything — the Rand influence surfacing again outside the title suite.",
    },
  ],

  sources: [
    { title: "2112 (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/2112_(album)" },
    { title: "2112 (song) — Wikipedia", url: "https://en.wikipedia.org/wiki/2112_(song)" },
    { title: "A Look Back at Rush's '2112' — Ultimate Classic Rock", url: "https://ultimateclassicrock.com/a-look-back-at-rushs-2112/" },
    { title: "Rush: 2112 — Album Lyrics and Liner Notes — Cygnus-X1.net", url: "https://www.cygnus-x1.net/links/rush/albums-2112.php" },
  ],

  influencedBy: [
    { artist: "Yes", album: "Close to the Edge", year: "1972", note: "The side-long suite built from named movements is the structural template 2112 works from most directly." },
    { artist: "King Crimson", album: "Lizard", year: "1970", note: "Rush has cited discovering King Crimson as part of what pushed them toward long-form, multi-section composition." },
    { artist: "The Who", album: "Tommy", year: "1969", note: "Peart pointed to Tommy and Quadrophenia as proof a hard rock band could sustain an epic narrative piece." },
  ],

  influenced: [
    { artist: "Dream Theater", album: "Images and Words", year: "1992", note: "Dream Theater have repeatedly named 2112-era Rush as the model for fusing technical metal chops with science-fiction ambition." },
    { artist: "Metallica", album: "Master of Puppets", year: "1986", note: "Metallica's members have cited Rush's technical, riff-driven prog-metal hybrid on records like this one as a direct influence." },
    { artist: "Iron Maiden", album: "Powerslave", year: "1984", note: "Part of the same lineage of long-form, narrative hard rock that 2112 helped legitimize for a metal audience." },
  ],
});
