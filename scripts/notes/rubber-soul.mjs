import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Beatles",
  album: "Rubber Soul",
  year: "1965",
  heading: "Rubber Soul — The Beatles (1965)",

  albumLine:
    "Released 3 December 1965 on Parlophone in the UK and Capitol in the US, produced by George Martin and recorded in roughly four weeks at EMI Studios on Abbey Road. It's the record where the Beatles stopped writing songs for the singles market and started writing an album — folk-rock phrasing, Dylan-inflected lyrics, and instrumental color the group hadn't reached for before.",

  overview: [
    "By late 1965 the Beatles had made four albums and starred in two films inside three years, nearly all of it written and recorded around touring. Rubber Soul was the first LP they made without a film, a radio series, or an imminent tour pressing on the sessions — just a Christmas release date EMI had already locked in. For the first time they had the studio mostly to themselves, and the songwriting shows it.",

    "The sessions ran 12 October to 11 November 1965 — thirteen days of actual recording inside that month, around 113 hours plus seventeen more mixing — to meet a release date fixed before a note was cut. The same sessions produced a double A-side single, \"Day Tripper\" / \"We Can Work It Out,\" issued the same day, 3 December, but kept off the LP. That split mattered: for the first time a whole Beatles album carried no hit riding alongside it, just fourteen songs written for the record itself.",

    "Lennon called \"In My Life\" his \"first real major piece of work,\" crediting journalist Kenneth Allsop's prodding and Bob Dylan, whose Bringing It All Back Home had hit him hard that year; the album's turn toward self-examination over boy-girl filler follows Dylan's lead without copying his sound. The Byrds' jangling folk-rock fed back into Harrison's \"If I Needed Someone.\" And the band reached for new textures: Harrison's sitar on \"Norwegian Wood,\" the first time the instrument turned up on a pop record, fuzz bass on \"Think for Yourself,\" a harmonium, and a half-speed piano overdub standing in for harpsichord on \"In My Life.\"",

    "Reviews at the time were strong — NME praised its recording artistry, Newsweek dubbed them \"Bards of Pop\" — and it sold enormously, topping the charts on both sides of the Atlantic and moving 1.2 million copies in the US within nine days. The retrospective judgment has only grown: Rolling Stone placed it at No. 5 on its 2012 greatest-albums list, and AllMusic's Richie Unterberger calls the lyrics \"a quantum leap\" in thoughtfulness even where the subjects stayed close to love songs. Its most consequential listener was Brian Wilson, who called it \"the first album I listened to where every song was a gas\" and built Pet Sounds as an attempt to surpass it.",
  ],

  listeningNotes: [
    {
      label: "Sitar on \"Norwegian Wood\"",
      text: "Harrison plays a borrowed sitar as a plain melodic line rather than a drone — the first time the instrument appeared on a pop record, months before Revolver went further with it.",
    },
    {
      label: "Fuzz bass",
      text: "McCartney runs his Rickenbacker through a fuzzbox on \"Think for Yourself,\" a distorted low end the group hadn't used before.",
    },
    {
      label: "The \"harpsichord\" that isn't one",
      text: "Martin recorded a piano solo at half speed for \"In My Life\"; sped back up on tape it sounds like a harpsichord, which no one could actually play that fast.",
    },
    {
      label: "No single on the album",
      text: "Every track here was written for the LP, not spun off as a 45 — the hit from these sessions, \"Day Tripper\" / \"We Can Work It Out,\" came out the same day on its own.",
    },
    {
      label: "Harrison borrows from the Byrds",
      text: "\"If I Needed Someone\" runs on a ringing twelve-string riff close enough to the Byrds' \"The Bells of Rhymney\" that Harrison said as much himself.",
    },
    {
      label: "Harmony with nothing under it",
      text: "\"Nowhere Man\" opens on three-part vocal harmony with no instruments at all, a bare entrance the band hadn't tried before.",
    },
  ],

  sources: [
    { title: "Rubber Soul — Wikipedia", url: "https://en.wikipedia.org/wiki/Rubber_Soul" },
    { title: "Rubber Soul — AllMusic", url: "https://www.allmusic.com/album/rubber-soul-mw0000192940" },
    { title: "Pet Sounds — Wikipedia", url: "https://en.wikipedia.org/wiki/Pet_Sounds" },
    { title: "In My Life — Wikipedia", url: "https://en.wikipedia.org/wiki/In_My_Life" },
  ],

  influencedBy: [
    { artist: "Bob Dylan", album: "Bringing It All Back Home", year: "1965", note: "Lennon said \"In My Life\" — his \"first real major piece of work\" — was inspired by Dylan alongside journalist Kenneth Allsop; Dylan's example pushed the album toward self-examination over love-song formula." },
    { artist: "The Byrds", album: "Mr. Tambourine Man", year: "1965", note: "The Byrds' ringing, folk-derived guitar sound fed directly into Harrison's \"If I Needed Someone,\" built on a riff he acknowledged borrowing from their arrangement of \"The Bells of Rhymney.\"" },
  ],

  influenced: [
    { artist: "The Beach Boys", album: "Pet Sounds", year: "1966", note: "Brian Wilson called it \"the first album I listened to where every song was a gas\" and built Pet Sounds as an attempt to surpass it." },
    { artist: "The Rolling Stones", album: "Aftermath", year: "1966", note: "Brian Jones took up the sitar after hearing Harrison's playing on \"Norwegian Wood\" and used it on \"Paint It Black.\"" },
  ],
});
