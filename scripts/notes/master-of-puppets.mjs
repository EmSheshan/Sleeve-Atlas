import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Metallica",
  album: "Master Of Puppets",
  year: "1986",
  heading: "Master of Puppets — Metallica (1986)",

  albumLine:
    "Released 3 March 1986 on Elektra, produced by Flemming Rasmussen at Sweet Silence Studios in Copenhagen between September and December 1985. It's thrash metal at its most composed — Metallica's third album, and the last with bassist Cliff Burton.",

  overview: [
    "Thrash had come up through the underground: tape trading, fanzines, no radio and no video. By 1986 the American scene was producing its defining records almost simultaneously — Slayer and Megadeth both released major albums the same year — and this one moved fastest, partly because Metallica had signed to Elektra and had a major label's distribution behind them while sounding entirely uncompromised.",

    "What separates it from its peers is construction. The songs run long, most past six minutes, and they're built in sections rather than verses and choruses, shifting tempo and key mid-piece. An acoustic figure opens the album before the distortion arrives. There's a full instrumental, \"Orion,\" which draws on Burton's classical training and gives the bass a melodic role metal rarely allowed it. Kirk Hammett's memory of the sessions is that the band was \"definitely peaking\" and had \"the sound of a band really gelling, really learning how to work well together.\"",

    "Thematically it circles control — addiction, institutions, war, religion — which is a more coherent set of concerns than its predecessor managed and part of why it holds together. Rolling Stone's Tim Holmes called it \"the sound of global paranoia.\"",

    "Then, on 27 September 1986, while touring the album in Sweden, the band's bus left the road near Dörarp and Cliff Burton was thrown through a window and killed. He was twenty-four. The record became both the peak of that lineup and its end, which has coloured how it's heard ever since. It shipped eight million copies in the US with almost no radio play, was thrash's first platinum album, and in 2015 became the first metal recording added to the Library of Congress's National Recording Registry.",
  ],

  listeningNotes: [
    {
      label: "Downpicking, relentlessly",
      text: "Hetfield plays fast rhythm parts with all downstrokes rather than alternating, which is physically punishing and produces a harder, more uniform attack than picking both ways.",
    },
    {
      label: "Songs built in movements",
      text: "Most tracks run past six minutes and move through distinct sections — a fast opening, a slower middle, a different ending — rather than repeating a chorus. It's closer to composition than to riffing.",
    },
    {
      label: "The acoustic opening",
      text: "The album begins with clean acoustic guitar before the full band crashes in. That dynamic contrast — quiet to overwhelming — recurs throughout and became a metal convention afterwards.",
    },
    {
      label: "Bass as a lead voice",
      text: "On the instrumental, Burton's bass carries melody and takes a lead break with a classical-leaning harmonic sense. Metal bass was usually inaudible; here it's a feature.",
    },
    {
      label: "Harmonised lead guitar",
      text: "Hammett's solos are frequently doubled a third or fifth apart, giving them a bright, almost baroque quality against the low rhythm guitars.",
    },
    {
      label: "Dry, close production",
      text: "Rasmussen recorded the guitars with little reverb and enormous clarity, so individual notes stay separate even at speed. That legibility is why the complexity registers instead of turning to mud.",
    },
  ],

  sources: [
    { title: "Master of Puppets — Wikipedia", url: "https://en.wikipedia.org/wiki/Master_of_Puppets" },
    { title: "Cliff Burton — Wikipedia", url: "https://en.wikipedia.org/wiki/Cliff_Burton" },
    { title: "National Recording Registry — Library of Congress", url: "https://www.loc.gov/programs/national-recording-preservation-board/recording-registry/complete-national-recording-registry-listing/" },
  ],

  influencedBy: [
    { artist: "Black Sabbath", album: "Paranoid", year: "1970", note: "The foundational heavy riff vocabulary every thrash band was accelerating." },
    { artist: "Diamond Head", album: "Lightning to the Nations", year: "1980", note: "The New Wave of British Heavy Metal band Metallica covered repeatedly; their long, multi-section songs are a direct model." },
    { artist: "Motörhead", album: "Ace of Spades", year: "1980", note: "The speed and aggression thrash took from punk by way of Motörhead's relentless tempo." },
  ],

  influenced: [
    { artist: "Pantera", album: "Vulgar Display of Power", year: "1992", note: "The tight, downpicked, groove-heavy approach to metal rhythm guitar descends from this record." },
    { artist: "Machine Head", album: "Burn My Eyes", year: "1994", note: "Part of the generation of American metal bands built directly on this album's architecture." },
  ],
});
