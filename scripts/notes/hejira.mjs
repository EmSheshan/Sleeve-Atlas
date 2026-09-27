import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Joni Mitchell",
  album: "Hejira",
  year: "1976",
  heading: "Hejira — Joni Mitchell (1976)",

  albumLine:
    "Released 21 November 1976 on Asylum, produced by Joni Mitchell with Henry Lewy and recorded at A&M Studios in Hollywood. It's folk dissolving into jazz — her eighth album, and the last before she moved fully into jazz composition.",

  overview: [
    "The record came out of driving. Across late 1975 and early 1976 Mitchell made three journeys, the longest a road trip from Los Angeles to Maine with two companions and then back alone through Florida; six of these songs came from it. She travelled partly in disguise — a red wig, sunglasses, an assumed name — to move among truckers and roadside strangers without being recognised. The album's subject is that condition: motion, distance, the particular clarity of being unknown.",

    "The title is her own transliteration of the Arabic word usually written as hijrah, the Prophet Muhammad's migration from Mecca to Medina. Mitchell said she was looking for \"a word that meant 'running away with honor',\" liked the look of its \"dangling j,\" and glossed it as \"leaving the dream, no blame.\" It's a private appropriation of a religious term rather than a religious reference, and worth taking as she meant it.",

    "Musically she removed most of what pop songs are built from. There are essentially no choruses; the songs are long, continuous and lyrically dense, closer to spoken essay than verse. Percussion is reduced to a faint patter and several tracks have no drums at all. What fills that space is the fretless bass of Jaco Pastorius, then in Weather Report and at the height of his powers, who plays on four tracks in a register far above where a bassist normally sits. Mitchell had been asking exactly that question — \"Why couldn't the bass leave the bottom sometimes and go up and play in the midrange and then return?\" Drummer John Guerin's verdict on the pairing was drier: \"God, you must love this guy; he almost never plays the root!\"",

    "The rest is sparse by design: Larry Carlton on lead guitar, Victor Feldman on vibes, and Neil Young playing harmonica on one track. It reached No. 13 in the US and No. 11 in the UK and went gold, but got comparatively little radio play — there was nothing on it shaped like a single. Its reputation has risen steadily since; Pitchfork later gave it a perfect score, Rolling Stone placed it at No. 133 among the greatest albums, and artists from Björk to Weyes Blood name it as a favourite. It now reads as the point where the singer-songwriter album stopped needing songs in the conventional sense.",
  ],

  listeningNotes: [
    {
      label: "Fretless bass as the lead voice",
      text: "Pastorius plays in the middle and upper register, sliding between notes with no frets to stop him, and frequently avoids the root of the chord entirely. On the tracks he's on, he's effectively the second singer.",
    },
    {
      label: "Almost no drums",
      text: "Percussion is either a faint brushed patter or absent altogether. Without a backbeat the songs drift rather than march, which is a large part of why the album feels like movement without destination.",
    },
    {
      label: "No choruses",
      text: "The songs don't return to a hook; they move continuously forward through long stretches of lyric. Mitchell subordinated melody to the rhythms of speech, so the music follows the sentence rather than a form.",
    },
    {
      label: "Open and altered guitar tunings",
      text: "Her guitar is tuned to non-standard configurations, which produces the ringing, unresolved chord voicings running through the record — clusters that a normally tuned guitar can't easily make.",
    },
    {
      label: "Electric guitar played softly",
      text: "Much of her own playing here is electric rather than acoustic, but strummed gently and clean. It gives the album a cool, slightly metallic shimmer very different from her earlier folk records.",
    },
    {
      label: "One harmonica",
      text: "Neil Young appears on harmonica on a single track — the album's one gesture toward plain Americana, and it stands out precisely because everything around it is so restrained.",
    },
  ],

  sources: [
    { title: "Hejira (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Hejira_(album)" },
    { title: "How the talent of Jaco Pastorius was embraced by Joni Mitchell — MusicRadar", url: "https://www.musicradar.com/news/joni-mitchell-jaco-pastorius-bass-guitar" },
    { title: "Joni Mitchell: Hejira — jacopastorius.com", url: "https://jacopastorius.com/music/hejira/" },
  ],

  influencedBy: [
    { artist: "Weather Report", album: "Black Market", year: "1976", note: "Pastorius's own band at the time; his melodic, high-register fretless approach arrives here straight from that jazz-fusion context." },
    { artist: "Joni Mitchell", album: "The Hissing of Summer Lawns", year: "1975", note: "Her immediately preceding album, where the move away from folk structure toward jazz phrasing had already begun." },
  ],

  influenced: [
    { artist: "Björk", album: "Vespertine", year: "2001", note: "Björk has named Hejira a favourite; the model of an intimate voice over unconventional, non-rock arrangements carries over." },
    { artist: "Weyes Blood", album: "Titanic Rising", year: "2019", note: "Cited by Natalie Mering as a touchstone — long-form, harmonically unusual songwriting in a singer-songwriter frame." },
  ],
});
