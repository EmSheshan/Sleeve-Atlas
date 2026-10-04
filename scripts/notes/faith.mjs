import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "George Michael",
  album: "Faith",
  year: "1987",
  heading: "Faith — George Michael (1987)",

  albumLine:
    "Released 30 October 1987 on Epic in Britain and Columbia in America, written, produced and largely played by Michael himself, recorded at Puk Studios in Denmark and Sarm West in London between August 1986 and September 1987. Pop crossed with funk, R&B and soul — his first album after Wham!",

  overview: [
    "The problem he was solving was credibility. Wham! had sold enormously while being treated as disposable teen pop, and the standard route out — hand yourself to a famous producer — would have proved nothing. Instead he wrote it, produced it, and played most of the instruments himself, with one co-write. Whatever else it is, it is a technical argument: the man dismissed as a pin-up could in fact do the whole job.",

    "The music he chose to do it with was contemporary Black American pop, and the record was received accordingly — it became the first album by a white solo artist to top Billboard's Top Black Albums chart. That fact sits uneasily and is worth stating rather than celebrating: it reflects both genuine fluency and the ease with which a white performer could occupy that space. Michael's own singing is the strongest evidence for the fluency; he phrases against the beat in a way almost nobody in eighties British pop could.",

    "The sales are close to absurd. Four US No. 1 singles, twelve weeks at the top of the Billboard 200, fifty-one weeks in its top ten, Album of the Year at the Grammys, and over 25 million copies sold. Rolling Stone's reviewer placed him among pop's leading artisans and compared him to Elton John.",

    "What followed complicates it. The leather-jacket, stubbled, sexualised image built for these videos was one he almost immediately wanted out of, and within a few years he was refusing to appear in his own promotion and suing Sony to escape his contract — a case he lost in 1994. He came out publicly in 1998 after being arrested, having spent this album's whole era selling a heterosexual pose he has since described as a performance. Knowing that, the record's preoccupation with desire and concealment reads very differently.",
  ],

  listeningNotes: [
    {
      label: "One man playing nearly everything",
      text: "Michael handled most instruments as well as writing and producing, which is why the arrangements are so unified and so tightly controlled.",
    },
    {
      label: "Phrasing behind the beat",
      text: "He sings late and loose against the rhythm in a way learned from American soul singers rather than from British pop.",
    },
    {
      label: "Programmed funk with live feel",
      text: "Drum machines and sequencers carry the grooves, but they are swung and syncopated rather than locked, which keeps them from sounding mechanical.",
    },
    {
      label: "Rockabilly guitar on the title track",
      text: "A reverbed Bo Diddley-style figure opens the record over a church organ — a deliberate signal that this is not a Wham! album.",
    },
    {
      label: "Ballads with almost nothing in them",
      text: "Several slow songs are voice, a sparse keyboard and space, trusting the vocal to carry four minutes unassisted.",
    },
  ],

  sources: [
    { title: "Faith (George Michael album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Faith_(George_Michael_album)" },
    { title: "George Michael — Wikipedia", url: "https://en.wikipedia.org/wiki/George_Michael" },
    { title: "Wham! — Wikipedia", url: "https://en.wikipedia.org/wiki/Wham!" },
  ],

  influencedBy: [
    { artist: "Prince", album: "Sign o' the Times", year: "1987", note: "The immediate model for one person writing, producing and playing an entire funk-pop record alone." },
    { artist: "Stevie Wonder", album: "Songs in the Key of Life", year: "1976", note: "The precedent for a singer taking over every role in the studio, and for the phrasing Michael works from." },
    { artist: "Elvis Presley", album: "Elvis Presley", year: "1956", note: "The rockabilly guitar figure and the staged sexual image both reach back here, knowingly." },
  ],

  influenced: [
    { artist: "Robbie Williams", album: "Life thru a Lens", year: "1997", note: "The template for escaping a boy band by writing and controlling the follow-up yourself." },
    { artist: "Justin Timberlake", album: "Justified", year: "2002", note: "A white pop singer out of a group act relaunching through contemporary R&B — the same manoeuvre, fifteen years later." },
  ],
});
