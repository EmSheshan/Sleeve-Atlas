import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Spiritualized",
  album: "Lazer Guided Melodies",
  year: "1992",
  heading: "Lazer Guided Melodies — Spiritualized (1992)",

  albumLine:
    "Released in 1992 on Dedicated, led by Jason Pierce with Mark Refoy, Will Carruthers, Jonny Mattock and Kate Radley. Twelve tracks of dream pop, space rock and drone arranged as four cross-faded suites — the debut of the band he formed from the wreckage of Spacemen 3.",

  overview: [
    "Spacemen 3 had been built on a very pure idea: minimal, drugged, repetitive rock that took the Velvet Underground's drone and stripped almost everything else away. They ended badly, with Pierce and his co-founder Peter Kember barely speaking and recording their final album separately. Spiritualized is what Pierce did next, and the change is one of texture rather than principle — the repetition and the drone survive, but they are now surrounded by strings, horns and gospel voicings.",

    "The structure is unusual and deliberate. On vinyl the twelve tracks are grouped into four colour-coded suites that cross-fade into each other, so the album plays as four continuous pieces rather than a sequence. Pitchfork later filed the idea among CD-era gimmicks, which is a bit ungenerous: it enforces a listening pace, and the album's whole effect depends on not being able to skip out of a passage.",

    "What is genuinely new here compared to his old band is the gentleness. Where Spacemen 3 were confrontational, this is calm to the point of sedation — Pitchfork called it \"one of the most gentle rock records of its time\" — and the drugs the songs describe are downers rather than stimulants. It sits alongside British shoegaze without belonging to it: the guitars are hazy in the same way, but the writing underneath is blues and gospel rather than pop.",

    "NME gave it 9.999 out of 10, which is a peculiar way to say ten. It reached No. 27 in Britain and sold around 10,000 copies in America by 1995 — a cult record commercially, and a foundational one critically, placed second on NME's 2017 list of the best shoegaze albums. Pierce went on to make bigger and more baroque versions of this idea, but the template is entirely here.",
  ],

  listeningNotes: [
    {
      label: "Drone underneath everything",
      text: "Sustained organ and guitar tones hold under the songs without changing, so harmonic movement happens against a fixed floor.",
    },
    {
      label: "Tracks that never stop",
      text: "Pieces cross-fade into one another in groups of three, which removes the gaps and turns the album into four long movements.",
    },
    {
      label: "Pierce's flat, unraised voice",
      text: "He sings quietly and almost without inflection, low in the mix, treated as one more layer rather than the focus.",
    },
    {
      label: "Horns and strings at the edges",
      text: "Brass and orchestration drift in around the guitars, borrowed from gospel and free jazz rather than from rock arrangement.",
    },
    {
      label: "Repetition as structure",
      text: "Figures repeat for minutes with small additions rather than developing, the Spacemen 3 method carried over intact.",
    },
  ],

  sources: [
    { title: "Lazer Guided Melodies — Wikipedia", url: "https://en.wikipedia.org/wiki/Lazer_Guided_Melodies" },
    { title: "Spiritualized — Wikipedia", url: "https://en.wikipedia.org/wiki/Spiritualized" },
    { title: "Spacemen 3 — Wikipedia", url: "https://en.wikipedia.org/wiki/Spacemen_3" },
  ],

  influencedBy: [
    { artist: "The Velvet Underground", album: "White Light/White Heat", year: "1968", note: "The drone-and-repetition foundation both of Pierce's bands, taken directly and never disguised." },
    { artist: "My Bloody Valentine", album: "Isn't Anything", year: "1988", note: "The contemporary British vocabulary of guitar as a haze of texture with the vocal buried inside it." },
    { artist: "Miles Davis", album: "In a Silent Way", year: "1969", note: "Long-form playing over a static harmonic centre, with horns entering as colour rather than as solos." },
  ],

  influenced: [
    { artist: "Sigur Rós", album: "Ágætis byrjun", year: "1999", note: "Slow accumulation over drone, with the album structured as continuous movements rather than tracks." },
    { artist: "The Verve", album: "Urban Hymns", year: "1997", note: "British guitar music that married gospel-scale arrangements to narcotic repetition, following this lead." },
  ],
});
