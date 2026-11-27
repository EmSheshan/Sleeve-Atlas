import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Rage Against The Machine",
  album: "Rage Against The Machine",
  year: "1992",
  heading: "Rage Against the Machine — Rage Against the Machine (1992)",

  albumLine:
    "Released in November 1992 (Wikipedia says the 3rd) on Epic Records, and produced by Garth Richardson, a producer, with the band. It's rap metal and funk metal, and it's their debut album.",

  overview: [
    "Wikipedia says the album was cut mainly at Sound City in Van Nuys, with extra recording at Scream Studios and Industrial Recording, and it is based largely on the band's demo tape, with earlier versions of seven of its ten songs. Recording dates vary: Wikipedia says April to May 1992, while writer Dave Everley of Louder says it began in March. A sleeve note says there were \"no samples, keyboards or synthesizers used in the making of this record.\" Guitarist Tom Morello said, per Louder's Mörat, \"Any trippy noises you happen to hear on this record are coming from this band!\"",

    "The studio takes felt too clinical, so Richardson brought in a full concert PA, and Morello, quoted by Neil Johnson of Riffology from a 2012 SPIN interview, said, \"The way we turned the corner was one night we invited a bunch of friends into the studio and basically just played the set.\" Johnson says that session produced about half the basic tracks. Richardson said, via Johnson, \"The problem is that sometimes Zack's voice went. He was working it so hard,\" meaning singer Zack de la Rocha. Morello told Everley, \"We began with zero commercial ambition.\" Everley also says drummer Brad Wilk wanted the record to sit between Ice Cube's AmeriKKKa's Most Wanted and Led Zeppelin's Houses of the Holy, and that the label asked to remove a line and the band refused.",

    "Wikipedia says the album is in 1001 Albums You Must Hear Before You Die; the book's text wasn't found. It lists Rolling Stone ranking it 221st in 2020, and quotes critic Eduardo Rivadavia of AllMusic calling it \"the first album to successfully merge the seemingly disparate sounds of rap and heavy metal.\" Critic Robert Christgau called it \"metal for rap-lovers—and opera-haters,\" also via Wikipedia. Morello told Louder, \"One thing that Rage has that none of those other bands could touch was a sense of groove.\"",
  ],

  listeningNotes: [
    {
      label: "A Whammy pedal",
      text: "Writer Dan Shaw of Happy Mag credits a Digitech Whammy on \"Killing in the Name,\" the pitch-shifted squeal in the guitar.",
    },
    {
      label: "Flanger and kill-switch tremolo",
      text: "Shaw lists a flanger on \"Wake Up\" and a kill-switch tremolo on \"Know Your Enemy,\" where Maynard James Keenan of Tool guests on vocals, per Wikipedia.",
    },
    {
      label: "A single-coil guitar tone",
      text: "Morello said his sound is \"in large measure, a single-coil guitar pickup sound,\" which keeps the riffs sharp and dry.",
    },
    {
      label: "A dry, doubled vocal",
      text: "Shaw describes a very dry recording with vocals thickened by double-tracking rather than reverb, so de la Rocha sounds as if in the room.",
    },
    {
      label: "A one-take scream",
      text: "Everley and Johnson say the screams in \"Freedom\" were one take, with de la Rocha singing so hard his voice strained.",
    },
  ],

  sources: [
    { title: "Rage Against the Machine's debut: the complete story — Riffology (Neil Johnson, 2025)", url: "https://riffology.co/posts/the-making-of-rage-against-the-machine-by-rage-against-the-machine/" },
    { title: "Engineering the sound of Rage Against the Machine — Happy Mag (Dan Shaw, 2024)", url: "https://happymag.tv/engineering-the-sound-rage-against-the-machines-rage-against-the-machine/" },
    { title: "Rage Against the Machine debut album story — Louder (Dave Everley, 2022)", url: "https://www.loudersound.com/features/rage-against-the-machine-debut-album-story" },
    { title: "The real story of Rage Against the Machine's debut — Louder (Mörat, 2016)", url: "https://www.loudersound.com/features/the-real-story-of-rage-against-the-machine-s-debut-album" },
    { title: "Linkin Park's Mike Shinoda on RATM's influence — Louder (Merlin Alderslade, 2024)", url: "https://www.loudersound.com/news/linkin-park-mike-shinoda-ratm-influence" },
    { title: "Rage Against the Machine (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Rage_Against_the_Machine_(album)" },
    { title: "AmeriKKKa's Most Wanted — Wikipedia", url: "https://en.wikipedia.org/wiki/AmeriKKKa%27s_Most_Wanted" },
    { title: "Hybrid Theory — Wikipedia", url: "https://en.wikipedia.org/wiki/Hybrid_Theory" },
  ],

  influencedBy: [
    { artist: "Ice Cube", album: "AmeriKKKa's Most Wanted", year: "1990", note: "Drummer Brad Wilk said, per Louder's Everley, the band wanted the record to sit between this album and Led Zeppelin's Houses of the Holy." },
    { artist: "Led Zeppelin", album: "Houses of the Holy", year: "1973", note: "Same Wilk statement, relayed by Everley, about the heavy-riff half of the aim." },
  ],

  influenced: [
    { artist: "Linkin Park", album: "Hybrid Theory", year: "2000", note: "Musician Mike Shinoda credited a part from \"Killing in the Name\" with the shouted idea in \"One Step Closer,\" per Louder; a song-level tie." },
  ],
});
