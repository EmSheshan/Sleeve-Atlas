import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "MGMT",
  album: "Oracular Spectacular",
  year: "2007",
  heading: "Oracular Spectacular — MGMT (2007)",

  albumLine:
    "Released digitally on 2 October 2007 and on disc the following January, on RED Ink and Columbia, produced by Dave Fridmann. Forty minutes of psychedelic pop, synth-pop and what the press of the moment called new rave — their debut, and one of the decade's great accidents.",

  overview: [
    "Andrew VanWyngarden and Ben Goldwasser met at Wesleyan University in 2001 and started making dance tracks in a dorm room from stock loops on a laptop. The project — first called the Management — was a joke about being rock stars: they played living rooms in fur coats, drinking champagne, behaving like idiots, and once performed a forty-five-minute cover of the Ghostbusters theme. \"Time to Pretend\" and \"Kids\", the two songs that eventually made them famous, were written as satire of exactly that pose.",

    "This is the fact that governs the whole record and is usually left out. Goldwasser has said plainly that they couldn't sustain an album of joke songs and had to shift into music they actually wanted to make. So it sits on a genuine fault line: the singles retain the original irony — a lyric about dying young and living fast delivered over a hook engineered to be adored — while the rest is sincere neo-psychedelia with no punchline at all. The joke escaped and became the thing it was mocking, which is why the album is more interesting than its reputation as a party record suggests.",

    "Dave Fridmann is the reason it sounds enormous. He had produced the Flaming Lips and Mercury Rev, and he brought the same approach: compress everything until it distorts, bury detail in the mix, make the drums crack. Two students with a laptop came out sounding like a stadium band, which flattered the satire and undercut it simultaneously.",

    "It arrived at the right moment — indie had just started making peace with dance music and the blogs were the distribution system — and it went two times platinum in America despite reaching only No. 38 there, doing better abroad at No. 8 in Britain and No. 4 in Australia. NME made it their album of 2008 and Rolling Stone later placed it 494th among the greatest, describing it as \"a suite of synthesized heartache.\" It divided people too: AllMusic's Jason Lymangrover called the songs \"some of the catchiest pop songs to come from NYC since the turn of the millennium,\" while PopMatters' Matt Fiander found the second half settling into \"a more monotone kind of space rock.\" Both halves are the album.",
  ],

  listeningNotes: [
    {
      label: "Fridmann's overdriven compression",
      text: "Drums and synths are squashed until they audibly clip, giving a bedroom recording a huge, ragged front. It's his signature and it's everywhere here.",
    },
    {
      label: "Falsetto over cheap synth tones",
      text: "VanWyngarden sings high and slightly strained above preset-sounding keyboards, a deliberate mismatch between earnest delivery and disposable texture.",
    },
    {
      label: "Hooks built to be irresistible on purpose",
      text: "The singles use simple, repeating synth figures pitched high in the mix — written as parody of what a hit does, and functioning as one anyway.",
    },
    {
      label: "A second half that stops being pop",
      text: "The back end drifts into longer, hazier psychedelic pieces with looser structures and few hooks. Whether that's a collapse or the point is the album's standing argument.",
    },
    {
      label: "Samples used as scenery",
      text: "Bird calls, tape noise and stray found sound sit inside otherwise clean arrangements, a trick from sixties psychedelia rather than from dance production.",
    },
  ],

  sources: [
    { title: "Oracular Spectacular — Wikipedia", url: "https://en.wikipedia.org/wiki/Oracular_Spectacular" },
    { title: "How MGMT accidentally made one of the best albums of the 2000s — Double J", url: "https://www.abc.net.au/listen/doublej/music-reads/features/mgmt-oracular-spectacular-classic-album/102150120" },
    { title: "MGMT go from goofs to rock stars on 'Oracular Spectacular' — Diffuser", url: "https://diffuser.fm/mgmt-oracular-spectacular/" },
  ],

  influencedBy: [
    { artist: "The Flaming Lips", album: "The Soft Bulletin", year: "1999", note: "Fridmann produced it, and its blown-out drums and orchestral psychedelia are the direct production model." },
    { artist: "T. Rex", album: "Electric Warrior", year: "1971", note: "The glam template the singles are satirising — rock stardom as costume, sung in a high strained voice." },
    { artist: "Brian Eno", album: "Here Come the Warm Jets", year: "1974", note: "Art-school pop built from synthesizers and studio accident, which the album's unironic second half works from." },
  ],

  influenced: [
    { artist: "Tame Impala", album: "Lonerism", year: "2012", note: "Bedroom-made psychedelia produced to sound vast, with a high fragile voice over saturated synths." },
    { artist: "Foster the People", album: "Torches", year: "2011", note: "The falsetto-and-synth-hook indie pop formula that followed this album straight onto commercial radio." },
  ],
});
