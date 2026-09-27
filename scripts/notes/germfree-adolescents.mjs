import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "X-Ray Spex",
  album: "Germfree Adolescents",
  year: "1978",
  heading: "Germfree Adolescents — X-Ray Spex (1978)",

  albumLine:
    "Released 10 November 1978 on EMI, produced by the band with their manager Falcon Stuart and recorded at Essex Studios in London. It's punk with a saxophone in it and consumerism as its subject — X-Ray Spex's only album of their original run.",

  overview: [
    "Poly Styrene, the band's singer and songwriter, was an outlier twice over in British punk: a woman fronting a band, and a mixed-race one — her mother Scottish-Irish, her father Somali — in a scene where both were rare and the combination close to unique. She performed in day-glo clothing and dental braces, refusing the sleek or sexualised presentation available to her, and her lyrics fixed on what she saw around her rather than on rebellion in the abstract.",

    "That subject is plastic. Not as metaphor but literally: synthetic fabrics, packaging, disposability, the artificial surfaces of late-seventies consumer Britain, and what living inside them does to a person's sense of self. Where much of punk aimed at institutions — the monarchy, the police, the record industry — Styrene aimed at the supermarket and the advertisement, and she did it without the sneer that was the era's default setting. The record is angry and also genuinely delighted by its own noise.",

    "Musically its distinguishing feature is the saxophone, an instrument punk had no use for. Lora Logic played it on the band's earliest recordings while still a teenager; by the album she had been replaced by Rudi Thomson, with Ted Bunting also contributing. Against Jak Airport's guitar, Paul Dean's bass and B.P. Hurding's drums, the sax honks and squalls rather than swings — closer to free jazz than to rock and roll, and it gives the album a jostling, carnival quality nothing else in punk had.",

    "It reached No. 30 in the UK and produced three charting singles. Contemporary reviews were warm but qualified; Charles Shaar Murray praised the \"great lyrics, nifty chewns, energy\" while noting how much of it had already been released as singles. Its standing has climbed a long way since — perfect scores from Pitchfork and the Spin Alternative Record Guide, and Robert Christgau eventually calling it one of British punk's strongest. Its clearest line of descent runs to riot grrrl in the 1990s, which took up both Styrene's subject matter and her vocal approach.",
  ],

  listeningNotes: [
    {
      label: "Saxophone as a punk instrument",
      text: "The sax doesn't solo or swing — it honks, squeals and holds long ugly notes against the guitar. It's the record's signature and the reason it doesn't sound like anything else from 1978.",
    },
    {
      label: "Poly Styrene's untrained roar",
      text: "She sings at full volume with no smoothing, cracking and swooping between notes. It's deliberately unpolished, and it became a direct model for riot grrrl singers a decade later.",
    },
    {
      label: "Day-glo, not black",
      text: "The arrangements are bright and major-key where punk convention was grey and minor — fast, cheerful and melodic, which makes the bleakness of the words land harder.",
    },
    {
      label: "Brand names and packaging as lyrics",
      text: "The words are full of synthetic materials and consumer goods, inventoried almost gleefully. Styrene treats the supermarket as the real subject rather than the state.",
    },
    {
      label: "Singles stacked together",
      text: "Much of the album had already appeared on 45 before release, so it plays as a run of self-contained three-minute statements rather than an album-shaped arc — a fair criticism at the time and part of its punch now.",
    },
  ],

  sources: [
    { title: "Germfree Adolescents — Wikipedia", url: "https://en.wikipedia.org/wiki/Germfree_Adolescents" },
    { title: "X-Ray Spex's Germfree Adolescents Is a Groundbreaking Punk Masterpiece — Consequence", url: "https://consequence.net/2023/11/x-ray-spex-germfree-adolescents-album-anniversary/" },
    { title: "Let's Submerge: X-Ray Spex's Germfree Adolescents at 45 — Rock and Roll Globe", url: "https://rockandrollglobe.com/punk/lets-submerge-x-ray-spexs-germfree-adolescents-at-45/" },
  ],

  influencedBy: [
    { artist: "Sex Pistols", album: "Never Mind the Bollocks, Here's the Sex Pistols", year: "1977", note: "The London punk explosion X-Ray Spex formed inside — Styrene has said seeing the Pistols prompted her to start the band." },
    { artist: "Ornette Coleman", album: "The Shape of Jazz to Come", year: "1959", note: "The free-jazz saxophone tradition the album's squalling, non-melodic sax lines draw on rather than rock's horn-section idiom." },
  ],

  influenced: [
    { artist: "Bikini Kill", album: "Pussy Whipped", year: "1993", note: "Riot grrrl took up Styrene's vocal approach and her anti-consumerist subject matter almost wholesale." },
    { artist: "Sonic Youth", album: "Daydream Nation", year: "1988", note: "Part of the lineage taking punk's noise toward dissonance and atonal instrumental texture." },
  ],
});
