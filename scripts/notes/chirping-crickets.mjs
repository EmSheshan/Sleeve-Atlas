import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Buddy Holly & The Crickets",
  album: "Chirping Crickets",
  year: "1957",
  heading: "The \"Chirping\" Crickets — Buddy Holly & The Crickets (1957)",

  albumLine:
    "Released 27 November 1957 on Brunswick and produced by Norman Petty at his own studio in Clovis, New Mexico. It's rock and roll with one foot in country and the other in rhythm and blues, glossed with close pop harmony. It was the only album issued under the Crickets' name while Buddy Holly was alive.",

  overview: [
    "Decca signed Buddy Holly, the singer and guitarist, in 1956 and sent him to Nashville sessions where he had almost no say in how he sounded. The label let his contract lapse in January 1957 and barred him from re-recording that material for five years. So the band drove the hundred miles from Lubbock, Texas to producer Norman Petty's studio in Clovis and cut one of those songs again anyway. To get round the ban it went out under a group name rather than Holly's, on Decca's own subsidiary Brunswick — the Crickets existed partly as a legal workaround.",

    "What they were was unusual for 1957: not a singer fronting hired players but a self-contained band — Holly on lead and rhythm guitar, drummer Jerry Allison, bassist Joe B. Mauldin and rhythm guitarist Niki Sullivan — writing and arranging their own material. Allison took one title from a line in the 1956 western The Searchers and said they \"wrote it in about 30 minutes.\" They also sat awkwardly across the colour line that organised American music: the lead single went to No. 1 pop and No. 2 R&B, and that August a promoter booked them into the Apollo in Harlem apparently assuming they were Black. Accounts of how the week went differ, from booing to a won-over crowd by the second song.",

    "Petty's studio ran single-track machines, which made him inventive by necessity and gave Holly room to chase sounds nobody had asked for. It also let Petty add things later: the vocal trio the Picks — Bill Pickering, John Pickering and Bob Lapham — overdubbed close harmonies onto most of the record once the band had gone, a sweetening the Crickets found intrusive, and a 2023 Rollercoaster reissue finally offered the tracks without them.",

    "Reception at the time was a hit parade rather than a critical event; the album reached No. 5 in Britain. Its real influence arrived secondhand. John Lennon, the Beatles' singer and guitarist, said he \"was looking for a name like The Crickets that meant two things, and from crickets I got to beetles.\" The sleeve photograph of Holly holding a Fender Stratocaster sent guitarists Hank Marvin and George Harrison hunting for the same instrument. Rolling Stone placed it at No. 420 on its 2012 list of the 500 greatest albums, and the critic William Ruhlmann calls it one of the most significant album debuts in rock and roll.",
  ],

  listeningNotes: [
    {
      label: "Cardboard-box percussion",
      text: "Allison's kit overwhelmed Petty's small room, so Petty handed him a cardboard box to hit instead. The softened backbeat on \"Not Fade Away\" is why the vocal and lead guitar sit so clearly on top.",
    },
    {
      label: "A Bo Diddley beat, shifted",
      text: "The same clave-like pattern the guitarist Bo Diddley built a career on, but with the second stress moved onto the offbeat. It's the rhythm rather than the chords doing the work.",
    },
    {
      label: "Overdubs bounced between machines",
      text: "With single-track recorders, adding a part meant playing the first take back through speakers while a second machine caught the new performance. The wordless backing vocals sit slightly apart from everything else as a result.",
    },
    {
      label: "The Picks' close harmony",
      text: "A pop vocal trio layered onto a live rock-and-roll band after the fact. Through most of the album it's the sweetest thing in the mix and the least like the band underneath.",
    },
    {
      label: "Upright bass, not electric",
      text: "Mauldin plays double bass, with the bassist Larry Welborn standing in on two tracks. It's a woody thump rather than the sustain of an electric, keeping the bottom end short and out of the guitar's way.",
    },
  ],

  sources: [
    { title: "The \"Chirping\" Crickets — Wikipedia", url: "https://en.wikipedia.org/wiki/The_%22Chirping%22_Crickets" },
    { title: "From the Silver Screen to Liverpool: The Story Behind \"That'll Be the Day\" — American Songwriter", url: "https://americansongwriter.com/from-the-silver-screen-to-liverpool-the-story-behind-thatll-be-the-day-by-buddy-holly-and-the-crickets/" },
    { title: "Tracing The Bo Diddley Beat: Rock's Most Important Rhythm? — uDiscover Music", url: "https://www.udiscovermusic.com/stories/bo-diddley-beat-feature/" },
    { title: "How The Beatles got their name — Far Out Magazine", url: "https://faroutmagazine.co.uk/how-the-beatles-got-their-name/" },
    { title: "\"That'll Be the Day\" — National Recording Registry essay, Library of Congress", url: "https://www.loc.gov/static/programs/national-recording-preservation-board/documents/ThatllBeTheDay.pdf" },
  ],

  influencedBy: [
    { artist: "Elvis Presley", album: "Elvis Presley", year: "1956", note: "Holly opened for the singer Elvis Presley in Lubbock in 1955 and afterwards moved his own band off country and western and onto rock and roll." },
    { artist: "Little Richard", album: "Here's Little Richard", year: "1957", note: "The Crickets cover a song the singer and pianist Little Richard had put out as a single earlier the same year, trading his shouted New Orleans piano R&B for two guitars and harmony." },
  ],

  influenced: [
    { artist: "The Beatles", album: "Please Please Me", year: "1963", note: "Named after the Crickets by the Beatles' singer and guitarist John Lennon, and built on the same model: two guitars, bass and drums writing their own material rather than taking it from a publisher." },
    { artist: "The Rolling Stones", album: "England's Newest Hit Makers", year: "1964", note: "Their cover of one of these songs, with the shifted Bo Diddley rhythm kept intact and pushed harder, was their third British single and reached No. 3." },
    { artist: "The Shadows", album: "The Shadows", year: "1961", note: "The guitarist Hank Marvin went looking for a Fender Stratocaster after seeing Holly holding one on this album's sleeve; that guitar's clean, trebly tone became his band's signature sound." },
  ],
});
