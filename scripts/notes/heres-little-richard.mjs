import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Little Richard",
  album: "Here's Little Richard",
  year: "1957",
  heading: "Here's Little Richard — Little Richard (1957)",

  albumLine:
    "Released 4 March 1957 on Specialty Records and produced by Robert \"Bumps\" Blackwell, collecting singles cut between September 1955 and October 1956. It's twelve tracks of rock and roll in under half an hour — Little Richard's debut, and one of the loudest arguments for what the music could be.",

  overview: [
    "The sessions ran between J&M Studio in New Orleans and studios in Los Angeles, with a band of first-rate players: Lee Allen on tenor saxophone, Alvin \"Red\" Tyler on baritone, Frank Fields on bass and Earl Palmer on drums, with Richard singing and hammering the piano. It's a singles collection rather than a conceived album, which was normal in 1957 — the LP was still largely a way to repackage 45s.",

    "The record's most consequential detail is a piano pattern. Richard played in even eighth notes rather than the swung, shuffling triplets that dominated rhythm and blues, and the musicologist Lee Hildebrand has credited him with introducing \"the even eights that would come to drive most R&B and rock music.\" That is a genuinely structural change, not a stylistic flourish — it's a large part of why this sounds like rock and roll and its predecessors sound like something earlier.",

    "The other context is American segregation, which shaped the record before and after it existed. The opening song's original lyrics were obscene and unbroadcastable; the writer Dorothy LaBostrie was brought in at Blackwell's direction to replace them with nonsense syllables and innocuous girls' names. Then, once released, Richard's version was covered by Pat Boone for white radio — and Boone's cleaned-up rendition outsold it, reaching No. 12 while Richard's reached No. 18. Richard's own account of that is worth quoting: \"The white kids would have Pat Boone upon the dresser and me in the drawer 'cause they liked my version better, but the families didn't want me because of the image that I was projectin'.\"",

    "The album reached No. 13 on the pop chart, the only top-20 album of his career. Its influence is close to unmeasurable — Paul McCartney, John Lennon, Mick Jagger, Elton John and Rod Stewart have all named him as formative, and in 2007 a panel of musicians assembled by Mojo voted its opening track the single most world-changing record ever made. Rolling Stone has ranked the album as high as No. 50; Uncut called it the greatest album of the 1950s in 2025.",
  ],

  listeningNotes: [
    {
      label: "Even eighths, not a shuffle",
      text: "Richard's right hand pounds straight, evenly spaced eighth notes where earlier R&B swung them. That flattening of the rhythm is arguably the single most important thing on the record.",
    },
    {
      label: "The scream",
      text: "The full-throated wordless shriek that opens and punctuates songs is a gospel device used as a rock and roll weapon. It carries no lyrical information — it's pure signal that something has broken loose.",
    },
    {
      label: "Two saxophones doing the heavy lifting",
      text: "Lee Allen's tenor and Alvin Tyler's baritone, not a guitar, drive the arrangements and take the solos. This is a New Orleans horn band playing rock and roll.",
    },
    {
      label: "Earl Palmer's backbeat",
      text: "Palmer hits two and four hard and consistently, and largely invented the drum feel that rock ran on for the next decade. Everything is anchored to that snare.",
    },
    {
      label: "Piano played percussively",
      text: "The piano is struck rather than played — repeated chords, glissandi, elbows and forearms. It functions as rhythm, not harmony, and it's mixed loud enough to compete with the horns.",
    },
    {
      label: "Everything is short",
      text: "Twelve songs run under half an hour. Nothing develops, nothing has a bridge to speak of; each track arrives at full intensity and stops. The brevity is part of the assault.",
    },
  ],

  sources: [
    { title: "Here's Little Richard — Wikipedia", url: "https://en.wikipedia.org/wiki/Here%27s_Little_Richard" },
    { title: "\"Tutti Frutti\" — Little Richard (1955), National Recording Registry essay — Library of Congress", url: "https://www.loc.gov/static/programs/national-recording-preservation-board/documents/TuttiFrutti.pdf" },
    { title: "The Story Behind \"Tutti Frutti\" — American Songwriter", url: "https://americansongwriter.com/a-blessin-and-a-lesson-the-story-behind-tutti-frutti-by-little-richard/" },
  ],

  influencedBy: [
    { artist: "Fats Domino", album: "Rock and Rollin' with Fats Domino", year: "1956", note: "The New Orleans piano-and-horns R&B tradition, recorded with many of the same session players, that Richard sped up and roughened." },
    { artist: "Ray Charles", album: "Ray Charles", year: "1957", note: "The other great figure importing gospel's vocal fervour — the shouts and melisma — directly into secular music." },
  ],

  influenced: [
    { artist: "The Beatles", album: "Please Please Me", year: "1963", note: "McCartney's screaming rock and roll vocal style is modelled directly on Richard, whose songs the band covered." },
    { artist: "James Brown", album: "Live at the Apollo", year: "1963", note: "Richard's gospel-derived screams and relentless rhythmic drive feed straight into Brown's performance style." },
    { artist: "Elton John", album: "Goodbye Yellow Brick Road", year: "1973", note: "John has named Richard as formative; the pounding, showman's piano tradition descends from here." },
  ],
});
