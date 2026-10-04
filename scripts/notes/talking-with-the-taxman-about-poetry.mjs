import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Billy Bragg",
  album: "Talking With the Taxman About Poetry",
  year: "1986",
  heading: "Talking with the Taxman About Poetry — Billy Bragg (1986)",

  albumLine:
    "Released 22 September 1986 on Go! Discs in Britain and Elektra in America. His third album, and the first to put a band behind him — guests include Johnny Marr on electric guitar and Kirsty MacColl singing.",

  overview: [
    "The title comes from a Vladimir Mayakovsky poem, credited in the sleeve notes, in which the Soviet poet argues with a tax inspector about whether writing verse is work. Bragg's whole position is in that joke: a man who thinks songwriting is a job, that jobs are political, and that saying so needn't be dour.",

    "The first two albums had been close to unaccompanied — one voice, one loud electric guitar, no band, recorded cheaply. That was partly aesthetic and substantially practical, and it gave him a reputation as a protest singer in the narrowest sense. Here he brings in strings, brass, percussion, Marr's guitar and MacColl's voice, and the songs can suddenly hold more than one idea at a time.",

    "The politics are of a specific moment. This is Britain two years after the miners' strike ended in defeat, six years into Thatcher, with the left arguing bitterly about what had gone wrong. Bragg had played benefit after benefit through the strike, and what is striking about the record is how little of it is slogan: the political songs sit alongside love songs, several tracks are both at once, and he is consistently funnier and more self-doubting than the placard reputation allows.",

    "\"Levi Stubbs' Tears\" — a song about a woman whose life is held together by Four Tops records — reached No. 29, and \"Greetings to the New Brunette\" only 58. Rolling Stone's David Handelman called it \"a winning mesh\" of political edge and melody, which is about right. It remains the album people hand to anyone who thinks a protest singer cannot also write a tune.",
  ],

  listeningNotes: [
    {
      label: "One loud electric guitar, unaccompanied",
      text: "His trademark remains: a thin, trebly, slightly distorted electric played with no band behind it, so the words carry everything.",
    },
    {
      label: "Johnny Marr's chiming parts",
      text: "Where Marr appears, the arrangement opens into layered, melodic guitar — the clearest sign of the record's wider ambitions.",
    },
    {
      label: "An Essex accent, undisguised",
      text: "Bragg sings in his speaking voice with no attempt at an American or neutral delivery, which in 1986 was still unusual enough to be a statement.",
    },
    {
      label: "Brass and strings used sparingly",
      text: "Horns and strings arrive on a handful of tracks only, so the fuller arrangements register as events rather than as a new default.",
    },
    {
      label: "Love songs and political songs sharing a shape",
      text: "The same plain, direct writing serves both, and several tracks refuse to say which they are.",
    },
    {
      label: "Soul records inside the songs",
      text: "Motown and Stax are named and quoted as part of the storytelling rather than borrowed as a sound — the records characters own, doing work in their lives.",
    },
  ],

  sources: [
    { title: "Talking with the Taxman About Poetry — Wikipedia", url: "https://en.wikipedia.org/wiki/Talking_with_the_Taxman_About_Poetry" },
    { title: "Billy Bragg — Wikipedia", url: "https://en.wikipedia.org/wiki/Billy_Bragg" },
    { title: "Levi Stubbs' Tears — Wikipedia", url: "https://en.wikipedia.org/wiki/Levi_Stubbs%27_Tears" },
  ],

  influencedBy: [
    { artist: "Bob Dylan", album: "The Freewheelin' Bob Dylan", year: "1963", note: "The template for one man, one guitar and a political argument delivered conversationally." },
    { artist: "The Clash", album: "London Calling", year: "1979", note: "Punk's licence to sing about British politics in a British accent, which Bragg took and stripped back to one instrument." },
    { artist: "The Smiths", album: "The Queen Is Dead", year: "1986", note: "Released three months earlier; Johnny Marr plays here, and both records argue about England through character sketches rather than slogans." },
  ],

  influenced: [
    { artist: "Manic Street Preachers", album: "Everything Must Go", year: "1996", note: "British guitar music that treats left politics as ordinary subject matter rather than as a special category." },
    { artist: "Arctic Monkeys", album: "Whatever People Say I Am, That's What I'm Not", year: "2006", note: "Singing in an undisguised English regional accent about recognisably local life — a lineage Bragg did much to make viable." },
  ],
});
