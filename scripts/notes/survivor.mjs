import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Destiny's Child",
  album: "Survivor",
  year: "2001",
  heading: "Survivor — Destiny's Child (2001)",

  albumLine:
    "Released 1 May 2001 in the US on Columbia (25 April in Japan), recorded between May 2000 and February 2001 and mostly cut at SugarHill in Houston. Singer Beyoncé Knowles produced or co-produced all but one of its tracks and co-wrote seventeen of eighteen, working with Anthony Dent, Rob Fusari, Walter Afanasieff and the Trackmasters. R&B and pop; the group's third album, and the first by the trio that saw them out.",

  overview: [
    "The record exists because the group nearly didn't. In December 1999 LeToya Luckett and LaTavia Roberson, two of the four originals, tried to break with manager Mathew Knowles, saying he kept too much of the group's money and favoured his daughter Beyoncé and singer Kelly Rowland. They learned of their replacement from a video premiere in February 2000, and sued the next month. Singer Michelle Williams stayed; Farrah Franklin, hired alongside her, left in July after five months, saying she could not influence decisions.",

    "The title came from a joke. A radio station compared the group to the reality show — \"trying to see which member is going to last the longest on the island\" — and Beyoncé decided to \"use that negative thing and turn it into a positive thing.\" She wrote fast and angry: \"I wrote it quickly because I was frustrated.\" She also aimed it outward: \"For me, it was all about what survival means for women.\" Luckett and Roberson took it personally and sued again in February 2002 over a line about sales figures; it settled out of court that July.",

    "Producers mailed in backing tracks and Beyoncé picked through them in the car. \"She would immediately start writing lyrics for the song and finish it right there in front of me,\" engineer Dan Workman said of the SugarHill sessions. \"Then she taught the song to Kelly and Michelle, and all three of them worked on the vocals together.\" Rowland and Williams co-wrote only the closing track. Beyoncé hadn't planned on running it: \"I only wanted to do like three songs.\"",

    "It opened at No. 1 in America with 663,000 copies, Columbia's biggest first week to that point, and was the first studio album by an American girl group to top the UK chart. Reviews split at a Metacritic 63: critic Natalie Nichols in the Los Angeles Times heard \"a generic hip-hop music box of ticking percussion,\" while Petridis found \"a rare individuality, and a hint of genius, hidden in its grooves.\" The title track won the Grammy for Best R&B Performance by a Duo or Group; the album was nominated and lost. Later writing is warmer: critic Sasha Geffen called it Beyoncé's \"turning point from musician to global phenomenon.\"",
  ],

  listeningNotes: [
    {
      label: "Three voices treated as one instrument",
      text: "Beyoncé taught finished songs to Rowland and Williams in the room and the three worked the parts out together, so leads hand off mid-song instead of orbiting a star. Rowland carries both verses of \"Bootylicious\"; Williams takes the bridge.",
    },
    {
      label: "A sampled riff nobody was allowed to replay",
      text: "The hook of \"Bootylicious\" is singer Stevie Nicks' \"Edge of Seventeen\" lifted whole. Producer Rob Fusari wanted to re-record it to keep the publishing — \"It was Guitar 101! One note!\" — and Mathew Knowles refused, so Nicks holds a writing credit.",
    },
    {
      label: "Stop-start rhythm under the vocal",
      text: "Critic Chuck Taylor of Billboard heard a \"skittish stop- and-start beat\" in the title track; the vocals land in clipped bursts against looped strings rather than riding a groove.",
    },
    {
      label: "An a cappella gospel block",
      text: "\"Gospel Medley\" stitches a piece by gospel artist Kirk Franklin to one by composer Richard Smallwood and a hymn, with no backing at all. Beyoncé arranged it, dedicated to late manager Andretta Tillman.",
    },
    {
      label: "A chanted interjection added last",
      text: "The shouted punctuation in the title chorus was Mathew Knowles' late addition, after he walked into the session and decided a chant would pull an audience in.",
    },
  ],

  sources: [
    {
      title: "Tom Breihan — The Number Ones: Destiny's Child's \"Bootylicious\" (Stereogum)",
      url: "https://stereogum.com/2200297/the-number-ones-destinys-childs-bootylicious/columns/the-number-ones",
    },
    {
      title: "Survivor (Destiny's Child album) — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Survivor_(Destiny%27s_Child_album)",
    },
    {
      title: "Survivor (Destiny's Child song) — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Survivor_(Destiny%27s_Child_song)",
    },
    { title: "Bootylicious — Wikipedia", url: "https://en.wikipedia.org/wiki/Bootylicious" },
  ],

  influencedBy: [
    {
      artist: "Stevie Nicks",
      album: "Bella Donna",
      year: "1981",
      note: "The one-note guitar pulse of \"Edge of Seventeen\" is sampled whole as the hook of \"Bootylicious\"; Nicks holds a songwriting credit and mimes the riff in the video.",
    },
    {
      artist: "Samantha Sang",
      album: "Emotion",
      year: "1978",
      note: "The album closes on a cover of Sang's hit, written by Barry and Robin Gibb; producer Mark J. Feist rebuilt the disco-soul arrangement as a slow ballad.",
    },
  ],

  influenced: [
    {
      artist: "Beyoncé",
      album: "Dangerously in Love",
      year: "2003",
      note: "Takes its title and its title song straight from this record — Beyoncé re-cut \"Dangerously in Love\" at the same SugarHill studio, carrying over the writing-in-the-room method she used here.",
    },
    {
      artist: "Fifth Harmony",
      album: "Reflection",
      year: "2015",
      note: "Fifth Harmony named Destiny's Child their biggest inspiration, and work the same rotating-lead structure: verses passed between members over clipped, percussive R&B rather than stacked behind one singer.",
    },
  ],
});
