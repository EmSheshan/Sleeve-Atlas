import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "The Stooges",
  album: "Raw Power",
  year: "1973",
  heading: "Raw Power — The Stooges (1973)",

  albumLine:
    "Released 7 February 1973 on Columbia, credited to Iggy and the Stooges, with singer David Bowie and singer Iggy Pop both listed as producers. It's proto-punk and hard rock, and it's the band's third studio album after The Stooges (1969) and Fun House (1970).",

  overview: [
    "The first two Stooges albums sold poorly and the band broke up. Pop, the singer, went to London to record with guitarist James Williamson, who had been the band's second guitarist from November 1970 to July 1971. Per Wikipedia, no suitable English rhythm section turned up, so Williamson suggested that the Stooges' original guitarist Ron Asheton and his brother, drummer Scott Asheton, fly over. Ron reluctantly moved to bass. Pop, who had signed to Columbia as a solo artist, was backed by the management company MainMan, run by Tony Defries; MainMan later dropped the band, and Columbia dropped them after a year of touring. They split in February 1974.",

    "After demos at two London studios, the album was recorded at CBS Studios in London between 10 September and 6 October 1972. Wikipedia says Pop first mixed it himself, putting most instruments in one channel and vocals in the other; Defries told him Bowie would remix it, and Bowie did seven songs in a day at Western Sound Recorders in Los Angeles in October 1972, with Pop keeping his own mix of one. Writer Madeline Bocaro dates Pop's first attempt to 1974, which conflicts with Wikipedia's 1972, and the discrepancy is unresolved here.",

    "The mix has been argued over ever since. Wikipedia says Bowie claimed there was \"nothing to mix\" with only three tracks to work with, yet a 2010 documentary by film-maker Morgan Neville showed every instrument on its own track. Williamson told Classic Rock that Bowie's is \"the best mix. The historical mix,\" Bocaro reports, while Pop said the original mix \"was like a dog whistle they couldn't hear.\" In 1997, under label pressure, Pop made his own remix. Critic Mark Deming of AllMusic, quoted by Martin Winfree, felt Pop's was \"painfully harsh and distorted\" next to Bowie's \"tamer but more dynamic\" version; critic Robert Christgau called the restored bass and vocals \"a quantum improvement.\"",

    "It sold modestly at first, reaching only No. 183 on the Billboard 200. Critic Lenny Kaye of Rolling Stone praised the studio work, and Wikipedia relays critic Dave Marsh's claim that it was already \"the best album of the '70s.\" Rolling Stone placed it 125th on its 2003 list of the 500 greatest albums. Per Wikipedia, Sex Pistols guitarist Steve Jones learned guitar by playing along to it.",
  ],

  listeningNotes: [
    {
      label: "Williamson's riff-first guitar",
      text: "Wikipedia quotes writer Brett Callwood saying the band moved from the \"groove-ridden, feel-based songs\" of its first two albums towards anthemic hard rock shaped by Williamson. \"Search and Destroy\" is the clearest case.",
    },
    {
      label: "Acoustic guitars for contrast",
      text: "Williamson also plays acoustic on two tracks. Critic Steve Seachrist of Creative Loafing Tampa notes that the acoustic guitars vary the textures of otherwise primal, riff-based rock.",
    },
    {
      label: "Ron Asheton on bass",
      text: "A founding guitarist moved to bass reluctantly, and the rhythm section is locked to Scott Asheton's drumming. The low end carries more weight in some mixes than others.",
    },
    {
      label: "Pop's voice and unusual instruments",
      text: "Besides singing, Pop plays celesta, piano and tambourine. Small touches like these set the album apart from plain guitar rock.",
    },
    {
      label: "Two mixes, two moods",
      text: "Bowie's is thinner and more dynamic; Pop's 1997 remix is dense and extremely loud — Wikipedia reports criticism of its volume. Seachrist prefers Pop's, saying it sounds like a band playing; the verdict depends on which version you hear first.",
    },
  ],

  sources: [
    { title: "Raw Power — Wikipedia", url: "https://en.wikipedia.org/wiki/Raw_Power" },
    { title: "CD Review: Iggy and the Stooges, Raw Power Legacy Edition — Creative Loafing Tampa (Steve Seachrist)", url: "https://www.cltampa.com/music-2/cd-review-iggy-and-the-stooges-raw-power-2cd-legacy-edition-12286906/" },
    { title: "Raw Power 45th Anniversary — Madeline Bocaro", url: "https://madelinex.com/2018/02/07/raw-power-45th-anniversary/" },
    { title: "Stooges: Raw Power — Underappreciated Rock (Martin Winfree)", url: "https://underappreciatedrock.org/stooges-3" },
  ],

  influencedBy: [],

  influenced: [
    { artist: "Sex Pistols", album: "Never Mind the Bollocks, Here's the Sex Pistols", year: "1977", note: "Per Wikipedia, guitarist Steve Jones learned to play guitar by playing along to this album." },
  ],
});
