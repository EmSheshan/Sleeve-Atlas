import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Jane Weaver",
  album: "Modern Kosmology",
  year: "2017",
  heading: "Modern Kosmology — Jane Weaver (2017)",

  albumLine:
    "Released May 2017 on Fire Records, written, performed and largely produced by Weaver herself, with Malcolm Mooney of Can guesting on one track. It's krautrock and psych-pop with the folk stripped out — her ninth solo album, and the one that made her name outside Manchester.",

  overview: [
    "She had been working for two decades by this point, through Manchester's Twisted Nerve orbit and a long run of records filed under psych-folk — The Guardian's line on her 2010 album was that \"psych folk is back,\" praising how \"Weaver's fragile, unworldly voice is carefully balanced against more muscular backing.\" This is the record where she drops the folk almost entirely and commits to the muscular part.",

    "What replaces it is motorik: the steady, unaccented four-four pulse that Neu! and Can built in early-seventies Germany, where the drums refuse to mark bars and the music advances by repetition rather than by chorus. Weaver runs melodic synth lines and multi-tracked vocals over that engine, so the songs feel simultaneously propulsive and static. Having Malcolm Mooney — Can's first vocalist — speak over one track is an unusually literal way of naming your source.",

    "The context is a British underground that had spent the 2010s rediscovering European electronic music while the mainstream went the other way. Weaver's position in it is unusual for being self-sufficient: she writes, plays, sings, produces and releases through a label she is directly involved in running, which is why the record sounds like one person's idea rather than a committee's. Reviewers noted that it holds together despite covering a lot of ground — varied without being disjointed, one writer put it.",

    "It was widely received as her best and most assured, described as a single unbroken series of shifting melodies rather than a set of separate songs. Its significance is less about sales than about a lineage: a woman in her forties, unsigned to anything major, making rigorous electronic psychedelia and being taken seriously for it, in a decade when the British guitar underground had very little else to show.",
  ],

  listeningNotes: [
    {
      label: "Motorik drums",
      text: "A steady unaccented pulse that never marks the start of a bar, so the music moves forward without ever arriving. It's the krautrock inheritance made explicit.",
    },
    {
      label: "Analogue synth sequences",
      text: "Repeating arpeggiated lines run underneath, shifting by one note at a time rather than changing chord, which is where the hypnotic quality comes from.",
    },
    {
      label: "Her voice multi-tracked into a choir",
      text: "Close-harmony stacks of her own vocal float over the machinery, cool and unstrained — the one element that stays soft.",
    },
    {
      label: "Spoken word from Can's first singer",
      text: "Malcolm Mooney talks over \"Ravenspoint,\" which places the record in a direct line to the band it's built on rather than merely resembling them.",
    },
    {
      label: "Flute and strings inside electronics",
      text: "Acoustic colours appear briefly amid synths and drum machines, a residue of the folk records she had been making until then.",
    },
    {
      label: "Songs that segue",
      text: "Tracks run into one another with shared tones and tempos, so the album plays as one continuous movement rather than as a sequence.",
    },
  ],

  sources: [
    { title: "Modern Kosmology — Wikipedia", url: "https://en.wikipedia.org/wiki/Modern_Kosmology" },
    { title: "Jane Weaver — Modern Kosmology, review — Drowned in Sound", url: "https://drownedinsound.com/releases/20171/reviews/4151542" },
    { title: "Jane Weaver: Modern Kosmology — PopMatters", url: "https://www.popmatters.com/jane-weaver-modern-kosmology-2495386369.html" },
  ],

  influencedBy: [
    { artist: "Can", album: "Tago Mago", year: "1971", note: "Mooney sang for them, and the repetition-over-development approach to rhythm is lifted wholesale." },
    { artist: "Neu!", album: "Neu!", year: "1972", note: "The motorik pulse — unaccented, unvarying, forward-moving — that carries most of this record." },
    { artist: "Broadcast", album: "The Noise Made by People", year: "2000", note: "The nearest British precedent: cool, unstrained vocal lines over vintage analogue electronics and library-music textures." },
  ],

  influenced: [
    { artist: "Beak>", album: "Beak>>>", year: "2018", note: "Part of the same British revival of German rhythmic minimalism as a working method rather than a reference." },
  ],
});
