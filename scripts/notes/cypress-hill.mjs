import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Cypress Hill",
  album: "Cypress Hill",
  year: "1991",
  heading: "Cypress Hill — Cypress Hill (1991)",

  albumLine:
    "Released 13 August 1991 on Ruffhouse and Columbia, produced entirely by DJ Muggs and recorded at Image Recording Studios in Los Angeles between August 1990 and May 1991. It's West Coast hip-hop with Latin rap threaded through it — a debut that gave the genre one of its most copied production templates.",

  overview: [
    "The group formed in South Gate, in south-east Los Angeles County, in 1988. Louis Freese, who raps as B-Real, and Lawrence Muggerud, who produces as DJ Muggs, were from the area; Senen Reyes, who raps as Sen Dog, had been born in Cuba and emigrated with his family in 1971. Muggs had spent formative years in Queens, New York, and that split geography is audible — the record has the murk and sample density of East Coast production applied to Californian subject matter.",

    "Their arrival mattered because of who they were. Cypress Hill were among the first Latino acts to reach a mass hip-hop audience, and they did it without translating themselves into something else: Spanish and Spanglish sit inside the verses as a matter of course, at a moment when rap's commercial centre was Black and its geography was being argued over between New York and Compton. They opened a lane that had not existed.",

    "The timing was extraordinary. The album came out in August 1991, five months after the beating of Rodney King was filmed in Los Angeles and nine months before the acquittals and the uprising that followed. It is not a protest record and does not pretend to be — the preoccupations are weed, guns and a very dry sense of humour — but the Los Angeles it describes is the one that was about to be on every television in the world. Their loudest political position was cannabis, which all the members advocated legalising long before that was a respectable opinion.",

    "It reached No. 31 on the Billboard 200 and eventually sold two million copies in America, which for a debut with no radio-friendly single was remarkable. Entertainment Weekly graded it A+; Rolling Stone called it \"innovative and engaging\"; AllMusic describe it as \"a sonic blueprint that would become one of the most widely copied in hip-hop,\" which is the claim that has held up best. Spin placed it 57th among the ninety greatest albums of the decade, and in 2019 the group became the first hip-hop act with a star on the Hollywood Walk of Fame.",
  ],

  listeningNotes: [
    {
      label: "B-Real's nasal whine",
      text: "He pitches his voice high and pinched on purpose — by his own account to be distinct — and it cuts through Muggs's heavy low end like a reed instrument. Nothing else in 1991 sounded like it.",
    },
    {
      label: "Two voices in opposition",
      text: "Sen Dog answers in a hoarse bark, low and blunt, so the pair function as contrasting textures rather than two rappers taking turns. The trade-offs are arranged more like call-and-response.",
    },
    {
      label: "Muggs's dusty, murky mix",
      text: "Samples are left grainy and slightly out of tune, with the highs rolled off, so the whole record sounds like it was found rather than recorded. That deliberate filth is the blueprint people copied.",
    },
    {
      label: "Squealing horn and guitar stabs",
      text: "Short, shrill sampled shrieks punch in over the beat as punctuation. They do the work a hook would do in a more conventional arrangement.",
    },
    {
      label: "Slow, sub-heavy tempos",
      text: "The beats sit well under the era's usual pace, with bass that occupies more space than the drums. It's built for car systems, and it is where the stoned, sluggish feel comes from.",
    },
    {
      label: "Spanish inside the verses",
      text: "Spanglish appears without explanation or translation, treated as ordinary speech rather than as a novelty, which was the point.",
    },
  ],

  sources: [
    { title: "Cypress Hill (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Cypress_Hill_(album)" },
    { title: "Cypress Hill — Wikipedia", url: "https://en.wikipedia.org/wiki/Cypress_Hill" },
    { title: "Cypress Hill — AllMusic review", url: "https://www.allmusic.com/album/cypress-hill-mw0000265239" },
  ],

  influencedBy: [
    { artist: "Public Enemy", album: "It Takes a Nation of Millions to Hold Us Back", year: "1988", note: "The dense, abrasive, noise-tolerant approach to sampling that Muggs took west with him." },
    { artist: "N.W.A", album: "Straight Outta Compton", year: "1988", note: "Established Los Angeles as a hip-hop centre with its own subject matter, which this record inherits and redirects." },
  ],

  influenced: [
    { artist: "Wu-Tang Clan", album: "Enter the Wu-Tang (36 Chambers)", year: "1993", note: "The taste for deliberately grimy, lo-fi sample beds and multiple contrasting vocal textures runs on from here." },
    { artist: "Beastie Boys", album: "Ill Communication", year: "1994", note: "Muggs's murky, live-feeling sample aesthetic shaped the mid-nineties crossover sound this album shares a scene with." },
  ],
});
