import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Kings of Leon",
  album: "Aha Shake Heartbreak",
  year: "2004",
  heading: "Aha Shake Heartbreak — Kings of Leon (2004)",

  albumLine:
    "Released 1 November 2004 in Europe and 22 February 2005 in the US on RCA, and produced by Ethan Johns with Angelo Petraglia, Aha Shake Heartbreak is an alternative and Southern-rock album with a garage-rock edge. It's the second album from Kings of Leon, following 2003's Youth & Young Manhood.",

  overview: [
    "The band was a family: three brothers — singer and guitarist Caleb Followill, drummer Nathan Followill and bassist Jared Followill — and their cousin, guitarist Matthew Followill, all from Nashville. A.V. Club critic Noel Murray described the 2003 debut as \"thinner and sparer, sort of like a hick version of The Strokes,\" a band \"reaching for a new voice before it had learned to talk.\" Then came constant touring. \"We played so many shows and saw so much stuff, that when we got time off, it was just pouring out,\" Nathan told Rolling Stone.",

    "The band reteamed with producer Ethan Johns for a five-week, twelve-song stint in summer 2004. \"On the last record there were no expectations, because we had no fans and we had never made music before,\" Nathan said. \"On this one we knew what we wanted, and we were very comfortable and confident.\" Rolling Stone said the new material reflects influences including Run-DMC, Talking Heads and the Ronettes, and Nathan added that some songs sound like Kings of Leon at once while others \"take three or four listens to realize that it's us.\" Sources differ on where it was cut: Rolling Stone says Studio City, California, while Wikipedia says Three Crows Studio in Los Angeles, on the Beatles' old Abbey Road mixing desk, from April to June.",

    "It is the only Kings of Leon album with a Parental Advisory label. Critics were divided: Guardian critic Alexis Petridis gave it four stars out of five and NME critic Rob Fitzpatrick 8/10, while Pitchfork critic Stephen M. Deusner scored it 4.9/10; Metacritic averages 74 across 31 reviews. Murray called it \"a more confident and surprising set\" that \"sounds both unpretentious and new.\" Rolling Stone later ranked it the 39th best album of its decade.",

    "It has sold more than 910,000 copies worldwide. In September 2008, when all four of the band's studio albums were in Australia's top 50, it reached number 25 there and was certified 2× platinum in January 2009. When the band followed it with a third album, NME critic Barry Nicolson wrote that it continued \"the precedent set by\" this record.",
  ],

  listeningNotes: [
    {
      label: "Post-punk guitar and a lullaby coda",
      text: "Murray says the opening notes of \"Slow Night, So Long\" resemble Joy Division's \"Love Will Tear Us Apart,\" before an unexpected lullaby coda; the album moves further toward post-punk and away from twang.",
    },
    {
      label: "Call-and-response and square-dance calls",
      text: "\"Pistol of Fire\" rolls from call-and-response spirituals to whip-crack boogie, while \"King of the Rodeo\" shoots laser-pulsing guitar riffs across rapid-fire square-dance calls.",
    },
    {
      label: "One long groan and bongos",
      text: "\"Milk\" is built around a single long, low groan, and \"Soft\" lets bongos cushion what Murray calls second-generation UK tropicalia.",
    },
    {
      label: "Songs that peter out",
      text: "Murray hears a \"sudden disinterest in conventional song structures,\" songs that peter out rather than end properly — either the band lacking chops or \"a bold expression of the power of deconstruction.\"",
    },
    {
      label: "A Jagger-style sneer",
      text: "Murray says Caleb Followill sings like Mick Jagger in his \"sassy/sad 'Miss You' guise,\" over brothers and cousins bashing out simple riffs halfway between Velvet Underground at its grubbiest and Black Flag at its bass-driven hookiest.",
    },
  ],

  sources: [
    {
      title: "Kings of Leon Get Shakin' — Jolie Lash, Rolling Stone",
      url: "https://www.rollingstone.com/music/music-news/kings-of-leon-get-shakin-234978/",
    },
    {
      title: "Kings Of Leon: Aha Shake Heartbreak — Noel Murray, The A.V. Club",
      url: "https://avclub.com/kings-of-leon-aha-shake-heartbreak-1798200427",
    },
    {
      title: "Kings of Leon: Because of the Times review — Barry Nicolson, NME",
      url: "https://www.nme.com/reviews/8372",
    },
    { title: "Aha Shake Heartbreak — Wikipedia", url: "https://en.wikipedia.org/wiki/Aha_Shake_Heartbreak" },
  ],

  influencedBy: [
    {
      artist: "Kings of Leon",
      album: "Youth & Young Manhood",
      year: "2003",
      note: "The band's own debut, made with the same producer, Ethan Johns; Rolling Stone says the follow-up broadened the sound from that record's bluesy roots, while Nathan Followill said they were now confident rather than starting with no fans.",
    },
  ],

  influenced: [
    {
      artist: "Kings of Leon",
      album: "Because of the Times",
      year: "2007",
      note: "Writing for NME, critic Barry Nicolson said the third album follows the precedent set by this one, steering away from the Creedence Clearwater-style sound many expected, again with producer Ethan Johns.",
    },
  ],
});
