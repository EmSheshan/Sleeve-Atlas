import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "John Lee Hooker",
  album: "The Healer",
  year: "1989",
  heading: "The Healer — John Lee Hooker (1989)",

  albumLine:
    "Released in September 1989 on Chameleon and produced by blues slide guitarist Roy Rogers. It's a blues record built on duets with younger admirers, and after four decades of recording it became Hooker's highest-charting album and won him his first Grammy.",

  overview: [
    "Hooker's music was ancient history by 1989 and still sounded like nobody else's. He left Mississippi for Detroit and cut \"Boogie Chillen'\" in 1948: one chord, an electric guitar, a stamping foot, bar lengths that stretched or contracted as he felt rather than to a count. That made him enormously influential and enormously hard to accompany; Canned Heat and the Groundhogs built careers on his boogie. By the late eighties he was in his early seventies (his birth year is disputed; sources give 72 and 73) and recording only occasionally.",

    "The idea of putting him in a room with his own descendants came from his manager, Mike Kappus, credited as executive producer. Kappus hired Rogers, a former member of Hooker's Coast to Coast band, because he had played alongside that elastic timing and knew which guest could follow it. Hooker reworked very old songs of his own beside a little new material, and the guests were admirers rather than stars: Santana, Bonnie Raitt, Robert Cray, George Thorogood, Charlie Musselwhite, and members of Canned Heat and Los Lobos.",

    "It arrived at a good moment: Cray had crossed over to rock radio, and Raitt's Nick of Time, out earlier that year, was headed for multi-platinum sales and the Album of the Year Grammy. There was a format precedent too — Muddy Waters had been restored to prominence a decade earlier by records made with young admirer and guitarist Johnny Winter.",

    "Reviews split along purist lines. Critic Thom Owens at AllMusic gave it two stars out of five, arguing the \"long guest list is what makes the album a fairly unengaging listen,\" while critic Janie Matthews in Rolling Stone called it \"brilliant, 100-proof blues\" and credited Rogers with keeping a \"live-in-the-barroom, Fender-tube-amp quality.\" Critic Robert Christgau graded it B+, joking that most of the guests commit crimes against Hooker's ageless essence. Commercially it was unambiguous: No. 62 on the Billboard 200, his best placing in forty years, and reportedly over a million copies worldwide. The Raitt duet took the 1990 Grammy for the traditional blues category (sources word the category differently). The formula became the template for Mr. Lucky, Chill Out and Don't Look Back, which brought three more Grammys, and the money let Hooker spend his last decade in comfort.",
  ],

  listeningNotes: [
    {
      label: "The one-chord drone",
      text: "Most of his material never leaves one chord, and the bars run long or short as he decides. Everyone is following him by ear rather than counting — the whole technical problem the record had to solve.",
    },
    {
      label: "Latin percussion laid over the boogie",
      text: "Santana brought his own band to the title track — congas from Armando Peraza, timbales from Jose Areas. Hooker said in the liner notes they were \"so hopped up getting a chance to record together that we did only one take.\"",
    },
    {
      label: "Slide guitar used as a second voice",
      text: "Raitt, singing and playing slide, answers Hooker phrase for phrase on \"I'm in the Mood\" rather than soloing over him — the most conversational performance here, and the one that won the Grammy.",
    },
    {
      label: "Accordion in a Delta frame",
      text: "The Los Lobos track, cut at a separate Los Angeles studio, gives Hooker a Tex-Mex backing: accordion from David Hidalgo, saxophone from Steve Berlin. It's the furthest the record travels from Detroit.",
    },
    {
      label: "Small-room amp sound",
      text: "Engineer Sam Lehmer recorded and mixed most of the album at Russian Hill in San Francisco, keeping guitars dry and close. Instrumental chatter and room noise stay in.",
    },
    {
      label: "Unaccompanied stomps to finish",
      text: "The last three tracks carry no guest credits — Hooker alone on National Steel and twelve-string. Purists who disliked the duets were paid off at the end of the record.",
    },
  ],

  sources: [
    { title: "The Healing Power of The Hook — Rock and Roll Globe", url: "https://rockandrollglobe.com/blues/john-lee-hooker-the-healer-at-30/" },
    { title: "John Lee Hooker's Star-Packed Collaborative Album 'The Healer' Set For Expansive Reissue — uDiscover Music", url: "https://www.udiscovermusic.com/news/craft-recordings-reissue-john-lee-hooker-the-healer/" },
    { title: "John Lee Hooker: The Healer — AllMusic", url: "https://www.allmusic.com/album/the-healer-mw0000204842" },
    { title: "The Healer (John Lee Hooker album) — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Healer_(John_Lee_Hooker_album)" },
  ],

  influencedBy: [
    { artist: "Muddy Waters", album: "Hard Again", year: "1977", note: "The format precedent critics drew on directly: an elder bluesman cut fast and loud by a young admirer in the producer's chair, with takes kept rough." },
    { artist: "Santana", album: "Abraxas", year: "1970", note: "Santana co-wrote and co-produced the title track and brought his own congas-and-timbales band to it, importing exactly the blues-over-Afro-Cuban-percussion blend he built here." },
  ],

  influenced: [
    { artist: "Santana", album: "Supernatural", year: "1999", note: "Santana played on this record and then applied the same device to his own career — a veteran's album built from duets with younger admirers, one per track." },
  ],
});
