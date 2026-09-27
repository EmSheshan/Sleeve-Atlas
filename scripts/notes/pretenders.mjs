import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Pretenders",
  album: "Pretenders",
  year: "1980",
  heading: "Pretenders — Pretenders (1980)",

  albumLine:
    "Released 11 January 1980 on Real Records, produced mostly by Chris Thomas with one track by Nick Lowe, recorded across 1978 and 1979 at Wessex and AIR in London. It's new wave with punk in its spine and power-pop in its hooks — their debut. (Some listings date it 1979; the documented release is January 1980.)",

  overview: [
    "Chrissie Hynde was from Akron, Ohio, and had moved to London in 1973 — not as a musician but as a writer, joining the NME through the critic Nick Kent. She spent years around the emerging punk scene without a band of her own, and by the time she assembled one in 1978 she was nearly thirty with a very clear idea of what she wanted. The other three were English: guitarist James Honeyman-Scott, bassist Pete Farndon and drummer Martin Chambers.",

    "The record arrived just as punk was decomposing into things more musically ambitious, and it takes the useful half of punk — directness, speed, no deference — while keeping melody, chords that move, and a guitarist capable of genuine finesse. Honeyman-Scott is the secret of the album: his playing is chiming, economical and full of little countermelodies, closer to the Byrds than to the Pistols, and it gives Hynde's songs somewhere to sit.",

    "What made it land was the voice and the stance. Hynde sings with a distinctive catch and slide, swooping between notes and phrasing behind the beat, and the songs are frank about desire from a woman's point of view without being coy or apologetic about it. In 1980 there was very little precedent for a woman fronting a rock band on those terms — writing the songs, playing rhythm guitar, and conceding nothing.",

    "It entered the UK chart at No. 1 and stayed four weeks, reached No. 9 in the US and went platinum. \"Brass in Pocket\" became the signature song; they also covered the Kinks. The band as constituted here did not last: Honeyman-Scott died in June 1982 of heart failure linked to cocaine intolerance, and Farndon drowned in his bath in April 1983 after taking heroin. The album's standing has only grown — the novelist Michael Chabon called it \"one of the most astonishing debut albums in the history of music,\" Rolling Stone place it 152nd among the greatest, and it entered the Grammy Hall of Fame in 2016.",
  ],

  listeningNotes: [
    {
      label: "Honeyman-Scott's chiming guitar",
      text: "Clean, ringing arpeggios and brief melodic fills rather than power chords. He plays around the vocal instead of behind it, and it's what gives the record its brightness.",
    },
    {
      label: "Hynde's slide and catch",
      text: "She bends into notes from below and lets her voice crack deliberately, phrasing just behind the beat. The mannerism is instantly identifiable and widely imitated since.",
    },
    {
      label: "Rhythm section that swings",
      text: "Chambers and Farndon push and pull rather than playing straight punk eighths, so the songs move with a looseness most new wave records of 1980 don't have.",
    },
    {
      label: "Tempo shifts inside songs",
      text: "Several tracks change feel partway through — speeding up, dropping to half time — rather than holding one groove. It's a songwriting habit that marks them out from their peers.",
    },
    {
      label: "A Kinks cover treated as an original",
      text: "\"Stop Your Sobbing,\" produced by Nick Lowe, is a 1964 Kinks song rebuilt rather than reproduced, which sets up the band's whole relationship to sixties British pop.",
    },
  ],

  sources: [
    { title: "Pretenders (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Pretenders_(album)" },
    { title: "Chrissie Hynde — Wikipedia", url: "https://en.wikipedia.org/wiki/Chrissie_Hynde" },
    { title: "The Pretenders — Britannica", url: "https://www.britannica.com/topic/the-Pretenders-band" },
  ],

  influencedBy: [
    { artist: "The Kinks", album: "Something Else by the Kinks", year: "1967", note: "Covered here, and the clearest model for the band's melodic English guitar-pop sensibility." },
    { artist: "Sex Pistols", album: "Never Mind the Bollocks, Here's the Sex Pistols", year: "1977", note: "The London punk scene Hynde spent years inside before forming a band of her own." },
  ],

  influenced: [
    { artist: "Cyndi Lauper", album: "She's So Unusual", year: "1983", note: "Part of the lineage this album opened: a woman fronting a band on her own terms, writing her own material." },
    { artist: "The Smiths", album: "The Smiths", year: "1984", note: "Johnny Marr's chiming, countermelodic guitar style owes a clear debt to Honeyman-Scott's playing here." },
  ],
});
