import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Yeah Yeah Yeahs",
  album: "Fever To Tell",
  year: "2003",
  heading: "Fever to Tell — Yeah Yeah Yeahs (2003)",

  albumLine:
    "Released 29 April 2003 on Interscope, co-produced by the band with David Andrew Sitek at Headgear Studio in Brooklyn and mixed by Alan Moulder in London. It's art-punk played by a trio with no bassist — their debut, and one of the defining records of the New York revival.",

  overview: [
    "The early 2000s had produced a narrative about New York rock: the Strokes, Interpol and the rest, guitars returning after a decade of other things. Yeah Yeah Yeahs belonged to that scene geographically and had almost nothing else in common with its cooler, more studied bands. Karen O sang, screamed, cooed and yelped; Nick Zinner played guitar; Brian Chase drummed. There was no bass player at all, which is the single most consequential fact about how the record sounds.",

    "They made it themselves before involving a label. The band financed the recording and signed to Interscope only for distribution, which kept the album's control in their hands — audible in how unpolished much of it is. Sitek, then also in TV on the Radio, co-produced; Moulder, who had mixed for My Bloody Valentine and Nine Inch Nails, brought the noise into focus without cleaning it up.",

    "Karen O has resisted the reading that this was a scene record. \"We were relying more on our emotions and what was going on inside,\" she said. \"The inner turmoil rather than the outer turmoil.\" That's borne out by the album's shape: two-thirds of it is fast, abrasive and sexually blunt, and then it drops into \"Maps,\" a slow, exposed love song addressed to someone leaving. The lurch between those modes is the record's real subject, and it made the band far bigger than their peers — the video's MTV rotation reportedly tripled sales.",

    "It debuted at No. 67, peaked at No. 55, went gold in the US and UK and passed a million copies worldwide. The New York Times named it the best album of 2003; Metacritic aggregated 85 from 27 reviews. It has since settled near the top of most lists of the decade — fifth at NME, twenty-fourth at Pitchfork, and thirty-eighth on the Guardian's best albums of the century.",
  ],

  listeningNotes: [
    {
      label: "No bass guitar",
      text: "The band is voice, one guitar and drums. Zinner fills the low end with heavily effected, detuned guitar, so the bottom of the mix is distorted and unstable rather than solid.",
    },
    {
      label: "Karen O's whole vocal arsenal",
      text: "She moves between whisper, yelp, scream and sung melody constantly, often mid-line. It's performance as much as singing, and it's deliberately not smoothed out.",
    },
    {
      label: "Guitar as texture, not riffs",
      text: "Zinner layers scraping, chiming and buzzing tones rather than playing conventional rock riffs, which is why the record sounds bigger than three people should.",
    },
    {
      label: "Drums recorded loud and dry",
      text: "Chase's kit is close-miked and blunt with almost no reverb, giving the fast songs a hard, flat attack that pushes everything forward.",
    },
    {
      label: "The slow one near the end",
      text: "\"Maps\" arrives after a run of abrasive tracks with a single repeating guitar figure, a trembling vocal and real space around it. The contrast is what makes it land.",
    },
    {
      label: "Songs that stop abruptly",
      text: "Several tracks cut off rather than resolving, some under two minutes. The record is over in around thirty-seven minutes and never settles into a groove for long.",
    },
  ],

  sources: [
    { title: "Fever to Tell — Wikipedia", url: "https://en.wikipedia.org/wiki/Fever_to_Tell" },
    { title: "Yeah Yeah Yeahs — Wikipedia", url: "https://en.wikipedia.org/wiki/Yeah_Yeah_Yeahs" },
    { title: "The 100 best albums of the 21st century — The Guardian", url: "https://www.theguardian.com/music/2019/sep/13/100-best-albums-of-the-21st-century" },
  ],

  influencedBy: [
    { artist: "PJ Harvey", album: "Rid of Me", year: "1993", note: "The clearest precedent: a woman fronting abrasive, sexually direct guitar rock recorded raw, and a comparison critics made immediately." },
    { artist: "Siouxsie and the Banshees", album: "Juju", year: "1981", note: "Post-punk built on atmospheric, non-riff guitar under a theatrical female vocal — a named point of comparison for this record." },
    { artist: "The Stooges", album: "Fun House", year: "1970", note: "The garage-punk tradition of a band playing at the edge of control with a frontperson as physical presence." },
  ],

  influenced: [
    { artist: "Florence + the Machine", album: "Lungs", year: "2009", note: "Part of the wave of theatrical, big-voiced female-fronted rock that followed in this album's wake." },
    { artist: "Sleigh Bells", album: "Treats", year: "2010", note: "Noise-pop duos built on distorted guitar texture and a pop vocal owe a good deal to this record's bass-free construction." },
  ],
});
