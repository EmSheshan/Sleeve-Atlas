import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Dr. Dre",
  album: "The Chronic",
  year: "1992",
  heading: "The Chronic — Dr. Dre (1992)",

  albumLine:
    "Released 15 December 1992 on Death Row Records, through Interscope with Priority handling distribution, and produced start to finish by Dr. Dre, the producer and rapper born Andre Young. It's the debut solo album from N.W.A's producer and the record that defined G-funk.",

  overview: [
    "Dre had left N.W.A and Ruthless Records after a financial falling-out with Eazy-E, the group's rapper and label head, and the album is partly a settling of that score — Eazy-E and Ice Cube both take direct hits on it. More consequentially, it's a launch vehicle. Snoop Doggy Dogg, then unknown, is on much of the record, and the supporting cast — Kurupt, Daz Dillinger, Nate Dogg, Warren G, Lady of Rage, The D.O.C., the singer Jewell — became the roster of a label that dominated the next four years.",

    "It was recorded between April and June 1992 in Los Angeles, which places the sessions directly across the uprising that followed the acquittal of the officers who beat Rodney King. Here the connection is concrete rather than atmospheric: the filmmaker Matthew McDaniel recorded audio in the streets during the unrest, and that field audio appears as the introduction to two tracks, one of which takes the uprising as its subject. It's worth keeping the causality straight, though — the sound of this record was already being developed before the riots. The events are in the album; they didn't produce it.",

    "The production is the reason it mattered. Where East Coast hip-hop of the period was built from dense sample collage, Dre worked with live players, chiefly the multi-instrumentalist Colin Wolfe on bass, keyboards and strings, re-playing and reshaping funk rather than only lifting it. The palette leans heavily on Parliament-Funkadelic and on records like Leon Haywood's. Jon Pareles described it in the New York Times: \"The bottom register is swampy synthesizer bass lines that openly emulate Parliament-Funkadelic; the upper end is often a lone keyboard line, whistling or blipping incessantly.\"",

    "It reached No. 3 on the Billboard 200 and No. 1 on the R&B/hip-hop chart, with 5.7 million US copies sold by 2015. Reviews were mostly strong, with dissent about the content — Robert Christgau in the Village Voice called it \"sociopathic easy-listening.\" Its standing since is enormous: Kanye West called it \"the benchmark you measure your album against if you're serious,\" and the Library of Congress added it to the National Recording Registry in 2019. G-funk became the default sound of mainstream hip-hop for the rest of the decade.",
  ],

  listeningNotes: [
    {
      label: "The high synth whine",
      text: "A thin, keening keyboard line rides above almost everything, usually playing one simple figure over and over. It's the single most imitated element here and the quickest way to identify the style.",
    },
    {
      label: "Played, not sampled",
      text: "Much of the funk underneath is performed live by session musicians rather than looped from records. That's why the bass moves and breathes across a bar instead of repeating identically, and it's the core difference from East Coast production of the time.",
    },
    {
      label: "Slow tempos, enormous low end",
      text: "Everything sits at a walking pace with the bass mixed far forward. The record was built for car systems, and it behaves differently at volume than on small speakers.",
    },
    {
      label: "Sung hooks on rap songs",
      text: "Melodic R&B choruses, often from Nate Dogg or Jewell, carry the refrains. Common now, unusual then, and a large part of why the album crossed to radio.",
    },
    {
      label: "Field audio from the uprising",
      text: "Two tracks open with recordings made on the street during the 1992 unrest, captured by the filmmaker Matthew McDaniel. They're documentary inserts, not performances, and they place the record in a specific week.",
    },
    {
      label: "Conversation as structure",
      text: "Skits and overlapping talk run between and into the songs, so the album plays as a continuous scene rather than a track list — an approach nearly every major rap album copied afterwards.",
    },
  ],

  sources: [
    { title: "The Chronic — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Chronic" },
    { title: "\"The Chronic\" — Dr. Dre (1992), National Recording Registry essay — Library of Congress", url: "https://www.loc.gov/static/programs/national-recording-preservation-board/documents/the-chronic.pdf" },
    { title: "The Chronic: How the LA Riots Inspired Dr. Dre's Hip-Hop Classic — Consequence", url: "https://consequence.net/2017/12/the-chronic-how-the-la-riots-inspired-dr-dres-hip-hop-classic/" },
  ],

  influencedBy: [
    { artist: "Parliament", album: "Mothership Connection", year: "1975", note: "The P-Funk sound Dre openly emulates — the swampy synth bass and the whole cosmic-funk palette come from here." },
    { artist: "N.W.A", album: "Straight Outta Compton", year: "1988", note: "Dre's own previous group and the record he was reacting against commercially and personally after the Ruthless split." },
  ],

  influenced: [
    { artist: "Snoop Doggy Dogg", album: "Doggystyle", year: "1993", note: "Recorded by the same team within a year; effectively this album's sequel and Snoop's launch from it." },
    { artist: "2Pac", album: "All Eyez on Me", year: "1996", note: "The Death Row house sound established here, applied at scale." },
  ],
});
