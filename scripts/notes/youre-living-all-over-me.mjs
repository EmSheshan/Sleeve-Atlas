import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Dinosaur Jr.",
  album: "You're Living All Over Me",
  year: "1987",
  heading: "You're Living All Over Me — Dinosaur Jr. (1987)",

  albumLine:
    "Released in 1987 on SST Records (Freakscene gives 14 December; Wikipedia gives only the year) and produced by Wharton Tiers. It's noise-tinged indie rock and the second album by Dinosaur Jr., after their 1985 debut Dinosaur.",

  overview: [
    "The band came out of Western Massachusetts and grew from the hardcore group Deep Wound, according to Clash. SST was then, in the words of writer Byron Coley in the album's reissue liner notes, \"as hot as tar,\" home to Black Flag, the Minutemen, the Meat Puppets, Hüsker Dü and Sonic Youth. Wikipedia, citing writer Michael Azerrad's book, says the debut sold only about 1,500 copies in its first year, and that Sonic Youth invited the band on a September 1986 tour. Guitarist J Mascis, bassist Lou Barlow and drummer Murph signed to SST; Barlow told Clash that being signed by the label \"would be our life goal realized.\"",

    "The album was recorded in two places. Barlow told Clash that they \"recorded one side\" at Pine Tracks in Massachusetts, and the rest in New York with producer Wharton Tiers, who had Sonic Youth credentials; Murph recalls Tiers's studio, Fun City, as \"a huge step up.\" Barlow also described the group's dynamic: \"J was running everything.\" Writer Jill LaBrack of PopMatters suggested in 2005 that Barlow's own songs on the record \"showcase why he needed to leave and start Sebadoh\"; Coley wrote that he \"devoted all of his songwriting focus to Sebadoh from this point on.\"",

    "Two small mysteries survive. The first issue carried the name Dinosaur; per Wikipedia, a lawsuit led to a reprint under the name Dinosaur Jr., though the reason for the recall is tagged as needing a citation. The title was long rumoured to be a Mascis exclamation about cramped touring conditions; Wikipedia reports that he denied this in a 2016 VICE interview, saying he thought of it \"more like my sister.\"",

    "Reviews were warm from the start. NME critic Jack Barron wrote in September 1987 that it was \"the most agape rock music to have come out of America this year,\" and critic Robert Christgau gave it a B+. Fan opinion grew from there: Coley called Mascis's effects-laden guitar \"a revelation to a generation that had forsaken solos as old hat,\" and musician Thurston Moore of Sonic Youth told Clash, \"That's when I was initially enlightened.\" Pitchfork's Jess Harvell scored the 2005 reissue 9.1, and the band played the album in full at a 2005 festival.",
  ],

  listeningNotes: [
    {
      label: "The effects-laden guitar wall",
      text: "Mascis layers distorted, effects-heavy guitar that Coley calls a revelation and musician Mike Watt calls \"massive massive massive.\"",
    },
    {
      label: "Black Sabbath's heaviness, bent",
      text: "LaBrack says the guitar work \"steals (and then breaks) from Black Sabbath.\" The riffs are heavy, but they wander off-grid.",
    },
    {
      label: "Two vocal personalities",
      text: "Mascis sings lead on most of it, while Barlow writes and sings \"Lose\" and \"Poledo\" in a more fragile, sing-song register. It's a rare record where the band's tension reads as variety.",
    },
    {
      label: "A pop cover in the noise",
      text: "The album closes with a cover of the Cure's \"Just Like Heaven.\" Setting a melodic song beside the roar is typical of the band's pop-and-noise approach.",
    },
    {
      label: "Two studios, two feels",
      text: "Half of the record came from a Massachusetts studio and half from Tiers's New York one, which Murph called a big step up. The album sounds cohesive anyway.",
    },
  ],

  sources: [
    { title: "You're Living All Over Me — Wikipedia", url: "https://en.wikipedia.org/wiki/You%27re_Living_All_Over_Me" },
    { title: "Dinosaur Jr.: You're Living All Over Me — PopMatters (Jill LaBrack, 2005)", url: "https://www.popmatters.com/review/dinosaurjr-youreliving/" },
    { title: "You're Living All Over Me oral history — Clash (2014)", url: "https://www.clashmusic.com/features/youre-living-all-over-me-dinosaur-jr/" },
    { title: "You're Living All Over Me — Freakscene (Byron Coley liner notes, 2004)", url: "https://www.freakscene.net/releases/dinosaur-jr/youre-living-all-over-me/" },
  ],

  influencedBy: [],

  influenced: [
    { artist: "My Bloody Valentine", album: "You Made Me Realise", year: "1988", note: "Wikipedia, citing The Quietus (2012) and Westword (2009), says guitarist and songwriter Kevin Shields named this album as an influence on that EP; Diffuser says he credits it with inspiring the EP, which came out a year later." },
    { artist: "Nirvana", album: "Bleach", year: "1989", note: "Critic Josh Gray of Clash wrote that \"it is likely that there would be no 'Bleach' or 'Doolittle' without it\"; Wikipedia adds that several sources, citing NPR, recognise its influence on Nirvana." },
    { artist: "Pixies", album: "Doolittle", year: "1989", note: "Named alongside Nirvana's debut in the same Clash passage by critic Josh Gray: \"it is likely that there would be no 'Bleach' or 'Doolittle' without it.\"" },
  ],
});
