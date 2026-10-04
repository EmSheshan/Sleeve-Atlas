import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Radiohead",
  album: "Kid A",
  year: "2000",
  heading: "Kid A — Radiohead (2000)",

  albumLine:
    "Released 2 October 2000 on Parlophone, produced by Nigel Godrich with the band, and recorded in Paris, Copenhagen and Oxfordshire between January 1999 and April 2000. Electronica, ambient and jazz where the guitars used to be — their fourth album, and a deliberate refusal of what they had just become.",

  overview: [
    "\"OK Computer\" had made them the most acclaimed rock band in the world and left Thom Yorke unable to work. His own account is unsparing: he was \"a complete fucking mess ... completely unhinged,\" with severe writer's block and an active dislike of the guitar-band role he had been handed. What broke it was listening elsewhere — the Warp Records catalogue, Aphex Twin and Autechre in particular, which he found refreshing because it was built on structures rather than on someone singing over them.",

    "So the band dismantled themselves. Jonny Greenwood moved to ondes Martenot and analogue synthesizers, Yorke's voice was processed until the words were often unrecoverable, lyrics were assembled by pulling lines out of a hat, and several tracks have no recognisable verse or chorus at all. Charles Mingus is an audible presence on the brass arrangements. Guitars appear, but rarely as the thing carrying the song.",

    "The release was as contrary as the record. No singles, almost no interviews, and promotion through short animations seeded on the internet — at a moment when the internet meant Napster, and the album leaked and circulated there before it was out. That combination now looks like a template; in 2000 it looked like sabotage.",

    "Early reviews split hard, with a strand of critics calling it pretentious, wilfully difficult or a second-hand copy of records the electronic underground had already made. It went to No. 1 in both Britain and America anyway. The reassessment has been total: Rolling Stone place it 20th among all albums, and Pitchfork and The Times among others named it the best of its decade. What it really settled is that a rock band at commercial peak could throw the format away and survive it.",
  ],

  listeningNotes: [
    {
      label: "Voice as texture",
      text: "Yorke is pitch-shifted, vocoded and buried until the words stop being the point and the timbre becomes the instrument.",
    },
    {
      label: "Ondes Martenot",
      text: "Jonny Greenwood plays an early electronic instrument with a sliding, wavering tone — the eerie lead line that isn't a synthesizer and isn't a guitar.",
    },
    {
      label: "Programmed beats over live drums",
      text: "Phil Selway's playing is chopped, looped and sometimes replaced outright, so the rhythm sits between a band and a machine.",
    },
    {
      label: "Free-jazz brass",
      text: "A full horn section arrives late in the record playing something closer to Mingus than to rock, and the album briefly comes apart on purpose.",
    },
    {
      label: "Songs without choruses",
      text: "Several tracks never return to anything. They accumulate and stop, which is the structural idea taken from electronic music rather than from songwriting.",
    },
    {
      label: "Silence and ambient stretches",
      text: "Long passages have almost nothing in them, which after the density of the previous album reads as a statement in itself.",
    },
  ],

  sources: [
    { title: "Kid A — Wikipedia", url: "https://en.wikipedia.org/wiki/Kid_A" },
    { title: "Radiohead — Wikipedia", url: "https://en.wikipedia.org/wiki/Radiohead" },
    { title: "Nigel Godrich — Wikipedia", url: "https://en.wikipedia.org/wiki/Nigel_Godrich" },
  ],

  influencedBy: [
    { artist: "Aphex Twin", album: "Selected Ambient Works 85-92", year: "1992", note: "Named by Yorke as the listening that broke his block — electronic music built on structure rather than on a singer." },
    { artist: "Talk Talk", album: "The Colour Of Spring", year: "1986", note: "The precedent for a successful band dismantling its own format from inside, using silence and improvisation." },
    { artist: "Miles Davis", album: "In a Silent Way", year: "1969", note: "Long-form playing over a static centre, edited into shape afterwards rather than performed as songs." },
  ],

  influenced: [
    { artist: "Bon Iver", album: "22, A Million", year: "2016", note: "A guitar-and-voice act rebuilt around processed vocals and fractured electronic structure, following the same route out." },
    { artist: "Frank Ocean", album: "Blonde", year: "2016", note: "Pitch-shifted, heavily treated vocals used as texture rather than delivery, on a record that similarly refuses conventional song shape." },
  ],
});
