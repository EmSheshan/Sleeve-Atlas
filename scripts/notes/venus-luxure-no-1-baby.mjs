import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Girls Against Boys",
  album: "Venus Luxure No. 1 Baby",
  year: "1993",
  heading: "Venus Luxure No. 1 Baby — Girls Against Boys (1993)",

  albumLine:
    "Released 20 August 1993 on Touch and Go, produced by Ted Niceley and recorded that February at Oz Studio in Baltimore. Eleven tracks, forty-six minutes of post-hardcore built around two bass guitars — their second album, and the one where the band became itself.",

  overview: [
    "They came out of the Washington DC hardcore scene, which by the late eighties had produced a particular kind of musician: technically capable, ideologically suspicious of the music industry, and bored of playing fast. The band started in 1989 as a studio experiment between Eli Janney and Brendan Canty of Fugazi, aimed at whatever they could not do in their main bands. Scott McCloud, Johnny Temple and Alexis Fleisig — all veterans of the Dischord Records band Soulside — filled it out, Canty dropped away, and the four of them moved to New York to do it properly.",

    "The line-up is the whole idea. Temple plays bass, Janney plays bass and sampler, McCloud plays guitar and sings, Fleisig drums. Two basses means the bottom of the record is enormous and the guitar is free to be decorative rather than structural — the opposite of how a rock band usually divides labour. It also means the songs groove, which in 1993 marked them out sharply from their peers.",

    "That matters because of when it arrived. This is a year after \"Nevermind\" had made loud American guitar music commercially central, and the label response was to sign everything that sounded angry. Girls Against Boys were plainly not that: the record is sexual rather than anguished, cool rather than confessional, closer to a nightclub than a garage. McCloud had deliberately moved his singing away from hardcore shouting towards the Fall and the Velvet Underground — talked, insinuated, half-bored. The band's cited reference points were Joy Division, Big Black and Sonic Youth rather than anyone from Seattle.",

    "AllMusic's Ned Raggett wrote that \"the quartet had really turned into something spectacular,\" adding that they \"kicked out the jams like nobody's business,\" and the album is where most people start with them. The major labels came for them a few years later; McCloud has said the band's reluctance \"only made the majors go more crazy for us.\" They signed to Geffen, released \"Freak*on*ica\" in 1998, and then Geffen was swallowed by Seagram and effectively shut, leaving them stranded for two years — a very ordinary end to that decade's story.",
  ],

  listeningNotes: [
    {
      label: "Two basses, split high and low",
      text: "One holds the root while the other plays melodically further up the neck, so the low end carries both rhythm and tune and the guitar becomes an extra.",
    },
    {
      label: "Sampler and keyboard as atmosphere",
      text: "Janney drops in synth pads, organ swells and treated noise between the riffs, giving a hardcore-descended band an almost cinematic haze.",
    },
    {
      label: "McCloud's half-spoken delivery",
      text: "He mutters, drawls and lets lines trail off rather than projecting. The lack of effort is the point, and it makes the loud parts land harder.",
    },
    {
      label: "Grooves that stay put",
      text: "Fleisig plays tight, repetitive, almost danceable patterns instead of hardcore acceleration, so tracks build tension by refusing to change.",
    },
    {
      label: "Niceley's dry, upfront production",
      text: "Everything is close-miked with little reverb and the bass mixed as loud as the drums — the same clarity he brought to Fugazi that year.",
    },
  ],

  sources: [
    { title: "Venus Luxure No. 1 Baby — Wikipedia", url: "https://en.wikipedia.org/wiki/Venus_Luxure_No._1_Baby" },
    { title: "Girls Against Boys — Wikipedia", url: "https://en.wikipedia.org/wiki/Girls_Against_Boys" },
    { title: "Venus Luxure No. 1 Baby — AllMusic review", url: "https://www.allmusic.com/album/venus-luxure-no-1-baby-mw0000100310" },
  ],

  influencedBy: [
    { artist: "Joy Division", album: "Unknown Pleasures", year: "1979", note: "Bass-led, atmospheric, deliberately affectless — the clearest single model for what this band does with a rhythm section." },
    { artist: "Fugazi", album: "Repeater", year: "1990", note: "The DC post-hardcore scene they all came from; Brendan Canty co-founded the band and Ted Niceley produced both." },
    { artist: "The Velvet Underground", album: "White Light/White Heat", year: "1968", note: "McCloud moved his singing towards this kind of flat, insinuating, half-spoken delivery." },
  ],

  influenced: [
    { artist: "Queens of the Stone Age", album: "Rated R", year: "2000", note: "The repetitive, low-slung, sexualised American rock groove with a bored vocal over it shares this record's design." },
    { artist: "Interpol", album: "Turn On the Bright Lights", year: "2002", note: "New York's early-2000s post-punk revival ran on exactly this combination of prominent bass, dry drums and a deadpan baritone." },
  ],
});
