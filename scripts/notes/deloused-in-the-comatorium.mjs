import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "The Mars Volta",
  album: "Deloused in the Comatorium",
  year: "2003",
  heading: "De-Loused in the Comatorium — The Mars Volta (2003)",

  albumLine:
    "Released 24 June 2003 on Gold Standard Laboratories and Universal, and produced by Rick Rubin together with guitarist Omar Rodríguez-López. It's progressive, jazz-fusion-leaning post-hardcore, and it's The Mars Volta's debut full-length, following the 2002 Tremulant EP.",

  overview: [
    "The band's first attempt failed. Wikipedia, citing a 2021 booklet by writer Stevie Chick, says the group recorded sessions in summer 2002 at Mad Dog Studios in Burbank with Rodríguez-López producing, then abandoned the tapes and started again with Rubin. Rodríguez-López chose Rubin on guitarist John Frusciante's recommendation. Universal paired them, and singer Cedric Bixler-Zavala told Stereogum, \"when we met him at his house it just clicked.\" The sessions ran, writer Alastair Matcott of Tone Deaf says, \"starting at noon and finishing around two in the morning.\" Mix and Remezcla place the studio, The Mansion, in Laurel Canyon, the house where the Red Hot Chili Peppers made Blood Sugar Sex Magik; Wikipedia says Malibu.",

    "Engineer Dave Schiffman described the approach to Mix: drums that were \"clear and precise,\" small guitar amps that \"cut through the track but don't overpower it,\" and a role for sound manipulator Jeremy Michael Ward — \"the vocal voodoo dude, which went into his mixer, through his toys and then back to me.\" Rubin's role is disputed. Bixler-Zavala said the album \"shows another side of Rick Rubin\"; Rodríguez-López said Rubin taught him \"everything [...] about running a production\" but steered toward a direction he \"personally didn't want to be going in\"; writer Phil Freeman of Stereogum wrote, \"I don't know how much of the credit belongs to Rick Rubin.\"",

    "The bass came late. Bassist Eva Gardner had left mid-tour, and Guitar World says Rubin \"flicked through his extensive black book of all-star musicians and arrived at\" Flea, the Red Hot Chili Peppers bassist. Rodríguez-López and Gardner had already written many basslines, leaving Flea to embellish; he used a 1964 Fender Precision through an Ampeg SVT, and Tone Deaf says he recorded in three days. Ward died on 25 May 2003 of a heroin overdose, after recording. The story is about an overdose: protagonist Cerpin Taxt injects morphine and rat poison and falls into a coma, based on El Paso artist Julio Venegas.",

    "It's in the book 1001 Albums You Must Hear Before You Die, per Wikipedia, and Rolling Stone ranked it 25th among the 50 greatest prog albums, saying it \"manically aligns triumphant metal, psychedelic rock and Latin jazz.\" Critic Brent DiCrescenzo of Pitchfork gave it 4.9, writing that the band \"mistake sonic piling for complex architecture\"; Uncut said, \"Imagine a jam session between King Crimson, Fugazi and '70s Miles.\" Freeman, twenty years on, called it \"their best album by far, precisely because of that balance of ecstasy and groundedness.\"",
  ],

  listeningNotes: [
    {
      label: "Flea's Precision Bass foundation",
      text: "Schiffman said \"the bass needed to be full and present, because, essentially, the bass was the foundation of every track.\" Freeman points to the dub-soaked first half of \"Cicatriz ESP,\" with Flea's bass at the centre.",
    },
    {
      label: "Frusciante's treatments",
      text: "Frusciante later added \"additional guitar and synthesizer treatments\" to \"Cicatriz ESP,\" per Guitar World.",
    },
    {
      label: "Latin pulse in a prog frame",
      text: "Rodríguez-López said, in a 2008 Fader interview quoted by Remezcla, \"Everything I interpret... is filtered through hearing the clave.\" The Latin rhythm is part of the structure, not decoration.",
    },
    {
      label: "Shrieked hooks",
      text: "Freeman credits \"the shrieked vocal hooks\" with making the sprawling songs stick, in prog \"with the energy of hardcore.\"",
    },
    {
      label: "A double bass interlude",
      text: "\"Televators\" is one of two tracks without Flea; per Wikipedia, Justin Meldal-Johnsen plays double bass on it.",
    },
  ],

  sources: [
    { title: "The Mars Volta — Mix (2003)", url: "https://www.mixonline.com/recording/music-production/mars-volta-365208" },
    { title: "De-Loused in the Comatorium turns 20 — Stereogum (Phil Freeman, 2023)", url: "https://stereogum.com/2227442/mars-volta-de-loused-in-the-comatorium-turns-20/reviews/the-anniversary" },
    { title: "Flea played bass on the Mars Volta's best album — Guitar World (Michael Astley-Brown, 2022)", url: "https://www.guitarworld.com/features/flea-mars-volta-de-loused-in-the-comatorium" },
    { title: "De-Loused in the Comatorium — Tone Deaf (Alastair Matcott, 2013)", url: "https://tonedeaf.thebrag.com/deloused-comatorium/" },
    { title: "The Mars Volta, De-Loused in the Comatorium 15th anniversary — Remezcla (Elijah C. Watson, 2018)", url: "https://remezcla.com/features/music/the-mars-volta-deloused-in-the-comatorium-15th-anniversary/" },
    { title: "Prog rock for punk rock kids — Louder (Stephen Hill, 2023)", url: "https://www.loudersound.com/features/the-mars-volta-prog-rock-for-punk-rock-kids" },
    { title: "De-Loused in the Comatorium — Wikipedia", url: "https://en.wikipedia.org/wiki/De-Loused_in_the_Comatorium" },
  ],

  influencedBy: [
    { artist: "Le Tigre", album: "Le Tigre", year: "1999", note: "Rodríguez-López told The Quietus, \"The first track, 'Deceptacon', inspired me to write 'Roulette Dares' for the first Mars Volta record.\"" },
    { artist: "Genesis", album: "The Lamb Lies Down on Broadway", year: "1974", note: "Wikipedia says Bixler-Zavala cited this concept album for the record's narrative, character-driven approach; no direct quote was found." },
    { artist: "The Pretty Things", album: "S.F. Sorrow", year: "1968", note: "Cited alongside Genesis for the same story-album approach, per Wikipedia; the only source found and no direct quote was located." },
  ],

  influenced: [],
});
