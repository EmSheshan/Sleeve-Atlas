import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Badly Drawn Boy",
  album: "The Hour Of Bewilderbeast",
  year: "2000",
  heading: "The Hour Of Bewilderbeast — Badly Drawn Boy (2000)",

  albumLine:
    "Released 26 June 2000 on XL Recordings and Twisted Nerve, produced by Damon Gough with Ken Nelson, Gary Wilkinson and Joe Robinson. Eighteen tracks of indie folk and chamber pop running just over an hour — Gough's debut album, and the one that won the 2000 Mercury Prize.",

  overview: [
    "Damon Gough, who records as Badly Drawn Boy, was thirty when this came out and had been releasing EPs for roughly five years. He had met Andy Votel — a Manchester DJ and graphic designer — in a club, and the two founded the label Twisted Nerve, which put out his first release, the five-track EP1, in September 1997. He signed to XL in 1999. That history matters to how the album sounds: it is a debut assembled by someone with a long backlog, who reportedly chose eighteen tracks from around a hundred contenders, and it moves between indie rock, bossa nova, folk and chamber pop without apology. Gough drew storytelling from Bob Dylan, Beck and Bruce Springsteen, and has said plainly of the record: \"there is a certain honesty in the sound of it.\"",

    "Most of it was made in Gough's own small Manchester studio — \"we were recording in Damon's own studio in Manchester,\" as Nelson put it — a room with one cramped live area holding a drum kit, guitar amps and an upright piano. One piano part was cut on a Steinway at Parr Street Studios in Liverpool, cold enough that Gough needed space heaters. Nelson, who had worked on Coldplay's Parachutes in far bigger rooms, kept early performances where later attempts were worse; his stated rule was \"performance always comes first.\" Members of Doves played on it — bassist Jimi Goodwin, guitarist Jez Williams, drummer Andy Williams — alongside cellist Matt McGeever and others. Votel's cover collage is loosely based on Leonardo da Vinci's drawing Vitruvian Man.",

    "It reached No. 13 in the UK and took the Mercury Prize in London that September, beating Coldplay's Parachutes and Doves' Lost Souls; Gough reportedly threw the £20,000 on the floor and said, \"I always assumed I was never going to win because good things don't happen to good people normally.\" Sources disagree on sales — Wikipedia's album page gives about 455,000 UK copies by 2011, its page on Gough says 300,000. NME called it an \"unambiguously cohesive piece of work\" and Pitchfork gave it 8.6. The novelist Nick Hornby became a fan and asked Gough to score the film of About a Boy. Nelson has agreed that Gough never quite matched this album's songwriting afterwards.",
  ],

  listeningNotes: [
    {
      label: "A home studio you can hear",
      text: "The close, slightly boxy sound is the small Manchester room rather than an effect. Nelson's contemporaneous records made in larger studios sound markedly more expansive by comparison.",
    },
    {
      label: "Bossa-nova lilt in an indie record",
      text: "Soft nylon-strung rhythms and shifting time signatures Gough modelled on Burt Bacharach, as on \"Once Around the Block,\" with wordless vocal lines standing in for a chorus.",
    },
    {
      label: "Arrangements that arrive late",
      text: "Songs open on hushed voice and strummed guitar, then French horns and cello enter partway through — the opening track does exactly this. The orchestration is withheld rather than announced.",
    },
    {
      label: "Takes kept because they couldn't be beaten",
      text: "Nelson left first attempts in place where re-recording made them worse. The audible residue is stray noise, drifting tuning and the sense of someone working a song out on tape.",
    },
    {
      label: "Songs running into one another",
      text: "The sequencing crossfades and butt-joins sketches, interludes and full songs so the joins blur. It's why an eighteen-track, hour-long record plays as one continuous stretch.",
    },
  ],

  sources: [
    { title: "The Hour Of Bewilderbeast remains Badly Drawn Boy's ramshackle masterpiece — The A.V. Club", url: "https://www.avclub.com/the-hour-of-bewilderbeast-remains-badly-drawn-boy-s-ram-1798246679" },
    { title: "Rediscover Badly Drawn Boy's Debut Album 'The Hour of Bewilderbeast' — Albumism", url: "https://albumism.com/features/badly-drawn-boy-debut-album-the-hour-of-bewilderbeast-album-anniversary" },
    { title: "Badly Drawn Boy Wins Mercury Prize — ABC News", url: "https://abcnews.com/Entertainment/story?id=115797&page=1" },
    { title: "The Hour of Bewilderbeast — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Hour_of_Bewilderbeast" },
  ],

  influencedBy: [
    { artist: "Beck", album: "Odelay", year: "1996", note: "Named among Gough's storytelling models; the shared method is splicing loops, samples and abrupt style changes into what is still a pop record." },
    { artist: "Bruce Springsteen", album: "Born to Run", year: "1975", note: "Gough's stated hero — the expansive, open-hearted narrative songwriting rather than the bleak kind, which is why this record keeps reaching for horns and strings." },
    { artist: "Bob Dylan", album: "The Freewheelin' Bob Dylan", year: "1963", note: "Another model Gough names; the harmonica-and-acoustic-guitar frame and conversational, half-spoken vocal delivery run through the album." },
  ],

  influenced: [],
});
