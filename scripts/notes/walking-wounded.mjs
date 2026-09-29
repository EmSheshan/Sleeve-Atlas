import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Everything But The Girl",
  album: "Walking Wounded",
  year: "1996",
  heading: "Walking Wounded — Everything But The Girl (1996)",

  albumLine:
    "Released 6 May 1996 on Virgin in the UK and Atlantic in the US. It's the duo's ninth album and the one where their sophisticated guitar pop is rebuilt on drum and bass, trip-hop and house rhythms — a mid-career reinvention that worked.",

  overview: [
    "Everything But The Girl were Tracey Thorn, the singer, and Ben Watt, who wrote, played and produced. By the early nineties they were a respected but unfashionable proposition: literate, melancholy, acoustic. Two things changed that. In 1992 Watt was hospitalised with Churg-Strauss syndrome, a rare autoimmune disease; he spent eight weeks in hospital, lost a great deal of weight and most of his small intestine, and later wrote a memoir about it. Then in 1995 the New York house producer Todd Terry remixed one of their older songs, and the result became a worldwide hit, reaching No. 2 on the Billboard Hot 100.",

    "It's important not to collapse those two events into one tidy story. The Terry remix was not something the duo made; it was done to them, and it handed them an audience in clubs they hadn't sought. What they did with that is the actual subject here. Rather than repeat the remix's formula, Watt — already deep in London's club scene as a DJ — went towards drum and bass, then the most rhythmically extreme dance music Britain had, and built songs on top of it.",

    "They brought in collaborators from that world. Spring Heel Jack, the duo of John Coxon and Ashley Wales, wrote and produced the music for the title track to Watt's lyric. Howie B worked on another, in a slower trip-hop register; his account of first hearing the demos is worth having — \"I remember sitting there in their house, listening, and I just started crying.\" The combination is the point: skittering, fast, complicated percussion under a voice that never raises itself or speeds up to match.",

    "That restraint is why the record works where so many nineties rock-meets-dance experiments don't. Thorn sings exactly as she always had — low, unhurried, conversational — and the gap between her delivery and the frantic rhythm beneath produces the album's particular ache. It was widely praised, sold strongly on both sides of the Atlantic, and is now generally treated as the moment sophisti-pop and club music were reconciled rather than merely spliced.",
  ],

  listeningNotes: [
    {
      label: "Breakbeats under ballads",
      text: "The drums are fast, chopped and restless in the drum and bass idiom, while the songs on top move at a completely different, much slower pace. That tension is the album's central device.",
    },
    {
      label: "Thorn's unchanged voice",
      text: "She doesn't adapt to the dance context at all — no belting, no rhythmic phrasing chasing the beat. The contrast between a still voice and agitated percussion is deliberate.",
    },
    {
      label: "Programmed, not played",
      text: "Where their earlier records used session musicians, this is largely sequenced and sampled. The bass is synthetic and enormous, mixed to be felt rather than followed.",
    },
    {
      label: "Guest producers in different idioms",
      text: "Spring Heel Jack handle the title track and Howie B a slower trip-hop piece, so the record moves between sub-genres rather than committing to one tempo throughout.",
    },
    {
      label: "Space where a chorus would be",
      text: "Several arrangements withhold the big hook and let the rhythm carry long instrumental stretches instead — a structural habit taken from club records, not pop ones.",
    },
  ],

  sources: [
    { title: "How Everything But The Girl wove lovelorn pop with drum & bass on 'Walking Wounded' — DJ Mag", url: "https://djmag.com/how-everything-girl-wove-lovelorn-pop-drum-bass-walking-wounded" },
    { title: "Rediscover Everything But The Girl's 'Walking Wounded' — Albumism", url: "https://albumism.com/features/tribute-celebrating-25-years-of-everything-but-the-girl-walking-wounded" },
    { title: "Everything but the Girl — Wikipedia", url: "https://en.wikipedia.org/wiki/Everything_but_the_Girl" },
  ],

  influencedBy: [
    { artist: "Goldie", album: "Timeless", year: "1995", note: "The album that made drum and bass a long-form listening proposition, released the year before and the clearest model for these rhythms." },
    { artist: "Massive Attack", album: "Protection", year: "1994", note: "The Bristol template for a restrained vocal over slow, heavy programmed beats — Thorn had in fact sung on that record." },
  ],

  influenced: [
    { artist: "Zero 7", album: "Simple Things", year: "2001", note: "Part of the downtempo lineage that took this album's pairing of intimate vocals with electronic production into the 2000s." },
  ],
});
