import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Pixies",
  album: "Doolittle",
  year: "1989",
  heading: "Doolittle — Pixies (1989)",

  albumLine:
    "Released 17 April 1989 on 4AD in Britain and Elektra in the US, produced and engineered by Gil Norton on a $40,000 budget. Fifteen songs in thirty-eight minutes of alternative rock. It's the Pixies' second full-length, and the record where they traded engineer Steve Albini's raw Surfer Rosa for something deliberately polished.",

  overview: [
    "The Pixies came out of Boston with a sound assembled from parts that weren't supposed to fit: surf guitar, hardcore volume, Spanish phrases, Old Testament violence. Singer and rhythm guitarist Black Francis wrote much of it as an anthropology student at the University of Massachusetts Amherst, borrowing imagery from Luis Buñuel and Salvador Dalí's 1929 film Un Chien Andalou. He described the appeal plainly: he got into avant-garde film and Surrealism \"as an escape from reality,\" because \"to me, Surrealism is totally artificial.\" The Biblical streak comes from a Pentecostal church he joined at twelve.",

    "Norton was chosen by Ivo Watts-Russell, head of 4AD, and arrived that October. He spent two days alone with Francis and an acoustic guitar going through demos — \"that was when we really got to know each other properly in an artistic sense\" — then two weeks in pre-production with the band set up in a circle. His instinct was to stretch things: slower tempos, extra verses, longer codas. Francis resisted, walking him to a record shop and handing him a Buddy Holly compilation: \"Gil, look at the times on these songs.\" Nearly all were under two minutes. Norton conceded — \"how could I argue with him?\"",

    "What governed the sessions was one word. \"A song had to be portable,\" Norton says. \"They didn't want 15 guitar parts on there, because they couldn't play them live.\" Bass, drums, two guitars and a vocal, cut largely live at Downtown Recorders in under three weeks at roughly a song a day. Tension ran underneath: bassist Kim Deal and Francis were visibly at odds, and lead guitarist Joey Santiago draped blankets over his Marshalls in protest at the reverb being added to him.",

    "It entered the UK chart at No. 8 and stalled at No. 98 in America, climbing from an entry at 171 only on college radio. Sounds and Melody Maker both named it album of the year, and critic Robert Christgau, at a B+, wrote that the band were \"in love and they don't know why—with rock and roll.\" Its reach arrived later. Singer PJ Harvey said she was \"in awe\" of two of its songs and called Francis's writing \"amazing.\" Kurt Cobain, Nirvana's singer, counted it a favourite; after writing \"Smells Like Teen Spirit\" he and bassist Krist Novoselic both thought \"this really sounds like the Pixies.\"",
  ],

  listeningNotes: [
    {
      label: "Quiet verse, detonated chorus",
      text: "Verses sit on Deal's bass and drummer David Lovering's kit with the guitars pulled out; the lift comes from Francis and Santiago adding distortion, not from anyone playing harder. Norton's reasoning was to leave room for the story first.",
    },
    {
      label: "A toy snare",
      text: "The snare on \"Monkey Gone to Heaven\" is a five-inch Premier that couldn't be tuned at all. Norton kept it: \"It had an innocence about it.\"",
    },
    {
      label: "An unwritten string quartet",
      text: "Two violins and two cellos, hired from a local orchestra and still in tuxedos and gowns. There was no score — Norton sang the parts to cellist Arthur Fiacco, who sketched them out, and it was done in two hours.",
    },
    {
      label: "A lead vocal cut live, in a cupboard",
      text: "\"Hey\" was tracked complete with its vocal because splitting it up \"would have felt disconnected.\" Norton put Francis in a cupboard at the back of the room for separation.",
    },
    {
      label: "Compression and spring reverb as polish",
      text: "Norton and mixing engineer Steven Haigler smoothed the edges on an SSL at Carriage House with tight compression and a little plate and spring. Francis allowed little more: \"Charles liked organic, he didn't like trickery.\"",
    },
  ],

  sources: [
    {
      title: "Richard Buskin — Classic Tracks: The Pixies \"Monkey Gone To Heaven\" (Sound on Sound)",
      url: "https://www.soundonsound.com/techniques/classic-tracks-pixies-monkey-gone-heaven",
    },
    { title: "Doolittle — Wikipedia", url: "https://en.wikipedia.org/wiki/Doolittle_(album)" },
  ],

  influencedBy: [
    {
      artist: "Buddy Holly",
      album: "Buddy Holly",
      year: "1958",
      note: "Francis used singer Buddy Holly's sub-two-minute song lengths as his argument against Norton's lengthening — brevity plus hook, with nothing repeated for its own sake.",
    },
    {
      artist: "Hüsker Dü",
      album: "Zen Arcade",
      year: "1984",
      note: "\"There Goes My Gun\" started as a much faster, shorter song in Hüsker Dü's style before Norton talked Francis into slowing it down.",
    },
    {
      artist: "Jimi Hendrix",
      album: "Are You Experienced",
      year: "1967",
      note: "Santiago's voicing on \"Tame\" is the E7♯9 he calls his Hendrix chord, the shape guitarist Jimi Hendrix used on \"Purple Haze\" — it's why the loud sections sound sour rather than triumphant.",
    },
  ],

  influenced: [
    {
      artist: "Nirvana",
      album: "Nevermind",
      year: "1991",
      note: "Cobain named this a favourite record and modelled the quiet-verse, loud-chorus build directly on it, worrying aloud that the result was too close.",
    },
    {
      artist: "PJ Harvey",
      album: "Dry",
      year: "1992",
      note: "Harvey said she was \"in awe\" of two songs here and called Francis's writing \"amazing\"; her own debut works the same scraped-down trio dynamics and shouted-to-whispered vocal range.",
    },
  ],
});
