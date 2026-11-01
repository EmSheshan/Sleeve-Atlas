import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Patti Smith",
  album: "Horses",
  year: "1975",

  heading: "Horses — Patti Smith (1975)",

  albumLine:
    "Released 10 November 1975 on Arista and produced by the Welsh musician John Cale. It's rock built on top of poetry readings — usually described as one of the opening shots of what became punk. It's Patti Smith's debut.",

  overview: [
    "Smith came to this from poetry, not from bands. Guitarist Lenny Kaye had started accompanying her readings, and by 1975 the pair had grown into a five-piece with a residency at CBGB in New York. The hype around those shows reached label executive Clive Davis, who was stocking his newly founded Arista Records; she signed a seven-album deal in April 1975. Accounts of how he found her differ — one says he was won over at a CBGB performance, another that he reached out after reading reviews and hearing demos. What he signed was not a rock band with a poetic streak but a poet who had annexed a rock band, which is why, as ABC News put it on the album's fiftieth anniversary, it ended up rewriting rock's rule book.",

    "Sessions ran at Electric Lady Studios in New York in September 1975 — one source dates the start to 2 September, another gives 2–18 September, another says August and September. Behind Smith were Kaye, pianist Richard Sohl, bassist and guitarist Ivan Král and drummer Jay Dee Daugherty, with Bernie Kirsh engineering after four years on the studio's staff. Smith picked Cale on the strength of his solo records and then regretted it: \"In my mind I picked him because his records sounded good,\" she said. \"But I hired the wrong guy. All I was really looking for was a technical person.\" She wanted the band's live sound; he reportedly wanted something more arranged, strings included, which she refused. The famous story of open warfare is contested, though — Kirsh, who was in the room, says he did not witness the conflict later described.",

    "The cover, photographer Robert Mapplethorpe's portrait of Smith in a white shirt and loose tie, met resistance too: Arista wanted changes and Davis reportedly pleaded with her to drop it, before later saying he had come to trust her instincts completely. She won, and the image became as influential as the record. The lineage runs straight through punk's first wave — guitarist Viv Albertine of the Slits said the album \"absolutely and completely changed my life,\" and singer Courtney Love of Hole credited it with pushing her toward being a musician at all. A fiftieth-anniversary edition arrived on Sony Legacy in November 2025, around which critic Ken Tucker told NPR it still sounds like nothing before or since.",
  ],

  listeningNotes: [
    {
      label: "Cut live, barely overdubbed",
      text: "\"Gloria\" was tracked completely live in the room, Sohl at Electric Lady's grand piano, according to Kirsh. Overdubs were kept minimal across the record to protect the spontaneity Smith was after.",
    },
    {
      label: "Piano as the lead instrument",
      text: "Sohl carries the long pieces rather than the guitars. On \"Birdland\" his playing runs underneath the spoken verses and then hands off to the sung refrains.",
    },
    {
      label: "Feedback used as punctuation",
      text: "Kaye's guitar began as accompaniment to poetry readings, where he added squalls and bursts to raise the tension. That's still its job here — reacting to a line rather than playing a part.",
    },
    {
      label: "A poem welded onto a garage-rock cover",
      text: "The opening fuses her poem \"Oath\" with the song \"Gloria\", a 1964 staple by Them, and Van Morrison shares the writing credit with her. It announces the album's whole method in one move.",
    },
    {
      label: "Speech sliding into song",
      text: "The extended tracks alternate spoken narration with sung choruses, so the band follows phrasing with no fixed meter to hang on. The looseness is the point, and it took a group that had played these pieces nightly.",
    },
    {
      label: "The arrangement that isn't there",
      text: "Cale's proposed strings were vetoed, and what survives is the five-piece as it worked live. Much of the record's starkness is a subtraction rather than a style.",
    },
  ],

  sources: [
    { title: "Classic Tracks: Patti Smith's \"Gloria\" — Mix", url: "https://www.mixonline.com/recording/classic-tracks/classic-tracks-patti-smiths-gloria-366134" },
    { title: "An oral history of Patti Smith's Horses at 50 — Far Out", url: "https://faroutmagazine.co.uk/an-oral-history-of-patti-smiths-horses-at-50/" },
    { title: "The Making of Patti Smith's Horses — Qobuz", url: "https://www.qobuz.com/us-en/magazine/story/2025/11/10/the-making-of-patti-smiths-horses-we-all-had-to-pull-ourselves-together/" },
    { title: "Fresh Air marks the 50th anniversary of Horses — NPR", url: "https://www.npr.org/2025/11/07/nx-s1-5600848/fresh-air-marks-the-50th-anniversary-of-patti-smiths-landmark-album-horses" },
    { title: "50 years ago, Patti Smith's Horses fused poetry and punk — ABC News", url: "https://www.abc.net.au/news/2025-12-13/patti-smith-horses-50-years-anniversary-punk-poetry-rock-classic/106125110" },
    { title: "The dA-Zed guide to Patti Smith — Dazed", url: "https://www.dazeddigital.com/music/article/25126/1/the-da-zed-guide-to-patti-smith" },
    { title: "Horses (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Horses_(album)" },
  ],

  influencedBy: [
    { artist: "Them", album: "The Angry Young Them", year: "1965", note: "Smith rebuilt their best-known song as the album's opening, grafting her own poem onto its chord pattern; singer Van Morrison shares the writing credit as a result." },
    { artist: "John Cale", album: "Fear", year: "1974", note: "Smith hand-picked Cale as producer on the strength of how his solo records sounded, this one in particular — the direct cause of both the album's dryness and its studio friction." },
  ],

  influenced: [
    { artist: "The Slits", album: "Cut", year: "1979", note: "Guitarist Viv Albertine said this record \"absolutely and completely changed my life\" — the model of a band built around speech-like vocal phrasing rather than conventional singing." },
    { artist: "Hole", album: "Live Through This", year: "1994", note: "Singer Courtney Love credited the album with inspiring her to become a rock musician; the same pairing of confrontational spoken-sung delivery with a plain three-piece backing." },
  ],
});
