import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "The Go-Go's",
  album: "Beauty And The Beat",
  year: "1981",
  heading: "Beauty and the Beat — The Go-Go's (1981)",

  albumLine:
    "Released 14 July 1981 on I.R.S., produced by Richard Gottehrer and Rob Freeman across three New York studios. It's new wave pop with punk underneath — the Go-Go's debut, and the first album by a band of women writing and playing their own songs to reach No. 1 in America.",

  overview: [
    "They came out of the Los Angeles punk scene of the late seventies, where they had been a considerably rougher proposition than the record suggests — playing the Masque and the Whisky, barely able to play their instruments at the start. By 1981 the line-up had settled as Belinda Carlisle singing, Charlotte Caffey on lead guitar and keyboards, Jane Wiedlin on rhythm guitar, Kathy Valentine on bass and Gina Schock on drums, and Gottehrer — who had produced Blondie's debut and co-written \"My Boyfriend's Back\" in 1963 — smoothed them into something radio could carry.",

    "That smoothing is the album's one genuine controversy. The band have spoken about the production being brighter and poppier than they wanted, and if you know the live recordings the gap is real. What it bought them was reach: No. 1 on the Billboard 200 for six weeks in 1982, double platinum, second-biggest album of the year.",

    "The historical fact is worth stating precisely, because it gets garbled. Women had topped the chart before, and all-female groups had too. What hadn't happened was a band of women who wrote their own songs and played their own instruments doing it. That combination — authorship and performance together — is what makes the record a landmark rather than a curiosity, and it took until 1982.",

    "The songs themselves are the reason it survives. Jon Pareles credited the band with \"enough self-reliance and sass to take romance as comedy, not tragedy,\" which is exactly right: these are songs about wanting things and being embarrassed, delivered without self-pity. AllMusic's Stephen Thomas Erlewine called it \"infectiously cheerful pop\" whose songs' \"sturdiness\" makes it a new wave classic. It was added to the National Recording Registry in 2026.",
  ],

  listeningNotes: [
    {
      label: "Surf guitar under new wave",
      text: "Caffey's lead lines borrow reverb-heavy sixties surf phrasing rather than punk power chords, which is a large part of why the record sounds sunny rather than snotty.",
    },
    {
      label: "Two guitars interlocking",
      text: "Wiedlin's rhythm parts and Caffey's leads weave rather than doubling each other, giving the arrangements more movement than a single guitar would.",
    },
    {
      label: "Gina Schock's drumming",
      text: "Fast, hard and unfussy, with a punk drummer's attack inside pop arrangements. It's the main thing left of their Masque-era selves.",
    },
    {
      label: "Carlisle singing slightly flat on purpose",
      text: "Her delivery is conversational and a touch uncorrected, which keeps the polished production from tipping into slickness.",
    },
    {
      label: "Group backing vocals",
      text: "The band sing behind her in unison shouts and close harmonies, a girl-group device Gottehrer knew intimately from having written for them two decades earlier.",
    },
  ],

  sources: [
    { title: "Beauty and the Beat (The Go-Go's album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Beauty_and_the_Beat_(The_Go-Go%27s_album)" },
    { title: "The Go-Go's — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Go-Go%27s" },
    { title: "National Recording Registry — Library of Congress", url: "https://www.loc.gov/programs/national-recording-preservation-board/recording-registry/complete-national-recording-registry-listing/" },
  ],

  influencedBy: [
    { artist: "Blondie", album: "Parallel Lines", year: "1978", note: "Produced by Richard Gottehrer's earlier collaborator circle; the template of punk-scene musicians making immaculate new wave pop." },
    { artist: "The Ronettes", album: "Presenting the Fabulous Ronettes", year: "1964", note: "Gottehrer wrote and produced in the girl-group era, and those group-vocal conventions run straight through this record." },
  ],

  influenced: [
    { artist: "Bikini Kill", album: "Pussy Whipped", year: "1993", note: "Riot grrrl looked back to the Go-Go's LA punk origins as proof that women could simply form a band and play." },
    { artist: "Paramore", album: "Riot!", year: "2007", note: "Pop-punk with surf-derived guitar leads and hooks written by the singer rather than handed to her." },
  ],
});
