import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Bruce Springsteen",
  album: "Born In The U.S.A.",
  year: "1984",
  heading: "Born In The U.S.A. — Bruce Springsteen (1984)",

  albumLine:
    "Released June 4, 1984 on Columbia Records and produced by Bruce Springsteen with guitarist Steven Van Zandt, manager Jon Landau, and producer Chuck Plotkin, this is heartland rock pushed toward glossy, synthesizer-driven pop. It's Springsteen's seventh studio album, following the stark acoustic Nebraska, and it became the commercial peak of his career — the best-selling album of 1985.",

  overview: [
    "Springsteen cut these songs during the sessions that produced Nebraska. In December 1981 he recorded roughly seventeen songs alone on a four-track in his bedroom. Ten of the starkest became Nebraska as solo recordings; others, including the title track, were re-cut with the full E Street Band and set aside for two more years of work — the same batch of writing split into a grim, isolated record and one that sounds like a party.",

    "The sessions ran January 1982 to March 1984 and produced seventy to ninety recordings, from which twelve were drawn. Pianist Roy Bittan built the title track's synth hook on a new Yamaha CS-80 while the band ran the song live, and drummer Max Weinberg's slamming snare was shaped by an engineer who routed the mic through a broken reverb unit into a noise gate; the released take is only the second the band ever played. Van Zandt pushed hard for keeping a song Springsteen wanted to cut, and Landau pressed him for months for a single until an irritated Springsteen wrote one overnight in a hotel room.",

    "The title track's chorus is a four-word shout that reads as patriotism if you skip the verses, which follow a Vietnam veteran who comes home to a dead brother, no job, and a country with no use for him. That gap pulled the song into the 1984 presidential race: columnist George Will attended a show that September and wrote admiringly of the hope he heard in it, and days later President Ronald Reagan, campaigning in New Jersey, credited the country's future partly to \"the songs of a man so many young Americans admire: New Jersey's own Bruce Springsteen.\" Springsteen answered from the stage within days, telling a Pittsburgh crowd he wondered which record was the president's favorite — \"I don't think it was the Nebraska album\" — before playing a song about a desperate, unemployed factory worker.",

    "The album spent 84 consecutive weeks in the Billboard top ten and threw off seven top-ten singles, a run matched only by Michael Jackson's Thriller. It sold roughly fifteen million copies in the US and thirty million worldwide; critics, including Rolling Stone, were won over at once. The success had a cost: Van Zandt left the band just before the tour began, later calling it the biggest mistake of his life. Springsteen himself stayed ambivalent, writing that he'd tried to recapture Nebraska's intensity and felt he never quite got it — except, he thought, on the title track.",
  ],

  listeningNotes: [
    {
      label: "A synth riff and gated snare built in one afternoon",
      text: "The title track's hook came from Roy Bittan improvising on a new synthesizer while the band ran the song live, and Max Weinberg's drum sound came from routing his snare mic through a broken reverb unit into a noise gate — a studio accident that became the record's most recognizable sound.",
    },
    {
      label: "Songs built from nothing in the room",
      text: "I'm on Fire came together when Springsteen started playing an unfinished tune in the studio and the band assembled a hushed, brushed-drum arrangement on the spot, rather than from a prepared demo.",
    },
    {
      label: "A synth-pop single written to order",
      text: "Dancing in the Dark is the most overtly synth-pop thing here, built around a keyboard rather than guitar, and it exists because Jon Landau wanted a single and an irritated Springsteen wrote it overnight.",
    },
    {
      label: "Guitar-and-piano tracks closer to the old band",
      text: "Glory Days and No Surrender lean on full-band guitar and piano, a reminder the album's synth-heavy reputation comes from a handful of tracks, not the whole thing.",
    },
  ],

  sources: [
    { title: "Born in the U.S.A. — Wikipedia", url: "https://en.wikipedia.org/wiki/Born_in_the_U.S.A." },
    { title: "Born in the U.S.A. (song) — Wikipedia", url: "https://en.wikipedia.org/wiki/Born_in_the_U.S.A._(song)" },
    { title: "Rolling Stone — Exclusive: How Bruce Springsteen Wrote and Recorded 'Born in the U.S.A.'", url: "https://www.rollingstone.com/music/music-features/bruce-springsteen-wrote-born-in-usa-exclusive-book-excerpt-811634/" },
    { title: "PopHistoryDig — Reagan & Springsteen, 1984", url: "https://pophistorydig.com/topics/reagan-springsteen-1984/" },
  ],

  influencedBy: [
    { artist: "Bruce Springsteen", album: "Nebraska", year: "1982", note: "Written and demoed in the same home 4-track sessions; several songs here were the full-band versions of tracks Springsteen first cut for that record." },
  ],

  influenced: [
    { artist: "Arcade Fire", album: "The Suburbs", year: "2010", note: "Frontman Win Butler has named this era of Springsteen among his biggest influences and covered the title track live repeatedly; the band's widescreen, drum-driven Americana channels the same arena-sized earnestness." },
    { artist: "The War on Drugs", album: "Lost in the Dream", year: "2014", note: "Critics have pointed to this record's synthesizer-laced, arena-scaled roots rock as the clearest heir to the synth-and-guitar blend Springsteen used here." },
  ],
});
