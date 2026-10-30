import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Arcade Fire",
  album: "Neon Bible",
  year: "2007",
  heading: "Neon Bible — Arcade Fire (2007)",

  albumLine:
    "Released 5 March 2007 on Merge Records, produced by the band themselves in a disused church they had bought. It's baroque, organ-heavy indie rock — their second album after Funeral, and the first with drummer Jeremy Gara and violinist Sarah Neufeld in the core lineup.",

  overview: [
    "Funeral had been cut in the attic of Montreal's Hotel2Tango in 2004, and it made Arcade Fire the most loudly championed new band in indie rock. Rather than book a studio for the follow-up, they bought a building: the Petite Église in Farnham, Quebec, a church that had also served as a Masonic temple and was running as a café when they took it on in 2005. They spent 2006 renovating and recording at the same time. Writing in Diffuser, Bryan Wawzenek points out the practical appeal — the big central room let all seven of them play live, at once.",

    "Where Funeral turned inward on grief, this one turned outward: television, preaching, money, fear, and water everywhere in the imagery. Singer and guitarist Win Butler is American but had lived in Montreal for years, and he told PopMatters that touring the United States was \"the first time in my life that I felt like I was visiting my own country as some sort of outsider.\" He has said that \"Christianity and consumerism are completely compatible, which I think is the great insanity of our times,\" and told Dose the band's preparation involved watching \"a lot of TV preachers, get-rich-quick schemes on YouTube.\" Critics reached further than that — Kyle Ryan in The A.V. Club heard post-9/11 commentary — but Butler's own stated subject was narrower and odder: how a worldview gets absorbed through a screen without anyone deciding to take it on.",

    "It went straight to No. 1 in Canada and Ireland and No. 2 in the United States and United Kingdom, shifting 92,000 American copies in week one, and Metacritic scored it 87. The argument was about scale. Critic Robert Christgau graded it A+ — the band \"thud rather than thunder. But what a loud and joyous thud it is\" — while critic David Fricke, in Rolling Stone, heard \"a huge sound that only sparkles on the edges, leaving Butler alone in the middle,\" and Uncut dismissed it as a record \"that takes itself too seriously to be taken seriously.\" It won the 2008 Juno for Alternative Album of the Year and was nominated for a Grammy.",
  ],

  listeningNotes: [
    {
      label: "A pipe organ with every stop pulled",
      text: "Butler told Paste that an organ normally runs on a couple of stops and sounds flute-like, \"But with all the stops pulled it's got this really aggressive sound.\" He said he knew \"Intervention\" was \"really going to be about the organ\"; multi-instrumentalist and vocalist Régine Chassagne played it, per Diffuser, in one take.",
    },
    {
      label: "Seven people tracked live in one room",
      text: "Very little here is a stack of separate parts. The church's central hall was big enough for the whole band at once, which is why the crescendos surge rather than click into place.",
    },
    {
      label: "An orchestra and a military choir from Budapest",
      text: "Michael Pärt recorded the Budapest Film Orchestra and a military men's choir at Hungarian National Radio, flown into \"No Cars Go\" — a song the band had already released on their debut EP and rebuilt here at full size.",
    },
    {
      label: "Hurdy-gurdy, mandolin and accordion in the margins",
      text: "Butler told Pitchfork he had hoped for something more stripped-down, but the songs kept demanding instruments. The odd medieval-sounding drones underneath are part of why the record never settles into straight rock band texture.",
    },
    {
      label: "Three different mixers",
      text: "The band self-produced, then sent tracks out: Nick Launay took most of them, Markus Dravs two and Mark \"Spike\" Stent two more. Launay, who liked the collaboration enough to work at their studio for a month, called it a \"playful thing.\"",
    },
  ],

  sources: [
    { title: "When Arcade Fire Looked Outward on 'Neon Bible' — Bryan Wawzenek, Diffuser", url: "https://diffuser.fm/arcade-fire-neon-bible/" },
    { title: "Neon Bible — Wikipedia", url: "https://en.wikipedia.org/wiki/Neon_Bible" },
    { title: "Arcade Fire — Wikipedia", url: "https://en.wikipedia.org/wiki/Arcade_Fire" },
  ],

  influencedBy: [
    { artist: "Bruce Springsteen", album: "Born to Run", year: "1975", note: "Named among the record's Americana reference points, and the method carries over — a large band driving full-tilt at a single crescendo behind a hoarse, declarative lead vocal." },
    { artist: "Bob Dylan", album: "Highway 61 Revisited", year: "1965", note: "Also cited as a touchstone; the device of a rolling organ pushed to the front of a rock band, carrying the song rather than colouring it, is the same one." },
  ],

  influenced: [
    { artist: "A Giant Dog", album: "Neon Bible", year: "2019", note: "A song-for-song cover of this album, released by Merge, the same label; singer Sabrina Ellis said its themes of outrage and wanting to escape the social climate still applied." },
  ],
});
