import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Hugh Masekela",
  album: "Home Is Where The Music Is",
  year: "1972",
  heading: "Home Is Where the Music Is — Hugh Masekela (1972)",

  albumLine:
    "Recorded on 15 January 1972 at Island Studios in London and released that year on Chisa and Blue Thumb, produced by Stewart Levine and Caiphus Semenya. A double album of South African jazz — Masekela on flugelhorn with Dudu Pukwana on alto saxophone — made twelve years into exile.",

  overview: [
    "He had left South Africa in 1960, shortly after the Sharpeville massacre, on the encouragement of musicians abroad and with a trumpet reportedly arranged through Louis Armstrong. Apartheid made a career impossible at home for a Black musician who would not accept its terms; the title is the only kind of answer available to that, and it is not a consoling one.",

    "By the late sixties he had become commercially successful in America in a way that increasingly did not interest him — he had a No. 1 pop hit in 1968 — and this record is the turn away from that. Where the earlier albums leaned on covers and pop-jazz arrangements, this one is largely his own compositions, built on mbaqanga and marabi forms from home rather than on American song structure.",

    "The band makes the argument concrete. Dudu Pukwana, an alto saxophonist who had left South Africa with the Blue Notes and settled in London, plays with the harder township attack; Makhaya Ntshoko, another South African exile, drums; Larry Willis on keys and Eddie Gomez on bass come from the American jazz world. It is an exile's band assembled in a third country, which is exactly what it sounds like.",

    "AllMusic's Thom Jurek calls it \"a stone spiritual soul-jazz classic,\" and the ratings sit high across the board — 4.5 stars from AllMusic, five from Channel 24. Its standing rests on being the record where Masekela stopped translating himself for an American audience. He returned to South Africa only in the 1990s, after apartheid ended, having spent thirty years making music about a place he could not go.",
  ],

  listeningNotes: [
    {
      label: "Flugelhorn rather than trumpet",
      text: "Masekela favours the rounder, darker-toned horn, which is why his lines sing rather than cut even at full volume.",
    },
    {
      label: "Township rhythm under jazz playing",
      text: "The grooves come from mbaqanga and marabi — cyclical, dance-derived, endlessly repeating — with American jazz soloing on top.",
    },
    {
      label: "Two horns in dialogue",
      text: "Masekela and Pukwana answer each other across long passages, one warm and one deliberately raw, the contrast standing in for a conversation.",
    },
    {
      label: "Long tracks, live takes",
      text: "Pieces run well past normal album length and were cut in a single day, so the improvisation is genuinely collective rather than assembled.",
    },
    {
      label: "Singing in Xhosa and Zulu",
      text: "Vocals appear in South African languages, unglossed and untranslated, with no attempt to meet an English-speaking listener halfway. He is addressing the audience he was cut off from rather than the one in front of him.",
    },
  ],

  sources: [
    { title: "Home Is Where the Music Is — Wikipedia", url: "https://en.wikipedia.org/wiki/Home_Is_Where_the_Music_Is" },
    { title: "Hugh Masekela — Wikipedia", url: "https://en.wikipedia.org/wiki/Hugh_Masekela" },
    { title: "Dudu Pukwana — Wikipedia", url: "https://en.wikipedia.org/wiki/Dudu_Pukwana" },
  ],

  influencedBy: [
    { artist: "Miles Davis", album: "Kind Of Blue", year: "1959", note: "The modal approach — few chords, long improvisations — that lets township cycles carry extended jazz soloing." },
    { artist: "John Coltrane", album: "A Love Supreme", year: "1965", note: "The spiritual-jazz frame, where a long-form piece is a statement of belief rather than a set of solos." },
  ],

  influenced: [
    { artist: "Fela Kuti", album: "Zombie", year: "1977", note: "Part of the same current of African musicians turning Western jazz training back onto local rhythmic forms." },
    { artist: "Paul Simon", album: "Graceland", year: "1986", note: "Masekela toured it and helped bring South African musicians to a global audience; the mbaqanga vocabulary is shared." },
  ],
});
