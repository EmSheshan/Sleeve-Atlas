import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "The Beach Boys",
  album: "Pet Sounds",
  year: "1966",
  heading: "Pet Sounds — The Beach Boys (1966)",

  albumLine:
    "Released 16 May 1966 on Capitol, produced, arranged and mostly written by Brian Wilson with guest lyricist Tony Asher. Progressive and chamber pop rather than surf music — the band's eleventh studio album, and the one that severed them from cars and beaches for good.",

  overview: [
    "Wilson had stopped touring after a breakdown in 1964 and stayed home to write and record while the rest of the band worked the road. Hearing the Beatles' Rubber Soul as a unified statement rather than hits plus filler was, by his own account, his \"main motivator\"; he told his wife Marilyn he would make \"the greatest rock album ever made.\" He wrote eight songs over about three weeks in January 1966 with Asher, an advertising copywriter he had met at Western Recorders. Asher was modest about it — \"I was really just his interpreter\" — but what he brought was a vocabulary of doubt and disappointment the band had never used, aimed squarely at listeners who had outgrown the surf records.",

    "Capitol did not know what to do with it. Production ran past $70,000, unprecedented for a pop album, and the label's marketing staff were unenthused: A&R man Karl Engermann said the group's usual hit-making production was missing. Capitol issued Best of the Beach Boys alongside it, which Bruce Johnston later regarded as a betrayal; Johnston called the album an \"ignored stepchild.\" Within the band, singer Mike Love's objections were mostly about brand fit, and about one song rooted in Wilson's LSD experiences, whose lyrics Wilson rewrote. Love has disputed the harsher version of this story. Carl Wilson remembered general affection for the project, and Dennis Wilson said nobody matched his brother's talent or stood against his vision.",

    "Reception split by country. American critics were lukewarm and it stalled at No. 10 on the Billboard chart. In Britain, helped by publicist Derek Taylor, musicians and critics seized on it: No. 2 on Record Retailer and six months inside the top ten. The clearest measure of its effect is what it provoked. Beatles producer George Martin wrote that \"without 'Pet Sounds,' 'Sgt. Pepper' never would have happened… 'Pepper' was an attempt to equal 'Pet Sounds,'\" and Paul McCartney said of directing that record, \"my influence was basically the Pet Sounds album.\" Its reputation has risen steadily since; it is now routinely named among the most influential albums ever made.",
  ],

  listeningNotes: [
    {
      label: "The studio used as an instrument",
      text: "Wilson composed parts at a piano, handed them to as many as fifteen players crowded into a small room, and pushed four-track tape past what it was designed for. Backing tracks and vocals were built separately and fused.",
    },
    {
      label: "Instruments that don't belong in rock",
      text: "Bass harmonica, harpsichord, glockenspiel, bicycle horn and the Electro-Theremin, played by its inventor Paul Tanner. None of them are used as novelty — they sit inside the arrangements as ordinary voices.",
    },
    {
      label: "Found objects as percussion",
      text: "Drummer Hal Blaine cut and taped orange juice bottles together as a vibraphone substitute; on the title piece, drummer Ritchie Frost played bongos through a Leslie speaker and two empty Coca-Cola cans.",
    },
    {
      label: "Bass moved up to carry the tune",
      text: "On \"Here Today\" Wilson shifted the bass an octave so it functions as a lead line rather than a foundation. Elsewhere, Asher plucked piano strings from inside the instrument while Wilson held the keys down, for a harpsichord-like attack.",
    },
    {
      label: "Harmony drilled take after take",
      text: "The group vocals were worked relentlessly — one short passage reportedly took thirty attempts. Engineer Chuck Britz said they \"could sing a capella and make tears come to your eyes.\"",
    },
    {
      label: "Mono by choice",
      text: "Wilson mixed everything to a single channel, following producer Phil Spector, so the arrangement arrives as one fused mass rather than separable parts. No true stereo mix existed until 1996.",
    },
  ],

  sources: [
    { title: "Here Today: The Beach Boys' 'Pet Sounds' at 60 — Rock and Roll Globe", url: "https://rockandrollglobe.com/pop/here-today-the-beach-boys-pet-sounds-at-60/" },
    { title: "The Story of The Beach Boys 'Pet Sounds' — Classic Album Sundays", url: "https://classicalbumsundays.com/album-of-the-month-the-beach-boys-pet-sounds/" },
    { title: "George Martin: \"Without Pet Sounds, Sgt. Pepper Wouldn't Have Happened\" — Full in Bloom", url: "https://fullinbloom.com/george-martin-without-pet-sounds-sgt-pepper-wouldnt-have-happened/" },
    { title: "Pet Sounds — Wikipedia", url: "https://en.wikipedia.org/wiki/Pet_Sounds" },
  ],

  influencedBy: [
    { artist: "The Beatles", album: "Rubber Soul", year: "1965", note: "Wilson called it his \"main motivator\" — an album with no filler, which pushed him to build this one as a single sustained piece rather than singles plus padding." },
    { artist: "The Ronettes", album: "Presenting the Fabulous Ronettes Featuring Veronica", year: "1964", note: "Wilson took Phil Spector's method wholesale: the same Wrecking Crew players, instruments doubled and tripled into one dense body of sound, mixed to mono." },
    { artist: "The Four Freshmen", album: "Four Freshmen and 5 Trombones", year: "1956", note: "Wilson learned harmony off their records — \"I worked for a year on The Four Freshmen with my hi-fi set\" — and credits singer Bob Flanigan for teaching him falsetto." },
  ],

  influenced: [
    { artist: "The Beatles", album: "Sgt. Pepper's Lonely Hearts Club Band", year: "1967", note: "Producer George Martin wrote that Pepper \"was an attempt to equal Pet Sounds,\" and Paul McCartney credited this album as the influence behind his direction of it." },
    { artist: "The Zombies", album: "Odessey and Oracle", year: "1968", note: "Keyboardist Rod Argent has said the band were knocked out by it, pointing specifically to Brian Wilson's song structures and basslines rather than its surface sounds." },
  ],
});
