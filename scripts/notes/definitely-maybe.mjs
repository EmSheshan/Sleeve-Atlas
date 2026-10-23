import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Oasis",
  album: "Definitely Maybe",
  year: "1994",
  heading: "Definitely Maybe — Oasis (1994)",

  albumLine:
    "Released 29 August 1994 on Creation Records, with production credited across Owen Morris, the band, Mark Coyle and David Batchelor after two abandoned attempts at the record. It's Britpop at its loudest and least ornamented — a debut that went straight to No. 1 and was, at the time, the fastest-selling first album in British history.",

  overview: [
    "Britain in 1994 was four years into John Major's Conservative government, and the singles chart was held by Wet Wet Wet, Ace of Base and East 17. Oasis, from Greater Manchester, arrived with an explicit target: Noel Gallagher, the band's guitarist and sole songwriter, said that \"if we're gonna get rid of Phil Collins and Sting... we've got to get in the charts and stamp 'em out.\" He also wrote partly against the nihilism of American grunge, replacing its self-disgust with something closer to gratitude. He has since described the album as \"an honest snapshot of working-class lads trying to make it\" — and said of the band, \"we weren't the best musicians, but we had spirit, man.\"",

    "Getting it on tape took three goes. The first, at Monnow Valley in Wales with producer David Batchelor, was scrapped; rhythm guitarist Paul \"Bonehead\" Arthurs called the results \"thin. Weak. Too clean.\" Noel, then 27, has described the generational standoff — he wanted to \"compress the shit out of this so that the speakers blow up,\" and got back \"nope, 'cause this is the way we done it in our day, son.\" The band re-cut it at Sawmills in Cornwall with Mark Coyle; Noel's verdict was \"it sounded fucking shit,\" and he remembers thinking \"I give up.\" Manager Marcus Russell then handed the tapes to engineer Owen Morris, who mixed at Loco Studios in Wales and The Matrix in London, where singer Liam Gallagher re-recorded some vocals.",

    "Morris is the reason it sounds the way it does. He stripped away most of Noel's guitar overdubs while keeping enough to open out each chorus, and then compressed the finished master beyond what was considered professional — engineer Anjali Dutt found the result abrasive and wearing. It worked: the album entered at No. 1 on 4 September 1994, outselling the runner-up by roughly half again, and has since passed 2.6 million UK chart units. Keith Cameron of NME called Noel \"a pop craftsman in the classic tradition and a master of his trade,\" and its standing has only hardened — NME readers voted it the greatest album ever in 2006, and Rolling Stone placed it at No. 217 on its 2020 greatest-albums list.",
  ],

  listeningNotes: [
    {
      label: "Brick-walled mastering",
      text: "Morris pushed the level to the ceiling of what a CD could hold without distorting, a technique he claims to have invented. It's why the record sounds relentlessly loud even at low volume, and why some engineers found it fatiguing.",
    },
    {
      label: "Guitars stacked, then stripped",
      text: "Noel overdubbed many layers over live-feeling takes, and Morris removed most of them in the mix. What's left is a thick single mass of rhythm guitar rather than distinguishable parts.",
    },
    {
      label: "Tape delay smeared across the drums",
      text: "Morris added eighth-note tape delays to the kit, and on \"Columbia\" used delay to double the drums outright. The rhythm pushes and blurs instead of snapping.",
    },
    {
      label: "Bass filtered through a Minimoog",
      text: "The bass was routed through a Minimoog and its filters used to cut the high end. It thickened the low end and, by Morris's own account, concealed imprecise playing.",
    },
    {
      label: "Parts simple enough to copy",
      text: "The drum patterns and guitar voicings are playable by beginners almost without exception. That accessibility is part of why a generation of British bands learned their trade from this record.",
    },
  ],

  sources: [
    { title: "Oasis's Definitely Maybe at 30 — Official Charts", url: "https://www.officialcharts.com/chart-news/oasis-definitely-maybe-30-anniversary-reunion/" },
    { title: "Five things that made Definitely Maybe a modern classic — The Conversation", url: "https://theconversation.com/oasis-reunion-five-things-that-made-definitely-maybe-a-modern-classic-234600" },
    { title: "Definitely Maybe — Wikipedia", url: "https://en.wikipedia.org/wiki/Definitely_Maybe" },
  ],

  influencedBy: [
    { artist: "T. Rex", album: "Electric Warrior", year: "1971", note: "Noel Gallagher lifted the \"Get It On\" riff more or less intact, and later said kids at Oasis gigs \"would have never have heard of T. Rex if we hadn't took that riff.\"" },
    { artist: "Sex Pistols", album: "Never Mind the Bollocks, Here's the Sex Pistols", year: "1977", note: "The same undifferentiated wall of distorted rhythm guitar under a sneered vocal; Noel Gallagher has called his own debut the last great punk album." },
    { artist: "The Beatles", album: "Rubber Soul", year: "1965", note: "John Lennon's voice is the template singer Liam Gallagher built his own on, and Noel Gallagher's chord sequences and melodic writing come straight from records like this one." },
    { artist: "The Stone Roses", album: "The Stone Roses", year: "1989", note: "Liam Gallagher names seeing them at Manchester's International 2 in 1989 as the moment he decided to front a band: \"it blew my mind.\"" },
  ],

  influenced: [
    { artist: "The Killers", album: "Hot Fuss", year: "2004", note: "Brandon Flowers has said seeing Oasis live in Las Vegas sent him looking for a guitar player — a search that turned up Dave Keuning and produced the band." },
  ],
});
