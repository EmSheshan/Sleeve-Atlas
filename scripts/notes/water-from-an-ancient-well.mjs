import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Abdullah Ibrahim",
  album: "Water From An Ancient Well",
  year: "1986",
  heading: "Water From An Ancient Well — Abdullah Ibrahim (1986)",

  albumLine:
    "Released on Tiptoe, an Enja subsidiary, and performed by Ibrahim's septet Ekaya. Sources give the date as either 1985 or 1986 and don't agree, so treat it as mid-decade. It's South African jazz — Cape melodies inside a post-bop horn band — made while its composer was in exile.",

  overview: [
    "Abdullah Ibrahim was born Adolph Johannes Brand in Cape Town in 1934 and spent his early career as Dollar Brand, taking his present name after converting to Islam in 1968. His breakthrough came through Duke Ellington, who heard him play in Zurich in 1963 — his wife, the singer Sathima Bea Benjamin, had arranged it — and produced his first recording session. Ellington's influence stays audible for the rest of his life: the same interest in voicing a horn section as a single warm instrument, the same preference for melody over display.",

    "In 1974 he recorded \"Mannenberg,\" a piece that became something close to an unofficial anthem of the anti-apartheid movement, named for a township on the Cape Flats where people forcibly removed from District Six had been resettled. After the Soweto uprising of 1976 he and Benjamin openly backed the banned African National Congress and helped organise an illegal benefit concert. That made him a target of the South African state, and he spent the following years based in New York.",

    "This record comes out of that exile, played by Ekaya — the name means \"home\" — the septet he formed in 1983 with musicians including saxophonists Carlos Ward and Ricky Ford, trombonist Dick Griffin, bassist Cecil McBee and drummer Ben Riley. The band's makeup, established American jazz players serving South African material, is itself the point.",

    "One track connects directly to events rather than atmospherically: \"Soweto\" was recorded in New York within hours of news that police had shot protestors. That's documented and specific, unlike the vaguer claims often made about political jazz. The wider record is less confrontational than that suggests — DownBeat filed it as \"post-bop kwela,\" and much of it is gentle, hymn-like and slow. The politics are in what the music refuses to stop being: Cape Town melodies, played in New York, by a man who could not go home.",
  ],

  listeningNotes: [
    {
      label: "Horns voiced as one instrument",
      text: "The saxophones and trombone move together in close harmony rather than trading solos, producing a thick, organ-like sound. It's an Ellington approach applied to South African tunes.",
    },
    {
      label: "Cape melodies underneath jazz harmony",
      text: "The tunes themselves draw on kwela and the hymn and marabi traditions of the townships — simple, repeating, singable — with jazz voicings built on top rather than replacing them.",
    },
    {
      label: "Ibrahim's sparse piano",
      text: "He plays relatively few notes, often just stating the melody with heavy left-hand chords. The restraint is deliberate; he leaves the elaboration to the horns.",
    },
    {
      label: "Slow, processional tempos",
      text: "Much of the album moves at a walking pace with a hymn-like feel, closer to a church service or a funeral march than to a bebop set.",
    },
    {
      label: "Repetition as structure",
      text: "Phrases cycle rather than develop, with intensity built by adding weight to the same figure. It's a device from South African township music, not from American jazz form.",
    },
  ],

  sources: [
    { title: "Abdullah Ibrahim — Wikipedia", url: "https://en.wikipedia.org/wiki/Abdullah_Ibrahim" },
    { title: "Abdullah Ibrahim and the Politics of Jazz in South Africa — South African History Online", url: "https://sahistory.org.za/article/abdullah-ibrahim-and-politics-jazz-south-africa" },
    { title: "Abdullah Ibrahim: Grace Under Pressure — JazzTimes", url: "https://www.jazztimes.com/features/profiles/abdullah-ibrahim-grace-under-pressure/" },
  ],

  influencedBy: [
    { artist: "Duke Ellington", album: "Ellington at Newport", year: "1956", note: "Ellington produced Ibrahim's first session and is the direct model for how the horn section is voiced here." },
    { artist: "Thelonious Monk", album: "Brilliant Corners", year: "1957", note: "The angular, economical piano approach — few notes, heavy chords — that Ibrahim adapts to Cape melodies." },
  ],

  influenced: [
    { artist: "Hugh Masekela", album: "Tomorrow", year: "1987", note: "Fellow exiled South African musician working the same territory of township melody in an international jazz frame." },
  ],
});
