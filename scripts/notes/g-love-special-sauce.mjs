import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "G. Love & Special Sauce",
  album: "G. Love And Special Sauce",
  year: "1994",
  heading: "G. Love and Special Sauce — G. Love & Special Sauce (1994)",

  albumLine:
    "Released in 1994 through Okeh, Epic's revived blues imprint, and produced by Dave \"Stiff\" Johnson with the band. It's a blues-hip-hop hybrid played by a three-piece — the debut from a group that had existed for barely a year when they signed.",

  overview: [
    "Garrett Dutton, who performs as G. Love, was a Philadelphian who had dropped out of Skidmore College and gone to Boston to busk and play bars. He met drummer Jeffrey Clemens at the Tam O'Shanter in January 1993; bassist Jim Prescott joined a few months later, and the trio took a residency at the Plough and Stars in Cambridge. They were signed to Epic by that October — nine months from first gig to record deal. The producer came through a demo submission to the Philadelphia Music Conference, at a showcase where, as Dutton tells it, they opened for the Roots, who were also still looking for a deal.",

    "Dutton's stated influences run in two directions at once — Bob Dylan and Muddy Waters on one side, Run-D.M.C., Schoolly D and the Beastie Boys on the other — and the record simply refuses to choose. He plays acoustic guitar and harmonica in a country-blues idiom while delivering the words in a loose, behind-the-beat rap. The Philadelphia Inquirer called the result \"ragmop\" and rated it \"one of the most significant updates of blues phrasing since British rockers took a shine to the sound in the mid-'60s.\"",

    "The timing helped. 1994 was a moment when American alternative radio was unusually open to white artists doing loose-limbed things with hip-hop rhythm and older American forms, and college radio picked the album up quickly. \"Cold Beverage\" became the hit, helped considerably by MTV rotation, and pushed the record to gold — 500,000 copies. \"Baby's Got Sauce\" was later named song of the year by Seattle's KEXP.",

    "Critical response was warm rather than reverent: three stars from both AllMusic and Q. The band never had a bigger record, and the style they arrived at — laid-back, bluesy, rhythmically loose — turned out to be closer to a lane than a movement, one that later ran through the acoustic-groove and jam-adjacent scene. The album's inclusion in the 1001 Albums list is partly a record of that specific mid-nineties crossover moment.",
  ],

  listeningNotes: [
    {
      label: "Rapping in a blues voice",
      text: "Dutton's delivery sits somewhere between the two forms — the phrasing and cadence of rap, but the drawl, slur and bent vowels of a country-blues singer. It's the whole idea of the record in one gesture.",
    },
    {
      label: "Upright bass, not electric",
      text: "Prescott plays a standing string bass, which gives the low end a woody thump and a short decay rather than the sustain of an electric. It's a jazz and early-blues instrument doing a hip-hop job.",
    },
    {
      label: "Extreme space in the arrangements",
      text: "Three instruments, often not all playing. Long passages are just guitar and drums, or bass and voice, so the groove is defined as much by what's missing as by what's there.",
    },
    {
      label: "Harmonica as punctuation",
      text: "Dutton's harp answers his own vocal lines rather than taking solos, a call-and-response habit lifted straight from prewar blues and dropped into a rhythm that isn't one.",
    },
    {
      label: "Behind-the-beat drumming",
      text: "Clemens plays consistently late against the pulse, which is what makes the record feel slouched rather than sloppy. The looseness is tight — everyone's dragging by the same amount.",
    },
  ],

  sources: [
    { title: "G. Love and Special Sauce (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/G._Love_and_Special_Sauce_(album)" },
    { title: "'G. Love and Special Sauce' at 30: Philly Artist on Debut Album — Rolling Stone", url: "https://www.rollingstone.com/music/music-features/g-love-special-sauce-debut-album-tour-1235015254/" },
    { title: "G. Love & Special Sauce — Wikipedia", url: "https://en.wikipedia.org/wiki/G._Love_%26_Special_Sauce" },
  ],

  influencedBy: [
    { artist: "Muddy Waters", album: "The Best of Muddy Waters", year: "1958", note: "Dutton names Waters among his formative influences; the guitar-and-harmonica idiom here comes straight out of Chicago and Delta blues." },
    { artist: "Beastie Boys", album: "Check Your Head", year: "1992", note: "Named by Dutton as an influence, and the nearest precedent for a band playing its own instruments loosely under rapped vocals." },
  ],

  // No well-documented downstream influence found in reliable sources.
  influenced: [],
});
