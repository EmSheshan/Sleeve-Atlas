import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Siouxsie And The Banshees",
  album: "Juju",
  year: "1981",
  heading: "Juju — Siouxsie and the Banshees (1981)",

  albumLine:
    "Released 19 June 1981 on Polydor, co-produced with Nigel Gray at Surrey Sound in Leatherhead that March. Post-punk built back around guitars after an album of keyboards — their fourth, and the one gothic rock is usually traced to.",

  overview: [
    "The line-up is the reason it sounds like this. John McGeoch had joined from Magazine and is one of the few guitarists of the era whose playing is instantly identifiable: he almost never plays a riff, working instead in chiming, flanged, atmospheric figures and treating the instrument as a source of texture. Budgie's drumming is equally unusual — tribal, tom-heavy patterns rather than rock backbeats — and between them the band produced a sound with almost no precedent.",

    "They had come out of punk in 1976, formed in the Sex Pistols' immediate orbit, and by 1981 had already moved a long way from it. Where the previous album had leaned on keyboards, this one returns to guitars but uses them in ways punk never had, including a Gizmo on one track and an EBow on another to produce sustained, bowed-sounding tones.",

    "The cultural position is worth being careful about. This album is routinely named as a founding document of goth, which became a genre with a uniform and a set of clichés; the Banshees resisted the label consistently and it undersells what is actually here, which is a rhythmically adventurous post-punk record with a strong melodic sense. Sounds noticed the shift at the time, writing that Siouxsie's voice \"seems to have acquired a new fullness of melody\" with \"a rich, dark smoothness.\"",

    "NME called it \"a peak in entertainment.\" It reached No. 7 in Britain, stayed on the chart seventeen weeks and went silver. The influence runs wide and often unexpectedly — musicians from Radiohead to the Red Hot Chili Peppers have cited it, and The Guardian's thousand-albums list called the band \"perennial masters of brooding suspense.\" McGeoch left the band the following year.",
  ],

  listeningNotes: [
    {
      label: "McGeoch's flanged guitar",
      text: "Sustained, chiming, heavily effected figures rather than chords or riffs. The guitar functions as atmosphere, which post-punk had mostly not tried.",
    },
    {
      label: "Budgie's tom-led drumming",
      text: "Patterns built on floor toms and mallets instead of a snare backbeat, giving the record its ritual, non-rock pulse.",
    },
    {
      label: "Siouxsie singing melodically",
      text: "She holds long notes and phrases with more warmth than on the earlier records, which is the change contemporary reviewers noticed first.",
    },
    {
      label: "EBow and Gizmo",
      text: "Devices that make a guitar string sustain indefinitely appear on two tracks, producing bowed, organ-like tones with no obvious source.",
    },
    {
      label: "Bass carrying the melody",
      text: "Steve Severin plays high, melodic lines that often hold the tune while the guitar decorates around them.",
    },
    {
      label: "Nigel Gray's dry, separated mix",
      text: "Having engineered the Police, Gray records each instrument with space around it rather than as one mass, so the odd textures stay legible instead of blurring together.",
    },
  ],

  sources: [
    { title: "Juju (Siouxsie and the Banshees album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Juju_(Siouxsie_and_the_Banshees_album)" },
    { title: "Siouxsie and the Banshees — Wikipedia", url: "https://en.wikipedia.org/wiki/Siouxsie_and_the_Banshees" },
    { title: "John McGeoch — Wikipedia", url: "https://en.wikipedia.org/wiki/John_McGeoch" },
  ],

  influencedBy: [
    { artist: "Sex Pistols", album: "Never Mind The Bollocks, Here’s The Sex Pistols", year: "1977", note: "The band formed in that scene's immediate orbit, and kept its refusal of musicianly convention while abandoning its sound." },
    { artist: "The Velvet Underground", album: "White Light/White Heat", year: "1968", note: "Drone and texture treated as song material rather than as effect, which is McGeoch's whole approach." },
  ],

  influenced: [
    { artist: "The Cure", album: "Disintegration", year: "1989", note: "Robert Smith played in the Banshees around this period; the sustained, atmospheric guitar and tom-led drums carry straight over." },
    { artist: "Radiohead", album: "The Bends", year: "1995", note: "Cited by the band; guitar used as layered atmosphere rather than as riff is a direct inheritance from McGeoch." },
    { artist: "Yeah Yeah Yeahs", album: "Fever To Tell", year: "2003", note: "Post-punk built on atmospheric, effects-heavy guitar under a declamatory vocal — a named point of comparison for that record." },
  ],
});
