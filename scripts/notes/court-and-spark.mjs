import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Joni Mitchell",
  album: "Court And Spark",
  year: "1974",
  heading: "Court And Spark — Joni Mitchell (1974)",

  albumLine:
    "Released 17 January 1974 on Asylum. The sleeve names no producer at all — Henry Lewy is credited as sound engineer, though most accounts describe him as Mitchell's co-producer, as he was on the records either side of this one. It's her sixth album, the one where her songwriting left folk-rock for West Coast jazz, and it became her biggest seller.",

  overview: [
    "After Blue in 1971 and For the Roses in 1972 she went quiet for a year — her first gap since her 1968 debut — while other people's hit covers of her songs did the work. The problem she came back with was technical rather than emotional. She was writing music too ornamented for the Laurel Canyon rhythm sections she had been using; session drummer Russ Kunkel, who had played on both previous albums and for James Taylor, Carole King and Jackson Browne, couldn't get inside it. The advice that followed, reported as his, was that she should get herself a jazz drummer.",

    "So she and Lewy went trawling Los Angeles jazz clubs and found the L.A. Express at the Baked Potato on Cahuenga Boulevard West. Saxophonist Tom Scott led the group and had already played woodwinds for her on For the Roses; she hired the band whole rather than booking players one at a time — guitarist Larry Carlton, bassist Max Bennett, keyboardist Joe Sample and drummer John Guerin, with Sample and bassist Wilton Felder both founder members of the jazz-funk group the Crusaders. It did not come easily. The players \"didn't really know how heavy to play, and I was used to being the whole orchestra,\" she said, and \"many nights I would be very discouraged.\" Guitarists Robbie Robertson and José Feliciano guest, David Crosby and Graham Nash sing, and Mitchell painted the cover herself.",

    "It went platinum, produced her only American Top 10 single, and was inducted into the Grammy Hall of Fame in 2004. Opinion at the time was not unanimous — Record Mirror headlined its March 1974 review \"Joni's masterpiece\" while the Oakland Tribune ran \"Joni Sells Out, But Still Sounds Blue.\" The modern reading is that both things are true: it is simultaneously her commercial peak and the start of the run through The Hissing of Summer Lawns, Hejira and Mingus in which she dismantled song form. Prince named the album in a song of his own in 1987, and Mitchell later said he was the musician she was proudest to have inspired.",
  ],

  listeningNotes: [
    {
      label: "Woodwinds doing the job of strings",
      text: "Scott plays all the reeds and woodwinds and arranges most of them, so the sweetening on this record is breath rather than bowing. On \"Down to You\" the writing turns almost baroque.",
    },
    {
      label: "A band that already knew each other",
      text: "Because the L.A. Express came as a working unit off a club stage, the rhythm section breathes together in a way assembled session players rarely do. That cohesion is what let her stop being the whole arrangement.",
    },
    {
      label: "Her piano setting the time",
      text: "She plays piano throughout and the band follow her hesitations and rushes rather than a fixed pulse. Several songs seem to begin mid-thought because the accompaniment is tracking her, not the bar.",
    },
    {
      label: "Melody draped over the groove",
      text: "Her phrasing lands deliberately late and loose against the beat — a jazz singer's freedom applied to her own long, talky lines, and the clearest sign of what the new players unlocked.",
    },
    {
      label: "Guest voices mixed to vanish",
      text: "Crosby and Nash are folded so far into her own stacked harmonies that the backing sounds like more of her. It's the opposite of a marquee guest spot.",
    },
    {
      label: "A comedy duo as background chatter",
      text: "Richard \"Cheech\" Marin and Tommy Chong appear talking behind \"Twisted,\" the album's one cover — a vocalese lyric lyricist Annie Ross wrote to a recorded saxophone solo.",
    },
  ],

  sources: [
    { title: "Court and Spark — official discography page, with full album credits and an essay by Jon Dale for Uncut", url: "https://jonimitchell.com/music/album.cfm?id=7" },
    { title: "Rediscover Joni Mitchell's 'Court and Spark' — Albumism, by Sarah Paolantonio", url: "https://albumism.com/features/joni-mitchell-court-and-spark-album-anniversary" },
    { title: "Down To You: Joni Mitchell's Court And Spark At 50 — The Quietus", url: "https://thequietus.com/opinion-and-essays/anniversary/joni-mitchell-court-and-spark-review-anniversary/" },
    { title: "Court and Spark — Wikipedia", url: "https://en.wikipedia.org/wiki/Court_and_Spark" },
  ],

  influencedBy: [
    { artist: "Lambert, Hendricks & Ross", album: "The Hottest New Group in Jazz", year: "1959", note: "Mitchell closes the album by singing their vocalese repertoire — lyrics fitted to a transcribed saxophone solo — which is the technique her own phrasing here borrows from." },
    { artist: "The Crusaders", album: "Crusaders 1", year: "1972", note: "Keyboardist Joe Sample and bassist Wilton Felder play on Mitchell's album; the electric jazz-funk idiom they brought with them is the sound of this record's rhythm section." },
  ],

  influenced: [
    { artist: "Prince", album: "Sign o' the Times", year: "1987", note: "He names this album by title in one of its songs; Mitchell said he was the musician she was most proud to have inspired." },
    { artist: "Rickie Lee Jones", album: "Rickie Lee Jones", year: "1979", note: "Jazz-schooled Los Angeles session players behind conversational, metrically loose songwriting — the model this album established. Mitchell said in 1985, \"I can feel she's influenced by me, but she's made it her own.\"" },
  ],
});
