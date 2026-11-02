import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "George Harrison",
  album: "All Things Must Pass",
  year: "1970",

  heading: "All Things Must Pass — George Harrison (1970)",

  albumLine:
    "Released 27 November 1970 in America and 30 November in Britain on Apple, co-produced by George Harrison and Phil Spector. Rock and folk-rock across a triple album: two LPs of songs plus a disc of instrumental jams, Apple Jam. Harrison's third solo record but the first made of songs, after a soundtrack and an electronic experiment.",

  overview: [
    "Harrison had a stockpile. Spector first heard it at Friar Park early in 1970: \"It was endless!\" he said — Harrison had \"literally hundreds of songs.\" John Lennon and Paul McCartney had turned down three of these at the Beatles' Get Back rehearsals in January 1969. Making the record, Harrison said in 1992, \"was like going to the bathroom and letting it out.\"",

    "The sound came out of the two years before it. In November 1968 he stayed in Woodstock with Bob Dylan and the Band and found a group that shared songwriting instead of ranking it; he came home writing more, and back on guitar after years on sitar. In 1969 he produced the soul and gospel singers Billy Preston and Doris Troy for Apple, and on tour that December the guitarist Delaney Bramlett taught him slide. He also committed to the Hare Krishna movement — \"another piece of a jigsaw puzzle,\" he called it. The record arrived when spirituality was fashionable among young Westerners, which did it no commercial harm.",

    "Spector cut most backing tracks live and enormous: doubled drum kits, keyboards playing identical chords in different octaves, as many as five rhythm guitars. Bassist Klaus Voormann says there were no rehearsals — \"We were just busking along more or less to what George was playing.\" Guitarist Eric Clapton, keyboardist Bobby Whitlock, bassist Carl Radle and drummer Jim Gordon formed Derek and the Dominos during these sessions; Clapton remembered seemingly \"hundreds of musicians in the studio, all hammering away like mad.\" Spector then broke his arm in a fall and withdrew, leaving Harrison to finish it.",

    "It was a huge hit — seven weeks at No. 1 in America, eight in Britain — and reviews were close to unanimous: Richard Williams in Melody Maker wrote \"Garbo talks! – Harrison is free!\" The critic Robert Christgau dissented, complaining of \"overblown fatuity.\" Two things have shadowed it since. In 1976 a US court found the lead single had subconsciously copied the Chiffons' \"He's So Fine\" — infringement \"even though subconsciously accomplished.\" And Harrison came to dislike the reverb, saying in 2001 it \"would not be so produced\" now; his son Dhani Harrison, who oversaw the 2021 remix, puts it flatly: \"He hated the reverb.\" How it got onto tape is disputed — Whitlock says most was added later, while tape operator John Leckie says Spector insisted on printing the effects as they played.",
  ],

  listeningNotes: [
    {
      label: "The live wall of sound",
      text: "Spector recorded whole ensembles at once rather than stacking parts, keyboards doubling identical chords in different octaves to thicken them. Preston had doubts but said that \"with George's stuff it was perfect.\"",
    },
    {
      label: "Acoustic guitars felt but not heard",
      text: "Joey Molland of Badfinger says his band were penned inside a plywood structure so their massed strumming would register as texture rather than a pickable part.",
    },
    {
      label: "Slide guitar as a second voice",
      text: "Harrison had only just learned slide, and his bends follow Indian phrasing rather than Delta blues — the author Simon Leng compares the tone to the fretless sarod.",
    },
    {
      label: "Harmonised slide overdubs",
      text: "Spector said the slide solo on \"My Sweet Lord\" took around twelve hours, tried in six-part harmony before settling on two.",
    },
    {
      label: "Orchestra and choir set behind the band",
      text: "The arranger John Barham scored strings from melodies Harrison sang him; the massed backing voices are Harrison multitracked, credited as \"the George O'Hara-Smith Singers.\"",
    },
    {
      label: "A whole disc of after-hours jams",
      text: "Apple Jam collects loose instrumental blues played after Spector went home. Most reviewers wrote it off as a free extra; the critic Anthony DeCurtis hears creative liberation.",
    },
  ],

  sources: [
    {
      title: "Massive George Harrison 'All Things Must Pass': Inside New Reissue, by David Browne, Rolling Stone Australia",
      url: "https://au.rollingstone.com/music/music-features/george-harrison-all-things-must-pass-reissue-dhani-harrison-2-28639",
    },
    { title: "All Things Must Pass — Wikipedia", url: "https://en.wikipedia.org/wiki/All_Things_Must_Pass" },
    { title: "My Sweet Lord — Wikipedia", url: "https://en.wikipedia.org/wiki/My_Sweet_Lord" },
  ],

  influencedBy: [
    {
      artist: "The Band",
      album: "Music from Big Pink",
      year: "1968",
      note: "Harrison's late-1968 Woodstock stay put him among players who shared songwriting equally, and their organ-and-piano hymn arrangements are the template for the album's slower, communal material.",
    },
    {
      artist: "Edwin Hawkins Singers",
      album: "Let Us Go into the House of the Lord",
      year: "1968",
      note: "Harrison wrote the album's biggest single as an exercise in gospel modelled on \"Oh Happy Day\" from this record — a derivation his own lawyers later argued in court.",
    },
    {
      artist: "The Ronettes",
      album: "Presenting the Fabulous Ronettes",
      year: "1964",
      note: "Same producer, same method: Spector brought the wall of sound he built here — massed players recorded live in one room, heavy echo — to a rock record.",
    },
  ],

  influenced: [
    {
      artist: "Badfinger",
      album: "Straight Up",
      year: "1971",
      note: "Harrison produced part of it and played the slide guitar hook on \"Day After Day,\" carrying the tone he had just developed straight onto someone else's record.",
    },
    {
      artist: "Electric Light Orchestra",
      album: "Out of the Blue",
      year: "1977",
      note: "The critic John Harris traces ELO's widescreen rock — orchestra welded to a rock band, layered rather than played live — back to this album's massed strings and guitars.",
    },
    {
      artist: "Fleet Foxes",
      album: "Fleet Foxes",
      year: "2008",
      note: "John Bergstrom of PopMatters names them among the acts working from this record: massed close harmony and reverb treated as an instrument rather than a finish.",
    },
  ],
});
