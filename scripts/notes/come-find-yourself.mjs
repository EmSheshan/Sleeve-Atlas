import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Fun Lovin' Criminals",
  album: "Come Find Yourself",
  year: "1996",
  heading: "Come Find Yourself — Fun Lovin' Criminals (1996)",

  albumLine:
    "Released 20 February 1996 on Chrysalis and self-produced by the band, from sessions recorded in under a month in spring 1995. It's a rap-rock-blues hybrid with film dialogue stitched through it — a New York debut that became, improbably, a British institution.",

  overview: [
    "The band came together by accident. Brian \"Fast\" Leiser and Steve Borgovini worked at a New York club; Huey Morgan worked there too, and when booked acts failed to turn up the three of them filled in. EMI saw one of those stand-in sets and offered a deal. The resulting trio is unusually compact — Morgan on vocals and guitar, Leiser covering bass, keyboards, trumpet and harmonica, Borgovini on drums — which is why a record this stylistically busy still sounds like three people in a room.",

    "The music moves between rapped verses, blues-jazz guitar figures, lounge-ish keyboard and funk rhythm, often inside one song. The Independent credited it with \"infectious rap\" drawing on \"musical influences way beyond the narrow confines of tired old G-funk\" — a pointed comparison in 1996, when the West Coast sound was the commercial default. What the Criminals offered instead was a New York crime-movie pastiche: wiseguy narration, cocktail-bar cool, violence described with a shrug.",

    "That pose was very much of its moment. Quentin Tarantino's Reservoir Dogs and Pulp Fiction had made this precise register — chatty, jokey criminals, pop-culture digressions — the dominant style in American film, and the band went straight to the source, sampling Tarantino dialogue outright. He is credited as a co-writer on the album's signature single as a result. It's a rare case where the influence is literal rather than atmospheric: the film is in the recording.",

    "The reception split sharply along geography. In the UK the album reached No. 7, went platinum, and stayed on the chart for something close to four years; \"Scooby Snacks\" became a Top 40 hit and a permanent fixture of British radio and student bars. In the US it peaked at No. 144. A New York band about New York found its actual audience three thousand miles away, and spent the rest of its career largely playing to it.",
  ],

  listeningNotes: [
    {
      label: "Film dialogue as hooks",
      text: "Sampled lines from Tarantino films are cut in as refrains rather than background colour, to the point that he holds a writing credit. The record leans on you already knowing the films.",
    },
    {
      label: "One man covering four instruments",
      text: "Leiser plays bass, keyboards, trumpet and harmonica, which is why the arrangements can switch from funk to lounge to blues without the band ever sounding like a bigger ensemble.",
    },
    {
      label: "Talked, not rapped hard",
      text: "Morgan delivers most verses in a conversational, half-sung New York drawl that sits well behind the beat. It's closer to narration than to the technical rapping dominating hip-hop at the time.",
    },
    {
      label: "Blues guitar in a hip-hop frame",
      text: "Clean, jazzy guitar figures and bent blues licks run over programmed-sounding drums. The combination is the album's core trick and it recurs constantly.",
    },
    {
      label: "Lounge-lizard cool as a mood",
      text: "Vibraphone-ish keyboard tones, brushed-sounding drums and trumpet give whole stretches the feel of a cocktail bar, deliberately at odds with what's being described.",
    },
  ],

  sources: [
    { title: "Come Find Yourself — Wikipedia", url: "https://en.wikipedia.org/wiki/Come_Find_Yourself" },
    { title: "Celebrating 30 Years of Fun Lovin' Criminals' Debut Album — Albumism", url: "https://albumism.com/anniversaries/fun-lovin-criminals-debut-album-come-find-yourself" },
    { title: "Classic Album: Fun Lovin' Criminals on Come Find Yourself — MusicRadar", url: "https://www.musicradar.com/news/tech/classic-album-fun-lovin-criminals-on-come-find-yourself-616582" },
  ],

  influencedBy: [
    { artist: "Beastie Boys", album: "Check Your Head", year: "1992", note: "The template for a New York trio playing their own instruments across rap, funk and rock rather than working purely from samples." },
    { artist: "Various Artists", album: "Pulp Fiction: Music from the Motion Picture", year: "1994", note: "Tarantino's dialogue is sampled directly and he holds a writing credit; the film's tone is the album's central pose." },
  ],

  // No substantial documented downstream influence found in reliable sources.
  influenced: [],
});
