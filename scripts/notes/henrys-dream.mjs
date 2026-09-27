import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Nick Cave & The Bad Seeds",
  album: "Henry's Dream",
  year: "1992",
  heading: "Henry's Dream — Nick Cave & The Bad Seeds (1992)",

  albumLine:
    "Released 27 April 1992 on Mute, recorded at Sound City Studios in Van Nuys, California over November and December 1991, and produced by David Briggs. It's punk-blues storytelling with acoustic guitars at its centre — the Bad Seeds' seventh album, and the one the band fought hardest over.",

  overview: [
    "Cave had been living in São Paulo for around two years, and the record carries that directly. He has said the songs were shaped by Brazilian street musicians — \"They'd get their acoustic guitars with one or two strings and bang away and make a racket that had no sense whatsoever\" — and the album duly puts hammered acoustic guitar where a band this loud would normally put electric. The opening track began as a melody he sang over his infant son's cradle, which is not a detail you'd guess from the finished result.",

    "This was also the moment the group's long-term lineup settled, with bassist Martyn P. Casey and keyboardist Conway Savage both appearing for the first time. The songs are narrative to an unusual degree even by Cave's standards — murder, pilgrimage, obsession, delivered as tales with characters rather than as confession.",

    "The production is the album's famous sore point. The band hired David Briggs, best known for his long association with Neil Young, precisely for his live-in-the-room approach. In practice it went badly. Cave's account is blunt: \"He was a fucking nightmare, that guy… I put a lot of energy into the writing of that record, and then for each day to see it drift away… it was a horrible, horrible experience.\" Engineer Tony Cohen's description is more diagnostic and more sympathetic to both sides — Briggs \"pushed them to play better, take after take. The performance was everything. But when it came to the mix, Briggs left all the faders in one spot.\" Cave and Mick Harvey ultimately remixed it themselves.",

    "Cave remained convinced the songs hadn't been served, which is why the live album that followed in 1993 exists — an unusually direct case of a band re-recording its own material to correct the record. None of this hurt its reception: No. 29 in the UK, fifth on NME's albums of 1992, and broadly strong reviews, with Robert Christgau among the dissenters. It sits as the hinge between the chaos of the eighties Bad Seeds and the more composed records that followed.",
  ],

  listeningNotes: [
    {
      label: "Acoustic guitar hammered, not strummed",
      text: "The rhythm guitar is acoustic and attacked hard enough to distort — the Brazilian street-musician approach Cave described, applied by a band with a full drum kit behind it.",
    },
    {
      label: "Everything at one level",
      text: "Briggs's mix left the faders largely static, so there's little dynamic shaping between verse and chorus. Whether that reads as raw immediacy or as flatness is exactly what the band and producer disagreed about.",
    },
    {
      label: "Songs as narratives",
      text: "These are stories with named characters, settings and plots rather than lyrics about feelings. Cave is closer to a balladeer here than a rock singer.",
    },
    {
      label: "Spanish and flamenco colours",
      text: "Several arrangements lean on minor-key figures and rapid nylon-string patterns that owe more to Iberian and Latin American folk forms than to blues.",
    },
    {
      label: "Conway Savage's piano underneath",
      text: "The new keyboardist's playing sits low in the arrangements, filling harmonic space behind the acoustic churn — most audible on the slower material.",
    },
    {
      label: "Live takes with the seams showing",
      text: "Briggs recorded the band playing together, take after take, rather than assembling parts. Timing wavers and the room is audible, which is the strongest argument for his method.",
    },
  ],

  sources: [
    { title: "Henry's Dream — Wikipedia", url: "https://en.wikipedia.org/wiki/Henry%27s_Dream" },
    { title: "30 years of Nick Cave's intoxicating album 'Henry's Dream' — Far Out", url: "https://faroutmagazine.co.uk/nick-caves-henrys-dream/" },
    { title: "Nick Cave interviewed (1992): Hyena circles the corpse — Elsewhere", url: "https://www.elsewhere.co.nz/absoluteelsewhere/2199/nick-cave-interviewed-1992-hyena-circles-the-corpse/" },
  ],

  influencedBy: [
    { artist: "Leonard Cohen", album: "Songs of Love and Hate", year: "1971", note: "The model Cave has repeatedly acknowledged for literary, narrative songwriting delivered in a limited but authoritative voice." },
    { artist: "Neil Young", album: "Tonight's the Night", year: "1975", note: "Briggs produced Young's ragged live-in-the-room records, and that method is precisely why the Bad Seeds hired him." },
  ],

  influenced: [
    { artist: "PJ Harvey", album: "To Bring You My Love", year: "1995", note: "Shares this record's gothic blues narrative mode; Harvey and Cave worked together closely in this period." },
  ],
});
