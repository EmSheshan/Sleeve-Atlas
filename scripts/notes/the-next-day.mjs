import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "David Bowie",
  album: "The Next Day",
  year: "2013",
  heading: "The Next Day — David Bowie (2013)",

  albumLine:
    "Released 8 March 2013 on ISO and Columbia, co-produced with Tony Visconti and recorded in secret at New York studios between May 2011 and October 2012. Art rock with the guitars back up — his twenty-fifth album, and his first in ten years.",

  overview: [
    "The silence was the story. A heart procedure in 2004 had ended his touring and effectively his public life, and by the early 2010s the settled assumption was that he had retired without announcing it. He had in fact been recording for eighteen months under a non-disclosure arrangement that held completely — an almost unimaginable achievement in 2012, and one that required every musician involved to keep quiet for the duration.",

    "On 8 January 2013, his sixty-sixth birthday, the single and the album appeared with no warning at all. It is worth being precise about why that landed so hard: the surprise release was not yet a standard industry manoeuvre, and by doing it this way he converted a decade of absence into part of the work rather than a gap in it.",

    "Jonathan Barnbrook's sleeve makes the same argument visually. It takes the cover of \"Heroes\" from 1977 and obscures Bowie's face with a plain white square carrying the new title, with the old one struck through — his own past defaced rather than curated, and a fairly exact image of what the record does with his back catalogue. The songs are preoccupied with tyranny, violence and memory rather than with nostalgia.",

    "It went to No. 1 in Britain with 94,048 copies in its first week and No. 2 in America with 85,000 — his best sales week of the SoundScan era — and topped the chart in more than a dozen countries. Metacritic settles at 81, with the common verdict being his strongest since the early eighties, alongside complaints about its length. Three years later he did it again, with \"Blackstar,\" and died two days after its release.",
  ],

  listeningNotes: [
    {
      label: "Guitars forward and unpolished",
      text: "Earl Slick and Gerry Leonard play abrasive, trebly lines high in the mix, closer to his late-seventies records than to the smoother nineties productions.",
    },
    {
      label: "Visconti's dry drum sound",
      text: "Zachary Alford is recorded tight and close with minimal reverb, so the rhythm section drives rather than fills space.",
    },
    {
      label: "A voice with its range intact",
      text: "At 66 he sings in full, with the theatrical register he used in the seventies rather than the lower, conversational one of his later years.",
    },
    {
      label: "Saxophone as a jagged intrusion",
      text: "His own sax appears in short, squalling bursts rather than as melody, a habit he took much further on the album that followed.",
    },
    {
      label: "One elegiac song among hard ones",
      text: "\"Where Are We Now?\" is slow, quiet and explicitly about Berlin memories, and was released first — which set an expectation the rest of the album deliberately breaks.",
    },
  ],

  sources: [
    { title: "The Next Day — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Next_Day" },
    { title: "Where Are We Now? — Wikipedia", url: "https://en.wikipedia.org/wiki/Where_Are_We_Now%3F" },
    { title: "Jonathan Barnbrook — Wikipedia", url: "https://en.wikipedia.org/wiki/Jonathan_Barnbrook" },
  ],

  influencedBy: [
    { artist: "David Bowie", album: "\"Heroes\"", year: "1977", note: "Its sleeve is defaced for this album's cover, and the guitar textures reach back to the same period." },
    { artist: "David Bowie", album: "Low", year: "1977", note: "The other Berlin record Visconti produced; the dry drums and fractured arrangements descend from it." },
  ],

  influenced: [
    { artist: "David Bowie", album: "Blackstar", year: "2016", note: "The surprise-release method and the jagged saxophone both carry straight into his last album." },
    { artist: "Beyoncé", album: "Beyoncé", year: "2013", note: "Released nine months later with no announcement — the surprise drop becoming an industry tactic rather than a stunt." },
  ],
});
