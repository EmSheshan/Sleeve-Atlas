import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Tom Waits",
  album: "Rain Dogs",
  year: "1985",
  heading: "Rain Dogs — Tom Waits (1985)",

  albumLine:
    "Released 30 September 1985 on Island, self-produced and recorded at RCA 6th Ave in New York. Nineteen tracks in under fifty-four minutes of experimental rock, junkyard blues and broken Americana — his ninth album, and the centre of the three that remade him.",

  overview: [
    "He had spent the seventies as a barroom balladeer with a piano and a hangover persona, and by 1983 had abandoned it entirely. \"Rain Dogs\" is the middle record of the trilogy that followed, written over two months in a basement in Lower Manhattan, and the change of city is the change of sound: he recorded street noise beforehand to get New York's actual racket into the compositions.",

    "The title names the subject. A rain dog is a dog that loses its scent trail in a downpour and can't find its way home, and the album is about the urban dispossessed — sailors, drunks, immigrants, people who came to a city and stayed lost in it. It is a concept album only loosely, in that it keeps returning to the same streets rather than telling a story.",

    "The instrumentation is the argument made audible. Waits wanted nothing that sounded like 1985, which was the peak year of gated drums and digital reverb, and reached instead for marimba, accordion, banjo, trombone, and percussion made by hitting furniture — his own description was of hitting a chest of drawers with a two-by-four. Marc Ribot, making his first major-label appearance, plays guitar in short, deliberately wrong-sounding stabs that became one of the decade's most distinctive sounds. Keith Richards turns up on three tracks.",

    "It sold modestly — No. 29 in Britain, No. 188 in America — and has since become one of the most admired records of its decade: Pitchfork gave it a straight 10 out of 10, calling it \"a romantic and carnivalesque masterpiece,\" and Rolling Stone placed it 21st among all albums of the eighties. Its influence runs through everyone who later decided that old, broken and acoustic could be more modern than anything with a synthesizer in it.",
  ],

  listeningNotes: [
    {
      label: "Percussion made from furniture",
      text: "Much of the rhythm is objects being struck rather than a drum kit, recorded close and dry. It dates the album to nothing.",
    },
    {
      label: "Marc Ribot's guitar",
      text: "Short, jabbing, deliberately out-of-tune-sounding figures that refuse to resolve. He plays against the songs rather than supporting them.",
    },
    {
      label: "A voice like damaged machinery",
      text: "Waits growls, barks and rasps through a megaphone-ish distortion, often recorded through cheap equipment on purpose.",
    },
    {
      label: "Instruments from everywhere",
      text: "Marimba, accordion, banjo, trombone and upright bass replace the rock band, giving the record a bent cabaret and Weimar quality.",
    },
    {
      label: "Street sound folded in",
      text: "Ambient noise he recorded in Manhattan beforehand sits inside the arrangements, so the city is literally present rather than described.",
    },
    {
      label: "Nineteen short pieces",
      text: "Most tracks are two to three minutes and shift style completely from their neighbours, which is why it plays like walking through a city rather than sitting in one room.",
    },
  ],

  sources: [
    { title: "Rain Dogs — Wikipedia", url: "https://en.wikipedia.org/wiki/Rain_Dogs" },
    { title: "Tom Waits — Wikipedia", url: "https://en.wikipedia.org/wiki/Tom_Waits" },
    { title: "Marc Ribot — Wikipedia", url: "https://en.wikipedia.org/wiki/Marc_Ribot" },
  ],

  influencedBy: [
    { artist: "Captain Beefheart & His Magic Band", album: "Trout Mask Replica", year: "1969", note: "The ruined growl and the dismantling of blues forms into junkyard instrumentation are an openly acknowledged debt." },
    { artist: "The Velvet Underground", album: "The Velvet Underground & Nico", year: "1967", note: "The precedent for songs about the wrecked and the marginal set in a specific New York, delivered deadpan." },
  ],

  influenced: [
    { artist: "Nick Cave and the Bad Seeds", album: "The Boatman's Call", year: "1997", note: "The register of a low, damaged voice over spare, antique instrumentation carries directly over." },
    { artist: "Beck", album: "Odelay", year: "1996", note: "Assembling a record from broken, obsolete and found sounds rather than contemporary studio tools." },
    { artist: "The Pogues", album: "Rum Sodomy & the Lash", year: "1985", note: "Released the same year, and sharing the idea that drunken, antique acoustic music could be more vital than anything current." },
  ],
});
