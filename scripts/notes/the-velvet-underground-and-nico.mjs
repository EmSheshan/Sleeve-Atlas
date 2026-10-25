import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "The Velvet Underground",
  album: "The Velvet Underground & Nico",
  year: "1967",
  heading: "The Velvet Underground & Nico — The Velvet Underground (1967)",

  albumLine:
    "Released in March 1967 on Verve, with pop artist Andy Warhol credited as sole producer. Art rock, proto-punk and avant-pop before any of those labels existed. It's the band's debut, and Verve only took it after Columbia, Atlantic and Elektra had each said no.",

  overview: [
    "Two musical educations collide here. Singer and guitarist Lou Reed had studied English at Syracuse under the poet Delmore Schwartz — \"what he could do with five words was astonishing to me\" — written doo-wop pastiche as a staff songwriter, and listened hard to saxophonist Ornette Coleman and pianist Cecil Taylor, wanting, he said, \"something like that with a rock & roll feeling.\" Violist John Cale had arrived in New York from Wales and joined composer La Monte Young's Theatre of Eternal Music, an ensemble whose material was enormously sustained drones; Cale's stated ambition was to get Young's ideas into rock and roll. With guitarist Sterling Morrison and drummer Maureen Tucker, that made a band with no interest in the blues virtuosity 1967 rock was organised around.",

    "Warhol became their manager in 1966, installed them as the house band at his Factory studio and folded them into the Exploding Plastic Inevitable, a touring show that played his films and lights over their sets. He also pushed the German model and actress Nico into the group; she sings lead on three songs. His production credit is disputed by nearly everyone involved. Reed called Verve staff producer Tom Wilson, who ran most of the sessions and brought the record in, the \"real producer\"; Cale said Warhol \"didn't do anything\"; Norman Dolph, the Columbia sales executive who part-financed and co-engineered the first sessions and was paid in a Warhol painting, said the real creative producer was Cale.",

    "Most of it was cut across a handful of days in April 1966 at Scepter Studios in Manhattan, for somewhere between $1,500 and $3,000. Reed's subjects — heroin, prostitution, sadomasochism, people living at the city's edges — were more explicit than anything then in circulation, and the consequences were commercial: shops wouldn't stock it, radio wouldn't play it. Warhol's peel-off banana sticker held up manufacturing, and then MGM recalled the record when actor Eric Emerson, whose projected image appeared on the back cover, threatened to sue; he was airbrushed out of later pressings.",

    "It reached No. 129 on the Billboard 200 and sank. The famous line, attributed to producer Brian Eno in a 1982 interview, is that it sold about 30,000 copies in five years and everyone who bought one started a band; the figure is doubtful — an MGM statement showed 58,476 sold by February 1969 — but the second half held. Critic Robert Christgau's 1977 reassessment began the rehabilitation, and by 2017 Pitchfork had it as the best album of the 1960s.",
  ],

  listeningNotes: [
    {
      label: "Amplified viola drone",
      text: "Cale bowed sustained drones on a viola strung partly with guitar and mandolin strings, played loud and distorted. It's a minimalist device lifted from Young's ensemble and dropped into a rock band — it carries \"Venus in Furs\" and \"The Black Angel's Death Song.\"",
    },
    {
      label: "The \"ostrich\" guitar",
      text: "Reed tuned strings to the same note so a strum rang as one enormous chord-drone. Accounts of the exact tuning differ; the guitars were also dropped roughly a whole step, which thickens everything.",
    },
    {
      label: "Drums with no backbeat",
      text: "Tucker played standing up on a minimal kit, often with mallets and frequently with no cymbals at all. You get a pulse rather than a beat, and nothing marking out the two and four.",
    },
    {
      label: "Flat, unperformed singing",
      text: "Nico's low, unornamented delivery and Reed's conversational speech-singing both decline to emote. Against the gospel-derived rock voices of 1967, the refusal reads as a position.",
    },
    {
      label: "Noise as a destination",
      text: "Several tracks don't resolve so much as disintegrate into feedback and scraped strings. This is where the free-jazz listening lands: a passage that goes somewhere unprepared and doesn't come back.",
    },
  ],

  sources: [
    { title: "The Velvet Underground & Nico Is 50 Years Old But Still Sounds New — Stereogum", url: "https://www.stereogum.com/1929082/the-velvet-underground-nico-is-50-years-old-but-still-sounds-new/columns/sounding-board/" },
    { title: "Tracing The Influences Of The Velvet Underground — uDiscover Music", url: "https://www.udiscovermusic.com/stories/velvet-underground-influences/" },
    { title: "The Velvet Underground & Nico — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Velvet_Underground_%26_Nico" },
  ],

  influencedBy: [
    { artist: "Ornette Coleman", album: "Free Jazz: A Collective Improvisation", year: "1961", note: "Reed listened closely to Coleman and said he wanted \"something like that with a rock & roll feeling\"; the album's long unresolved improvised passages are where that ambition lands." },
    { artist: "Bob Dylan", album: "Highway 61 Revisited", year: "1965", note: "The concrete link is a shared person: producer Tom Wilson made Dylan's first electric records, then ran most of these sessions and finished the album. Reed called him its \"real producer.\"" },
  ],

  influenced: [
    { artist: "The Modern Lovers", album: "The Modern Lovers", year: "1976", note: "Singer and guitarist Jonathan Richman was a teenage devotee, and Cale produced the sessions that make up the album — a conversational vocal over a two-chord organ-and-guitar drone, this record's method applied directly." },
    { artist: "The Jesus and Mary Chain", album: "Psychocandy", year: "1985", note: "Drummer Bobby Gillespie played a snare and floor tom standing up, a kit he took from Tucker, under sustained feedback laid over pop chord changes. Singer Jim Reid called the Velvets \"obviously a massive influence at that time.\"" },
    { artist: "David Bowie", album: "Hunky Dory", year: "1971", note: "Bowie's manager Kenneth Pitt brought a pre-release test pressing of this album back from the Factory in November 1966. \"Queen Bitch\" is Bowie's acknowledged Velvet Underground pastiche, and the sleeve notes credit the debt." },
  ],
});
