import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Nusrat Fateh Ali Khan",
  album: "Devotional Songs",
  year: "1992",
  heading: "Devotional Songs — Nusrat Fateh Ali Khan (1992)",

  albumLine:
    "Released in 1992 on Peter Gabriel's Real World label, recorded at Fair Deal Studios in Middlesex as a WOMAD production. It's qawwali — the devotional music of Sufi Islam — performed by Nusrat Fateh Ali Khan with his Party, his regular ensemble of family members and friends.",

  overview: [
    "Qawwali is sung in Urdu, Punjabi and Persian in praise of God, the Prophet Muhammad, and Sufi saints, and it exists to induce religious ecstasy in an audience rather than to entertain one. It's a devotional practice with a performance shape: a lead voice improvises against a fixed refrain, the group answers, and the whole thing accelerates and intensifies over long stretches. Performances traditionally run for hours.",

    "Khan was born in 1948 into a family that had sung qawwali for something close to six hundred years, and he was widely regarded as the greatest practitioner of his generation — his title, Shahen-Shah-e-Qawwali, means King of Qawwali. His capacities were physical as much as artistic: accounts describe him sustaining performances at full intensity for hours, with a range and improvisational facility contemporaries considered unmatched.",

    "The Western connection came through Peter Gabriel. Khan performed at the WOMAD festival in London in 1985, worked with Gabriel on the soundtrack to The Last Temptation of Christ in 1988, and was signed to Real World the following year. What matters about this album specifically is that it's the traditional side of that relationship. Where Mustt Mustt (1990) and Night Song (1995) paired him with the producer and guitarist Michael Brook and Western studio technique, this one is minimally accompanied — mostly harmonium and tabla, in the standard call-and-response form, with nothing added for foreign ears.",

    "That restraint is why it's often the recommended entry point. Record Collector gave it five stars and called it \"the maestro at the height of his powers\"; Songlines rated it four, noting Khan \"in his full glory with his regular accompanists.\" He died in 1997, at 48. His influence on Western musicians was considerable and frequently acknowledged — Jeff Buckley's summary was simply \"He's my Elvis.\"",
  ],

  listeningNotes: [
    {
      label: "Call and response",
      text: "Khan sings a line and the Party answers it, over and over. The repetition is the engine — the music builds by return rather than by moving on.",
    },
    {
      label: "Harmonium and tabla only",
      text: "The accompaniment is deliberately minimal: a hand-pumped reed organ holding a drone and chords, plus tabla. No Western instruments, no production gloss.",
    },
    {
      label: "Sargam — singing the note names",
      text: "Khan improvises wordlessly using the Indian solfège syllables, running rapid melodic figures that function as instrumental solos performed by a voice.",
    },
    {
      label: "Acceleration over long spans",
      text: "Pieces run well past ten minutes and steadily gather speed and volume. The intensification is structural and intended to carry listeners toward a devotional state.",
    },
    {
      label: "Handclaps as percussion",
      text: "The group claps in interlocking patterns alongside the tabla, driving the rhythm physically. It's the sound of an ensemble sitting together rather than a recording session.",
    },
  ],

  sources: [
    { title: "Devotional Songs — Real World Records", url: "https://realworldrecords.com/releases/devotional-songs/" },
    { title: "Nusrat Fateh Ali Khan — Wikipedia", url: "https://en.wikipedia.org/wiki/Nusrat_Fateh_Ali_Khan" },
    { title: "Devotional Songs — AllMusic", url: "https://www.allmusic.com/album/devotional-songs-mw0000095704" },
  ],

  influencedBy: [
    { artist: "Nusrat Fateh Ali Khan", album: "Mustt Mustt", year: "1990", note: "His own earlier Real World album, which took the Western-facing approach this record deliberately sets aside for the traditional form." },
    { artist: "Peter Gabriel", album: "Passion", year: "1989", note: "Gabriel and Khan first worked together on this soundtrack, which led to the Real World signing that produced this album." },
  ],

  influenced: [
    { artist: "Jeff Buckley", album: "Grace", year: "1994", note: "Buckley called Khan \"my Elvis\"; the long melismatic vocal lines on Grace are directly modelled on qawwali singing." },
    { artist: "Massive Attack", album: "Mezzanine", year: "1998", note: "Part of the British electronic scene that remixed and sampled Khan, carrying qawwali into dance music." },
  ],
});
