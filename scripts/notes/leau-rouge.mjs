import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "The Young Gods",
  album: "L'Eau Rouge",
  year: "1989",
  heading: "L'Eau Rouge — The Young Gods (1989)",

  albumLine:
    "Released September 1989 on Play It Again Sam, produced by Roli Mosimann at Artag Studio in Zurich. It's industrial rock with dark cabaret and orchestral music folded in — their second album, made by a band with no guitarist, and generally called their best.",

  overview: [
    "They formed in Fribourg, Switzerland, in 1985, after Franz Treichler's punk band fell apart and he began building sound collages on a four-track. The line-up here is Treichler singing, Cesare Pizzi on sampler and keyboards and Üse Hiestand on drums, with programming by Michele Amar. That is the entire band: a voice, a sampler and a drum kit. Everything that sounds like a guitar is a sampled fragment of one, looped and played from a keyboard.",

    "This was a genuinely new idea in 1989. Sampling existed in hip-hop and in dance music, but using it to rebuild a rock band from the ground up — keeping rock's force while removing its central instrument — had not really been attempted. David Bowie, an admirer, described the method precisely: take \"one chunk guitar riff and then sampling it, looping it, and having that as the consistent pattern.\" What they sample is not restricted to rock either; classical fragments, musique concrète and orchestral stabs sit alongside the riffs, which is why the album keeps veering towards something closer to theatre than to metal.",

    "Treichler sings entirely in French, which matters more than it might sound. Industrial music at the end of the eighties was overwhelmingly Anglo-American and shouted; French gives the vocals a declamatory, chanson-adjacent quality, and pushes the record towards cabaret and away from aggression as its default. Combined with the orchestral sampling, it produces something genuinely uncategorisable — heavy, but theatrical rather than brutal.",

    "It reached No. 3 on the UK Indie Chart and took year-end honours from both Melody Maker and Sounds in 1989. Its real legacy is downstream: The Edge of U2 named them an influence on his soundtrack work, Mike Patton counts their albums among his favourites, and Nine Inch Nails, Ministry, Sepultura and Napalm Death have all drawn on them. Much of what became mainstream industrial rock in the nineties was built on a method this band demonstrated first.",
  ],

  listeningNotes: [
    {
      label: "Guitars that are samples of guitars",
      text: "The riffs are single recorded chunks triggered from a keyboard and looped, so they repeat with machine exactness and never quite breathe. Once you know, you can hear the seams.",
    },
    {
      label: "Orchestral fragments used as weapons",
      text: "Strings, brass and classical stabs are dropped in at full volume alongside the riffs, treated as percussion rather than as decoration.",
    },
    {
      label: "Treichler declaiming in French",
      text: "He half-sings, half-proclaims, with the diction of a stage performer. The language keeps the record European and cabaret-shaped rather than American and shouted.",
    },
    {
      label: "Live drums against locked loops",
      text: "Hiestand plays a real kit over rigidly repeating samples, and the friction between a human drummer and a machine pattern is much of the album's tension.",
    },
    {
      label: "Abrupt silence",
      text: "Tracks cut to nothing mid-phrase and restart, an editing decision only possible when the whole arrangement is triggered rather than played.",
    },
    {
      label: "Dynamic swings rather than constant volume",
      text: "It drops to near-quiet and returns to full weight repeatedly, closer to orchestral writing than to the flat loudness most industrial records of the period chose.",
    },
  ],

  sources: [
    { title: "L'eau rouge — Wikipedia", url: "https://en.wikipedia.org/wiki/L%27Eau_Rouge" },
    { title: "The Young Gods — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Young_Gods" },
    { title: "The Young Gods — AllMusic", url: "https://www.allmusic.com/artist/the-young-gods-mn0000326751" },
  ],

  influencedBy: [
    { artist: "Einstürzende Neubauten", album: "Halber Mensch", year: "1985", note: "Continental European industrial music built from non-rock sound sources and sung in a language other than English." },
    { artist: "Throbbing Gristle", album: "D.O.A. the Third and Final Report of Throbbing Gristle", year: "1978", note: "Established tape manipulation and found sound as the raw material of a rock-adjacent record." },
  ],

  influenced: [
    { artist: "Nine Inch Nails", album: "Pretty Hate Machine", year: "1989", note: "Nine Inch Nails are among the acts documented as drawing on them; sample-built industrial rock with real drums over loops." },
    { artist: "Ministry", album: "Psalm 69", year: "1992", note: "The looped guitar sample as the structural engine of a heavy record, which is the method this album demonstrated." },
    { artist: "Faith No More", album: "Angel Dust", year: "1992", note: "Mike Patton has named their albums among his favourites, and the swerve between theatrical and brutal is shared." },
  ],
});
