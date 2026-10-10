import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Steely Dan",
  album: "Aja",
  year: "1977",
  heading: "Aja — Steely Dan (1977)",

  albumLine:
    "Released 23 September 1977 on ABC Records, produced by longtime collaborator Gary Katz and engineered by Roger Nichols and Bill Schnee. It's a glossy, jazz-soaked strain of rock built on complex chords and studio perfectionism, and it's Steely Dan's sixth album and commercial peak, the one that turned Walter Becker and Donald Fagen's songwriting partnership into a full-blown studio project rather than a touring band.",

  overview: [
    "By the mid-1970s Becker and Fagen had quietly stopped being a band in any conventional sense. They found live performance frustrating next to the control a studio offered, and after 1974's Pretzel Logic they gave up the road almost entirely, working as a songwriting and production team that hired whichever musicians a given track needed. Aja pushed that logic further: nearly forty session players passed through, drawn from West Coast session work and New York jazz, including saxophonist Wayne Shorter, drummer Steve Gadd, bassist Chuck Rainey and guitarist Larry Carlton.",

    "Becker and Fagen were serious, lifelong listeners to jazz from the 1920s through the mid-1960s, and Aja is where that listening surfaces most directly — in extended harmonic voicings and a title track built from separately composed sections stitched together around a Wayne Shorter solo and Steve Gadd's drumming. The album arrived as disco and punk pulled pop in opposite directions, and Steely Dan answered with something that belonged to neither: dense, cool, and built for repeated close listening rather than a dancefloor or a stage.",

    "That precision came from a punishing process. Engineer Elliot Scheiner later said \"every track, every overdub, had to be the perfect overdub — they didn't settle for anything,\" and the pursuit of \"Peg\" became the clearest example: Becker and Fagen auditioned somewhere between five and eight guitarists over about a week for its sixteen-bar solo, rejecting takes from players including Robben Ford, Elliott Randall and Rick Derringer, before Jay Graydon — reportedly the seventh to try — landed it after Fagen told him to \"try to play the blues.\"",

    "Contemporary critics were divided — critic Robert Christgau said he initially hated the record even as he admitted it was stretching him — but Aja became Steely Dan's best-selling album, reaching No. 3 on the Billboard 200, going platinum, and winning the Grammy for Best Engineered Recording in 1978. It was later inducted into the Grammy Hall of Fame and the National Recording Registry. Its reputation as a reference disc for audio engineers and its role as a high-water mark of what would later be labeled yacht rock have only grown, and its sound has been cited directly by acts as different as De La Soul and Daft Punk.",
  ],

  listeningNotes: [
    {
      label: "The constantly shifting chord voicings",
      text: "Where most rock songs sit on a handful of simple chords, these arrangements move through extended jazz harmony — added ninths and elevenths — that keeps resolving somewhere unexpected rather than back to the obvious root.",
    },
    {
      label: "A solo built by elimination",
      text: "The guitar break on the big single was assembled only after several guitarists' takes were recorded and rejected over about a week; the one that survived was deliberately pushed toward a bluesier, simpler phrasing than the jazzier ideas that came before it.",
    },
    {
      label: "The title track's stitched-together structure",
      text: "The eight-minute centerpiece isn't one continuous take but separately composed sections joined together, built around an extended saxophone solo and a drum performance that shifts time feel partway through rather than holding one groove throughout.",
    },
    {
      label: "Studio musicians treated like soloists",
      text: "Jazz-session players were given room to improvise rather than just fill in parts, which is why individual performances register as distinct personalities inside otherwise tightly arranged songs.",
    },
    {
      label: "A clean, uncluttered mix",
      text: "Despite the dozens of musicians who passed through, the final mixes stay spare and separated — each instrument audible on its own — part of why engineers still use this record to test speakers and systems.",
    },
  ],

  sources: [
    { title: "Aja (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Aja_(album)" },
    { title: "Steely Dan's 'Aja' at 40: The Inside Story of the Band's Most Legendary Guitar Solo — Newsweek", url: "https://www.newsweek.com/2017/10/13/steely-dan-walter-becker-peg-aja-670103.html" },
    { title: "The jazz musicians who shaped Walter Becker and Steely Dan — Far Out Magazine", url: "https://faroutmagazine.co.uk/jazz-musicians-who-shaped-walter-becker-and-steely-dan/" },
  ],

  influencedBy: [
    { artist: "Horace Silver", album: "Song for My Father", year: "1964", note: "Becker and Fagen drew directly on Horace Silver's hard-bop harmonic vocabulary and bass patterns elsewhere in their catalogue, the same jazz grammar audible in Aja's extended chord voicings." },
  ],

  influenced: [
    { artist: "De La Soul", album: "3 Feet High and Rising", year: "1989", note: "Sampled the guitar line from \"Peg\" directly for \"Eye Know,\" one of the most recognizable Steely Dan samples in hip-hop." },
    { artist: "Daft Punk", album: "Random Access Memories", year: "2013", note: "The duo said they were explicitly chasing a Steely Dan sound, hiring top-tier session musicians the way Aja's sessions had, to get a similarly glossy, meticulous studio record." },
  ],
});
