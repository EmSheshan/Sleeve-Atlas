import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Sly & The Family Stone",
  album: "Stand!",
  year: "1969",
  heading: "Stand! — Sly and the Family Stone (1969)",

  albumLine:
    "Released 3 May 1969 on Epic, written and produced by Sly Stone at Pacific High Recording in San Francisco. Nine tracks of psychedelic soul and funk rock — their fourth album, their breakthrough, and the one they took to Woodstock three months later.",

  overview: [
    "The band itself was the first argument. Sylvester Stewart assembled a group that was Black and white, men and women, all of them playing and several of them singing lead — his brother Freddie Stone and sister Rose Stone, Larry Graham on bass, Cynthia Robinson on trumpet, Jerry Martini on saxophone, Greg Errico on drums. In 1969 a racially integrated band with women playing horns rather than standing at the front was not a neutral line-up, and the records are built so that you hear it: leads pass around the group constantly rather than belonging to anyone.",

    "Three albums had already failed commercially. This one worked because the politics and the pop arrived in the same package — songs about tolerance and self-assertion written as hooks a child could sing, with \"Everyday People\" going to No. 1 and putting the phrase \"different strokes for different folks\" into general English. It is a genuinely optimistic record, made in the year that ran from the Tet Offensive's aftermath through to the Moon landing and Altamont, and its optimism is neither naive nor decorative — it is the argument.",

    "Musically the important thing is Larry Graham's bass. He had developed a way of striking the strings with his thumb and pulling them against the fretboard to make a percussive snap, which on this record becomes structural rather than ornamental. Slap bass as a technique essentially enters popular music here, and within a decade is everywhere. Alongside it, the album's long closing jam gives every member an extended solo, closer to a live set than a pop LP.",

    "It reached No. 13 and has sold over three million copies. Woodstock in August turned the band into a headline act, and the trajectory afterwards is well known: the follow-up two years later was as dark as this is bright. Rolling Stone wrote that it \"revealed the magnificence\" of what the group could do; it entered the Grammy Hall of Fame and the National Recording Registry in 2015.",
  ],

  listeningNotes: [
    {
      label: "Larry Graham's slap bass",
      text: "Thumb struck against the string and fingers pulling it back onto the fretboard, producing a percussive snap. The technique effectively starts here.",
    },
    {
      label: "Lead vocals passed around",
      text: "Different members take lines within a single song, often alternating by phrase. Nobody is the frontman, which is the band's whole design.",
    },
    {
      label: "Horns used as punctuation",
      text: "Robinson's trumpet and Martini's saxophone stab short unison figures rather than playing charts, closer to rhythm than melody.",
    },
    {
      label: "Fuzz guitar over gospel changes",
      text: "Psychedelic rock guitar tone sits on top of chord movement straight out of church, which is most of what \"psychedelic soul\" means.",
    },
    {
      label: "A thirteen-minute jam",
      text: "The long closing track hands every player an extended solo, using the album format to document the band as a live unit.",
    },
    {
      label: "Hooks pitched at children",
      text: "The melodies are deliberately simple and singable, which is how songs about racial tolerance reached the top of the pop chart.",
    },
  ],

  sources: [
    { title: "Stand! — Wikipedia", url: "https://en.wikipedia.org/wiki/Stand!" },
    { title: "Sly and the Family Stone — Wikipedia", url: "https://en.wikipedia.org/wiki/Sly_and_the_Family_Stone" },
    { title: "Larry Graham — Wikipedia", url: "https://en.wikipedia.org/wiki/Larry_Graham" },
  ],

  influencedBy: [
    { artist: "James Brown", album: "Cold Sweat", year: "1967", note: "Widely treated as the first true funk record — the one-chord vamp with every instrument playing rhythm, which this band expanded with rock instrumentation." },
    { artist: "The Beatles", album: "Sgt. Pepper's Lonely Hearts Club Band", year: "1967", note: "The precedent for a pop group using the studio and psychedelic colour while still writing singles." },
  ],

  influenced: [
    { artist: "Marvin Gaye", album: "What's Going On", year: "1971", note: "Soul as a vehicle for direct political argument, released two years later on a rival label." },
    { artist: "Prince", album: "Sign o' the Times", year: "1987", note: "The mixed-race, mixed-gender band playing funk-rock under one writer-producer is a template Prince took wholesale." },
    { artist: "Red Hot Chili Peppers", album: "Blood Sugar Sex Magik", year: "1991", note: "Slap bass as the foundation of a rock band descends directly from Graham's playing here." },
  ],
});
