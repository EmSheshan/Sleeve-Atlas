import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Neil Young & Crazy Horse",
  album: "Rust Never Sleeps",
  year: "1979",
  heading: "Rust Never Sleeps — Neil Young & Crazy Horse (1979)",

  albumLine:
    "Released 22 June 1979 on Reprise, built from live performances overdubbed in the studio afterwards. An acoustic first side and an electric second — a record that is structurally an argument, and Young's response to punk.",

  overview: [
    "By 1979 Young was 33 and had been a major figure for a decade, which in the terms punk had just imposed made him part of the problem. Most of his generation responded to that by ignoring it or sulking. Young's response was to agree with the diagnosis and then out-argue it, and the album is shaped as the argument: one side of solo acoustic songs, one side of Crazy Horse at maximum distortion, with a matched pair of songs opening and closing the record in each mode.",

    "The title came from Devo. Mark Mothersbaugh had it from a Rust-Oleum advertising slogan, and Young's account of the conversation is the whole thesis in one line: \"he just said 'Well it's better to burn out 'cause rust never sleeps' and I thought, well all right, that makes a lot of sense to me.\" The songs take it literally — rust as the slow decay of anyone who keeps going, against the clean exit of burning out, with Johnny Rotten named directly in the lyric.",

    "The recording method is unusual and mostly invisible. These are live performances with studio overdubs layered on, which is why the electric side has the size of a stadium and the detail of a studio at once. It also means the acoustic side carries actual room sound rather than the padded quiet of a folk session.",

    "It reached No. 8 and took Rolling Stone's album of the year; Robert Christgau wrote that Young was \"wiser but not wearier, victor so far over the slow burnout his title warns of.\" The long consequence is Seattle: both Nirvana and Pearl Jam cited the distorted guitar on the second side as a model, which is the main reason Young acquired the title of godfather of grunge. The connection turned grim in 1994, when Kurt Cobain quoted a line from the album's closing song in his suicide note — a use of the phrase precisely opposite to what the record argues, and one Young has spoken about with visible distress since.",
  ],

  listeningNotes: [
    {
      label: "Two sides, two bands",
      text: "Side one is one man and an acoustic guitar; side two is Crazy Horse at full volume. The same songs bookend both, so the contrast is the structure.",
    },
    {
      label: "Distortion as texture, not aggression",
      text: "Young's electric tone is huge, fuzzy and slightly out of control, closer to a wall of noise than to riffing — the sound Seattle took wholesale a decade later.",
    },
    {
      label: "Crazy Horse's deliberate looseness",
      text: "The band plays behind the beat and slightly out of tune with each other, which is the point: precision would kill it.",
    },
    {
      label: "Live takes with overdubs",
      text: "Recorded in front of audiences and then layered in the studio, so it has crowd-scale weight and studio-scale detail simultaneously.",
    },
    {
      label: "A harmonica and a high voice",
      text: "The acoustic side leans on Young's thin, reedy tenor and harmonica racks, unchanged from his 1969 records and utterly unfashionable in 1979.",
    },
  ],

  sources: [
    { title: "Rust Never Sleeps — Wikipedia", url: "https://en.wikipedia.org/wiki/Rust_Never_Sleeps" },
    { title: "Hey Hey, My My (Into the Black) — Wikipedia", url: "https://en.wikipedia.org/wiki/My_My,_Hey_Hey_(Out_of_the_Blue)" },
    { title: "Neil Young — Wikipedia", url: "https://en.wikipedia.org/wiki/Neil_Young" },
  ],

  influencedBy: [
    { artist: "Sex Pistols", album: "Never Mind The Bollocks, Here’s The Sex Pistols", year: "1977", note: "The record he is answering; Johnny Rotten is named in the lyric and the album's whole premise is a reply to punk's verdict on his generation." },
    { artist: "The Stooges", album: "Raw Power", year: "1973", note: "The precedent for distorted guitar as a sustained texture rather than a series of riffs." },
  ],

  influenced: [
    { artist: "Nirvana", album: "Nevermind", year: "1991", note: "Cobain named Young's distorted guitar an influence; the loud-quiet contrast this album builds into its sides became a song-level device." },
    { artist: "Pearl Jam", album: "Ten", year: "1991", note: "The band later toured and recorded with Young, and took the Crazy Horse model of loose, heavy playing directly." },
    { artist: "Screaming Trees", album: "Dust", year: "1996", note: "Heavy rock turning toward folk and acoustic writing without losing weight — the two-sided structure made an argument for it." },
  ],
});
