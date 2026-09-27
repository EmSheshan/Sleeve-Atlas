import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Missy Elliott",
  album: "Under Construction",
  year: "2002",
  heading: "Under Construction — Missy Elliott (2002)",

  albumLine:
    "Released 12 November 2002 on the Goldmind and Elektra, produced mostly by Timbaland with Craig Brockman, Nisan Stewart, Errol \"Poppi\" McCalla Jr. and Elliott herself. It's hip-hop and R&B looking deliberately backwards at rap's early-eighties self — her fourth album, and her best-selling.",

  overview: [
    "Melissa Elliott and Timothy Mosley, who produces as Timbaland, had grown up together in the Virginia Beach area and had spent the previous five years making the strangest records on American radio — stuttering, half-empty beats, unplaceable percussion, melodies that resolved nowhere. By 2002 that approach had been so widely copied that it was no longer strange. The response here was to stop pushing forward and look back instead.",

    "There was a reason beyond restlessness. Aaliyah, Elliott's close friend and the artist she and Timbaland had largely built, died in a plane crash in August 2001; the album is dedicated to her and to the victims of the 11 September attacks. Within the following year the rapper Jam Master Jay of Run-DMC was shot dead and Lisa \"Left Eye\" Lopes of TLC died in a car crash. The album closes with a TLC duet mourning Aaliyah and Lopes, and the interludes throughout argue for hip-hop to stop feuding — an unusual thing to spend a commercial record's downtime on.",

    "So the nostalgia has a point. Reaching for the block-party era — chants, handclaps, call-and-response, the friendly competitive energy of rap before the record industry got hold of it — is a proposal about what the culture could be, not just a costume. That it worked commercially is the surprising part: it entered the Billboard 200 at No. 3 with 259,000 copies, stayed on the chart thirty-six weeks and went double platinum.",

    "\"Work It\" did most of that, reaching No. 2 and spending ten weeks there, selling over three million copies in America, and it owes its existence to a mistake — an engineer knocked something and a vocal line played backwards. Elliott has been plain about it: \"The reverse thing, that was a mistake.\" Timbaland heard it and refused to fix it. The album was nominated for Best Rap Album and Album of the Year at the Grammys; Metacritic gives it 81, and Rolling Stone's reviewer wrote that it \"sounds like habanero peppers, cinnamon and sweat\" and called it her best.",
  ],

  listeningNotes: [
    {
      label: "A vocal hook played backwards",
      text: "The most famous sound on the record is a reversed line kept in because a studio accident produced it. It functions as a hook while being literally unintelligible.",
    },
    {
      label: "Beats with the middle removed",
      text: "Timbaland leaves out whole frequency ranges — often there is a kick, a hi-hat and a voice and nothing else — so the space around the vocal becomes an instrument.",
    },
    {
      label: "Handclaps, chants and party noise",
      text: "Old-school block-party devices are layered in as texture: crowd shouts, hand percussion, call-and-response, all evoking a room rather than a studio.",
    },
    {
      label: "Nonsense syllables as rhythm",
      text: "Elliott raps in clicks, squeals and invented words as often as in sentences, using her voice as another percussion line. It's her signature technique.",
    },
    {
      label: "Spoken interludes between tracks",
      text: "She talks to the listener in short unaccompanied segments about mourning and about rap's infighting, which frames the party material rather than interrupting it.",
    },
    {
      label: "Eighties electro bass and drum machine tones",
      text: "Several tracks use sounds borrowed from the 808-driven records of 1982 and 1983, placed inside arrangements that are unmistakably from twenty years later.",
    },
  ],

  sources: [
    { title: "Under Construction (Missy Elliott album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Under_Construction_(Missy_Elliott_album)" },
    { title: "Work It (Missy Elliott song) — Wikipedia", url: "https://en.wikipedia.org/wiki/Work_It_(Missy_Elliott_song)" },
    { title: "Under Construction — AllMusic review", url: "https://www.allmusic.com/album/under-construction-mw0000231192" },
  ],

  influencedBy: [
    { artist: "Run-DMC", album: "Run-D.M.C.", year: "1984", note: "The stripped-to-drums-and-voice early-eighties template the album is consciously reviving; Jam Master Jay's death in 2002 sharpened the tribute." },
    { artist: "Prince", album: "Sign o' the Times", year: "1987", note: "The precedent for building funk from drum machines and empty space while treating the voice as a bank of characters." },
  ],

  influenced: [
    { artist: "M.I.A.", album: "Arular", year: "2005", note: "Chant-based, percussion-first, deliberately primitive-sounding pop built around a woman's voice used as rhythm." },
    { artist: "Beyoncé", album: "Lemonade", year: "2016", note: "The template of a Black woman pop auteur controlling production, concept and visual presentation as one argument." },
  ],
});
