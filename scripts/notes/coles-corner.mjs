import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Richard Hawley",
  album: "Coles Corner",
  year: "2005",
  heading: "Coles Corner — Richard Hawley (2005)",

  albumLine:
    "Released 5 September 2005 on Mute, produced by Hawley with Colin Elliot and Mike Timm at Yellow Arch Studios in Sheffield. Forty-six minutes of chamber pop built from fifties ballads, rockabilly, country and jazz — his fourth album, and the one that made his name.",

  overview: [
    "The title is a real place: the corner of Fargate and Church Street in Sheffield, where the Cole Brothers department store stood until 1963, and which generations of Sheffielders used as the spot to meet a first date. Naming an album after a shop that moved away before he was born tells you what the record is doing — it is about a city's memory of itself, written by someone who never left.",

    "Hawley had spent the nineties as a sideman: guitarist in the Longpigs, then a touring and recording member of Pulp. That history matters because it explains the playing. He is a genuinely excellent guitarist in a very specific idiom — clean, reverbed, fifties-tone lead lines — and the album is arranged around that sound rather than around a singer-songwriter's acoustic.",

    "In 2005 this was an odd proposition. British guitar music was mid-landfill-indie, all angular riffs and shouted verses, and Hawley put out a record of orchestrated ballads sung in a baritone croon with strings and vibraphone. What keeps it from being pastiche is that he means it: PopMatters put its finger on it, crediting his \"complete lack of irony and bombast.\" Pitchfork noted the songs had \"melodic muscle to stand up next to standards.\"",

    "It reached No. 16 in Britain, went gold, scored 85 on Metacritic and was nominated for the 2006 Mercury Prize. It lost to Arctic Monkeys, whose singer Alex Turner accepted the award by shouting \"Somebody call 999, Richard Hawley's been robbed!\" — two Sheffield acts, twenty years apart, and Hawley has since said the remark was extremely positive for his career and read it as shared Sheffield humour rather than sympathy.",
  ],

  listeningNotes: [
    {
      label: "Fifties guitar tone",
      text: "Clean, heavily reverbed lead lines played on hollow-body guitars, closer to Duane Eddy or Chet Atkins than to anything from his own era.",
    },
    {
      label: "A baritone croon",
      text: "He sings low, steady and unhurried, with no rasp and no strain — the delivery of a ballad singer rather than an indie frontman.",
    },
    {
      label: "Strings and vibraphone",
      text: "Orchestral arrangements and soft mallet percussion sit behind most tracks, giving the record the texture of a late-night radio broadcast.",
    },
    {
      label: "Recorded in Sheffield",
      text: "Made at a local studio with local players rather than in London, which is consistent with an album about refusing to leave.",
    },
    {
      label: "Slow tempos throughout",
      text: "Almost nothing here moves quickly, and nothing is hurried into a chorus. The album commits entirely to one pace, which is what lets the arrangements open out and the reverb decay properly between phrases.",
    },
  ],

  sources: [
    { title: "Coles Corner (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Coles_Corner_(album)" },
    { title: "Coles Corner — Wikipedia", url: "https://en.wikipedia.org/wiki/Coles_Corner" },
    { title: "Arctic Monkeys win 2006 Mercury Music Prize — NME", url: "https://www.nme.com/news/music/arctic-monkeys-523-1356678" },
  ],

  influencedBy: [
    { artist: "Roy Orbison", album: "Lonely and Blue", year: "1961", note: "The model for a big, unhurried ballad voice over orchestrated arrangements with a guitar at the centre." },
    { artist: "Scott Walker", album: "Scott 4", year: "1969", note: "A British singer taking the orchestral baritone ballad entirely seriously rather than as pastiche." },
    { artist: "Pulp", album: "Different Class", year: "1995", note: "Hawley played with Pulp; the tradition of writing Sheffield itself as a subject runs straight through both." },
  ],

  influenced: [
    { artist: "The Last Shadow Puppets", album: "The Age Of The Understatement", year: "2008", note: "Alex Turner's move into orchestral sixties balladry follows a Sheffield contemporary who had just done it; Hawley later played with Arctic Monkeys." },
  ],
});
