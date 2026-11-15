import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Depeche Mode",
  album: "Music for the Masses",
  year: "1987",
  heading: "Music for the Masses — Depeche Mode (1987)",

  albumLine:
    "Released 28 September 1987 on Mute in the UK and Sire in the US and co-produced by the band with David Bascombe, Music for the Masses is a synth-pop album built on dark themes and big arrangements. It's Depeche Mode's sixth studio album, following Black Celebration (1986), and widely regarded as the record that propelled them into mainstream success in the US.",

  overview: [
    "Black Celebration had been their most successful record yet, but the sessions for it and the single before it had worn out their relationship with Daniel Miller, their long-time producer and the founder of their label. Miller stepped away, and the band hired David Bascombe, who had engineered Tears for Fears' Songs from the Big Chair and worked with Peter Gabriel. Wikipedia says keyboard player Alan Wilder was the one \"steering the ship\"; The Quietus's John Freeman notes Wilder later claimed Bascombe was more engineer than producer.",

    "The work ran in three steps: songwriter Martin Gore wrote and demoed at home, Wilder arranged at his own home studio, and then the band recorded together. They cut most of it near Paris at an old converted theatre, finished vocals at Konk in London, and mixed in rural Denmark, where Miller rejoined for the final mix. Singer Dave Gahan called it \"our first truly arranged album\": \"We had discovered dynamics.\"",

    "The title was a joke. Bandmate Andy Fletcher said: \"Everyone is telling us we should make more commercial music, so that's the reason we chose that title.\" Gore said it was \"anything but music for the masses!\" Designer Martyn Atkins's sleeve paired East German propaganda imagery with Peak District landscape photography. Sources disagree on sampling: Wikipedia says the band used heavy amounts, while Freeman argues it was drastically reduced from earlier records.",

    "Critics were split. Q critic Dave Rimmer found \"plenty of good moments and much strident romance but nothing at the core to cling on to,\" and Melody Maker critic Paul Mathur called it \"seamless, fluid, and, once the lights are out, particularly dull.\" Village Voice critic Robert Christgau gave it a B+. It reached number 10 in the UK and number 35 in the US, and the tour ended at the Rose Bowl in Pasadena before more than 70,000 people — the show captured on their live album 101.",
  ],

  listeningNotes: [
    {
      label: "Samples made in the room",
      text: "Rather than gathering sounds on the street as before, they built most new samples in the studio, using an old grand piano, orchestral bass drums and timpani, even a stairwell at Konk. Depeche Mode had a rule against hi-hats, so the hi-hat-like noise in \"Nothing\" is actually a pneumatic door closing.",
    },
    {
      label: "Strict self-imposed rules",
      text: "Bascombe recalled \"no chords\" (built from separate monophonic parts), \"no presets,\" \"no hi-hats,\" every sample original and none used twice — though, as Wikipedia reports, almost every rule was broken at least once.",
    },
    {
      label: "Minimalist build-ups",
      text: "Wilder said the instrumental \"Pimpf\" \"starts off with one little riff that just feeds on itself\" and keeps adding layers, a method he credits to listening to composer Philip Glass and the minimalists.",
    },
    {
      label: "Film-score orchestral samples",
      text: "Stuck on \"Little 15,\" Wilder arranged it after the band saw A Zed & Two Noughts, taking Michael Nyman's score as his model: \"from there, it was easy. It just flowed.\" Bascombe called the result \"classic Wilder.\"",
    },
    {
      label: "Cycling chords and unfussy guitar",
      text: "Wilder compared the four looping chords of \"Behind the Wheel\" to Penrose stairs. Gore's guitar is \"never flashy,\" as a ClassicPopMag reviewer put it, adding grit — for \"Never Let Me Down Again\" it was filtered through an ARP 2600 synthesiser.",
    },
  ],

  sources: [
    {
      title: "A Strange Love: Depeche Mode's Music For The Masses Revisited — John Freeman, The Quietus",
      url: "https://thequietus.com/?p=10474",
    },
    {
      title: "Depeche Mode's sixth studio album 'Music for the Masses' turns 35 — Jordan Potter, Far Out",
      url: "https://faroutmagazine.co.uk/music-for-the-masses-depeche-mode-35/",
    },
    { title: "Music for the Masses — Wikipedia", url: "https://en.wikipedia.org/wiki/Music_for_the_Masses" },
  ],

  influencedBy: [
    {
      artist: "Led Zeppelin",
      album: "Led Zeppelin IV",
      year: "1971",
      note: "Wikipedia says the album's opening track samples drums from this record, and The Quietus likewise notes a Led Zeppelin drum sample behind its arena-sized beat.",
    },
    {
      artist: "Michael Nyman",
      album: "A Zed & Two Noughts",
      year: "1985",
      note: "Wilder said that after the band saw the film, he arranged one of the album's songs in the style of Nyman's score, and the orchestral-sample arrangement \"just flowed.\"",
    },
  ],

  influenced: [],
});
