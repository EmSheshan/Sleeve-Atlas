import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Soft Machine",
  album: "Third",
  year: "1970",
  heading: "Third — Soft Machine (1970)",

  albumLine:
    "Released June 1970 on CBS in Britain and Columbia in America. A double album of four side-long pieces, one per side — the record where a psychedelic pop group finished turning into a jazz-rock band.",

  overview: [
    "The line-up by this point was Mike Ratledge on keyboards, Robert Wyatt on drums and vocals, Elton Dean on saxophone and Hugh Hopper on bass, with Jimmy Hastings on flute and Rab Spall on violin as guests. They had begun in Canterbury in the mid-sixties as an English psychedelic band sharing a scene with Pink Floyd; by 1970 almost nothing of that was left except a fondness for the unreasonable.",

    "Committing an entire side to each composition was the structural decision that made everything else possible. There is no reaching for a single, no verse and chorus, and only one of the four pieces has a vocal at all. What fills the space is collective improvisation over written heads, tape loops, fuzz organ and saxophone — the same modal-jazz logic Miles Davis had been working with, applied by people who came from rock and never quite lost the volume.",

    "The Canterbury scene that grew around them has a specific character worth naming: English, wry, harmonically curious, more interested in odd time signatures than in virtuoso display. Third is its central document, and the tension that runs through it — Wyatt pulling towards song and voice, Ratledge and Dean pulling towards instrumental abstraction — is why the band split the way it did shortly afterwards.",

    "It became their highest-charting record, reaching No. 18 in Britain and No. 5 in the Netherlands, which for an hour of largely wordless jazz-rock is remarkable. One reviewer credited it with pushing \"the boundaries of rock into areas previously unexplored, and it managed to do so without sounding self-indulgent\" — the second clause being the harder achievement. Later that year they became the first popular music act to play the Proms at the Royal Albert Hall.",
  ],

  listeningNotes: [
    {
      label: "One piece per side",
      text: "Each track runs roughly eighteen minutes and develops continuously rather than repeating, which is the album's whole formal proposition.",
    },
    {
      label: "Ratledge's fuzz organ",
      text: "He runs a Lowrey organ through distortion until it snarls like a guitar, the most identifiable sound on the record.",
    },
    {
      label: "Elton Dean's saxello",
      text: "A curved soprano saxophone with a reedier, more acidic tone than the standard instrument, playing free-jazz lines over written material.",
    },
    {
      label: "Tape loops and edits",
      text: "Prepared tape and studio splicing appear inside the improvisations, so the pieces are partly constructed rather than wholly played.",
    },
    {
      label: "Odd metres held without strain",
      text: "Much of it sits in sevens and elevens, played fluently enough that the counting never becomes the point.",
    },
    {
      label: "Wyatt's one vocal",
      text: "Only a single side has singing, and his high, fragile voice arrives as a shock after forty minutes of instrumental music.",
    },
  ],

  sources: [
    { title: "Third (Soft Machine album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Third_(Soft_Machine_album)" },
    { title: "Soft Machine — Wikipedia", url: "https://en.wikipedia.org/wiki/Soft_Machine" },
    { title: "Canterbury scene — Wikipedia", url: "https://en.wikipedia.org/wiki/Canterbury_scene" },
  ],

  influencedBy: [
    { artist: "Miles Davis", album: "In a Silent Way", year: "1969", note: "The modal, long-form, studio-edited approach to jazz-rock that this album applies with rock instrumentation and volume." },
    { artist: "The Velvet Underground", album: "White Light/White Heat", year: "1968", note: "Distortion and drone accepted as legitimate material for extended pieces rather than as effects." },
  ],

  influenced: [
    { artist: "Talk Talk", album: "The Colour Of Spring", year: "1986", note: "Long-form improvisation edited into composition afterwards, by a band abandoning pop structure." },
    { artist: "Radiohead", album: "Kid A", year: "2000", note: "The free-jazz brass and the refusal of verse-chorus form reach back through this English jazz-rock lineage." },
  ],
});
