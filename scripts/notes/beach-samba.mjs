import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Astrud Gilberto",
  album: "Beach Samba",
  year: "1967",
  heading: "Beach Samba — Astrud Gilberto (1967)",

  albumLine:
    "Released in 1967 on Verve, produced by Creed Taylor and recorded in New York between 27 May and 30 June that year, with arrangements by Eumir Deodato and Don Sebesky. It's bossa nova drifting into American orchestral pop — one of a run of records Gilberto made quickly for Verve in the mid-sixties.",

  overview: [
    "Astrud Gilberto's career began by accident. She was not a professional singer but the wife of guitarist João Gilberto when, in 1963, she was asked to sing the English verses on a track being recorded by her husband and the saxophonist Stan Getz. That song made her internationally famous and set the terms for everything after: a light, untrained, almost conversational voice, used as a kind of cool counterweight to lush arrangements.",

    "By 1967 Verve had a formula for her and was working it hard. The context matters — bossa nova had arrived in the United States five years earlier and been absorbed fast, turning from a Brazilian musical movement into an American mood, useful for soundtracks, cocktail hours and easy-listening radio. This album sits inside that absorption rather than resisting it. Alongside Brazilian material are American pop songs of the day, given Deodato and Sebesky's orchestral treatment.",

    "The playing is far better than the record's easy surface suggests. Ron Carter, one of the great jazz bassists, is on it; so is Grady Tate on drums and the Belgian harmonica player and guitarist Toots Thielemans, with the Brazilian songwriter Marcos Valle also contributing. There's a domestic oddity too: Gilberto's young son Marcelo sings with her on one track, a duet that is either charming or cloying depending entirely on your tolerance.",

    "Critical opinion has always been divided, and it's worth not smoothing that over. AllMusic's Richie Unterberger rated it three stars and called it one of her less impressive Verve outings, blaming the pop-leaning song selection — while singling out the closing track for \"confident, sassy scats, as she rarely did before or since.\" Others have argued the opposite, that this is among her most consistent records precisely because of how it straddles Brazilian bossa and American sunshine pop. Its inclusion in the 1001 Albums list reflects the second view.",
  ],

  listeningNotes: [
    {
      label: "A voice that doesn't push",
      text: "Gilberto sings almost without vibrato or projection, close to speaking. She was never trained, and the flatness is the point — it sits cool against arrangements that are anything but.",
    },
    {
      label: "Orchestra over samba rhythm",
      text: "Deodato and Sebesky layer strings and horns on top of a light Brazilian pulse rather than replacing it, so the percussion stays soft and busy underneath all the sweetening.",
    },
    {
      label: "Wordless singing as melody",
      text: "On several tracks, including the title piece, she sings syllables rather than lyrics, using the voice as another instrument in the arrangement.",
    },
    {
      label: "Toots Thielemans's harmonica",
      text: "The chromatic harmonica winding through several arrangements is Thielemans, and it's the most distinctive solo colour here — a jazz instrument giving the record its slightly melancholy edge.",
    },
    {
      label: "A child's vocal",
      text: "Her son Marcelo joins her on one of the American pop covers. It's a genuine oddity in a professionally made easy-listening record, and it divides listeners sharply.",
    },
    {
      label: "Scat at the very end",
      text: "The closing track is the one moment she cuts loose, improvising with a looseness she rarely showed elsewhere. If the rest feels too smooth, that's where the record answers back.",
    },
  ],

  sources: [
    { title: "Beach Samba — Wikipedia", url: "https://en.wikipedia.org/wiki/Beach_Samba" },
    { title: "Beach Samba — AllMusic", url: "https://www.allmusic.com/album/beach-samba-mw0000620675" },
    { title: "Astrud Gilberto discography — Wikipedia", url: "https://en.wikipedia.org/wiki/Astrud_Gilberto_discography" },
  ],

  influencedBy: [
    { artist: "Stan Getz", album: "Getz/Gilberto", year: "1964", note: "The record that made Gilberto famous and established the cool, unadorned vocal approach she works with here." },
    { artist: "João Gilberto", album: "Chega de Saudade", year: "1959", note: "The foundational bossa nova album, by her then-husband; the rhythmic language this record softens for American listeners." },
  ],

  influenced: [
    { artist: "Stereolab", album: "Emperor Tomato Ketchup", year: "1996", note: "Part of the easy-listening and bossa revival that later indie groups mined for its cool, detached female vocals over lush arrangements." },
  ],
});
