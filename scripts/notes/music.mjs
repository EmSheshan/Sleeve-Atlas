import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Madonna",
  album: "Music",
  year: "2000",
  heading: "Music — Madonna (2000)",

  albumLine:
    "Released 18 September 2000 on Maverick and Warner Bros., produced by Madonna with Mirwais Ahmadzaï and William Orbit across studios in London, Los Angeles and New York. Dance-pop rebuilt from French electronic production and acoustic guitar — her eighth album, and the last time she set the terms rather than followed them.",

  overview: [
    "The decisive hire was Mirwais Ahmadzaï, a French producer with almost no profile in America, whose approach was to chop, filter and vocode everything until the human parts sounded like machine parts and vice versa. Madonna's own description of the result — \"funky, electronic music blended with futuristic folk\" — sounds like a press line and is in fact an accurate technical summary: much of the record is acoustic guitar cut into loops and run through processing.",

    "Doing that in 2000 took some nerve. She was 42, four albums into a run of reinventions, and the safe move was another \"Ray of Light\" with William Orbit, who does appear here on a few tracks. Instead she handed the bulk of a major-label pop record to someone whose instincts were closer to the Paris underground, and the singles that resulted sounded unlike anything else on radio — glitching, filtered, deliberately cheap-sounding in places.",

    "The packaging pushed in a third direction again. Jean-Baptiste Mondino shot her as a rhinestone cowboy, with Arianne Phillips assembling vintage Western wear into what critics read as a complete celebration of camp — an American costume worn by a woman making French electronic music, which is either a joke about authenticity or an argument about it.",

    "It worked commercially on a scale that now looks impossible: four million copies in ten days, No. 1 in 23 countries, 420,000 in its American first week — her best to that point — and over eleven million sold by 2008. Metacritic settles at 80, with praise for its layering and some complaints of inconsistency. The title track was her twelfth and final Hot 100 No. 1. Its longer influence is technical: the vocoded vocals, the chopped acoustic samples and the electro-house textures here turned up across mainstream pop for the following decade.",
  ],

  listeningNotes: [
    {
      label: "Vocoded and filtered vocals",
      text: "Her voice is pitched, robotised and cut into fragments, often mid-word. In 2000 this was a striking choice on a pop record rather than a default.",
    },
    {
      label: "Acoustic guitar as a sample",
      text: "Folk-style picking is chopped into loops and processed, so the most organic instrument on the album arrives sounding synthetic.",
    },
    {
      label: "Deliberately cheap synth tones",
      text: "Mirwais uses thin, buzzy presets and audible digital artefacts rather than lush pads, which is what gives the record its edge.",
    },
    {
      label: "Silence and stutters",
      text: "Tracks drop out entirely for a beat or repeat a fragment several times, arrangement decisions borrowed from French filter house.",
    },
    {
      label: "Orbit's tracks sound different",
      text: "The William Orbit productions are warmer and more sustained than Mirwais's, and the seam between the two producers is audible across the sequence.",
    },
  ],

  sources: [
    { title: "Music (Madonna album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Music_(Madonna_album)" },
    { title: "Mirwais Ahmadzaï — Wikipedia", url: "https://en.wikipedia.org/wiki/Mirwais_Ahmadza%C3%AF" },
    { title: "Music (Madonna song) — Wikipedia", url: "https://en.wikipedia.org/wiki/Music_(Madonna_song)" },
  ],

  influencedBy: [
    { artist: "Daft Punk", album: "Homework", year: "1997", note: "The French filter-house vocabulary — vocoders, chopped loops, cheap synth tones — that Mirwais brought to a pop record." },
    { artist: "Kraftwerk", album: "The Man Machine", year: "1978", note: "The original case for a voice processed into a machine, which this album applies to mainstream pop." },
    { artist: "Blondie", album: "Parallel Lines", year: "1978", note: "Her own starting point: dance rhythm under pop songwriting, made by someone from the New York scene." },
  ],

  influenced: [
    { artist: "Kanye West", album: "808s & Heartbreak", year: "2008", note: "A major artist building a whole album on processed, robotised vocals in place of conventional singing." },
    { artist: "Lady Gaga", album: "The Fame", year: "2008", note: "Electro-house textures and costume-as-argument in mainstream pop, following the template set here." },
  ],
});
