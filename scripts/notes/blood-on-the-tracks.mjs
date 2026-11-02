import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Bob Dylan",
  album: "Blood On The Tracks",
  year: "1975",
  heading: "Blood On The Tracks — Bob Dylan (1975)",

  albumLine:
    "Released 20 January 1975 on Columbia, with the New York sessions produced by Phil Ramone and the Minneapolis re-recordings produced by Dylan himself — neither credited on the sleeve. Folk and folk-rock pared back to acoustic guitar, bass and drums. It's Dylan's fifteenth studio album, and his first after returning to Columbia from Asylum.",

  overview: [
    "It came out of a year Dylan has spent fifty years declining to explain. In spring 1974 he took weeks of art classes in New York from the painter Norman Raeben, who he said \"taught me how to see ... in a way that allowed me to do consciously what I unconsciously felt\"; of the album he said \"there's a code in the lyrics, and also there's no sense of time.\" He wrote seventeen songs into three small notebooks that summer at his Minnesota farm.",

    "Everyone wants it to be a divorce record. His son, the musician Jakob Dylan, has said \"When I'm listening to Blood On The Tracks, that's about my parents.\" Dylan denies it: in 1985 he told the writer Bill Flanagan \"A lot of people thought that album pertained to me. It didn't pertain to me,\" and in his 2004 memoir he credited the short stories of Anton Chekhov. He also contradicts himself — on the 1978 live album from Tokyo he introduces one song as \"a simple love story. Happened to me.\" He won't settle it.",

    "He cut it twice. The September sessions at A&R Recording in New York were fast and bare — guitarist Eric Weissberg's band Deliverance were dropped after a day for not keeping up — and a test pressing was ready for Christmas. Then Dylan played it to his brother, David Zimmerman, who said the sound was too stark to sell. The critic Robert Christgau heard that version and called it \"a sellout to the memory of Dylan's pre-electric period.\" At the end of December Dylan recut five songs at Sound 80 in Minneapolis with players his brother rounded up by phone. The album is five takes from each city.",

    "Reviews in 1975 split on the playing, not the writing. Jon Landau wrote in Rolling Stone that \"the record has been made with typical shoddiness\"; Jonathan Cott, in the same issue, called it \"Dylan's magnificent new album.\" It went to No. 1 in America and No. 4 in Britain, and Rolling Stone moved it to ninth on its greatest-albums list in 2020. The Minneapolis players were told before they played that the jackets were already printed and they would get no credit; their names only circulated widely with the 2018 reissue.",
  ],

  listeningNotes: [
    {
      label: "Drumming behind the beat",
      text: "Bill Berg, the Minneapolis drummer, lands late on purpose. Guitarist Kevin Odegard explains it as: if a beat is ten feet long, Berg hits it at nine and a half. He switches between brushes and sticks, and that drag gives those takes their lean.",
    },
    {
      label: "A key raised a whole tone",
      text: "Odegard suggested moving the opening song up from G to A so Dylan would be reaching for the notes. The released version is the only complete take they played in A.",
    },
    {
      label: "A safety mix as the master",
      text: "Engineer Paul Martinson ran a quarter-inch tape beside the main console and faded it by hand. Odegard says that mix went to the pressing plant untouched — \"no post-production, nothing.\"",
    },
    {
      label: "Guitars stacked where the bass should be",
      text: "Bassist Billy Peterson left mid-session for a jazz gig, so \"You're a Big Girl Now\" was cut with no bass at all, filled in with layered acoustics and two flamenco guitar parts Dylan overdubbed himself.",
    },
    {
      label: "Mandolin in the top register",
      text: "Peter Ostroushko arrived late and ill with sore fingers, so Dylan borrowed his mandolin and played the high lines himself on the long story song in the middle of side two.",
    },
  ],

  sources: [
    {
      title: "Setting the Record Straight: Bob Dylan's 'Blood On The Tracks' — Kevin Odegard interviewed by Jeff Slate, Rock Cellar Magazine",
      url: "https://rockcellarmagazine.com/bob-dylan-blood-on-the-tracks-recording-sessions-kevin-odegard-history/",
    },
    { title: "Blood on the Tracks — Wikipedia", url: "https://en.wikipedia.org/wiki/Blood_on_the_Tracks" },
    { title: "Tangled Up in Blue — Wikipedia", url: "https://en.wikipedia.org/wiki/Tangled_Up_in_Blue" },
  ],

  influencedBy: [
    {
      artist: "Joni Mitchell",
      album: "Blue",
      year: "1971",
      note: "Dylan told the novelist Ron Rosenbaum he wrote the opening song after a weekend listening to this record — a first-person, present-tense account of a love affair, which is the form he takes up here. The claim is second-hand and covers one song.",
    },
    {
      artist: "Leo Kottke",
      album: "Dreams and All That Stuff",
      year: "1974",
      note: "Berg and Peterson came to Dylan straight off this instrumental record, cut at the same Minneapolis studio. Odegard calls it the perfect introduction to these sessions because Kottke never played a song the same way twice.",
    },
  ],

  influenced: [],
});
