import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Beck",
  album: "Odelay",
  year: "1996",
  heading: "Odelay — Beck (1996)",

  albumLine:
    "Released 18 June 1996 on DGC Records, and produced by singer-songwriter Beck Hansen with the Dust Brothers (producers Mike Simpson and John King) on most of it, plus four other credited producers. It's collage-style alternative rock and hip-hop, and it follows his major-label debut Mellow Gold (1994).",

  overview: [
    "Wikipedia lists PCP Labs, G-Son, The Shop in Arcata, Sunset Sound and Conway as studios, and writer Paul Sexton of uDiscover says recording ran across 1995 and into early 1996 around Beck's touring. Sessions began acoustic with producers Tom Rothrock and Rob Schnapf, then moved to the Dust Brothers' studio in Silver Lake. Simpson told MusicRadar writer Roy Spencer, \"We opened the door, let him in and just started listening to music together, and realised that we had very similar tastes,\" and, \"We were making a record in a vacuum.\" Beck told Rolling Stone writer Gavin Edwards, in a reprint, that the studio was tiny with \"one wall, floor to ceiling\" of records.",

    "It was less sampled than it sounds. Beck said \"a lot of Odelay was played, not sampled,\" that \"the Pro Tools was so primitive, a lot of times the takes would be lost,\" and that \"most of the vocals on the record were scratch vocals.\" He told Stereogum writer Chris DeVille the record cost about $300,000, that the sessions had \"no documentation at all,\" and that a producer who heard an advance copy warned him, \"If you release it, it'll be a huge mistake.\" Wikipedia says the title is a phonetic spelling of the Mexican slang \"órale,\" while Pavement singer Stephen Malkmus told SPIN it is really \"Oh Delay\" because the record took so long.",

    "Wikipedia says it's in the 2010 edition of the book 1001 Albums You Must Hear Before You Die; the book's text wasn't found. It lists the album as best of 1996 in Rolling Stone and in the Village Voice's Pazz & Jop poll. Writer Chris Conaton of PopMatters calls it a \"musical stew that still sounds unusual yet workable 25 years later,\" and says it is \"nearly impossible to tell what was sampled and what was actually performed.\" Writer Tom Breihan of Stereogum says, \"somehow, Beck put all these things together and turned them into pop.\"",
  ],

  listeningNotes: [
    {
      label: "A broken amp, a moving microphone",
      text: "Simpson said of \"Devils Haircut,\" \"Beck had this broken 20W amp and we plugged it in and moved the mic around.\"",
    },
    {
      label: "A drum machine through a guitar pedal",
      text: "Simpson said that for \"The New Pollution\" he \"programmed an 808 beat and ran it through a SansAmp guitar distortion box.\"",
    },
    {
      label: "Walkie-talkies as instruments",
      text: "Simpson said Beck brought \"walkie-talkies and all kinds of weird instruments\" for \"Hot Wax,\" which took about six months to complete.",
    },
    {
      label: "Songs built from long, slow collaboration",
      text: "Beck said they spent at least three weeks on \"High 5,\" which Simpson called \"a classic example of what happens when three crazy people get together in one room.\"",
    },
    {
      label: "Played, not sampled",
      text: "Because much of it was played live, Conaton says the boundary between sample and performance blurs, which helps the collage hold together.",
    },
  ],

  sources: [
    { title: "The making of Beck's Odelay: Mike Simpson's track-by-track guide — MusicRadar (Roy Spencer, 2011)", url: "https://www.musicradar.com/news/the-making-of-becks-odelay-dust-brother-mike-simpsons-track-by-track-guide" },
    { title: "Beck on Odelay — Rolling Stone interview (Gavin Edwards), reprinted at Rule Forty-Two", url: "https://rulefortytwo.com/articles-essays/music/beck-on-odelay/" },
    { title: "Odelay at 25 — Stereogum (Chris DeVille, 2021)", url: "https://www.stereogum.com/2151495/beck-odelay-25th-anniversary-labi-siffre-eminem/news" },
    { title: "Odelay turns 20 — Stereogum (Tom Breihan, 2016)", url: "https://stereogum.com/1883116/odelay-turns-20/reviews/the-anniversary" },
    { title: "Beck, Odelay at 25 — PopMatters (Chris Conaton, 2021)", url: "https://www.popmatters.com/beck-odelay-25-atr" },
    { title: "Odelay — uDiscover Music (Paul Sexton)", url: "https://www.udiscovermusic.com/behind-the-albums/beck-odelay/" },
    { title: "Odelay turns 30 — Paste (Matt Melis, 2026)", url: "https://www.pastemagazine.com/music/beck/beck-odelay-turns-30" },
    { title: "Odelay — Wikipedia", url: "https://en.wikipedia.org/wiki/Odelay" },
    { title: "Middle of Nowhere — Wikipedia", url: "https://en.wikipedia.org/wiki/Middle_of_Nowhere_(Hanson_album)" },
  ],

  influencedBy: [
    { artist: "Them", album: "Them Again", year: "1966", note: "Simpson told MusicRadar that the Them record \"provided the inspiration for three or four songs on the album.\"" },
    { artist: "Beastie Boys", album: "Paul's Boutique", year: "1989", note: "The Dust Brothers and engineer Mario Caldato Jr. worked on both records, a shared-producer link; Breihan calls it a \"red herring\" as a reason Beck hired them." },
  ],

  influenced: [
    { artist: "Hanson", album: "Middle of Nowhere", year: "1997", note: "Breihan says the Dust Brothers-produced album \"took bits of the Odelay sound\"; a named critic's claim resting on shared producers, not an artist statement." },
  ],
});
