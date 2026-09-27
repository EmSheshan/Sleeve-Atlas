import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Dolly Parton",
  album: "Trio",
  year: "1987",
  heading: "Trio — Dolly Parton, Linda Ronstadt and Emmylou Harris (1987)",

  albumLine:
    "Released 2 March 1987 on Warner Bros., produced by George Massenburg and recorded across 1986 in Los Angeles and Nashville. It's acoustic country and mountain harmony sung by three of the era's biggest voices — a collaboration that had been stalled for more than a decade.",

  overview: [
    "The three had been friends and mutual admirers since the mid-seventies and had tried to make this record then. It didn't happen, for the least romantic reasons imaginable: they were signed to three different labels, and the scheduling and contractual negotiation defeated them. That it eventually appeared at all is the result of a great deal of administrative patience, and by 1987 all three were established enough to insist on it.",

    "The timing turned out to matter musically. Mainstream country in the mid-eighties was heavily produced and pop-facing, full of gated drums and synthesizers. This record went the other way entirely — acoustic instrumentation, traditional and mountain material alongside contemporary songwriters, players including guitarist Albert Lee and fiddler Mark O'Connor. It arrived just as a broader corrective was gathering, the movement that would be labelled new traditionalist, and it proved there was a large audience for country that sounded old.",

    "The singing is the reason it endures. Dolly Parton's high, bright soprano, Emmylou Harris's clear and slightly mournful tone, and Linda Ronstadt's fuller, more powerful instrument occupy genuinely different territory, which is what makes the blend work; all three take lead at various points and the other two fall in behind. The harmony writing draws on Appalachian and gospel conventions — close intervals, parts moving in parallel — rather than the smooth thirds of pop backing vocals.",

    "It was a substantial commercial success: No. 6 on the Billboard 200, five weeks at No. 1 on the country chart, platinum in the US and around four million copies worldwide, with four charting singles. It took the Grammy for Best Country Performance by a Duo or Group with Vocal and the Academy of Country Music's Album of the Year. A second volume followed in 1999, again after prolonged delay.",
  ],

  listeningNotes: [
    {
      label: "Three distinct voices, not a blend",
      text: "You can identify who's singing which line at almost any moment. The arrangement keeps their timbres separate rather than merging them, which is unusual for close harmony.",
    },
    {
      label: "Mountain-style close harmony",
      text: "The parts sit tight together and move in parallel, an Appalachian and gospel convention rather than the wider, smoother harmony of pop or countrypolitan records.",
    },
    {
      label: "Acoustic instruments throughout",
      text: "Fiddle, mandolin, dobro and acoustic guitar carry the arrangements, with drums used sparingly. In 1987 country radio this was close to a statement of position.",
    },
    {
      label: "Lead vocals traded around",
      text: "Each singer fronts different songs and the other two support, so the album shifts character track to track rather than settling into one voice.",
    },
    {
      label: "A Phil Spector song stripped bare",
      text: "\"To Know Him Is to Love Him\" — a wall-of-sound pop hit in 1958 — is rebuilt as a slow acoustic three-part harmony, and it went to No. 1 on the country chart in that form.",
    },
    {
      label: "Massenburg's clean recording",
      text: "The producer, also a noted audio engineer, records the voices very close and very clean with minimal processing. You hear breath and the grain of each singer.",
    },
  ],

  sources: [
    { title: "Trio (Dolly Parton, Linda Ronstadt and Emmylou Harris album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Trio_(Dolly_Parton,_Linda_Ronstadt_and_Emmylou_Harris_album)" },
    { title: "Emmylou Harris — Wikipedia", url: "https://en.wikipedia.org/wiki/Emmylou_Harris" },
    { title: "Linda Ronstadt — Wikipedia", url: "https://en.wikipedia.org/wiki/Linda_Ronstadt" },
  ],

  influencedBy: [
    { artist: "The Carter Family", album: "The Original Carter Family", year: "1927", note: "The foundational source for the close family-harmony singing and traditional mountain repertoire this record draws on." },
    { artist: "Emmylou Harris", album: "Roses in the Snow", year: "1980", note: "Harris's own acoustic bluegrass album, produced in the same spirit, is the clearest direct precedent." },
  ],

  influenced: [
    { artist: "Alison Krauss", album: "Now That I've Found You: A Collection", year: "1995", note: "The commercial viability of acoustic, harmony-led traditional country that this album demonstrated." },
    { artist: "Various Artists", album: "O Brother, Where Art Thou? Soundtrack", year: "2000", note: "Part of the same lineage proving a mass audience for old-time American acoustic music." },
  ],
});
