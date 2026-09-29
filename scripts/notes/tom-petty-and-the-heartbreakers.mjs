import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Tom Petty and the Heartbreakers",
  album: "Tom Petty & The Heartbreakers",
  year: "1976",
  heading: "Tom Petty and the Heartbreakers — Tom Petty and the Heartbreakers (1976)",

  albumLine:
    "Released 9 November 1976 on Shelter, produced by Denny Cordell at Shelter Studio in Hollywood. Lean guitar rock with sixties bones — their debut, and a record that had to go to Britain to be heard.",

  overview: [
    "The band came out of Gainesville, Florida: Tom Petty singing and playing guitar, Mike Campbell on lead guitar, Benmont Tench on keyboards, Ron Blair on bass and Stan Lynch on drums. Most of them had played together for years before moving to Los Angeles, which is audible — this is a band record rather than a singer with a backing group, and Campbell and Tench are as identifiable on it as Petty is.",

    "The timing was awkward in a way that shaped its reception. In late 1976 American rock radio meant stadium bands and soft California singer-songwriters, while punk was arriving in New York and London; a band playing tight, three-minute songs with twelve-string guitars and Byrds harmonies fitted neither camp. America ignored it. Britain, where punk's press was busy making room for anything short and unpretentious, did not: the album reached No. 24 there after a UK tour, with a single charting, and the band were briefly filed alongside new wave acts they had nothing in common with.",

    "It took roughly a year for that to feed back across the Atlantic. The album finally entered the American chart in 1978, peaked at No. 55 and went gold, with \"Breakdown\" reaching the Top 40 and \"American Girl\" becoming one of the most recognisable songs of the era despite never being a hit single.",

    "What has kept it is the writing and the economy. Denny Cordell, who had produced Joe Cocker and Procol Harum, recorded them dry and close with no padding, and the songs are built on the Byrds' jangle and the Rolling Stones' swagger without sounding like a revival. Petty spent the next four decades making versions of this record, and very few of them improved on it.",
  ],

  listeningNotes: [
    {
      label: "Mike Campbell's lead lines",
      text: "Short, melodic, fully composed figures rather than solos — he plays hooks, which is why the songs are so hard to forget.",
    },
    {
      label: "Twelve-string jangle",
      text: "Chiming Rickenbacker-style guitar straight out of the mid-sixties Byrds, entirely unfashionable in 1976 and the album's signature.",
    },
    {
      label: "Benmont Tench's organ",
      text: "Sustained Hammond pads sit under almost everything, filling the middle so two guitars don't have to.",
    },
    {
      label: "Petty's nasal drawl",
      text: "He sings flat and slightly sneering, closer to Dylan's phrasing than to any rock singer of the period.",
    },
    {
      label: "Songs kept short",
      text: "Almost nothing passes three and a half minutes, with no jamming, no extended intros and no fade-out solos. That restraint is most of why British listeners in 1977 could mistake a Florida bar band for new wave.",
    },
    {
      label: "Recorded dry and close",
      text: "Cordell leaves almost no reverb on anything, so the band sounds like five people in a room rather than an arena. It has dated far less than its contemporaries as a result.",
    },
  ],

  sources: [
    { title: "Tom Petty and the Heartbreakers (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Tom_Petty_and_the_Heartbreakers_(album)" },
    { title: "Tom Petty and the Heartbreakers — Wikipedia", url: "https://en.wikipedia.org/wiki/Tom_Petty_and_the_Heartbreakers" },
    { title: "Denny Cordell — Wikipedia", url: "https://en.wikipedia.org/wiki/Denny_Cordell" },
  ],

  influencedBy: [
    { artist: "The Byrds", album: "Mr. Tambourine Man", year: "1965", note: "The chiming twelve-string guitar and close harmony that the album's whole texture is built from." },
    { artist: "Bob Dylan", album: "Highway 61 Revisited", year: "1965", note: "Petty's nasal, conversational phrasing and his approach to a lyric line come directly from here; the two later worked together." },
    { artist: "The Rolling Stones", album: "Beggars Banquet", year: "1968", note: "The loose swagger of the rhythm section, and the model of a guitar band built on economy rather than virtuosity." },
  ],

  influenced: [
    { artist: "Bruce Springsteen", album: "Darkness on the Edge of Town", year: "1978", note: "The parallel American case for lean, tightly written guitar rock about ordinary lives, arriving two years later." },
    { artist: "The Strokes", album: "Is This It", year: "2001", note: "Short, hook-led guitar songs recorded dry with two guitars locked together — the lineage runs straight through." },
  ],
});
