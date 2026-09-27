import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Björk",
  album: "Debut",
  year: "1993",
  heading: "Debut — Björk (1993)",

  albumLine:
    "Released 5 July 1993 on One Little Indian in Britain and Elektra in America, produced by Björk with Nellee Hooper. It's electronic pop crossed with house, trip-hop and jazz — the record that turned an Icelandic indie singer into a solo artist with no obvious peers.",

  overview: [
    "The title is a small lie. She had released an album in Iceland in December 1977, aged eleven, and had fronted the Sugarcubes through the late eighties; that record is excluded from her official discography, so this counts as the first. What is true is that it was a restart. The Sugarcubes had broken up, she had moved to London, and she chose as collaborator Nellee Hooper of Soul II Soul — a dance producer, not an indie one.",

    "That choice was the argument. Her reasoning was blunt: she felt \"house music was the only pop music that [was] truly modern\" at the time. In 1993 British guitar bands were the respectable option and dance music was widely treated as disposable, so an alternative-rock singer building an album on four-on-the-floor grooves read as a defection. She then complicated it further by importing instruments nobody was using in either camp — Talvin Singh's tabla, Corky Hale's jazz harp, saxophone arrangements by Oliver Lake — and by including a standard from 1944 sung almost straight.",

    "The other governing decision was informality. One track was recorded live in the toilets of the Milk Bar, a London club, and left that way; the album generally prefers a take that captures something over a take that is clean. Michael Cragg later described the result as an \"indefinable conflation of electronic pop, trip-hop, world music and otherworldly lyrics,\" which is accurate and also an admission that the category does not exist.",

    "One Little Indian had projected 40,000 copies. It sold over 600,000 in three months, reached No. 3 in Britain and No. 61 in America, and remains her best-selling record. British critics were immediate — NME made it their album of the year — while America was slower and more suspicious; Rolling Stone gave it two stars. The long consequence is that a generation of pop singers took it as permission to work with electronic producers and to sing in their own accent about odd things, and the wall between dance production and songwriting never really went back up.",
  ],

  listeningNotes: [
    {
      label: "House beats under pop songs",
      text: "Straight four-on-the-floor kick patterns and club-length grooves carry material that is otherwise structured like songwriting, not like dance tracks.",
    },
    {
      label: "Her voice at both extremes",
      text: "She moves between a small confiding murmur and a full open-throated shout, often inside one line, with the rolled consonants of Icelandic English left intact.",
    },
    {
      label: "Acoustic instruments used as colour",
      text: "Tabla, jazz harp and saxophone appear in arrangements otherwise made of samplers and drum machines, each for a few bars and then gone.",
    },
    {
      label: "A 1940s standard in the middle of it",
      text: "\"Like Someone in Love\" is sung over harp alone, which resets the album's register entirely and makes the surrounding electronics sound like a choice rather than a default.",
    },
    {
      label: "One track recorded in a nightclub toilet",
      text: "It was captured live in the lavatories of the Milk Bar in London, and the boom, the tiles and the crowd noise are all audible. The lo-fi intrusion is deliberate.",
    },
    {
      label: "Strings written against the beat",
      text: "Orchestral lines enter in sweeping phrases that cut across the programmed rhythm rather than sitting on it, a tension she went on to build whole albums from.",
    },
  ],

  sources: [
    { title: "Debut (Björk album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Debut_(Bj%C3%B6rk_album)" },
    { title: "Björk (1977 album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Bj%C3%B6rk_(album)" },
    { title: "There's More to Life Than This (Recorded Live at the Milk Bar Toilets) — Björk on Bandcamp", url: "https://bjork.bandcamp.com/track/theres-more-to-life-than-this-recorded-live-at-the-milk-bar-toilets" },
  ],

  influencedBy: [
    { artist: "Soul II Soul", album: "Club Classics Vol. One", year: "1989", note: "Nellee Hooper produced it; the warm, mid-tempo British dance production he brought is the album's spine." },
    { artist: "Kate Bush", album: "Hounds of Love", year: "1985", note: "The precedent for a woman running her own studio, singing in an unguarded and unconventional voice, and treating pop as a place for strangeness." },
  ],

  influenced: [
    { artist: "Portishead", album: "Dummy", year: "1994", note: "Released a year later out of the same Bristol-adjacent production world; the pairing of a singular female voice with downtempo beats and jazz instrumentation is shared ground." },
    { artist: "Radiohead", album: "Kid A", year: "2000", note: "A guitar-scene act rebuilding itself around electronic production and unresolved arrangements, following a path she opened." },
    { artist: "FKA twigs", album: "LP1", year: "2014", note: "The model of a singer as auteur, commissioning producers and visual artists to realise a wholly personal sound world." },
  ],
});
