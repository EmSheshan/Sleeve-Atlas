import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "John Lennon",
  album: "John Lennon/Plastic Ono Band",
  year: "1970",
  heading: "John Lennon/Plastic Ono Band — John Lennon (1970)",

  albumLine:
    "Released 11 December 1970 on Apple, produced by John Lennon with Yoko Ono and Phil Spector, and recorded at Abbey Road in London between 26 September and 23 October that year. It's stripped-to-the-frame rock — his first proper solo album, made eight months after the Beatles ended.",

  overview: [
    "The band is almost comically small for the biggest star in the world: Lennon on guitar, piano and organ, Klaus Voormann on bass, Ringo Starr on drums, with Billy Preston on grand piano for one track and Phil Spector on another. Three people, most of the time. That is a decision, not a budget, and it sets up everything else.",

    "The reason is therapy. Earlier in 1970 Lennon and Ono had begun primal therapy with Arthur Janov, an American psychotherapist whose method held that repressed childhood pain could be reached and released by reliving it — including by screaming. They lasted roughly four months. The songs are the residue: Lennon's mother Julia died when he was seventeen, his father had left before that, and here he addresses both directly, by name and without metaphor, at a moment when rock lyrics did not do that.",

    "The wider context is that 1970 was the year the sixties were officially over. The Beatles' break-up was announced in April, the counterculture's political hopes had largely collapsed, and a great deal of music that year was busy being consoling. Lennon's response was to attack the consolation as well — one song is a catalogue of things he no longer believes in, the Beatles among them. He was disassembling not just a band but the idea that the band had meant something redemptive.",

    "The production is the great joke of the record. Spector, the architect of the Wall of Sound, co-produced an album with almost no reverb on anything: he arrived after Lennon and Ono had largely shaped it, and Lennon has said that had Spector been involved from the start it would have been lush and layered instead. What survives of Spector is the sense of a single overwhelming sound — just achieved by subtraction. Reviews at the time were mixed and it reached only No. 8 in Britain and No. 6 in America, though it spent seven weeks at No. 1 in the Netherlands. Its standing since has only risen; Rolling Stone placed it 23rd in their 2012 list of the 500 greatest albums, and the whole confessional singer-songwriter tradition treats it as a founding document.",
  ],

  listeningNotes: [
    {
      label: "Three instruments and nothing else",
      text: "Voice, one guitar or piano, bass and drums, with no overdubbed sweetening. The absences are the loudest thing on the album.",
    },
    {
      label: "Almost no reverb",
      text: "Everything is recorded dry and close, so the voice sits in the same airless space as the listener. It's the exact opposite of what Spector was hired for.",
    },
    {
      label: "The screaming",
      text: "He tears his voice open at the ends of phrases, without correction or a second take smoothing it. This is the therapy audible as technique.",
    },
    {
      label: "Primitive piano and slide guitar",
      text: "His playing is deliberately unskilled — hammered block chords, slide lines that slur — which keeps the performances sounding like first attempts.",
    },
    {
      label: "Ringo Starr playing simply and huge",
      text: "The drums are slow, heavy and almost fill-free, recorded with the whole kit in one image rather than mic'd piece by piece.",
    },
    {
      label: "One track with nothing but voice and tape",
      text: "The album ends on a fragment with barely any instrumentation at all, a recording rather than a performance, which refuses the idea of a closing number.",
    },
  ],

  sources: [
    { title: "John Lennon/Plastic Ono Band — Wikipedia", url: "https://en.wikipedia.org/wiki/John_Lennon/Plastic_Ono_Band" },
    { title: "John Lennon/Plastic Ono Band — The Beatles Bible", url: "https://www.beatlesbible.com/people/john-lennon/albums/john-lennon-plastic-ono-band/" },
    { title: "The making of Plastic Ono Band and its rebirth — Goldmine", url: "https://www.goldminemag.com/features/the-making-of-plastic-ono-band-and-its-rebirth/" },
  ],

  influencedBy: [
    { artist: "The Beatles", album: "The Beatles", year: "1968", note: "The White Album's sparest tracks — one voice, one instrument, no production — are where Lennon first tried this register." },
    { artist: "Bob Dylan", album: "John Wesley Harding", year: "1967", note: "The precedent of a major artist answering a maximalist era by stripping everything back to a small band and plain speech." },
  ],

  influenced: [
    { artist: "Neil Young", album: "Tonight's the Night", year: "1975", note: "The deliberately raw, undercooked, emotionally unguarded record made against commercial expectation." },
    { artist: "Nirvana", album: "In Utero", year: "1993", note: "Kurt Cobain named this album among his favourites; the screamed, self-lacerating confession over minimal rock instrumentation is its inheritance." },
  ],
});
