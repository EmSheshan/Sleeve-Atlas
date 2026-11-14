import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "The Streets",
  album: "A Grand Don't Come For Free",
  year: "2004",
  heading: "A Grand Don't Come For Free — The Streets (2004)",

  albumLine:
    "Released 10 May 2004 on Locked On/679, written and produced start to finish by Mike Skinner, the Birmingham-raised rapper and producer who is the Streets' only permanent member. It's a rap opera told in episodes: a man loses £1,000, gains and loses a girlfriend, and finds the money again behind a broken television. It went straight to number one in the UK and sold around 1.4 million copies there.",

  overview: [
    "The narrative wasn't a conceit arrived at late. In his book The Story of the Streets, Skinner explains that he wrote it as \"episodes from a single unfolding narrative\" because he'd \"got so into my songwriting manuals and books by Hollywood screen-writing gurus — not just Robert McKee but Syd Field and John Truby as well\" and wanted to put what he'd learnt into practice. His working belief was that every song needs a drama at its centre, and that once you have the drama the song writes itself.",

    "The licence came from the debut. \"I was lucky that I'd made such an unconventional debut album and it had done all right, because that gave me the confidence to think that what worked for me was telling it like it was,\" he wrote. Like that record it was made in a south London flat rather than a studio — this time his own, in Stockwell, bought with the money from his publishing deal.",

    "Because the plot needs more than one voice, Skinner cast it. The Nottingham rapper C-Mone speaks for the girlfriend in the argument that gets him thrown out, and vocalist Wayne G sings the hooks that critic Alfred Soto, writing for Stereogum, called Skinner's Nate Dogg. The sleeve is by British photographer Ewen Spencer, who shot Skinner in a bus shelter under sodium light; writer Bailey Slater noted in Crack Magazine that the shelter no longer exists.",

    "It scored 91 on Metacritic and beat Scissor Sisters to the top of the UK chart. In Q, critic Garry Mulholland called it \"a spoken-word opera, or a short story with an exquisitely crafted pop soundtrack\"; Pat Blashill, in Rolling Stone, called it \"the best British hip-hop concept album ever\" and judged Skinner's real gift literary. It won the Brit Award for Best British Male Solo Artist, which Skinner found so embarrassing he left before accepting it.",
  ],

  listeningNotes: [
    {
      label: "Loops that refuse to become phrases",
      text: "Soto's favourite is \"Wouldn't Have It Any Other Way\" — a skittery percussion loop under a keyboard line that never develops into a phrase. The music starting and stopping mirrors the repetitions in the lyric, so the domesticity sounds like something being talked into existence.",
    },
    {
      label: "Strings from a sample library, not a session",
      text: "The weeping figure under \"Dry Your Eyes\" came from a public-domain sample library. Songwriter Michael Gagliano later claimed it was lifted from his own \"Yesterday And Today Part 1\"; Skinner answered that he had never heard the track.",
    },
    {
      label: "A hook sung by neither obvious candidate",
      text: "Chris Martin, Coldplay's singer, cut a chorus for that same song which went unreleased. By his own account the released take uses a third singer: \"Then he didn't think that was as good as the version where some other dude sang on the chorus, so neither him nor me sings on the chorus.\"",
    },
    {
      label: "Staccato guitar used as a drum part",
      text: "The chugging guitars on \"Fit But You Know It\" sit on the beat rather than carrying a tune, blocking melodic development until a singsong chorus arrives — a rhythm matching the lurching confidence of the scene it narrates.",
    },
    {
      label: "Sprechgesang mixed to the front",
      text: "Skinner's thin, pinched delivery is pushed up over the beats rather than tucked into them. Critic Tom Ewing put it well: nobody else who \"spins out chat like he does calls it rapping at all\" — closer to post-punk speech-song than to any American flow.",
    },
  ],

  sources: [
    { title: "A Grand Don't Come For Free Turns 20 — Alfred Soto, Stereogum", url: "https://www.stereogum.com/2263714/the-streets-a-grand-dont-come-for-free-turns-20/reviews/the-anniversary/" },
    { title: "A Grand (still) Don't Come For Free: a week with the album, 20 years on — Bailey Slater, Crack Magazine", url: "https://crackmagazine.net/article/long-reads/a-grand-still-dont-come-for-free-the-streets-20th-anniversary/" },
    { title: "Dry Your Eyes by The Streets — Songfacts", url: "https://www.songfacts.com/facts/the-streets/dry-your-eyes" },
    { title: "Looking back on The Streets' A Grand Don't Come For Free — DIY", url: "https://diymag.com/feature/looking-back-on-the-streets-a-grand-dont-come-for-free" },
    { title: "A Grand Don't Come for Free — Wikipedia", url: "https://en.wikipedia.org/wiki/A_Grand_Don%27t_Come_for_Free" },
  ],

  influencedBy: [
    { artist: "The Streets", album: "Original Pirate Material", year: "2002", note: "His own debut, and the stated reason he felt able to attempt this one: its unconventional success convinced him that \"telling it like it was\" worked. Also the template for the method — written and produced alone in a south London flat." },
    { artist: "Blur", album: "Parklife", year: "1994", note: "Soto hears \"bits of the performed laddishness of Parklife-era Blur\" in \"Fit But You Know It\" — the same trick of voicing an English everyman slightly broader than life." },
  ],

  influenced: [
    { artist: "Arctic Monkeys", album: "Whatever People Say I Am, That's What I'm Not", year: "2006", note: "In his first NME cover interview, in October 2005, singer Alex Turner said: \"I like to think I walk the tightrope between Mike Skinner and Jarvis Cocker.\" The debut that followed applies Skinner's close-range reporting on an ordinary night out to a guitar band." },
    { artist: "Lily Allen", album: "Alright, Still", year: "2006", note: "Slater, writing on the album's twentieth anniversary, hears where Allen \"borrowed a flow or two\" — the same conversational, lightly sung English speech-rhythm over pop production." },
  ],
});
