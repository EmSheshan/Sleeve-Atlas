import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Coldplay",
  album: "Parachutes",
  year: "2000",
  heading: "Parachutes — Coldplay (2000)",

  albumLine:
    "Released 10 July 2000 on Parlophone, produced mostly by Ken Nelson with one track by Chris Allison, recorded across five studios between November 1999 and May 2000. Quiet, melodic alternative rock — their debut, and one of the twenty-five best-selling British albums of the century.",

  overview: [
    "It arrived into the vacuum after Britpop. By 2000 the swagger and the Union Jacks had curdled, Oasis were in decline and nobody had replaced them; the space that opened was for something smaller and less confident. Coldplay filled it with an album built almost entirely on restraint — Chris Martin singing in a high falsetto over Jonny Buckland's spare, reverbed guitar figures, with Guy Berryman and Will Champion keeping the rhythm section deliberately plain.",

    "Ken Nelson's production is the reason it works. He had come out of Liverpool recording Gomez, and his instinct here was to leave things out: the record is dry, uncluttered and often nearly empty, with long stretches of one guitar and one voice. In a year when most rock production was getting louder and more compressed, that was a genuine differentiator rather than a limitation.",

    "The response split immediately along a line that has never really closed. NME called it incredible for a debut; Pitchfork gave it 5.3 and dismissed it as \"harmless and pretty... [but] nothing else.\" Both are describing the same qualities and disagreeing about whether gentleness is a virtue. Metacritic settles at 72, and the commercial verdict was unambiguous: No. 1 in Britain on its first week, nine times platinum there, thirteen million worldwide by 2020.",

    "It took British Album of the Year at the 2001 BRITs and the Grammy for Best Alternative Music Album in 2002, and was shortlisted for the Mercury. Its influence is easy to hear and rarely credited kindly — the Fray, Snow Patrol, OneRepublic and a decade of earnest, piano-led stadium rock descend from it, which is part of why the backlash against Coldplay grew as fast as their sales did.",
  ],

  listeningNotes: [
    {
      label: "Space left everywhere",
      text: "Long passages are one guitar and one voice with nothing underneath. Nelson's production keeps subtracting where the era's default was to add.",
    },
    {
      label: "Martin's falsetto",
      text: "He sings high and softly, often at the very top of his range where the voice thins, which is the record's most identifiable feature.",
    },
    {
      label: "Buckland's guitar as texture",
      text: "Clean, heavily reverbed arpeggios and sustained notes rather than chords or riffs — closer to atmosphere than to rhythm playing.",
    },
    {
      label: "An unshowy rhythm section",
      text: "Bass and drums stay deliberately simple and low in the mix, never taking attention from the melody.",
    },
    {
      label: "Acoustic guitar at the centre",
      text: "Most songs are built from a strummed acoustic with the electric layered around it, which is why they survive being played solo.",
    },
  ],

  sources: [
    { title: "Parachutes (Coldplay album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Parachutes_(Coldplay_album)" },
    { title: "Coldplay — Wikipedia", url: "https://en.wikipedia.org/wiki/Coldplay" },
    { title: "Ken Nelson (British record producer) — Wikipedia", url: "https://en.wikipedia.org/wiki/Ken_Nelson_(British_record_producer)" },
  ],

  influencedBy: [
    { artist: "Radiohead", album: "The Bends", year: "1995", note: "The immediate model: high male vocal over spacious, reverbed guitar textures, with the arrangements kept restrained." },
    { artist: "Jeff Buckley", album: "Grace", year: "1994", note: "The precedent for a falsetto used as the main instrument, carried on very little accompaniment." },
    { artist: "Travis", album: "The Man Who", year: "1999", note: "Also produced in the same British orbit, and the record that proved quiet melodic rock could sell after Britpop." },
  ],

  influenced: [
    { artist: "Keane", album: "Hopes and Fears", year: "2004", note: "The same restrained, piano-and-falsetto British rock, arriving directly in this album's commercial wake." },
  ],
});
