import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Butthole Surfers",
  album: "Locust Abortion Technician",
  year: "1987",
  heading: "Locust Abortion Technician — Butthole Surfers (1987)",

  albumLine:
    "Released in March 1987 on Touch and Go in the US, with the band themselves as producers. It's noise rock and psychedelic punk, and per Wikipedia it's the Butthole Surfers' third studio album and the first not recorded in a professional studio.",

  overview: [
    "The location is contested. Wikipedia says 1986 and a home studio in Winterville, Georgia. Writer Ben Graham of The Quietus, interviewing guitarist Paul Leary, reports that sessions began outside Athens, Georgia, in early 1985 and then moved about ten miles to Winterville because the band couldn't afford Athens. Another review says Austin, Texas, which looks wrong. Leary said the band \"bought a one-inch, eight-track tape machine and a microphone\" and that when they wrote a song they would \"turn on the tape machine and start playing and that was it.\" Wikipedia describes an old Ampex eight-track and two microphones instead.",

    "The method was home recording with time to spare. Writer David Stubbs of The Quietus says it was \"assembled on a 'work from home' basis,\" with plenty of time between takes for experimentation and drugs; Wikipedia says bassist Jeff Pinkus recalled the same. Leary said the band recorded cows at a nearby slaughterhouse: \"I love those cows.\" Singer Gibby Haynes made the orchestral sound on a keyboard and ran his vocals through a pitchshifter. Wikipedia credits Haynes, Leary, Pinkus and drummers King Coffey and Teresa Nervosa, while Graham reports a Canadian tuba player, Trevor Malcolm, on bass for one song, so the lineup is unsettled.",

    "Wikipedia says the album is in 1001 Albums You Must Hear Before You Die; the book's text wasn't found. Writer Jack Whatley of Far Out notes that Kurt Cobain, the Nirvana singer, put it at 39 on his handwritten list of 50 favourite albums. Stubbs says it \"impacted like a whale on a beach\" and helped \"pave the way for grunge.\" Writer Michael H. Little of The Vinyl District calls it \"a testimony to what a dedicated few can achieve in service of human depravity and bad taste.\" Trouser Press says it \"ebbs and flows like organic waste.\"",
  ],

  listeningNotes: [
    {
      label: "Slaughterhouse field recordings",
      text: "The cow sounds are on \"Hay,\" a reversed, double-speed mix of \"22 Going On 23,\" per Wikipedia.",
    },
    {
      label: "Talk radio recorded on acid",
      text: "Leary recorded a talk-radio broadcast by putting a microphone on a transistor radio, then added bass and guitar for \"22 Going On 23\"; Coffey added drums the next morning.",
    },
    {
      label: "A synthetic orchestra and pitchshifted vocals",
      text: "The intro to \"Sweat Loaf\" uses a Prophet 2000 keyboard, and Wikipedia says the song parodies Black Sabbath's \"Sweet Leaf.\"",
    },
    {
      label: "Stacked kick drums",
      text: "Leary recalled recording \"64 tracks of kick drums\" alone on Christmas Eve for \"The O-Men,\" then adding snare and music.",
    },
    {
      label: "A processed Thai song",
      text: "Writer Tom Phelan of Far Out says \"Kuntz\" runs a Thai folk song through Haynes's effects, with the source later identified as \"Klua Duang\" by Phloen Phromaden.",
    },
  ],

  sources: [
    { title: "The Day of the Locust: Paul Leary interviewed — The Quietus (Ben Graham, 2017)", url: "https://thequietus.com/?p=22036" },
    { title: "Butthole Surfers, Locust Abortion Technician — The Quietus (David Stubbs, 2012)", url: "https://thequietus.com/?p=8212" },
    { title: "Graded on a Curve: Butthole Surfers — The Vinyl District (Michael H. Little, 2020)", url: "https://thevinyldistrict.com/storefront/graded-on-a-curve-butthole-surfers-locust-abortion-technician" },
    { title: "Butthole Surfers — Trouser Press", url: "https://trouserpress.com/reviews/butthole-surfers/" },
    { title: "The Thai singer sampled by Butthole Surfers — Far Out (Tom Phelan, 2025)", url: "https://faroutmagazine.co.uk/thai-singer-sampled-by-butthole-surfers/" },
    { title: "Kurt Cobain's 50 favourite albums — Far Out (Jack Whatley, 2022)", url: "https://faroutmagazine.co.uk/kurt-cobain-50-favourite-albums-list/" },
    { title: "Locust Abortion Technician — Wikipedia", url: "https://en.wikipedia.org/wiki/Locust_Abortion_Technician" },
    { title: "Sweet Leaf — Wikipedia", url: "https://en.wikipedia.org/wiki/Sweet_Leaf" },
    { title: "Pinkus Abortion Technician — Wikipedia", url: "https://en.wikipedia.org/wiki/Pinkus_Abortion_Technician" },
  ],

  influencedBy: [
    { artist: "Black Sabbath", album: "Master of Reality", year: "1971", note: "Wikipedia's page on the Sabbath song says the Surfers reworked it as \"Sweat Loaf,\" and Trouser Press calls it an homage; a parody of one song rather than a stated influence." },
  ],

  influenced: [
    { artist: "Melvins", album: "Pinkus Abortion Technician", year: "2018", note: "Wikipedia says the title references this album, and bassist Jeff Pinkus, who played on the Surfers record, plays on the Melvins one, which also covers a song from it." },
  ],
});
