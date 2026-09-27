import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Common",
  album: "Be",
  year: "2005",
  heading: "Be — Common (2005)",

  albumLine:
    "Released 24 May 2005 on GOOD Music and Geffen, executive produced by Kanye West with additional production from J Dilla, James Poyser and Karriem Riggins. It's soul-sampling conscious hip-hop, forty-two minutes long — Common's sixth album and his commercial recovery.",

  overview: [
    "He needed one. Common had been among the most respected rappers of the nineties, but his 2002 album Electric Circus — a sprawling psychedelic rock-and-electronics experiment — had confused his audience and sold badly. Be is a deliberate correction: short, focused, warm, and built on exactly the soul-sample foundation he'd walked away from. His gloss on the title captures the intent — \"just do without trying hard… natural and be true to the core of who you are.\"",

    "The producers are the story. Kanye West was at the peak of his first phase, having released The College Dropout the year before, and his signature sound — sped-up soul vocals, live strings, gospel-adjacent warmth — organises most of the record. The other major hand is J Dilla, the Detroit producer whose loose, deliberately off-grid drum programming had already reshaped how a generation heard rhythm. Dilla died in February 2006, months after this came out, and his contributions here are among the last released in his lifetime.",

    "Both producers were Chicago and Detroit rather than New York or Los Angeles, and the album is explicitly a Chicago record — its opening single features The Last Poets, the late-sixties proto-rap collective, tying the city's present to a longer tradition of Black spoken-word politics. The subject matter runs through neighbourhood life, faith, relationships and self-definition, in a register that avoids both gangsta narrative and the preachiness conscious rap was often accused of.",

    "It debuted at No. 2 with 185,000 copies, topped the R&B/hip-hop and rap charts, and took four Grammy nominations including Best Rap Album. Metacritic aggregated 83. It's since appeared on greatest-hip-hop-album lists from both Rolling Stone and Billboard, and is generally treated as the moment the mid-2000s proved a rapper could be commercially substantial without hardening his material.",
  ],

  listeningNotes: [
    {
      label: "Sped-up soul vocals",
      text: "West pitches old soul records upward so the singing becomes a high, urgent hook. It's his signature device of the period and it's all over this record.",
    },
    {
      label: "Live players over samples",
      text: "Real bass, strings and keys are laid across the sampled beds rather than replacing them, which is why the album sounds fuller and warmer than sample-only production.",
    },
    {
      label: "Dilla's drums sitting off the grid",
      text: "On the tracks J Dilla produced, the drums are deliberately not quantised — hits land fractionally early or late, giving a drunken swing no drum machine default would produce.",
    },
    {
      label: "Common's conversational delivery",
      text: "He raps close to speaking tempo with long, unhurried phrases that often run past the bar line. There's very little technical showing-off.",
    },
    {
      label: "Forty-two minutes, no filler",
      text: "Eleven tracks and out, at a time when major rap albums routinely ran past seventy minutes. The brevity is a deliberate reaction to his previous album's sprawl.",
    },
    {
      label: "The Last Poets on the opener",
      text: "The proto-rap spoken-word group from the late sixties appear on the first single, placing the record in a direct line of descent rather than merely referencing one.",
    },
  ],

  sources: [
    { title: "Be (Common album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Be_(Common_album)" },
    { title: "Common — Wikipedia", url: "https://en.wikipedia.org/wiki/Common_(rapper)" },
    { title: "J Dilla — Wikipedia", url: "https://en.wikipedia.org/wiki/J_Dilla" },
  ],

  influencedBy: [
    { artist: "The Last Poets", album: "The Last Poets", year: "1970", note: "The spoken-word political ancestors of rap, who appear on this album's lead single." },
    { artist: "Kanye West", album: "The College Dropout", year: "2004", note: "West's own breakthrough the year before established the sped-up soul production that organises this record." },
    { artist: "Slum Village", album: "Fantastic, Vol. 2", year: "2000", note: "J Dilla's own group, where the off-grid drum programming he brings to this album was established." },
  ],

  influenced: [
    { artist: "Kendrick Lamar", album: "good kid, m.A.A.d city", year: "2012", note: "The model of a focused, soul-rooted album about a specific city and a moral life, made without commercial compromise." },
    { artist: "Chance the Rapper", album: "Coloring Book", year: "2016", note: "Chicago hip-hop built on gospel and soul warmth rather than hardness — a lineage this album strengthened." },
  ],
});
