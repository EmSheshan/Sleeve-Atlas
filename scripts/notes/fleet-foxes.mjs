import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Fleet Foxes",
  album: "Fleet Foxes",
  year: "2008",
  heading: "Fleet Foxes — Fleet Foxes (2008)",

  albumLine:
    "Released 3 June 2008 on Sub Pop and Bella Union, produced by Phil Ek and recorded in 2007 at Avast! and London Bridge in Seattle. It's folk-rock built almost entirely around stacked vocal harmony — the band's debut.",

  overview: [
    "Robin Pecknold's stated method was to avoid the obvious shapes: \"avoid choruses and verses in favor of long vocal rounds and alternating instrumental sections.\" That's unusual for a debut, and it's what separates the record from the general run of late-2000s acoustic revivalism. Songs don't build to a hook; they cycle through sections, with voices entering in rounds like a hymn or a sea shanty.",

    "The band described their own music, half-jokingly, as \"baroque harmonic pop jams,\" which is more precise than it sounds. The harmony writing draws on Appalachian and gospel traditions and on the close-voiced pop of Crosby, Stills & Nash and the Beach Boys, but the instrumentation is deliberately plain — acoustic guitars, mandolin, banjo, a drum kit used sparingly. Phil Ek's production drenches all of it in reverb, so the record sounds less like a band in a room than a choir in a much larger, emptier one.",

    "It arrived at a moment when American indie was turning pastoral — beards, cabins, analogue warmth, a reaction against the previous decade's irony and dance-punk. That scene generated a great deal of shapeless nostalgia, and the reasonable criticism of this album is that it belongs to it. What sets it apart is musical: the vocal arrangements are genuinely intricate, closer to choral writing than to rock backing vocals, and the songs are strange underneath their prettiness.",

    "It entered the Billboard 200 at No. 83 with 8,000 copies, then simply kept selling — eventually platinum in both the US and UK. Metacritic aggregated 87, Pitchfork gave it 9.0 and named it the best album of 2008, and the Guardian called it \"a landmark in American music, an instant classic.\" It's become the reference point for a whole strand of harmony-driven folk that followed.",
  ],

  listeningNotes: [
    {
      label: "Rounds instead of choruses",
      text: "Voices enter one after another on the same line, overlapping like a canon. It's a device from folk and church singing, and it's how several songs are structured rather than decorated.",
    },
    {
      label: "Reverb as the room",
      text: "Phil Ek places everything in a huge artificial space with long decay. The result is cathedral-like and deliberately unreal — you can't place how big the room is meant to be.",
    },
    {
      label: "Three- and four-part block harmony",
      text: "The band sing in tight stacked chords rather than one lead with support, so the melody is often carried by the whole group at once.",
    },
    {
      label: "Acoustic instruments, sparse drums",
      text: "Guitars, mandolin and banjo do most of the work; percussion frequently drops out entirely. When drums arrive they're an event rather than a foundation.",
    },
    {
      label: "Songs that change and don't return",
      text: "Sections give way to new sections without coming back. Several tracks end somewhere harmonically distant from where they began.",
    },
  ],

  sources: [
    { title: "Fleet Foxes (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Fleet_Foxes_(album)" },
    { title: "Fleet Foxes — Wikipedia", url: "https://en.wikipedia.org/wiki/Fleet_Foxes" },
    { title: "Fleet Foxes — Pitchfork", url: "https://pitchfork.com/reviews/albums/11522-fleet-foxes/" },
  ],

  influencedBy: [
    { artist: "Crosby, Stills & Nash", album: "Crosby, Stills & Nash", year: "1969", note: "The direct model for close three-part harmony over acoustic guitars in an American rock context." },
    { artist: "The Beach Boys", album: "Pet Sounds", year: "1966", note: "The stacked, harmonically adventurous vocal arrangement this band's whole approach descends from." },
    { artist: "Van Morrison", album: "Astral Weeks", year: "1968", note: "A precedent for acoustic songs that drift and cycle rather than resolving into pop structure." },
  ],

  influenced: [
    { artist: "Bon Iver", album: "Bon Iver, Bon Iver", year: "2011", note: "Part of the same American pastoral-indie moment, sharing the emphasis on layered voice and reverb-heavy space." },
    { artist: "The Lumineers", album: "The Lumineers", year: "2012", note: "The commercial folk-revival wave that followed in this album's wake, in a considerably simplified form." },
  ],
});
