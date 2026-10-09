import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Led Zeppelin",
  album: "Led Zeppelin IV",
  year: "1971",
  heading: "Led Zeppelin IV — Led Zeppelin (1971)",

  albumLine:
    "Released 8 November 1971 on Atlantic, produced by guitarist Jimmy Page and engineered by Andy Johns. Recorded largely at Headley Grange, a cold and half-derelict house in Hampshire, using the Rolling Stones' mobile studio, and issued with no title and no band name anywhere on the sleeve.",

  overview: [
    "Led Zeppelin III had been met in late 1970 with reviews that ranged from lukewarm to dismissive, largely because of how much acoustic material was on it. The band's answer was not to explain themselves but to remove their name from the next record altogether. Page settled on four hand-drawn symbols, one chosen by each member, and nothing else. Atlantic objected; the band simply refused to hand over the master tapes until the label gave in. Page's account of the thinking was flat: \"We just happened to have a lot of faith in what we were doing.\"",

    "Most of it was made in a house rather than a studio. Headley Grange was damp and freezing — bassist John Paul Jones remembered that \"we all ran in when we arrived in a mad scramble to get the driest rooms\" — and Johns recalled the band complaining about the cold while Page worried instead about \"creepy noises or flying fucking furniture.\" The Rolling Stones' mobile unit was parked outside, soundproofed with egg cartons and not remotely state of the art. Johns thought that helped: it \"contributed to the air of spontaneity throughout the recording sessions.\"",

    "That setting is audible in the result. Working in a house with a three-storey hall meant the building could be used as equipment, and several of the album's most recognisable sounds exist because someone put a microphone somewhere unusual rather than because of anything on a console.",

    "It worked commercially on a scale almost nothing matches: over 37 million copies sold worldwide as of 2014, and 24× platinum certification in the United States alone. Reviewers at the time called it the band's most consistently good album; the later consensus has been less measured, treating it as the definitive Led Zeppelin record and, by extension, a founding document for heavy metal.",
  ],

  listeningNotes: [
    {
      label: "Two microphones on a staircase",
      text: "Bonham's kit was set up in the Minstrels' Gallery, a three-storey hall, with a pair of Beyerdynamic M160s hung from the stairs above it. That distance, not the drummer alone, is the sound on \"When the Levee Breaks.\"",
    },
    {
      label: "A kick drum nobody bothered to mic",
      text: "Johns left the bass drum without a close microphone because it was already loud enough through the overheads — the opposite of standard practice then and now.",
    },
    {
      label: "An echo unit used as a compressor",
      text: "The drums were squashed through a Binson Echorec, an Italian tape-echo box, which is where the thickness and the slight smear on the attack come from.",
    },
    {
      label: "Acoustic and electric given equal weight",
      text: "Fingerpicked, folk-derived writing sits beside the heaviest riffs on the record rather than being quarantined on one side — the direction III was mocked for, continued without apology.",
    },
    {
      label: "One guest voice, used once",
      text: "Sandy Denny of Fairport Convention trades verses with Robert Plant on \"The Battle of Evermore\" — the only female voice on any Led Zeppelin record, and she was given her own symbol on the sleeve.",
    },
  ],

  sources: [
    { title: "Led Zeppelin IV — Wikipedia", url: "https://en.wikipedia.org/wiki/Led_Zeppelin_IV" },
    { title: "How a Harsh Recording Environment Inspired 'Led Zeppelin IV' — Ultimate Classic Rock", url: "https://ultimateclassicrock.com/led-zeppelin-iv-recording/" },
    { title: "How Led Zeppelin Finally Conquered The World With 'Led Zeppelin IV' — GRAMMY.com", url: "https://www.grammy.com/news/led-zeppelin-iv-stairway-heaven-album-anniversary-record-video/" },
    { title: "Recreating the When the Levee Breaks Drum Sound — Vintage King", url: "https://vintageking.com/blog/when-the-levee-breaks-drum/" },
  ],

  influencedBy: [
    { artist: "Led Zeppelin", album: "Led Zeppelin III", year: "1970", note: "The acoustic turn this record completes, worked out in the same Hampshire house; the dismissive reviews III drew are the reason this one carries no title at all." },
    { artist: "Fairport Convention", album: "Liege & Lief", year: "1969", note: "The British folk revival the album's modal, fingerpicked writing draws on — and a direct personnel link, since Sandy Denny sings on this record." },
  ],

  influenced: [
    { artist: "Beastie Boys", album: "Licensed to Ill", year: "1986", note: "Built the opening of \"Rhymin & Stealin\" on the Levee drum break, among the earliest of hundreds of records to sample it." },
    { artist: "Nirvana", album: "Nevermind", year: "1991", note: "Dave Grohl has named Bonham as his model repeatedly; the hit-hard-into-a-big-room drum approach here, rather than tight close-miking, is what he took." },
  ],
});
