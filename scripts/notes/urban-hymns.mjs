import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "The Verve",
  album: "Urban Hymns",
  year: "1997",
  heading: "Urban Hymns — The Verve (1997)",

  albumLine:
    "Released 29 September 1997 on Hut, produced by the band with Martin \"Youth\" Glover and Chris Potter, with strings arranged by Wil Malone. It's Britpop's late orchestral phase — anthems built on loops, acoustic guitars and full string sections. The Verve's third album, and the one they made after already breaking up once.",

  overview: [
    "The Verve formed in Wigan in 1990 and spent two albums as a space-rock band: long, effects-drenched, with singer Richard Ashcroft's voice as one texture among many. They split in August 1995. When Ashcroft started again the following year he had songs rather than jams, and the music around him was shifting too — by 1997 Britpop's uptempo guitar pop had run out of road, and this arrived three months after Radiohead's OK Computer and six weeks after Oasis's Be Here Now. It is usually filed, with that Radiohead record, as an album that ended the movement rather than extended it.",

    "Getting there was a long repair job. Ashcroft demoed in Bath and tried producers John Leckie and Owen Morris without result; guitarist Bernard Butler lasted about a week. Youth produced the first Olympic Studios sessions in late 1996 and pushed a cleaner, classic-rock direction, and engineer Chris Potter took over after Christmas, working looser and more improvised. Ashcroft then decided it could not be the Verve without guitarist Nick McCabe, whom he had not spoken to in two years, and called him back in early 1997; songs were re-recorded around his parts. Youth's verdict on Ashcroft was that \"he put himself aside and did what was best for the songs.\"",

    "The lead single was built over a sample of a 1965 orchestral cover of a Rolling Stones composition, controlled by Allen Klein, the band's former manager, through his company ABKCO. Accounts of what followed differ: one has ABKCO refusing clearance until EMI president Ken Berry played Klein the track and he settled for half the royalties, another has the Verve licensing a short portion and Klein suing once he heard how much they had used. Either way the writing credit went to Mick Jagger and Keith Richards, the Stones' singer and guitarist, and the money went to Klein — Billboard reported that Ashcroft's total take was $1,000. In 2019 Jagger and Richards signed their share and the credit back to him.",

    "It sold roughly 250,000 copies in its first British week, one of the fastest starts in UK chart history, and took Best Album and Best Producer at the 1998 Brits. The second single reached No. 1 the week after Diana, Princess of Wales died and was absorbed into a national mood it had nothing to do with; Ashcroft wrote it in 1995 and has given shifting accounts of what it means, including his own heroin use and a love song. McCabe left again in 1998, the band ended in 1999, and he has stayed cool on the record, calling it \"just a safe bet for people.\" Travis, Embrace and Coldplay built on it regardless.",
  ],

  listeningNotes: [
    {
      label: "Full string sections over loops",
      text: "Malone's arrangements, cut with large session orchestras, sit on top of repeating rhythm tracks rather than moving with the chords. It's the trick that makes a four-piece sound symphonic without anyone playing differently.",
    },
    {
      label: "Guitar as synthesizer",
      text: "McCabe has described his aim as making a guitar sound like a keyboard, running cheap secondhand analogue delays and samplers into valve amps and out through a looper. Several parts here that sound like synths are guitar loops.",
    },
    {
      label: "Two producers, two halves",
      text: "Youth's tracks are clean, layered and arranged; Potter's are looser and closer to a band in a room. The album keeps alternating between them, which is why seventy-six minutes never settles into one mood.",
    },
    {
      label: "Wah and feedback detours",
      text: "Between the ballads McCabe gets whole stretches of pure texture, like the wah-led playing on \"Weeping Willow.\" These are where the earlier, stranger Verve survives.",
    },
  ],

  sources: [
    { title: "Urban Hymns — Wikipedia", url: "https://en.wikipedia.org/wiki/Urban_Hymns" },
    { title: "The Verve Stumble Toward Elegance on 'Urban Hymns' — Diffuser", url: "https://diffuser.fm/verve-urban-hymns/" },
    { title: "Urban Hymns: How The Verve Became Indie Rock Gods — uDiscover Music", url: "https://www.udiscovermusic.com/stories/the-verve-urban-hymns-album/" },
    { title: "Rolling Stones Finally Give Back 'Bitter Sweet Symphony' Songwriting Credits — Rolling Stone", url: "https://www.rollingstone.com/music/music-news/bitter-sweet-symphony-richard-ashcroft-rolling-stones-838773/" },
    { title: "Nick McCabe on The Verve's studio battles, egos and tonal exploration — MusicRadar", url: "https://www.musicradar.com/news/guitars/nick-mccabe-on-the-verves-studio-battles-egos-and-tonal-exploration-644155" },
    { title: "The story of how The Verve created 'The Drugs Don't Work' — Far Out Magazine", url: "https://faroutmagazine.co.uk/how-the-verve-created-their-song-drugs-dont-work/" },
  ],

  influencedBy: [
    { artist: "The Rolling Stones", album: "Out of Our Heads", year: "1965", note: "This album's lead single takes its string figure from an orchestral cover of a song on this record, which is why the credit sat with Mick Jagger and Keith Richards for twenty-two years." },
    { artist: "Massive Attack", album: "Blue Lines", year: "1991", note: "Wil Malone, the string arranger on both records, carried the same device across: a large orchestral section written over a loop-based backing rather than scored to a band arrangement." },
  ],

  influenced: [
    { artist: "Travis", album: "The Man Who", year: "1999", note: "The post-Britpop template this record set — slow, acoustic-led balladry carried by plush string arrangements in place of uptempo guitar pop." },
    { artist: "Coldplay", album: "Parachutes", year: "2000", note: "Chris Martin, Coldplay's singer and pianist, called Ashcroft the best singer in the world; the slow-building anthem stacked over one repeating figure is the song shape his own band took up." },
  ],
});
