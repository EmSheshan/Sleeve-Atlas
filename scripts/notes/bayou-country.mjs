import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Creedence Clearwater Revival",
  album: "Bayou Country",
  year: "1969",
  heading: "Bayou Country — Creedence Clearwater Revival (1969)",

  albumLine:
    "Released 15 January 1969 on Fantasy, produced by John Fogerty and recorded that October at RCA's Hollywood studio. It's swamp rock — blues, rockabilly and Southern imagery welded into short hard songs — their second album, and the start of the most productive year any American band has had.",

  overview: [
    "The four of them were from El Cerrito, in the San Francisco Bay Area, and had been playing together since 1959, first as the Blue Velvets and then as the Golliwogs. John Fogerty sang, played lead guitar and produced; his brother Tom Fogerty played rhythm guitar, Stu Cook bass, Doug Clifford drums. The central fact about this album is that none of them were from the South and their picture of it came, in Fogerty's own account, largely second-hand. The bayous, the catfish, the riverboats and the drawl are all invented — an American band imagining an America they had read about.",

    "That is more interesting than it sounds, because 1969 in the Bay Area meant something very specific: psychedelia, twenty-minute jams, the Fillmore, a local consensus that rock had outgrown the single. Creedence lived inside that scene and made the opposite record. The songs are two and a half minutes long, the arrangements have no fat on them, and the material looks back to Memphis and New Orleans rather than forward to anywhere. Against the Grateful Dead and Jefferson Airplane they were almost aggressively square, and they outsold all of them.",

    "\"Proud Mary\" is the song that did it, their first No. 2. Fogerty has said he wrote it in the two days after his discharge from the National Guard — which situates the record squarely in the Vietnam draft years — and that he built the guitar figure trying to play like Steve Cropper of Booker T. & the M.G.s, with the opening lifted in spirit from Beethoven's Fifth. It is a song about leaving a job and getting on a boat, written by a man who had just got out of the army.",

    "Fogerty ran the band completely: arrangements, backing vocals, production, all of it. His justification was stark — \"either this would be a success, something really big, or we might as well start working at the car wash again\" — and it worked, then destroyed them. By 1970 the others were demanding a say and the resentment never resolved. The album reached No. 7 and eventually went double platinum; AllMusic call it the record that \"reveals an assured Creedence Clearwater Revival, a band that has found its voice.\" Across 1969 they placed three albums in the top ten and four singles in the top three, which nobody else in America managed.",
  ],

  listeningNotes: [
    {
      label: "Fogerty's rasp",
      text: "He sings in a hoarse, hard-pushed baritone with an affected Southern drawl, a Californian doing Louisiana and not hiding it. It became one of the most imitated voices in rock.",
    },
    {
      label: "Two guitars locked tight",
      text: "Tom Fogerty plays unflashy rhythm underneath while John plays terse, Cropper-influenced lead. Nobody solos for long and nothing wanders.",
    },
    {
      label: "One long jam as the exception",
      text: "A single extended track stretches past eight minutes with a repeating riff and shouted vocal, which is the only concession to the band's own scene and sounds nothing like the rest.",
    },
    {
      label: "Tremolo and spring reverb",
      text: "The guitar tone is wobbling, watery amp tremolo with heavy reverb, a fifties rockabilly sound used to conjure humidity. It is most of what \"swamp\" means here.",
    },
    {
      label: "Drums and bass with no ornament",
      text: "Clifford and Cook play the simplest possible figures and never fill. The discipline is what makes two-and-a-half-minute songs feel enormous.",
    },
    {
      label: "Recorded fast and nearly live",
      text: "The sessions took days, not months, with minimal overdubbing, so what you hear is a bar band that had been playing together for a decade.",
    },
  ],

  sources: [
    { title: "Bayou Country (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Bayou_Country_(album)" },
    { title: "Creedence Clearwater Revival — Wikipedia", url: "https://en.wikipedia.org/wiki/Creedence_Clearwater_Revival" },
    { title: "Proud Mary — Wikipedia", url: "https://en.wikipedia.org/wiki/Proud_Mary" },
  ],

  influencedBy: [
    { artist: "Booker T. & the M.G.s", album: "Green Onions", year: "1962", note: "Fogerty has said he was trying to play like Steve Cropper; the whole band's economy comes from the Stax house style." },
    { artist: "Little Richard", album: "Here's Little Richard", year: "1957", note: "The fifties rock and roll shout, the tempo and the two-minute song as a complete statement." },
  ],

  influenced: [
    { artist: "The Band", album: "The Band", year: "1969", note: "Released the same year and pointing the same way — American roots music taken seriously in the middle of psychedelia." },
    { artist: "Tom Petty and the Heartbreakers", album: "Damn the Torpedoes", year: "1979", note: "Lean, tightly written American rock built on short songs and no indulgence, with Fogerty as an acknowledged model." },
    { artist: "Bruce Springsteen", album: "Born in the U.S.A.", year: "1984", note: "The hoarse working-man voice singing invented American geography descends from this record." },
  ],
});
