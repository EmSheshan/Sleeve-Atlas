import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Stan Getz",
  album: "Jazz Samba",
  year: "1962",
  heading: "Jazz Samba — Stan Getz (1962)",

  albumLine:
    "Released 20 April 1962 on Verve, produced by Creed Taylor and cut in a single afternoon at Pierce Hall in All Souls Unitarian Church, Washington DC. The first full bossa nova album made by American jazz musicians, and the record that turned a Brazilian style into an American craze.",

  overview: [
    "Guitarist Charlie Byrd heard bossa nova on a tour of Brazil in 1961 and came home with records. The style was only a few years old: samba slowed down and quietened, the rhythm displaced off the drums and onto the guitar, harmony borrowed from jazz, singing kept almost conversational. Byrd thought American jazz musicians could play it, and took the idea to tenor saxophonist Stan Getz and producer Creed Taylor.",

    "The session was quick to the point of being casual. On 13 February 1962 the band set up in and around the church pulpit with a two-track portable Ampex running, while Taylor monitored from a small mobile studio parked outside. By Taylor's account the whole thing took barely three hours — in around one o'clock, out by half past five. There was no multitracking and no fixing afterwards; what survives is a room with six men playing in it.",

    "Taylor named the album Jazz Samba because, as he told it, he thought many Americans couldn't pronounce \"bossa nova,\" and said Verve's marketing people nearly talked him into dropping the word jazz as well. The caution was misplaced. It sold half a million copies inside eighteen months, spent seventy weeks on the charts, and remains the only jazz album ever to reach No. 1 on the Billboard pop chart. Getz took the 1963 Grammy for Best Jazz Performance for the single pulled from it.",

    "The success is also the complicated part. The compositions are largely by Brazilian writers — Antônio Carlos Jobim chief among them — but not one Brazilian musician plays on the record. An American band introduced a Brazilian style to the American market and was rewarded for it, and the bossa nova boom that followed ran on those terms for years before the people who invented it were widely heard on their own records.",
  ],

  listeningNotes: [
    {
      label: "A tenor tone kept deliberately plain",
      text: "Getz plays with almost no vibrato and very little weight, close to the sound of someone talking. It leaves the rhythm underneath completely exposed.",
    },
    {
      label: "The rhythm carried on the guitar",
      text: "Bossa nova's defining pattern puts the pulse in the guitar's thumb and fingers rather than the drum kit. Byrd plays it on nylon strings throughout, and it is what makes the record sound Brazilian rather than Latin-American-generally.",
    },
    {
      label: "Two guitars doing different jobs",
      text: "Charlie Byrd takes the lead and the rhythmic pattern; his brother Gene Byrd plays rhythm guitar and bass, so the low end is often guitar rather than upright.",
    },
    {
      label: "Brushes instead of sticks",
      text: "Buddy Deppenschmidt and Bill Reichenbach Sr. keep the drumming to a whisper, marking the samba feel without ever taking the beat back from the guitar.",
    },
    {
      label: "A church, not a studio",
      text: "Recorded live to two tracks in a hall with its own long decay. The space around the instruments is the room itself, since there was no way to add it later.",
    },
  ],

  sources: [
    { title: "Jazz Samba — Wikipedia", url: "https://en.wikipedia.org/wiki/Jazz_Samba" },
    { title: "Jazz Samba: A Masterpiece Recorded in Three Hours — Everything Jazz", url: "https://www.everythingjazz.com/story/jazz-samba-a-masterpiece-recorded-in-three-hours/" },
    { title: "Stan Getz, Charlie Byrd: Jazz Samba — AllMusic", url: "https://www.allmusic.com/album/jazz-samba-mw0000594010" },
    { title: "Charlie Byrd — Wikipedia", url: "https://en.wikipedia.org/wiki/Charlie_Byrd" },
  ],

  influencedBy: [
    { artist: "João Gilberto", album: "Chega de Saudade", year: "1959", note: "The record that fixed bossa nova's guitar pattern and its unforced delivery; Byrd encountered the style in Brazil and built this album's guitar parts on that pattern." },
    { artist: "Stan Getz", album: "Focus", year: "1961", note: "Getz's own record from the year before, where he had already pared his tone down to the soft, near-vibratoless sound he brings to this one." },
  ],

  influenced: [
    { artist: "Antônio Carlos Jobim", album: "The Composer of Desafinado, Plays", year: "1963", note: "Verve signed Jobim as a leader on the back of this album's success and put Creed Taylor in the producer's chair for it." },
    { artist: "Stan Getz", album: "Getz/Gilberto", year: "1964", note: "The direct sequel — same saxophonist, same producer, same label, but with Brazilian musicians playing this time." },
  ],
});
