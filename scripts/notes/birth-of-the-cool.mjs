import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Miles Davis",
  album: "Birth Of The Cool",
  year: "1957",
  heading: "Birth Of The Cool — Miles Davis (1957)",

  albumLine:
    "Released in early 1957 on Capitol, Birth of the Cool gathers three studio sessions cut in 1949 and 1950 by a nonet trumpeter Miles Davis led, produced by arranger and Capitol talent scout Pete Rugolo; it's the founding document of cool jazz. It's a compilation, issued between Davis's Collectors' Items (1956) and 'Round About Midnight (1957), of the nonet recordings he made for the label.",

  overview: [
    "In 1948 Davis left saxophonist Charlie Parker's quintet amid growing tensions and went looking for a new band. By then he was playing in the middle of his horn rather than chasing the speed and range of Parker and trumpeter Dizzy Gillespie. Meanwhile arranger Gil Evans, whose reputation rested on orchestrating bebop tunes for bandleader Claude Thornhill, was hosting forward-looking musicians in his basement apartment on 55th Street in Manhattan.",

    "Jazz historian Ted Gioia describes what that circle was after: harmonies borrowed from European impressionist composers, slower tempos, a more lyrical approach to improvising, and horns blended \"like a choir rather than pit[ted] against each other\" as big bands had done. Evans said the nonet was \"the smallest number of instruments that could get the sound and still express all the harmonies the Thornhill band used.\" Davis put it simply: \"I wanted the instruments to sound like human voices singing.\"",

    "The nonet played two weeks at New York's Royal Roost in September 1948, opening for bandleader Count Basie, who said \"those slow things sounded strange and good.\" Rugolo heard them and signed them to Capitol. They recorded in January 1949, April 1949 and March 1950; only Davis, baritone saxophonist Gerry Mulligan, alto saxophonist Lee Konitz and tubist Bill Barber played all three, so the lineup rotated around them.",

    "The immediate reaction was little to none, and Capitol was disappointed by sales and didn't extend Davis's contract; he moved to Prestige. New Yorker classical-music critic Winthrop Sargeant heard \"a new Maurice Ravel\" more than jazz — \"it is not really jazz,\" he wrote, yet he found the music \"charming and exciting.\" By 1957 Down Beat said it influenced \"deeply one important direction of modern chamber jazz.\" Sources disagree slightly on the contents: the 1957 LP carried eleven of the twelve recordings, with the twelfth added on an early-1970s reissue, which one source dates 1971 and another 1972.",
  ],

  listeningNotes: [
    {
      label: "Instruments paired by register",
      text: "Mulligan recalled choosing \"one of each\": trumpet and alto up high, trombone and French horn in the middle, baritone saxophone and tuba below. In \"Move\" the melody sits with the top pair while the low pair supplies counterpoint.",
    },
    {
      label: "Horns that blend like a choir",
      text: "Rather than trading sectional punches, the horns often move in unison or close harmony. \"Jeru\" is a showcase for that rich, unified horn sound.",
    },
    {
      label: "Playing without vibrato, blowing under",
      text: "The Thornhill hallmarks were a non-vibrato style and impressionistic colour. Mulligan said Thornhill taught him \"the art of underblowing,\" which is why the whole band sounds hushed.",
    },
    {
      label: "No tenor saxophone",
      text: "Leaving out the tenor, a standard jazz voice, was unusual at the time and keeps the sound light and airy.",
    },
    {
      label: "Davis in the middle register",
      text: "He doesn't blaze above the band; his trumpet stays mid-range, lyrical and close to the ensemble, which suits the voice-like blend he wanted.",
    },
  ],

  sources: [
    {
      title: "'Birth Of The Cool': How Miles Davis Started A Jazz Revolution — uDiscover Music",
      url: "https://www.udiscovermusic.com/stories/rediscover-birth-of-the-cool/",
    },
    { title: "Birth of the Cool — Wikipedia", url: "https://en.wikipedia.org/wiki/Birth_of_the_Cool" },
  ],

  influencedBy: [],

  influenced: [
    {
      artist: "Miles Davis",
      album: "Miles Ahead",
      year: "1957",
      note: "Gil Evans, who arranged for the nonet, reunited with Davis for a celebrated series of collaborations; Wikipedia lists Miles Ahead first among them.",
    },
  ],
});
