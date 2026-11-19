import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Willie Nelson",
  album: "Stardust",
  year: "1978",
  heading: "Stardust — Willie Nelson (1978)",

  albumLine:
    "Released in April 1978 on Columbia Records and produced by Booker T. Jones, the organist and producer. It's country-pop built on American standards, and per Wikipedia it's Willie Nelson's 22nd studio album, arriving after Waylon & Willie (1978) and the outlaw run of Red Headed Stranger (1975).",

  overview: [
    "Nelson, by then an outlaw-country star, wanted to record the pop songs he grew up with. Writer Jof Owen of Holler says he pitched the idea to Columbia executive Rick Blackburn, who was \"less than enthusiastic,\" and that Nelson met his Malibu neighbour Booker T. Jones — \"according to legend,\" on a morning jog. Nelson asked Jones to arrange \"Moonlight in Vermont\" as an experiment, and then to produce the whole album. Nelson picked the ten songs himself from childhood favourites, starting with the title song, which he knew from sheet music. Jones, Wikipedia says, \"kept the arrangements sparse, with no backup singers or additional strings\"; Nelson's contract gave him total creative control.",

    "It was recorded in December 1977 in an unusual way. Producer Brian Ahern let Nelson use his Enactron recording truck, parked outside his Hollywood Hills home, with cables running into the living room where the band played. Harmonica player Mickey Raphael recorded his parts in a tiled bathroom shower. Wikipedia and Holler say ten days, 3–12 December, with \"as few takes as possible.\" Drummer Paul English told writer Scott K. Fish in 1981 that the band recorded it in \"three days,\" longer than they had ever taken on an album: \"We don't know what we're gonna do when we go in there... Willie never tells us how to play. So we get to create ourself.\" The two figures may measure different things, but no source explains the gap. Another disagreement: writer Seth Mnookin of Salon calls the sound \"lush\" and \"string-backed,\" which conflicts with Wikipedia's no-strings account.",

    "Nelson worried about one song because singer Ray Charles had made it famous; Jones told him, \"Ray did it his way, and you'll do it yours.\" Columbia executives, Nelson recalled, said, \"This is not a good idea.\" He was proved right. Rolling Stone ranked it 260th among its 500 greatest albums, per Wikipedia, and it entered the Grammy Hall of Fame in 2015. Critic Ariel Swartley of Rolling Stone wrote, \"for all the sleek sophistication of the material, Stardust is as down-home as the Legion dance,\" and critic Robert Christgau gave it an A−. Owen, scoring it 10/10, calls the reinterpretations \"profoundly beautiful and filled with an intimate sense of sadness and loss.\"",
  ],

  listeningNotes: [
    {
      label: "Harmonica from a bathroom",
      text: "Raphael's harmonica was cut in a tiled shower, which gives it a close, resonant sound against the living-room band.",
    },
    {
      label: "Hammond organ and piano warmth",
      text: "Jones plays Hammond organ and piano, and Salon credits \"the lush production of Booker T. Jones,\" Raphael's harmonica and pianist Bobbie Nelson for the sound.",
    },
    {
      label: "A singer who isn't a crooner",
      text: "Critic David Luhrssen of the Shepherd Express says Nelson was \"no bel canto singer, no Sinatra, but he sang the old songs with conviction,\" which is the whole appeal.",
    },
    {
      label: "A cover that follows Ray Charles",
      text: "Critic Ron Hart of PopMatters hears Nelson's \"Georgia on My Mind\" as \"closer to the Ray Charles version than the original,\" the song Nelson was nervous about.",
    },
    {
      label: "A silky title song",
      text: "Hart singles out \"the silky-soft spin on the 1927 title track\" for the record's intimacy.",
    },
  ],

  sources: [
    { title: "Country Classics: Willie Nelson, Stardust — Holler (Jof Owen, 2022)", url: "https://holler.country/reviews/willie-nelson-stardust" },
    { title: "Stardust (Willie Nelson album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Stardust_(Willie_Nelson_album)" },
    { title: "Paul English on the Making of Stardust (1981) — Scott K. Fish (2017)", url: "https://scottkfish.com/2017/09/11/paul-english-on-the-making-of-stardust-1981" },
    { title: "Sharps & Flats — Salon (Seth Mnookin, 1999)", url: "https://www.salon.com/1999/10/29/nelson_3" },
    { title: "Stardust (Legacy Edition) — PopMatters (Ron Hart, 2008)", url: "https://popmatters.com/willie-nelson-stardust-legacy-edition-2496140454.html" },
    { title: "Willie Nelson, Stardust Legacy Edition — Shepherd Express (David Luhrssen, 2008)", url: "https://shepherdexpress.com/music/album-reviews/willie-nelson-d4/" },
  ],

  influencedBy: [],

  influenced: [
    { artist: "Bob Dylan", album: "Shadows in the Night", year: "2015", note: "Singer-songwriter Bob Dylan said, per Wikipedia, that he had wanted to make a standards album ever since hearing Nelson's Stardust; the Austin Chronicle says he proposed such a project in its wake." },
    { artist: "Rod Stewart", album: "Stardust... The Great American Songbook Volume III", year: "2004", note: "Critic Robert Christgau, reviewing it, set it against \"Willie Nelson, whose own Stardust remains the gold standard of rock-era standards.\"" },
  ],
});
