import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Jethro Tull",
  album: "Aqualung",
  year: "1971",
  heading: "Aqualung — Jethro Tull (1971)",

  albumLine:
    "Released 19 March 1971 on Chrysalis in Europe and Reprise in North America, produced by Ian Anderson and Terry Ellis at Island's Basing Street studio in December 1970. Hard rock braided with English folk and a flute — their fourth album, and by a distance their biggest.",

  overview: [
    "The band here is Anderson singing, playing flute and acoustic guitar, Martin Barre on electric guitar, John Evan on keyboards, Jeffrey Hammond on bass for the first time and Clive Bunker on drums for the last — he left afterwards to start a family. The combination is odd on paper and the reason the record sounds like nothing else: heavy riffing from Barre, folk fingerpicking from Anderson, and a flute taking solos where a second guitar would be.",

    "It is almost universally described as a concept album about religion, and Anderson has spent fifty years denying it, insisting it is \"just an album of varied songs of varied instrumentation and intensity.\" The truth sits awkwardly between: the songs genuinely do circle one argument — that organised religion and actual spirituality are different things, and that the people the church claims to serve are the ones it steps over — but they were written as separate character sketches, several prompted by photographs his wife took of homeless men. Calling it a concept album overstates the design; calling it unrelated songs understates the obvious.",

    "That subject matter is the reason it landed as hard as it did. 1971 was not short of rock albums gesturing at the spiritual; very few of them were about vagrancy, prostitution and the hypocrisy of the institution, delivered by a man standing on one leg playing a flute. The combination of real anger and visible theatricality is what makes it durable and what has always made it an easy target.",

    "It reached No. 4 in Britain and No. 7 in America and has sold over seven million copies. Early reviews were mixed — the prog label was already becoming a stick to beat bands with — and the reassessment has been generous: PopMatters calls it \"a cornerstone of the then-nascent prog-rock canon\" while noting it stands up without the category.",
  ],

  listeningNotes: [
    {
      label: "Flute as a lead instrument",
      text: "Anderson plays it hard and breathy, overblowing and vocalising into the mouthpiece so it rasps rather than sweetens. It takes the solos a guitar would.",
    },
    {
      label: "Acoustic and electric alternating within songs",
      text: "Tracks switch between fingerpicked folk passages and full-volume riffing, often more than once, which is the album's basic structural move.",
    },
    {
      label: "Martin Barre's riffs",
      text: "Thick, blues-derived and precisely doubled, they anchor the heavy sections and give the folk material something to push against.",
    },
    {
      label: "Anderson's clipped, theatrical delivery",
      text: "He half-sings, half-spits the words with music-hall diction, putting the lyrics forward where a rock singer would ride the melody.",
    },
    {
      label: "Strings and keyboards used sparingly",
      text: "John Evan's piano and occasional orchestration appear only where the arrangement opens, which keeps a long album from thickening into mush.",
    },
  ],

  sources: [
    { title: "Aqualung (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Aqualung_(album)" },
    { title: "Jethro Tull (band) — Wikipedia", url: "https://en.wikipedia.org/wiki/Jethro_Tull_(band)" },
    { title: "Ian Anderson — Wikipedia", url: "https://en.wikipedia.org/wiki/Ian_Anderson" },
  ],

  influencedBy: [
    { artist: "Led Zeppelin", album: "Led Zeppelin III", year: "1970", note: "The immediate precedent for a heavy band interleaving full-volume riffs with English folk fingerpicking." },
    { artist: "The Beatles", album: "The White Album", year: "1968", note: "The licence for a rock album to move between music hall, folk and hard rock without apology." },
  ],

  influenced: [
    { artist: "Iron Maiden", album: "The Number Of The Beast", year: "1982", note: "Long multi-section songs with historical and religious subject matter, from a later generation of the same British tradition." },
    { artist: "Screaming Trees", album: "Dust", year: "1996", note: "A heavy band turning toward folk and acoustic writing without losing weight, with flute and sitar colouring the arrangements." },
  ],
});
