import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Killing Joke",
  album: "Killing Joke",
  year: "1980",
  heading: "Killing Joke — Killing Joke (1980)",

  albumLine:
    "Released in October 1980 on E.G., then distributed by Polydor, and produced by the band themselves. It's post-punk with the pressure turned up — the record people point to when they trace where industrial rock came from — and it's their first album, following the 1979 EP Turn to Red.",

  overview: [
    "Singer and keyboardist Jaz Coleman met drummer Paul Ferguson in late 1978, and in February 1979 the two placed an ad in Melody Maker: \"Bass, lead, to tell the killing joke, we mean it man ! Total exploitation, no information, anonymity\". Guitarist Geordie Walker answered it, bassist Martin \"Youth\" Glover followed, and the band that assembled had one foot in punk and the other somewhere stranger. Turn to Red, their 1979 debut EP, leaned on disco and on dub — Youth took his stage name from the Jamaican toaster Big Youth — and that rhythmic inheritance never left, even once the guitars got heavy.",

    "The sleeve tells you the register before a note plays. It collages a photograph by Don McCullin of young rioters running from CS gas fired by the British Army in Derry on 8 July 1971, months before Bloody Sunday happened in the same city; designer Mike Coles assembled it, and both men went uncredited. The lyrics, written by Coleman and Ferguson, circle politics, death, hypocrisy and exile rather than that conflict — the image sets a mood of civic emergency instead of reporting on one. Coleman has since pointed out that everything here was written in 1979, so \"it's kind of a 1979 album.\"",

    "They cut it at Marquee Studios in London in August 1980 and refused a producer on principle, wanting only an engineer who would \"take us as we are\". That was Phil Harding, also left off the sleeve, who reckons the whole thing may have taken about two weeks. It was tracked live with, as Ferguson put it, \"no overdubs to speak of\" — the shaping happened afterwards. \"The mixing is where the difference is,\" he said.",

    "It entered the UK chart at No. 41 in late October 1980 and climbed only to No. 39. Coleman's memory of the press is bleak — \"It got slagged off by everybody and then eight years later we were told it was a ground-breaking record\" — though that is tidier than the evidence, since Sounds handed it five stars within a fortnight. The reappraisal is real enough: Pitchfork later placed it ninth among industrial albums, Metallica, Helmet and Foo Fighters all recorded covers from it, and Dave Grohl, drummer and singer, has named it a favourite.",
  ],

  listeningNotes: [
    {
      label: "Live to tape, with the mix as the instrument",
      text: "The band played these together in a room and barely overdubbed, then spent their effort on the mix. It's why everything sounds like one event rather than assembled parts.",
    },
    {
      label: "Walker's chiming metal guitar",
      text: "Gear writers describe the setup he kept for decades: a hollowbody Gibson ES-295 strung heavy, with the amp pushed only just past the edge of breakup. The chords ring and clang instead of collapsing into fuzz.",
    },
    {
      label: "Dub weight underneath",
      text: "Youth's bass sits forward and spacious, treated with echo, and Ferguson leaves room around the beat. The rhythm section is still thinking in reggae terms while the guitars behave like metal.",
    },
    {
      label: "A funk vamp inside the aggression",
      text: "The band have acknowledged that \"Change\" leans on War's \"Me and Baby Brother\" from 1973. Several of these grooves are danceable chassis with something punishing bolted on top.",
    },
    {
      label: "Synthesizer as alarm",
      text: "Coleman's keyboards rarely carry a tune. They arrive as sirens, drones and sheets of noise, which is why the record reads as mechanical even though almost all of it is four people playing.",
    },
    {
      label: "Chanted, unharmonised choruses",
      text: "Ferguson sings behind Coleman in flat unison rather than harmony, so hooks land as slogans shouted by a group. A great deal of later heavy music takes this as its default.",
    },
  ],

  sources: [
    { title: "Killing Joke's 1980 Self-Titled Debut Album — Post-Punk.com", url: "https://post-punk.com/killing-jokes-1980-self-titled-debut-album/" },
    { title: "Killing Joke (1980 album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Killing_Joke_(1980_album)" },
    { title: "The life and times of Killing Joke visionary Geordie Walker — Guitar World", url: "https://www.guitarworld.com/artists/guitarists/the-life-and-times-of-geordie-walker" },
    { title: "Killing Joke — Trouser Press", url: "https://trouserpress.com/reviews/killing-joke/" },
    { title: "Jaz Coleman interview — Kerrang!", url: "https://www.kerrang.com/jaz-coleman-weve-been-adapted-from-an-already-evolving-primate-another-race-of-sentient-beings" },
  ],

  influencedBy: [
    { artist: "Big Youth", album: "Screaming Target", year: "1972", note: "The dub lineage the bassist named himself after: bass carrying the melody, echo used as an arrangement tool, space left deliberately empty." },
    { artist: "War", album: "Deliver the Word", year: "1973", note: "The band have acknowledged borrowing one of this album's funk vamps outright — the loping bass-and-guitar figure that several of their grooves are built on." },
  ],

  influenced: [
    { artist: "Metallica", album: "The $5.98 E.P. – Garage Days Re-Revisited", year: "1987", note: "They recorded a cover from this album; guitarist Kirk Hammett had been playing the riff at rehearsals." },
    { artist: "Ministry", album: "The Land of Rape and Honey", year: "1988", note: "Coleman recalls a young Al Jourgensen, Ministry's frontman, at early shows and claims the band as \"our musical children\" — the shared method is a grinding guitar riff locked to a mechanical pulse." },
    { artist: "Foo Fighters", album: "The Colour and the Shape", year: "1997", note: "Grohl has named this record a favourite, and the band cut a cover from it as a B-side during these sessions." },
    { artist: "The Mad Capsule Markets", album: "010", year: "2001", note: "The Japanese band covered a song from here, rebuilding the riff-over-pulse construction with programmed drums." },
  ],
});
