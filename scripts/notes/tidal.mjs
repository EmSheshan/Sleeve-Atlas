import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Fiona Apple",
  album: "Tidal",
  year: "1996",
  heading: "Tidal — Fiona Apple (1996)",

  albumLine:
    "Released 23 July 1996 on The Work Group, a Sony Music label, and produced by record executive Andrew Slater. It's chamber-pop and jazz-inflected alternative pop, and it's the debut album from singer and pianist Fiona Apple.",

  overview: [
    "Apple taught herself piano from The Real Book — \"I would teach myself a song that I'd never heard before,\" she told PopMatters — and wrote much of the album in her teens. A demo tape reached Slater through a friend who babysat for a music executive, per PopMatters writer Masarra Kahwaji. Slater's first reaction, Wikipedia says, was that \"it was a Milli Vanilli thing\"; he later told Billboard he \"couldn't believe [the demo] was written and sung by a 17-year-old.\" He signed her, managed her and produced the album. Sources differ on the label: PopMatters says Epic, Wikipedia lists Work, Columbia and Clean Slate.",

    "It was recorded in 1995 and 1996 at studios in Los Angeles — Sony, Ocean Way and 4th Street — with engineer Mark Endert. The sound came from producer and multi-instrumentalist Jon Brion, who plays vibraphone, guitar, tack piano, Chamberlin, harp and more, and from drummer Matt Chamberlain, who told Modern Drummer that Brion was \"a mad scientist\" with so many old instruments that \"Jon was a major influence on this record because he had so many sounds sitting around that I could just grab.\" Chamberlain brought his own kit, but a rock approach \"failed miserably\"; the aim, he said, \"was about making her songs sound unique.\" Arranger Van Dyke Parks wrote strings for one song. There was tension about the piano: Apple said, \"I don't want this to be a fuckin' piano album,\" and Slater answered, \"No, this is how you sound. This is you.\"",

    "It's in the book 1001 Albums You Must Hear Before You Die, per Wikipedia, and Rolling Stone placed it 25th among the best debut albums ever. Critic Omar Kholeif of PopMatters called it \"a stark, brutal, and often beautiful portrait about a young girl's physical and emotional growth.\" Writer Ellen Johnson of Paste, looking back, sees an artist who fought to make her own way in an industry unkind to women. Not everyone agreed at release: the Sydney Morning Herald, Wikipedia says, saw a \"gender cliché.\" At the 1997 MTV awards Apple accepted Best New Artist and said, \"This world is bullshit,\" per Wikipedia.",
  ],

  listeningNotes: [
    {
      label: "Brion's vintage keyboards and vibes",
      text: "Brion's credits include Chamberlin, vibraphone, marimba and harp. PopMatters hears \"the dreamy notes of John Brion's vibraphone\" on \"Slow Like Honey,\" and Spin writer Rebecca Haithcoat hears a \"wonky Chamberlin\" colouring \"Shadowboxer.\"",
    },
    {
      label: "Strings by Van Dyke Parks",
      text: "Parks's \"weeping strings\" on \"Never Is a Promise\" make it \"all the more heartbreaking,\" says PopMatters.",
    },
    {
      label: "A hit written in under an hour",
      text: "\"Criminal\" was written, PopMatters says, in less than an hour after her label pressed her for a hit single; Albumism says 45 minutes.",
    },
    {
      label: "Drums that serve the song",
      text: "Chamberlain moved away from a rock approach to something that suited her songs; his drums come in on most tracks.",
    },
    {
      label: "A piano-first confession",
      text: "Slater told her to \"take it back to what you wrote it on,\" the piano, and Albumism calls \"Sullen Girl\" \"a stark, minimalist composition.\"",
    },
  ],

  sources: [
    { title: "The Legendary Waves Behind Fiona Apple's Grand Debut Tidal — PopMatters (Masarra Kahwaji, 2023)", url: "https://www.popmatters.com/fiona-apple-debut-tidal-atr1996" },
    { title: "Fiona Apple's debut album Tidal — Albumism (Justin Chadwick)", url: "http://albumism.com/features/fiona-apple-debut-album-tidal-album-anniversary" },
    { title: "Matt Chamberlain on the Making of a Career in the Studio — Modern Drummer (Michael Dawson, 2011)", url: "https://www.moderndrummer.com/2011/12/matt-chamberlain/" },
    { title: "Tidal (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Tidal_(album)" },
    { title: "Fiona Apple: Tidal — PopMatters (Omar Kholeif, 2009)", url: "https://www.popmatters.com/108352-fiona-apple-tidal-2496057509.html" },
    { title: "Fiona Apple's Tidal 20 years — Spin (Rebecca Haithcoat, 2016)", url: "https://www.spinmagazine.com/2016/07/fiona-apple-tidal-20-years-anniversary/" },
    { title: "Tidal retrospective — Paste (Ellen Johnson, 2020)", url: "https://www.pastemagazine.com/music/fiona-apple/tidal-retrospective-review-criminal" },
  ],

  influencedBy: [
    { artist: "Kate Bush", album: "The Kick Inside", year: "1978", note: "Wikipedia's page for that album quotes Apple: \"I used to sing and play a bunch of her songs from The Kick Inside at my piano when I was a kid\"; critic Peter Tabakis of Spectrum Culture places Tidal \"in the tradition of\" it." },
    { artist: "Tori Amos", album: "Little Earthquakes", year: "1992", note: "Spectrum Culture's Tabakis pairs it with The Kick Inside as the tradition Tidal follows; a critic's precedent rather than a statement by Apple." },
  ],

  influenced: [
    { artist: "Bettye LaVette", album: "I've Got My Own Hell to Raise", year: "2005", note: "Wikipedia says the title comes from a lyric in Apple's \"Sleep to Dream,\" which LaVette covers on the album." },
    { artist: "Olivia Rodrigo", album: "Sour", year: "2021", note: "Singer Olivia Rodrigo told Nylon, \"I'm not going to be able to do anything even half as good as [1996's] Tidal was,\" discussing Apple's influence on one of Sour's songs." },
    { artist: "Sara Bareilles", album: "Little Voice", year: "2007", note: "Singer-songwriter Sara Bareilles told The Independent, \"Fiona's writing changed my life\" and \"Tidal is a masterpiece\"; the quote names Tidal, not her own album." },
  ],
});
