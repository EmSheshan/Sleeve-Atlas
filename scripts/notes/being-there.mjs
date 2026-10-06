import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Wilco",
  album: "Being There",
  year: "1996",
  heading: "Being There — Wilco (1996)",

  albumLine:
    "Released 29 October 1996 on Reprise, self-produced by the band after sessions running from late 1995 into the summer of 1996. It's a deliberate double album — nineteen songs across two discs — and the record where Wilco stopped sounding like the Uncle Tupelo they'd left behind.",

  overview: [
    "Jeff Tweedy had been the other singer in Uncle Tupelo, the band credited with more or less inventing alt-country, until Jay Farrar quit in January 1994 and the group played its last show that May. Tweedy kept the rhythm section — Stirratt, Coomer, Max Johnston — and called the new band Wilco. The 1995 debut, A.M., produced by Brian Paulson (who'd also produced Uncle Tupelo), sounded like a continuation of the old band and was received as exactly that. For the second record Tweedy brought in a new guitarist and keyboardist, Jay Bennett, plus pedal-steel player Bob Egan, and wanted something else entirely.",

    "Sessions in Chicago, Springfield, Missouri and Atlanta produced around thirty songs, trimmed to nineteen. The band wanted it out as a double album rather than cut further, and Reprise balked at the price a double LP normally carries. Tweedy made a direct deal with label president Howie Klein: Being There would sell at single-album price, and Wilco would give up a large share of their royalty rate to cover the gap — a trade Tweedy later put at roughly $600,000. It worked commercially, selling close to 300,000 copies, nearly double A.M., and the discount became part of the record's own mythology.",

    "Musically it splits its loyalties on purpose. Straight, pedal-steel country songs sit next to tracks built from piano, horns and studio noise that owe nothing to Uncle Tupelo. AllMusic's review called it a cross between Neil Young's Harvest, the Rolling Stones' Exile on Main St. and Big Star's Third — reference points nobody would reach for on A.M. \"Misunderstood\" folds in a line from Cleveland punk singer Peter Laughner and aims squarely at the breakup with Farrar; \"Monday\" is unapologetic Stones pastiche. Wilco recorded and mixed each song in a single day, which widened rather than narrowed the gap between the record's two halves.",

    "Critics treated it as the point where Wilco earned separation from the alt-country tag — Rolling Stone, Pitchfork and NME all reviewed it enthusiastically, and it later placed on several best-of-the-'90s lists. It's the hinge between A.M.'s plain roots-rock and the stranger records — Summerteeth, then Yankee Hotel Foxtrot — that made Wilco's reputation. The lineup didn't hold either: Johnston left after this album feeling crowded out by Bennett, and Egan appears on no other Wilco record. A transitional record by people who didn't yet know what they were transitioning into.",
  ],

  listeningNotes: [
    {
      label: "Misunderstood",
      text: "The opener spends two minutes building tension on a single chord before breaking into a line lifted from Peter Laughner's \"Amphetamine\" and a swipe at Jay Farrar — the clearest link back to the Uncle Tupelo breakup anywhere on the record.",
    },
    {
      label: "Monday",
      text: "A direct, unembarrassed Stones pastiche, horns and all — the clearest evidence of Exile on Main St. in Tweedy's ear while he wrote this.",
    },
    {
      label: "Jay Bennett's arrival",
      text: "His first album with the band. The accordion, lap steel and extra keyboards scattered through the second disc are mostly him, pushing songs like \"Far, Far Away\" past where A.M. would have stopped.",
    },
    {
      label: "Bob Egan's pedal steel",
      text: "Egan plays on this record only. His steel runs through the straighter country songs that the album's surreal half is deliberately set against.",
    },
    {
      label: "Outtasite (Outta Mind)",
      text: "The closest thing to a single, and a tight piece of Big Star-style power pop — proof the band could write three clean minutes when the double-album sprawl wasn't the point.",
    },
    {
      label: "Sunken Treasure",
      text: "A slow, mostly acoustic song about Tweedy's own punk-rock adolescence, sequenced right after the noisiest material — the record's clearest statement of what it's actually about.",
    },
  ],

  sources: [
    { title: "Being There (Wilco album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Being_There_(Wilco_album)" },
    { title: "Uncle Tupelo — Wikipedia", url: "https://en.wikipedia.org/wiki/Uncle_Tupelo" },
    { title: "Wilco: Being There — AllMusic", url: "https://www.allmusic.com/album/being-there-mw0000613155" },
  ],

  influencedBy: [
    { artist: "The Rolling Stones", album: "Exile on Main St.", year: "1972", note: "AllMusic pegged Being There as a cross between this album, Big Star's Third and Neil Young's Harvest; \"Monday\" in particular is a direct Stones pastiche, horns and all." },
    { artist: "Big Star", album: "Third (Sister Lovers)", year: "1978", note: "The power pop and studio-damaged melancholy of songs like \"Outtasite (Outta Mind)\" draws on Big Star's later, stranger records more than anything in the alt-country catalog." },
    { artist: "Neil Young", album: "Harvest", year: "1972", note: "The straighter country-rock songs on the album's other half — pedal steel, unadorned verses — sit closer to Harvest-era Young than to Uncle Tupelo." },
  ],

  influenced: [
    { artist: "Wilco", album: "Summerteeth", year: "1999", note: "Built directly on Being There's breakthrough, pushing further from alt-country into denser, more produced pop — the trajectory this record started." },
    { artist: "Whiskeytown", album: "Strangers Almanac", year: "1997", note: "Released the following year by another band straining against alt-country's rules, with a looser, rock-informed sound critics have compared directly to Being There-era Wilco." },
    { artist: "Drive-By Truckers", album: "Southern Rock Opera", year: "2001", note: "Part of the same widening of alt-country toward a bigger classic and Southern-rock palette that Being There pushed into the genre's mainstream." },
  ],
});
