import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "The xx",
  album: "xx",
  year: "2009",

  heading: "xx — The xx (2009)",

  albumLine:
    "Released 14 August 2009 on Young Turks, then an imprint of XL Recordings, produced by the band's own Jamie Smith and engineered by Rodaidh McDonald. Indie pop reduced almost to outline — one guitar, one bass, programmed beats, two voices. It's their debut, made when all four members had just turned twenty, and the only album made by that line-up.",

  overview: [
    "Romy Madley Croft, who sings and plays guitar, and Oliver Sim, who sings and plays bass, had known each other since infancy. They formed the band in 2005 with Smith, a programmer and producer, and Baria Qureshi on keyboards and second guitar, all four at the Elliott School in south London. They rehearsed quietly in bedrooms and traded lyrics remotely, late at night. What they were listening to wasn't the indie lineage critics assumed: they cited American R&B producers The Neptunes and Timbaland for using few elements, clapped percussion and a lot of empty space, and covered Aaliyah and Womack & Womack live. When reviewers reached for Cocteau Twins, Croft said she had never heard them before the album came out.",

    "Myspace demos brought them to Young Turks, run by their manager Caius Pawson. Earlier sessions with producers including Diplo and Kwes went nowhere; Pawson handed McDonald three CDs of demos, one labelled \"What Producers Did Wrong\". From December 2008 they worked in XL's converted rear garage in west London, a room Croft compared to a bathroom, usually at night once the staff had left — \"isolated and quite creepy\", she said. McDonald's principle was that \"the best stuff was the most sparse\", and he kept stray noise in deliberately: \"I wanted it to sound like people in a room, rather than this polished kind of perfect crystalline thing.\"",

    "BBC Radio 1 and NME ignored it. It entered the UK chart at No. 36 on 4,180 copies and then sold steadily for forty-four weeks, while licensing put its instrumental opening onto sports highlights, crime dramas and the BBC's 2010 election coverage — critic Neil McCormick reckoned that earned them half a million sales \"without ever having anything as vulgar as a hit\". The 2010 Mercury Prize made it one anyway, pushing it to No. 3 the week of the win. Not everyone was sold — Jon Caramanica of the New York Times found them withholding, \"two shy teenagers, eyes cast downward, awkwardly talking to the ground\" — but critic Alexis Petridis later heard its muted, echoing guitars in the biggest pop singles of 2016, and songwriter Ryan Tedder said its \"hauntingness\" comes up in roughly every other writing session. Qureshi was dismissed after that first autumn of touring. It eventually sold a million copies.",
  ],

  listeningNotes: [
    {
      label: "Melody with the rests left in",
      text: "Guitar figures are a few notes with silence between them, and nothing is layered in to fill the gap. The arrangements are defined by what was left out.",
    },
    {
      label: "Reverb from a practice amp",
      text: "Croft's icy guitar tone was an accident of cheap gear: \"My guitar sound pretty much came from discovering there was reverb on my little practice amp and really loving the mood it created.\" Leads went through a delay pedal into a small Roland combo set to reverb.",
    },
    {
      label: "Bass tracked out in the corridor",
      text: "Sim's 1970s Fender Precision was often recorded through an amp in the hallway outside the tiny studio. The corridor's ambience is audible in the low end, which is why the bass sounds further away than the vocals.",
    },
    {
      label: "Two voices that never harmonise",
      text: "Croft and Sim sang together but rarely backed each other, trading lines instead. Croft has described it as singing past each other — the duets feel like two monologues that happen to rhyme.",
    },
    {
      label: "Accidents kept as parts",
      text: "A loose component rattling inside a guitar amp became percussion on \"Shelter\" — McDonald called it \"this missing piece of percussion that the track needed!\" Several such noises were kept rather than cleaned up.",
    },
  ],

  sources: [
    { title: "xx Turns 10 — Stereogum (James Rettig)", url: "https://stereogum.com/2054134/the-xx-debut-album-turns-10/reviews/the-anniversary" },
    { title: "The xx's Debut Album 'xx' — Albumism (Andy Healy)", url: "https://albumism.com/features/the-xx-debut-album-xx-album-anniversary" },
    { title: "xx (The xx album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Xx_(The_xx_album)" },
  ],

  influencedBy: [
    { artist: "Aaliyah", album: "One in a Million", year: "1996", note: "The band covered a song from it live and on this album's vinyl edition; producer Timbaland's method here — few elements, clapped percussion, space held open — is the model Croft and Sim name." },
    { artist: "Womack & Womack", album: "Conscience", year: "1988", note: "They covered its best-known single live and as a bonus track; its slow, uncluttered chord movement and conversational two-singer delivery run under this record." },
  ],

  influenced: [
    { artist: "Frank Ocean", album: "Channel Orange", year: "2012", note: "James Rettig, writing for Stereogum, traces \"the watery aesthetic that would come to define Frank Ocean and a generation of R&B\" back to this album — the same reverb-soaked sparseness and spoken-close vocal." },
    { artist: "Shawn Mendes", album: "Handwritten", year: "2015", note: "Critic Alexis Petridis identified this album's muted, echoing guitar sound in the mid-2010s pop singles that followed, this record's lead single among them." },
  ],
});
