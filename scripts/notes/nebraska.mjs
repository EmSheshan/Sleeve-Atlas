import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Bruce Springsteen",
  album: "Nebraska",
  year: "1982",
  heading: "Nebraska — Bruce Springsteen (1982)",

  albumLine:
    "Released 30 September 1982 on Columbia, produced by Springsteen alone. It's a folk record — one voice, acoustic guitar, harmonica, a few sparse overdubs — taped at home on a four-track cassette machine. His sixth album, sitting between The River and Born in the U.S.A.",

  overview: [
    "Springsteen wrote the songs over a couple of months in the winter of 1981–82, drawing on director Terrence Malick's 1973 film Badlands and a biography of Caril Fugate, the teenager who accompanied Charles Starkweather on his 1957–58 killing spree. He was reading writer Flannery O'Connor, whose compression he admired, and working in the outlaw-ballad form he took from folk singer Woody Guthrie, praising Guthrie's \"toughness, wit and common wisdom.\" He resisted having politics read into it: he said he was \"after a feeling, a tone,\" with \"no conscious political agenda or social themes.\"",

    "Guitar tech Mike Batlan set up a Teac Tascam 144 four-track in the bedroom of Springsteen's rented house in Colts Neck, New Jersey. Legend has it the whole thing was cut on 3 January 1982; sources disagree, with others dating the sessions back to mid-December 1981. Springsteen mixed through a Panasonic boom box and an old Gibson Echoplex, then carried the cassette in his jacket pocket for months. In April and May 1982 he and the E Street Band spent three weeks at the Power Station in New York cutting band versions, and it went wrong. Producer Chuck Plotkin: \"We were squashing all of the dark, strange particularity.\" Springsteen later wrote that he had \"succeeded in doing nothing but damaging what I'd created,\" and went back to the tape.",

    "Engineer Toby Scott — \"There's just something about the atmosphere on this tape\" — took it through several New York mastering rooms before finding a lathe at Atlantic Studios that would cut it; accounts differ on how many rooms it took. Columbia put it out with the hiss intact, and Springsteen didn't tour it, the first time he'd skipped a tour for a new record. It still reached No. 3 in both the US and UK. Guitarist Steven Van Zandt called it \"among the most uncompromising and uncommercial recordings any major artist has ever released.\" Its longest shadow is technical: it demonstrated that a bedroom and a cheap multitrack could make a releasable album, and lo-fi songwriters have pointed back at it ever since.",
  ],

  listeningNotes: [
    {
      label: "The Echoplex slapback",
      text: "Springsteen ran the mixes through an old Gibson Echoplex with an endless tape loop, which is where the rockabilly reverb hanging off the voice comes from. The unit died shortly afterwards.",
    },
    {
      label: "Hiss and clipping left in",
      text: "Batlan was unfamiliar with the machine and Springsteen was impatient, so some songs distort. None of it was cleaned up; the murk was kept as part of the sound.",
    },
    {
      label: "A one-chord drone and a scream",
      text: "\"State Trooper\" is a single hypnotic guitar figure and a shout, close enough to Suicide's \"Frankie Teardrop\" that Alan Vega, Suicide's singer, heard his own record in it: \"But it was Bruce!\"",
    },
    {
      label: "Rack harmonica as punctuation",
      text: "The harmonica fills the gaps between verses rather than taking solos — a folk-ballad habit inherited from Guthrie, and most of what occupies the space around the guitar.",
    },
    {
      label: "Overdubs you can count",
      text: "A few tracks add glockenspiel, mandolin or organ. Everything else is one guitar and one voice, which is why those small additions register so loudly.",
    },
  ],

  sources: [
    {
      title: "Inside The Making Of Bruce Springsteen's Nebraska — MOJO",
      url: "https://www.mojo4music.com/articles/stories/inside-the-making-of-bruce-springsteens-nebraska-i-got-to-wondering-what-the-hell-am-i-doing/",
    },
    {
      title: "How One Amazing Night Led to Bruce Springsteen's 'Nebraska' — Ultimate Classic Rock",
      url: "https://ultimateclassicrock.com/bruce-springsteen-nebraska-recording/",
    },
    { title: "Nebraska (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Nebraska_(album)" },
  ],

  influencedBy: [
    {
      artist: "Woody Guthrie",
      album: "Dust Bowl Ballads",
      year: "1940",
      note: "Springsteen named Guthrie's \"toughness, wit and common wisdom\" as a model; the solo voice, rack harmonica and plain outlaw-ballad narration come straight from these records.",
    },
    {
      artist: "Suicide",
      album: "Suicide",
      year: "1977",
      note: "The one-chord drone and sudden scream of \"Frankie Teardrop\" fed the album's claustrophobia, and Suicide's singer Alan Vega recognised his own record in \"State Trooper.\"",
    },
  ],

  influenced: [
    {
      artist: "Iron & Wine",
      album: "The Creek Drank the Cradle",
      year: "2002",
      note: "Sam Beam, its singer and only player, recorded it alone at home to four-track tape and released it with the room noise unfixed — the method this album made legitimate.",
    },
    {
      artist: "Bon Iver",
      album: "For Emma, Forever Ago",
      year: "2008",
      note: "Justin Vernon, its singer, cut it alone on minimal equipment in isolation and kept the result rather than re-recording it; critics have repeatedly placed it in this album's lineage.",
    },
  ],
});
