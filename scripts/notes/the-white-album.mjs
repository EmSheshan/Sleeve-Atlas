import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Beatles",
  album: "The White Album",
  year: "1968",
  heading: "The Beatles (The White Album) — The Beatles (1968)",

  albumLine:
    "Released 22 November 1968 on Apple, produced by George Martin and recorded at Abbey Road between 30 May and 14 October. Thirty tracks across two discs and almost every genre available — their ninth album, their only double, and the sound of a band coming apart in public.",

  overview: [
    "Most of it was written in Rishikesh. Nineteen of the thirty songs came out of a transcendental meditation course the band took in India between February and April 1968, where the only instruments to hand were acoustic guitars — which is why so much of a record famous for its sprawl is at heart four men and six strings.",

    "What happened next is the other half of the story. The sessions were miserable: George Martin took an unannounced holiday partway through, the engineer Geoff Emerick walked out over the constant friction, and Ringo Starr quit in August, returning on 5 September to find his drum kit covered in flowers by way of apology. The four increasingly recorded separately, sometimes in different studios on the same night, which is exactly why the album sounds like four solo records interleaved.",

    "That is usually offered as a criticism and it is at least as much the point. The breadth here — music hall, blues, ska, folk, hard rock, and a piece of tape collage — is not eclecticism for its own sake but four writers no longer negotiating a common style. It is the most argumentative record they made, and the first where you can reliably tell who wrote what within a bar.",

    "Richard Hamilton, the pop artist, designed the sleeve with Paul McCartney: plain white, the name embossed, each copy individually numbered — as flat a rejection of \"Sgt. Pepper\"'s clutter as could be managed. It topped both the UK and US charts and is twenty-four times platinum in America. Reviews at the time were mostly warm with a recurring complaint that it lacked Pepper's invention; the modern consensus has more or less inverted that.",
  ],

  listeningNotes: [
    {
      label: "Acoustic guitar as the backbone",
      text: "A great many of these were written on acoustics in India with nothing else available, and a surprising number are recorded that way too.",
    },
    {
      label: "Four writers, audibly separate",
      text: "Tracks are often played by whoever wrote them plus whoever turned up, so the band sound changes from song to song rather than holding.",
    },
    {
      label: "Dry, close recording",
      text: "After Pepper's layered studio effects, most of this is captured plainly with the room close and the reverb dialled back.",
    },
    {
      label: "Parody worn openly",
      text: "Several tracks imitate other styles — ska, blues, doo-wop, Beach Boys harmony — closely enough that the imitation is the joke.",
    },
    {
      label: "A tape collage in the middle",
      text: "Eight minutes of spliced loops, speech and orchestral fragments sit on side four, the furthest the band ever went from song form.",
    },
    {
      label: "Very short and very long together",
      text: "Fragments under a minute sit beside extended pieces, sequenced without smoothing, which is most of why it feels like a scrapbook.",
    },
  ],

  sources: [
    { title: "The Beatles (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Beatles_(album)" },
    { title: "The Beatles in India — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Beatles_in_India" },
    { title: "Richard Hamilton (artist) — Wikipedia", url: "https://en.wikipedia.org/wiki/Richard_Hamilton_(artist)" },
  ],

  influencedBy: [
    { artist: "Bob Dylan", album: "John Wesley Harding", year: "1967", note: "The turn away from studio maximalism towards plain acoustic recording, made by someone who could have done otherwise." },
    { artist: "The Beach Boys", album: "Pet Sounds", year: "1966", note: "Directly parodied on one track, and the long-running rivalry that had shaped both bands' ambitions." },
  ],

  influenced: [
    { artist: "John Lennon", album: "John Lennon/Plastic Ono Band", year: "1970", note: "Its sparest tracks — one voice, one instrument, no production — are where Lennon first tried that register." },
    { artist: "Paul McCartney", album: "McCartney", year: "1970", note: "The habit of members recording alone, and of leaving sketches on the record, becomes his whole first solo album." },
    { artist: "Led Zeppelin", album: "Physical Graffiti", year: "1975", note: "The double album as a deliberate display of range rather than an overflow of material." },
  ],
});
