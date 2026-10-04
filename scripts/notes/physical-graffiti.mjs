import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Led Zeppelin",
  album: "Physical Graffiti",
  year: "1975",
  heading: "Physical Graffiti — Led Zeppelin (1975)",

  albumLine:
    "Released 24 February 1975 on their own Swan Song label, produced by Jimmy Page, with new material cut at Headley Grange in Hampshire in early 1974 alongside seven unreleased tracks from earlier sessions. A double album — their sixth, and by their own account their peak.",

  overview: [
    "The format was an accident that turned into a statement. The eight new songs ran to nearly three LP sides, which left them with the choice of cutting material or going double; they went double and filled the gap with seven tracks left over from the sessions for the three previous albums. That is why the record spans several distinct periods of the band at once, and why its stylistic range is so much wider than a single album's would have been.",

    "Headley Grange matters to how it sounds. It was a damp Victorian poorhouse in Hampshire rather than a studio, recorded with the Rolling Stones' mobile unit, and the band used its rooms and stairwells as part of the instrument — John Bonham's drums in particular are recorded as a room rather than a kit. Robert Plant called the new songs \"the belters,\" describing them as \"off-the-wall stuff that turned out really nice.\"",

    "It arrived at a moment when Led Zeppelin were the biggest band in the world and critically still not quite respectable — the press had spent five years treating them as loutish and derivative. The breadth here made that harder to sustain: a Billboard reviewer described it as \"a tour de force through a number of musical styles, from straight rock to blues to folky acoustic to orchestral sounds,\" which is an accurate list and includes a piece built on North African modal scales and Egyptian-influenced orchestration.",

    "Peter Corriston and Mike Doud's die-cut sleeve — a New York tenement at 96 and 98 St Mark's Place, with windows revealing interchangeable images behind — was complicated enough to manufacture that it delayed release from November 1974 to February 1975, forcing the band to tour before the record existed. It went to No. 1 in Britain and eventually in America, became the first album to go platinum on advance orders alone, and is now certified sixteen times platinum. Page called it a high-water mark; Plant said it was the band at their creative peak.",
  ],

  listeningNotes: [
    {
      label: "Bonham recorded as a room",
      text: "Drums captured with distant microphones in a stone stairwell, so the space around the kit is as loud as the kit. It is the most sampled drum sound in music for a reason.",
    },
    {
      label: "Riffs in strange metres",
      text: "Several tracks sit on figures that don't divide into four, so they lurch rather than swing. The band make it feel natural, which is the hard part.",
    },
    {
      label: "Acoustic and orchestral stretches",
      text: "Folk guitar, mandolin, strings and Eastern modal scales appear at full length rather than as interludes — the double format gave them room.",
    },
    {
      label: "Page's layered guitars",
      text: "Multiple tracked parts in different tunings and tones stack into one broad mass, with the individual layers still separable on headphones.",
    },
    {
      label: "Songs from four different years",
      text: "The older tracks were recorded in other rooms with other equipment, so the album's sound shifts audibly between them. It reads as range rather than as patchwork.",
    },
    {
      label: "John Paul Jones's keyboards",
      text: "Clavinet, mellotron and piano carry as much of the arrangement as the guitar does, which is what stops a double album of riffs becoming monotonous.",
    },
  ],

  sources: [
    { title: "Physical Graffiti — Wikipedia", url: "https://en.wikipedia.org/wiki/Physical_Graffiti" },
    { title: "Headley Grange — Wikipedia", url: "https://en.wikipedia.org/wiki/Headley_Grange" },
    { title: "Swan Song Records — Wikipedia", url: "https://en.wikipedia.org/wiki/Swan_Song_Records" },
  ],

  influencedBy: [
    { artist: "Led Zeppelin", album: "Led Zeppelin III", year: "1970", note: "Their own turn towards folk and acoustic writing, which this album expands into a full side." },
    { artist: "Muddy Waters", album: "The Best of Muddy Waters", year: "1958", note: "The Chicago blues repertoire the band had been rebuilding at volume since their first record." },
    { artist: "Beatles", album: "The White Album", year: "1968", note: "The precedent for a double album as a deliberate display of range rather than an overflow." },
  ],

  influenced: [
    { artist: "Beastie Boys", album: "Licensed to Ill", year: "1986", note: "Bonham's Headley Grange drum sound became foundational sampling material for hip-hop." },
    { artist: "Soundgarden", album: "Superunknown", year: "1994", note: "Heavy rock in odd metres with acoustic and modal detours — a direct inheritance." },
  ],
});
