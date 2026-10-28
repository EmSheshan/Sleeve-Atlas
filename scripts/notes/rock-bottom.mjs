import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Robert Wyatt",
  album: "Rock Bottom",
  year: "1974",
  heading: "Rock Bottom — Robert Wyatt (1974)",

  albumLine:
    "Released 26 July 1974 on Virgin and produced by Nick Mason, drummer of Pink Floyd. Art rock out of the Canterbury scene — six long pieces built on keyboards and voice rather than guitar. Wyatt's second solo album, and the first after the fall that ended his drumming.",

  overview: [
    "Singer, drummer and songwriter Robert Wyatt founded Soft Machine, drumming and singing at once; his next band, Matching Mole, broke up after their 1972 second album. On 1 June 1973, at a party in Maida Vale, he fell from a fourth-floor window and was paralysed from the waist down.",

    "The tidy version of this record makes it a response to that fall. Wyatt has rejected it. Much of the material was written in Venice over the winter of 1972–73, before the accident, while his partner Alfreda Benge worked as an assistant editor on director Nicolas Roeg's film Don't Look Now. Accounts differ on the proportions: in a 2001 interview Wyatt described composing in Venice and then on his hospital bed, while in a 2010 Gonzaï interview he said the lyrics came as much before the accident as after, with the piano parts worked out in the hospital visiting room. Begun before, finished after, and not about it — though he did say the injury might hand him \"a new kind of freedom,\" since he no longer had to write for a standing band and could pick different players for each song.",

    "What it pushed against was jazz-rock fusion, which Wyatt thought took the weakest elements of both parents and added noodling. He wanted the trade reversed: jazz's rhythm section, looseness and improvisation placed inside the song-forms of rock and folk. So he drew on both scenes — bassists Hugh Hopper and Richard Sinclair, drummer Laurie Allan, trumpeter Mongezi Feza, saxophonist Gary Windo, violist Fred Frith, guitarist Mike Oldfield, and Scottish poet and humorist Ivor Cutler.",

    "Basic tracks were cut in February 1974 at a Wiltshire farm belonging to his friend Delfina Entrecanales, with a Virgin mobile recording van parked in the next field and cables run through the windows. Nothing was soundproofed. Overdubs followed at The Manor in Oxfordshire and CBS in London. Benge drew the cover, a plain pencil drawing of a shoreline, deliberately against the airbrushed fantasy sleeves of the era — the kind designer Roger Dean made for Yes. She and Wyatt married the day it came out.",

    "It sold better than Virgin expected and was well reviewed in NME, Melody Maker and Sounds, reaching No. 13 on Billboard's FM Action airplay chart in early 1975. Virgin's Richard Branson staged a one-off concert at the Theatre Royal, Drury Lane that September, with Mason on drums and broadcaster John Peel as compère. Critic Robert Christgau described a record of \"drones and songs\"; Pitchfork later placed it 98th among albums of the seventies.",
  ],

  listeningNotes: [
    {
      label: "A cheap keyboard's shimmering vibrato",
      text: "Wyatt composed much of this on a basic organ with heavy vibrato, and it tints the record without ever leading it — closer to weather than to an instrument taking a part.",
    },
    {
      label: "The farmyard left on the tape",
      text: "The recording space wasn't soundproofed, so outside noise bled in: donkeys and tractors are audible in the quiet stretches, and nothing was cleaned up.",
    },
    {
      label: "Household objects as percussion",
      text: "The credits list a wineglass, a tray and a small battery, all borrowed from Entrecanales's house, beside conventional drums.",
    },
    {
      label: "A jazz rhythm section inside folk song-form",
      text: "Hopper and Sinclair split the bass and Allan drums loosely, improvising around the beat rather than nailing it down, while the songs stay in plain verse shapes.",
    },
    {
      label: "Voice used as an instrument",
      text: "Wyatt's singing drifts from surreal wordplay into wordless scat. The opening ends in improvised vocalising that critic Simon Reynolds likened to an \"Anglicised\" Bitches Brew.",
    },
    {
      label: "Cutler's deadpan intrusion",
      text: "Near the end, Cutler arrives with spoken voice, baritone concertina and harmonium, tipping the mood from submerged to absurd.",
    },
  ],

  sources: [
    { title: "Rock Bottom (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Rock_Bottom_(album)" },
    { title: "Hitting 'Rock Bottom': How a fall from a window redirected Robert Wyatt's muse — In Sheep's Clothing", url: "https://insheepsclothinghifi.com/robert-wyatt/" },
    { title: "Robert Wyatt on Rock Bottom — six-part interview, 2001 (disco-robertwyatt.com)", url: "https://www.disco-robertwyatt.com/images/Robert/in-conversation/rock_bottom_interview/index.htm" },
    { title: "Rock Bottom, l'espace du dedans — Gonzaï interview, 13 August 2010", url: "http://www.disco-robertwyatt.com/images/Robert/interviews/Gonzai2010/index.htm" },
  ],

  influencedBy: [
    { artist: "Soft Machine", album: "Third", year: "1970", note: "Wyatt's own band, where he drummed and sang; its side-long piece of his is the direct precedent for long-form songs carried by his voice and keyboards inside a jazz-leaning group." },
    { artist: "Miles Davis", album: "Bitches Brew", year: "1970", note: "The reference point for the jazz-rock Wyatt was both chasing and inverting — he wanted jazz's rhythm section and improvisation inside song structures, and critic Simon Reynolds heard an \"Anglicised\" version of this record in the album's opening." },
  ],

  influenced: [
    { artist: "Tears for Fears", album: "Songs from the Big Chair", year: "1985", note: "Singer and songwriter Roland Orzabal wrote one of this album's songs in Wyatt's spare jazz-vocal style and dedicated it to him in the sleeve notes; the band then covered this record's opening song as the single's B-side." },
  ],
});
