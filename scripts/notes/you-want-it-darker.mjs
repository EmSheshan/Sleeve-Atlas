import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Leonard Cohen",
  album: "You Want It Darker",
  year: "2016",
  heading: "You Want It Darker — Leonard Cohen (2016)",

  albumLine:
    "Released 21 October 2016 on Columbia, produced by his son Adam Cohen with Patrick Leonard, and recorded between April 2015 and July 2016 in Cohen's living room in Mid-Wilshire, Los Angeles. It's sparse, blues-inflected art song — his fourteenth album, finished seventeen days before he died.",

  overview: [
    "Cohen was a poet and novelist in Montreal before he was a musician, publishing his first collection in 1956 and not recording until 1967, and he never stopped writing like someone whose first instinct was the page. He was born in 1934 into an Orthodox Jewish family in Westmount, Quebec, a fact that matters more on this record than on any other he made. He died on 7 November 2016, aged 82.",

    "The making of it was shaped entirely by his body. Years of touring from 2008 to 2013 — undertaken after his savings were stolen, which is its own story — had left him with multiple spinal fractures and barely able to move. So he recorded sitting in a medical chair in his own living room and emailed the files to his collaborators, a working method more associated with bedroom producers than with a man in his eighties on a major label. Adam Cohen has described him occasionally managing, through the pain, to stand up in front of the speakers to listen back.",

    "What he used that setup for was to make a record addressed to God. The Hebrew word \"hineni\" — \"here I am,\" what Abraham says when called — is the refrain of the opening song, and the framing throughout is of someone reporting for duty rather than pleading. He brought in Cantor Gideon Zelermyer and the choir of Shaar Hashomayim, the Montreal synagogue of his childhood, so the voices answering him are literally the ones he grew up hearing. It is worth resisting the neat reading: the album was finished before anyone knew how little time was left, and David Remnick's New Yorker profile appeared that same month. The valedictory quality is real, but it was not staged for the ending.",

    "It was received better than almost anything else he made, with a Metacritic score of 92 from 28 reviews; it went to No. 1 in Canada, No. 4 in Britain, and became only his second American top ten album. The title track won the Grammy for Best Rock Performance in 2018, a category assignment that is funny in a way he would have appreciated. Adam Cohen assembled the leftover material into \"Thanks for the Dance\" three years later.",
  ],

  listeningNotes: [
    {
      label: "The voice at the bottom of its range",
      text: "By 82 he is speaking more than singing, in a bass so low it sometimes loses pitch altogether. The frailty is left in and the microphone is close enough to catch it.",
    },
    {
      label: "A synagogue choir and cantor",
      text: "Zelermyer and the Shaar Hashomayim choir answer his lines in Hebrew liturgical style, which puts the record formally in the tradition it is arguing with.",
    },
    {
      label: "Arrangements built from very little",
      text: "Mostly a soft organ pad, a fretless bass, brushed drums and the occasional guitar figure. Nothing competes with the words, and long stretches are nearly silent.",
    },
    {
      label: "Blues underneath the liturgy",
      text: "Several tracks sit on slow twelve-bar-adjacent chord movement, which grounds the theology in something earthier than a hymn.",
    },
    {
      label: "Women's voices as the other party",
      text: "Female backing singers shadow and finish his phrases throughout, a device he had used for decades, here sounding less like accompaniment than like a reply.",
    },
    {
      label: "Recorded at home, and it sounds like it",
      text: "The room is small and untreated, with no sense of a studio around the voice. That domesticity is why the album feels overheard rather than performed.",
    },
  ],

  sources: [
    { title: "You Want It Darker — Wikipedia", url: "https://en.wikipedia.org/wiki/You_Want_It_Darker" },
    { title: "Leonard Cohen — Wikipedia", url: "https://en.wikipedia.org/wiki/Leonard_Cohen" },
    { title: "Thanks for the Dance — Wikipedia", url: "https://en.wikipedia.org/wiki/Thanks_for_the_Dance" },
  ],

  influencedBy: [
    { artist: "Leonard Cohen", album: "Songs of Leonard Cohen", year: "1967", note: "His own starting point — the same voice-and-guitar intimacy and the same religious vocabulary, fifty years earlier." },
    { artist: "Johnny Cash", album: "American IV: The Man Comes Around", year: "2002", note: "Established the late-career record as a form: an old voice, minimal accompaniment, mortality addressed head-on." },
  ],

  influenced: [
    { artist: "Bob Dylan", album: "Rough and Rowdy Ways", year: "2020", note: "The late-period mode of an old songwriter half-speaking his lines over minimal backing, treating death as a subject among others." },
    { artist: "Nick Cave and the Bad Seeds", album: "Ghosteen", year: "2019", note: "The register of quiet, ambient grief with the voice foregrounded and the band nearly absent descends from this." },
  ],
});
