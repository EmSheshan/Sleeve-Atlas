import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "The Darkness",
  album: "Permission to Land",
  year: "2003",
  heading: "Permission to Land — The Darkness (2003)",

  albumLine:
    "Released 7 July 2003 in Britain on Atlantic and 16 September in America, produced by Pedro Ferreira at Chapel Studio in Lincolnshire and Paul Smith Music in London. It's hard rock and glam played entirely straight — a debut album that had no business succeeding in 2003 and sold 1.4 million copies in the UK.",

  overview: [
    "They were from Lowestoft, in Suffolk, and had formed in 2000: the brothers Justin Hawkins on vocals and guitar and Dan Hawkins on guitar, with Frankie Poullain on bass and Ed Graham on drums. Their reference points were roughly 1974 to 1983 — Queen, AC/DC, Thin Lizzy, Def Leppard — and they made no attempt to update them. Only two record labels showed any interest; the industry read them as uncool, which in 2003 they were.",

    "The music around them explains why. The charts belonged to the garage-rock revival, to nu-metal in its late stages, and to R&B — all of which valued a particular kind of studied cool. Guitar solos, falsetto, spandex and songs about wanting a woman were not merely unfashionable but faintly embarrassing, associated with everything punk and then grunge had supposedly settled. The Darkness's actual innovation was refusing the ironic frame that would have made it safe.",

    "That refusal is the record's one real argument, and it was contested at the time and since. Critics repeatedly called them a joke band; the A&R executive Nick Raphael pushed back, saying \"what they did was real; they weren't copying anyone. If they were copying, then they were copying someone from twenty years ago.\" The songs are funny — deliberately, in their phrasing and their excess — but they are also competently written and played by people who plainly love the form. Both readings have evidence, and the album works either way, which is probably why it sold.",

    "It debuted at No. 2 in Britain, climbed to No. 1 and stayed four weeks, went four times platinum, and reached No. 36 in America. \"I Believe in a Thing Called Love\" got to No. 2, as did a Christmas single. They took three BRIT Awards in 2004 — Best Group, Best Rock Group, Best Album — and two Kerrang! Awards. The reviews split hard: Pitchfork gave it 8.4, at least one major publication graded it a D, and Metacritic settles at 79. One reviewer's summary is the fairest thing said about it: it \"sounds nothing like anything else that was released in 2003.\" Decibel inducted it into their Hall of Fame in 2019.",
  ],

  listeningNotes: [
    {
      label: "Justin Hawkins's falsetto",
      text: "He spends much of the record in a shrieking upper register, sustained and unhedged. It is the thing people either enjoy immediately or cannot get past, and it is not treated as a gag.",
    },
    {
      label: "Layered guitar harmonies",
      text: "Dan and Justin stack harmonised leads in the Thin Lizzy and Queen manner, multi-tracked into small orchestras, rather than playing one solo over a rhythm part.",
    },
    {
      label: "Handclaps and stacked backing vocals",
      text: "Choruses arrive with gang vocals and claps mixed forward, a seventies arena device deployed without apology.",
    },
    {
      label: "Clean, dry, un-nineties production",
      text: "Ferreira records the drums tight and the guitars bright, avoiding both grunge sludge and nu-metal compression. It sounds a decade or two out of time on purpose.",
    },
    {
      label: "Suffolk folklore in a hard rock song",
      text: "\"Black Shuck\" takes the legend of a spectral black dog said to have appeared at Bungay, close to where the band grew up, and plays it as a riff. The parochial detail is what keeps the pastiche from being generic.",
    },
    {
      label: "Genuine tempo and dynamic variation",
      text: "The album moves between fast rockers, a ballad and mid-tempo strut rather than holding one gear, which is the seventies album-sequencing habit they copied most faithfully.",
    },
  ],

  sources: [
    { title: "Permission to Land — Wikipedia", url: "https://en.wikipedia.org/wiki/Permission_to_Land" },
    { title: "The Darkness (band) — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Darkness_(band)" },
    { title: "Black Shuck — Wikipedia", url: "https://en.wikipedia.org/wiki/Black_Shuck" },
  ],

  influencedBy: [
    { artist: "Queen", album: "A Night at the Opera", year: "1975", note: "The stacked vocal harmonies, multi-tracked guitar orchestras and unembarrassed theatricality are lifted wholesale." },
    { artist: "AC/DC", album: "Back in Black", year: "1980", note: "The riff economy and the high-register male vocal over a tight rhythm section." },
    { artist: "Thin Lizzy", album: "Jailbreak", year: "1976", note: "Twin harmonised lead guitars used as the main melodic voice." },
  ],

  influenced: [
    { artist: "Greta Van Fleet", album: "Anthem of the Peaceful Army", year: "2018", note: "The later vogue for young bands playing seventies hard rock without irony, and the same argument about whether that counts as tribute or pastiche." },
  ],
});
