import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Neil Young & Crazy Horse",
  album: "Everybody Knows This Is Nowhere",
  year: "1969",

  heading: "Everybody Knows This Is Nowhere — Neil Young & Crazy Horse (1969)",

  albumLine:
    "Released 14 May 1969 on Reprise, produced by Young with David Briggs and cut in Hollywood in January and March 1969. Country rock, folk and raw garage rock on one record, with two ten-minute jams. It's Young's second solo album and his first with Crazy Horse.",

  overview: [
    "Young had left Buffalo Springfield and made a 1968 solo debut he came to dislike, saying later that it was \"overdubbed rather than played.\" What he wanted next was a band he could play with in a room. He found one in Laurel Canyon: guitarist and singer Danny Whitten, bassist Billy Talbot and drummer Ralph Molina, already playing as the Rockets. Molina recalled in 2021 that after the Rockets landed a booking at the Whisky a Go Go they asked Young to sit in, and \"we then formed into Crazy Horse and recorded Everybody Knows This Is Nowhere.\" In the 1997 film Year of the Horse, Young conceded he \"probably did steal them away from the other band.\"",

    "The method was the point. Los Angeles studio craft in 1969 ran on overdubs and assembly, and Young went the other way: live takes, few of them, and for the first time in his career vocals sung while playing. He told the DJ B. Mitchell Reid that \"a change came over me, right then. I started just tryin' to be real instead of fabricate something,\" and said he wanted the quality of old Everly Brothers and Roy Orbison records, which \"were done at once.\" Molina is blunter: \"No rehearsals. Neil walks in with a song, then we jump in. We get it in one, two takes.\" Young's account to interviewer J. C. Costa contradicts him — \"we got together, started rehearsing and we went right in\" — so the sources disagree about how prepared anyone was. Three of these songs were written in one sitting while Young had flu; his memoir Waging Heavy Peace describes delirium and a metallic taste but gives no temperature, and the often-repeated figure of 103°F comes from elsewhere.",

    "It sold slowly and then kept selling, creeping to No. 34 on the Billboard 200 in August 1970 — over a year after release, carried by Young's visibility with Crosby, Stills, Nash & Young — and staying 98 weeks on the chart before going platinum. Critic Ric Albano, in Classic Rock Review, calls it \"the first of his string of classics.\" The long two-guitar jams set the pattern for everything Young and Crazy Horse did afterwards, and PopMatters traces their echo into the playing of guitarists Kurt Cobain, J Mascis and Thurston Moore.",
  ],

  listeningNotes: [
    {
      label: "D modal tuning",
      text: "Both E strings dropped to D. Young told Nick Kent of Mojo it gave \"a drone sound, sort of like a sitar, but not really\"; he and Buffalo Springfield bandmate Stephen Stills found it around 1966.",
    },
    {
      label: "Two guitars circling instead of trading",
      text: "In the biography Shakey, Young calls Whitten \"the perfect counterpoint to everything else that was happening\" and says he \"led those guys from one groove to another, all within the same groove\" — which is why the long solos don't feel long: what keeps changing is the band.",
    },
    {
      label: "Long takes cut with a razor blade",
      text: "Both epics were trimmed from longer performances, sometimes splicing takes. Young on \"Down by the River\" in Shakey: \"We got the vibe, but it was just too long and sometimes it fell apart, so we just took the shitty parts out.\"",
    },
    {
      label: "A scratch vocal through the talkback mic",
      text: "The title track's lead vocal went into the talkback microphone on the Wally Heider desk as a guide take, with no effects. Young kept it, liking how thin it sounded next to everything else.",
    },
    {
      label: "Three voices around six microphone booms",
      text: "The album's waltz was sung live with singer and guitarist Robin Lane. Lane didn't know it counted: \"I thought we were rehearsing. I didn't even know what I was singing.\"",
    },
  ],

  sources: [
    { title: "Everybody Knows This Is Nowhere — Ric Albano, Classic Rock Review", url: "https://www.classicrockreview.com/2019/06/1969-neil-young-everybody-knows/" },
    { title: "A Dreamer of Pictures: 'Everybody Knows This Is Nowhere' at 55 — PopMatters", url: "https://www.popmatters.com/neil-young-everybody-knows-nowhere-atr55" },
    { title: "Everybody Knows This Is Nowhere — Wikipedia", url: "https://en.wikipedia.org/wiki/Everybody_Knows_This_Is_Nowhere" },
  ],

  influencedBy: [
    { artist: "The Everly Brothers", album: "Songs Our Daddy Taught Us", year: "1958", note: "Young named their records as his model for capturing a track complete in one performance, singer and band playing together rather than assembled in layers." },
    { artist: "Buffalo Springfield", album: "Buffalo Springfield Again", year: "1967", note: "Young's own former band, and where he and Stills first put the D modal tuning that drives this record's hardest riff onto tape." },
  ],

  influenced: [
    { artist: "Dinosaur Jr.", album: "You're Living All Over Me", year: "1987", note: "PopMatters traces this album's soloing into the playing of singer and guitarist J Mascis — long, ragged, melody-first leads wrung out of a plain three-piece." },
    { artist: "Nirvana", album: "Nevermind", year: "1991", note: "Singer and guitarist Kurt Cobain is named among the players whose lead style descends from these solos: unschooled, tuneful, sustained over a few loud chords." },
  ],
});
