import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Nirvana",
  album: "Nevermind",
  year: "1991",
  heading: "Nevermind — Nirvana (1991)",

  albumLine:
    "Released 24 September 1991 on DGC, produced by Butch Vig at Sound City in Van Nuys and mixed by Andy Wallace. Their second album, their first for a major label, and the record that rearranged American rock in about four months.",

  overview: [
    "The line-up had only just settled: Kurt Cobain on guitar and vocals, Krist Novoselic on bass and Dave Grohl, newly arrived, on drums. Grohl matters enormously here — he hits harder and more precisely than anyone the band had previously worked with, and the album's force depends on it. Vig's contribution was to make Cobain double-track his vocals and layer guitars, both things Cobain resisted and both things that made the songs carry.",

    "Geffen hoped for 250,000 copies. It entered the Billboard 200 at No. 144, then kept climbing, and in January 1992 displaced Michael Jackson's \"Dangerous\" from No. 1 while selling around 300,000 a week; it has since passed thirty million worldwide. What made that possible is not mysterious: these are pop songs — verse, chorus, hook, under four minutes — played loud and sung by someone who sounded like he meant it, arriving into a mainstream dominated by hair metal that nobody under twenty-five believed in any more.",

    "The band's own verdict soured almost immediately, and the target was the mix. Andy Wallace's mastering is bright, compressed and radio-ready, and Cobain's line on it is well known: \"I'm embarrassed by it now. It's closer to a Mötley Crüe record than it is a punk rock record.\" Vig's reading is that this was about image rather than genuine dissatisfaction, and it is worth holding both: the polish is real, and it is also the reason the record reached people that a rawer mix would not have.",

    "Reviews were strong at the time — an A− from Entertainment Weekly, 9 out of 10 from NME, first place in the Village Voice's critics' poll, three Grammy nominations. Its consequences were structural rather than musical: major labels emptied Seattle, hair metal collapsed within eighteen months, and for the rest of the decade \"alternative\" meant a commercial category rather than an opposition. The band spent their next album trying to undo it.",
  ],

  listeningNotes: [
    {
      label: "Quiet verse, loud chorus",
      text: "Nearly every song drops to clean guitar and near-silence before the distortion returns. It's a Pixies device, used here with total consistency.",
    },
    {
      label: "Cobain's doubled vocal",
      text: "Vig had him sing every lead twice and stacked the takes, which thickens a thin voice into something that carries over the guitars.",
    },
    {
      label: "Grohl's drums",
      text: "Hit extremely hard and recorded with the room, so the kit sounds enormous. Much of the album's impact is simply this.",
    },
    {
      label: "Andy Wallace's bright mix",
      text: "Compressed, glossy and tuned for radio — the thing the band later disowned, and the thing that got it played everywhere.",
    },
    {
      label: "Melody under the noise",
      text: "Strip the distortion and most of these are conventional pop songs with strong hooks, which is why they survive acoustic rearrangement so easily.",
    },
  ],

  sources: [
    { title: "Nevermind — Wikipedia", url: "https://en.wikipedia.org/wiki/Nevermind" },
    { title: "Nirvana (band) — Wikipedia", url: "https://en.wikipedia.org/wiki/Nirvana_(band)" },
    { title: "Butch Vig — Wikipedia", url: "https://en.wikipedia.org/wiki/Butch_Vig" },
  ],

  influencedBy: [
    { artist: "Pixies", album: "Surfer Rosa", year: "1988", note: "Cobain said repeatedly he was trying to write Pixies songs; the loud-quiet-loud structure is taken directly." },
    { artist: "The Beatles", album: "Rubber Soul", year: "1965", note: "Cobain's melodic instincts and his use of close vocal doubling come from mid-period Beatles more than from punk." },
    { artist: "Neil Young & Crazy Horse", album: "Rust Never Sleeps", year: "1979", note: "The model for huge, loose, distorted guitar as sustained texture rather than riffing." },
  ],

  influenced: [
    { artist: "Nirvana", album: "In Utero", year: "1993", note: "Made in direct reaction to this album's polish, with Steve Albini hired to undo exactly what Wallace did." },
    { artist: "Nirvana", album: "MTV Unplugged In New York", year: "1994", note: "Four of these songs are played acoustic there, which demonstrates how conventionally written they always were." },
    { artist: "Green Day", album: "Dookie", year: "1994", note: "The commercial lane this album opened — melodic punk on a major label — was walked straight through." },
  ],
});
