import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "The Smiths",
  album: "The Queen Is Dead",
  year: "1986",
  heading: "The Queen Is Dead — The Smiths (1986)",

  albumLine:
    "Released 16 June 1986 on Rough Trade, produced by Morrissey and Johnny Marr with Stephen Street engineering, and recorded between July and December 1985 at RAK in London, Jacobs in Farnham and Drone in Manchester. Their third album, and the one most often called the best British album of its decade.",

  overview: [
    "It should have appeared in February and did not, held up around seven months by a legal dispute with Rough Trade. That delay is part of why the album arrived as a statement rather than a release — the band had effectively finished it and then sat on it while their contractual position was argued over, which did nothing for anyone's health. Marr has been candid about the state he was in: \"I was extremely ill. By the time the tour actually finished it was all getting a little bit ... dangerous.\"",

    "The title sets the register. In 1986 Britain was six years into Thatcher, a year past the miners' strike, and the monarchy was the object of a great deal of unexamined sentimentality; opening an album with a track of that name, built on a droning single chord and a sampled wartime singalong, is a fairly complete statement of position. What follows is not a protest record though — it moves between savage comedy, music-hall pastiche and two or three of the most straightforwardly beautiful songs anyone wrote that decade.",

    "The engine is Johnny Marr. He plays layered, chiming, countermelodic figures in open tunings, frequently several parts at once, and almost never plays a conventional rock riff or a solo. That leaves the front of the record entirely to Morrissey, whose delivery — crooning, arch, self-dramatising, often very funny — worked precisely because there was nothing in the arrangements competing with it.",

    "It reached No. 2 in Britain and only 70 in America, where the band remained a cult concern. The critical standing since has become almost absurd: a straight 10 from Pitchfork, first place in NME's 2013 list of the greatest albums ever made, 113th in Rolling Stone's 2020 revision. The Smiths split the following year. Morrissey's subsequent political statements have made many listeners' relationship with these records complicated, which is worth stating plainly rather than leaving as a silence.",
  ],

  listeningNotes: [
    {
      label: "Marr's layered guitars",
      text: "Several parts in open tunings woven together — arpeggios, slide, tremolo — with no solos. The texture does the work a lead line would.",
    },
    {
      label: "Morrissey's croon",
      text: "He sings in long sustained lines with a heavy vibrato and audible theatricality, closer to a fifties balladeer than to a post-punk vocalist.",
    },
    {
      label: "Andy Rourke's melodic bass",
      text: "Rourke plays funk-derived, highly mobile lines rather than roots, which is a large part of why a guitar band this jangly still moves.",
    },
    {
      label: "Abrupt shifts in tone",
      text: "The album swings from music-hall comedy to unguarded sincerity between tracks with no transition, and trusts you to follow.",
    },
    {
      label: "A sampled singalong",
      text: "The opening track is built over a fragment of a wartime British film, which sets the argument about nostalgia before a word is sung.",
    },
    {
      label: "Strings used sparingly",
      text: "Orchestration appears on only a couple of songs and is all the more effective for it, arriving where the guitars step back entirely.",
    },
  ],

  sources: [
    { title: "The Queen Is Dead — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Queen_Is_Dead" },
    { title: "The Smiths — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Smiths" },
    { title: "Johnny Marr — Wikipedia", url: "https://en.wikipedia.org/wiki/Johnny_Marr" },
  ],

  influencedBy: [
    { artist: "The Kinks", album: "Something Else by the Kinks", year: "1967", note: "The tradition of writing English social observation as pop, with comedy and sentiment held in the same line." },
    { artist: "Pretenders", album: "Pretenders", year: "1980", note: "James Honeyman-Scott's chiming, countermelodic guitar style is an acknowledged model for Marr's playing." },
    { artist: "The Velvet Underground", album: "The Velvet Underground & Nico", year: "1967", note: "The drone-and-strum foundation of the title track, and the model of a band built on texture rather than riffs." },
  ],

  influenced: [
    { artist: "Oasis", album: "Definitely Maybe", year: "1994", note: "Noel Gallagher grew up on Marr; Britpop's guitar vocabulary and its Manchester self-mythology both run through here." },
    { artist: "Radiohead", album: "The Bends", year: "1995", note: "Layered, non-riff guitar arrangements around a theatrical vocal — the post-Smiths English template." },
  ],
});
