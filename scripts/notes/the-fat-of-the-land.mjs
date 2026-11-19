import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "The Prodigy",
  album: "The Fat Of The Land",
  year: "1997",
  heading: "The Fat Of The Land — The Prodigy (1997)",

  albumLine:
    "Released 30 June 1997 on XL Recordings (the article text on Wikipedia says the first week of July) and produced by Liam Howlett, the group's keyboardist and songwriter. It's big beat crossed with punk and metal attitude, and it's The Prodigy's third album, after Music for the Jilted Generation (1994).",

  overview: [
    "Howlett produced, recorded and mixed it himself at Earthbound, his studio in Essex, which writer Andy Price of MusicTech says had grown from a home setup into a larger hub after the previous album. His method was to start from loops of obscure soul and funk breaks, pitch and distort them, then add his own instruments to fit. He sketched ideas on a Roland W-30 — \"for about four months I didn't go out\" — and bought an Akai S3200 during the sessions. For the first time he used software, mixing and sequencing in Cubase on an early Mac, according to writer Angus Batey of The Quietus; the Korg Prophecy, a monophonic synth, ran through nearly every track.",

    "The voices came last. Keith Flint, previously the group's dancer, made his first vocal appearances here, and rapper Kool Keith, Kula Shaker singer Crispian Mills and Rage Against the Machine guitarist Tom Morello guested. Howlett's own account of the working relationship is plain: \"Keith's no singer, and he's not trying to be, that's Keith.\" His gaming delayed the album for months — Wikipedia says he joined a PlayStation league run by Muzik reporter Martin James — while the label pressed him to finish.",

    "It's in the book 1001 Albums You Must Hear Before You Die (2010 edition, per Wikipedia), and Metal Hammer called it \"the point at which rave culture collided with metal culture.\" Contemporary reaction was strong: NME said \"the album rools,\" and Rolling Stone called it \"a thrilling, intoxicating nightmare of a record.\" Its reputation has since split. Writer Ed Power of The Independent notes that Rolling Stone's and Pitchfork's 1990s lists both omit it, and Pitchfork's own score dropped from 7.9 in 1999 to 5.9 in 2018.",

    "One single drew accusations of misogyny; the National Organization for Women objected, and Howlett told Q, \"That record was for the fans. Only brainless people get some stupid message out of it.\" Power also records Richard Russell, head of XL: \"Is it art? Yes, just about, and a great deal of art is not pleasant.\"",
  ],

  listeningNotes: [
    {
      label: "Guitar notes turned into sampler riffs",
      text: "Howlett said, \"This is actually rock music written on electronic equipment.\" Guitarist Jim Davies plays on \"Firestarter\" and \"Breathe,\" but the riffs are rebuilt in the sampler rather than played straight through.",
    },
    {
      label: "A growl on a breakbeat",
      text: "On \"Firestarter\" Flint delivers what Melody Maker's Martin James called \"a 60-Marlboros-a-day growl,\" over an E-mu SP1200 break. Howlett played him the instrumental first to see what he thought.",
    },
    {
      label: "An indie riff in a rave track",
      text: "The looped wah-wah guitar in \"Firestarter\" is sampled from The Breeders' \"S.O.S.\" on Last Splash, which is why Breeders singer Kim Deal is credited as a writer.",
    },
    {
      label: "A vocal re-sung to clear a sample",
      text: "On \"Smack My Bitch Up\" Shahin Badar sang the female part, based on singer Sheila Chandra's \"Nana (The Dreaming)\"; Howlett first sampled Chandra directly, then had it re-sung after clearance problems, per Wikipedia. The refrain comes from Kool Keith on Ultramagnetic MCs' \"Give the Drummer Some.\"",
    },
    {
      label: "Vocals in half an hour",
      text: "Howlett says Flint and Maxim Reality finished their vocals for \"Breathe\" in half an hour once the instrumental existed, which explains how loose and instinctive it sounds.",
    },
  ],

  sources: [
    { title: "Landmark Productions: The Prodigy — The Fat of the Land — MusicTech (Andy Price, 2015)", url: "https://theprodigy.info/articles/landmark-productions-the-prodigy-the-fat-of-the-land.html" },
    { title: "20 Years On: The Prodigy's The Fat Of The Land — The Quietus (Angus Batey, 2017)", url: "https://thequietus.com/?p=22716" },
    { title: "The Fat of the Land — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Fat_of_the_Land" },
    { title: "Smack My Bitch Up — Wikipedia", url: "https://en.wikipedia.org/wiki/Smack_My_Bitch_Up" },
    { title: "Firestarter (The Prodigy song) — Wikipedia", url: "https://en.wikipedia.org/wiki/Firestarter_(The_Prodigy_song)" },
    { title: "Firestarters not welcome: how The Fat of the Land fell out of favour — The Independent (Ed Power, 2022)", url: "https://theprodigy.info/articles/england/firestarters-not-welcome-how-the-prodigys-the-fat-of-the-land-fell-out-of-favour.html" },
  ],

  influencedBy: [
    { artist: "L7", album: "Hungry for Stink", year: "1994", note: "The band covers an L7 song on this album, credited on Wikipedia to L7's Donita Sparks and co-writers." },
    { artist: "Ultramagnetic MCs", album: "Critical Beatdown", year: "1988", note: "Wikipedia says the refrain and altered vocals of one single were sampled from a song by this group, which was produced for that album." },
    { artist: "Rage Against the Machine", album: "Evil Empire", year: "1996", note: "Wikipedia's page for the source song says The Prodigy sampled it on their single; Howlett told The Quietus the band are \"one of my favourite bands.\"" },
    { artist: "The Breeders", album: "Last Splash", year: "1993", note: "The looped wah-wah guitar riff on the lead single is sampled from a track on this album, per Wikipedia, which is why Kim Deal is credited as a writer." },
  ],

  influenced: [],
});
