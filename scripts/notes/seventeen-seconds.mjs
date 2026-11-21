import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "The Cure",
  album: "Seventeen Seconds",
  year: "1980",
  heading: "Seventeen Seconds — The Cure (1980)",

  albumLine:
    "Released in April 1980 on Fiction Records, and produced by singer and guitarist Robert Smith with producer Mike Hedges. It's post-punk and early gothic rock, and it's The Cure's second album, after Three Imaginary Boys (1979) and before Faith (1981).",

  overview: [
    "The release date is contested: Wikipedia gives 18 April 1980, while Long Live Vinyl and Albumism give 22 April. The band recorded at Morgan Studios in London in about a week in January 1980; Wikipedia says 13 to 20 January, and Long Live Vinyl says ten days were booked and eight used. Writer Dan Biggane of Long Live Vinyl, drawing on drummer Lol Tolhurst's memoir, says the band slept on the floor of the studio, a former church, and that Smith kept the label's A&R man Chris Parry away from the sessions.",

    "Writer Richard Buskin of Sound on Sound says the band played live as a unit, with each backing track taking roughly an hour. Drums were close-miked with contact microphones and the cymbals overdubbed through compressors. Keyboardist Matthieu Hartley's synthesiser was plugged straight into the desk, with a rule of single-note lines only, and long tape loops ran round the room on microphone stands. Hedges told Buskin, \"It really was the drum sound that largely defined the album's sonic direction.\" Buskin summarises the split as Smith handling musical direction and Hedges the sound.",

    "Biggane says Smith's reference points were David Bowie's Low, Nick Drake's Five Leaves Left and Van Morrison's Astral Weeks. Writer Rayna Khaitan of Albumism quotes Smith as saying he \"wanted it to be inspired by Nick Drake with the clear, finished sound of Bowie's Low,\" though she gives no original source for the quote. Bassist Simon Gallup had replaced Michael Dempsey, and Hartley was new to the lineup. Smith told reissue liner notes in 2005, per Albumism, \"A lot of anger and anguish. I felt overcome, overwhelmed…and very alone.\"",

    "Wikipedia says the album is in the 2010 edition of the book 1001 Albums You Must Hear Before You Die; the book's own text wasn't found. Reaction at the time was mixed. Critic Nick Kent of NME called it \"depressingly regressive,\" Chris Westwood of Record Mirror found it \"biteless, a bit distant,\" and Paul Morley, a critic, called it \"an extraordinary LP,\" per Biggane. Wikipedia says biographer Jeff Apter later called it \"a sonic touchstone\" for gothic rock, and that Rolling Stone placed it among its 80 greatest albums of 1980. Writer Damien Love hears \"a sharp, endless after-the-rain mood, empty, but pregnant.\"",
  ],

  listeningNotes: [
    {
      label: "Drums as the foundation",
      text: "Close-miked drums with contact microphones and overdubbed cymbals give the record its dry, gated space; Hedges called the drum sound the thing that largely defined it.",
    },
    {
      label: "Stacked flangers",
      text: "Buskin says up to seven flangers were stacked on \"A Forest,\" which produces its swirling, underwater guitar.",
    },
    {
      label: "Single-note keyboard lines",
      text: "Smith's single-note rule for Hartley's synthesiser keeps the arrangements spare; Hedges joked, \"He had another nine fingers to play with!\"",
    },
    {
      label: "Tape loops around the room",
      text: "Long 16- and 32-bar loops run on microphone stands and pencils across the studio are part of why the music seems to hang in the air.",
    },
    {
      label: "A tape that ran out",
      text: "Albumism says \"The Final Sound\" ran out of tape around 52 seconds with no budget to redo it; Wikipedia says 53 seconds.",
    },
  ],

  sources: [
    { title: "Classic Tracks: The Cure, 'A Forest' — Sound on Sound (Richard Buskin, 2004)", url: "https://www.soundonsound.com/techniques/classic-tracks-the-cure-a-forest" },
    { title: "The making of The Cure's Seventeen Seconds — Long Live Vinyl (Dan Biggane)", url: "https://longlivevinyl.net/2020/04/13/the-making-of-the-cures-seventeen-seconds/" },
    { title: "The Cure, Seventeen Seconds — Albumism (Rayna Khaitan)", url: "https://albumism.com/features/the-cure-seventeen-seconds-album-anniversary" },
    { title: "Big Gray: The Cure's Seventeen Seconds — Damien Love", url: "https://damienlove.com/writing/big-gray-the-cures-seventeen-seconds/" },
    { title: "Seventeen Seconds — Wikipedia", url: "https://en.wikipedia.org/wiki/Seventeen_Seconds" },
  ],

  influencedBy: [
    { artist: "David Bowie", album: "Low", year: "1977", note: "Albumism quotes Smith wanting \"the clear, finished sound of Bowie's Low\"; Wikipedia and Damien Love say Smith listened to it while writing." },
    { artist: "Nick Drake", album: "Five Leaves Left", year: "1969", note: "Biggane, Albumism and Love all name it as a reference for Smith, though the one Smith quote is unsourced." },
    { artist: "Van Morrison", album: "Astral Weeks", year: "1968", note: "Biggane and Love name it as a reference point for the record; neither gives a first-hand Smith quote." },
  ],

  influenced: [
    { artist: "Big Black", album: "Atomizer", year: "1986", note: "Love says singer and guitarist Steve Albini's liner notes read \"We like Seventeen Seconds, all of us,\" in connection with one song; a secondhand report, and Wikipedia's Atomizer page doesn't mention it." },
  ],
});
