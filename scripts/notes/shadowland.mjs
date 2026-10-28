import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "k.d. lang",
  album: "Shadowland",
  year: "1988",
  heading: "Shadowland — k.d. lang (1988)",

  albumLine:
    "Released in 1988 on Sire and Warner Bros., produced by Owen Bradley at Bradley's Barn in Mount Juliet, Tennessee. It's countrypolitan — the lush Nashville Sound of the late fifties and early sixties, built on strings, vocal groups and pedal steel. It followed Angel with a Lariat (1987) and is the first lang record credited to her alone rather than to her band the Reclines.",

  overview: [
    "Singer k.d. lang was 26 and from Consort, Alberta, a town of about 650 people. She had arrived as something closer to cowpunk — cropped hair, publicity shots deliberately hard to read as male or female. \"I like to break the standards, break the norms,\" she told the news agency UPI in May 1988. Nashville, then in its own neo-traditionalist turn, did not know where to put her. She described her style as \"torch with a twang\": singers Peggy Lee and Ella Fitzgerald on one side, Patsy Cline, Loretta Lynn and Kitty Wells on the other.",

    "Bradley was the architect of the sound she wanted. He ran A&R at Decca's Nashville operation for roughly thirty years and produced all of Cline's major hits before leaving corporate life at 60. lang pursued him and he was not interested — he told the Spectator in 1988 that he wasn't looking for work and had recently had a heart attack. Recovering in hospital, he saw her sing on Johnny Carson's show in June 1987 and changed his mind; music executive Mary Martin arranged the introduction. He refused to call it a comeback: \"Actually, I've never been away.\"",

    "It began as six songs; when the label heard them it asked for an album. The two chose the material together, ranging across Bradley's career from traditional country to blues-tinged pop and jazz standards, and sessions were unhurried — roughly an hour of socialising, an hour of work, then playback. \"We're just going to be friends no matter what,\" lang said, and she called the result \"as much an Owen Bradley record as it is a k.d. lang record.\" Worth flagging: she told UPI she had brought her own band for a sound \"not found in Nashville,\" but the credits are dominated by Bradley's veterans — his brother, bassist Harold Bradley, pianist Hargus \"Pig\" Robbins, drummer Buddy Harman, steel player Buddy Emmons, and the vocal quartet the Jordanaires.",

    "The Canadian Country Music Association named it Album of the Year for 1988, and it reached No. 9 on the US country chart. Critics split over whether the reverence was the point: Rolling Stone gave it four stars, but Greg Quill in the Toronto Star called it \"a self-conscious anachronism, haunted by vague, 25-year-old memories\" and preferred the rowdier record before it.",
  ],

  listeningNotes: [
    {
      label: "Strings that hold rather than answer",
      text: "The Nashville String Machine, arranged by Bill McElhiney, sits under the vocal in long sustained chords instead of playing fills around it. That restraint is the core of Bradley's method, and it leaves the voice exposed.",
    },
    {
      label: "The wordless vocal-group cushion",
      text: "The Jordanaires hum and sigh behind lang on three tracks without singing a lyric — the same padding Bradley used on the Cline sessions a quarter-century earlier.",
    },
    {
      label: "Phrasing dragged behind the beat",
      text: "lang sings late, trailing the band the way a torch singer would rather than riding on top of it. The jazz half of \"torch with a twang\" isn't decoration.",
    },
    {
      label: "Pedal steel as a second voice",
      text: "Emmons plays long bent notes answering the vocal, closer to a singing partner than a country ornament.",
    },
    {
      label: "A song chosen because it was hard",
      text: "Bradley picked the title song, held for some twenty-five years and once called unsingable by him, for its difficulty. He expected lang to drop it in days; she didn't.",
    },
    {
      label: "Four voices around one song",
      text: "For the closing medley Bradley reunited surviving singers from his Decca years — Lynn, Wells and Brenda Lee — wanting material \"light, fun and not too hard.\"",
    },
  ],

  sources: [
    { title: "Shadowland (k.d. lang album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Shadowland_(k.d._lang_album)" },
    { title: "\"She has been compared to the late Patsy Cline\" — UPI, 20 May 1988", url: "https://www.upi.com/Archives/1988/05/20/She-has-been-compared-to-the-late-Patsy-Cline/2271580104000/" },
    { title: "Keeping Owen Bradley in the Barn — The Spectator, June 1988", url: "https://octopusmediaink.com/keeping-owen-bradley-in-the-barn/" },
    { title: "Owen Bradley — Country Music Hall of Fame and Museum", url: "https://www.countrymusichalloffame.org/hall-of-fame/owen-bradley" },
    { title: "Shadowland — AllMusic review", url: "https://www.allmusic.com/album/shadowland-mw0000652109" },
  ],

  influencedBy: [
    { artist: "Patsy Cline", album: "Patsy Cline Showcase", year: "1961", note: "The template this record consciously reruns: the same producer, Bradley, and the same devices — sustained strings, the Jordanaires behind the voice, slow tempos. lang has called Bradley's work with singer Patsy Cline the reason she started singing country at all." },
    { artist: "Peggy Lee", album: "Black Coffee", year: "1953", note: "lang named singer Peggy Lee among the torch models behind \"torch with a twang,\" and this album takes the Sonny Burke and Paul Francis Webster title song that Lee's record made famous." },
    { artist: "Loretta Lynn", album: "Don't Come Home A-Drinkin' (With Lovin' on Your Mind)", year: "1967", note: "lang named singer Loretta Lynn as a direct influence; Bradley produced her too, and Lynn sings on this album's closing medley." },
  ],

  influenced: [],
});
