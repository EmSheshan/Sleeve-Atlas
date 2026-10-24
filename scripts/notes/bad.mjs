import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Michael Jackson",
  album: "Bad",
  year: "1987",
  heading: "Bad — Michael Jackson (1987)",

  albumLine:
    "Released 31 August 1987 on Epic, produced by Quincy Jones with Jackson as co-producer — the third and last record they made together. It's dance-pop and R&B pulled toward funk, gospel and hard rock, harder-edged and more aggressive than Thriller. Jackson wrote nine of its eleven songs, by far his largest authorial share to that point.",

  overview: [
    "Thriller had sold more copies than any album ever made, and Bad exists in its shadow. Keyboardist Greg Phillinganes remembered Jackson writing \"One hundred million\" on his mirror and looking at it every day; lawyer John Branca suggested an album of covers of songs he loved, and Jackson refused. He reportedly wrote around sixty songs and recorded more than thirty before Jones forced the set down to eleven.",

    "The work began privately, on demos cut from 1985 at Hayvenhurst, his home studio in Encino, and those demos became the blueprint for the finished tracks. Formal sessions opened at Westlake in Los Angeles on 5 January 1987, with engineers Matt Forger and Bruce Swedien; songs were re-cut repeatedly at different tempos and in different keys until a version stuck. Jones tried to bring Prince in as a duet partner and was turned down — accounts of why differ, with Prince later objecting to an opening lyric, while other sources say he simply returned a re-recorded demo.",

    "Jackson turned twenty-nine two days before release, and by then the American press was more interested in his face and his privacy than his music. Bad answers that with hardness: the grooves are clipped and percussive, the ballads tense rather than plush. He was also thinking in pictures — the songs were developed alongside the \"film shorts\" he conceived as narrative films rather than promo clips, one of them directed by Martin Scorsese — and that cinematic habit shows up in the arrangements as much as in the videos.",

    "It entered the Billboard album chart at number one and stayed six weeks, sold 2.25 million US copies in its first week, topped the chart in twenty-four other countries and was the best-selling album of both 1987 and 1988; five of its songs went to number one on the Hot 100, a record for a single album. Sales now exceed thirty million, and Swedien won a Grammy for engineering it. American reviewers at the time treated it as a letdown for not repeating Thriller. The reassessment has been far more generous, and critic David Bennun has argued that it is Bad, not Thriller, that most of today's pop actually sounds like.",
  ],

  listeningNotes: [
    {
      label: "The dry, airless mix",
      text: "Almost nothing is allowed to bloom or decay — the up-tempo tracks are compressed tight with very little room sound. It's the opposite of Thriller's warmth, and it's the main reason the record still sounds modern.",
    },
    {
      label: "Vocal percussion as rhythm",
      text: "Grunts, gasps and clipped hiccups are used as instruments rather than decoration, sitting inside the groove instead of over it. On \"Speed Demon\" Jackson simply beatboxes part of the arrangement.",
    },
    {
      label: "Stacked harmonies sung in place",
      text: "The choir-sized backing vocals are all Jackson, built as sixteen separate passes with each part sung for real rather than copied and shifted. \"Liberian Girl\" is the clearest example — a crowd made of one person.",
    },
    {
      label: "Digital synth brittleness",
      text: "Layers of FM synthesis, Fairlight and Synclavier give the record its glassy, metallic surface. Where earlier Jones productions leaned on live horns and strings, here the hardness is deliberate.",
    },
    {
      label: "Arena-rock lead guitar inside R&B",
      text: "Guitarist Steve Stevens, recruited on producer Ted Templeman's recommendation, cut a solo through a late-sixties Marshall with Jackson humming the shape he wanted rather than naming chords. Stevens found a near-empty room — just Jackson, Jones and an engineer.",
    },
    {
      label: "Sound design as scenery",
      text: "Breathing, heartbeats and sirens are mixed in as atmosphere, pulling the listener toward a scene rather than a song. \"Smooth Criminal\" is built almost like a film cue.",
    },
  ],

  sources: [
    { title: "Michael Jackson's Birthday as 'Bad' Turns 25: An Album's Oral History — TIME", url: "https://time.com/archive/7121496/michael-jackson-bad/" },
    { title: "How Michael Jackson's Bad Shaped Pop As We Know It — The Quietus", url: "https://thequietus.com/?p=23033" },
    { title: "Rediscover Michael Jackson's 'Bad' (1987) — Albumism", url: "https://albumism.com/features/celebrating-35-years-of-michael-jackson-bad-album-anniversary" },
    { title: "Steve Stevens on recording with Michael Jackson — American Songwriter", url: "https://editorial.americansongwriter.com/steve-stevens-recalls-getting-a-glowing-compliment-from-michael-jackson-only-to-find-out-jackson-told-eddie-van-halen-the-same-thing/" },
    { title: "Bad (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Bad_(album)" },
  ],

  influencedBy: [
    { artist: "James Brown", album: "Live at the Apollo", year: "1963", note: "Jackson called Brown his greatest teacher and watched him from the wings as a child; the grunts, gasps and on-the-beat vocal punctuation driving the up-tempo tracks come from Brown's phrasing." },
    { artist: "Billy Idol", album: "Rebel Yell", year: "1983", note: "Shared personnel: guitarist Steve Stevens, Idol's writing partner, was brought in for this album's hard-rock solo and used the same Marshall-driven, high-register lead sound." },
  ],

  influenced: [
    { artist: "Justin Timberlake", album: "Justified", year: "2002", note: "Critic David Bennun names Timberlake among the male pop singers working directly from this record's model — tightly clipped percussive phrasing over dry, stuttering rhythm tracks." },
    { artist: "Usher", album: "Confessions", year: "2004", note: "Dance-led R&B built on the same compressed, snapping drum sound and vocal-tic delivery; Bennun cites Usher as one of the performers closest to this template." },
    { artist: "Bruno Mars", album: "24K Magic", year: "2016", note: "Bennun names Mars in the same lineage: falsetto hooks and hard, dry funk arrangements that take their sense of attack from here rather than from Thriller's warmer mixes." },
  ],
});
