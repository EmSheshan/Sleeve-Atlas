import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "John Grant",
  album: "Queen Of Denmark",
  year: "2010",
  heading: "Queen Of Denmark — John Grant (2010)",

  albumLine:
    "Released 19 April 2010 on Bella Union, produced by Grant with bassist Paul Alexander and guitarist Eric Pulido of Midlake, and recorded at that band's studio in Denton, Texas. It's 1970s soft rock and orchestrated piano balladry, played without a trace of irony. His solo debut, arriving after years fronting the Denver band The Czars and four more away from music altogether.",

  overview: [
    "The Czars had broken up and Grant had simply stopped. He spent roughly four years out of music, and has since been blunt about why the band stalled — \"A lot of that had to do with me just wanting to drink and party all the time\" — and about the longer silence underneath it: when he had lived in Germany, \"I wasn't out yet to my family and was barely out to myself.\" Midlake, labelmates from Denton, admired The Czars, talked him back into working and offered him both their studio and themselves as a backing band.",

    "He took that on faith, giving up his New York apartment to move to a small Texas town \"to record a solo album that I didn't have any material for yet.\" It was built in two long stretches, July to October 2008 and May to July 2009, fitted around Midlake's own recording, and he does not romanticise it: \"making the record was also very painful.\" What he wanted was specific. \"I wanted that 70s sound, and Midlake would be able to help me reach that goal,\" he told The Quietus, and more precisely: \"I wanted it to sound like a Carpenters record,\" drawn to \"the velvety, soothing quality of Karen Carpenter's voice.\"",

    "That choice is the album's whole argument. Confessional writing in indie rock around 2010 tended to arrive oblique and half-buried in reverb; Grant does the reverse, setting plainly stated material about addiction, a strict religious upbringing and being gay inside the warmest, least embarrassed easy-listening arrangements he could get his hands on. The comedy in it is structural rather than defensive — he starts from \"pure emotion,\" he says, then adds humour on the grounds that \"too much subjectivity can be alienating for people.\"",

    "It was no hit, but the critical response was emphatic: Mojo gave it the magazine's rarely used \"Instant Classic\" tag in May and then named it the best album of 2010, and the Guardian's writers put it in their ten best of the year, while AllMusic was a conspicuous dissenter. It has since been certified silver in the UK and listed in 1001 Albums You Must Hear Before You Die, and singer Sinéad O'Connor covered one of its songs on her 2012 album How About I Be Me (And You Be You)?. It also restarted Grant's career outright; everything he has released since proceeds from it.",
  ],

  listeningNotes: [
    {
      label: "The baritone recorded close and dry",
      text: "Grant's voice sits right at the front with very little reverb on it, so he sounds like he's talking to you across a table rather than performing. The lowest notes are left unsweetened.",
    },
    {
      label: "Soft-rock orchestration played straight",
      text: "Violinist Fiona Brice and cellist Buffi Jacobs supply strings arranged the way a mid-seventies easy-listening record would have arranged them, with no distancing gesture to signal that it's a quotation.",
    },
    {
      label: "Keyboards where the guitars should be",
      text: "Grant carries most of the harmony himself on piano, electric keyboards and synthesizer, which is why a record made by a guitar band keeps sounding like a singer at a piano.",
    },
    {
      label: "Band pastiche dropped into a ballad record",
      text: "On \"Sigourney Weaver\" Midlake abruptly imitate Lynyrd Skynyrd's \"Free Bird\" — the one moment the backing band steps forward as itself, and it lands as a joke and a release at once.",
    },
    {
      label: "The swerve from devastation to a punchline",
      text: "Verses build genuine hurt and then break it with a wisecrack, often inside the same phrase. It's a deliberate method rather than nerves, and it's what keeps the album's bleakest material listenable.",
    },
  ],

  sources: [
    { title: "All About Survival: John Grant Talks To The Quietus", url: "https://thequietus.com/interviews/john-grant-interview-queen-of-denmark/" },
    { title: "Lost 10 of 2010 — #8: John Grant, Queen of Denmark — Drowned in Sound", url: "https://www.drownedinsound.org/archive-lost-10-of-2010-8-john-grant-queen-of-denmark-4141613/" },
    { title: "Queen of Denmark (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Queen_of_Denmark_(album)" },
  ],

  influencedBy: [
    { artist: "The Carpenters", album: "Close to You", year: "1970", note: "Grant's stated target — \"I wanted it to sound like a Carpenters record\" — and specifically singer Karen Carpenter's close-miked, unpushed lower register over cushioned orchestral arrangements." },
    { artist: "Midlake", album: "The Trials of Van Occupanther", year: "2006", note: "The band who play on and co-produced this album; Grant chose them because their seventies-leaning arrangements and warm analogue recording were already the sound he was after." },
    { artist: "ABBA", album: "Arrival", year: "1976", note: "Named by Grant as the music of a large part of his childhood: keyboard-led major-key melody and stacked vocal harmony treated as a legitimate vehicle for sadness." },
  ],

  influenced: [
    { artist: "Sinéad O'Connor", album: "How About I Be Me (And You Be You)?", year: "2012", note: "O'Connor covered a song from this record on that album, keeping Grant's melody and arrangement and singing his words largely unaltered." },
  ],
});
