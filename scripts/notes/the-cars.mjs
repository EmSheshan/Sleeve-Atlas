import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "The Cars",
  album: "The Cars",
  year: "1978",
  heading: "The Cars — The Cars (1978)",

  albumLine:
    "Released 6 June 1978 on Elektra and produced by Roy Thomas Baker, then best known for his work with Queen. Nine songs of new wave built on power-pop bones and synthesizer hooks, cut at AIR Studios in London in February 1978. It's the Boston five-piece's debut.",

  overview: [
    "Singer and rhythm guitarist Ric Ocasek and bassist Benjamin Orr had been playing together since Cleveland, through a folk-rock group called Milkwood and an acoustic duo, before settling in Boston. Guitarist Elliot Easton and keyboard player Greg Hawkes came from Berklee; drummer David Robinson arrived from the Modern Lovers and named the band. By 1976 punk had cleared the ground in New York and London, and the Cars were part of the commercial translation that followed — arch, synthetic, tuneful, allergic to the long guitar solos of the album-rock stations they would soon colonise.",

    "Radio got there before the label did. Boston DJ Maxanne Sartori played the band's demos on WBCN for nearly a year before any album existed. They signed to Elektra over Arista partly because Elektra had almost no new wave on its roster, so they'd stand out. Baker took them to George Martin's AIR Studios in London and gave the songs a finish the demos didn't have. Easton described the brief as \"get real balls but with clarity,\" called Baker \"absolutely brilliant,\" and noted that he \"wore out several engineers.\" Hawkes on the lyrics: \"There was definitely a little self-conscious irony in there.\" Nobody liked the sleeve — the label commissioned it, and Robinson thought it \"way too slick.\"",

    "It peaked at a modest No. 18 on the Billboard 200 but stayed on the chart for 139 weeks and went on to six-times platinum in the US. Critic Kit Rachlis, writing in Rolling Stone, found \"the pop songs are wonderful\" while objecting to Baker's gloss; critic Robert Christgau gave it a B+, praised playing that was \"tight and tough,\" and thought the production added roughly as much as it cost. Easton later joked the record should have been called The Cars' Greatest Hits. It entered the National Recording Registry in 2024. Brandon Flowers, the Killers' singer, summed up the band's position when he inducted them into the Rock & Roll Hall of Fame in 2018: they \"were able to exist in that highly coveted sweet spot where credibility and acclaim meet huge commercial success.\"",
  ],

  listeningNotes: [
    {
      label: "Queen-sized vocal stacks",
      text: "Baker layered backing vocals in the dense multi-tracked blocks he'd built for Queen, then dropped them onto terse three-minute pop songs. The choruses are effectively a choir.",
    },
    {
      label: "Two lead voices, two temperaments",
      text: "Ocasek's flat, nasal deadpan against Orr's warmer tone, with Ocasek handing over the songs that needed selling. On \"Just What I Needed\" he said simply: \"If it needed to have a good voice, it needed to be Ben.\"",
    },
    {
      label: "Synthesizer as hook, not wash",
      text: "Hawkes plays short bright melodic figures that work the way a guitar riff does, rather than pads underneath. Robinson adds electronic Syndrum accents alongside the kit.",
    },
    {
      label: "Rockabilly picking inside new wave",
      text: "Easton's leads are compact and melodic, phrased closer to fifties country-rock than to punk. It's what keeps the record from sounding purely mechanical.",
    },
    {
      label: "Separation over thickness",
      text: "Baker's mix keeps every part individually audible — nothing is buried, nothing smears. That clarity is why the album translated to both rock radio and new wave playlists.",
    },
  ],

  sources: [
    {
      title: "The Cars' Genre-Defying Self-Titled Debut: Track-by-Track — Ultimate Classic Rock",
      url: "https://ultimateclassicrock.com/the-cars-debut-track-by-track/",
    },
    {
      title: "Ric Ocasek — AllMusic biography",
      url: "https://www.allmusic.com/artist/ric-ocasek-mn0000889097",
    },
    { title: "The Cars (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Cars_(album)" },
  ],

  influencedBy: [
    {
      artist: "The Velvet Underground",
      album: "The Velvet Underground & Nico",
      year: "1967",
      note: "Ocasek named them his favourite band after Bob Dylan and called this record highly influential on him; the flat, near-spoken vocal delivery over a two-chord pulse is the inheritance.",
    },
    {
      artist: "The Modern Lovers",
      album: "The Modern Lovers",
      year: "1976",
      note: "A direct personnel link — Robinson drummed on it before joining the Cars — and the same trick of running deadpan vocals over simple repeating changes.",
    },
    {
      artist: "Roxy Music",
      album: "For Your Pleasure",
      year: "1973",
      note: "Cited among the influences on Ocasek's pre-Cars bands: arch, mannered singing set against synthesizer textures rather than against a straight rock band.",
    },
    {
      artist: "Queen",
      album: "A Night at the Opera",
      year: "1975",
      note: "Not a listening influence but a shared person: Baker brought the layered multi-tracked vocal technique he'd developed here straight into these sessions.",
    },
  ],

  influenced: [
    {
      artist: "Weezer",
      album: "Weezer",
      year: "1994",
      note: "Ocasek produced it, importing the same approach — crunching guitars under stacked harmony vocals and hooks arranged with pop-single economy.",
    },
    {
      artist: "The Killers",
      album: "Hot Fuss",
      year: "2004",
      note: "Flowers inducted the Cars into the Rock & Roll Hall of Fame and singled out Easton's solos; the Killers build songs the same way, a synthesizer figure carrying the hook over guitar.",
    },
  ],
});
