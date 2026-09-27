import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "My Bloody Valentine",
  album: "m b v",
  year: "2013",
  heading: "m b v — My Bloody Valentine (2013)",

  albumLine:
    "Self-released on 2 February 2013 through the band's own mbv Records, with physical copies following on the 22nd, and produced by Kevin Shields, the group's guitarist, singer and studio obsessive. It's shoegaze, the genre this band largely defined — and their first album of new material in twenty-two years.",

  overview: [
    "The gap is the story. My Bloody Valentine's Loveless (1991) had effectively invented a sound and, by most accounts, nearly broken its maker doing it. Work on a follow-up began in 1996, stopped when the band fell apart in 1997, and restarted only after they reunited in 2006. Final vocals and overdubs were added across 2011 and 2012, mixing took four months, and mastering finished on 21 December 2012. Shields has estimated the whole thing took sixteen or seventeen years.",

    "It was made on tape and only tape: two-inch 24-track for recording, half-inch for mixing, with digital processing refused outright. Sessions ran between a home studio in Streatham, south London, and Grouse Lodge in County Westmeath, Ireland. The original lineup plays throughout — Shields and Bilinda Butcher on guitars and vocals, Debbie Googe on bass, Colm Ó Cíosóig on drums — though the drum parts were unusually contested: Googe has said they were added and removed at least once, with Shields's brother Jimi recording beats to be sampled before Ó Cíosóig cut the final live takes.",

    "Shields described the method as deliberately unplanned: he \"wanted to see what would happen if I worked in a more impressionistic way, so that it only comes together at the end.\" The record is sequenced roughly along that logic. It opens close to familiar territory, drifts into something slower and more organ-toned in the middle, then spends its last three tracks somewhere genuinely strange.",

    "The release was as unusual as the wait. The band put it out themselves, direct from their website with no label and effectively no warning, and the site collapsed under the traffic within minutes — an early, chaotic version of the surprise drop. Reviews were close to unanimous: 87 on Metacritic, 9.1 from Pitchfork, who placed it fourth on their 2013 list, and five stars in the Guardian, where Alexis Petridis found it more melodically complex than the band's earlier work. It charted at No. 29 in the UK. What it did not do was start anything; by 2013 a full revival generation had already been working from Loveless for years, and this arrived into a world that had absorbed its predecessor.",
  ],

  listeningNotes: [
    {
      label: "Glide guitar",
      text: "Shields plays while working the tremolo arm, so chords bend continuously rather than sitting still. Nothing holds pitch — the whole track seems to breathe slightly sharp and flat, and it's done by hand, not with a pedal.",
    },
    {
      label: "Vocals buried on purpose",
      text: "Shields and Butcher's voices are mixed level with the guitars rather than on top of them, treated as another layer of texture. You catch tone and melody far more than words.",
    },
    {
      label: "All analogue, no digital",
      text: "Recorded and mixed entirely to tape with digital processing refused. It gives the loud passages a soft ceiling — things distort and compress rather than clipping hard, which is why the volume feels enveloping instead of harsh.",
    },
    {
      label: "The organ-toned middle",
      text: "The centre of the record slows and thickens, with sustained keyboard-like drones replacing the churn. It's the calmest stretch and the clearest departure from what the band had done before.",
    },
    {
      label: "The last three tracks",
      text: "The final stretch abandons song shape almost entirely for fast, motorised rhythm under whooshing guitar. Several critics have linked the rhythmic turn to Shields's interest in drum and bass, though that's a reading rather than something he laid out.",
    },
    {
      label: "The closing rush",
      text: "The album ends on a track built around a sound most listeners describe as a jet engine — a continuously pitching roar that swallows the band. It's the most extreme thing here and the record stops dead inside it.",
    },
  ],

  sources: [
    { title: "m b v — Wikipedia", url: "https://en.wikipedia.org/wiki/M_b_v" },
    { title: "My Bloody Valentine — \"Wonder 2\" — Treble", url: "https://www.treblezine.com/my-bloody-valentine-wonder-2/" },
    { title: "An interview with Kevin Shields of My Bloody Valentine — BrooklynVegan", url: "https://www.brooklynvegan.com/an-interview-with-kevin-shields-of-my-bloody-valentine" },
  ],

  influencedBy: [
    { artist: "My Bloody Valentine", album: "Loveless", year: "1991", note: "Its own direct predecessor; work on this record began as the follow-up and carries the same glide-guitar method forward." },
  ],

  // Deliberately empty: released in 2013 and still too recent for documented
  // downstream influence. Better blank than invented.
  influenced: [],
});
