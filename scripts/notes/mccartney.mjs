import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Paul McCartney",
  album: "McCartney",
  year: "1970",
  heading: "McCartney — Paul McCartney (1970)",

  albumLine:
    "Released 17 April 1970 on Apple, recorded between December 1969 and February 1970 at his house in St John's Wood on a Studer four-track, at Morgan Studios in Willesden and at EMI. He plays every instrument himself, with Linda McCartney singing harmony — his first solo album, and the one that got blamed for ending the Beatles.",

  overview: [
    "The circumstances swallowed the record whole. Lennon had privately left the Beatles in September 1969 and said nothing publicly. On 9 April 1970 McCartney sent the British press a self-interview discussing a possible permanent break from the group; he never quite said the band was finished, and every paper printed that he had. The headlines were versions of \"Paul breaks up the Beatles,\" and the album arrived eight days later carrying all of it.",

    "There had already been a fight about the date. Apple wanted the release pushed back to clear the way for \"Let It Be,\" and when Ringo Starr was sent to his house to deliver the message, McCartney threw him out — \"I'll finish you now. You'll pay!\" The record is often described as a retreat to domestic contentment, and it partly is, but it was made and released by someone in a state.",

    "What he actually did was invent a format. Recording a whole album alone at home on a four-track, playing everything, leaving fragments unfinished and the joins visible, was not what a musician of his standing did in 1970 — the expectation was Abbey Road and an orchestra. Some tracks are barely sketches; the production is deliberately unfussy. That is precisely why it matters now: it is an early ancestor of home recording and of what became lo-fi, made by the least likely person available.",

    "Contemporary reviews were brutal about exactly that, praising little beyond \"Maybe I'm Amazed\" and treating the rest as unfinished; Lennon later called it \"rubbish.\" It nonetheless went to No. 1 in America for three weeks — displaced by \"Let It Be\" — and No. 2 in Britain. The reassessment has been substantial: Neil Young singled out its simplicity when inducting McCartney into the Rock and Roll Hall of Fame in 1999, and the DIY tradition has claimed it. He made the same move twice more, in 1980 and 2020.",
  ],

  listeningNotes: [
    {
      label: "One man, overdubbed",
      text: "Every part is his — bass, drums, guitars, piano, percussion — built up on four tracks, so the playing is looser and less specialised than a band's.",
    },
    {
      label: "Home-recorded sound",
      text: "The Studer four-track in a living room gives a small, dry, slightly muffled picture. Nothing has the depth of an EMI session and that is the point.",
    },
    {
      label: "Fragments left as fragments",
      text: "Several tracks are a minute or two of an idea with no attempt to develop it into a song. The album is sequenced to treat that as normal.",
    },
    {
      label: "Instrumentals with no vocals at all",
      text: "A good portion has no singing, functioning as sketches of grooves and textures — closer to a notebook than a record.",
    },
    {
      label: "Linda McCartney's harmonies",
      text: "Untrained, close-mic'd and unpolished, sitting right against his lead. The domesticity is audible in the arrangement, not just the subject.",
    },
    {
      label: "One fully realised song",
      text: "\"Maybe I'm Amazed\" is arranged, mixed and sung as though for a Beatles record, which makes the deliberate roughness of everything around it unmistakable.",
    },
  ],

  sources: [
    { title: "McCartney (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/McCartney_(album)" },
    { title: "Break-up of the Beatles — Wikipedia", url: "https://en.wikipedia.org/wiki/Break-up_of_the_Beatles" },
    { title: "Maybe I'm Amazed — Wikipedia", url: "https://en.wikipedia.org/wiki/Maybe_I%27m_Amazed" },
  ],

  influencedBy: [
    { artist: "Beatles", album: "The White Album", year: "1968", note: "The White Album's habit of members recording alone, and of leaving sketches on the record, is the direct precedent." },
    { artist: "Bob Dylan", album: "John Wesley Harding", year: "1967", note: "The move from studio maximalism to something small and unadorned, made by someone who could afford otherwise." },
  ],

  influenced: [
    { artist: "John Lennon", album: "John Lennon/Plastic Ono Band", year: "1970", note: "Released eight months later — the other Beatle's answer to the same moment, stripped in the opposite direction." },
    { artist: "Guided by Voices", album: "Bee Thousand", year: "1994", note: "Home four-track recording with unfinished fragments presented as finished songs, a tradition this album stands at the head of." },
    { artist: "Beck", album: "Odelay", year: "1996", note: "The lo-fi home aesthetic as a deliberate artistic choice rather than a budget limitation." },
  ],
});
