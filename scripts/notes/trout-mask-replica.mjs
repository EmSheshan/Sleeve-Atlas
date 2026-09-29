import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Captain Beefheart & His Magic Band",
  album: "Trout Mask Replica",
  year: "1969",
  heading: "Trout Mask Replica — Captain Beefheart & His Magic Band (1969)",

  albumLine:
    "Released 16 June 1969 on Straight Records, produced by Frank Zappa, with the band's instrumental parts cut at Whitney Studios in Glendale in March that year and Don Van Vliet's vocals added days later. A double album of free-jazz-inflected blues in impossible time signatures — and one of the hardest listens ever admitted to a canon.",

  overview: [
    "The music was worked out over roughly eight months in a rented house in Woodland Hills, and the making of it is not a charming anecdote. Van Vliet held total control over a group living communally on almost no money, rehearsing upwards of fourteen hours a day, and by multiple accounts — the drummer John French's most detailed among them — he verbally broke musicians down until they collapsed in tears. The band were Bill Harkleroad and Jeff Cotton on guitars, Mark Boston on bass, French on drums and Victor Hayden on bass clarinet, each renamed by Van Vliet as part of the same total authorship.",

    "It also produced something with no real precedent. Van Vliet composed at a piano he could not play, and French transcribed the results into parts for a rock band — which is why the guitars run in different metres simultaneously, why nothing resolves, and why it sounds improvised while being almost entirely written. The instrumental takes were captured fast, in a handful of hours, after all those months of drilling.",

    "The vocals are the album's other notorious feature. Van Vliet refused headphones and sang in the studio against whatever leaked through the control room glass, which is usually offered as the reason his delivery floats free of the band. French himself is sceptical: \"Oh, [Van Vliet] was in synch quite often, I thought.... The studio wasn't very good, so the leakage was probably sufficient.\" Zappa's role is likewise disputed — he wanted to record in the band's house, and by his own account Van Vliet \"got paranoid, accused me of trying to do the album on the cheap, and demanded to go into a real studio.\"",

    "It sold almost nothing in America and its reputation was built slowly by advocates. John Peel's verdict — \"if there has been anything ... which could be described as a work of art, then Trout Mask Replica is probably that work\" — did much of the early work; Rolling Stone now place it 60th among the greatest albums, and the Library of Congress added it to the National Recording Registry in 2010. The standard testimony is Matt Groening's: the worst thing he had ever heard, until around the seventh listen, when it became the greatest.",
  ],

  listeningNotes: [
    {
      label: "Two guitars in different metres",
      text: "Harkleroad and Cotton play parts that don't share a bar length, so they align and separate continuously. It sounds like collapse and is written down to the note.",
    },
    {
      label: "Vocals floating free of the band",
      text: "Van Vliet sang without headphones, against sound leaking through the glass, so his phrasing drifts against the music rather than sitting on it.",
    },
    {
      label: "A voice with enormous range",
      text: "He moves from a Howlin' Wolf growl to a shriek to a flat deadpan, often mid-line, treating the voice as a horn rather than a singing instrument.",
    },
    {
      label: "Bass clarinet and saxophone squalls",
      text: "Free-jazz horn playing erupts over what are structurally blues figures, the clearest sign of where the album's ideas about noise come from.",
    },
    {
      label: "Field recordings and spoken fragments",
      text: "Unaccompanied talking, tape noise and outdoor sound sit between and inside pieces, refusing the album any settled surface.",
    },
    {
      label: "Delta blues underneath",
      text: "Strip the arrangements and most of this is pre-war country blues — the same riffs and the same subject matter, dismantled and reassembled wrong on purpose.",
    },
  ],

  sources: [
    { title: "Trout Mask Replica — Wikipedia", url: "https://en.wikipedia.org/wiki/Trout_Mask_Replica" },
    { title: "Captain Beefheart's oddball masterpiece finally comes to streaming — Rolling Stone", url: "https://www.rollingstone.com/music/music-features/trout-mask-replica-captain-beefheart-streaming-1193345/" },
    { title: "National Recording Registry — Library of Congress", url: "https://www.loc.gov/programs/national-recording-preservation-board/recording-registry/complete-national-recording-registry-listing/" },
  ],

  influencedBy: [
    { artist: "Howlin' Wolf", album: "Moanin' in the Moonlight", year: "1959", note: "Van Vliet's growl is modelled closely on Wolf's, and the album's underlying material is Delta blues." },
    { artist: "Ornette Coleman", album: "The Shape of Jazz to Come", year: "1959", note: "Free jazz's rejection of fixed harmony and metre, applied here to a rock band's instrumentation." },
  ],

  influenced: [
    { artist: "The Residents", album: "Meet the Residents", year: "1974", note: "Deliberately unlistenable art-rock built from dismantled popular forms follows directly." },
    { artist: "Tom Waits", album: "Rain Dogs", year: "1985", note: "Waits's move into junkyard instrumentation and a ruined growl is openly indebted to Van Vliet." },
    { artist: "PJ Harvey", album: "Dry", year: "1992", note: "Played to Harvey as a child by her parents; the blues broken into angular, unlovely shapes is the inheritance." },
  ],
});
