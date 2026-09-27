import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Mariah Carey",
  album: "Butterfly",
  year: "1997",
  heading: "Butterfly — Mariah Carey (1997)",

  albumLine:
    "Released 10 September 1997 on Columbia, recorded between November 1996 and July 1997 with producers including Walter Afanasieff, Sean \"Puffy\" Combs, Q-Tip and the Trackmasters. It's Carey's sixth album and the one where she moved decisively from pop balladry into hip-hop soul.",

  overview: [
    "The context is a marriage and a contract that were the same thing. Carey had married Tommy Mottola, the Sony executive who had directed her career since 1990, and the professional control that came with it had kept her pointed at big-ballad pop. They separated during these sessions. Her own account of the preceding years is unambiguous: \"In the past, people were scared to let me explore different types of music that I loved and enjoyed.\" Sony resisted the hip-hop direction; she made it anyway.",

    "What she made sits on the same fault line TLC had worked three years earlier — R&B sung over rap production — but pushed further, with actual rappers as collaborators rather than guests on the margin. Q-Tip of A Tribe Called Quest produces; Combs brings the Bad Boy sound then dominating American radio; the Trackmasters supply sample-driven beats. Against that, Afanasieff still handles the orchestral ballads, so the album is genuinely split between two modes rather than abandoning one.",

    "Her singing changed too, and it's the most interesting technical story here. Rather than deploying the enormous range that had made her famous, she sings much of the record softly, in a breathy upper register, layering many quiet tracks into a kind of chorus of herself. Critics noticed — AllMusic's Stephen Thomas Erlewine pointed to her \"increased control.\" It's a deliberate retreat from spectacle, and it aged far better than belting would have.",

    "It debuted at No. 1 with 235,500 copies in its first week, went five times platinum in the US and past ten million worldwide. \"Honey\" was her twelfth US No. 1. The critical reassessment since has been substantial: what read at the time as a pop star chasing credibility now reads as the record that normalised the pop-and-rap collaboration the following two decades were built on.",
  ],

  listeningNotes: [
    {
      label: "The breathy upper register",
      text: "Carey sings much of this quietly and airily rather than at full power, stacking many soft takes instead of one big one. The famous range is held back deliberately.",
    },
    {
      label: "The whistle register, used sparingly",
      text: "Her extreme high notes appear as brief flourishes rather than climaxes — a texture at the top of the arrangement rather than the point of the song.",
    },
    {
      label: "Rap producers on a pop record",
      text: "Sample-based beats from Q-Tip, Combs and the Trackmasters sit under melodies that would otherwise have had orchestral backing. The seams between the two approaches are audible and intentional.",
    },
    {
      label: "Rapid, clipped phrasing",
      text: "On the hip-hop tracks she phrases in short staccato bursts that track the drum programming rather than floating over it — singing arranged like rapping.",
    },
    {
      label: "Ballads kept in the old style",
      text: "Afanasieff's orchestral productions remain, unmodernised. The album alternates between them and the beats rather than blending, which is what makes the transition legible.",
    },
    {
      label: "Her own harmony stacks",
      text: "The backing vocals are almost entirely Carey multi-tracked, often a dozen or more parts. The choir behind her is her.",
    },
  ],

  sources: [
    { title: "Butterfly (Mariah Carey album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Butterfly_(Mariah_Carey_album)" },
    { title: "Mariah Carey — Wikipedia", url: "https://en.wikipedia.org/wiki/Mariah_Carey" },
    { title: "Butterfly — AllMusic", url: "https://www.allmusic.com/album/butterfly-mw0000594444" },
  ],

  influencedBy: [
    { artist: "Mary J. Blige", album: "What's the 411?", year: "1992", note: "The record that established hip-hop soul and made a pop-facing singer over rap production commercially viable." },
    { artist: "TLC", album: "CrazySexyCool", year: "1994", note: "The immediate precedent for R&B built on hip-hop rhythm with mainstream reach, three years earlier." },
  ],

  influenced: [
    { artist: "Beyoncé", album: "Dangerously in Love", year: "2003", note: "The model of a pop-R&B singer working with rap producers and featured rappers as standard practice runs from here." },
    { artist: "Ariana Grande", album: "Dangerous Woman", year: "2016", note: "The breathy, stacked upper-register vocal approach Carey developed on this album is a direct stylistic ancestor." },
  ],
});
