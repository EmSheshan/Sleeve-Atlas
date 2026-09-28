import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Bill Evans Trio",
  album: "Sunday At The Village Vanguard",
  year: "1961",
  heading: "Sunday at the Village Vanguard — Bill Evans Trio (1961)",

  albumLine:
    "Released October 1961 on Riverside, produced by Orrin Keepnews from an afternoon and evening recorded at the Village Vanguard in New York on 25 June that year. Forty-two minutes of piano trio jazz — and the last time this group played together.",

  overview: [
    "The trio is Bill Evans on piano, Scott LaFaro on bass and Paul Motian on drums, and what makes it a landmark is a redistribution of labour. In the standard piano trio the bass keeps time and outlines the harmony while the pianist plays the music. Here all three improvise at once, constantly, with LaFaro playing countermelodies high on the instrument and Motian implying the pulse rather than stating it. Evans regarded it as the best group he ever had, and AllMusic's Thom Jurek puts the reason plainly: \"this trio is still widely regarded as his finest, largely because of the symbiotic interplay between its members.\"",

    "That interplay had taken eighteen months to build, and it ended eleven days after this recording. LaFaro was killed in a car crash in upstate New York on 6 July 1961, aged 25. Evans stopped playing for months and by most accounts never fully recovered from it. The album was assembled and subtitled to foreground LaFaro's playing, and it opens and closes with pieces he wrote.",

    "The context is worth stating because it explains the record's strange atmosphere. Jazz in 1961 was pulling towards the hard and the free — Coltrane and Ornette Coleman were remaking what a saxophone could do, and volume and intensity were the currency. Evans went the other way, into quiet, harmonic subtlety and near-classical touch, which is why he was for years patronised as the polite option. The playing here is anything but polite; it is simply happening at conversational volume.",

    "You can hear the room, including people in it who plainly have no idea what they are listening to — glasses, chatter, a cash register. None of it was cleaned up, and it gives the record an unrepeatable documentary quality: a Sunday afternoon in a basement where something permanent was being made by accident. The Penguin Guide to Jazz has given it a crown in all nine editions since 1992, and it is routinely named among the greatest live jazz albums ever recorded.",
  ],

  listeningNotes: [
    {
      label: "The bass playing melody",
      text: "LaFaro works in the upper register, answering and anticipating the piano rather than walking underneath it. It is the single most influential thing on the record.",
    },
    {
      label: "Time implied, not kept",
      text: "Motian plays brushes and cymbals around the pulse, often leaving the beat unstated. The trio holds together by listening rather than by being counted.",
    },
    {
      label: "Evans's touch",
      text: "He plays quietly, with rounded voicings that avoid the root, so chords sit ambiguous and unresolved. Much of it is closer to Ravel than to bebop.",
    },
    {
      label: "Three-way conversation",
      text: "All three improvise simultaneously for long stretches, trading the lead without announcing it. Nobody is accompanying anybody.",
    },
    {
      label: "The audience left in",
      text: "Cutlery, talking and a register ring through the quiet passages. It was recorded as it happened and not tidied afterwards.",
    },
  ],

  sources: [
    { title: "Sunday at the Village Vanguard — Wikipedia", url: "https://en.wikipedia.org/wiki/Sunday_at_the_Village_Vanguard" },
    { title: "Scott LaFaro — Wikipedia", url: "https://en.wikipedia.org/wiki/Scott_LaFaro" },
    { title: "Bill Evans — Wikipedia", url: "https://en.wikipedia.org/wiki/Bill_Evans" },
  ],

  influencedBy: [
    { artist: "Miles Davis", album: "Kind Of Blue", year: "1959", note: "Evans played on it and shaped its modal harmony; the spaciousness he brought there is the starting point for this trio." },
    { artist: "Ahmad Jamal", album: "Chamber Music of the New Jazz", year: "1955", note: "The precedent for a piano trio built on restraint, space and interplay rather than on soloing over accompaniment." },
  ],

  influenced: [
    { artist: "Keith Jarrett", album: "The Köln Concert", year: "1975", note: "The lyrical, harmonically rich, quietly played piano that Evans made a serious option." },
    { artist: "Talk Talk", album: "The Colour Of Spring", year: "1986", note: "The idea that an ensemble can be built from listening and silence rather than arrangement runs from records like this into what became post-rock." },
  ],
});
