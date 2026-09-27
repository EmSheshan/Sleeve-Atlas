import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Laura Nyro",
  album: "Eli And The Thirteenth Confession",
  year: "1968",
  heading: "Eli and the Thirteenth Confession — Laura Nyro (1968)",

  albumLine:
    "Released 3 March 1968 on Columbia, produced by Nyro with the arranger Charlie Calello and recorded in January and February that year. It's pop songwriting run through soul, gospel and jazz at once — her second album, made when she was twenty.",

  overview: [
    "She was born Laura Nigro in the Bronx in 1947, to a piano-tuner and jazz trumpeter father and a bookkeeper mother, with Russian and Polish Jewish and Italian-American family behind her. She taught herself piano, wrote her first songs at eight, and grew up on her mother's Nina Simone and Billie Holiday records — which is audible in everything she does with a vowel. She changed the spelling of her surname after leaving school.",

    "The famous story about her is that she was booed off the stage at the Monterey Pop Festival in June 1967. The story is at best unreliable. Newsweek's reviewer certainly disliked it, writing that \"the evening hit bottom\" during her \"melodramatic\" set, but recordings released since do not support the idea of a hostile crowd. What is documented is what happened next: she voided her first contracts, which she had signed as a minor, took David Geffen as manager, and with him negotiated a Columbia deal with Clive Davis that gave her control over her own records. This album is the first thing she made with that control.",

    "What she did with it was refuse to write a song the way songs were written. Pieces change tempo, key and mood two or three times in four minutes, moving from a whisper to a gospel shout and back; Stephen Holden of the New York Times pointed to exactly this, praising her \"fiercely emotional singing\" and the songs' \"abrupt changes of tempo and style,\" and called the record \"one of the late-'60s most influential pop recordings.\" The lyrics are dense, private and full of invented compound imagery. At her insistence the original pressing's lyric sheet was scented with perfume.",

    "It sold almost nothing — No. 181 on the Billboard 200, her first chart appearance at all — and made its money for other people. Three Dog Night took \"Eli's Comin'\" to No. 10; the 5th Dimension had a No. 3 with \"Stoned Soul Picnic\" and a No. 13 with \"Sweet Blindness.\" Her own versions stayed obscure for years and then became the reference. AllMusic, the Guardian and the Austin Chronicle all rate it five stars, Rolling Stone placed it 463rd in 2020, and the line of women writing ornate, emotionally uncontained piano songs — Kate Bush, Cyndi Lauper, Tori Amos, Alicia Keys — routinely traces back here.",
  ],

  listeningNotes: [
    {
      label: "Songs that change shape mid-way",
      text: "Tempo, key and feel shift abruptly inside a single track, sometimes more than once, with no transition offered. It is the defining habit of her writing.",
    },
    {
      label: "Piano played like a rhythm section",
      text: "She hits the keyboard percussively, with gospel chord voicings and a left hand that functions as bass and drums, so the band follows her rather than the reverse.",
    },
    {
      label: "A three-octave voice used across its whole range",
      text: "She drops to a murmur and jumps to a full-throated shout within a phrase, and the recording does not compress the difference away.",
    },
    {
      label: "Her own voice stacked into a choir",
      text: "Multi-tracked harmonies — often three or four of her — answer the lead line in the manner of a gospel group, which is how a solo record ends up sounding congregational.",
    },
    {
      label: "Calello's brass and string charts",
      text: "The arrangements borrow from Brill Building pop and from soul horn sections, punching in briefly and then vanishing rather than carpeting the track.",
    },
    {
      label: "Songs running into each other",
      text: "Tracks are sequenced with overlaps and joins so each side plays as a continuous suite, which is part of why it resists being broken into singles.",
    },
  ],

  sources: [
    { title: "Eli and the Thirteenth Confession — Wikipedia", url: "https://en.wikipedia.org/wiki/Eli_and_the_Thirteenth_Confession" },
    { title: "Laura Nyro — Wikipedia", url: "https://en.wikipedia.org/wiki/Laura_Nyro" },
    { title: "Eli and the Thirteenth Confession — AllMusic review", url: "https://www.allmusic.com/album/eli-and-the-thirteenth-confession-mw0000202297" },
  ],

  influencedBy: [
    { artist: "Nina Simone", album: "I Put a Spell on You", year: "1965", note: "One of her mother's records and her first model: piano, voice, and no fixed genre." },
    { artist: "The Ronettes", album: "Presenting the Fabulous Ronettes", year: "1964", note: "The Brill Building and girl-group vocabulary she grew up with in New York and rebuilt from the inside." },
  ],

  influenced: [
    { artist: "Joni Mitchell", album: "Blue", year: "1971", note: "The confessional singer-songwriter album with harmonically restless piano and unconventional song structure." },
    { artist: "Kate Bush", album: "The Kick Inside", year: "1978", note: "Bush is among the artists who cite her; the ornate, theatrical, piano-driven and emotionally unguarded style begins here." },
    { artist: "Tori Amos", album: "Little Earthquakes", year: "1992", note: "The mid-song lurch from whisper to howl, and the piano as the whole rhythm section, are direct inheritances." },
  ],
});
