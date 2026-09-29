import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Jimi Hendrix",
  album: "Electric Ladyland",
  year: "1968",
  heading: "Electric Ladyland — The Jimi Hendrix Experience (1968)",

  albumLine:
    "Released 16 October 1968 on Reprise in America and Track in Britain nine days later, produced by Hendrix himself and recorded at Olympic and Mayfair in London and the Record Plant in New York between July 1967 and August 1968. A double album, and the last the Experience finished.",

  overview: [
    "The production credit is the story. Chas Chandler, the former Animals bassist who had discovered Hendrix and produced the first two albums, worked on this one and then walked out — worn down by Hendrix's perfectionism and by a studio permanently full of visitors. What replaced him was Hendrix producing himself with the engineer Eddie Kramer, which is why the record is simultaneously the most adventurous and the least disciplined thing he made.",

    "The band strained under the same conditions. Noel Redding, the bassist, was increasingly unhappy at the endless takes and at Hendrix's habit of playing bass himself; Jack Casady of Jefferson Airplane plays on one extended track and Steve Winwood plays organ on another, while Dave Mason adds twelve-string to the Dylan cover. Mitch Mitchell's drumming — jazz-schooled, busy, conversational — is the constant.",

    "What they got out of it was a studio record in a way rock hadn't really managed before. Kramer used backmasking, flanging and stereo panning as compositional tools rather than effects, and AllMusic's Cub Koda credits those techniques with recontextualising Hendrix's psychedelic and funk playing. Long passages are closer to jazz improvisation than to song, and the sequencing moves from blues to R&B to something closer to sound design.",

    "The British sleeve, printed by Track, showed nineteen nude women; retailers refused to stock it or sold it in brown paper, and Hendrix said he had not chosen it. It went to No. 1 in America — his only chart-topping album — and No. 6 in Britain. Reviewers at the time were frequently baffled by its length and sprawl; Rolling Stone now place it 53rd among the 500 greatest. Hendrix died in September 1970, aged 27, less than two years after its release.",
  ],

  listeningNotes: [
    {
      label: "Stereo used as composition",
      text: "Sounds sweep between the channels, reverse themselves and phase in and out. Kramer treated the mixing desk as an instrument rather than a delivery mechanism.",
    },
    {
      label: "Long improvised passages",
      text: "Several tracks run past ten minutes with extended group playing closer to jazz than to rock, Winwood's organ and Casady's bass among them.",
    },
    {
      label: "Hendrix playing bass himself",
      text: "He took over the bass on a number of tracks, which is part of why they lock so tightly — and part of why Redding wanted out.",
    },
    {
      label: "Mitch Mitchell's drumming",
      text: "Busy, tom-heavy and responsive rather than timekeeping, answering the guitar phrase by phrase in a way almost no rock drummer was doing.",
    },
    {
      label: "A Dylan cover rebuilt",
      text: "\"All Along the Watchtower\" is reassembled from the ground up with layered guitars and a slide part; Dylan himself afterwards played it Hendrix's way.",
    },
    {
      label: "Blues played straight",
      text: "Between the experiments sit long, unadorned blues performances — the tradition the whole record is an extension of rather than an escape from.",
    },
  ],

  sources: [
    { title: "Electric Ladyland — Wikipedia", url: "https://en.wikipedia.org/wiki/Electric_Ladyland" },
    { title: "The Jimi Hendrix Experience — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Jimi_Hendrix_Experience" },
    { title: "Eddie Kramer — Wikipedia", url: "https://en.wikipedia.org/wiki/Eddie_Kramer" },
  ],

  influencedBy: [
    { artist: "Muddy Waters", album: "The Best of Muddy Waters", year: "1958", note: "The Chicago blues vocabulary underneath everything, which Hendrix played straight as often as he transformed it." },
    { artist: "Bob Dylan", album: "John Wesley Harding", year: "1967", note: "Source of \"All Along the Watchtower,\" and of the idea that a song's arrangement could be entirely reimagined by another performer." },
    { artist: "The Beatles", album: "Sgt. Pepper's Lonely Hearts Club Band", year: "1967", note: "The precedent for treating the studio itself as the instrument, which Hendrix and Kramer pushed considerably further." },
  ],

  influenced: [
    { artist: "Funkadelic", album: "One Nation Under A Groove", year: "1978", note: "The fuzzed, exploratory lead guitar over funk rhythm is a direct line — Funkadelic's whole identity rests on it." },
    { artist: "The Allman Brothers Band", album: "At Fillmore East", year: "1971", note: "Extended improvisation by a rock band on blues material, recorded at length rather than edited to singles." },
    { artist: "Thin Lizzy", album: "Live And Dangerous", year: "1978", note: "Phil Lynott's model for a Black rock musician leading a hard rock band on his own writing." },
  ],
});
