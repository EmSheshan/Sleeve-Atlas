import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Malcolm McLaren",
  album: "Duck Rock",
  year: "1983",
  heading: "Duck Rock — Malcolm McLaren (1983)",

  albumLine:
    "Released 27 May 1983 on Charisma, produced by McLaren with Trevor Horn, arranged by Anne Dudley with J. J. Jeczalik on synthesizers. It splices South African township music, Appalachian square dance calls, Caribbean and South American rhythm and New York hip-hop — and it is as much an argument about credit as it is a record.",

  overview: [
    "McLaren was not a musician. He had managed the Sex Pistols, and his method was always to assemble other people's work into a provocation with his name on it. Here he travelled, recorded, and brought the results to Trevor Horn, whose studio team — Dudley and Jeczalik, shortly to form the Art of Noise — were then the most technically advanced producers in Britain. The Fairlight sampler made it possible to cut those recordings together into pop songs, and \"Duck Rock\" is one of the first albums to be built that way from end to end.",

    "In Britain it worked as an introduction. Interludes from the World's Famous Supreme Team's New York radio show run between tracks, and for a great many British listeners this was the first hip-hop they heard in any quantity — scratching, call-and-response, the sound of a show rather than a song. It did a lot to bring the form to a UK audience.",

    "The problem is whose music it is. The Boyoyo Boys, a South African township jive group, challenged the resemblance between their \"Puleng\" and the album's \"Double Dutch.\" The case settled out of court with compensation paid to the South African rights holders — but Horn and McLaren kept the songwriting credits. That outcome is the record in miniature: musicians in Soweto were paid something, while a London impresario who played nothing remained the credited author, and got the NME year-end placing.",

    "Both things are true at once and neither cancels the other. It is a genuinely inventive record that expanded what British pop imagined was available, and it is an act of extraction by someone with the resources to travel, record and litigate. NME placed it ninth among the albums of 1983 and 298th in their 500 greatest in 2013; the ethical argument has, if anything, got louder since.",
  ],

  listeningNotes: [
    {
      label: "Fairlight sampling as construction",
      text: "Field recordings are cut, pitched and looped into pop arrangements rather than played over. The technique was barely two years old.",
    },
    {
      label: "Township guitar and vocal harmony",
      text: "South African mbaqanga figures — bright interlocking guitar and close male harmony — carry several tracks outright.",
    },
    {
      label: "Radio show between the songs",
      text: "The World's Famous Supreme Team's patter and scratching run as interludes, framing the album as a broadcast being tuned across.",
    },
    {
      label: "A square dance caller",
      text: "Appalachian calling appears over electronic rhythm, one of the more startling juxtapositions on a record made of them.",
    },
    {
      label: "McLaren barely singing",
      text: "He talks, shouts and declaims rather than sings, present as a compere rather than a performer. Almost every musical element is someone else's.",
    },
  ],

  sources: [
    { title: "Duck Rock — Wikipedia", url: "https://en.wikipedia.org/wiki/Duck_Rock" },
    { title: "Malcolm McLaren — Wikipedia", url: "https://en.wikipedia.org/wiki/Malcolm_McLaren" },
    { title: "Boyoyo Boys — Wikipedia", url: "https://en.wikipedia.org/wiki/Boyoyo_Boys" },
  ],

  influencedBy: [
    { artist: "Sex Pistols", album: "Never Mind The Bollocks, Here’s The Sex Pistols", year: "1977", note: "McLaren managed them; the method of assembling other people's work into his own provocation is identical." },
    { artist: "Kraftwerk", album: "The Man Machine", year: "1978", note: "The electronic rhythm architecture that New York hip-hop and this record both built on." },
    { artist: "Talking Heads", album: "Remain in Light", year: "1980", note: "Came three years earlier and opened the same current — Western pop built on African rhythmic sources, with the same question hanging over it." },
  ],

  influenced: [
    { artist: "Paul Simon", album: "Graceland", year: "1986", note: "The same South African musical sources reached a vastly larger audience three years later, and the same argument about credit followed it." },
  ],
});
