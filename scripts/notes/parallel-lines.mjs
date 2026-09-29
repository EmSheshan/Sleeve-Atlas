import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Blondie",
  album: "Parallel Lines",
  year: "1978",
  heading: "Parallel Lines — Blondie (1978)",

  albumLine:
    "Released 8 September 1978 on Chrysalis, produced by Mike Chapman and recorded at the Record Plant in New York over six weeks that summer. It's new wave sharpened into pop — Blondie's third album and the one that made them enormous.",

  overview: [
    "Blondie came out of CBGB, the Bowery club that also produced the Ramones, Television and Talking Heads, and their first two albums are recognisably part of that scene: scrappy, referential, a bit arch. What changed was the producer. Chrysalis brought in Mike Chapman, an Australian who had written and produced a long run of British glam hits, and he had no interest in preserving downtown authenticity.",

    "His methods were blunt. He drilled the band hard, re-recorded guitar parts himself for precision, and reportedly encouraged guitarist Chris Stein toward songwriting over playing. He changed how Debbie Harry was recorded too — fewer stacked vocal parts than on earlier albums, with the emphasis moved onto phrasing and timing. Chapman has spoken about how much of an emotional strain the sessions were on her. The results are audible: this is the first Blondie record where every part lands exactly where it's meant to, and where Harry sounds like a pop singer rather than a punk one.",

    "The most consequential song on it was also the most contentious. \"Heart of Glass\" is a disco record, made at a moment when American rock audiences were building toward outright hostility to disco — the Chicago record-burning stunt was only a year away. For a band from the punk scene to release one was read by some as a betrayal and by others as exactly the sort of genre indifference CBGB was supposed to stand for. It became their first US No. 1.",

    "Six singles came off it. The album reached No. 6 in the US and No. 1 in the UK, where it was the best-selling album of 1979. Critical standing has only risen — Robert Christgau called it \"a perfect album in 1978,\" Pitchfork later scored it 9.7, and the Library of Congress added it to the National Recording Registry in 2024. It's the record that established that a band could come out of punk and make immaculate pop without either half cancelling the other out.",
  ],

  listeningNotes: [
    {
      label: "Clem Burke's drumming",
      text: "Fast, busy and full of fills where a pop record would keep it simple — he plays like a punk drummer inside arrangements that aren't punk, and it's the main thing keeping the album's energy up.",
    },
    {
      label: "Chapman's precision",
      text: "Everything is tight to an almost mechanical degree, with parts re-cut until they locked. Compare it to Blondie's first two albums and the difference is immediate.",
    },
    {
      label: "A four-on-the-floor disco track",
      text: "\"Heart of Glass\" runs on a steady kick and a sequenced synth pulse rather than a rock beat — a deliberate genre defection that turned out to be their commercial breakthrough.",
    },
    {
      label: "Harry's controlled delivery",
      text: "She sings coolly and slightly detached, rarely pushing for power. Chapman had her stack fewer harmonies than before, so the lead sits exposed and the phrasing carries the emotion.",
    },
    {
      label: "Robert Fripp's guest guitar",
      text: "The King Crimson guitarist plays on one track, adding long sustained tones quite unlike anything else here — a texture borrowed from progressive rock in the middle of a pop album.",
    },
    {
      label: "Keyboards doing hook work",
      text: "Jimmy Destri's organ and synth lines frequently carry the song's main melodic figure rather than the guitars, which is a large part of why the record reads as new wave rather than rock.",
    },
  ],

  sources: [
    { title: "Parallel Lines — Wikipedia", url: "https://en.wikipedia.org/wiki/Parallel_Lines" },
    { title: "Blondie — Wikipedia", url: "https://en.wikipedia.org/wiki/Blondie" },
    { title: "National Recording Registry — Library of Congress", url: "https://www.loc.gov/programs/national-recording-preservation-board/recording-registry/complete-national-recording-registry-listing/" },
  ],

  influencedBy: [
    { artist: "Ramones", album: "Ramones", year: "1976", note: "The other great CBGB export, and the scene Blondie's speed and brevity come from." },
    { artist: "Donna Summer", album: "I Remember Yesterday", year: "1977", note: "The Moroder-produced sequenced disco sound that \"Heart of Glass\" borrows its pulse from." },
  ],

  influenced: [
    { artist: "Madonna", album: "Madonna", year: "1983", note: "Dance-pop made by people out of the New York punk scene — disco rhythm underneath new wave song structure." },
    { artist: "Garbage", album: "Garbage", year: "1995", note: "Meticulous studio-built pop-rock where the production carries the hook and the vocal sits flat and close in the mix." },
  ],
});
