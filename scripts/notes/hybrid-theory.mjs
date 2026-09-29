import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Linkin Park",
  album: "Hybrid Theory",
  year: "2000",
  heading: "Hybrid Theory — Linkin Park (2000)",

  albumLine:
    "Released 24 October 2000 on Warner Bros., produced by Don Gilmore at NRG Recordings in North Hollywood between March and July that year. Nu metal with rap and electronics welded in — their debut, and one of the best-selling albums of the century.",

  overview: [
    "The band's structure is the record's thesis. Chester Bennington sings and screams, Mike Shinoda raps and programmes, Brad Delson plays guitar, Rob Bourdon drums and Joe Hahn works turntables and samples. Two frontmen doing different things is what separates them from a rap-metal act with a guest verse — the trade between Shinoda's rapped sections and Bennington's sung choruses is the songwriting method rather than an ornament. The bassist Dave Farrell is credited but does not play on it; session musicians covered the parts.",

    "Their advantage over the rest of nu metal was melody and restraint. Where most of the genre in 2000 traded on aggression and down-tuned riffs, this is unusually compact — songs under four minutes, choruses that resolve, Bennington singing more than he screams, and Delson frequently refusing to solo at all. Bennington cited Depeche Mode and Stone Temple Pilots; the electronics are closer to trip-hop than to metal.",

    "The subject matter is adolescent in the specific, unembarrassed sense: parental divorce, self-loathing, substance use, feeling unheard. Critics at the time found it derivative and said so, and some of that was really an objection to who the record was for. It sold 50,000 in its first week from a No. 16 debut, climbed to No. 2, and finished 2001 as the best-selling album in America with 4.8 million copies — it is now twelve times platinum there and around thirty-two million worldwide.",

    "The reassessment has been substantial, helped by nu metal's own rehabilitation: Revolver readers voted it the greatest nu metal album of all time in 2018. Bennington died in 2017, and the records have since acquired a weight their reviews never gave them — the writing about depression and self-harm that was dismissed as teenage posturing reads very differently now.",
  ],

  listeningNotes: [
    {
      label: "Two vocalists with different jobs",
      text: "Shinoda raps the verses and Bennington sings the choruses, alternating within songs rather than guesting on each other's.",
    },
    {
      label: "Bennington's scream",
      text: "A high, tearing shriek used sparingly and always at a structural peak, which is why it registers rather than becoming wallpaper.",
    },
    {
      label: "Turntables as an instrument",
      text: "Hahn's scratching and samples run through the arrangements as texture, not as a hip-hop signifier bolted on top.",
    },
    {
      label: "Down-tuned guitar without solos",
      text: "Delson plays heavy, simple riff figures and almost never takes a lead. The space that leaves is where the vocals and electronics live.",
    },
    {
      label: "Songs kept short",
      text: "Nearly everything is under four minutes with the chorus arriving early — pop construction inside a metal record.",
    },
  ],

  sources: [
    { title: "Hybrid Theory — Wikipedia", url: "https://en.wikipedia.org/wiki/Hybrid_Theory" },
    { title: "Linkin Park — Wikipedia", url: "https://en.wikipedia.org/wiki/Linkin_Park" },
    { title: "Chester Bennington — Wikipedia", url: "https://en.wikipedia.org/wiki/Chester_Bennington" },
  ],

  influencedBy: [
    { artist: "Depeche Mode", album: "Music for the Masses", year: "1987", note: "Named by Bennington; the electronic textures and the melodic, melancholy vocal line come from here rather than from metal." },
    { artist: "Run-DMC", album: "Raising Hell", year: "1986", note: "The original case that rap and rock guitar could occupy one song rather than one compilation." },
    { artist: "Kid Rock", album: "Devil Without A Cause", year: "1998", note: "The immediate commercial precedent for rapping and singing traded within a rock band on a major label." },
  ],

  influenced: [
    { artist: "Twenty One Pilots", album: "Blurryface", year: "2015", note: "Two-man band alternating rapped verses and sung choruses, with the same adolescent interior subject matter treated seriously." },
  ],
});
