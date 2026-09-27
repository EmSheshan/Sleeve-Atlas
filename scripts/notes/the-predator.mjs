import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Ice Cube",
  album: "The Predator",
  year: "1992",
  heading: "The Predator — Ice Cube (1992)",

  albumLine:
    "Released 17 November 1992 on Priority, produced by DJ Pooh, Sir Jinx, Torcha Chamba and DJ Muggs, and recorded across 1991 and 1992 at Echo Sound in Glendale and the Hit Factory in New York. It's West Coast gangsta rap turned into news reporting — his third solo album, and his commercial peak.",

  overview: [
    "O'Shea Jackson had been N.W.A's lead rapper and chief writer on \"Straight Outta Compton,\" writing much of what Eazy-E and Dr. Dre delivered, and left the group by early 1990 over money and over the management of Jerry Heller. His first two solo albums moved steadily further into political argument; the second, \"Death Certificate\" in 1991, drew accusations of antisemitism and anti-Asian and anti-white content, particularly a track aimed at Heller. He expressed regret about some of those choices in 2015. So he came into 1992 as the most articulate and most reliably inflammatory figure in rap.",

    "Then Los Angeles burned. On 29 April 1992 four LAPD officers were acquitted of assaulting Rodney King despite the beating having been filmed, and six days of uprising followed — more than fifty dead, thousands of buildings destroyed. Ice Cube had been describing the conditions that produced it for three years, in some cases on records that predicted almost exactly this. This album, arriving seven months later, is where he says so, addressing the verdict and the police directly.",

    "The result is the rare protest record that was also the biggest-selling album in the country. It entered the Billboard 200 at No. 1 with 193,000 copies — the first album ever to debut at the top of both the pop and the R&B/hip-hop charts — and has sold over two million in America. It did that partly on the strength of \"It Was a Good Day,\" a song about nothing much happening, built on an Isley Brothers sample, whose whole meaning depends on the fact that a day without violence is worth remarking on.",

    "Reviews were good rather than reverent — Entertainment Weekly called it \"Ice Cube's strongest, most cohesive work yet,\" Rolling Stone gave it two and a half stars, Q later placed it among the ninety best albums of the nineties. Its standing now rests on being the primary musical document of April 1992 by someone who lived it, and on the peculiar achievement of making that palatable enough to go double platinum.",
  ],

  listeningNotes: [
    {
      label: "News audio and film clips as connective tissue",
      text: "Broadcast fragments, dialogue samples and courtroom-adjacent soundbites are edited between and inside tracks, framing the album as a report on a specific event.",
    },
    {
      label: "Ice Cube's bark",
      text: "He raps hard on the beat in a hoarse, front-of-mouth voice with heavy consonants, closer to a street orator than a stylist. Clarity is prioritised over flow.",
    },
    {
      label: "Smooth seventies soul under hard subject matter",
      text: "Producers lift warm, mellow funk and soul loops — the Isley Brothers most famously — so the sound is inviting while the words are not. That contrast is the album's main trick.",
    },
    {
      label: "Live-sounding bass and organ",
      text: "Basslines are thick and rounded rather than programmed-brittle, with organ and electric piano padding the middle. It anticipates the G-funk production that dominated the following two years.",
    },
    {
      label: "Humour placed next to threat",
      text: "Jokes, boasts and comic asides sit in the same verse as descriptions of killing. The tonal whiplash is deliberate and is what makes the record hard to dismiss as one-note.",
    },
  ],

  sources: [
    { title: "The Predator (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Predator_(album)" },
    { title: "Ice Cube — Wikipedia", url: "https://en.wikipedia.org/wiki/Ice_Cube" },
    { title: "1992 Los Angeles riots — Wikipedia", url: "https://en.wikipedia.org/wiki/1992_Los_Angeles_riots" },
  ],

  influencedBy: [
    { artist: "N.W.A", album: "Straight Outta Compton", year: "1988", note: "His own former group, whose confrontations with the LAPD he wrote and which this record treats as having been proved right." },
    { artist: "Public Enemy", album: "It Takes a Nation of Millions to Hold Us Back", year: "1988", note: "The model of rap as political journalism, with news samples and a directly argumentative voice." },
  ],

  influenced: [
    { artist: "Dr. Dre", album: "The Chronic", year: "1992", note: "Released a month later; the warm funk-sample palette and live-feeling low end were being developed in the same scene at the same moment." },
    { artist: "Kendrick Lamar", album: "To Pimp a Butterfly", year: "2015", note: "The Los Angeles album that treats a specific act of police violence as its organising subject descends from this one." },
  ],
});
