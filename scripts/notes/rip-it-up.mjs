import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Orange Juice",
  album: "Rip It Up",
  year: "1982",
  heading: "Rip It Up — Orange Juice (1982)",

  albumLine:
    "Released in November 1982 on Polydor, produced by Martin Hayles at Berwick Street Studios in London. Post-punk pulled hard toward funk and Southern soul, with horns, strings and a bass synthesizer. It's the Glasgow band's second album, and the one that finally gave them a hit.",

  overview: [
    "Orange Juice came out of Glasgow, where singer and guitarist Edwyn Collins co-founded Postcard Records with Alan Horne in 1979. Postcard's house style — thin, chiming, deliberately unmacho guitars and a conversational vocal — was a pointed rejection of the grim industrial seriousness that post-punk had settled into, and it defined a sound later bands would spend decades mining. The band's stated enthusiasms were an unlikely pair: the Velvet Underground on one side, Chic and Al Green on the other. By 1981 they had signed to Polydor, where that second set of enthusiasms moved to the front.",

    "The lineup had changed by this record. Founding guitarist James Kirk and drummer Steven Daly were gone, replaced by guitarist Malcolm Ross, from the Edinburgh band Josef K, and Zimbabwean drummer Zeke Manyika, who also wrote and sang. Session players were brought in — saxophonist Dick Morrissey, flugelhorn player Martin Drover, violinist Gavyn Wright — which pushed the arrangements somewhere no Postcard record had gone. Polydor was pressing for a hit, which Collins resisted while, by his own account, privately wanting one. Reading about it in Sound On Sound, he bought a Roland TB-303 bass synthesizer from a Denmark Street shop for around £150; Hayles programmed its line from Collins singing it to him.",

    "The single reached No. 8 in the UK and remains the band's only Top 10 entry. The album divided people. Smash Hits writer Neil Tennant gave it 8/10 and said the band could no longer be accused of being twee; critic Jim Reid in Record Mirror called it \"a pleasing patchwork\" but judged Collins short of a real soul singer's range; Sounds gave it 1.5 out of 5, and Collins still remembers an NME review that slated it. Opinion has warmed — Josh Jackson of Paste called it an overlooked post-punk gem in 2016 — and the Postcard template Orange Juice built fed the Smiths and the C86 generation, then surfaced again in Belle and Sebastian and Franz Ferdinand.",
  ],

  listeningNotes: [
    {
      label: "A bass synthesizer doing the bass part",
      text: "The TB-303's rubbery, sliding line carries the title track. The machine was a commercial failure as a bass substitute and was discontinued; acid house rediscovered it in 1988.",
    },
    {
      label: "Chic rhythm guitar, openly admitted",
      text: "Collins played scratchy muted chords on a Burns Nu-Sonic and said flatly that he'd ripped off Chic's guitarist Nile Rodgers. The strumming hand, not the chord shapes, is the whole trick.",
    },
    {
      label: "Handclaps where the percussion should be",
      text: "Much of the groove's lift comes from clapping rather than drums or shakers — a soul-record device that keeps the rhythm bright instead of heavy.",
    },
    {
      label: "Manyika's pocket",
      text: "The drumming is steady and unshowy underneath arrangements that are constantly shifting, and it's the reason the funk feels played rather than programmed.",
    },
    {
      label: "A voice that won't smooth out",
      text: "Collins reaches for soul phrasing with a baritone that cracks and wavers. Critics at the time held it against him; it's now the thing that stops the record sounding like polished early-eighties pop.",
    },
  ],

  sources: [
    {
      title: "Landmarks: Orange Juice 'Rip It Up' — Electronic Sound",
      url: "https://www.electronicsound.co.uk/features/landmarks/orange-juice-rip-it-up/",
    },
    {
      title: "And Start Again — Record Collector",
      url: "https://recordcollectormag.com/articles/and-start-again",
    },
    {
      title: "Orange Juice: Rip It Up — AllMusic review by Tim Sendra",
      url: "https://www.allmusic.com/album/rip-it-up-mw0001236734",
    },
    {
      title: "Rip It Up (Orange Juice album) — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Rip_It_Up_(Orange_Juice_album)",
    },
  ],

  influencedBy: [
    {
      artist: "Chic",
      album: "Risqué",
      year: "1979",
      note: "Collins said he lifted his rhythm guitar from Nile Rodgers — the clipped, muted sixteenth-note strumming that drives this record is the direct borrowing.",
    },
    {
      artist: "The Velvet Underground",
      album: "The Velvet Underground & Nico",
      year: "1967",
      note: "The untrained vocal and scrappy strummed chords the band kept even as the arrangements got slicker; one half of Orange Juice's stated pairing of enthusiasms.",
    },
    {
      artist: "Al Green",
      album: "Al Green Is Love",
      year: "1975",
      note: "Green was played constantly during the band's previous album sessions and they covered him there; the soul phrasing Collins reaches for throughout comes from those records.",
    },
  ],

  influenced: [
    {
      artist: "The Smiths",
      album: "The Smiths",
      year: "1984",
      note: "Built on the Postcard guitar sound Orange Juice defined: treble-heavy, arpeggiated figures played clean, with a conversational vocal riding above rather than belting over them.",
    },
    {
      artist: "Belle and Sebastian",
      album: "If You're Feeling Sinister",
      year: "1996",
      note: "Singer Stuart Murdoch has said Postcard's spirit shaped everything his band did — the same soft-voiced delivery and light, unaggressive guitar arrangements.",
    },
    {
      artist: "Franz Ferdinand",
      album: "Franz Ferdinand",
      year: "2004",
      note: "Singer Alex Kapranos has cited Orange Juice as a reference for both sound and attitude; clipped disco guitar welded to post-punk is exactly the move this album made.",
    },
  ],
});
