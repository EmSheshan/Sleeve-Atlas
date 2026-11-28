import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "The Jam",
  album: "Sound Affects",
  year: "1980",
  heading: "Sound Affects — The Jam (1980)",

  albumLine:
    "Released 28 November 1980 on Polydor (uDiscover says 6 December), and produced by the band with Vic Coppersmith-Heaven, a producer, though the credit varies by source. It's post-punk and psychedelic pop, and it's their fifth album, after Setting Sons (1979).",

  overview: [
    "Wikipedia says the album was recorded at The Town House in London between 15 June and 22 October 1980, and that it is the only Jam album co-produced by the band. Singer and guitarist Paul Weller described it at release as \"a mixture between Revolver and Michael Jackson's Off The Wall,\" per writer Valerie Siebert of The Quietus and Wikipedia, which adds that he later said Revolver was a major influence. Weller called it his favourite Jam album, per Wikipedia citing BBC Radio 6 Music. The cover is a pastiche of the BBC Radiophonic Workshop's Sound Effects LP series.",

    "Wikipedia says Polydor wanted one song as the first single but Weller insisted on another, and that Polydor A&R man Dennis Munday polled friends who had heard the sessions, who chose Weller's pick. Bassist Bruce Foxton told MusicRadar writer Matt Frost, of the album's best-known acoustic song, that Weller \"pretty much had it as you hear it\" and \"it was a bit of a departure for us, because it was acoustic.\" Foxton said the arrangement was \"quite minimal\": \"The drums are very sparse and then there's just that little run of a bass line.\" Weller said, via BBC Radio 2 as quoted by Frost, that he wrote it after coming home from a pub in \"10 or 20 minutes or something.\"",

    "Wikipedia says the album is in 1001 Albums You Must Hear Before You Die; the book's text wasn't found. It quotes Mojo in 2007 calling it \"pop psychedelia meets the Gang of Four: Weller's great post-punk statement is his most sophisticated album.\" Siebert hears \"a stark, steely quality among the tracks\" and \"arguably the least soulful Paul Weller record there is,\" and notes \"Weller often toes the thin line between homage and theft.\"",
  ],

  listeningNotes: [
    {
      label: "A borrowed bassline",
      text: "Per Wikipedia, \"Start!\" is built on an almost exact copy of the bassline of The Beatles' \"Taxman,\" with a homage to its guitar solo; Siebert says \"the nick is undeniable.\"",
    },
    {
      label: "Serrated guitar over a forceful bass",
      text: "Siebert hears \"a forceful bass line from Bruce Foxton\" that is \"sawed by serrated guitar,\" giving the record its steely edge.",
    },
    {
      label: "A sparse acoustic song",
      text: "\"That's Entertainment\" is acoustic with very sparse drums and a short bass run, which Foxton called a departure for the band.",
    },
    {
      label: "Funk bass and psychedelic effects",
      text: "Wikipedia says \"Pretty Green\" has a funk bassline and rhythm, melodic guitar breaks and psychedelic effects.",
    },
    {
      label: "A French spoken vocal",
      text: "Wikipedia credits Laurent Locher with French spoken vocals on \"Scrape Away,\" an unusual texture for a Jam record.",
    },
  ],

  sources: [
    { title: "The Jam, Sound Affects — The Quietus (Valerie Siebert, 2010)", url: "https://thequietus.com/?p=5249" },
    { title: "The Jam, Sound Affects — uDiscover Music (Paul Sexton, 2025)", url: "https://www.udiscovermusic.com/stories/the-jam-sound-affects-album" },
    { title: "Bruce Foxton on That's Entertainment — MusicRadar (Matt Frost, 2023)", url: "https://www.musicradar.com/news/bassist-bruce-foxton-on-the-story-of-the-jams-thats-entertainment-it-was-a-bit-of-a-departure-for-us-because-it-was-acoustic" },
    { title: "Paul Weller on Going Underground — MusicRadar (Ed Mitchell, 2022)", url: "https://www.musicradar.com/news/the-jam-paul-weller-going-underground-interview" },
    { title: "The story behind That's Entertainment — Far Out (Andrew Clayman, 2026)", url: "https://faroutmagazine.co.uk/the-story-behind-the-jam-thats-entertainment/" },
    { title: "Sound Affects — Wikipedia", url: "https://en.wikipedia.org/wiki/Sound_Affects" },
  ],

  influencedBy: [
    { artist: "The Beatles", album: "Revolver", year: "1966", note: "Weller called the record \"a mixture between Revolver and Michael Jackson's Off The Wall,\" and a bassline and guitar-solo homage from \"Taxman\" is documented on Wikipedia." },
    { artist: "Michael Jackson", album: "Off the Wall", year: "1979", note: "Same Weller statement; Wikipedia says the influence shows especially in drummer Rick Buckler's playing, though that attribution is Wikipedia's, not Weller's." },
  ],

  influenced: [],
});
