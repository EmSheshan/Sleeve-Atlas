import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "The Cult",
  album: "Electric",
  year: "1987",
  heading: "Electric — The Cult (1987)",

  albumLine:
    "Released 6 April 1987 on Beggars Banquet and produced by Rick Rubin, his first rock record after a run of hip-hop. It's hard rock stripped to a Les Paul and a Marshall with the effects switched off. The Cult's third album, and the one that broke them in America.",

  overview: [
    "The Cult came up through British post-punk and goth — Dreamtime in 1984, then Love in 1985, which reached No. 4 in the UK on a sound of chorused, reverb-soaked guitar. That success opened a split between the band's two principals. Singer and lyricist Ian Astbury wanted to layer further and get subtler; guitarist and chief songwriter Billy Duffy wanted the opposite, something bare and closer to rock and roll.",

    "In summer 1986 they cut twelve tracks at the Manor in Oxfordshire with producer Steve Brown, who had made Love. The sessions were tense and the album, Peace, was shelved. Duffy's account: \"We'd gone back into the studio too soon, as the label just wanted us to keep laying golden eggs,\" and the songs \"were too long and just felt bloated and self-indulgent\" — \"We knew something was not right, but didn't quite know what it was.\" Astbury's verdict was shorter: \"an album that sounded like soup.\"",

    "They had heard of producer Rick Rubin through his work with the Beastie Boys while touring Love; until then he had worked almost entirely in hip-hop. His proposal was modest, because the label would not fund a second expensive album — remix Peace, and re-record one song. \"That was the deal.\" What happened instead, Duffy says, is that \"we literally deconstructed the album on the spot.\" Rubin thought the band's guitar effects were \"way too overblown,\" and his reference point was blunt: \"Rick very much had a vision – and that was AC/DC, that kind of sound.\" No pedals were permitted except wah. Duffy went from a Gretsch through a Roland chorus to Rubin telling him, \"Well, that's a Marshall, that's a Les Paul, off you go.\" He adds: \"It was quite traumatic for me, I gotta tell you.\"",

    "It was tracked and mixed at Electric Lady Studios in New York with engineer Andy Wallace, who had just engineered Slayer's Reign in Blood, and with A&R man and producer George Drakoulias in the room throughout — Duffy, unkindly: \"George was more musical. Rick's not musical… at all.\" Four Peace songs went, four arrived, including a Steppenwolf cover; paisley and scarves became leather and denim. The album matched Love's UK No. 4 but stayed on the chart 27 weeks, the band's longest run, reached No. 38 in America and went platinum there. Reviews ran mixed to positive, with Trouser Press unconvinced. Peace finally surfaced in 2013 as the double Electric Peace, which sets the two versions of one album side by side.",
  ],

  listeningNotes: [
    {
      label: "Everything bone dry",
      text: "Chorus, echo and reverb are gone. Guitars and vocals sit right at the front with almost no ambience around them, which is the single largest difference from the record before it.",
    },
    {
      label: "One guitar, one amp, one pedal",
      text: "A Les Paul into a Marshall, with wah the only effect Rubin allowed. The tone barely changes across the album because there's nothing left to change it with.",
    },
    {
      label: "Open chords struck square",
      text: "Rubin's AC/DC model means big ringing open-position chords landing on the beat rather than chorused arpeggios. He asked Duffy for \"one of those pussy AC/DC English chords\" and got them.",
    },
    {
      label: "Drums placed like a rap record",
      text: "The kit is loud, uncluttered and dead centre with no gated reverb tail — closer to the beat-forward mixes Rubin came from than to mid-80s British rock production.",
    },
    {
      label: "Vocals with the whoops left in",
      text: "Astbury's ad-libs and yelps are pushed up rather than buried. With the reverb removed there's nowhere for a vocal to hide, so the mannerisms become the character.",
    },
  ],

  sources: [
    { title: "Rick Rubin is \"not musical… at all\", according to the Cult's Billy Duffy — Guitar.com", url: "https://guitar.com/news/music-news/the-cult-billy-duffy-says-rick-rubin-not-musical/" },
    { title: "'Electric' vs. 'Peace': The Cult's Near Brush With Obscurity — Ultimate Classic Rock", url: "https://ultimateclassicrock.com/the-cult-electric-peace/" },
    { title: "Why The Cult scrapped an entire album and re-recorded it with Rick Rubin — MusicRadar", url: "https://www.musicradar.com/artists/rick-put-me-on-the-spot-he-said-so-this-is-a-les-paul-i-was-like-i-know-then-he-went-okay-and-this-is-a-marshall-why-the-cult-scrapped-an-entire-album-and-re-recorded-it-with-rick-rubin" },
    { title: "Electric (The Cult album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Electric_(The_Cult_album)" },
  ],

  influencedBy: [
    { artist: "AC/DC", album: "Back in Black", year: "1980", note: "The explicit model Rubin worked from. Duffy: \"Rick very much had a vision – and that was AC/DC, that kind of sound\"; Rubin asked him outright for \"one of those pussy AC/DC English chords.\"" },
    { artist: "Slayer", album: "Reign in Blood", year: "1986", note: "Rubin produced and Andy Wallace engineered this months earlier, and the same airless, reverb-free recording — instruments at the front with no ambience behind them — carries straight over." },
    { artist: "Steppenwolf", album: "Steppenwolf", year: "1968", note: "The Cult cover this album's best-known song, which pins down which lineage of plain, riff-first American hard rock they were moving into." },
  ],

  influenced: [
    { artist: "Danzig", album: "Danzig", year: "1988", note: "Rubin's next rock production, made the following year with the same method: effects stripped out, blues-rock riffs recorded dry and close with the voice sitting on top." },
    { artist: "AC/DC", album: "Ballbreaker", year: "1995", note: "Rubin eventually produced the band he had used as the model here, applying the same back-to-basics approach he first tested on this record — his debut as a rock producer." },
  ],
});
