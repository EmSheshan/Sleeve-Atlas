import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Janelle Monáe",
  album: "The ArchAndroid",
  year: "2010",
  heading: "The ArchAndroid — Janelle Monáe (2010)",

  albumLine:
    "Released 18 May 2010 on Wondaland Arts Society, Bad Boy and Atlantic, produced by Nate \"Rocket\" Wonder, Chuck Lightning and Monáe herself. Sixty-eight minutes of progressive soul running through funk, folk, glam and orchestral writing — her debut album, and suites II and III of a science-fiction story.",

  overview: [
    "She was born in Kansas City, Kansas, in 1985 and raised in Quindaro, a working-class neighbourhood, to a mother who worked as a janitor and hotel maid and a father who drove trucks. She learned to sing in a Baptist church. Big Boi of OutKast found her after she was sacked from Office Depot for using a work computer to answer a fan's email, and introduced her to Sean Combs, who signed her to Bad Boy in 2006 — a label that gave her exposure and, unusually, largely left her alone.",

    "What she did with that is the album. It continues a story begun on an earlier EP: Cindi Mayweather, an android from the year 2719 sentenced to disassembly for falling in love with a human, whose liberation the suites narrate. The frame is borrowed from Fritz Lang's \"Metropolis\" of 1927 and the tradition is Afrofuturism — science fiction as a way of talking about race and class without arguing in the register people expect. Monáe has described Mayweather as \"the mediator between the haves and the have-nots, the oppressed and the oppressor,\" which is as direct a statement of purpose as a concept album ever gets.",

    "In 2010 that was a strange thing to release. Mainstream R&B was in a maximal, chart-facing phase built around a hook and a featured rapper, and this was an hour-long suite with orchestral interludes, a folk song, a psychedelic pop collaboration with Kevin Barnes of Of Montreal, and spoken word from Saul Williams. It did not behave like an album trying to sell. It reached No. 17 with 21,000 copies in its first week, and then did not go away.",

    "The critical response was close to unanimous — Metacritic settles at 91, and Pitchfork called it \"about as bold as mainstream music gets, marrying concept album possibilities to Prince and Michael Jackson-style pop.\" It was nominated for Best Contemporary R&B Album at the Grammys and topped a great many lists for the year. Her black-and-white tuxedo, worn as a uniform throughout, does its own work: she has said it keeps her balanced and rejects the idea that women's clothing has to be sorted by gender at all.",
  ],

  listeningNotes: [
    {
      label: "Orchestral overtures between the songs",
      text: "Each suite opens with fully scored instrumental writing — strings, brass, no beat — which frames what follows as theatre rather than a track list.",
    },
    {
      label: "Genre changing without warning",
      text: "A funk workout runs straight into a folk ballad into psychedelic pop into a big-band swing pastiche. The transitions are deliberately unsmoothed.",
    },
    {
      label: "James Brown in the rhythm section",
      text: "The funk tracks use tight, clipped guitar, horn stabs and drums locked hard on the one. Her dancing comes from the same place and it's audible in how the songs are cut.",
    },
    {
      label: "A voice with several registers",
      text: "She moves between a clipped staccato delivery, a full gospel belt and an airy head voice, using each as a different character rather than as escalation.",
    },
    {
      label: "Songs that stop mid-thought",
      text: "Several tracks end abruptly or bleed into the next with no resolution, keeping the suite moving and refusing the single-shaped ending.",
    },
    {
      label: "Prince-shaped arrangements",
      text: "Dense layers of guitar, synth and stacked backing vocals, all recorded tight and dry — the clearest structural debt on the record.",
    },
  ],

  sources: [
    { title: "The ArchAndroid — Wikipedia", url: "https://en.wikipedia.org/wiki/The_ArchAndroid" },
    { title: "Janelle Monáe — Wikipedia", url: "https://en.wikipedia.org/wiki/Janelle_Mon%C3%A1e" },
    { title: "The ArchAndroid — Pitchfork review", url: "https://pitchfork.com/reviews/albums/14306-the-archandroid/" },
  ],

  influencedBy: [
    { artist: "Prince", album: "Sign o' the Times", year: "1987", note: "The sprawling, genre-crossing double album by a single controlling auteur — named by critics as the album's closest model." },
    { artist: "Stevie Wonder", album: "Songs in the Key of Life", year: "1976", note: "The precedent for an ambitious, long-form Black pop record with orchestral scope and a moral argument." },
    { artist: "OutKast", album: "Speakerboxxx/The Love Below", year: "2003", note: "Big Boi discovered her and appears on the record; its genre-hopping maximalism is the immediate Atlanta context." },
  ],

  influenced: [
    { artist: "Beyoncé", album: "Lemonade", year: "2016", note: "The visual-and-narrative concept album as the format for a major Black woman artist's statement." },
    { artist: "Solange", album: "A Seat at the Table", year: "2016", note: "Art-directed, suite-structured R&B with interludes carrying as much argument as the songs." },
  ],
});
