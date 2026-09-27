import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Buena Vista Social Club",
  album: "Buena Vista Social Club",
  year: "1997",
  heading: "Buena Vista Social Club — Buena Vista Social Club (1997)",

  albumLine:
    "Released 23 June 1997 on World Circuit and produced by the American guitarist Ry Cooder, recorded at EGREM Studios in Havana across six days in March 1996. It's traditional Cuban son, bolero and danzón played by musicians mostly in their seventies and eighties.",

  overview: [
    "It happened by accident. Cooder and World Circuit's Nick Gold had planned a record pairing Cuban players with West African highlife musicians; the Africans couldn't get visas. With studio time booked and Cuban players already gathered, they abandoned the concept and simply recorded Cuban music instead. Six days later they had the album.",

    "What made it extraordinary was who was in the room. Most of these musicians had been prominent before the 1959 revolution and had since drifted into obscurity, retirement or other work entirely. The guitarist and singer Compay Segundo was ninety. The pianist Rubén González, whom Cooder rated among the greatest he'd heard, no longer owned a piano. The singer Ibrahim Ferrer had retired and was shining shoes. Omara Portuondo, the one woman on the record, cut her vocal in a single take before flying out to Vietnam.",

    "The context on both sides matters. Cuba had spent the early nineties in the \"Special Period\" — the economic collapse following the end of Soviet subsidy — and the US embargo made the whole enterprise logistically awkward. Meanwhile Western audiences had developed a large appetite for what the record industry had started marketing as world music. This album arrived precisely into that appetite, and its success was partly the success of a story: old men rescued from obscurity, an art form preserved intact. That framing has been criticised since, reasonably, for casting Cuban music as something frozen and in need of foreign rediscovery when in fact it had continued developing all along.",

    "The numbers were extraordinary regardless — over eight million copies sold, a Grammy in 1998, and a place on Rolling Stone's 500 Greatest Albums. Wim Wenders's 1999 documentary about the sessions turned the musicians into international touring stars in their final years. The Library of Congress added the record to its National Recording Registry in 2022.",
  ],

  listeningNotes: [
    {
      label: "Recorded almost live",
      text: "Six days for the whole album, with the band playing together in a room. There's very little overdubbing and the arrangements breathe accordingly — you're hearing performances, not constructions.",
    },
    {
      label: "Old voices, unrepaired",
      text: "The singers are in their seventies and eighties and sound it: thin in places, unsteady on long notes. Nothing is corrected, and the wear is much of what gives the record its weight.",
    },
    {
      label: "Guitar-led, not brass-led",
      text: "This is the trova tradition — small ensembles built on guitar, tres and light percussion — rather than the big horn-driven salsa most listeners associate with Cuban music.",
    },
    {
      label: "Rubén González's piano",
      text: "His playing runs in rapid, ornamented figures that dart around the melody rather than stating it. He hadn't owned an instrument for years, which makes the fluency startling.",
    },
    {
      label: "The clave underneath",
      text: "A repeating two-bar rhythmic pattern anchors nearly everything, usually tapped out on woodblocks. Once you hear it you can't unhear it — every other part is positioned against it.",
    },
    {
      label: "Room sound left in",
      text: "EGREM's studio has an audible acoustic and Cooder didn't dry it out. Voices and guitars sit in a real space, which is why the record sounds warm rather than pristine.",
    },
  ],

  sources: [
    { title: "Buena Vista Social Club (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Buena_Vista_Social_Club_(album)" },
    { title: "Buena Vista Social Club — World Circuit Records", url: "https://worldcircuit.co.uk/artists/buena-vista-social-club/" },
    { title: "Buena Vista Social Club — National Recording Registry, Library of Congress", url: "https://www.loc.gov/programs/national-recording-preservation-board/recording-registry/complete-national-recording-registry-listing/" },
  ],

  influencedBy: [
    { artist: "Ry Cooder", album: "Talking Timbuktu", year: "1994", note: "Cooder's earlier cross-cultural collaboration, with Ali Farka Touré, established the working method he brought to Havana." },
  ],

  influenced: [
    { artist: "Ibrahim Ferrer", album: "Buena Vista Social Club Presents Ibrahim Ferrer", year: "1999", note: "The first of several solo records the project's success made possible for its rediscovered performers." },
    { artist: "Orquesta Buena Vista Social Club", album: "Lost and Found", year: "2015", note: "The touring ensemble the album created, still releasing material two decades later." },
  ],
});
