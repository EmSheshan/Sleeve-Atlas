import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Kid Rock",
  album: "Devil Without A Cause",
  year: "1998",
  heading: "Devil Without a Cause — Kid Rock (1998)",

  albumLine:
    "Released 18 August 1998 on Lava and Atlantic, recorded at the White Room in Detroit between September 1997 and July 1998. It's rap rock with country, metal and Southern rock pulled into it — his fourth album, and one that sold fourteen million copies after three that sold nothing.",

  overview: [
    "Robert James Ritchie was from Romeo, Michigan, the son of a car dealer, and had been a hip-hop act first: breakdancing, DJing, rapping with the Beast Crew, and signed to Jive at seventeen on D-Nice's recommendation. His 1990 debut went nowhere and Jive dropped him — by the producer Mike E. Clark's account partly because of unflattering comparisons to Vanilla Ice. Two more albums failed. By 1994 he had given up on being a rapper with a DJ and built a rock band instead, Twisted Brown Trucker, with the rapper Joe C. as his hype man.",

    "That band is why this record worked where rap metal usually did not. Most of its contemporaries bolted a rapper onto a riff; here the group plays live, swings, and moves between idioms without announcing the change, which is what AllMusic's Stephen Thomas Erlewine meant in calling it \"the great hard rock album of the late '90s\" with an \"organic, integrated sound.\" Detroit is audible in it: a city with both a hip-hop scene and a hard rock tradition and very little industry interest in either. Eminem was recording \"The Slim Shady LP\" in the same building and turns up here scratching and rapping a verse.",

    "The album's other reason for existing is class. 1998's alternative rock was largely suburban and self-serious; Ritchie's persona was a deliberately vulgar white-trash caricature — trailers, whisky, cheap boasts — pitched at an audience the industry had decided did not read as cool. That was a real gap in the market and he filled it completely. It reached No. 4 and eventually went diamond.",

    "The reception split along exactly that line, and still does. Robert Christgau gave it an A−, Rolling Stone four stars, and Pitchfork 1.3 out of 10. Both reactions are legible. Its most durable consequence was musical rather than critical: the country-rap lane it opened became a genuine commercial format, with Jason Aldean among those citing \"Cowboy\" as an influence. Joe C., born Joseph Michael Calleja, whose celiac disease limited his height to 3 feet 9 inches and required daily dialysis, died in his sleep in November 2000, aged 26. Ritchie's own trajectory since — libertarian, then a prominent Republican and Trump supporter — has made the album harder for some listeners to return to than it was in 1998.",
  ],

  listeningNotes: [
    {
      label: "A real band, not a loop",
      text: "Twisted Brown Trucker play live drums, bass, two guitars and turntables together, so the grooves push and drag in a way programmed rap metal does not.",
    },
    {
      label: "Steel guitar and fiddle next to metal riffs",
      text: "Country instrumentation appears without irony inside distorted rock arrangements, years before that combination was a commercial category.",
    },
    {
      label: "Turntable scratching as a lead instrument",
      text: "DJ scratches punctuate choruses and answer vocal lines, a hip-hop habit retained from his actual first career rather than added as decoration.",
    },
    {
      label: "Joe C.'s voice as contrast",
      text: "His high, nasal, rapid delivery cuts against Ritchie's drawl, and the trade-offs function as two characters rather than a guest spot.",
    },
    {
      label: "Ritchie singing as often as rapping",
      text: "He moves between rapped verses and sung, gravelly rock choruses within tracks, which is the mechanism that got the record on rock radio.",
    },
    {
      label: "Detroit rap production underneath",
      text: "The beats are heavy, mid-tempo and sample-informed rather than metal-derived, which is why the album grooves where its imitators chug.",
    },
  ],

  sources: [
    { title: "Devil Without a Cause — Wikipedia", url: "https://en.wikipedia.org/wiki/Devil_Without_a_Cause" },
    { title: "Kid Rock — Wikipedia", url: "https://en.wikipedia.org/wiki/Kid_Rock" },
    { title: "Joe C. — Wikipedia", url: "https://en.wikipedia.org/wiki/Joe_C" },
  ],

  influencedBy: [
    { artist: "Beastie Boys", album: "Licensed to Ill", year: "1986", note: "The original template of white rappers over rock riffs played as comedy and boast at once." },
    { artist: "Run-DMC", album: "Raising Hell", year: "1986", note: "Established rap and hard rock as a single commercial proposition, which Ritchie had been chasing since he was a teenager." },
    { artist: "Lynyrd Skynyrd", album: "(Pronounced 'Lĕh-'nérd 'Skin-'nérd)", year: "1973", note: "The Southern rock instrumentation and the defiantly regional working-class persona." },
  ],

  influenced: [
    { artist: "Eminem", album: "The Marshall Mathers LP", year: "2000", note: "They recorded in the same Detroit studio at the same time, and Eminem appears here; the city's mainstream breakthrough is shared ground." },
    { artist: "Jason Aldean", album: "My Kinda Party", year: "2010", note: "Aldean has cited \"Cowboy\" as an influence, and the country-rap format this album prototyped became a Nashville staple." },
  ],
});
