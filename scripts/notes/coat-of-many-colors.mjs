import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Dolly Parton",
  album: "Coat Of Many Colors",
  year: "1971",

  heading: "Coat Of Many Colors — Dolly Parton (1971)",

  albumLine:
    "Released 4 October 1971 on RCA Victor, produced by Bob Ferguson and cut mostly at RCA Studio B in Nashville that April. Ten country songs in twenty-seven minutes — seven by Dolly Parton, three by Porter Wagoner. Her eighth solo album, and the one usually treated as the start of her real career.",

  overview: [
    "Parton had been in Nashville since 1964, having moved there out of east Tennessee to be a songwriter rather than a singer. Her break came from Porter Wagoner, a veteran hitmaker who put her on his syndicated television variety show in 1967. The arrangement made her famous and boxed her in: Wagoner helped choose her material and ran the sessions, \"making sure that they got it the way that he wanted,\" as she later put it. Writing most of a record herself was how she began getting out from under that, and 1971 — three albums in one year — is when it happened.",

    "The title song came out of her childhood in Sevierville, near the Great Smokies: her mother Avie Lee sewed her a coat from donated rags, telling her the biblical story of Joseph's many-coloured garment as she worked, and the other children laughed at it. \"I went to school thinking I looked like Joseph,\" Parton has said. The detail she returns to is her mother's correction — \"I don't want to ever hear you say that we're poor. We are rich in kindness and love and understanding.\" She wrote the lyric on Wagoner's tour bus on the back of a dry-cleaning receipt from one of his stage suits, having no paper to hand; he later had it framed. Her memoir places the writing in 1969, two years before the session, though accounts vary.",

    "Around it sit songs that are not sentimental at all — a love triangle in which a girl's mother runs off with the travelling salesman, mountain ballads using weather for heartbreak, and one bluesy, funk-leaning track she had to argue for. \"I remember kind of having to fight a little bit,\" she said of being told it wasn't country enough; \"Yeah, but it's soulful.\"",

    "Trade reviews were warm — Billboard predicted her biggest-selling album yet — and it reached No. 7 on the country albums chart, bringing her first CMA Album of the Year nomination. Its standing has grown far beyond that. Critic Robert Christgau called side one \"genius of a purity you never encounter in rock anymore\"; Stephen Thomas Erlewine of AllMusic wrote that it \"announced Parton as a major talent in her own right, not merely a duet partner\". The title song entered the Library of Congress's National Recording Registry in 2011, and Parton has named it her favourite of everything she's written. It has also been taken up as a pride anthem — what it actually argues is that being laughed at for what you have is the other person's failure.",
  ],

  listeningNotes: [
    {
      label: "Buck Trent's electric banjo",
      text: "Banjo player Buck Trent used an electrified instrument, which rings harder and sustains longer than an acoustic one, giving several tracks a bright metallic edge ordinary bluegrass banjo doesn't have.",
    },
    {
      label: "Pedal steel answering the vocal line",
      text: "Steel guitarist Pete Drake plays responses rather than pads, filling the gaps at the ends of her phrases. It's a conversation, and it keeps short songs from feeling empty.",
    },
    {
      label: "Fiddle as a second voice",
      text: "Three fiddlers appear across the sessions — Johnny Gimble, Mack Magaha and Buddy Spicher. The fiddle tracks her melody closely rather than decorating it, which is where the mountain-music feel comes from.",
    },
    {
      label: "Smooth group harmony behind a mountain voice",
      text: "The Nashville Edition, a session vocal group, sing polished close harmony underneath her hard, high, heavily vibratoed lead. That contrast is the Nashville Sound compromise in miniature.",
    },
    {
      label: "The one that isn't country",
      text: "\"Here I Am\" leans bluesy and rhythmic, with the band pushing rather than supporting. It's the sound of her overruling the room.",
    },
  ],

  sources: [
    { title: "How Dolly Parton Took Control of Her Art With 'Coat of Many Colors' — Rolling Stone", url: "https://ca.rollingstone.com/how-dolly-parton-took-control-of-her-art-with-coat-of-many-colors" },
    { title: "Coat of Many Colors (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Coat_of_Many_Colors" },
    { title: "Coat of Many Colors (song) — Wikipedia", url: "https://en.wikipedia.org/wiki/Coat_of_Many_Colors_(song)" },
  ],

  influencedBy: [
    { artist: "Porter Wagoner", album: "The Cold Hard Facts of Life", year: "1967", note: "Wagoner, the singer who gave Parton her television break, wrote three of this album's songs and shaped its sessions; his plain-told narrative story-song is the form she works in and then outgrows here." },
  ],

  influenced: [
    { artist: "Emmylou Harris", album: "Pieces of the Sky", year: "1975", note: "Harris, a singer and bandleader central to country-rock, recorded the title song for her Reprise debut, carrying Parton's unadorned mountain-ballad writing to a rock audience." },
    { artist: "Eva Cassidy", album: "Somewhere", year: "2008", note: "Cassidy, a singer whose work was issued mostly after her death, recorded the title song solo-voice-and-guitar, stripping it back to the storytelling." },
  ],
});
