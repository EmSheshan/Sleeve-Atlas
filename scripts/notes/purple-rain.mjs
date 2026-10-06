import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Prince",
  album: "Purple Rain",
  year: "1984",
  heading: "Purple Rain — Prince (1984)",

  albumLine:
    "Released 25 June 1984 on Warner Bros., produced by Prince and credited to Prince and the Revolution, recorded between May 1983 and March 1984 across studios in Minnesota, New York and Hollywood. It's funk, rock, pop and gospel welded together — and the soundtrack to his own film.",

  overview: [
    "The strategy behind it was audacious for a 25-year-old: an album, a feature film and a tour conceived as one object, with the album serving a story about a Minneapolis musician not entirely unlike himself. It worked to a degree almost nobody has matched. Prince and the Revolution held the No. 1 album, the No. 1 single and the No. 1 film in America simultaneously — a feat otherwise achieved only by Elvis Presley and the Beatles.",

    "Musically its argument was about category. American radio in 1984 was heavily segregated in practice, with Black artists routed to R&B stations and rock reserved largely for white ones — the reason MTV's early refusal to play Black artists had become a public fight. Prince simply ignored the division. The album opens with a rock guitar solo, contains a ballad that resolves into a gospel climax, and builds its biggest hit on a drum machine with the bass deliberately removed. Pitchfork's Carvell Wallace described him as bursting \"forth from the ghetto created by mainstream radio.\"",

    "It's also the record where his band matters most. The Revolution had just expanded to include guitarist Wendy Melvoin and keyboardist Lisa Coleman alongside Doctor Fink, Brownmark and Bobby Z., and three tracks — including the title song — were captured live with them at First Avenue in Minneapolis on 3 August 1983, then overdubbed the following month. Prince played enormous amounts of everything himself, as usual, but this doesn't sound like a solo project.",

    "The numbers: 24 consecutive weeks at No. 1, 13× platinum in the US, over 25 million copies worldwide, two Grammys and an Academy Award. It also produced an unintended legacy — \"Darling Nikki\" prompted Tipper Gore and the Parents Music Resource Center to push for content warnings, which is why records carry Parental Advisory stickers. Rolling Stone places it eighth among the greatest albums ever made; Pitchfork gave it a perfect score; the Library of Congress added it to the National Recording Registry in 2012.",
  ],

  listeningNotes: [
    {
      label: "A hit single with no bass",
      text: "\"When Doves Cry\" has its bassline removed entirely, leaving drum machine, keyboards and voice over a hole where the low end should be. It's the most conspicuous absence in eighties pop and it went to No. 1.",
    },
    {
      label: "The LM-1 drum machine",
      text: "Much of the record is built on a Linn LM-1, programmed hard and dry rather than made to sound like a drummer. That machine plus a live band is the Minneapolis sound in miniature.",
    },
    {
      label: "Rock guitar in a funk record",
      text: "Prince plays extended, distorted, bent-note solos of the kind rock radio reserved for guitar heroes, dropped into songs built on funk rhythm. The genre-crossing is done with the guitar tone itself.",
    },
    {
      label: "Three tracks recorded live",
      text: "The title song and two others were captured at First Avenue in Minneapolis with an audience present, then overdubbed. The crowd and the room are audible, and the album's biggest emotional peak is a live take.",
    },
    {
      label: "The gospel turn",
      text: "The title track abandons its verse structure near the end for a long, rising, choir-like coda over a repeating chord sequence — a church device used to close a rock ballad.",
    },
    {
      label: "Voices pitched up and down",
      text: "Prince layers his own vocals at different speeds and registers, from a deep spoken murmur to a strained falsetto, so several songs sound like a conversation between multiple people who are all him.",
    },
  ],

  sources: [
    { title: "Purple Rain (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Purple_Rain_(album)" },
    { title: "Purple Rain — Pitchfork", url: "https://pitchfork.com/reviews/albums/prince-purple-rain/" },
    { title: "National Recording Registry — Library of Congress", url: "https://www.loc.gov/programs/national-recording-preservation-board/recording-registry/complete-national-recording-registry-listing/" },
  ],

  influencedBy: [
    { artist: "Sly & the Family Stone", album: "There's a Riot Goin' On", year: "1971", note: "The integrated, multi-racial band playing funk-rock with a drum machine — a direct structural ancestor." },
    { artist: "Jimi Hendrix", album: "Are You Experienced", year: "1967", note: "The precedent for a Black guitarist claiming rock soloing as his own territory, which Prince's playing here consciously extends." },
    { artist: "Joni Mitchell", album: "The Hissing of Summer Lawns", year: "1975", note: "Prince repeatedly named Mitchell as a formative influence, particularly her harmonic writing and studio approach." },
  ],

  influenced: [
    { artist: "Janet Jackson", album: "Control", year: "1986", note: "Produced in Minneapolis by Jam and Lewis out of Prince's orbit; the drum-machine-plus-funk-band sound comes straight from here." },
    { artist: "OutKast", album: "Speakerboxxx/The Love Below", year: "2003", note: "André 3000's genre-refusing, falsetto-driven funk-rock is explicitly modelled on this period of Prince." },
    { artist: "D'Angelo", album: "Voodoo", year: "2000", note: "Part of the neo-soul lineage built on Prince's example of a self-contained multi-instrumentalist auteur." },
  ],
});
