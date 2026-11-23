import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "John Coltrane",
  album: "A Love Supreme",
  year: "1965",
  heading: "A Love Supreme — John Coltrane (1965)",

  albumLine:
    "Released in January 1965 on Impulse! Records, and produced by Bob Thiele, a record producer. It's modal and spiritual jazz in a four-part suite, and it follows Coltrane's Crescent (1964).",

  overview: [
    "Wikipedia says the music was recorded in a single session on 9 December 1964 at Rudy Van Gelder's studio in Englewood Cliffs, New Jersey, with Coltrane on tenor saxophone, pianist McCoy Tyner, bassist Jimmy Garrison and drummer Elvin Jones. Coltrane's chanted vocal parts were overdubbed. Alternate takes of the opening movement were made the next day with saxophonist Archie Shepp and a second bassist, Art Davis, per Wikipedia and ECM Reviews.",

    "Writer Ashley Kahn's NPR piece quotes Tyner on the day: \"Rudy that day dimmed the lights in his studio. I'd never seen him do that and it sort of set an atmosphere.\" He added, \"We had been playing some of that music and we didn't know what it was going to be until we got into the studio.\" Jones said, \"I felt I was almost part of his mind, almost telepathic in a way.\" Coltrane's liner notes, quoted by writer Farah Joan Fard of GRAMMY.com, describe a \"spiritual awakening which was to lead me to a richer, fuller, more productive life.\" Wikipedia floats possible inspirations such as Coltrane's home and Ahmadiyya Islam, but none of the sources opened confirmed them.",

    "Wikipedia says the album is in 1001 Albums You Must Hear Before You Die; the book's text wasn't found. It lists Rolling Stone placing it 47th in 2003 and 66th in 2020, and its entry into the US National Recording Registry in 2015. Writer Adam Shatz of the New York Review of Books calls the studio version \"a sonic architecture of exacting, almost divine symmetry.\" Critic Tom Hull, via Wikipedia, called it \"the most perfectly plotted single piece of jazz ever recorded,\" while the Penguin Guide to Jazz asks if it is the greatest jazz album of its period \"or the most overrated?\" Genre labels vary too, from modal to post-bop to avant-garde.",
  ],

  listeningNotes: [
    {
      label: "A four-note motif that gets sung",
      text: "Per Wikipedia, Garrison states the motif on bass in \"Acknowledgement,\" Coltrane varies it on tenor and then chants it in overdubs.",
    },
    {
      label: "Quartet telepathy",
      text: "Jones's remark about feeling part of Coltrane's mind shows in how drums and saxophone answer each other without a cue.",
    },
    {
      label: "Chords built in fourths",
      text: "Writer Tyran Grillo of ECM Reviews says \"Tyner's chords, built in fourths, occupy the edge of our attention,\" leaving open space for the horn.",
    },
    {
      label: "Soft timpani",
      text: "Grillo says the timpani under \"Psalm\" have \"an enormous softness,\" adding weight without volume.",
    },
    {
      label: "A saxophone recitation",
      text: "In \"Psalm,\" Coltrane plays what he called a \"musical narration\" of the poem printed in the liner notes; scholar Lewis Porter calls it a \"wordless recitation,\" per Wikipedia.",
    },
  ],

  sources: [
    { title: "John Coltrane's eternal A Love Supreme — NPR via Texas Public Radio (Ashley Kahn, 2002)", url: "https://www.tpr.org/2002-11-25/john-coltranes-eternal-a-love-supreme" },
    { title: "Coltrane's new Love Supreme — New York Review of Books (Adam Shatz, 2021)", url: "https://www.nybooks.com/online/2021/10/07/coltranes-new-love-supreme/" },
    { title: "A Love Supreme anniversary — GRAMMY.com (Farah Joan Fard, 2024)", url: "https://grammy.com/news/john-coltrane-a-love-supreme-anniversary-spiritual-jazz-revolution" },
    { title: "Classics: A Love Supreme — ECM Reviews (Tyran Grillo)", url: "https://ecmreviews.com/2026/11/12/classics-a-love-supreme/" },
    { title: "A Love Supreme — Wikipedia", url: "https://en.wikipedia.org/wiki/A_Love_Supreme" },
    { title: "Love Devotion Surrender — Wikipedia", url: "https://en.wikipedia.org/wiki/Love_Devotion_Surrender" },
    { title: "Karma (Pharoah Sanders album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Karma_(Pharoah_Sanders_album)" },
  ],

  influencedBy: [],

  influenced: [
    { artist: "Pharoah Sanders", album: "Karma", year: "1969", note: "Shatz says saxophonist Pharoah Sanders adapted the bass riff from \"Acknowledgement\" in a piece on this album; Sanders had played with Coltrane in 1965." },
    { artist: "Carlos Santana", album: "Love Devotion Surrender", year: "1973", note: "Wikipedia says guitarist Carlos Santana and guitarist John McLaughlin's title track is a version of \"Acknowledgement\"; the line is uncited there." },
  ],
});
