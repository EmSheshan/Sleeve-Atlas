import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Brian Eno",
  album: "Before And After Science",
  year: "1977",
  heading: "Before And After Science — Brian Eno (1977)",

  albumLine:
    "Released in December 1977 by Polydor in the UK and Island in the US, produced by Eno and Rhett Davies at Basing Street in London and Conny's Studio in Cologne. It's art pop split down the middle — brisk, abrasive songs on one side, pastoral instrumentals on the other. His fifth solo album, and the last record of conventional songs he would release for decades.",

  overview: [
    "Eno had left Roxy Music in 1973 and spent the next four years turning himself into something pop had no slot for: a self-described non-musician who treated the studio itself as the instrument. By the time this was finished he had made ambient records with guitarist Robert Fripp and with the German duo Cluster, devised Oblique Strategies with painter Peter Schmidt — a deck of cards offering lateral instructions when a session stalled — and played synthesizer on singer David Bowie's Low and \"Heroes\" in Berlin. He was paying close attention to new wave, which interested him more than British punk had, and was about to begin producing Talking Heads.",

    "It took roughly two years, and he reportedly wrote well over a hundred pieces to keep ten. The working method was what he called studio composition — build something up in dense layers, then strip parts away until what is left implies the rest. The cast is drawn from across the European underground: drummers Phil Collins and Jaki Liebezeit of Can, bassists Percy Jones and Paul Rudolph, guitarists Fripp, Phil Manzanera and Fred Frith, and singer Robert Wyatt, credited under the pseudonym Shirley Williams.",

    "Eno described the result as \"ocean music,\" against the \"sky music\" of Another Green World two years earlier, and the running order acts that out: momentum first, then a long dissolve into near-stillness. Words are deliberately subordinate, chosen for sound and image rather than argument, which is why the record feels precise and about nothing in particular at once.",

    "Commercially it did almost nothing. The album missed the UK chart entirely and reached only No. 171 in the US, and the single pulled from it didn't chart at all. Critics were warmer — critic Robert Christgau gave it an A−, while complaining about the quieter second side, and it finished twelfth in the Village Voice's 1978 Pazz & Jop poll. Its reach came later and sideways: the interlocking layered rhythm construction fed directly into the Talking Heads records Eno went on to produce, while the fretless bass and processed keyboard textures of the second half surfaced across the New Romantics, with Japan, John Foxx and Duran Duran all working downstream of it.",
  ],

  listeningNotes: [
    {
      label: "Layer, then subtract",
      text: "Tracks were assembled thick and then thinned out, with parts removed rather than added for effect. The gaps are the composition — you keep hearing room where something used to be.",
    },
    {
      label: "Fretless bass as a lead voice",
      text: "Percy Jones plays sliding, vocal-sounding lines with no frets to stop them, so the bass glides between notes instead of stepping. It frequently carries the melody while the guitars handle texture.",
    },
    {
      label: "A poet's voice used as an instrument",
      text: "\"Kurt's Rejoinder\" drops in a recording of artist and poet Kurt Schwitters reciting his sound poem Ursonate, treating speech as rhythm years before sampling was a technique anyone had a name for.",
    },
    {
      label: "Punk tempo under art-rock surfaces",
      text: "The fastest thing here, \"King's Lead Hat,\" is titled with an anagram of Talking Heads — the band Eno was about to start producing. It's new wave urgency played with Roxy Music's sense of finish.",
    },
    {
      label: "The Cologne keyboard pulse",
      text: "Slow, repeating electric-piano and synthesizer figures anchor the quiet half; musicians Hans-Joachim Roedelius and Dieter Moebius of Cluster co-wrote \"By This River,\" and that German minimalism shapes the whole side.",
    },
    {
      label: "Vocals treated as weather",
      text: "Multi-tracked and heavily processed, the singing is mixed in as another layer rather than placed on top. Lines surface and sink without ever quite becoming the focus.",
    },
  ],

  sources: [
    { title: "How Eno Altered Reality On Before And After Science — Rock and Roll Globe", url: "https://rockandrollglobe.com/art-pop/how-eno-altered-reality-on-before-and-after-science/" },
    { title: "Brian Eno: Before and After Science — Treble", url: "https://www.treblezine.com/brian-eno-before-and-after-science-review/" },
    { title: "Before and After Science — Wikipedia", url: "https://en.wikipedia.org/wiki/Before_and_After_Science" },
  ],

  influencedBy: [
    { artist: "Can", album: "Future Days", year: "1973", note: "Shared personnel: drummer Jaki Liebezeit plays here, and the unvarying hypnotic pulse he holds under shifting texture is the rhythmic model for this album's faster half." },
    { artist: "Cluster", album: "Zuckerzeit", year: "1974", note: "Eno had just recorded with Hans-Joachim Roedelius and Dieter Moebius, who co-wrote one piece on this record; their slow, pulsing electric-keyboard minimalism underpins its quiet side." },
  ],

  influenced: [
    { artist: "Talking Heads", album: "Remain in Light", year: "1980", note: "Eno produced it, and its rhythm beds are built the same way — short interlocking parts stacked and then pared back rather than arranged as conventional performances." },
    { artist: "Jon Hassell", album: "Fourth World Vol. 1: Possible Musics", year: "1980", note: "The instrumental half's blend of ambient atmosphere with jazz phrasing became the starting point for trumpeter Jon Hassell's work, which Eno then co-produced." },
    { artist: "Japan", album: "Tin Drum", year: "1981", note: "Bassist Mick Karn's fretless bass carrying the melody over cold processed keyboards is the exact combination established here; Japan are named among the New Romantic acts that followed from it." },
  ],
});
