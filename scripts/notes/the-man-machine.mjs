import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Kraftwerk",
  album: "The Man Machine",
  year: "1978",
  heading: "The Man-Machine — Kraftwerk (1978)",

  albumLine:
    "Released 28 April 1978, produced by Ralf Hütter and Florian Schneider at their own Kling Klang studio in Düsseldorf. It's electronic pop stripped to melody and pulse — Kraftwerk's seventh album and their most song-shaped.",

  overview: [
    "Kraftwerk had spent the seventies moving from experimental electronics toward something recognisably like pop, and this is where they arrive. The pieces are short, tuneful and sung; the arrangements are clean to the point of severity. Hütter and Schneider handled synthesizers and vocoders, with Karl Bartos and Wolfgang Flür on electronic percussion — a four-piece playing machines as a band.",

    "The thinking behind it is as much visual and political as musical. The sleeve, designed by Karl Klefisch, credits its inspiration to El Lissitzky, the Russian Suprematist, and adapts imagery from his children's book about two squares; the red-and-black palette and diagonal type are straight out of 1920s Soviet constructivism. That reference is deliberate. Kraftwerk were German musicians of the post-war generation, working in a country whose recent past made most nationalist imagery unusable, and they consistently reached instead for an older European modernism — the machine age, the Bauhaus, the avant-garde that fascism had interrupted.",

    "The band's public persona followed the same logic: identical suits, minimal expression, the presentation of themselves as robots. It reads as a joke and as something more serious — a proposal that the future would be automated and that pop music could belong to machines rather than to personalities. Given how much of the following four decades that describes, the joke has aged unusually well.",

    "Commercially it was slow. The album reached only No. 53 in the UK on release; \"The Model\" became a UK No. 1 four years later, in 1982, by which point synth-pop had caught up with it and the single was reissued to a market that now understood it. NME later ranked the album 57th among the greatest ever made and called it Kraftwerk's definitive statement. Its influence runs through synth-pop, through Detroit techno — whose founders have been explicit about the debt — and into hip-hop, where its rhythms were sampled early and often.",
  ],

  listeningNotes: [
    {
      label: "The vocoder",
      text: "Voices are run through a vocoder so they take on the harmonic shape of the synthesizer — recognisably speech, unmistakably processed. It's the sound of a human and a machine sharing one throat.",
    },
    {
      label: "Sequencers doing the playing",
      text: "The repeating bass and arpeggio figures are sequenced rather than performed, so they never drift. That perfect regularity is the point, and it was still novel enough in 1978 to sound alien.",
    },
    {
      label: "Melodies simple enough to hum",
      text: "Unlike their more abstract earlier work, these are proper tunes — short, diatonic, almost nursery-like. The severity of the production makes the sweetness of the melodies land harder.",
    },
    {
      label: "Electronic drums with no swing",
      text: "Bartos and Flür play custom electronic percussion dead on the beat. There's no human push or drag anywhere, which is precisely what made the rhythms so useful to later dance producers.",
    },
    {
      label: "Space left empty",
      text: "Very few parts play at once. Tracks often run on two or three elements, and the silence around them is as composed as the notes.",
    },
    {
      label: "Sung in more than one language",
      text: "The album exists in German and English versions, and the band treat language as another interchangeable component — fitting for a record about people as machinery.",
    },
  ],

  sources: [
    { title: "The Man-Machine — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Man-Machine" },
    { title: "Kraftwerk — Wikipedia", url: "https://en.wikipedia.org/wiki/Kraftwerk" },
    { title: "El Lissitzky — Wikipedia", url: "https://en.wikipedia.org/wiki/El_Lissitzky" },
  ],

  influencedBy: [
    { artist: "Kraftwerk", album: "Trans-Europe Express", year: "1977", note: "Their own previous album, where the sequenced rhythm and European-modernist framing were established; this one makes it pop." },
    { artist: "Can", album: "Tago Mago", year: "1971", note: "Fellow German experimentalists whose repetitive, motorik rhythms are part of the same post-war reinvention Kraftwerk belong to." },
  ],

  influenced: [
    { artist: "Afrika Bambaataa", album: "Planet Rock: The Album", year: "1986", note: "Kraftwerk's rhythms were lifted directly into early electro and hip-hop, making this lineage foundational to both." },
    { artist: "Depeche Mode", album: "Speak & Spell", year: "1981", note: "British synth-pop is built on this record's proof that electronics could carry straightforward pop songs." },
    { artist: "Daft Punk", album: "Discovery", year: "2001", note: "The robot personas, vocoded vocals and machine-precise dance rhythms are a direct inheritance." },
  ],
});
