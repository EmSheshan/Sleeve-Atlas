import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Crosby, Stills & Nash",
  album: "Crosby, Stills & Nash",
  year: "1969",
  heading: "Crosby, Stills & Nash — Crosby, Stills & Nash (1969)",

  albumLine:
    "Released 29 May 1969 on Atlantic, recorded that February and March at Wally Heider's studio in Hollywood and self-produced by the trio with engineer Bill Halverson. It's three refugees from three broken bands building a sound almost entirely out of close vocal harmony and acoustic guitars.",

  overview: [
    "Each of them arrived wrecked from somewhere else. David Crosby was fired from the Byrds in October 1967, mid-session, after fights over his Monterey Pop stage patter and his insistence on recording \"Triad\" over safer material. Stephen Stills watched Buffalo Springfield dissolve in May 1968 under his own feud with Neil Young. Graham Nash quit the Hollies that December, worn out from a band that kept rejecting his new songs as uncommercial — \"Marrakesh Express\" among them. None of the three set out to form a group. By most accounts, Crosby and Nash remember singing together for the first time at Joni Mitchell's house in Laurel Canyon, running through Stills' \"You Don't Have to Cry\" until Nash found a third part on top; Stills places the same moment at Cass Elliot's dining-room table. The disagreement over the room doesn't touch the point — the blend arrived before any plan did.",

    "What set the record apart from the psychedelic and hard-rock albums around it was that nobody was the leader. All three wrote and all three sang lead, so the album moves between genuinely different voices — Crosby's modal, unresolved \"Guinnevere,\" Stills' extended, confessional \"Suite: Judy Blue Eyes\" (written about his breakup with Judy Collins), Nash's plain, hooky \"Marrakesh Express.\" The arrangements stay mostly acoustic, built to leave room for the vocals rather than compete with them.",

    "They produced it themselves, with Bill Halverson engineering his first full album. The harmonies were not stacked from separate takes — the three of them gathered around a single tube microphone and sang live together, having already rehearsed the parts for months at houses and clubs before they ever reached a studio. Halverson has described riding the fader levels during mixing so the three vocal tracks were never perfectly equal, which kept the blend from phasing against itself. Stills reportedly cut the entire acoustic guitar part for \"Suite: Judy Blue Eyes\" in one take.",

    "The album reached No. 6 on the Billboard 200 and went multi-platinum; \"Marrakesh Express\" and \"Suite: Judy Blue Eyes\" both charted, and the group won the Grammy for Best New Artist. Its influence on the Laurel Canyon singer-songwriter scene that followed — the Eagles, Jackson Browne, America — is treated by most critics as close to foundational.",
  ],

  listeningNotes: [
    {
      label: "One microphone, three voices",
      text: "The vocals were cut live around a single mic rather than overdubbed separately, which is why the blend sounds fused rather than layered.",
    },
    {
      label: "Three songwriters, no leader",
      text: "Listen for how different Crosby's, Stills', and Nash's songs sound from each other — the album never settles into one person's style.",
    },
    {
      label: "\"Suite: Judy Blue Eyes\" in sections",
      text: "Stills' opener shifts key, tempo, and mood across four distinct parts inside one song, closer to a classical suite than a pop single.",
    },
    {
      label: "Acoustic guitars doing the work of a band",
      text: "With little drumming or electric lead, the interlocking acoustic guitar parts — Stills' especially — carry the rhythmic momentum.",
    },
    {
      label: "\"Marrakesh Express\" as the rejected single",
      text: "Nash wrote it for the Hollies, who turned it down as too uncommercial; hearing it land as CSN's breezy first single is the clearest measure of what changed.",
    },
    {
      label: "Nash's high part on top",
      text: "Nash typically sings the highest line, Crosby finds the middle harmony, and Stills anchors the tonic — the arrangement that supposedly clicked the first time they sang together.",
    },
  ],

  sources: [
    { title: "Crosby, Stills & Nash (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Crosby,_Stills_%26_Nash_(album)" },
    { title: "Classic Tracks: Crosby, Stills & Nash 'Suite: Judy Blue Eyes' — Sound on Sound", url: "https://www.soundonsound.com/techniques/classic-tracks-crosby-stills-nash-suite-judy-blue-eyes" },
    { title: "On This Day in 1968, an Impromptu Jam at Joni Mitchell's House Led to the Formation of Crosby, Stills & Nash — American Songwriter", url: "https://americansongwriter.com/on-this-day-in-1968-an-impromptu-jam-at-joni-mitchells-house-led-to-the-formation-of-crosby-stills-nash/" },
    { title: "Crosby, Stills & Nash — AllMusic", url: "https://www.allmusic.com/album/crosby-stills-nash-mw0000650036" },
    { title: "The only Graham Nash song The Hollies couldn't figure out — Far Out Magazine", url: "https://faroutmagazine.co.uk/song-graham-nash-thought-never-worked-for-hollies/" },
  ],

  influencedBy: [
    { artist: "The Byrds", album: "The Notorious Byrd Brothers", year: "1968", note: "Crosby was fired mid-session, but the album's dense vocal stacking and sense of harmony as the main event carried straight into CSN." },
    { artist: "Buffalo Springfield", album: "Buffalo Springfield Again", year: "1967", note: "Stills' ambition for extended, multi-section songwriting — the template for \"Suite: Judy Blue Eyes\" — is already audible here." },
    { artist: "The Hollies", album: "Butterfly", year: "1967", note: "Nash's push toward lusher, more adventurous pop harmony on the Hollies' most psychedelic record was the direction his own band kept blocking." },
  ],

  influenced: [
    { artist: "America", album: "America", year: "1971", note: "Formed around explicit CSN-style three-part harmony and strummed acoustic arrangements; critics have compared songs directly to \"Guinnevere\" and \"Suite: Judy Blue Eyes.\"" },
    { artist: "Eagles", album: "Eagles", year: "1972", note: "Took the close-harmony, acoustic-rooted California sound and turned it into the commercial template for 1970s soft rock." },
    { artist: "Jackson Browne", album: "Jackson Browne", year: "1972", note: "Part of the same Laurel Canyon singer-songwriter circle that CSN's success helped open up to major labels." },
  ],
});
