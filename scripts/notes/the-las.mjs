import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "The La's",
  album: "The La's",
  year: "1990",
  heading: "The La's — The La's (1990)",

  albumLine:
    "Released in October 1990 on the independent label Go! Discs, and assembled by producer Steve Lillywhite out of sessions the band had already walked away from. It's guitar pop with its sources showing — Merseybeat, skiffle, sixties British R&B. It is the only album they ever finished, and singer and songwriter Lee Mavers disowned it the moment it appeared.",

  overview: [
    "The band was formed in Liverpool in 1983 by guitarist and singer Mike Badger, who took the name from the local use of \"la\" for lad. Mavers joined in 1984 as a rhythm guitarist and had taken creative control by the time Badger left in 1986 or 1987 — the accounts differ. What he and bassist John Power wanted was plain: guitars, bass and drums recorded so you could hear the room. That put them at odds with eighties studio gloss and apart from the baggy indie-dance of the Happy Mondays and the Stone Roses. Critics heard the Byrds, the Beatles, the Kinks and the Who; the band's own stated touchstones were old mono records and Captain Beefheart.",

    "The making of it is the story. Mavers was chasing a cassette the band had made on a hot afternoon in a rehearsal outbuilding, and no studio could get back to it. By his own count, given to Q, the album burnt through twelve sets of sessions, nine drummers and seven producers — John Porter, Gavin MacKillop, John Leckie, Bob Andrews and Mike Hedges among them. Lillywhite's attempt at Eden Studios in London in December 1989 was the last. \"I knew the songs were absolute diamonds, but getting them on tape wasn't so easy,\" he said. Go! Discs then ran out of money and patience and released what existed, guide vocals included. Mavers called the result \"like a snake with a broken back\" in NME, and the band spent the promotional round telling people not to buy it. The famous tale that he rejected a mixing desk for lacking authentic sixties dust is treated as mythology by everyone who has looked into it.",

    "It reached No. 30 in the UK and almost nobody agreed with him. Critic Colin Larkin called it \"a graceful, sweeping and rather grand pop record,\" adding that \"it is hard to see why they were dissatisfied.\" Power left in December 1991 to form Cast. Within a few years the record had been reread as Britpop's starting gun: Oasis guitarist and songwriter Noel Gallagher said there was \"only one songwriter in this country who scares me – and that is Lee Mavers,\" and framed his own band's job as finishing what the La's began. Pitchfork later placed it 14th among Britpop albums, Rolling Stone 13th among one-album wonders.",
  ],

  listeningNotes: [
    {
      label: "Guide vocals left in the finished mix",
      text: "Several lead takes here were only ever meant as placeholders for a proper vocal that never got recorded. It is the specific thing Mavers hated and arguably the reason the record sounds unguarded.",
    },
    {
      label: "Chord cycles you can count on one hand",
      text: "Songs sit on three or four chords and get out fast — \"Son of a Gun\" opens the album on three and stops short of two minutes. The economy is the point; nothing is there to pad.",
    },
    {
      label: "Trebly, chiming electric against strummed acoustic",
      text: "The acoustic is pushed forward in the mix rather than buried under the band, with thin bright electric lines laid over the top. That layering is the whole guitar sound of the album.",
    },
    {
      label: "Two voices blending into one",
      text: "Mavers and Power sing together so closely that the harmony reads as a single thickened lead rather than a backing part, a trick straight out of early Merseybeat.",
    },
    {
      label: "An accelerating seven-minute close",
      text: "The last track, \"Looking Glass,\" starts on a jaunty acoustic figure with the guitar tuned down a half step, then the band speed up and up to a frenetic finish — the one moment the record lets a song sprawl.",
    },
  ],

  sources: [
    { title: "Making The La's — Classic Pop", url: "https://www.classicpopmag.com/features/classic-album-the-las-the-las/" },
    { title: "Through the 'Looking Glass': The Story of The La's — Beyond the Grooves", url: "https://www.beyond-the-grooves.co.uk/blog/through-the-looking-glass-the-story-of-the-la-s" },
    { title: "The La's' Album: Revisiting Some of Indie-Pop's Most Timeless Melodies — uDiscover Music", url: "https://www.udiscovermusic.com/stories/the-las-self-titled-album/" },
    { title: "The La's (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/The_La%27s_(album)" },
  ],

  influencedBy: [
    { artist: "The Velvet Underground", album: "The Velvet Underground & Nico", year: "1967", note: "The cycling guitar figure and endlessly repeated chorus of the La's' best-known single derive openly from a song here; both main accounts of the album make the link." },
    { artist: "The Who", album: "My Generation", year: "1965", note: "Mavers named old mono R&B records by this band as the sound he was trying to get back to, and the album's heaviest track runs on the same serrated rhythm-guitar attack." },
    { artist: "The Byrds", album: "Mr. Tambourine Man", year: "1965", note: "The source of the bright, chiming twelve-string jangle laid over acoustic strumming that runs through the record." },
  ],

  influenced: [
    { artist: "Oasis", album: "Definitely Maybe", year: "1994", note: "Noel Gallagher cast his band's mission as completing what the La's started; critics hear this album's distorted, snarled rock side directly in early Oasis demos." },
    { artist: "Cast", album: "All Change", year: "1995", note: "Formed by the La's' own bassist John Power, named after the closing phrase of this album's last song, and produced by John Leckie — one of the producers who had failed to finish this record." },
  ],
});
