import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Talk Talk",
  album: "The Colour Of Spring",
  year: "1986",
  heading: "The Colour of Spring — Talk Talk (1986)",

  albumLine:
    "Released 17 February 1986 on EMI, written by Mark Hollis with the producer Tim Friese-Greene and recorded through 1985 at Battery and Videosonics studios in London. It's art pop moving away from synth-pop towards something orchestral and jazz-inflected — their third album, and the hinge of their career.",

  overview: [
    "Talk Talk had been sold to the public as a synth-pop band, which was a commercial framing more than a musical one. Mark Hollis, who sang and played piano, was blunt about the limits: synthesizers, he argued, were used \"primarily for economic reasons\" rather than because anyone preferred them. Here he got the budget to stop pretending. The core was Hollis with Friese-Greene, who by this point was effectively a co-writer rather than a producer, plus Paul Webb on bass and Lee Harris on drums.",

    "The method is what makes the record strange. Around sixteen musicians played on it, brought in to improvise for long stretches, and Hollis and Friese-Greene then edited and arranged those performances into songs after the fact — composing by subtraction from hours of tape. Steve Winwood played organ on three tracks, Robbie McIntosh and David Rhodes contributed guitar, Martin Ditcham and Morris Pert added percussion, and a children's choir appears. What arrives is not a band playing songs but an assembled ensemble, with a great deal of deliberate silence left between the parts.",

    "The reference points Hollis cited were Satie, Debussy and Bartók rather than anyone in the charts, and the album's patience — instruments entering one at a time, phrases left to hang — comes from that listening. It is worth being clear about the sequence: this is a pop record, with two genuine hit singles, that happens to have been made by pop-averse means. The full break came afterwards, with \"Spirit of Eden\" in 1988, which EMI could not sell at all.",

    "So this is the last moment the two things coexisted. It went to No. 8 in Britain, No. 1 in the Netherlands, No. 58 in America, and spent twenty-one weeks on the UK chart — their commercial peak, driven by \"Life's What You Make It\" and \"Living in Another World.\" Uncut later gave it 9 out of 10. James Marsh's sleeve of butterflies and moths, painted in the style he used across all their covers, is part of why the record reads as a nature study. Its influence on what got called post-rock is direct and widely acknowledged.",
  ],

  listeningNotes: [
    {
      label: "Piano and organ instead of synthesizers",
      text: "Acoustic piano, Hammond and variable-speed keyboards carry what a bank of synths would have done two albums earlier. The harmonic language is richer and the textures breathe.",
    },
    {
      label: "Space left in the arrangements",
      text: "Instruments drop out entirely for bars at a time, and nothing rushes to fill the gap. That restraint — audible silence as an ingredient — is the record's signature.",
    },
    {
      label: "Hollis's murmured delivery",
      text: "He sings quietly and slightly behind the beat, swallowing consonants, so the voice sits inside the arrangement rather than on top of it.",
    },
    {
      label: "A drum sound with the room in it",
      text: "Lee Harris plays loosely and is recorded with the ambience left on, closer to a jazz kit than to 1986's gated snare. It's the clearest rejection of contemporary production fashion.",
    },
    {
      label: "Children's choir and unusual guests",
      text: "A choir of children, a variophon, and Steve Winwood's organ turn up as colours rather than gimmicks, each used once and then gone.",
    },
    {
      label: "Songs that build by accumulation",
      text: "Rather than verse-chorus alternation, parts layer up and then strip away across several minutes. The shape is closer to an orchestral crescendo.",
    },
  ],

  sources: [
    { title: "The Colour of Spring — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Colour_of_Spring" },
    { title: "Talk Talk — Wikipedia", url: "https://en.wikipedia.org/wiki/Talk_Talk" },
    { title: "Spirit of Eden — Wikipedia", url: "https://en.wikipedia.org/wiki/Spirit_of_Eden" },
  ],

  influencedBy: [
    { artist: "Miles Davis", album: "In a Silent Way", year: "1969", note: "The practice of recording long improvisations and editing them afterwards into finished pieces, and the same tolerance for quiet." },
    { artist: "Steve Winwood", album: "Arc of a Diver", year: "1980", note: "Winwood plays organ here; his soul-inflected keyboard phrasing is woven into three tracks." },
  ],

  influenced: [
    { artist: "Radiohead", album: "Kid A", year: "2000", note: "A commercially successful band dismantling its own format from inside, using silence and improvisation — the template Talk Talk set." },
    { artist: "Sigur Rós", album: "Ágætis byrjun", year: "1999", note: "Post-rock's slow accumulation and its reverence for empty space trace back through Talk Talk's late records, which begin here." },
  ],
});
