import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Milton Nascimento",
  album: "Clube Da Esquina",
  year: "1972",
  heading: "Clube Da Esquina — Milton Nascimento (1972)",

  albumLine:
    "Released in March 1972 as a double LP on EMI-Odeon, with Milton Miranda directing production and singer Milton Nascimento supervising the music himself. It's MPB that keeps wandering into rock, jazz, bossa nova and orchestral writing — his fifth album, and the first for guitarist and singer Lô Borges, who was seventeen.",

  overview: [
    "The title is literal. Through the 1960s, musicians from Minas Gerais gathered at a street corner in the Santa Tereza district of Belo Horizonte, and when friends asked where Lô was, his mother would answer that he was at the place they call Clube da Esquina — the corner club. Nascimento had arrived in 1963 from Três Pontas, where he played alongside pianist Wagner Tiso; he met Lô when the boy was ten, sent out for eggs and milk and stopping to watch a man in his twenties play guitar in the street. Years of hanging around produced a loose collective rather than a band, and this is what it sounded like.",

    "It was made under Brazil's military dictatorship, which restricted cultural production and pushed artists toward exile or confrontation with censors. The record is not reportage, though — it circles friendship, liberty, youth and the road — and the documented censorship is narrow: the closing song's lyrics were rewritten because they invoked a slogan of President Emílio Garrastazu Médici's government. \"The dictatorship was one of the worst moments we lived,\" Lô has said, \"but we were able to keep focus on art.\" What the album reaches for is a wider map than Brazil: the Beatles and Chopin were both named as models, and a 1971 trip to a festival in Venezuela gave Nascimento songs and a Spanish-language bolero.",

    "Much of it was worked out at a beach house at Piratininga, near Niterói, where the group stayed six months, then finished at Odeon's Rio studio over weeks of day-and-night sessions. Multi-instrumentalist Beto Guedes turned up on seventeen of the twenty-one tracks; arrangers Eumir Deodato and Wagner Tiso wrote the orchestrations, conducted by clarinettist Paulo Moura. Nascimento assigned the words song by song, mostly to the lyricists Márcio Borges and Fernando Brant. The cover, shot by photographer Cafi from a car window on a dirt road near Nova Friburgo, shows two seven-year-old boys unconnected to the music.",

    "Brazilian critics did not get it. Reviews called it poor and disposable, and Márcio Borges remembered that \"naturally, the reviews were horrible. They wanted to compare Milton with Caetano and Chico Buarque.\" Not everyone missed it — critic Fernando Spencer called it one of the biggest releases of 1972 — and it sold, reaching No. 8 on Rio's IBOPE chart. The reversal since has been total: a 2022 poll of 162 Brazilian experts named it the greatest Brazilian album ever made. Its route outward ran through saxophonist Wayne Shorter, who put this music in front of jazz listeners.",
  ],

  listeningNotes: [
    {
      label: "Two channels, voices on their own",
      text: "At Odeon the album was taped to just two channels, one for vocals and one for everything else. The singing sits in a plane of its own, floating rather than embedded.",
    },
    {
      label: "Wordless singing in the upper register",
      text: "Nascimento repeatedly drops language and sings pure tone in a high, keening voice — \"Lilia\" is the clearest case, the cry arriving before any instrument settles.",
    },
    {
      label: "Orchestra as weather",
      text: "Deodato and Tiso write strings and horns that gather and disperse instead of decorating the tune. Simple melodies get sophisticated harmony underneath them.",
    },
    {
      label: "A samba counted in three",
      text: "\"Cravo e Canela\" takes the congada drumming traditions of Minas Gerais and moves them into Rio's samba world, but in three rather than two. The lurch is the whole point.",
    },
    {
      label: "The Spanish-language detour",
      text: "\"Dos Cruces\" is a 1952 bolero by the Basque composer Carmelo Larrea, picked up in Caracas in 1971 and sung in Spanish. It is the longest thing here, and the clearest signal the record is looking across the continent.",
    },
  ],

  sources: [
    { title: "'Clube Da Esquina': Milton Nascimento & Lô Borges's Masterpiece — uDiscover Music", url: "https://www.udiscovermusic.com/stories/milton-nascimento-lo-borges-clube-da-esquina-feature/" },
    { title: "Clube da Esquina (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Clube_da_Esquina_(album)" },
    { title: "The Story Of Clube da Esquina — Every Record Tells A Story", url: "https://everyrecordtellsastory.com/2022/05/17/the-story-of-clube-da-esquina-one-of-brazils-greatest-treasures/" },
    { title: "Milton Nascimento, Lô Borges: Clube da Esquina — AllMusic", url: "https://www.allmusic.com/album/clube-da-esquina-mw0000627685" },
    { title: "Wayne Shorter: Native Dancer — Jazzwise", url: "https://www.jazzwise.com/reviews/wayne-shorter-native-dancer" },
  ],

  influencedBy: [
    { artist: "The Beatles", album: "The Beatles", year: "1968", note: "Named by the collective as a central model, and audible in the method: a sprawling double album with several writers trading lead vocals and no fixed house style." },
  ],

  influenced: [
    { artist: "Wayne Shorter", album: "Native Dancer", year: "1975", note: "Shorter heard Nascimento while touring Brazil, paid to fly him and two of his musicians over, and built the record around his melodies and wordless singing — explicitly without asking him to play jazz." },
  ],
});
