import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Johnny Cash",
  album: "At Folsom Prison",
  year: "1968",
  heading: "At Folsom Prison — Johnny Cash (1968)",

  albumLine:
    "Released 6 May 1968 on Columbia, produced by Bob Johnston and recorded live at Folsom State Prison in California on 13 January 1968. It's country played to an audience of inmates — and the record that pulled Cash's career back from collapse.",

  overview: [
    "Cash was in trouble before this. Years of amphetamine dependency had wrecked his reliability and his commercial standing; his last top-40 hit had been in 1964. He had wanted to record inside a prison since the mid-fifties, and Columbia had refused. What changed was Bob Johnston, newly assigned to him, who backed the idea precisely because it would restore the outlaw image Cash had lost. Cash's own assessment afterwards was flat and accurate: \"That's where things really started for me again.\"",

    "He played two shows that day, at 9:40 in the morning and 12:40 in the afternoon, with June Carter singing, Carl Perkins on guitar, the Statler Brothers, and his own Tennessee Three — Marshall Grant on bass, Luther Perkins on guitar and W.S. Holland on drums. The album was edited together from both performances. The setlist is weighted heavily toward songs about imprisonment, execution and regret, chosen for the room rather than for radio.",

    "The most striking thing on it isn't Cash at all. Glen Sherley, an inmate at Folsom, had written a song about the prison's chapel; a tape of it reached Cash the night before the show, and he performed it in front of its author, who had no idea it was coming. The inmates' reaction to that is the loudest on the record. Sherley was later paroled partly through Cash's advocacy, and Cash went on to testify before a Senate subcommittee on prison reform — the album's sympathies weren't a pose.",

    "One thing is genuinely disputed and shouldn't be smoothed over. The album's most famous moment is the roar that follows the line about shooting a man in Reno, and accounts differ on whether it's real. Several sources report that Johnston spliced in or overdubbed applause for dramatic effect, and that the inmates were in fact fairly muted at that point — reportedly because whooping at a guard-lined room carried risks. Other accounts emphasise that the audience was told by the MC, Hugh Cherry, to react naturally and did. What's not in doubt is that some crowd noise on the finished record was enhanced in post-production. It went to No. 1 on the country chart and No. 13 on the Billboard 200, went gold within months and triple platinum by 2003, and took two Grammys in 1969.",
  ],

  listeningNotes: [
    {
      label: "The room is the instrument",
      text: "Hard reflective surfaces and no acoustic treatment give the recording a flat, boxy sound. It's the opposite of a concert-hall live album and a large part of why it feels like documentary.",
    },
    {
      label: "Boom-chicka-boom",
      text: "The Tennessee Three's signature rhythm — Luther Perkins's muted, clipped guitar over a walking bass — is simple to the point of austerity, and it never varies. It's the engine under nearly every track.",
    },
    {
      label: "Cash talking between songs",
      text: "The between-song patter is kept in, including asides to the guards and requests for water. It's the connective tissue that turns a set list into a situation.",
    },
    {
      label: "An inmate's song, played to him",
      text: "Near the end Cash performs a song written by a prisoner in the audience, learned from a tape the night before. It draws the biggest response on the album and inverts the usual direction of a prison concert.",
    },
    {
      label: "Crowd noise you can't fully trust",
      text: "Some audience reaction was enhanced or spliced in during post-production. Knowing that changes how the famous cheer lands — the performance is real, the room's response is partly edited.",
    },
    {
      label: "Two shows cut into one",
      text: "The record draws from both the morning and afternoon sets. What sounds like a single continuous concert is an assembly, which is standard practice but worth knowing.",
    },
  ],

  sources: [
    { title: "At Folsom Prison — Wikipedia", url: "https://en.wikipedia.org/wiki/At_Folsom_Prison" },
    { title: "\"At Folsom Prison\" — Johnny Cash (1968), National Recording Registry essay — Library of Congress", url: "https://www.loc.gov/static/programs/national-recording-preservation-board/documents/AtFolsomPrison.pdf" },
    { title: "Prisoners Are the Best Audience: The Challenge of 'At Folsom Prison' — PopMatters", url: "https://www.popmatters.com/65735-prisoners-are-the-best-audience-the-challenge-of-at-folsom-prison-2496102536.html" },
  ],

  influencedBy: [
    { artist: "Johnny Cash", album: "With His Hot and Blue Guitar", year: "1957", note: "His Sun debut, which established the boom-chicka-boom sound and the prison-song repertoire he returns to here." },
    { artist: "Woody Guthrie", album: "Dust Bowl Ballads", year: "1940", note: "The American tradition of songs written from the point of view of the poor and imprisoned that Cash worked squarely inside." },
  ],

  influenced: [
    { artist: "Johnny Cash", album: "At San Quentin", year: "1969", note: "The direct follow-up, recorded in another prison the next year and an even bigger commercial success." },
    { artist: "Merle Haggard", album: "Sing Me Back Home", year: "1968", note: "Haggard, who had been in the Folsom audience as an inmate years earlier, built his own outlaw-country persona in this lineage." },
  ],
});
