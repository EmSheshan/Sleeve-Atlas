import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Charles Mingus",
  album: "The Black Saint And The Sinner Lady",
  year: "1963",
  heading: "The Black Saint And The Sinner Lady — Charles Mingus (1963)",

  albumLine:
    "Recorded in a single day, 20 January 1963, at Atlantic Studios in New York and released that July on Impulse!, produced by Bob Thiele with Bob Hammer co-orchestrating. It's one continuous composition in six movements, written partly as a ballet — avant-garde big band pulling in classical, Spanish and blues material. Usually named alongside Mingus Ah Um as his masterpiece.",

  overview: [
    "It came directly out of a humiliation. Mingus's October 1962 Town Hall concert had been rescheduled onto an impossible deadline, under-rehearsed and badly balanced; the audience walked out and asked for refunds, and critics took the music apart. Thiele was in the hall that night and signed him to Impulse! anyway — Mingus's liner notes thank him for hiring the band \"when the critics scared the pants off the people.\" He then rebuilt the material on stage during a Village Vanguard residency, night after night; sources put that run at three weeks or six.",

    "Mingus hated the word applied to his work. He associated \"jazz\" with \"discrimination, second-class citizenship, the whole back-of-the-bus bit,\" so Impulse! marketed the record using his own phrase instead: ethnic folk-dance music. The dance part was literal — \"I wrote the music for dancing and listening\" — though the ballet was never staged in his lifetime. The sixth movement's subtitle ends \"'til It's Freedom Day,\" and Mingus said the record's Iberian passages were meant to mirror the Spanish Inquisition and El Greco's \"mood of oppressive poverty and death.\" The record is about his own position rather than any single headline: biographer Janet Coleman described his difficulty fitting into either black or white American society as \"like putting a circus into a bathtub.\" Mingus also talked his psychotherapist, Edmund Pollock, into writing a second set of liner notes — the same Pollock fetched at the Town Hall interval to calm him down.",

    "Unlike the concert, the record was praised almost without dissent, and its standing has only hardened. Critic Steve Huey calls it \"one of the greatest achievements in orchestration by any composer in jazz history\"; the Penguin Guide to Jazz gave it a Crown. Part of what makes it strange is scale: Mingus cut the standard eighteen-piece big band to around nine and wrote for them densely enough that it still sounds larger than it is.",
  ],

  listeningNotes: [
    {
      label: "An alto part that wasn't written",
      text: "Alto saxophonist Charlie Mariano was brought back a week after the session and overdubbed over the finished ensemble. There was no alto in the score; Mingus simply conducted him by hand. Mariano later described the instruction: \"when I point to you, start playing and, when I wave at you, stop.\"",
    },
    {
      label: "Roughly fifty tape splices",
      text: "The piece you hear was assembled with a razor blade. Thiele recalled \"literally 50 splices to be made after the date – all in Charlie's head,\" executed by engineer Bob Simpson to Mingus's instructions. This is studio construction years before rock took it up.",
    },
    {
      label: "Nylon-string guitar against the horns",
      text: "Classical guitarist Jay Berliner plays Spanish flourishes that cut straight across the brass, most startlingly in the second half. The Iberian colour was deliberate, and no popular jazz record of the period sounds like it.",
    },
    {
      label: "A big band pared to nine",
      text: "Low instruments — bass trombone, tuba, bass, the bottom of the piano — are voiced close and dissonant, which is where the dirge weight comes from. Mingus took Duke Ellington's practice of writing for individual players' personalities rather than for sections.",
    },
    {
      label: "Unaccompanied piano interludes",
      text: "The movements are hinged together by bare piano passages; Mingus is credited on piano as well as bass alongside pianist Jaki Byard. Saxophonist Greg Ward, who later staged the work with dancers, believes most of one interlude is improvised.",
    },
    {
      label: "Collapses, not transitions",
      text: "Collective horn squall gives way to sudden quiet with no easing between, and drummer Dannie Richmond follows the mood rather than holding a steady floor. The abruptness is the composition, not a failed edit.",
    },
  ],

  sources: [
    { title: "'The Black Saint And The Sinner Lady': A Charles Mingus Masterpiece — uDiscover Music", url: "https://www.udiscovermusic.com/stories/charles-mingus-the-black-saint-and-the-sinner-lady-feature/" },
    { title: "Charles Mingus: The Black Saint and the Sinner Lady — Treble (Treble 100)", url: "https://www.treblezine.com/treble-100-no-37-charles-mingus-the-black-saint-and-the-sinner-lady/" },
    { title: "Charles Mingus's Black Saint and the Sinner Lady — Sound American (Greg Ward interview)", url: "https://www.soundamerican.org/issues/big-band/charles-minguss-black-saint-and-sinner-lady" },
    { title: "The Black Saint and the Sinner Lady — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Black_Saint_and_the_Sinner_Lady" },
  ],

  influencedBy: [
    { artist: "Duke Ellington", album: "Black, Brown and Beige", year: "1958", note: "The precedent for an extended multi-movement jazz suite, and the source of Mingus's method of scoring for particular players' personalities rather than for uniform sections." },
  ],

  influenced: [],
});
