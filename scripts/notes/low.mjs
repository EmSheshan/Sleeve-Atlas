import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "David Bowie",
  album: "Low",
  year: "1977",
  heading: "Low — David Bowie (1977)",

  albumLine:
    "Released 14 January 1977 on RCA, credited to David Bowie and Tony Visconti as co-producers, recorded in September–October 1976 mostly at Château d'Hérouville in France with finishing work at Hansa in West Berlin. It's a record cut cleanly in half: six short, fractured pop songs on side one, four largely instrumental, mostly wordless pieces on side two.",

  overview: [
    "Bowie arrived at this session coming off the Station to Station tour and a period of heavy cocaine use in Los Angeles that he later said he was lucky to survive. He had just spent the summer in France co-writing and producing Iggy Pop's The Idiot, and the plan after that was to leave America, settle in Europe, and make something that didn't sound like the Thin White Duke persona he'd been performing. He described Low as the first album in years he'd made largely without drugs.",

    "The core band was carried over from Station to Station — Carlos Alomar on guitar, George Murray on bass, Dennis Davis on drums — joined by guitarist Ricky Gardiner and keyboardist Roy Young. Brian Eno was present and contributed synthesizer textures, most notably on an EMS AKS portable synth, but Visconti has been explicit that Eno was not the producer: that credit belongs to him and Bowie. Visconti's own contribution was arguably the record's signature sound — he ran Davis's snare through an Eventide H910 harmonizer, a pitch-shifting device so new that when Bowie asked what it did, Visconti told him it \"fucks with the fabric of time.\" Most of side one was tracked at Hérouville; the band then moved to Hansa for overdubs, vocals, and the completion of side two.",

    "The split itself was the point. Side one is pop songs that keep stopping short — verses that don't resolve, choruses that arrive late or not at all, an instrumental opener in \"Speed of Life,\" a \"Breaking Glass\" that's over before it's begun. Side two drops vocals almost entirely in favor of long synthesizer pieces — \"Warszawa,\" \"Art Decade,\" \"Weeping Wall,\" \"Subterraneans\" — built from the ambient language Eno had already explored on his own Discreet Music and Another Green World, which Bowie had listened to obsessively on tour.",

    "RCA hated it on first listen, pushed Bowie to make something closer to Young Americans, and delayed release from late 1976 into January 1977 as a record they considered unsellable at Christmas; Bowie kept the rejection letter. Reviews split hard — Charles Shaar Murray called it close to an act of hatred, while Ian MacDonald heard it as Sinatra reproduced by Martian computers. It still reached No. 2 in the UK and No. 11 in the US. Decades on it's regularly ranked among Bowie's best work, and its two-part structure became one of the most imitated templates in rock.",
  ],

  listeningNotes: [
    {
      label: "The harmonizer snare",
      text: "Dennis Davis's drums are run through an Eventide H910 pitch-shifter, giving them a compressed, almost mechanical snap. It's the most copied drum sound of the next decade.",
    },
    {
      label: "Songs that cut themselves off",
      text: "\"Breaking Glass\" is barely a minute and a half and \"Speed of Life\" has no vocal at all — side one plays like sketches rather than finished pop songs, on purpose.",
    },
    {
      label: "\"Sound and Vision\"",
      text: "The closest thing here to a conventional single, but the vocal doesn't enter until well into the track, after an extended instrumental build.",
    },
    {
      label: "The hinge track",
      text: "\"A New Career in a New Town\" bridges the two sides — a motorik, Kraftwerk-indebted rhythm under a lonely harmonica line.",
    },
    {
      label: "Side two's instrumentals",
      text: "\"Warszawa,\" \"Art Decade\" and \"Weeping Wall\" drop words almost entirely, built from synthesizer drones and Bowie's own wordless, invented-language vocals.",
    },
    {
      label: "Eno's synth textures",
      text: "Listen for the EMS AKS synthesizer underneath nearly everything — less a solo instrument than a constant atmospheric pressure on the songs.",
    },
  ],

  sources: [
    { title: "Low (David Bowie album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Low_(David_Bowie_album)" },
    { title: "David Bowie: Low — AllMusic", url: "https://www.allmusic.com/album/mw0000185800" },
    { title: "Berlin Trilogy — Wikipedia", url: "https://en.wikipedia.org/wiki/Berlin_Trilogy" },
  ],

  influencedBy: [
    { artist: "Kraftwerk", album: "Radio-Activity", year: "1975", note: "Part of the German electronic/krautrock listening — alongside Neu! and Harmonia — that Bowie and Eno drew on for the album's mechanical pulse." },
    { artist: "Neu!", album: "Neu! 75", year: "1975", note: "Its motorik rhythm is audible directly in the hinge track \"A New Career in a New Town.\"" },
    { artist: "Brian Eno", album: "Discreet Music", year: "1975", note: "Bowie listened to this obsessively on the Station to Station tour; its ambient language is the direct template for side two." },
  ],

  influenced: [
    { artist: "Joy Division", album: "Unknown Pleasures", year: "1979", note: "The band took its original name, Warsaw, from the Low track \"Warszawa\"; its cold production owes a clear debt to this record." },
    { artist: "Tubeway Army", album: "Replicas", year: "1979", note: "Synth-driven, emotionally withdrawn post-punk that follows directly from Low's side one." },
    { artist: "Radiohead", album: "Kid A", year: "2000", note: "A guitar band abandoning song structure for electronics and texture — a path Low mapped first." },
  ],
});
