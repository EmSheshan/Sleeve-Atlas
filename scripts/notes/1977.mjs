import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Ash",
  album: "1977",
  year: "1996",
  heading: "1977 — Ash (1996)",

  albumLine:
    "Released 6 May 1996 on Infectious Records, produced by Owen Morris with the band and recorded at Loco Studios and Rockfield Studios in Wales. It's Britpop-era power pop played at punk speed — the debut album by three teenagers from Downpatrick, Northern Ireland, and the first record by an Irish act to enter the UK chart at No. 1.",

  overview: [
    "Singer and guitarist Tim Wheeler, bassist Mark Hamilton and drummer Rick McMurray formed the band in Downpatrick in 1992, still at school, and got nicknamed \"Genuine Real Teenagers\" once the press caught on. Wheeler and Hamilton were seventeen and sitting their A-Levels when they signed to Infectious Records, and early singles — \"Kung Fu,\" \"Girl from Mars,\" \"Angel Interceptor\" — were cut at Loco Studios with producer Owen Morris before the band had left school.",
    "The album proper was booked into Rockfield Studios from New Year's Day 1996, planned for six weeks at around £800 a day; it ran nearly three months because the band arrived without enough finished songs, and Wheeler wrote close to half the record during the sessions. Morris, straight off mixing Oasis's \"(What's the Story) Morning Glory?,\" brought the same hot, crowded method with him. Wheeler later called him \"a big drinker and drug-taker\" for whom that \"was part of the recording process,\" and accounts include Morris throwing fire extinguishers through the studio glass and dancing on the mixing console. The hidden closing track, assembled from tape of the band being sick during an all-night party, is a literal record of how unsupervised it all was.",
    "The title does double duty: 1977 is the year Star Wars opened and the year Wheeler and Hamilton were born, and the band's fandom runs through the record — it opens on a sampled TIE fighter and closes with a hidden choral Star Wars theme. Arriving at Britpop's height, the album sat apart from the Kinks-quoting lineage Blur and Oasis were mining; critics reached instead for Buzzcocks, Dinosaur Jr. and Teenage Fanclub, while Wheeler discovered the Beach Boys' Pet Sounds mid-session and pushed some arrangements toward orchestration. It knocked Alanis Morissette's Jagged Little Pill off the UK No. 1 spot, went platinum on roughly 300,000 UK sales, and produced five top-40 singles. Reviews split over Morris's dense mix — AllMusic praised its \"distinctive, melodic, and energetic sound,\" one US critic called it \"excessively noisy and often quite murky\" — but the record has held up as Ash's defining moment.",
  ],

  listeningNotes: [
    {
      label: "The TIE fighter cold open",
      text: "A sampled Star Wars TIE fighter whine opens the album before a note of guitar lands, on \"Lose Control\" — the clearest, earliest declaration of the record's teenage science-fiction fixation.",
    },
    {
      label: "Quiet verse into cranked chorus",
      text: "Wheeler builds songs on hushed, often acoustic verses that break suddenly into fuzzed, full-volume choruses, a dynamic picked up from Dinosaur Jr. and the Pixies and applied to songs about teenage romance rather than noise for its own sake.",
    },
    {
      label: "A phaser turned all the way up",
      text: "On \"Goldfinger,\" Wheeler runs his guitar through a phase pedal dimed to its limit for the soaring, jet-engine swoop that opens the track, before the song detours into a lift from the Shirley Bassey Bond theme it borrows its title from.",
    },
    {
      label: "Morris's hot, crowded mix",
      text: "Producer Owen Morris pushes the guitars thick and compressed rather than separating them cleanly, the same dense wall he'd just built for Oasis — heard by some as murky and by others as exactly what gave the record its force.",
    },
    {
      label: "An orchestra arrives mid-album",
      text: "Arranger Nick Ingman scores strings for a few tracks, dropping an orchestra behind songs written as three-chord singles weeks before — a sign of Wheeler's sudden immersion in the Beach Boys.",
    },
    {
      label: "The sick-party tape as a closing joke",
      text: "The hidden final track is simply the band recording each other vomiting during an all-night session — less a song than a receipt for how the record was made.",
    },
  ],

  sources: [
    { title: "1977 (Ash album) — Wikipedia", url: "https://en.wikipedia.org/wiki/1977_(Ash_album)" },
    { title: "Teen Sweat and Puke, Drugs and Dressing in Drag: How Ash Wrote Their Debut LP '1977' — Vice", url: "https://www.vice.com/en/article/teen-sweat-and-puke-drugs-and-dressing-in-drag-how-ash-wrote-their-debut-lp-1977/" },
    { title: "The Genius Of… 1977 by Ash — Guitar.com", url: "https://guitar.com/reviews/album/the-genius-of-1977-by-ash/" },
    { title: "Nineteen Forever: Ash's 1977 at 25 — Rock and Roll Globe", url: "https://rockandrollglobe.com/britpop/nineteen-forever-ashs-1977-at-25/" },
  ],

  influencedBy: [
    { artist: "Buzzcocks", album: "Another Music in a Different Kitchen", year: "1978", note: "The fast, hooky, three-chord power-pop-punk template critics heard most directly behind the album's singles." },
    { artist: "Dinosaur Jr.", album: "Bug", year: "1988", note: "Source of the quiet-verse-into-fuzzed-chorus dynamic Wheeler builds nearly every song on here from." },
    { artist: "Teenage Fanclub", album: "Bandwagonesque", year: "1991", note: "The melodic, guitar-forward power-pop critics named as the nearest contemporary relative to Ash's hooks." },
    { artist: "Oasis", album: "(What's the Story) Morning Glory?", year: "1995", note: "Producer Owen Morris came directly off mixing this album and brought the same hot, compressed guitar wall to Rockfield months later." },
  ],

  influenced: [],
});
