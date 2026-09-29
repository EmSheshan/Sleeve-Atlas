import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Stan Getz",
  album: "Getz/Gilberto",
  year: "1964",
  heading: "Getz/Gilberto — Stan Getz and João Gilberto (1964)",

  albumLine:
    "Recorded 18 and 19 March 1963 at A&R Recording in New York, produced by Creed Taylor and released on Verve in March 1964. Stan Getz on tenor saxophone with João Gilberto on guitar and voice and Antônio Carlos Jobim on piano — the record that took bossa nova worldwide.",

  overview: [
    "Bossa nova was already a decade old in Brazil, built by Gilberto and Jobim out of samba slowed down, stripped of percussion and rewritten with jazz harmony. What it lacked was a route into the American market. Getz had the softest tone of any tenor player of his generation and no interest in playing loud, which made him the one American saxophonist the music could accommodate without being flattened by him.",

    "The album's famous accident is Astrud Gilberto. She was João's wife, present at the session and had never sung professionally; she was brought in to deliver the English lyric on one song because she was the only person in the room who spoke it. Her singing is flat, small and entirely untrained, and that is precisely why it works — set against Getz's saxophone and her husband's Portuguese, the effect is of overhearing rather than being performed at.",

    "The scale of what followed is hard to overstate. The single won Record of the Year at the 1965 Grammys; the album won three, including Album of the Year — the first non-American record ever to take it. It sold over a million copies at a time when a jazz album selling fifty thousand was a success, and it launched a bossa craze that within two years had produced a great deal of very thin imitation.",

    "The imitation has slightly damaged the original. Because the style was so quickly absorbed into lounge and lift music, the record now has to be heard past decades of pastiche. Underneath that, the ratings hold: five stars from AllMusic and the Penguin Guide to Jazz, 9.6 from Pitchfork, induction into the Latin Grammy Hall of Fame in 2001. The playing is unhurried rather than easy, and the harmony is considerably stranger than its reputation for pleasantness suggests.",
  ],

  listeningNotes: [
    {
      label: "Getz's tone",
      text: "Warm, breathy and almost vibrato-free, played quietly enough that the guitar is never buried. He is the loudest instrument and still the gentlest.",
    },
    {
      label: "João Gilberto's guitar",
      text: "A syncopated chordal pattern that displaces the beat continuously — samba's rhythm reduced to one instrument and played very softly.",
    },
    {
      label: "Two languages in one song",
      text: "Portuguese and English verses sit side by side, often on the same track, without either being the translation of the other.",
    },
    {
      label: "An untrained voice",
      text: "Astrud Gilberto sings almost without inflection or vibrato, close to speech and slightly under the note. It is the opposite of the era's professional singing and is why it carried.",
    },
    {
      label: "Jobim's harmony",
      text: "The chords move in unexpected directions with frequent unresolved sevenths and ninths — jazz harmony under a rhythm that never raises its voice.",
    },
  ],

  sources: [
    { title: "Getz/Gilberto — Wikipedia", url: "https://en.wikipedia.org/wiki/Getz/Gilberto" },
    { title: "The Girl from Ipanema — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Girl_from_Ipanema" },
    { title: "Bossa nova — Wikipedia", url: "https://en.wikipedia.org/wiki/Bossa_nova" },
  ],

  influencedBy: [
    { artist: "João Gilberto", album: "Chega de Saudade", year: "1959", note: "The record that invented the style: samba rhythm reduced to a single softly played guitar." },
    { artist: "Miles Davis", album: "Kind Of Blue", year: "1959", note: "The precedent for jazz played quietly, with space left in, that made a record like this possible in America." },
  ],

  influenced: [
    { artist: "Astrud Gilberto", album: "Beach Samba", year: "1967", note: "Her own career began with this session, and the untrained, unhurried delivery is carried straight into it." },
    { artist: "Antônio Carlos Jobim", album: "Wave", year: "1967", note: "The commercial breakthrough here gave Jobim an international platform for his own records." },
    { artist: "Stereolab", album: "Emperor Tomato Ketchup", year: "1996", note: "Cool detached vocals over lush chord movement — the bossa palette reclaimed by indie groups decades later." },
  ],
});
