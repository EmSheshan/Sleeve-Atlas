import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "The Last Shadow Puppets",
  album: "The Age Of The Understatement",
  year: "2008",
  heading: "The Age of the Understatement — The Last Shadow Puppets (2008)",

  albumLine:
    "Released 15 April 2008 on Domino, produced by James Ford and recorded in two weeks that August at Black Box in France and at RAK and British Grove in London. Sixties orchestral pop rebuilt by two twenty-somethings — the debut of Alex Turner and Miles Kane's side project.",

  overview: [
    "Turner was 22 and had spent two years as the most scrutinised lyricist in Britain, fronting Arctic Monkeys through the fastest-selling debut in UK chart history. Miles Kane played guitar in the Little Flames and then the Rascals. Doing a side project at that point was an odd move; doing one modelled on Scott Walker and Ennio Morricone was odder still, and it reads now as Turner deliberately stepping out of the register — Northern observational realism over spiky guitars — that had made him famous.",

    "The reference points were declared rather than hidden. Both named Walker's sixties records and Serge Gainsbourg's \"Histoire de Melody Nelson\" as models, and critics reached immediately for Morricone and Burt Bacharach. The method was period-accurate too: recorded largely in live takes over a fortnight, with James Ford — the Simian Mobile Disco producer who had made \"Favourite Worst Nightmare\" — keeping it fast and physical rather than assembled.",

    "The strings are what makes it more than pastiche. Owen Pallett wrote the arrangements for a 22-piece London Metropolitan Orchestra, and Turner's brief was that he wanted them \"widescreen\" rather than intimate. That distinction is the album's whole design: the orchestra is not a tasteful garnish on some guitar songs, it is the loudest thing in the room, sawing and stabbing in a way that owes more to film scoring than to chamber pop.",

    "It went straight to No. 1 in Britain on 51,186 copies and reached only 111 in America, which is roughly the expected shape for a record this English about an idea this European. Metacritic settles at 77; Pitchfork called it \"Turner's most impressive album-length statement yet,\" which at the time was a pointed thing to say about a man with two Arctic Monkeys albums out. Its longer effect shows in Turner's own writing — the crooning, the widescreen arrangements and the sixties-cinema register all reappear in Arctic Monkeys records from 2013 onward.",
  ],

  listeningNotes: [
    {
      label: "Strings mixed as loud as the band",
      text: "Pallett's charts for 22 players stab and swoop across the top of everything rather than cushioning it. The word Turner used was widescreen, and that's literally how they're mixed.",
    },
    {
      label: "Galloping drums",
      text: "James Ford plays fast, tom-heavy patterns that push the songs along like a chase sequence — the Morricone influence showing in rhythm rather than in twang.",
    },
    {
      label: "Two voices in unison",
      text: "Turner and Kane sing many lines together rather than trading them, an octave-doubling trick that gives a young voice unexpected weight.",
    },
    {
      label: "Reverb-heavy tremolo guitar",
      text: "The guitars are drenched and wobbling, borrowed wholesale from sixties spaghetti-western scoring, and used as colour rather than for riffs.",
    },
    {
      label: "Recorded live in a fortnight",
      text: "Most of it is whole-band takes rather than layered parts, which is why it moves and why the orchestra sounds like it's in the same room.",
    },
    {
      label: "Songs under three minutes",
      text: "Nearly everything is short and exits quickly, leaving the arrangements no time to settle — the opposite of the languor the influences might suggest.",
    },
  ],

  sources: [
    { title: "The Age of the Understatement — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Age_of_the_Understatement" },
    { title: "The Last Shadow Puppets — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Last_Shadow_Puppets" },
    { title: "Owen Pallett — Wikipedia", url: "https://en.wikipedia.org/wiki/Owen_Pallett" },
  ],

  influencedBy: [
    { artist: "Scott Walker", album: "Scott 4", year: "1969", note: "Named by both as a model: a baritone croon over dramatic orchestral arrangements rather than a rock band." },
    { artist: "Serge Gainsbourg", album: "Histoire de Melody Nelson", year: "1971", note: "Cited directly — a short, string-drenched record where the orchestra and the rhythm section carry equal weight." },
    { artist: "Ennio Morricone", album: "The Good, the Bad and the Ugly", year: "1966", note: "The spaghetti-western scoring vocabulary — tremolo guitar, galloping percussion, stabbing strings — that the arrangements are built from." },
  ],

  influenced: [
    { artist: "Arctic Monkeys", album: "AM", year: "2013", note: "Turner's crooning delivery and widescreen arrangement instincts carry straight back into his main band from here." },
  ],
});
