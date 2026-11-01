import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Led Zeppelin",
  album: "Led Zeppelin III",
  year: "1970",

  heading: "Led Zeppelin III — Led Zeppelin (1970)",

  albumLine:
    "Released 5 October 1970 on Atlantic (one account says 6 October) and produced by guitarist Jimmy Page. It's hard rock with a large acoustic, folk-leaning side, and it's the band's third album — the one that broke the formula of the first two. Page has argued the \"acoustic album\" tag is something of a misnomer.",

  overview: [
    "Two albums of amplified blues-rock and almost continuous touring had made Led Zeppelin enormous and typecast. In 1970 Page and singer Robert Plant retreated to Bron-Yr-Aur, a cottage in Gwynedd, Wales, with acoustic guitars and no band, and much of this record was written there. The name is misspelled on the sleeve. What they brought back was not a novelty: Page's acoustic vocabulary came out of the British folk revival that had been running in London clubs through the 1960s, and he has cited guitarists Bert Jansch, John Renbourn and Davey Graham as the players who shaped it, once calling himself a \"Bert Jansch clone.\"",

    "Where it was actually recorded is genuinely disputed. The credits and the band's 1993 box set list Headley Grange, a cold country house, alongside Olympic and Island Studios in London, with the Rolling Stones Mobile Studio handling the house sessions. Page flatly contradicted this to Mojo: \"We didn't go to Headley Grange for III,\" he said, calling the claim rubbish and naming Olympic and Island instead. Both sides agree Bron-Yr-Aur is what changed the music. Everyone turned multi-instrumentalist for it — drummer John Bonham playing spoons and castanets, bassist John Paul Jones on acoustic five-string fretless bass and a Moog. The sleeve, by the designer Zacron (Richard Drew), whom Page had met in the early 1960s, is a volvelle: a rotating card wheel behind cut-out holes. It held up the album's shipping.",

    "Reviews were the worst of the band's early career. Critics were confused by the turn, and Lester Bangs in Rolling Stone faulted the heavier songs for running together, while Atlantic's own copy insisted the record was eagerly awaited. Audiences who had bought the first two albums for volume were not uniformly pleased either, though the lead single is reported to have reached the US top 20. The reassessment since has been near-total: the album now reads as the moment the band stopped being a blues act and became something harder to categorise. Britannica credits Led Zeppelin broadly with pushing hard-rock bands toward acoustic material, and this is the record that did it, though artists citing it directly are harder to find than the claim suggests.",
  ],

  listeningNotes: [
    {
      label: "Altered tunings on the acoustic songs",
      text: "Page makes heavy use of non-standard tunings across the record, a habit taken from Graham. The fingerpicking is folk-revival technique played by a band with a hard-rock rhythm section behind it.",
    },
    {
      label: "Hand percussion instead of a kit",
      text: "On the main acoustic stomp Bonham plays spoons and castanets rather than drums, which gives the track a lift completely unlike his playing elsewhere here.",
    },
    {
      label: "Fretless acoustic bass",
      text: "Jones switches to an acoustic five-string fretless on that same track, so the low end is woody and sliding rather than electric and fixed.",
    },
    {
      label: "The Moog drone",
      text: "Jones's synthesizer hangs over \"Friends\" like a held breath and, by one account, bleeds into the following track as a fade. It is the strangest texture on the album by a distance.",
    },
    {
      label: "Strings added after the take",
      text: "The orchestration on \"Friends\" went on top of an arrangement already built from acoustic guitars, which is why the strings sit against the guitars rather than cushioning them.",
    },
    {
      label: "The riff side, undiminished",
      text: "The opening track came out of the band's summer 1970 tour of Iceland, Bath and Germany, and it is as heavy as anything on the second album. That's Page's point about the acoustic-album label.",
    },
  ],

  sources: [
    { title: "Jimmy Page interviewed — Mojo", url: "https://www.mojo4music.com/articles/stories/jimmy-page-interviewed/" },
    { title: "How Led Zeppelin Took the '70s By Storm With Their Third Album — Guitar Player", url: "https://www.guitarplayer.com/players/led-zeppelin-iii" },
    { title: "Jimmy Page Discusses Led Zeppelin III — Guitar World", url: "https://www.guitarworld.com/gw-archive/jimmy-page-discusses-led-zeppelin-iii" },
    { title: "Led Zeppelin III: 25 things only hardcore fans know — Louder", url: "https://www.loudersound.com/features/25-things-about-led-zeppelin-III" },
    { title: "Bron-y-aur Stomp — Songfacts", url: "https://www.songfacts.com/facts/led-zeppelin/bron-y-aur-stomp" },
    { title: "The making of Led Zeppelin III — Record Collector", url: "https://recordcollectormag.com/articles/the-making-of-led-zeppelin-iii" },
    { title: "Led Zeppelin III — Wikipedia", url: "https://en.wikipedia.org/wiki/Led_Zeppelin_III" },
  ],

  influencedBy: [
    { artist: "Bert Jansch", album: "Jack Orion", year: "1966", note: "Page cited Jansch constantly and adapted a tune from this album, tuning included, for Led Zeppelin's debut; the same fingerpicking approach runs through this record's acoustic side." },
    { artist: "Davey Graham", album: "Folk, Blues and Beyond", year: "1964", note: "Graham's altered tunings and modal lines are the documented source of Page's non-standard tunings, which he leans on heavily across this album." },
    { artist: "Roy Harper", album: "Folkjokeopus", year: "1969", note: "A fellow London acoustic player whom the album closes by naming outright in tribute, and with whom Page later recorded." },
  ],

  influenced: [],
});
