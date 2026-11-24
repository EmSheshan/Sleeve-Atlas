import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "The Velvet Underground",
  album: "White Light / White Heat",
  year: "1968",
  heading: "White Light/White Heat — The Velvet Underground (1968)",

  albumLine:
    "Released 30 January 1968 on Verve Records, and produced by Tom Wilson, a record producer, with Gary Kellgren engineering. It's noise rock and proto-punk, and it's the band's second album, after The Velvet Underground & Nico (1967) and the last with violist and bassist John Cale.",

  overview: [
    "Wikipedia says the sessions were partly a reaction against the Summer of Love and an attempt to capture the band's live sound, after they had fired Andy Warhol and singer Nico and taken on Steve Sesnick as manager. Where they recorded is unsettled: Wikipedia's album page says Mayfair Sound Studios, 4 to 16 September 1967, while its page for the longest song says Scepter Studios. Cale said in liner notes, as relayed by Wikipedia, that it was \"a very rabid record\" and \"consciously anti-beauty.\" Guitarist Sterling Morrison said, \"We were all pulling in the same direction,\" though he later thought it technically a failure.",

    "The band played loud through new Vox gear with heavy distortion and compression. Wikipedia reports Kellgren saying, \"you can't do it – all the needles are on red.\" Writer Jim Wirth of Mojo says the longest song was one take with no bass, with Cale's Vox Continental organ played through a distorted guitar amp, that Kellgren walked out partly over the volume, and that drummer Moe Tucker's drums were poorly miked because Wilson was distracted. Singer and guitarist Lou Reed called the story \"a bunch of drag queens taking some sailors home with them.\" Wikipedia says Reed smashed a cantaloupe for the sound of a blade through a skull, at the request of Frank Zappa, who was recording in the same studio, and that Reed later remixed one song to push his vocals up, which Tucker felt damaged it.",

    "Wikipedia says the album is in the 2018 edition of 1001 Albums You Must Hear Before You Die; the book's text wasn't found. Melody Maker called it \"utterly pretentious, unbelievably monotonous\" in 1968, per Wikipedia. Writer Lavinia Greenlaw of the New Statesman calls it \"the most tense record I've ever heard\" and \"an experiment in limits and scale.\" Writer Jon Young of Mother Jones calls it \"a grimy, exhilarating blast of confrontational noise,\" while finding the spoken-word piece the one track that hasn't aged well. Writer Ian Fortnam of Louder calls it \"the most extreme music the 12-year-old rock'n'roll epoch had yet produced.\"",
  ],

  listeningNotes: [
    {
      label: "A song with no bass",
      text: "Per Wikipedia and Mojo, \"Sister Ray\" is a single take of about seventeen minutes, with Cale's organ through a distorted guitar amp in place of a bassist.",
    },
    {
      label: "Compressed, distorted Vox amps",
      text: "Fortnam says the title song \"strips rock to its bare bones,\" its sound the product of loud amps and heavy compression.",
    },
    {
      label: "A feedback maelstrom",
      text: "Fortnam hears a \"vicious feedback maelstrom\" in \"I Heard Her Call My Name,\" which Reed later remixed to bring his vocals forward.",
    },
    {
      label: "A muffled, wet drum sound",
      text: "Mojo says Tucker's drums weren't properly miked, giving a muffled sound that sits under the guitar noise.",
    },
    {
      label: "A spoken story with a sound effect",
      text: "\"The Gift\" pairs a spoken story with the cantaloupe smash Reed made at Zappa's request, though Young says it hasn't aged well.",
    },
  ],

  sources: [
    { title: "The making of Sister Ray — Mojo (Jim Wirth)", url: "https://mojo4music.com/articles/stories/the-making-of-the-velvet-undergrounds-sister-ray" },
    { title: "White Light/White Heat — New Statesman (Lavinia Greenlaw, 2017)", url: "https://www.newstatesman.com/culture/music/2017/12/lavinia-greenlaw-white-lightwhite-heat-velvet-underground-experiment" },
    { title: "White Light/White Heat reissue review — Mother Jones (Jon Young, 2013)", url: "https://www.motherjones.com/politics/2013/12/velvet-underground-white-light-white-heat-reissue-review/" },
    { title: "White Light/White Heat — Louder (Ian Fortnam, 2025)", url: "https://www.loudersound.com/features/velvet-underground-white-light-white-heat-prog" },
    { title: "White Light/White Heat — Wikipedia", url: "https://en.wikipedia.org/wiki/White_Light/White_Heat" },
    { title: "Sister Ray — Wikipedia", url: "https://en.wikipedia.org/wiki/Sister_Ray" },
  ],

  influencedBy: [],

  influenced: [
    { artist: "Joy Division", album: "Still", year: "1981", note: "The compilation includes the band's live cover of \"Sister Ray\" from the Moonlight Club in April 1980, per Wikipedia and Mojo; a credited cover rather than a stated influence." },
  ],
});
