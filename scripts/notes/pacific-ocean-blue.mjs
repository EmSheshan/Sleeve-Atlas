import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Dennis Wilson",
  album: "Pacific Ocean Blue",
  year: "1977",
  heading: "Pacific Ocean Blue — Dennis Wilson (1977)",

  albumLine:
    "Released 22 August 1977 on Caribou, co-produced by Wilson with Gregg Jakobson and recorded at Brother Studios in Santa Monica between autumn 1976 and spring 1977. Orchestral, gospel-inflected rock with a ruined voice at the centre — the only solo album he finished.",

  overview: [
    "He was the Beach Boys' drummer and, for most of their career, the least regarded songwriter in the group. He was also the only one who actually surfed, and the one whose life most closely resembled the mythology the band sold. By 1977 that life had done visible damage: his singing here is cracked and hoarse, a long way from the voice on the sixties records, and the album is better for it.",

    "The sound is nothing like a Beach Boys record. Where his brother Brian Wilson built from close harmony and pop structure, Dennis writes in slow, churning blocks — piano, Moog, layered choirs, orchestral swells, sudden dropouts — closer to gospel and to soul balladry than to California pop. It is sincere to the point of discomfort, with none of the craft-as-defence that ran through the family business.",

    "Its commercial failure is straightforward to explain. It came out in August 1977 into a market of punk on one side and disco on the other, from a drummer whose band had become a nostalgia act, with no single anyone could place. It stalled at No. 96 and lasted twelve weeks; the label pulled support for a planned West Coast tour and the reviews were mixed.",

    "The reassessment took decades and was driven largely by musicians rather than critics — the record circulated for years as an expensive out-of-print rumour before a 2008 reissue added unreleased material from the unfinished follow-up. Wilson drowned in December 1983, aged 39, with that second album still incomplete. What survives is now routinely described as the best record anyone in the Beach Boys made outside the band, which is a claim that would have astonished everyone involved in 1977.",
  ],

  listeningNotes: [
    {
      label: "A wrecked voice",
      text: "Hoarse, grainy and short of breath, with cracks left in. It carries the record precisely because it can no longer do what it used to.",
    },
    {
      label: "Massed choirs",
      text: "Gospel-style stacked vocals swell up behind him and then vanish, used for weight rather than for harmony in the Beach Boys sense.",
    },
    {
      label: "Moog and piano as the foundation",
      text: "Synthesizer pads under acoustic piano carry most arrangements, with guitars far back — almost the inverse of a seventies rock record.",
    },
    {
      label: "Songs that lurch between sections",
      text: "Pieces change tempo and key abruptly rather than developing, closer to suites than to verse-chorus writing.",
    },
    {
      label: "The ocean in the mix",
      text: "Water and wind recordings appear between and under tracks, which on an album by the one Beach Boy who actually surfed reads as autobiography rather than decoration.",
    },
  ],

  sources: [
    { title: "Pacific Ocean Blue — Wikipedia", url: "https://en.wikipedia.org/wiki/Pacific_Ocean_Blue" },
    { title: "Dennis Wilson — Wikipedia", url: "https://en.wikipedia.org/wiki/Dennis_Wilson" },
    { title: "The Beach Boys — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Beach_Boys" },
  ],

  influencedBy: [
    { artist: "The Beach Boys", album: "Pet Sounds", year: "1966", note: "His brother's record, and the source of the layered-choir and studio-as-instrument approach he takes somewhere much rougher." },
    { artist: "Van Morrison", album: "Astral Weeks", year: "1968", note: "The precedent for loose, gospel- and soul-informed songwriting that abandons pop structure entirely." },
  ],

  influenced: [
    { artist: "Fleet Foxes", album: "Fleet Foxes", year: "2008", note: "Reissued the same year and much cited since; the massed-choir-and-piano register is a direct inheritance." },
    { artist: "Ariel Pink", album: "Before Today", year: "2010", note: "The cult of damaged, sincere Californian pop made by a wrecked voice runs through this record." },
  ],
});
