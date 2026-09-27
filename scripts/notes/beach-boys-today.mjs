import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "The Beach Boys",
  album: "The Beach Boys Today!",
  year: "1965",
  heading: "The Beach Boys Today! — The Beach Boys (1965)",

  albumLine:
    "Released 8 March 1965 on Capitol Records, this is the Beach Boys' eighth studio album, written, arranged and produced by Brian Wilson, the group's bassist and chief songwriter. It's pop caught mid-step: side one still sells the singles act, side two is orchestral ballads. It's the record where they stop being a hit factory and start making albums.",

  overview: [
    "By the end of 1964 the Beach Boys were a formula in good working order — surf, cars, school, sunshine — and Brian Wilson was carrying most of it himself, writing, arranging, producing and touring. On 18 December 1964, on a flight to Houston, he broke down sobbing. Glen Campbell, then a Los Angeles session guitarist, covered the remaining dates. Wilson quit touring and moved into the Hollywood studios — Western, Gold Star and RCA.",

    "What he made there abandons standard rock instrumentation more or less entirely. Across sessions running to 19 January 1965 he used over 25 musicians, including the Wrecking Crew, the Los Angeles session players who would carry the group's records for the next three years: drummer Hal Blaine, bassist Carol Kaye, and Campbell on twelve-string. In came timpani, harpsichord, vibraphone, French horn, accordion and oboe. \"I doubled up on basses and tripled up on keyboards, which made everything sound bigger and deeper,\" Wilson said. He kept odd hours, cutting \"Please Let Me Wonder\" at half past four in the morning: \"I wanted to grow musically, so I experimented.\"",

    "His models were producers, not bands — Phil Spector's massed Wall of Sound and Burt Bacharach's arrangements. The result is what Mike Love, the band's singer and lyricist, called a \"split personality\": six uptempo numbers, then a second side of slow songs about doubt and jealousy, subjects this catalogue had barely touched. One caution — it's tempting to hear the record as an answer to the British Invasion, and that competitive story is well documented for Pet Sounds and Rubber Soul a year later, but not for this one. What the sources establish here is Spector, Bacharach, and Wilson's own wish to grow.",

    "It reached No. 4 in the US and No. 6 in the UK with three top-20 singles, and a re-recorded \"Help Me, Rhonda\" became the group's second No. 1. Reviews then were mixed: the San Francisco Examiner called it \"entertaining but a disappointment.\" Its stature grew later and largely in reverse, read back through Pet Sounds (1966), whose orchestral ballads side two plainly sets up. Kevin Shields of My Bloody Valentine has cited it as foundational to how he built Loveless.",
  ],

  listeningNotes: [
    {
      label: "The side-two swerve",
      text: "The sequencing is the album's whole argument: uptempo singles through side one, then a run of slow, interior ballads. Play it straight through and the turn is unmistakable.",
    },
    {
      label: "Orchestral instruments doing a rock band's job",
      text: "Timpani, harpsichord, vibraphone, French horn, accordion and oboe carry parts you'd expect from guitars. No track here leans on guitar-bass-drums alone, which was unusual for an American pop group in 1965.",
    },
    {
      label: "Doubled and tripled parts",
      text: "Wilson stacked multiple basses and keyboards playing the same line, Spector's trick. You don't hear separate instruments so much as one thick, slightly blurred texture — the sound he described as bigger and deeper.",
    },
    {
      label: "Mono on purpose",
      text: "It was mixed down to mono, the group's first album not issued in stereo since 1963, so everything sits stacked in one channel. A full stereo mix didn't surface until 2012; the mono is the version as intended.",
    },
    {
      label: "Voices used as instruments",
      text: "Wilson described \"using instruments as voices and voices as instruments,\" and the harmony stacks on side two work as texture and harmonic filler rather than as a group singing behind a lead.",
    },
    {
      label: "The closing interview",
      text: "The record ends not with a song but with \"Bull Session with the 'Big Daddy'\" — the band chatting with journalist Earl Leaf about their European trip, cut down from a tape running over twenty minutes.",
    },
  ],

  sources: [
    { title: "The Beach Boys Today! — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Beach_Boys_Today!" },
    { title: "The Beach Boys Today! (and Every Day!) — thebeachboys.com", url: "https://thebeachboys.com/blogs/news/the-beach-boys-today-and-every-day" },
    { title: "The mad guitar genius of Brian Wilson, recalled by Wrecking Crew session aces — Guitar Player", url: "https://www.guitarplayer.com/guitarists/he-said-take-this-damn-guitar-and-amp-home-with-you-in-case-you-need-it-again-he-never-asked-me-to-play-electric-12-string-again-the-mad-guitar-genius-of-brian-wilson-as-recalled-by-wrecking-crew-session-aces-tommy-tedesco-and-billy-strange" },
  ],

  influencedBy: [
    { artist: "Phil Spector", album: "A Christmas Gift for You from Philles Records", year: "1963", note: "Wilson took Spector's massed Wall of Sound as his production model, doubling and tripling parts into one texture." },
    { artist: "Dionne Warwick", album: "Presenting Dionne Warwick", year: "1963", note: "Burt Bacharach's arrangements for Warwick are cited alongside Spector as a model for the album's orchestral colour and slower tempos." },
  ],

  influenced: [
    { artist: "The Beach Boys", album: "Pet Sounds", year: "1966", note: "Side two's orchestral ballads are the direct template; Pet Sounds extends the same approach across a whole record." },
    { artist: "My Bloody Valentine", album: "Loveless", year: "1991", note: "Kevin Shields has cited the album as foundational to how he built Loveless's layered production." },
  ],
});
