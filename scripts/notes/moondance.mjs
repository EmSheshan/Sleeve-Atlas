import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Van Morrison",
  album: "Moondance",
  year: "1970",
  heading: "Moondance — Van Morrison (1970)",

  albumLine:
    "Released 27 January 1970 in the UK and 28 February 1970 in the US on Warner Bros., and produced by Van Morrison himself. It's R&B, soul, jazz and rock, and it's his third studio album, after Astral Weeks (1968).",

  overview: [
    "After Astral Weeks flopped, Morrison moved to Woodstock with his wife Janet Planet and began writing in July 1969. Writer Melanie Davis of American Songwriter says he wanted a \"commercially palatable\" follow-up and that, according to Planet, \"Van fully intended to become [Bob] Dylan's best friend.\" Wikipedia says he recruited the band from Woodstock and told Warner Bros. he would produce, and that he went into A&R Studios in New York \"with only the basic song structures written down.\" Morrison said he liked \"two horns and a rhythm section — they're the type of bands that I like best.\"",

    "The method was close to jazz. Drummer Gary Mallaber told writer Martin Kielty that Morrison \"approached music more like a jazz artist than a rock or R&B artist\" — \"anything premeditated, none of that existed\" — and that takes were chosen by the vocal: \"The takes were chosen by vocal take, not by band take... Van never went back in and sang a lead vocal again.\" Engineer Elliot Scheiner told Mix writer Gary Eskow the record was \"for the most part\" cut live, and Collin Tilton, who played flute and saxophone, said, \"they did a million rhythm tracks, which was Van singing and John Platania on guitar along with bass and drums.\" Tilton adds, \"I basically wrote the arrangement on 'Moondance.'\" He also says a horn figure behind the vocal is \"sort of a cop from Coltrane's A Love Supreme. It's the same interval.\"",

    "Where the melody came from is known: guitarist John Sheldon recalled the band at a 1968 rehearsal \"fooling around with a Broadway tune called 'Lazy Afternoon'\" in a jazz version by Grant Green; Morrison asked for changes and began to sing the melody. Morrison said, \"I wrote the melody first. I played the melody on a soprano sax and I knew I had a song.\" Credits are disputed: Eskow reports Scheiner and engineer Dixon Van Winkle disagree on who engineered the title song, and Scheiner says he mixed the record with Mallaber in December 1969 while Morrison was in Woodstock.",

    "It's in the book 1001 Albums You Must Hear Before You Die (2005), per Wikipedia; Spin called it in 1989 \"the great white soul album,\" ranking it 21st. Critics Greil Marcus and Lester Bangs wrote in Rolling Stone in 1970 that Morrison had reached \"that point where the influences on his music no longer mattered\" and that \"the horn arrangements are absolutely exquisite.\" Critic Robert Christgau gave it an A: \"Forget Astral Weeks — this is a brilliant, catchy, poetic, and completely successful LP.\"",
  ],

  listeningNotes: [
    {
      label: "Horns written in the studio",
      text: "Tilton's horn arrangement on the title song was built after the rhythm tracks, with the horns overdubbed once the rhythm take was chosen by the vocal.",
    },
    {
      label: "A jazz drummer's brain",
      text: "Writer Mark Leviton of Best Classic Bands says that on \"Everyone,\" \"just listening to Mallaber negotiate the changes is a master class in drumming.\"",
    },
    {
      label: "Backing voices on two songs",
      text: "Singers Judy Clay, Emily Houston and Jackie Verdell sing backing vocals on \"Crazy Love\" and \"Brand New Day.\"",
    },
    {
      label: "A flute cadenza to close",
      text: "The title song ends with a flute trill in its cadenza, per Wikipedia, and Morrison imitates a saxophone near the end; keyboardist Jef Labes's piano solo is followed immediately by saxophonist Jack Schroer's alto solo.",
    },
    {
      label: "Voice that never repeats",
      text: "Engineer Shelly Yakus said, \"Van doesn't use the same voice twice,\" and Morrison himself said he doesn't like working in the studio — \"you just put the mic there and go.\"",
    },
  ],

  sources: [
    { title: "Classic Tracks: Van Morrison's Moondance — Mix (Gary Eskow, 2005)", url: "https://www.mixonline.com/recording/classic-tracks/classic-tracks-van-morrisons-moondance-375246" },
    { title: "Moondance vocals and band takes — Ultimate Classic Rock (Martin Kielty, 2018)", url: "https://ultimateclassicrock.com/van-morrison-moondance-vocals/" },
    { title: "Van Morrison, Moondance review — Best Classic Bands (Mark Leviton)", url: "https://bestclassicbands.com/van-morrison-moondance-review-4-27-222/" },
    { title: "Van Morrison insisted on becoming Dylan's friend — American Songwriter (Melanie Davis, 2026)", url: "https://americansongwriter.com/van-morrison-insisted-on-becoming-this-folk-rock-icons-friend-while-writing-moondance-released-on-this-day-in-1970/" },
    { title: "Moondance (song) — Wikipedia", url: "https://en.wikipedia.org/wiki/Moondance_(song)" },
    { title: "Moondance (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Moondance_(album)" },
    { title: "Moondance — Rolling Stone review reposted by Greil Marcus (1970)", url: "https://greilmarcus.net/2018/04/14/van-morrison-moondance-3-19-70-w-lester-bangs/" },
  ],

  influencedBy: [
    { artist: "John Coltrane", album: "A Love Supreme", year: "1965", note: "Saxophonist and flautist Collin Tilton told Mix that a horn figure behind the vocal is \"sort of a cop from Coltrane's A Love Supreme. It's the same interval.\"" },
    { artist: "The Band", album: "Music from Big Pink", year: "1968", note: "Morrison recalled hearing a Band song on FM radio — either \"The Weight\" or \"I Shall Be Released\" — and biographer Erik Hage and critic Johnny Rogan say it inspired the themes of one Moondance song." },
    { artist: "Grant Green", album: "Street of Dreams", year: "1967", note: "Guitarist John Sheldon recalled the band rehearsing Green's jazz version of \"Lazy Afternoon,\" which led Morrison to the melody of the title song." },
  ],

  influenced: [],
});
