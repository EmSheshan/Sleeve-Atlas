import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Suede",
  album: "Suede",
  year: "1993",
  heading: "Suede — Suede (1993)",

  albumLine:
    "Suede's self-titled debut arrived on 29 March 1993 on Nude Records, produced by Ed Buller and recorded across late 1992 and early 1993 at Protocol, Angel, and Master Rock studios in London. It's glam-inflected British guitar rock, theatrical and androgynous, and it's the one Suede album made by the band's original songwriting pair, Brett Anderson and Bernard Butler, before anything else about the group had settled.",

  overview: [
    "Brett Anderson and Mat Osman had known each other since school in Haywards Heath; at University College London they formed a band with Anderson's then-girlfriend Justine Frischmann on guitar. Frischmann left in 1991, not long after she and Blur's Damon Albarn had begun seeing each other, and the band found its real guitarist through an NME classified ad: Bernard Butler, whose playing Anderson later admitted \"exposed our ambition as the empty, groundless folly that it was.\" Anderson and Butler became the songwriting engine, with Osman on bass and Simon Gilbert on drums completing the line-up that made the record.",

    "By the time a note of music reached the public, the British press had already crowned the band: Melody Maker put them on its cover in 1992 under the headline \"Best New Band in Britain,\" months before the first single, \"The Drowners,\" appeared that May. The timing mattered — American grunge still dominated alternative rock, and Suede's answer was deliberately, flamboyantly English. Anderson's androgynous, Bowie-and-Bolan-inflected stage persona and Butler's glam-tinged guitar lines read as a direct rebuke to flannel-shirted earnestness, while critics also heard an echo of the Smiths, a band whose 1987 split had left British guitar music without a clear figurehead.",

    "The album cost a reported £105,000 to make and entered the UK chart at No. 1, the fastest-selling debut in Britain in almost a decade. That September it won the second-ever Mercury Music Prize, and the band gave away the £25,000 winnings to cancer research. Rolling Stone's David Fricke wrote that Suede \"is everything that great British pop stars used to be — compelling, confounding, infuriating,\" while NME's Keith Cameron credited the band more plainly with having written \"a few irresistible songs.\" The record is now widely counted among the albums that kicked off Britpop, even though Anderson has spent much of the time since distancing the band from a label he never wanted.",
  ],

  listeningNotes: [
    {
      label: "Butler's guitar, written alone first",
      text: "Bernard Butler composed most guitar parts and melodies by himself before bringing them to rehearsal, where Osman and Gilbert built a rhythm section around what was already written — the reverse of a typical band jam, and part of why the parts sound so fully formed.",
    },
    {
      label: "Smiths melody, shoegaze weight",
      text: "Butler's playing draws on the melodic sweep of the Smiths but thickens into denser, droning textures on quieter tracks like \"She's Not Dead\" and \"Pantomime Horse\" — a heavier sound most of their Britpop peers weren't reaching for.",
    },
    {
      label: "minor verse into major chorus",
      text: "Most songs here follow the same move: a tense, minor-key verse that snaps open into an anthemic major-key chorus, letting the band sound introspective and stadium-ready inside the same three minutes.",
    },
    {
      label: "a grunge riff hiding in a glam song",
      text: "The opening riff of \"Animal Nitrate\" came from Butler listening obsessively to Nirvana's \"Smells Like Teen Spirit\" — an influence he's said was kept \"totally secret\" at the time, evidence the album's Englishness was built from odder parts than it let on.",
    },
    {
      label: "Anderson's androgynous falsetto",
      text: "Brett Anderson sings in a strained, theatrical upper register modelled on Bowie and Marc Bolan, swooping between come-on and sneer inside a single line — the vocal mannerism that made the band's image as talked-about as its music.",
    },
  ],

  sources: [
    { title: "Suede (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Suede_(album)" },
    { title: "Animal Nitrate — Wikipedia", url: "https://en.wikipedia.org/wiki/Animal_Nitrate" },
    { title: "Suede's Debut Album Suede: Classic Album Review — Far Out Magazine", url: "https://faroutmagazine.co.uk/suede-suede-album-review/" },
    { title: "Rediscover Suede's Eponymous Debut Album 'Suede' — Albumism", url: "https://albumism.com/features/suede-eponymous-debut-album-suede-album-anniversary" },
    { title: "Suede: 'We got a load of cocaine in to make the Animal Nitrate video' — NME", url: "https://www.nme.com/news/music/suede-32-1266511" },
  ],

  influencedBy: [
    { artist: "David Bowie", album: "Hunky Dory", year: "1971", note: "Model for Brett Anderson's theatrical, androgynous falsetto and glam persona, the comparison nearly every contemporary review reached for." },
    { artist: "T. Rex", album: "Electric Warrior", year: "1971", note: "The other glam touchstone behind Anderson's vocal swagger and the band's flamboyant stage image." },
    { artist: "The Smiths", album: "The Queen Is Dead", year: "1986", note: "Bernard Butler's melodic, literate guitar lines were repeatedly heard as picking up where the Smiths left off after their 1987 split." },
    { artist: "Nirvana", album: "Nevermind", year: "1991", note: "Butler has said the opening riff of \"Animal Nitrate\" grew out of secretly listening to \"Smells Like Teen Spirit.\"" },
  ],

  influenced: [
    { artist: "Placebo", album: "Placebo", year: "1996", note: "Brian Molko wrote \"Nancy Boy\" partly as a retort to Brett Anderson's much-quoted line about being \"a bisexual man who's never had a homosexual experience.\"" },
  ],
});
