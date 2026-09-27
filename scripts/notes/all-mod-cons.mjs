import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "The Jam",
  album: "All Mod Cons",
  year: "1978",
  heading: "All Mod Cons — The Jam (1978)",

  albumLine:
    "Released 3 November 1978 on Polydor, produced by Vic Coppersmith-Heaven and recorded at RAK and Eden Studios in London that July and August. It's mod revival and power pop built on punk's chassis — the Jam's third album, and the one that turned them from a good singles band into a serious one.",

  overview: [
    "They were a trio from Woking, Surrey — Paul Weller on guitar and lead vocals, Bruce Foxton on bass and backing vocals, Rick Buckler on drums — who had been playing together since school in 1972, which by 1977 made them unusually practised for a punk-adjacent band. Their position in that scene was always slightly off to the side: suits instead of rips, the Who and sixties soul instead of the Stooges, and Weller writing about England with an observational specificity punk mostly had no use for.",

    "This album exists because the previous one failed. Their second, released in 1977, had flopped in America, the supporting tour with Blue Öyster Cult had gone badly, and Polydor wanted a commercial record. Weller responded by seizing up. Coppersmith-Heaven rejected his first batch of songs as substandard and the whole thing was scrapped and rewritten — which is the origin of the album's leap in quality. Pressure worked, though nobody involved sounds like they enjoyed it.",

    "The song that defines it was nearly lost. \"Down in the Tube Station at Midnight\" was discarded by Weller and retrieved from the studio bin by the producer; it describes a man beaten by far-right thugs on the London Underground, and it reached No. 15. That subject was not abstract in 1978 — the National Front was standing candidates and mounting street marches, and Rock Against Racism had been running for two years. The record engages with that England directly rather than gesturing at chaos in general.",

    "The title is a joke on two registers at once: \"all mod cons\" is estate-agent shorthand for modern conveniences, and the band were mods. That doubleness is the whole method. They cover the Kinks' \"David Watts\" and write about suburban class resentment, English pop's own past used as material for the present. NME's Charles Shaar Murray called it \"several light years ahead of anything they've done before\" and the paper ranked it their second-best album of the year; it reached No. 6 in Britain and went gold. It sits at 219 on NME's 2013 list of the 500 greatest albums.",
  ],

  listeningNotes: [
    {
      label: "One guitar doing everything",
      text: "Weller has no second guitarist to hide behind, so his rhythm playing is percussive and full-chord, with leads snatched in the gaps. The record's tightness comes from that constraint.",
    },
    {
      label: "Foxton's bass as a second melody",
      text: "He plays high, busy, melodic lines in the Entwistle tradition rather than root notes, which is why a three-piece sounds this full.",
    },
    {
      label: "Acoustic guitars and quiet passages",
      text: "Several tracks drop to acoustic strumming or near-silence — a range their first two albums didn't have, and the clearest sign of the rewrite.",
    },
    {
      label: "Weller singing in his own accent",
      text: "The vowels are unmistakably Surrey rather than mid-Atlantic or mock-Cockney, and the diction is clear enough that the lyrics land as reportage.",
    },
    {
      label: "A Kinks cover played straight",
      text: "\"David Watts\" is a 1967 Ray Davies song about class envy, delivered faster and harder but with the arrangement intact. It marks out exactly which tradition the band claim.",
    },
    {
      label: "Sound effects and spoken fragments",
      text: "Footsteps, train noise and muttered dialogue appear inside songs, turning a couple of them into small radio plays rather than pop performances.",
    },
  ],

  sources: [
    { title: "All Mod Cons — Wikipedia", url: "https://en.wikipedia.org/wiki/All_Mod_Cons" },
    { title: "The Jam — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Jam" },
    { title: "Down in the Tube Station at Midnight — Wikipedia", url: "https://en.wikipedia.org/wiki/Down_in_the_Tube_Station_at_Midnight" },
  ],

  influencedBy: [
    { artist: "The Who", album: "My Generation", year: "1965", note: "The original mod trio template — power chords, busy melodic bass, and songs about being young and English." },
    { artist: "The Kinks", album: "Something Else by the Kinks", year: "1967", note: "Covered here; Ray Davies's habit of writing detailed social observation about English life is Weller's direct model." },
  ],

  influenced: [
    { artist: "The Smiths", album: "The Queen Is Dead", year: "1986", note: "The lineage of literate English guitar bands writing specifically about this country rather than a generic rock nowhere." },
    { artist: "Oasis", album: "Definitely Maybe", year: "1994", note: "Britpop treated Weller as a founding figure, and the Jam's sixties-via-punk formula is its blueprint." },
  ],
});
