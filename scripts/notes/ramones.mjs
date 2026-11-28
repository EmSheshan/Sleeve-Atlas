import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Ramones",
  album: "Ramones",
  year: "1976",
  heading: "Ramones — Ramones (1976)",

  albumLine:
    "Released 23 April 1976 on Sire Records, and produced by Craig Leon, a producer, with drummer Tommy Ramone as associate producer. It's punk rock, and it's the band's debut album.",

  overview: [
    "Wikipedia says the band recorded at Plaza Sound in the Radio City Music Hall building for $6,400, and sources split on the dates, with Wikipedia saying January 1976 and Mojo and Louder February. Session length is also contested: Wikipedia and Vice say about a week, with three days for instruments and four for vocals, while Tommy told Mojo writer Bob Mehr that tracking and overdubs took two or three days plus a fourteen-hour mix. Tommy said, \"The biggest problem was the lack of time,\" and, \"At the most we did two takes of the songs.\" He called it \"in a strange way, a lo-fi work of art.\" Leon wanted separation, so each member played in a different room, linked by headphones.",

    "Guitarist Johnny and bassist Dee Dee left after the basic tracks, and Tommy worked with singer Joey on vocals and overdubs. Joey's vocals were double-tracked, inspired by John Lennon's Beatles recordings, and Tommy said the band imitated the odd split-channel stereo of early Beatles records; Wikipedia, citing author Jon Savage, calls the recording \"a deliberate exaggeration of the techniques used by the Beatles in the early 1960s.\" Tommy said of the house engineers, \"They thought a bunch of thugs had come into the control room.\" Leon said, via Louder writer Kris Needs, \"I credited Tommy with associate producer because it was basically his concept on that album,\" and, via Far Out, \"The Ramones were the Bizarro World Beatles.\"",

    "Wikipedia says the album is in the book 1001 Albums You Must Hear Before You Die; the book's text wasn't found. It lists the 2022 Rolling Stone list of best debut albums ranking it first. Critic Robert Christgau wrote in 1976, \"For me, it blows everything else off the radio,\" and critic Stephen Thomas Erlewine of AllMusic found it \"all about speed, hooks, stupidity, and simplicity.\" Clash singer Joe Strummer said, per Louder, \"It can't be stressed enough how great the Ramones' first album was to the scene in London.\"",
  ],

  listeningNotes: [
    {
      label: "A hard stereo split",
      text: "Far Out, Louder and Loudwire say bass sits on the left, guitar on the right, and drums and vocals in the centre, which makes each part audible in a roughly half-hour record.",
    },
    {
      label: "Double-tracked lead vocals",
      text: "Joey's vocals were doubled, in the manner of Lennon's Beatles recordings, per Tommy in Mojo.",
    },
    {
      label: "A pipe organ in a punk song",
      text: "Wikipedia says Leon played the Radio City Wurlitzer pipe organ on \"Let's Dance.\"",
    },
    {
      label: "Bells and glockenspiel",
      text: "Wikipedia says \"I Wanna Be Your Boyfriend\" uses 12-string guitar, glockenspiel and tubular bells, a pop-record sweetener under the punk drive.",
    },
    {
      label: "No more than two takes",
      text: "Tommy said at most two takes were done of any song, which accounts for the fast, loose feel Far Out calls \"unhinged, speed fuelled rockabilly.\"",
    },
  ],

  sources: [
    { title: "Inside the making of the Ramones' debut album — Mojo (Bob Mehr, interview with Tommy Ramone)", url: "https://mojo4music.com/articles/stories/inside-the-making-of-the-ramones-debut-album" },
    { title: "Ramones debut album story — Louder (Kris Needs, 2026)", url: "https://www.loudersound.com/bands-artists/ramones-debut-album-story" },
    { title: "How the Ramones recorded their iconic debut album — Far Out (Arun Starkey, 2022)", url: "https://faroutmagazine.co.uk/how-ramones-recorded-iconic-debut-album/" },
    { title: "Ramones' debut album, a classic review — Far Out (Arun Starkey, 2021)", url: "https://faroutmagazine.co.uk/ramones-debut-album-classic-review/" },
    { title: "How the Ramones started the pop-punk revolution — Far Out (Ben Forrest, 2025)", url: "https://faroutmagazine.co.uk/ramones-pop-bands-punk-rock-revolution/" },
    { title: "50 years ago today, rock music was changed forever — Vice (Lauren Boisvert, 2026)", url: "https://www.vice.com/en/article/50-years-ago-today-rock-music-was-changed-forever-with-debut-album-that-was-recorded-in-one-week/" },
    { title: "Ramones' self-titled debut album anniversary — Loudwire (Graham Hartmann, 2022)", url: "https://loudwire.com/ramones-self-titled-debut-album-anniversary/" },
    { title: "Ramones (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Ramones_(album)" },
    { title: "Ramones (Screeching Weasel album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Ramones_(Screeching_Weasel_album)" },
  ],

  influencedBy: [],

  influenced: [
    { artist: "Screeching Weasel", album: "Ramones", year: "1993", note: "Per Wikipedia, the band covers the whole album, mimicking its stereo layout; singer Ben Weasel said they \"could do a halfway decent job with their first album.\" The year is given as 1993 by Wikipedia, with recording in 1992." },
  ],
});
