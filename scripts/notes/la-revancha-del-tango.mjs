import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Gotan Project",
  album: "La Revancha Del Tango",
  year: "2001",
  heading: "La Revancha del Tango — Gotan Project (2001)",

  albumLine:
    "Released 22 October 2001 on ¡Ya Basta! and XL Recordings, produced by the group themselves — Philippe Cohen Solal, Christoph H. Müller and Eduardo Makaroff. It's Argentine tango rebuilt with samplers and breakbeats, and it's their debut.",

  overview: [
    "The group is Parisian but not French exactly: Cohen Solal is French, Müller Swiss, Makaroff Argentine, and they formed in Paris in 1999. That matters, because Paris is where tango went to become respectable in the first place. The music left Buenos Aires's port districts in the early twentieth century, was taken up by Parisian society, and returned home legitimised. This record repeats the trip a century later with different equipment.",

    "The title translates as the tango's revenge, and the joke is pointed. By the late nineties tango was widely treated as heritage music — something for dance schools and tourist shows, sealed under glass. Putting it over programmed beats was a way of insisting it was still living material rather than a museum piece. The group didn't simulate the genre electronically; they hired players. A real bandoneón — the button accordion that gives tango its wheeze and its melancholy — sits at the centre of nearly every track, alongside violin and Spanish-language vocals, with the trio's production underneath.",

    "It landed in a specific commercial moment. Around 2001 European chill-out and lounge compilations were enormous, and a record combining downtempo programming with an exotic acoustic signature fit that market almost too neatly. It duly became a fixture of bars, hotel lobbies and advertising, which has coloured its reputation since; the line between respectful fusion and upmarket background music is one this album is regularly accused of crossing.",

    "The sales were remarkable for what is, formally, a fairly uncommercial idea: platinum in France, double platinum in Argentina, gold across Belgium, Canada, Italy, Poland, Switzerland and the UK, and over a million copies worldwide. Reviews ran from good to very good — three to five stars across AllMusic, Rolling Stone and the San Francisco Chronicle. Argentina's own verdict, that double-platinum certification, is probably the most interesting number here: the country whose music was being repurposed bought it in quantity.",
  ],

  listeningNotes: [
    {
      label: "A real bandoneón, not a synth patch",
      text: "The reedy, breathing squeezebox threaded through the record is played, not sampled from a library. Its slight instability against machine-perfect drums is the album's whole tension.",
    },
    {
      label: "Tango rhythm flattened onto a beat grid",
      text: "Traditional tango pushes and pulls its tempo constantly. Here it's locked to a steady programmed pulse, so the drama has to come from the playing on top rather than from the timing.",
    },
    {
      label: "Downtempo, never dance-floor",
      text: "Everything sits at a slow, hip-hop-adjacent tempo with heavy, dry drums. It's built for listening rooms rather than either a club or a milonga.",
    },
    {
      label: "Spoken and sung Spanish kept forward",
      text: "Vocals are in Spanish and often half-spoken, mixed as texture as much as lead. Non-speakers get tone and cadence rather than meaning, which is clearly intended.",
    },
    {
      label: "Covers pulled from odd places",
      text: "The record reworks Frank Zappa's \"Chunga's Revenge\" and Gato Barbieri's theme from Last Tango in Paris — one a rock instrumental, the other a film score about tango rather than tango itself.",
    },
    {
      label: "Strings and scratches together",
      text: "Violin lines in a period idiom run alongside turntable scratching and sampled crackle, with neither treated as a novelty. The two eras are simply mixed at the same level.",
    },
  ],

  sources: [
    { title: "La Revancha del Tango — Wikipedia", url: "https://en.wikipedia.org/wiki/La_Revancha_del_Tango" },
    { title: "Gotan Project — Wikipedia", url: "https://en.wikipedia.org/wiki/Gotan_Project" },
    { title: "Gotan Project: La Revancha del Tango — AllMusic", url: "https://www.allmusic.com/album/la-revancha-del-tango-mw0000594971" },
  ],

  influencedBy: [
    { artist: "Astor Piazzolla", album: "Tango: Zero Hour", year: "1986", note: "Piazzolla's nuevo tango already broke the genre open to jazz and modern composition; this record extends that licence to electronics." },
    { artist: "Thievery Corporation", album: "Sounds from the Thievery Hi-Fi", year: "1996", note: "The downtempo template of pairing programmed beats with an acoustic music from elsewhere, which this album applies to tango." },
  ],

  // No well-documented downstream influence found in reliable sources — the
  // record's legacy is commercial and atmospheric rather than traceable.
  influenced: [],
});
