import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Pere Ubu",
  album: "Dub Housing",
  year: "1978",
  heading: "Dub Housing — Pere Ubu (1978)",

  albumLine:
    "Released 17 November 1978 on Chrysalis, produced by the band with Ken Hamann at Suma Recording in Painesville, Ohio, over August and September. Post-punk before the word existed — their second album, and the one that made the case they were a serious proposition rather than a curiosity.",

  overview: [
    "They came out of Cleveland, which matters more than it sounds. In the mid-seventies Cleveland was a declining industrial city with a strange, isolated underground scene producing bands who had heard the Stooges and the Velvet Underground and very little else, and who were consequently free to be extremely odd. Pere Ubu took their name from an 1896 French absurdist play, which tells you the register they were working in.",

    "The line-up is the reason the record sounds like nothing around it. David Thomas sang in a high, cracked yelp somewhere between a child and a machine, and Allen Ravenstine played an EML synthesizer not as a keyboard but as a noise generator — hissing, whistling, bleeping over conventional rock instrumentation. Nobody was using a synth that way in 1978; it functions as a second voice interrupting the band rather than as texture underneath them.",

    "The title came from an observation on tour. Looking at rows of identical houses in Baltimore while dub reggae played in the van, Thomas said: \"Look. Dub housing.\" The sleeve is the Plaza Apartments on Prospect Avenue in Cleveland — Ravenstine's own building, where several members lived — with an extra floor added to the photograph. Both facts point the same way: the record is about domestic space being repetitive, uncanny and slightly wrong.",

    "Where their debut was a set of separate songs, this one was built to hold together, and the improvement was noticed. NME made it the eighth-best album of 1978 and Sounds the thirteenth; Robert Christgau said it made him go back and reconsider the first record. Trouser Press later called it \"simply one of the most important post-punk recordings,\" which has become the settled view — nearly everything angular, synthetic and deliberately uncomfortable in British post-punk over the following three years has an ancestor here.",
  ],

  listeningNotes: [
    {
      label: "Synthesizer as noise, not notes",
      text: "Ravenstine's EML produces hisses, sirens and electrical crackle rather than melody, cutting across the band like interference on a radio.",
    },
    {
      label: "David Thomas's yelp",
      text: "High, strangled and theatrical, veering into wordless noises. It is the most divisive element and the one everything else is arranged around.",
    },
    {
      label: "A rhythm section playing it straight",
      text: "Bass and drums hold conventional, almost danceable patterns underneath the chaos, which is what stops the record being formless.",
    },
    {
      label: "Dub space",
      text: "Instruments drop out abruptly and echo into gaps, borrowing Jamaican mixing logic without ever sounding like reggae.",
    },
    {
      label: "Songs that refuse to resolve",
      text: "Pieces end mid-phrase or dissolve into noise rather than finishing, so the album never gives you a moment of completion.",
    },
    {
      label: "Industrial sound as material",
      text: "Clanks, drones and machine noise sit inside the arrangements — the sound of the city the band actually lived in.",
    },
  ],

  sources: [
    { title: "Dub Housing — Wikipedia", url: "https://en.wikipedia.org/wiki/Dub_Housing" },
    { title: "Pere Ubu — Wikipedia", url: "https://en.wikipedia.org/wiki/Pere_Ubu" },
    { title: "Allen Ravenstine — Wikipedia", url: "https://en.wikipedia.org/wiki/Allen_Ravenstine" },
  ],

  influencedBy: [
    { artist: "The Stooges", album: "Raw Power", year: "1973", note: "The Midwestern proto-punk the Cleveland scene was built on, and the source of the band's tolerance for noise." },
    { artist: "Captain Beefheart & His Magic Band", album: "Trout Mask Replica", year: "1969", note: "The precedent for rock instrumentation arranged to sound broken on purpose, with a declaimed rather than sung vocal." },
    { artist: "The Velvet Underground", album: "White Light/White Heat", year: "1968", note: "Noise and drone treated as legitimate song material rather than as an effect." },
  ],

  influenced: [
    { artist: "Joy Division", album: "Unknown Pleasures", year: "1979", note: "Post-punk's turn towards space, dub-derived mixing and unease as structure follows within a year." },
    { artist: "Girls Against Boys", album: "Venus Luxure No. 1 Baby", year: "1993", note: "Sampler and keyboard used as atmosphere over a locked rhythm section descends from this arrangement logic." },
    { artist: "Radiohead", album: "Kid A", year: "2000", note: "Electronic noise used to interrupt a rock band rather than accompany it — the method Ravenstine established." },
  ],
});
