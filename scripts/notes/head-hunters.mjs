import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Herbie Hancock",
  album: "Head Hunters",
  year: "1973",
  heading: "Head Hunters — Herbie Hancock (1973)",

  albumLine:
    "Released October 26, 1973 on Columbia, produced by Hancock with David Rubinson and recorded that September in San Francisco. It's jazz-funk — a tight, repetitive groove band built around clavinet, synthesizers and African percussion — the record that turned a sideman's-sideman into a commercial force.",

  overview: [
    "Hancock spent the previous three years leading the Mwandishi sextet, an electric, free-leaning band that critics liked and almost nobody paid to see. It was expensive to tour, the label had no machinery for marketing this kind of music to a Black audience, and by mid-1973 Hancock had disbanded it. He's said he was tired of \"everything being heavy\" and wanted something tethered to the ground instead of floating into abstraction. The catalyst, by his own account, was hearing Sly and the Family Stone's \"Thank You (Falettinme Be Mice Elf Agin)\" and feeling it go straight to his core.",

    "Only saxophonist Bennie Maupin carried over from Mwandishi. Hancock built a new band around bassist Paul Jackson, drummer Harvey Mason and percussionist Bill Summers, writing in repeating, interlocking funk patterns instead of open improvisation. He cut guitar from the lineup and made the Hohner Clavinet — the instrument Stevie Wonder had just centered \"Superstition\" on — his main voice alongside Fender Rhodes and ARP synthesizers. Summers added African and Afro-Latin percussion, at one point blowing across a beer bottle to imitate the hindewhu whistling of Central Africa's Mbuti people.",

    "Recorded in September 1973 at San Francisco's Wally Heider and Different Fur studios with Rubinson co-producing, three of the four tracks were new: \"Chameleon,\" built on a synthesizer bassline that's since become one of the most recognizable riffs in funk, and \"Sly,\" an extended tribute to Stone. The fourth, \"Watermelon Man,\" was a decade-old tune from Hancock's 1962 debut, remade here around Summers' percussion into something the original hard-bop chart doesn't resemble.",

    "It outperformed anything Columbia expected: No. 13 on the Billboard 200, gold within six months, platinum by 1986 — the first jazz album to reach either — and the best-selling jazz record ever until George Benson's Breezin' passed it in 1976. It entered the National Recording Registry in 2008. \"Chameleon\" and \"Watermelon Man\" became standard sampling sources for hip-hop and funk producers through the 1980s and '90s, carrying Hancock's rhythm section into records he had no hand in making.",
  ],

  listeningNotes: [
    {
      label: "The Clavinet as lead voice",
      text: "Hancock plays the Hohner Clavinet with the percussive snap that defined early-'70s funk keyboard, the same tone Stevie Wonder had just put at the center of \"Superstition.\"",
    },
    {
      label: "A synthesizer playing bass",
      text: "The famous \"Chameleon\" riff isn't a bass guitar — Hancock plays it on an ARP Odyssey, which is part of why it sounds so rubbery and electronic against Paul Jackson's live bass elsewhere on the record.",
    },
    {
      label: "A beer bottle standing in for a flute",
      text: "On \"Watermelon Man,\" Bill Summers blows across the mouth of a bottle to imitate hindewhu, a whistled-and-sung style of the Mbuti people of Central Africa, with several parts stacked on top of each other.",
    },
    {
      label: "Harvey Mason's pocket",
      text: "Mason's drumming on \"Chameleon\" and \"Sly\" sits deep in the groove with almost no fills — the discipline of a player built for funk and R&B sessions, not a jazz drummer soloing.",
    },
    {
      label: "\"Sly\" as tribute, not pastiche",
      text: "The ten-minute title nod to Sly Stone opens loosely before the band locks into a hard groove, closer to a live improvisation caught on tape than a written chart.",
    },
    {
      label: "\"Vein Melter\" winds all the way down",
      text: "The closing track drops the tempo into a slow, foggy minor-key float of Rhodes and bass clarinet — the one moment on the record that still sounds like where Hancock came from.",
    },
  ],

  sources: [
    { title: "Head Hunters — Wikipedia", url: "https://en.wikipedia.org/wiki/Head_Hunters" },
    { title: "Watermelon Man (composition) — Wikipedia", url: "https://en.wikipedia.org/wiki/Watermelon_Man_(composition)" },
    { title: "Flashback: Herbie Hancock Scores a Jazz-Funk Smash With 'Head Hunters' — Rolling Stone", url: "https://www.rollingstone.com/music/music-features/herbie-hancock-head-hunters-chameleon-live-981695/" },
  ],

  influencedBy: [
    { artist: "Sly and the Family Stone", album: "Greatest Hits", year: "1970", note: "Hancock has said hearing \"Thank You (Falettinme Be Mice Elf Agin)\" went straight to his core and pointed him toward funk; \"Sly\" is his direct tribute." },
    { artist: "Stevie Wonder", album: "Talking Book", year: "1972", note: "Wonder's clavinet-driven funk, especially \"Superstition,\" is the model for the Clavinet sound Hancock made central to this record." },
  ],

  influenced: [
    { artist: "2Pac", album: "2Pacalypse Now", year: "1991", note: "\"Words of Wisdom\" samples \"Chameleon,\" one of the earliest of dozens of hip-hop records built on this album's grooves." },
    { artist: "Digable Planets", album: "Reachin' (A New Refutation of Time and Space)", year: "1993", note: "\"Escapism (Gettin' Free)\" samples \"Watermelon Man\" into a jazz-rap foundation." },
    { artist: "The Blackbyrds", album: "The Blackbyrds", year: "1974", note: "Part of the commercial jazz-funk wave that followed once Head Hunters proved the style could sell." },
  ],
});
