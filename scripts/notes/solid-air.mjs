import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "John Martyn",
  album: "Solid Air",
  year: "1973",
  heading: "Solid Air — John Martyn (1973)",

  albumLine:
    "Released in February 1973 on Island Records, and produced by John Martyn and engineer John Wood (the producer credit varies by source). It's folk with jazz and psychedelic colour, and per Wikipedia it's Martyn's fourth studio album, after Bless the Weather (1971).",

  overview: [
    "The sessions are described differently. Writer Poppy Burton of Far Out and Wikipedia say eight days, while the Produce Like A Pro site says Studio One at Island's Basing Street studio in November and December 1972, plus Sound Techniques. Writer Jamie Atkins of uDiscover says the main sessions ran from late November to early December 1972, with earlier sessions in September 1971. Most of it was played live with little overdubbing. Bassist Danny Thompson told Produce Like A Pro, \"From the top, live, none of this dropping in,\" and Wood said, \"All the tracks went down pretty much live.\" Keyboardist John \"Rabbit\" Bundrick said, \"It was almost like a big jam session,\" and told uDiscover, \"He didn't ask anyone to play a certain thing.\"",

    "The sound owes something to jazz. Martyn said of saxophonist Pharoah Sanders, per uDiscover quoting Mojo, \"His tone blew my mind and he gave me a glimpse through a keyhole that I didn't even know existed.\" He said he bought his Echoplex tape-delay unit \"to try and imitate Sanders' sustain on my guitar.\" Martyn said of the title song, per uDiscover quoting ZigZag in 1974, \"It was done for a friend of mine, and it was done right with very clear motives.\" Guests include bassist Dave Pegg, drummer Dave Mattacks, saxophonist Tony Coe and vibraphonist Tristan Fry, per Wikipedia.",

    "Wikipedia says the album is in 1001 Albums You Must Hear Before You Die; the book's text wasn't found, and blogger Dr Simon says it \"wears its brilliance quietly.\" Writer Michael White of Exclaim! heard \"beautiful, ageless music that's pitched between the least fanciful strains of folk and a hallucinatory elegance,\" with vocals \"often singing as if consonants had vacated his vocabulary.\" Writer David Stubbs of Uncut called it \"an undoubted precursor to trip hop.\"",
  ],

  listeningNotes: [
    {
      label: "Echoplex tape delay",
      text: "Per Wikipedia, Far Out and MusicRadar, \"I'd Rather Be the Devil\" reworks a Skip James blues with Echoplex delay, turning a guitar line into a pulse.",
    },
    {
      label: "Double bass that drifts",
      text: "Burton says Thompson's double bass drifts in and out of focus, which gives the record its timeless, hard-to-place feel.",
    },
    {
      label: "A cardboard plectrum",
      text: "MusicRadar writer Ellie Rogers says Martyn reportedly used a piece of cardboard as a plectrum on \"Over the Hill.\"",
    },
    {
      label: "A live band, barely overdubbed",
      text: "Wood's remark that the tracks went down \"pretty much live\" explains the loose, conversational interplay between guitar, bass and keyboards.",
    },
    {
      label: "A slurred, instrument-like voice",
      text: "White hears Martyn's voice blur consonants, so it works more as another instrument in the mix than as a lead line.",
    },
  ],

  sources: [
    { title: "Solid Air, 50 years on — uDiscover Music (Jamie Atkins, 2026)", url: "https://www.udiscovermusic.com/?p=38008" },
    { title: "Solid Air — Produce Like A Pro", url: "https://producelikeapro.com/blog/john-martyn-solid-air/" },
    { title: "John Martyn, Solid Air album review — Far Out (Poppy Burton, 2024)", url: "https://faroutmagazine.co.uk/john-martyn-solid-air-album-review/" },
    { title: "John Martyn, Solid Air — Exclaim! (Michael White, 2001)", url: "https://exclaim.ca/music/article/john_martyn-solid_air" },
    { title: "John Martyn, Solid Air — Uncut review (David Stubbs, 2007), on johnmartyn.com", url: "https://johnmartyn.com/album-reviews/solid-air-4/" },
    { title: "5 songs guitarists need to hear by John Martyn — MusicRadar (Ellie Rogers, 2023)", url: "https://www.musicradar.com/news/5-songs-guitarists-need-to-hear-by-john-martyn" },
    { title: "1001 Albums: Solid Air — Dr Simon Reads (2025)", url: "https://drsimonreads.blogspot.com/2025/09/1001-albums-you-must-hear-before-you_01326615481.html" },
    { title: "Solid Air — Wikipedia", url: "https://en.wikipedia.org/wiki/Solid_Air" },
  ],

  influencedBy: [
    { artist: "Pharoah Sanders", album: "Karma", year: "1969", note: "uDiscover says it sparked Martyn's jazz interest, and Martyn said he bought his Echoplex to imitate Sanders' sustain on guitar; his quotes name Sanders, not the album." },
  ],

  influenced: [
    { artist: "Eric Clapton", album: "Slowhand", year: "1977", note: "Guitarist Eric Clapton covers \"May You Never,\" per Wikipedia's page on this album; a credited cover, with the album's own year not checked on an opened page." },
  ],
});
