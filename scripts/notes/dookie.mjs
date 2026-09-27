import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Green Day",
  album: "Dookie",
  year: "1994",
  heading: "Dookie — Green Day (1994)",

  albumLine:
    "Released 1 February 1994 on Reprise and produced by Rob Cavallo with the band. It's pop-punk — fast, major-key, hook-first — and it's Green Day's third album but their first for a major label, the one that sold over twenty million copies.",

  overview: [
    "Green Day came out of 924 Gilman Street, the volunteer-run all-ages club in Berkeley that anchored a Bay Area punk scene with firm ideas about independence. They had made two albums for the local label Lookout! Records. When they signed to Reprise in April 1993, the reaction from that scene was severe: the fanzine Maximumrocknroll led sellout accusations, and Gilman banned them after a September 1993 show. Billie Joe Armstrong, the singer and guitarist, later described the position simply — \"The only thing I could do was get on my bike and go forward.\"",

    "The record was made quickly that autumn, at Fantasy Studios in Berkeley and Music Grinder in Hollywood. The band picked Cavallo on the strength of his work with the Muffs; Armstrong said he \"was the only person we could really talk to and connect with.\" Speed runs through the whole process — Armstrong reportedly cut vocals for sixteen or seventeen songs in two days, mostly in single takes — and it shows in a record that never sounds laboured over.",

    "What Cavallo did was make punk sound enormous without slowing it down. Armstrong tracked almost everything on one Fernandes Stratocaster through a 100-watt Marshall, and the guitars are thick, clean-edged and heavily palm-muted rather than scrappy. Underneath, Mike Dirnt's bass is melodic and high in the mix and Tré Cool drums with a precision that most punk records of the era neither had nor wanted. The songs themselves are about boredom, anxiety and doing nothing in particular — small subjects, delivered with enormous force.",

    "It arrived alongside the Offspring's Smash, and the two of them together pushed punk back into the American mainstream for the first time since the seventies. Four singles went to radio and MTV, it reached No. 2 on the Billboard 200 and No. 1 across several other countries, and it won Best Alternative Album at the 1995 Grammys. Contemporary reviews were positive — the New York Times called it \"punk turns into pop in fast, funny, catchy, high-powered songs\" — and its standing has only risen; the Library of Congress added it to the National Recording Registry in 2024. Nearly every pop-punk band of the following decade works from this template.",
  ],

  listeningNotes: [
    {
      label: "Palm-muted chug into open chords",
      text: "Verses are played with the picking hand damping the strings, then the hand lifts for the chorus and the guitar opens up. That one move creates the lift in almost every song here.",
    },
    {
      label: "One guitar, one amp, huge sound",
      text: "Armstrong recorded nearly the whole album on a single Stratocaster through one Marshall, layered rather than varied. It's why the guitar tone is completely consistent from track to track — there's really only one of them.",
    },
    {
      label: "Bass as a second melody",
      text: "Dirnt's bass is mixed unusually loud and plays running melodic lines instead of following the root notes. On several tracks it's the most tuneful thing in the arrangement.",
    },
    {
      label: "Drumming far tighter than punk convention",
      text: "Tré Cool plays fast but exactly, with fills that land cleanly. The precision is a big part of why the record translated to radio where scruffier punk didn't.",
    },
    {
      label: "Vocals in one take",
      text: "The lead vocals were cut at extraordinary speed, largely in single passes, which leaves the cracks and strain in. The performance sounds offhand because it very nearly was.",
    },
    {
      label: "A hidden track after the silence",
      text: "The record doesn't end where it appears to — the closing track is followed by a long gap and then a short, throwaway extra, a CD-era joke that rewards leaving it running.",
    },
  ],

  sources: [
    { title: "Dookie — Wikipedia", url: "https://en.wikipedia.org/wiki/Dookie" },
    { title: "Green Day — Wikipedia", url: "https://en.wikipedia.org/wiki/Green_Day" },
    { title: "924 Gilman Street — Wikipedia", url: "https://en.wikipedia.org/wiki/924_Gilman_Street" },
  ],

  influencedBy: [
    { artist: "Ramones", album: "Ramones", year: "1976", note: "The original template: short, fast, major-key punk songs built on barre chords and hooks." },
    { artist: "The Replacements", album: "Let It Be", year: "1984", note: "American punk turning toward melody and self-deprecating songwriting about ordinary listlessness." },
    { artist: "Operation Ivy", album: "Energy", year: "1989", note: "The defining band of the same 924 Gilman Street scene Green Day emerged from and were later expelled by." },
  ],

  influenced: [
    { artist: "Blink-182", album: "Enema of the State", year: "1999", note: "The most direct inheritor — the same palm-muted pop-punk formula taken further toward radio." },
    { artist: "Sum 41", album: "All Killer No Filler", year: "2001", note: "Part of the wave of major-label pop-punk that followed this album's commercial proof of concept." },
    { artist: "Fall Out Boy", album: "From Under the Cork Tree", year: "2005", note: "Named among the artists this record influenced; pop-punk's next generation builds from its songwriting model." },
  ],
});
