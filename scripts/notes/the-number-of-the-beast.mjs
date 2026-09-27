import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Iron Maiden",
  album: "The Number Of The Beast",
  year: "1982",
  heading: "The Number of the Beast — Iron Maiden (1982)",

  albumLine:
    "Released 22 March 1982 on EMI in Britain and Capitol in America, produced by Martin Birch at Battery Studios in London. It's thirty-nine minutes of heavy metal at the top of the New Wave of British Heavy Metal — Iron Maiden's third album, and the one that made them a global band.",

  overview: [
    "Two changes made it. Bruce Dickinson arrived as singer in place of Paul Di'Anno, bringing an operatic, wide-ranged voice where Di'Anno had a punkish snarl, and this was the last record with the drummer Clive Burr. The rest was Steve Harris on bass, who wrote most of the material and ran the band, with Dave Murray and Adrian Smith on guitars. Dickinson was still contracted to his former band Samson and so could take no writing credits at all, despite contributing to several songs — a piece of music-business plumbing that permanently distorts the album's credit list.",

    "The New Wave of British Heavy Metal had been building since 1979, largely on independent labels and in pubs, and its virtue was speed and economy after seventies hard rock had grown bloated. Maiden's contribution was ambition: long songs with sections, subjects drawn from history, fiction and film, and playing far more technically demanding than punk had left room for. Harris wrote the title track after a nightmare that followed a late-night viewing of \"Damien: Omen II,\" and took some of its imagery from Robert Burns's poem \"Tam o' Shanter\" — which tells you the level the band were pitching at.",

    "The Satanic panic in America did the rest. Religious groups organised record burnings and picketed shows, one contingent carrying a twenty-five-foot cross, objecting to both the title and Derek Riggs's sleeve art of the band's mascot Eddie working Satan like a puppet. The band's actual position was that the song describes a nightmare and disapproves of what it depicts. It made no difference, and the protests functioned as advertising.",

    "It went to No. 1 in Britain and No. 33 on the Billboard 200, and has sold in the region of twenty million copies. AllMusic place it \"among the top five most essential heavy metal albums ever recorded. A cornerstone of the genre,\" which is close to consensus rather than hyperbole. Nearly everything metal did for the following two decades — the twin leads, the galloping bass, the singer who can actually sing — is traceable to what this record standardised.",
  ],

  listeningNotes: [
    {
      label: "Harris's galloping bass",
      text: "He plays fast triplet figures with his fingers rather than a pick, high in the mix and often carrying the main riff. That canter is the single most identifiable thing about the band.",
    },
    {
      label: "Twin lead guitars in harmony",
      text: "Murray and Smith play melody lines in thirds and trade solos with different tones — Murray fluid and legato, Smith more clipped and structured — so you can tell who is playing.",
    },
    {
      label: "Dickinson's range and vibrato",
      text: "He sings in a high, sustained, almost operatic register with a hard vibrato, projecting over the band instead of riding the riff. It reset what a metal singer was expected to do.",
    },
    {
      label: "The scream",
      text: "AllMusic call it \"the most blood-curdling Dickinson scream on record.\" By his own account it came from irritation: Birch made him repeat the passage for hours.",
    },
    {
      label: "Songs built in movements",
      text: "Several tracks change tempo and key partway through, with instrumental sections between verses. The structures owe more to progressive rock than to anything in punk.",
    },
    {
      label: "A hired actor reading scripture",
      text: "The spoken introduction is Barry Clayton reading from Revelation — the band wanted Vincent Price, who asked for £25,000. The theatricality is deliberate and entirely on the surface.",
    },
  ],

  sources: [
    { title: "The Number of the Beast (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Number_of_the_Beast_(album)" },
    { title: "The Number of the Beast (song) — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Number_of_the_Beast_(song)" },
    { title: "Iron Maiden — Wikipedia", url: "https://en.wikipedia.org/wiki/Iron_Maiden" },
  ],

  influencedBy: [
    { artist: "Judas Priest", album: "British Steel", year: "1980", note: "The twin-guitar British metal format and the leather-and-studs presentation Maiden inherited and accelerated." },
    { artist: "Deep Purple", album: "Machine Head", year: "1972", note: "Martin Birch produced Purple; the virtuoso, classically-inflected hard rock behind Maiden's structures comes from there." },
  ],

  influenced: [
    { artist: "Metallica", album: "Master of Puppets", year: "1986", note: "Thrash took the long multi-section songs, galloping rhythms and harmonised leads and made them faster." },
    { artist: "Slayer", album: "Reign in Blood", year: "1986", note: "The occult and historical subject matter, plus the moral panic that met it, was mapped out by this record first." },
  ],
});
