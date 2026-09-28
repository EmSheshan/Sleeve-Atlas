import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Dexys Midnight Runners",
  album: "Searching For The Young Soul Rebels",
  year: "1980",
  heading: "Searching for the Young Soul Rebels — Dexys Midnight Runners (1980)",

  albumLine:
    "Released 11 July 1980 on EMI, produced by Pete Wingfield in a twelve-day session at Chipping Norton Recording Studios in Oxfordshire. It's northern soul and Stax horns played with punk's aggression — their debut, and one of the strangest records ever to reach the UK top ten.",

  overview: [
    "They formed in Birmingham in 1978 around Kevin Rowland, who sang and played guitar, and Kevin \"Al\" Archer, also on guitar and vocals; both had been in the punk band the Killjoys. The rest of the original group was \"Big\" Jim Paterson on trombone, Geoff \"JB\" Blythe and Steve \"Babyface\" Spooner on saxophones, Pete Saunders on keyboards, Pete Williams on bass and John Jay on drums — a brass-forward soul band, in other words, assembled by people who had just spent two years playing three-chord punk. The name comes from Dexedrine, the amphetamine that kept northern soul dancers upright all night.",

    "Rowland ran it like a cause. Rehearsals were compulsory, alcohol and drugs were banned before shows, and the band trained by running together: \"The togetherness of running along together just gets ... that fighting spirit going.\" The look — donkey jackets, leather coats and woolly hats, borrowed from Robert De Niro in \"Mean Streets\" — was designed so that they belonged to no existing scene. When journalists turned on them, accusing them among other things of \"emotional fascism,\" Rowland stopped giving interviews and bought advertisements in the music press instead, addressing readers directly over the papers' heads.",

    "The same conviction produced the album's best anecdote. Unhappy with a six per cent royalty, the band stole the master tapes during mixing and held them until EMI agreed to nine. One participant's recollection is unsentimental: \"Being chased by police cars up the A40 at 90 miles per hour is not my idea of fun.\" They won.",

    "What makes the record more than a revivalist exercise is that it is about revivalism — about what it means for young white men in a collapsing industrial England to take Black American soul as a moral position rather than a style. 1980 was the year of mass unemployment, the National Front and Two Tone, and this album sits alongside the Specials as the other great argument that the answer was in sixties soul. \"Geno\" — a tribute to Geno Washington, a soul singer who had worked British clubs — went to No. 1; \"There, There, My Dear\" reached No. 7; the album made No. 6 and went silver. NME called it the tenth-best album of the year and later placed it 16th among the hundred greatest British albums ever.",
  ],

  listeningNotes: [
    {
      label: "A horn section instead of lead guitar",
      text: "Trombone and two saxophones carry the riffs and the hooks, punching in unison lines where a rock band would put a guitar solo. It's the single most distinctive thing about the album.",
    },
    {
      label: "Rowland's strangled vocal",
      text: "He sings in a high, cracking, almost yelping tenor that constantly threatens to break, and audibly strains for notes rather than reaching them comfortably. The effort is the emotion.",
    },
    {
      label: "Punk tempos on soul arrangements",
      text: "The rhythm section plays faster and harder than any sixties soul band would, so Motown and Stax figures arrive with the urgency of 1977.",
    },
    {
      label: "Radio tuning as an opening",
      text: "The album begins with someone dialling across stations and rejecting them, which states the argument — that nothing currently on the air will do — before a note is played.",
    },
    {
      label: "Slower, bluesier stretches",
      text: "Between the up-tempo tracks are downbeat, jazz-tinged pieces with sparse organ and brushed drums, which is what gives a forty-minute horn record its shape.",
    },
    {
      label: "Wingfield's dry, live-band production",
      text: "Twelve days meant recording largely as an ensemble with little overdubbing, so the brass breathes and the mistakes stay. It sounds like a room, not a mix.",
    },
  ],

  sources: [
    { title: "Searching for the Young Soul Rebels — Wikipedia", url: "https://en.wikipedia.org/wiki/Searching_for_the_Young_Soul_Rebels" },
    { title: "Dexys Midnight Runners — Wikipedia", url: "https://en.wikipedia.org/wiki/Dexys_Midnight_Runners" },
    { title: "Geno (song) — Wikipedia", url: "https://en.wikipedia.org/wiki/Geno_(song)" },
  ],

  influencedBy: [
    { artist: "Otis Redding", album: "Otis Blue", year: "1965", note: "The Stax horn-section template and the model of a singer whose strain and effort are the point." },
    { artist: "Sex Pistols", album: "Never Mind the Bollocks, Here's the Sex Pistols", year: "1977", note: "Rowland and Archer came out of punk, and the tempos, confrontation and press hostility all come from there." },
  ],

  influenced: [
    { artist: "The Pogues", album: "Rum Sodomy & the Lash", year: "1985", note: "The idea of a British band playing an older, rougher popular music with punk's attack and a leader who sings badly on purpose." },
    { artist: "Amy Winehouse", album: "Back to Black", year: "2006", note: "British soul revivalism treated as sincere inheritance rather than pastiche, with a full horn section behind a singular voice." },
  ],
});
