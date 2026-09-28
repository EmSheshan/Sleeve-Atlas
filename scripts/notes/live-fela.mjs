import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Fela Kuti",
  album: "Live!",
  year: "1971",
  heading: "Live! — Fela Ransome-Kuti and the Africa '70 with Ginger Baker (1971)",

  albumLine:
    "Recorded live in the studio at EMI in London on 25 July 1971 and released that year on EMI, with Ginger Baker guesting on two tracks. Four pieces of Afrobeat running eight to fourteen minutes apiece — the record that introduced the band to Britain.",

  overview: [
    "The billing tells you what it was for. Fela Kuti's Africa '70 were a working Lagos band with no European profile; Ginger Baker had been the drummer in Cream, one of the most famous musicians in Britain, and he had driven a Land Rover across the Sahara to learn West African rhythm, a trip filmed by Tony Palmer as \"Ginger Baker in Africa\" that same year. Putting his name on the sleeve was how the record got heard outside Nigeria, and the enthusiasm was genuine on both sides.",

    "The more important drummer is the one without the famous name. Tony Allen was Africa '70's drummer and musical director from 1968 to 1979, and he built the rhythmic language the genre is made of — he was the one member Fela didn't write parts for, because he invented his own, layering Yoruba patterns against jazz and highlife with all four limbs working independently. Fela's own verdict was unambiguous: \"without Tony Allen, there would be no Afrobeat.\" Brian Eno later called him \"perhaps the greatest drummer who has ever lived.\"",

    "What the record captures is the band as a working ensemble rather than a political act. This is a few months before the \"Zombie\" era made Fela a target of the Nigerian state; the material here is about desire, money and behaviour, and the performances are long because that's how the band played, not because anyone was making a point. Recording live in a studio — an audience-less room at EMI, later Abbey Road — gives it the energy of a set and the clarity of a session.",

    "It has been overshadowed by the records around it, and the three-star ratings from AllMusic and the Encyclopedia of Popular Music reflect that. Its reputation rests instead on what it documents: Rolling Stone place it among the fifty greatest live albums ever made. Later CD editions append a sixteen-minute drum duet between Baker and Allen recorded at the Berlin Jazz Festival in 1978, which is the clearest demonstration available of the difference between the two traditions they came from.",
  ],

  listeningNotes: [
    {
      label: "Tony Allen's four-limb independence",
      text: "Hi-hat, snare, kick and toms each run their own pattern, so the groove never repeats exactly. It sounds loose and is anything but.",
    },
    {
      label: "Two drummers on two tracks",
      text: "Baker plays alongside Allen rather than instead of him, and the contrast is the point — a rock drummer's weight against Allen's constant small displacements.",
    },
    {
      label: "Long instrumental first halves",
      text: "Each piece spends minutes building the groove with horns and keys before Fela sings, a structure inherited from highlife and carried into every Afrobeat record since.",
    },
    {
      label: "Horn section as one voice",
      text: "Saxophones and trumpets punch unison figures rather than harmonising, arranged like a rhythm instrument in the James Brown manner.",
    },
    {
      label: "Electric piano under everything",
      text: "Fela's keyboard holds sustained vamps low in the mix, the harmonic floor the improvisations stand on.",
    },
    {
      label: "Recorded live with no audience",
      text: "It was cut as a live take in an empty EMI studio, so you get a band playing together in one room without crowd noise covering the detail.",
    },
  ],

  sources: [
    { title: "Live! (Fela Kuti album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Live!_(Fela_Kuti_album)" },
    { title: "Tony Allen (musician) — Wikipedia", url: "https://en.wikipedia.org/wiki/Tony_Allen_(musician)" },
    { title: "Fela Kuti — Wikipedia", url: "https://en.wikipedia.org/wiki/Fela_Kuti" },
  ],

  influencedBy: [
    { artist: "James Brown", album: "Sex Machine", year: "1970", note: "The extended one-chord funk vamp with horns used percussively, which Africa '70 rebuilt on Yoruba rhythm." },
    { artist: "Cream", album: "Disraeli Gears", year: "1967", note: "Ginger Baker's own band; his presence here is what carried the record to a British audience." },
  ],

  influenced: [
    { artist: "Fela Kuti", album: "Zombie", year: "1977", note: "The same band six years on, with the groove now carrying a direct attack on the Nigerian army." },
    { artist: "Talking Heads", album: "Remain in Light", year: "1980", note: "Brian Eno, who produced it, has named Allen the greatest drummer alive; the interlocking parts come from this school." },
  ],
});
