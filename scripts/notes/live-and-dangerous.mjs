import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Thin Lizzy",
  album: "Live And Dangerous",
  year: "1978",
  heading: "Live and Dangerous — Thin Lizzy (1978)",

  albumLine:
    "Released 2 June 1978 on Vertigo, produced by Tony Visconti from shows in London in November 1976 and Philadelphia and Toronto in October 1977, mixed in Paris that January. A double live album — routinely voted the best ever made, and routinely argued about for the same reason.",

  overview: [
    "It exists because a studio album could not be scheduled. The band — Phil Lynott on bass and vocals, Scott Gorham and Brian Robertson on guitars, Brian Downey on drums — were at their commercial peak and out of time, so the tapes from two tours were handed to Visconti instead.",

    "What he did with them is the record's permanent controversy. Visconti has said it was \"75% recorded in the studio,\" with only the drums and the crowd surviving from the stage. Robertson flatly disputes it, on the practical grounds that the volume made replacement impossible: \"how are you going to replace my guitar when it's so loud?\" Both men were present. Nobody has reconciled the accounts, and the honest position is that the truth sits somewhere between a live document and a studio reconstruction wearing a crowd.",

    "That matters less than it should, because the thing being argued over is a band playing at the absolute top of its form. The reason to care is the guitars: Gorham and Robertson harmonise leads in thirds through almost every song, one of the most imitated arrangements in rock, and Lynott sings over them in a conversational Dublin voice that treats a stadium like a pub. The between-song patter is part of the record rather than filler cut out of it.",

    "It reached No. 2 in Britain and has sold over 600,000 there. NME called it \"the best live album we ever heard\" and placed it first in their fifty greatest in 2011; Rolling Stone have it at 46. It is also an ending — Robertson left after a falling-out with Lynott and was replaced by Gary Moore, and the band never sounded quite like this again.",
  ],

  listeningNotes: [
    {
      label: "Twin lead guitars in harmony",
      text: "Gorham and Robertson play melody lines a third apart through most of the set, tightly locked. Almost every twin-guitar rock band since is working from this.",
    },
    {
      label: "Lynott's bass as a lead voice",
      text: "He plays melodic, trebly lines high on the neck rather than root notes, so a four-piece carries a lot of harmonic information.",
    },
    {
      label: "Conversational stage talk",
      text: "He addresses the crowd between songs in an ordinary speaking voice, unedited. It's a large part of why the record feels like a room rather than a product.",
    },
    {
      label: "A crowd mixed high",
      text: "The audience is loud and constant, which is also the element both sides of the overdub dispute agree is genuine.",
    },
    {
      label: "Songs faster than their studio versions",
      text: "Nearly everything is taken at a harder tempo with rougher edges, which is the case for the album's existence.",
    },
  ],

  sources: [
    { title: "Live and Dangerous — Wikipedia", url: "https://en.wikipedia.org/wiki/Live_and_Dangerous" },
    { title: "Thin Lizzy — Wikipedia", url: "https://en.wikipedia.org/wiki/Thin_Lizzy" },
    { title: "Tony Visconti — Wikipedia", url: "https://en.wikipedia.org/wiki/Tony_Visconti" },
  ],

  influencedBy: [
    { artist: "The Allman Brothers Band", album: "At Fillmore East", year: "1971", note: "The template for the double live album as a band's definitive statement, and for harmonised twin-guitar leads." },
    { artist: "Jimi Hendrix", album: "Are You Experienced", year: "1967", note: "Lynott's model for a Black rock musician leading a hard rock band on his own writing." },
  ],

  influenced: [
    { artist: "Iron Maiden", album: "The Number Of The Beast", year: "1982", note: "The harmonised twin-guitar format, and the galloping bass played as a lead instrument, come straight from Lizzy." },
    { artist: "The Darkness", album: "Permission to Land", year: "2003", note: "Explicitly built on stacked harmony leads in the Thin Lizzy manner." },
  ],
});
