import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Wilco",
  album: "Yankee Hotel Foxtrot",
  year: "2001",
  heading: "Yankee Hotel Foxtrot — Wilco (2001)",

  albumLine:
    "Self-produced by Wilco, streamed free from the band's own site on 29 September 2001 after their label refused it, and finally released commercially by Nonesuch on 23 April 2002. It's alt-country pulled apart and reassembled with noise and studio manipulation — the band's fourth album and the one that changed what they were.",

  overview: [
    "Wilco had been a well-regarded alt-country band. Recording at their Chicago loft from late 2000 to July 2001, they made something else: songs built conventionally and then deliberately damaged — buried under static, interrupted by radio tones, stripped back to bare acoustic takes. Jeff Tweedy, the band's singer and songwriter, described the working method plainly in Sam Jones's documentary about the sessions: they'd get \"a pretty straight definitive version of what the song sounds like it should be, then deconstruct it a little bit — see if there's some more exciting way to approach it. There's no reason not to destroy it.\"",

    "Two departures are stitched into the record. Drummer Ken Coomer was replaced by Glenn Kotche in January 2001, mid-sessions. And multi-instrumentalist Jay Bennett, who had co-engineered and shaped much of the material, was removed by Tweedy once it was finished, after a long argument — captured on film — over whether the album should be accessible or push into new territory. Jim O'Rourke then mixed it, pulling Bennett's dense layers back to expose Tweedy's plainer takes underneath and adding his own electronics. Much of what people love about the record is the result of a dispute the band did not survive intact.",

    "Then the label said no. Reprise rejected the album; Wilco obtained the rights for nothing and put it online free in September 2001. It was then bought by Nonesuch — like Reprise, a Warner subsidiary, meaning the same corporate parent effectively paid for it twice. The episode became a parable about major labels in the early file-sharing era, and the free stream did nothing to hurt it: 55,573 copies in its first week, No. 13 on the Billboard 200, eventually gold.",

    "On the timeline, one thing is worth stating carefully. The album was finished before 11 September 2001, and the resonances people hear — the anxiety, the imagery, the twin towers of Marina City on the sleeve — are readings made after the fact, not responses to the event. The title itself comes from something stranger: the NATO phonetic alphabet as heard on The Conet Project, a collection of shortwave numbers-station recordings. Critical response was enormous, including a rare 10 from Pitchfork, and Rolling Stone later placed it third among albums of the decade.",
  ],

  listeningNotes: [
    {
      label: "Noise laid over songs, not under them",
      text: "Static, drones and radio interference sit on top of otherwise gentle songs, loud enough to fight the melody. The sound of interference is treated as an instrument rather than an accident.",
    },
    {
      label: "Shortwave numbers stations",
      text: "The album takes its name from recordings of coded shortwave broadcasts, and that clipped, disembodied voice appears in the record itself. It's the source of both the title and the album's unsettled atmosphere.",
    },
    {
      label: "Songs that fall apart at the end",
      text: "Several tracks resolve normally and then collapse into extended noise or tape decay rather than stopping. The dismantling happens after the song has already done its job.",
    },
    {
      label: "Kotche's drums as texture",
      text: "Glenn Kotche plays with mallets, bells and loose, rattling percussion instead of straight timekeeping, which is a large part of why the record sounds unsettled even in its quietest passages.",
    },
    {
      label: "Voice mixed close and unvarnished",
      text: "O'Rourke's mix pushes Tweedy's vocal forward with its cracks intact, set against all the processing around it. The contrast between a plain human voice and machine noise is the album's central texture.",
    },
    {
      label: "Piano and acoustic guitar left exposed",
      text: "Underneath the manipulation, most of these are simple songs on acoustic instruments. O'Rourke stripped away layers to reveal that, so the record keeps alternating between bare and buried.",
    },
  ],

  sources: [
    { title: "Yankee Hotel Foxtrot — Wikipedia", url: "https://en.wikipedia.org/wiki/Yankee_Hotel_Foxtrot" },
    { title: "Yankee Hotel Foxtrot Turns 20 — Stereogum", url: "https://stereogum.com/2160774/wilco-yankee-hotel-foxtrot-turns-20/reviews/the-anniversary" },
    { title: "Wilco: Yankee Hotel Foxtrot — Treble", url: "https://www.treblezine.com/wilco-yankee-hotel-foxtrot-treble-100-no-27/" },
  ],

  influencedBy: [
    { artist: "The Beach Boys", album: "Pet Sounds", year: "1966", note: "A recurring reference point for the album's approach to pop songs as studio constructions rather than performances." },
    { artist: "Neil Young", album: "Tonight's the Night", year: "1975", note: "Precedent for an American songwriter deliberately roughing up his own material rather than delivering it clean." },
  ],

  influenced: [
    { artist: "The Decemberists", album: "The Crane Wife", year: "2006", note: "Part of the wave of 2000s American indie bands that followed this record's licence to make ambitious, studio-heavy albums." },
  ],
});
