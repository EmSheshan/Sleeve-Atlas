import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "The Specials",
  album: "More Specials",
  year: "1980",
  heading: "More Specials — The Specials (1980)",

  albumLine:
    "Released 19 September 1980 on 2 Tone, produced by keyboardist Jerry Dammers with Dave Jordan and recorded that summer at Horizon Studios in Coventry. Where the Elvis Costello-produced debut caught the band playing live, this one was built in the studio out of lounge, exotica and easy listening pushed through post-punk. The Specials' second album, eleven months after the first; it reached No. 5 in the UK.",

  overview: [
    "By mid-1980, 2 Tone had stopped being a label and become a craze — a fashion, a tribal identity, a high-street trend. Dammers, who had designed its black-and-white iconography to confront the racism of the era, was losing patience with what it had turned into. \"It's time for 2-Tone bands to begin getting experimental,\" he said; some of the home-grown ska \"has started to become a cliche,\" and \"We've got to start all over again.\" Later he was blunter: \"Ska was just a launching point. I didn't want us to end up like Bad Manners.\"",

    "The replacement came off an American tour, from the music piped into hotel bars and elevators. \"Vibraphone music in elevators,\" Dammers recalled — and he heard in it \"a really weird, psychedelic music, which is now called lounge or exotica.\" Singer Terry Hall said the band had been working through composer John Barry's albums. Dammers called the result \"a DIY punk appropriation of Muzak,\" and was explicit about the aim: to wreck the distinction between good and bad music until listeners \"won't even know if they like it or not.\"",

    "It cost him the band. Guitarist Roddy Byers wanted rockabilly, drummer John Bradbury a ska-soul-reggae revue. Byers said the group \"went from With the Beatles to Sgt. Pepper's without doing Rubber Soul\"; bassist Horace Panter thought that \"very pertinent\" and called it \"probably the beginning of the fracturing of the band\" — though he had backed it early: \"Jerry has more or less the right idea of using Muzak as the new basis.\" Panter split the record in two: side one the songs side, side two the muzak side. Most of the band left in 1981.",

    "Reviews were strong. Critic Garry Bushell gave Sounds its maximum five stars for a record \"wider, warmer, weirder\" than the debut, while critic Robert Christgau was cooler at a B, finding side two \"so light it's almost ethereal.\" Worth keeping straight: it was recorded and released before the autumn 1980 tour on which Dammers watched shuttered shops across Britain and concluded \"Margaret Thatcher had apparently gone mad.\" Those scenes fed \"Ghost Town\" the following year, not this record. Critic Simon Reynolds read the full-colour sleeve here as the end of the black-and-white 2 Tone aesthetic.",
  ],

  listeningNotes: [
    {
      label: "Preset rhythms off a home organ",
      text: "Dammers built much of side two on the factory patterns of a newly bought Yamaha — cha-cha, beguine, bossa nova. A machine does the work a rhythm section used to, and the cheapness is the point.",
    },
    {
      label: "One instrument at a time",
      text: "For the lounge pieces the band stopped playing together, tracking keyboard and drums first, then bass, then guitar. Panter disliked the method for flattening the feel; that stiffness is what separates this from the debut.",
    },
    {
      label: "Hard stereo panning",
      text: "Parts are shoved into opposite speakers rather than blended — trumpets one side, Spanish-tinged guitar the other, choruses split wide. Cheerful arrangements end up sounding dislocated.",
    },
    {
      label: "Film-score horn writing",
      text: "Horn player Dick Cuthell adds mariachi flourishes on cornet and flugelhorn, and the brass chart on \"Man at C&A\" was modelled on arranger Nelson Riddle.",
    },
    {
      label: "Lead vocal buried, trombone forward",
      text: "On \"Do Nothing\" Hall is multi-tracked and set far back behind organ and decayed piano while trombonist Rico Rodriguez takes the front — writer Tony Fletcher calls it a reversed anti-production.",
    },
    {
      label: "Synthesised drums as sound effects",
      text: "Bradbury was the band's lone enthusiast for electronic percussion, and here it supplies explosions and clatter rather than a beat.",
    },
  ],

  sources: [
    {
      title: "Tony Fletcher — Why More Specials is More Special than The Specials",
      url: "https://tonyfletcher.substack.com/p/why-more-specials-is-more-special",
    },
    { title: "More Specials — Wikipedia", url: "https://en.wikipedia.org/wiki/More_Specials" },
    { title: "More Specials — AllMusic", url: "https://www.allmusic.com/album/more-specials-mw0000194930" },
  ],

  influencedBy: [
    {
      artist: "John Barry",
      album: "Thunderball",
      year: "1965",
      note: "Singer Terry Hall said the band had been working through composer John Barry's albums; his wide-interval brass writing and plucked-piano menace shape the horn charts and intros here.",
    },
    {
      artist: "Linton Kwesi Johnson",
      album: "Forces of Victory",
      year: "1979",
      note: "Dammers took the groove of dub poet Linton Kwesi Johnson's \"Want Fi Goh Rave\", which opens this album, as the starting point for the dub-reggae end of his own writing.",
    },
  ],

  influenced: [
    {
      artist: "The Beat",
      album: "Wha'ppen?",
      year: "1981",
      note: "Ranking Roger, the Beat's singer, cited this record's hotel-lounge approach as the reason his band widened out on their second album.",
    },
    {
      artist: "Orbital",
      album: "Snivilisation",
      year: "1994",
      note: "Sampled \"Man at C&A\" directly on \"Are We Here?\" — a documented lift rather than an echo.",
    },
    {
      artist: "Blur",
      album: "The Great Escape",
      year: "1995",
      note: "Critics trace its cheap rhythm-preset organ and seaside-melancholy ska back to this album; Damon Albarn, Blur's singer, has named the Specials a major inspiration.",
    },
  ],
});
