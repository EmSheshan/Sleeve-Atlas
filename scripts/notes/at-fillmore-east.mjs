import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "The Allman Brothers Band",
  album: "At Fillmore East",
  year: "1971",
  heading: "At Fillmore East — The Allman Brothers Band (1971)",

  albumLine:
    "Released 6 July 1971 on Capricorn, produced by Tom Dowd from performances recorded at New York's Fillmore East on 12 and 13 March that year. It's blues-rock played at length and largely improvised — a double live album, and the record that made the band.",

  overview: [
    "Their two studio albums had sold modestly, which is the usual story for a band whose actual case is made on stage. The line-up is unusual and matters: two lead guitarists in Duane Allman and Dickey Betts, and two drummers in Butch Trucks and Jai Johanny Johanson, with Gregg Allman on organ and vocals and Berry Oakley on bass. Six musicians, none of them redundant.",

    "What they did with that was import jazz procedure into a rock band. Songs function as heads — a stated theme, then extended collective improvisation, then a return — rather than as verses and choruses, and several run past ten minutes with one past twenty. Tom Dowd, who had engineered for Coltrane and Ray Charles and knew exactly what he was listening to, put it plainly: \"Here was a rock 'n' roll band playing blues in the jazz vernacular.\"",

    "The twin-guitar idea is the innovation people took from it. Allman and Betts play harmonised lines in thirds and trade improvised passages, listening rather than duelling. Underneath, the two drummers divide the work — one holding time, the other free to play across it — which gives the long passages somewhere to go rhythmically instead of just getting faster.",

    "It reached No. 13 and eventually went platinum, and it remains the reference point for the live rock album; Rolling Stone's Mark Kemp called the performances \"the finest live rock performance ever committed to vinyl,\" and the Library of Congress added it to the National Recording Registry in 2004. The context that surrounds it now is unavoidable: Duane Allman died in a motorcycle crash in October 1971, three months after release, aged 24. Berry Oakley died in a similar crash a year later, a few blocks away.",
  ],

  listeningNotes: [
    {
      label: "Two lead guitars in harmony",
      text: "Allman and Betts play melody lines a third apart rather than one soloing over the other. It's a device from horn sections, and Southern rock spent the next decade copying it.",
    },
    {
      label: "Duane's slide guitar",
      text: "Played with a glass bottleneck in open tuning, his slide lines are vocal and fully-pitched rather than smeary — closer to a singer than to a rock guitarist.",
    },
    {
      label: "Two drummers doing different jobs",
      text: "One holds the pulse while the other plays around and across it. Listen for the kit that keeps disappearing into fills — that freedom is what lets the long jams breathe.",
    },
    {
      label: "Songs as heads and improvisation",
      text: "A theme is stated, abandoned for several minutes of collective invention, then returned to. The structure is a jazz convention applied to blues material.",
    },
    {
      label: "Recorded live with the room in it",
      text: "Dowd captured the hall rather than isolating the band, and the audience, the stage bleed and a few flubbed notes are all left in. Nothing here is a studio repair.",
    },
    {
      label: "Gregg's organ underneath",
      text: "The Hammond sits low in the mix holding harmony through the improvisations, which is what stops the extended passages from collapsing when both guitars wander.",
    },
  ],

  sources: [
    { title: "At Fillmore East — Wikipedia", url: "https://en.wikipedia.org/wiki/At_Fillmore_East" },
    { title: "The Allman Brothers Band — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Allman_Brothers_Band" },
    { title: "National Recording Registry — Library of Congress", url: "https://www.loc.gov/programs/national-recording-preservation-board/recording-registry/complete-national-recording-registry-listing/" },
  ],

  influencedBy: [
    { artist: "Miles Davis", album: "Kind of Blue", year: "1959", note: "The modal jazz approach of improvising at length over a stated theme, which Dowd identified as exactly what this band was doing." },
    { artist: "Muddy Waters", album: "The Best of Muddy Waters", year: "1958", note: "The Chicago blues repertoire and slide vocabulary the band's material is built from." },
  ],

  influenced: [
    { artist: "Lynyrd Skynyrd", album: "(Pronounced 'Lĕh-'nérd 'Skin-'nérd)", year: "1973", note: "Southern rock's twin- and triple-guitar harmony format descends directly from what Allman and Betts do here." },
    { artist: "Phish", album: "A Live One", year: "1995", note: "The jam-band tradition of the long-form live album built on collective improvisation starts with this record." },
  ],
});
