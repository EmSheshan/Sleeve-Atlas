import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Prefab Sprout",
  album: "Steve McQueen",
  year: "1985",
  heading: "Steve McQueen — Prefab Sprout (1985)",

  albumLine:
    "Released 22 June 1985 on Kitchenware, produced by Thomas Dolby. Jazz-inflected sophisti-pop with fifties country and rock and roll underneath — their second album, and issued in America as \"Two Wheels Good\" to avoid a fight with the actor's estate.",

  overview: [
    "Paddy McAloon wrote it, and the writing is the reason the record has the reputation it has. He works in the same territory as Elvis Costello — dense, allusive, verbally show-off lyrics — but sets it to melodies far softer than the words deserve, so a line about failure or infidelity arrives wrapped in something close to easy listening. Wendy Smith's wordless backing vocals, high and wide behind almost everything, are the sound most people remember.",

    "Thomas Dolby's production is what turned that into a coherent record rather than a clever one. He had had his own synth-pop hits and brought a lush, precise, unmistakably mid-eighties palette — gated drums, chorused fretless bass, glossy keyboards — which by the conventions of indie credibility should have been fatal. It works because the songs are strong enough to survive being dressed expensively, and because the gloss sets up the melancholy rather than hiding it.",

    "Commercially it was a slow, awkward business. The album reached No. 21 in Britain, but the singles struggled badly: \"When Love Breaks Down\" had to be released three separate times before it finally charted at No. 25 near the end of the year. That is an unusual amount of faith from a small label.",

    "The reviews were immediate — Record Mirror's Graham K. Smith gave it five stars and called it \"the finest album you will hear this year,\" and AllMusic later described it as \"a shimmering jazz-pop masterpiece sparked by Paddy McAloon's witty and inventive songwriting.\" It has since become one of those records whose standing rests on other musicians rather than on sales, appearing at No. 47 in The Times's greatest albums and No. 61 in The Guardian's.",
  ],

  listeningNotes: [
    {
      label: "Wendy Smith's wordless harmonies",
      text: "High, airy, non-verbal vocal lines float behind the songs as a texture rather than a counter-melody. It's the group's signature sound.",
    },
    {
      label: "Dolby's mid-eighties gloss",
      text: "Gated drums, fretless bass and chorused keyboards — a production that should date the record and instead sets off the writing.",
    },
    {
      label: "Country and rockabilly bones",
      text: "Several songs are built on fifties chord movement and shuffle rhythms, dressed in equipment from thirty years later.",
    },
    {
      label: "Lyrics denser than the melodies",
      text: "McAloon packs internal rhyme and allusion into lines carried by tunes soft enough for daytime radio, and the mismatch is the point.",
    },
    {
      label: "Jazz chords in pop songs",
      text: "Major sevenths and unresolved extensions run throughout, which is what gives the record its particular wistfulness.",
    },
    {
      label: "McAloon singing softly against the words",
      text: "He delivers even the cruellest lines gently and well within his range, so the sting lands a beat after the melody has already charmed you.",
    },
  ],

  sources: [
    { title: "Steve McQueen (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Steve_McQueen_(album)" },
    { title: "Prefab Sprout — Wikipedia", url: "https://en.wikipedia.org/wiki/Prefab_Sprout" },
    { title: "Thomas Dolby — Wikipedia", url: "https://en.wikipedia.org/wiki/Thomas_Dolby" },
  ],

  influencedBy: [
    { artist: "Steely Dan", album: "Aja", year: "1977", note: "The model for jazz harmony and studio precision carrying songs whose lyrics are considerably darker than the surface." },
    { artist: "The Beach Boys", album: "Pet Sounds", year: "1966", note: "Wordless high harmony used as an instrument, and melancholy dressed in lushness." },
  ],

  influenced: [
    { artist: "The Blue Nile", album: "Hats", year: "1989", note: "Scottish sophisti-pop built on expensive-sounding production around emotionally plain songs — the same wager." },
    { artist: "Aimee Mann", album: "Whatever", year: "1993", note: "Literate, chord-restless pop where the arrangement is immaculate and the lyrics are not consoling." },
  ],
});
