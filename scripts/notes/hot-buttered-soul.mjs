import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Isaac Hayes",
  album: "Hot Buttered Soul",
  year: "1969",
  heading: "Hot Buttered Soul — Isaac Hayes (1969)",

  albumLine:
    "Released in June 1969 on Enterprise, a Stax subsidiary, and produced by Al Bell, Allen Jones and Marvell Thomas. It's soul rebuilt at orchestral length — four tracks in forty-five minutes — and it's the record that turned a staff songwriter into a star.",

  overview: [
    "Stax was in trouble. In May 1968 the Memphis label lost its back catalogue to Atlantic in a contract dispute, and Otis Redding, its biggest artist, had died the previous December. Executive Al Bell responded by ordering an enormous burst of new product from the roster to rebuild inventory. Isaac Hayes, a Stax songwriter and session keyboardist who had written hits for Sam & Dave, had already made one solo album that flopped. He agreed to make another only on the condition that he got complete creative control. Bell, needing records, agreed.",

    "What Hayes did with that freedom was ignore essentially every commercial convention of soul music in 1969. Instead of a dozen three-minute songs, he cut four: one original running near ten minutes, a Burt Bacharach and Hal David cover stretched past twelve, and a Jimmy Webb song extended beyond eighteen, most of which is Hayes talking rather than singing. Only one track is anything like conventional length.",

    "It was made between March and May 1969, tracked at Ardent in Memphis with engineer Terry Manning, with the Bar-Kays as the band — Willie Hall on drums, James Alexander on bass, Michael Toles on guitar — and Hayes on keyboards, conducting. Strings and horns arranged by Johnny Allen were recorded separately at United Sound in Detroit, with final vocals and mixing at Tera Shirma. That split is audible: a tight Memphis rhythm section under lush Detroit orchestration.",

    "It went to No. 1 on the R&B chart and No. 8 on the Billboard 200 — proof that the format wasn't the obstacle everyone assumed. Its consequences ran a long way. The extended, orchestral, slow-burn arrangement fed directly into disco and into seventies soundtrack soul, which Hayes himself would define two years later with Shaft. And the record has been mined relentlessly by hip-hop producers; its version of the Bacharach song alone has been sampled by the Notorious B.I.G., 2Pac, Wu-Tang Clan, MF DOOM and Beyoncé, among many others. Rolling Stone placed the album at No. 373 on its 2020 list of the 500 greatest.",
  ],

  listeningNotes: [
    {
      label: "Four tracks, forty-five minutes",
      text: "The running order is the statement. Nothing is edited to radio length and the two longest pieces take up most of the record, so each side is essentially one extended performance.",
    },
    {
      label: "The eight-minute spoken introduction",
      text: "The closing track opens with Hayes simply talking — a long, conversational monologue setting up the song's situation before any singing starts. It's the album's most-copied idea and a direct ancestor of the rap monologue.",
    },
    {
      label: "Memphis rhythm, Detroit strings",
      text: "The band was cut in Memphis and the orchestration added in Detroit. You can hear the seam: a dry, tight, funky rhythm section with a completely different, much lusher sound floating above it.",
    },
    {
      label: "Covers taken somewhere else entirely",
      text: "Two of the four tracks are other people's songs — from Bacharach and David, and from Jimmy Webb — slowed drastically and rebuilt. Hayes treats a familiar melody as raw material rather than something to reproduce.",
    },
    {
      label: "The voice low and close",
      text: "Hayes sings in a deep baritone mixed right up against the microphone, more intimate than declamatory. It's a different register from the shouted Southern soul Stax was known for.",
    },
    {
      label: "Vamps that refuse to resolve",
      text: "Long stretches sit on one groove with the band circling rather than moving to a chorus. The patience is what made the album samplable decades later — there are minutes of usable, stable loop in almost every track.",
    },
  ],

  sources: [
    { title: "Hot Buttered Soul — Wikipedia", url: "https://en.wikipedia.org/wiki/Hot_Buttered_Soul" },
    { title: "Isaac Hayes — Hot Buttered Soul — Craft Recordings", url: "https://craftrecordings.com/blogs/permanent-record/isaac-hayes-hot-buttered-soul" },
    { title: "Isaac Hayes Sampled: 50 Years of 'Hot Buttered Soul' — The Dowsers", url: "https://www.the-dowsers.com/the-dowser-posts/isaac-hayes-sampled-50-years-hot-buttered-soul" },
  ],

  influencedBy: [
    { artist: "Dionne Warwick", album: "Presenting Dionne Warwick", year: "1963", note: "Source of the Bacharach and David material Hayes rebuilds at length here." },
    { artist: "Ray Charles", album: "Modern Sounds in Country and Western Music", year: "1962", note: "An earlier precedent for a soul singer taking outside pop and country songs and reworking them with full orchestration." },
  ],

  influenced: [
    { artist: "Isaac Hayes", album: "Shaft", year: "1971", note: "Hayes's own soundtrack extends this album's orchestral, extended-vamp soul into film scoring." },
    { artist: "Marvin Gaye", album: "What's Going On", year: "1971", note: "Part of the same turn toward soul albums conceived as continuous, orchestrated long-form works rather than singles collections." },
    { artist: "The Notorious B.I.G.", album: "Ready to Die", year: "1994", note: "Samples Hayes's \"Walk On By\" — one of hundreds of hip-hop records built from this album's long, stable grooves." },
  ],
});
