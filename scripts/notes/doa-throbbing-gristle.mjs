import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Throbbing Gristle",
  album: "D.O.A. the Third and Final Report of Throbbing Gristle",
  year: "1978",
  heading: "D.o.A: The Third and Final Report of Throbbing Gristle — Throbbing Gristle (1978)",

  albumLine:
    "Released in 1978 on the band's own Industrial Records, recorded between September 1977 and May 1978. Thirteen tracks of tape manipulation, homemade electronics and found sound — the second album by the group that gave industrial music its name.",

  overview: [
    "They weren't a band first. Genesis P-Orridge, Cosey Fanni Tutti, Peter Christopherson and Chris Carter came out of COUM Transmissions, a performance art collective that had operated since 1969 and specialised in work designed to be difficult to sit through. Their 1976 exhibition Prostitution at London's Institute of Contemporary Arts drew parliamentary condemnation, with a Conservative MP calling them \"wreckers of civilisation.\" Throbbing Gristle made their public debut at that show. The music was a continuation of the art practice by other means.",

    "Their label, Industrial Records, supplied the genre its name via the slogan they coined with the artist Monte Cazazza — \"Industrial Music For Industrial People\" — meant to describe a deliberate mechanisation and dehumanisation of how music gets made. The equipment reflected that: Carter built much of the electronics himself, and tape recorders were used as instruments rather than as documentation.",

    "This is a harsher listen than almost anything released in 1978, including punk, which by then had settled into a recognisable rock format. It is also more varied than its reputation suggests — AllMusic notes each of the thirteen tracks is distinct, where their debut had been more uniformly punishing. The notorious piece is \"Hamburger Lady,\" built around text concerning a severely burned patient, which Pitchfork's Drew Daniel called \"probably Throbbing Gristle's greatest song\" on a record he described as \"a nauseating masterpiece, and an essential recording.\"",

    "It's worth being straightforward about the content. The group worked deliberately with material designed to disturb — atrocity, pornography, institutional cruelty — as a confrontation rather than for shock value alone, though the distinction was contested at the time and remains so. What followed from it is not in dispute: industrial music as a genre, and a lineage running through Cabaret Voltaire, Nine Inch Nails, Ministry and a great deal of electronic music that has nothing to do with dancing.",
  ],

  listeningNotes: [
    {
      label: "Tape as an instrument",
      text: "Loops, splices and speed changes are played as parts rather than used to edit. Sounds arrive backwards, slowed to a crawl or sped past recognition, with the manipulation left audible.",
    },
    {
      label: "Homemade electronics",
      text: "Chris Carter built much of the gear himself, so the synthesizer tones are unstable and often unrepeatable — drifting oscillators and noise rather than the clean patches of commercial instruments.",
    },
    {
      label: "A four-minute single compressed to sixteen seconds",
      text: "Their earlier single \"United\" reappears here sped up so violently it lasts sixteen seconds. It's a joke about the format and a demonstration of what tape can do to a song.",
    },
    {
      label: "Voice buried and processed",
      text: "Vocals are frequently treated until words become texture, or delivered flatly beneath the noise. Little is sung in any conventional sense.",
    },
    {
      label: "Found recordings",
      text: "Field recordings, radio, and captured speech are dropped in without smoothing. The sudden intrusion of ordinary sound into abstraction is one of the album's recurring shocks.",
    },
    {
      label: "No rhythm section to hold on to",
      text: "Where pulses exist they're mechanical and unrelenting rather than danceable, and many tracks have none at all. There's deliberately nothing for a listener to settle into.",
    },
  ],

  sources: [
    { title: "D.o.A: The Third and Final Report of Throbbing Gristle — Wikipedia", url: "https://en.wikipedia.org/wiki/D.o.A:_The_Third_and_Final_Report_of_Throbbing_Gristle" },
    { title: "Throbbing Gristle — Wikipedia", url: "https://en.wikipedia.org/wiki/Throbbing_Gristle" },
    { title: "COUM Transmissions — Wikipedia", url: "https://en.wikipedia.org/wiki/COUM_Transmissions" },
  ],

  influencedBy: [
    { artist: "Velvet Underground", album: "White Light/White Heat", year: "1968", note: "The precedent for rock musicians pursuing noise and endurance rather than song, with an art-world frame around it." },
    { artist: "Karlheinz Stockhausen", album: "Gesang der Jünglinge", year: "1958", note: "The electroacoustic tradition of composing directly with tape and electronic sound, which Throbbing Gristle repurposed outside the academy." },
  ],

  influenced: [
    { artist: "Cabaret Voltaire", album: "Mix-Up", year: "1979", note: "Released on the industrial scene Throbbing Gristle's label effectively created, and working the same tape-and-electronics method." },
    { artist: "Nine Inch Nails", album: "The Downward Spiral", year: "1994", note: "Industrial music's eventual mainstream form, built on the vocabulary this record established." },
    { artist: "Coil", album: "Horse Rotorvator", year: "1986", note: "Formed by Peter Christopherson after the band's end, continuing the same experimental lineage." },
  ],
});
