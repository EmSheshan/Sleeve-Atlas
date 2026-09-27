import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Mike Oldfield",
  album: "Tubular Bells",
  year: "1973",
  heading: "Tubular Bells — Mike Oldfield (1973)",

  albumLine:
    "Released 25 May 1973, produced by Mike Oldfield with Tom Newman and Simon Heyworth at The Manor in Oxfordshire. Two instrumental pieces, one per side, built almost entirely by one nineteen-year-old — and the first record Virgin ever put out.",

  overview: [
    "Oldfield had been a session and band musician since his teens and had a long instrumental piece nobody wanted. Every label turned it down: no singles, no vocals, no obvious audience. Richard Branson, then running a mail-order record business and a residential studio at The Manor, took it on and built a label around it. The gamble is not overstated in retrospect — Branson has said that \"Virgin going into space most likely wouldn't have existed if we hadn't hired that particular instrument.\"",

    "The making of it is the interesting part. Recorded between November 1972 and April 1973 on limited tape machines, it's the product of roughly seventy to eighty overdubs and something like two thousand punch-ins, with Oldfield playing nearly every part himself — guitars, bass, organ, glockenspiel, flageolet, the tubular bells of the title. In an era before digital editing, that meant physically re-recording over precise points on tape, thousands of times, without losing the take underneath.",

    "Musically it sits between things. It has progressive rock's scale and refusal of song form, but its method — short figures repeated and slowly layered, shifting by accretion rather than development — is closer to the minimalism of Terry Riley and Steve Reich than to the virtuoso showcases of its prog contemporaries. The folk melodies are English rather than blues-derived. It is also, deliberately, not very serious: the first side ends with Vivian Stanshall of the Bonzo Dog Doo-Dah Band announcing each instrument in turn like a ringmaster, a sequence that gave the album its name.",

    "Then it got lucky. William Friedkin used the opening piano figure in The Exorcist in December 1973, and a strange instrumental album became a global phenomenon — No. 1 in the UK, No. 3 in the US, and an estimated 15 to 17.5 million copies, still the best-selling instrumental album ever made. British reviews were admiring; American ones more divided. It took the Grammy for Best Instrumental Composition in 1975.",
  ],

  listeningNotes: [
    {
      label: "One person, many instruments",
      text: "Almost everything you hear is Oldfield overdubbed onto himself. The parts interlock unusually tightly because there was no band negotiating — it's one musician's internal sense of time all the way down.",
    },
    {
      label: "Built by accretion",
      text: "Short phrases repeat and new layers arrive on top rather than the music moving through verses or themes. It grows by addition, which is a minimalist technique rather than a rock one.",
    },
    {
      label: "The opening piano figure",
      text: "An unsettled, asymmetric keyboard motif that never quite resolves — the fragment The Exorcist used, and the reason a large part of the world knows this record without knowing its name.",
    },
    {
      label: "The instrument roll-call",
      text: "Near the end of side one Vivian Stanshall introduces each instrument in turn as it enters, culminating in the tubular bells. It's the album's one spoken passage and its only joke.",
    },
    {
      label: "Audible tape editing",
      text: "With thousands of punch-ins on analogue tape, you can sometimes hear the joins — slight shifts in room tone or level. The seams are part of the texture.",
    },
    {
      label: "A distorted guitar that sounds wrong on purpose",
      text: "Late in the second side a heavily overdriven guitar barges in against the gentler material. The contrast is deliberate, and it's the closest the record comes to rock.",
    },
  ],

  sources: [
    { title: "Tubular Bells — Wikipedia", url: "https://en.wikipedia.org/wiki/Tubular_Bells" },
    { title: "Mike Oldfield — Wikipedia", url: "https://en.wikipedia.org/wiki/Mike_Oldfield" },
    { title: "Virgin Records — Wikipedia", url: "https://en.wikipedia.org/wiki/Virgin_Records" },
  ],

  influencedBy: [
    { artist: "Terry Riley", album: "A Rainbow in Curved Air", year: "1969", note: "The minimalist practice of building long pieces from short repeating figures, which this album applies with rock instruments." },
    { artist: "Pink Floyd", album: "Atom Heart Mother", year: "1970", note: "An earlier British precedent for a side-long, largely instrumental rock composition." },
  ],

  influenced: [
    { artist: "Jean-Michel Jarre", album: "Oxygène", year: "1976", note: "The commercial proof that a long-form instrumental album with no singer could sell in millions." },
    { artist: "Brian Eno", album: "Music for Airports", year: "1978", note: "Part of the same movement toward extended, non-narrative instrumental music made in the studio." },
  ],
});
