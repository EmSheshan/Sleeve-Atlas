import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Fleetwood Mac",
  album: "Rumours",
  year: "1977",
  heading: "Rumours — Fleetwood Mac (1977)",

  albumLine:
    "Released 4 February 1977 on Warner Bros., produced by the band with engineers Ken Caillat and Richard Dashut. Soft rock built on close harmony and studio precision — Fleetwood Mac's eleventh album, and the second by the line-up that remade them as a Californian band.",

  overview: [
    "Fleetwood Mac had already been several groups by 1976: a British blues band, then something else once singer and guitarist Lindsey Buckingham and singer Stevie Nicks joined in 1975. Keyboardist Christine McVie and bassist John McVie divorced during the sessions and spoke only about music; Buckingham and Nicks ended their relationship; drummer Mick Fleetwood's wife, Jenny Boyd, had an affair with his closest friend. Nobody left. They wrote about one another instead and sang each other's words back in harmony — the strange engine of the record, and why it sounds both sunlit and poisoned.",

    "Fleetwood moved everyone out of Los Angeles to the Record Plant in Sausalito on purpose; Dashut explained the logic: \"Mick thought that if he took us out of our homes, we'd all have to hang out together with very few distractions.\" It worked, after a fashion: Christine McVie remembered \"Trauma, Trau-ma. The sessions were like a cocktail party every night—people everywhere.\" Cocaine ran through the production, and days stretched to fifteen hours from February to August 1976.",

    "The technical trouble nearly matched the personal. Constant playback wore the master tapes out and dulled the drums; the album survived only because every basic track had been captured on two machines at once, and an engineer spent a night matching the two reels' speed by ear, without timecode, to move the overdubs onto the safety copy.",

    "Warner Bros. took an advance order of 800,000 copies, the largest in its history to that point. The album hit No. 1 on 2 April 1977 and held the top of the Billboard 200 for 31 non-consecutive weeks; all four singles went top ten, one giving the band their only American No. 1. It won Album of the Year at the 1978 Grammys and has sold over 40 million copies. Reviews were strong but not unanimous — critic Robert Hilburn of the Los Angeles Times found it \"frustratingly uneven.\" Its standing has only climbed: the National Recording Registry took it in 2017, Rolling Stone placed it seventh in its 2020 list of the 500 greatest albums, and the 2023 play Stereophonic dramatised the sessions closely enough that Caillat sued its creators in 2024 over his memoir.",
  ],

  listeningNotes: [
    {
      label: "A drum part pulling against the song",
      text: "Buckingham asked Fleetwood to approximate the beat of the Rolling Stones' \"Street Fighting Man\"; what came back was, in Caillat's word, \"Fleetwoodized\" — rolling across the toms with the kick off the expected beat, so the groove argues with the song.",
    },
    {
      label: "A tape loop before loops",
      text: "Caillat cut an eight-bar loop from Fleetwood's drumming for what he called a hypnotic effect. It's why \"Dreams\" never varies underneath, and Caillat enjoys that listeners praising the rhythm section's feel are praising a loop.",
    },
    {
      label: "Solos comped on the faders",
      text: "The lead guitar was comped from six takes, Caillat pushing up whichever fader held the best phrase — \"literally playing the console like a musical instrument.\" Buckingham then had to learn the result to play live.",
    },
    {
      label: "Lips against the windscreen",
      text: "Nicks sang into a dynamic microphone roughly half an inch away, with Caillat telling her to \"keep your lips up against that wind-screen.\" The proximity effect, not studio sweetening, gives her voice its close, heavy bottom end.",
    },
    {
      label: "Instruments kept out of each other's register",
      text: "Christine McVie transposed a keyboard part down a third so it wouldn't collide with Buckingham's guitar. Parts are separated by pitch range rather than volume, which is why dense arrangements sound open.",
    },
    {
      label: "Tack piano",
      text: "An upright with tacks set into the hammers, giving a bright, clattering attack. It's the honky-tonk edge under \"Don't Stop,\" cutting through a mix already crowded with electric keyboards.",
    },
  ],

  sources: [
    {
      title: "Classic Tracks: Fleetwood Mac 'Go Your Own Way' — Sound on Sound",
      url: "https://www.soundonsound.com/techniques/classic-tracks-fleetwood-mac-go-your-own-way",
    },
    {
      title: "Fleetwood Mac at the Record Plant — Mix",
      url: "https://www.mixonline.com/recording/fleetwood-mac-record-plant-365880",
    },
    {
      title: "Ken Caillat Revisits Rumours — GRAMMY.com",
      url: "https://www.grammy.com/news/ken-caillat-revisits-rumours",
    },
    {
      title: "April 2, 1977: Fleetwood Mac's 'Rumours' Hits Number One — Best Classic Bands",
      url: "https://bestclassicbands.com/fleetwood-mac-rumours-number-one-4-2-177/",
    },
    { title: "Rumours (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Rumours_(album)" },
  ],

  influencedBy: [
    {
      artist: "The Rolling Stones",
      album: "Beggars Banquet",
      year: "1968",
      note: "A direct borrowing: Buckingham had Fleetwood build a variation on that album's loose, tom-heavy drum feel, which became this record's most recognisable beat.",
    },
    {
      artist: "The Beach Boys",
      album: "Pet Sounds",
      year: "1966",
      note: "The model for treating stacked close harmony as the lead instrument and assembling songs in the studio rather than capturing a live band.",
    },
    {
      artist: "Crosby, Stills & Nash",
      album: "Crosby, Stills & Nash",
      year: "1969",
      note: "Three distinct voices blended into one, each singer also writing and leading their own songs — the arrangement model Fleetwood Mac adopted once they had three songwriters.",
    },
  ],

  influenced: [
    {
      artist: "Lorde",
      album: "Melodrama",
      year: "2017",
      note: "Lorde has called this a \"perfect record\"; her own break-up album uses the same trick of setting wreckage inside bright, harmony-stacked pop arrangements.",
    },
  ],
});
