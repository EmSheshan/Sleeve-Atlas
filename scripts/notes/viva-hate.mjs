import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Morrissey",
  album: "Viva Hate",
  year: "1988",
  heading: "Viva Hate — Morrissey (1988)",

  albumLine:
    "Released 14 March 1988 on His Master's Voice and produced by Stephen Street, who also wrote the music and played bass. It's jangling, orchestrated British guitar pop — Morrissey's solo debut, recorded two months after the Smiths fell apart.",

  overview: [
    "The speed is the first remarkable thing. The Smiths ended in 1987 when guitarist Johnny Marr left; by October Morrissey was in the studio, and the record was finished by December. It happened almost by accident. Street, who had engineered and co-produced for the Smiths, sent Morrissey demos intended as possible B-sides for post-Marr Smiths releases. Morrissey liked them enough to make an album instead.",

    "That origin shapes everything. Street is not a guitarist by trade, and the other principal player was Vini Reilly of the Durutti Column, a post-punk guitarist with a delicate, reverbed, almost classical touch nothing like Marr's. Andrew Paresi played drums. The result sidesteps the obvious trap of sounding like a Smiths tribute: the songs are more orchestral, slower, more willing to sit still. Whether that was the right call divided people — Spin thought Morrissey lacked direction without Marr, while Rolling Stone called it \"a tight, fairly disciplined affair\" and Pitchfork later rated it among his most interesting records.",

    "There's an unresolved dispute over who wrote what. Reilly has claimed he and Morrissey composed every track except one; Street denies it. In 2014 Reilly acknowledged he had misattributed things in the past, describing \"displaced anger\" towards people he cared about. It's worth stating plainly that this remains contested rather than settled.",

    "Two of the album's provocations landed very differently. One song about Margaret Thatcher, then Prime Minister, drew questioning from Special Branch. Another, about a South Asian immigrant trying and failing to assimilate into Britain, was widely read as racist on release and remains the most-cited early evidence in a debate about Morrissey that has run ever since; he responded that it could be taken as condescending but wasn't meant provocatively, saying it concerned people buying absurd English clothes in order to feel at home. Readers have not generally been satisfied by that. Commercially it worked regardless — No. 1 in the UK, No. 48 in the US, gold on both sides, with \"Suedehead\" and \"Everyday Is Like Sunday\" as the singles.",
  ],

  listeningNotes: [
    {
      label: "Reilly's guitar instead of Marr's",
      text: "Vini Reilly plays in thin, chiming, heavily reverbed lines that hang in the air rather than driving the song. It's the clearest signal that this isn't the Smiths, and it's audible within seconds of the opening.",
    },
    {
      label: "Strings doing emotional work",
      text: "Orchestration carries several tracks where a guitar band would have put a riff, giving the album a widescreen quality the Smiths mostly avoided.",
    },
    {
      label: "Morrissey unhurried",
      text: "Without a guitarist driving the tempo, the vocal lines stretch out and the phrasing gets slower and more declamatory. He's much further forward in the mix than he used to be.",
    },
    {
      label: "Producer as band",
      text: "Street plays bass and much of the guitar as well as producing and writing the music, so the record has an unusually unified sound — one person's arrangement sensibility applied throughout rather than a group negotiating.",
    },
    {
      label: "The seaside desolation of the second single",
      text: "\"Everyday Is Like Sunday\" sets an English coastal-resort bleakness to a genuinely lush, major-key arrangement. The gap between how grim the subject is and how pretty the music sounds is the album's signature move.",
    },
  ],

  sources: [
    { title: "Viva Hate — Wikipedia", url: "https://en.wikipedia.org/wiki/Viva_Hate" },
    { title: "Morrissey | Viva Hate — Post-Punk.com", url: "https://post-punk.com/morrissey-viva-hate/" },
    { title: "Suedehead — Wikipedia", url: "https://en.wikipedia.org/wiki/Suedehead" },
  ],

  influencedBy: [
    { artist: "The Smiths", album: "Strangeways, Here We Come", year: "1987", note: "The band that had just ended; these songs began as possible Smiths B-sides before becoming a solo album." },
    { artist: "The Durutti Column", album: "LC", year: "1981", note: "Vini Reilly's own group — his delicate, reverbed guitar style is imported wholesale and defines the record's texture." },
  ],

  influenced: [
    { artist: "Suede", album: "Suede", year: "1993", note: "Part of the lineage from Morrissey's solo persona into Britpop's more theatrical, English-miserabilist end." },
  ],
});
