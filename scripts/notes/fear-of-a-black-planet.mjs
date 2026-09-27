import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Public Enemy",
  album: "Fear Of A Black Planet",
  year: "1990",
  heading: "Fear of a Black Planet — Public Enemy (1990)",

  albumLine:
    "Released 10 April 1990 on Def Jam and Columbia, produced by the Bomb Squad across three New York studios between June 1989 and February 1990. It's hip-hop built from hundreds of layered samples — Public Enemy's third album, and the densest record the form has produced.",

  overview: [
    "The production is the argument. The Bomb Squad — Hank Shocklee, his brother Keith, Eric \"Vietnam\" Sadler and Chuck D — assembled these tracks from somewhere between 150 and 200 samples, stacking fragments of funk, soul, speech, sirens and noise until individual sources stop being identifiable. Chuck D has described the method as painterly: \"We approach every record like it was a painting.\" He also called Hank Shocklee \"the Phil Spector of hip-hop,\" which is about right — the comparison is to density, not to prettiness.",

    "That method had a shelf life, and this album is part of why. It was made just before the sampling lawsuits of the early nineties established that uncleared samples had to be licensed. By modern rules the record would be economically impossible; Public Enemy have estimated they'd lose around five dollars per copy sold. It stands as a document of a brief window in which a form of collage was legally available and then wasn't.",

    "Lyrically it works through institutional racism, media representation, interracial relationships and Black consciousness, drawing on the writings of Dr Frances Cress Welsing. It's also shadowed by a real crisis: in May 1989 Professor Griff, the group's Minister of Information, gave an interview to the Washington Times making antisemitic claims. The backlash was severe, Chuck D dismissed him under pressure, and Def Jam's Bill Adler has said the episode partly fuelled the album's writing. That should be stated plainly rather than elided — the record was made by a group in the middle of a controversy it had caused.",

    "\"Fight the Power,\" written for Spike Lee's Do the Right Thing and released the previous summer, anchors it. The album reached No. 10 in the US and No. 4 in the UK, sold over two million domestically, and placed third in the Village Voice's critics' poll for 1990. The Library of Congress added it to the National Recording Registry in 2004.",
  ],

  listeningNotes: [
    {
      label: "Samples stacked past recognition",
      text: "Dozens of fragments run simultaneously, none given room to be identified. The texture is the composition — you're hearing a wall assembled from pieces rather than a loop with things on top.",
    },
    {
      label: "Noise treated as musical",
      text: "Sirens, squeals, feedback and atonal horn stabs are arranged as deliberately as the drums. The abrasiveness is structural, not incidental.",
    },
    {
      label: "Chuck D's delivery",
      text: "A low, declamatory, slightly behind-the-beat voice pitched at public-address volume. He rarely varies cadence — the authority comes from relentlessness.",
    },
    {
      label: "Flavor Flav as counterweight",
      text: "His higher, comic, interrupting voice cuts across the severity, and he fronts whole tracks. Without him the album would be unrelieved, which is exactly why he's there.",
    },
    {
      label: "Speech as instrument",
      text: "Snatches of news broadcasts, sermons and interviews are cut in as rhythmic elements, so documentary sound and music occupy the same layer.",
    },
    {
      label: "Tracks that run into each other",
      text: "Songs are sequenced with minimal gaps and shared material, making the album play as one continuous, exhausting block rather than a series of singles.",
    },
  ],

  sources: [
    { title: "Fear of a Black Planet — Wikipedia", url: "https://en.wikipedia.org/wiki/Fear_of_a_Black_Planet" },
    { title: "Public Enemy — Wikipedia", url: "https://en.wikipedia.org/wiki/Public_Enemy_(band)" },
    { title: "National Recording Registry — Library of Congress", url: "https://www.loc.gov/programs/national-recording-preservation-board/recording-registry/complete-national-recording-registry-listing/" },
  ],

  influencedBy: [
    { artist: "James Brown", album: "In the Jungle Groove", year: "1986", note: "The compilation whose breaks became the most sampled material in hip-hop, and a foundation of the Bomb Squad's palette." },
    { artist: "Public Enemy", album: "It Takes a Nation of Millions to Hold Us Back", year: "1988", note: "Their own previous album, which established the dense sampling method this one pushes to its limit." },
  ],

  influenced: [
    { artist: "Rage Against the Machine", album: "Rage Against the Machine", year: "1992", note: "Explicitly modelled on Public Enemy's fusion of political confrontation with abrasive noise." },
    { artist: "Kendrick Lamar", album: "To Pimp a Butterfly", year: "2015", note: "The lineage of album-length Black political argument in hip-hop, built with dense live and sampled collage." },
    { artist: "The Avalanches", album: "Since I Left You", year: "2000", note: "Sample-collage taken as an art form in itself — a technique this record demonstrated the ceiling of." },
  ],
});
