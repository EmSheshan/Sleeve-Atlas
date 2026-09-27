import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Lorde",
  album: "Melodrama",
  year: "2017",
  heading: "Melodrama — Lorde (2017)",

  albumLine:
    "Released 16 June 2017 on Lava and Republic, produced by Lorde with Jack Antonoff and others, recorded across eighteen months between New York and Los Angeles. It's maximalist art-pop built around pianos and stacked voices — her second album, made at twenty.",

  overview: [
    "Her debut had made her famous at sixteen on the strength of restraint: sparse, hip-hop-influenced production and a detached view of teenage consumption. This record goes the opposite way. It's dense, loud in places, harmonically busy, and emotionally unguarded. The production partnership with Jack Antonoff, who was becoming the defining pop producer of the period, supplied the widescreen arrangement, but the writing voice is entirely hers.",

    "The organising idea is a single house party — arrival, chemical elation, a fight, the bathroom, the walk home, the morning. It's a loose frame rather than a rigid concept, but it gives an album about the end of her first serious relationship somewhere concrete to live. Lorde has resisted calling it simply a break-up record, describing it more as a study of solitude afterwards, which is a meaningfully different subject.",

    "One detail that shapes the sound: she has sound-to-colour synaesthesia, and has described assigning colours to tracks as part of working out whether a production was finished. That's an unusual compositional constraint and it's consistent with the record's very deliberate palette — certain tracks are warm and saturated, others deliberately washed out.",

    "It went to No. 1 in the US, her first, and topped charts in Canada, Australia and New Zealand. Metacritic aggregated 91, and it took a Grammy nomination for Album of the Year. Its reputation has kept climbing since; it's now routinely cited as one of the defining pop albums of its decade, and as the record that demonstrated a young pop star could make something structurally ambitious without losing the audience.",
  ],

  listeningNotes: [
    {
      label: "Piano as the spine",
      text: "Most of these songs are built on straightforward piano chords, often left exposed. The elaborate production is assembled around that centre rather than replacing it.",
    },
    {
      label: "Her voice stacked into a crowd",
      text: "Lorde layers dozens of her own vocal takes into thick choral blocks, sometimes as the main hook. The effect is one person impersonating a room full of people — appropriate for a party record.",
    },
    {
      label: "Songs that break in half",
      text: "Several tracks stop dead and restart in a different tempo or key rather than following through. The structural lurches mirror the night the album describes.",
    },
    {
      label: "Distortion used emotionally",
      text: "Vocals and synths are pushed into clipping at specific moments — not as an accident but as a signal that something has tipped over.",
    },
    {
      label: "Sudden silence",
      text: "Arrangements drop to nothing mid-phrase, leaving a bare voice. The dynamic range is much wider than pop convention allows, and the quiet moments are what make the loud ones land.",
    },
  ],

  sources: [
    { title: "Melodrama (Lorde album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Melodrama_(Lorde_album)" },
    { title: "Lorde — Wikipedia", url: "https://en.wikipedia.org/wiki/Lorde" },
    { title: "Jack Antonoff — Wikipedia", url: "https://en.wikipedia.org/wiki/Jack_Antonoff" },
  ],

  influencedBy: [
    { artist: "Kate Bush", album: "Hounds of Love", year: "1985", note: "The precedent for a young woman making structurally ambitious, emotionally theatrical pop on her own terms." },
    { artist: "Robyn", album: "Body Talk", year: "2010", note: "The template of dancefloor euphoria used to carry heartbreak — the emotional mode this album works in throughout." },
    { artist: "Lorde", album: "Pure Heroine", year: "2013", note: "Her own minimal debut, which this record is a deliberate reaction against." },
    { artist: "Taylor Swift", album: "1989", year: "2014", note: "Antonoff's earlier work with Swift established the layered-vocal, synth-and-piano pop production he brought to this album." },
  ],

  influenced: [
    { artist: "Olivia Rodrigo", album: "Sour", year: "2021", note: "The model of a young pop writer treating a break-up with structural ambition and unguarded specificity." },
  ],
});
