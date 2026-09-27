import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Miles Davis",
  album: "Kind Of Blue",
  year: "1959",
  heading: "Kind of Blue — Miles Davis (1959)",

  albumLine:
    "Released 17 August 1959 on Columbia, produced by Irving Townsend and recorded at Columbia's 30th Street Studio in New York on 2 March and 22 April that year. Five pieces of modal jazz — and the best-selling jazz album ever made.",

  overview: [
    "The band is one of the reasons. Miles Davis on trumpet, with John Coltrane on tenor and Cannonball Adderley on alto saxophone, Bill Evans on piano — replaced by Wynton Kelly on \"Freddie Freeloader\" — Paul Chambers on bass and Jimmy Cobb on drums. Coltrane was months from \"Giant Steps\" and his own transformation of the instrument; Evans was about to define the modern jazz piano trio. Putting all of them in one room in 1959 was a peak that could not have held.",

    "What Davis gave them was almost nothing. Instead of the chord sequences bebop had spent fifteen years making ever more intricate, he handed the players sets of scales and let them improvise within those, a practice partly traceable to George Russell's 1953 treatise \"Lydian Chromatic Concept of Tonal Organization.\" Fewer chords, moving more slowly, means an improviser cannot rely on running the changes; they have to invent melody. That is the whole innovation, and it reoriented jazz away from harmonic complexity for the next decade.",

    "The rehearsal was correspondingly minimal — brief spoken instructions and then the tape. The persistent story that the album was recorded in one pass is not true, though \"Flamenco Sketches\" was complete on its first full take. Bill Evans's sleeve note makes the case for why it was done that way, comparing the sessions to a Japanese ink-painting tradition in which the brush must move without hesitation because the parchment cannot survive a correction and erasure is impossible. He had a serious interest in Zen practice and meant it fairly literally.",

    "It has never gone away. The RIAA certified it five times platinum in 2019, which for an instrumental jazz record with no singles is an absurd figure, and the Library of Congress added it to the National Recording Registry in 2002. AllMusic's Stephen Thomas Erlewine calls it \"a record generally considered as the definitive jazz album.\" Its reach outside jazz is unusually well documented: Duane Allman said his soloing \"comes from Miles and Coltrane, and particularly Kind of Blue,\" and Pink Floyd took harmonic ideas from it into \"Breathe.\" It is also, for better or worse, the record that made jazz safe as ambience — a fate that says more about later listeners than about what is actually being played.",
  ],

  listeningNotes: [
    {
      label: "Chords that barely move",
      text: "Long stretches sit on a single scale before shifting, so nothing is pulling the soloist along. The stillness is what makes the improvisations sound composed.",
    },
    {
      label: "Davis playing few notes",
      text: "He leaves large gaps, often entering late and stopping early, using a Harmon mute to get a small dry tone. Restraint is his instrument here.",
    },
    {
      label: "Two saxophones with opposite temperaments",
      text: "Adderley's alto is warm, bluesy and rounded; Coltrane's tenor is hard, searching and often deliberately harsh. They solo back to back so the contrast is unmissable.",
    },
    {
      label: "Bill Evans's voicings",
      text: "He spreads chords in wide, ambiguous shapes that avoid stating the root, which is why the harmony feels suspended rather than resolved.",
    },
    {
      label: "Jimmy Cobb on brushes and ride",
      text: "The drumming keeps time almost entirely on the ride cymbal and brushed snare, with no fills competing for attention. It is why the album can be played at low volume without collapsing.",
    },
    {
      label: "One piece in 6/8",
      text: "\"All Blues\" is a blues in a rolling triple feel rather than straight four, which is most of why it does not sound like any other blues you know.",
    },
  ],

  sources: [
    { title: "Kind of Blue — Wikipedia", url: "https://en.wikipedia.org/wiki/Kind_of_Blue" },
    { title: "\"Kind of Blue\" — Miles Davis (1959), National Recording Registry essay, Library of Congress", url: "https://www.loc.gov/static/programs/national-recording-preservation-board/documents/KindOfBlue.pdf" },
    { title: "Bill Evans's liner notes for Kind of Blue — SFJAZZ", url: "https://sfjazz.blogspot.com/2015/03/kind-of-blue-bill-evans-liner-notes.html" },
  ],

  influencedBy: [
    { artist: "Miles Davis", album: "Milestones", year: "1958", note: "His own first sustained experiment with modal writing, a year earlier and with much of the same band." },
    { artist: "Ahmad Jamal", album: "Chamber Music of the New Jazz", year: "1955", note: "Davis repeatedly cited Jamal's spaciousness and restraint as a direct model for how to leave notes out." },
  ],

  influenced: [
    { artist: "John Coltrane", album: "A Love Supreme", year: "1965", note: "Coltrane plays on this album and took modal improvisation — few chords, long forms — to its conclusion." },
    { artist: "The Allman Brothers Band", album: "At Fillmore East", year: "1971", note: "Duane Allman named this record as the source of his approach to soloing at length over a fixed groove." },
    { artist: "Pink Floyd", album: "The Dark Side of the Moon", year: "1973", note: "The band drew harmonic ideas from it directly for \"Breathe.\"" },
  ],
});
