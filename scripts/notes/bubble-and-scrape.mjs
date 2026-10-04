import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Sebadoh",
  album: "Bubble And Scrape",
  year: "1993",
  heading: "Bubble and Scrape — Sebadoh (1993)",

  albumLine:
    "Released 26 April 1993 on Sub Pop. Indie rock written separately by all three members — Lou Barlow, Eric Gaffney and Jason Loewenstein — and their fourth album, the first recorded entirely in a professional studio.",

  overview: [
    "Barlow had been the bassist in Dinosaur Jr. until J Mascis threw him out in 1989, and Sebadoh began as what he did instead: songs recorded at home on a four-track, deliberately small and unfinished, at a moment when American underground rock was getting louder and better funded. That approach became a genre label — lo-fi — largely on the strength of what he and a handful of contemporaries were doing.",

    "This is the record where that stops being the point. It was made in a real studio, the songs are longer and properly arranged, and the electric guitars are no longer a rumour. One reissue review put the shift exactly: this is where the band moved from \"quick, where's the four-track?\" to reasonably well-crafted indie rock. Whether that was growth or loss is the argument that has always followed them.",

    "The structure is the genuinely unusual thing. Three members write separately and sing their own material, and the album alternates between them without smoothing the joins — Barlow's wounded melodic songs, Gaffney's abrasive and eccentric ones, Loewenstein's harder and more direct. It plays less like a band with a sound than like three correspondents in the same envelope, which is both its charm and the reason it can feel unresolved. It is the last Sebadoh album with Gaffney's writing on it.",

    "Pitchfork later gave it 9.2, with most of the praise going to Barlow's songs and a note that Loewenstein was becoming the stronger writer. NME placed it ninth among their thirty best heartbreak albums, which gets at what it is actually for: a record about being left, made by someone who had been.",
  ],

  listeningNotes: [
    {
      label: "Three singers, three temperaments",
      text: "Each member writes and sings his own tracks, and the album cuts between them with no attempt to blend. The lurches are structural.",
    },
    {
      label: "Barlow's cracked, close vocal",
      text: "Sung quietly and right on the microphone, often slightly flat, with the vulnerability left audible rather than produced out.",
    },
    {
      label: "Studio clarity after four-track murk",
      text: "Guitars are separated and full-range for the first time on a Sebadoh record, which changes what the songs can carry.",
    },
    {
      label: "Abrupt shifts from gentle to abrasive",
      text: "A quiet acoustic song is followed by something deliberately ugly, a sequencing habit inherited from their home-taped albums.",
    },
    {
      label: "Songs that stop rather than end",
      text: "Several cut off mid-figure, a four-track instinct carried into a studio where it was no longer necessary.",
    },
    {
      label: "Gaffney's tracks as interruptions",
      text: "His songs are noisier, stranger and more loosely played than the other two write, and the album lets them puncture a run of melodic material rather than grouping them out of the way.",
    },
  ],

  sources: [
    { title: "Bubble and Scrape — Wikipedia", url: "https://en.wikipedia.org/wiki/Bubble_and_Scrape" },
    { title: "Sebadoh — Wikipedia", url: "https://en.wikipedia.org/wiki/Sebadoh" },
    { title: "Lou Barlow — Wikipedia", url: "https://en.wikipedia.org/wiki/Lou_Barlow" },
  ],

  influencedBy: [
    { artist: "Paul McCartney", album: "McCartney", year: "1970", note: "The ancestor of the whole four-track method — one person at home, fragments kept as fragments, the joins left visible." },
    { artist: "Pixies", album: "Surfer Rosa", year: "1988", note: "The New England underground Barlow came out of, and the model of quiet-to-ugly dynamics inside a song." },
    { artist: "The Beatles", album: "The White Album", year: "1968", note: "Separate writers interleaved on one record with the band sound changing song to song — the same structural gamble." },
  ],

  influenced: [
    { artist: "Guided by Voices", album: "Bee Thousand", year: "1994", note: "Released a year later out of the same lo-fi moment; short, unpolished fragments presented as finished songs." },
    { artist: "Bright Eyes", album: "Fevers and Mirrors", year: "2000", note: "The confessional, audibly fragile male vocal recorded close and unfixed descends from Barlow directly." },
  ],
});
