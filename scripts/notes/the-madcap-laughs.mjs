import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Syd Barrett",
  album: "The Madcap Laughs",
  year: "1970",
  heading: "The Madcap Laughs — Syd Barrett (1970)",

  albumLine:
    "Released 2 January 1970 on Harvest, assembled from sessions running from May 1968 to August 1969 under five different producers — Peter Jenner, Malcolm Jones, David Gilmour, Roger Waters and Barrett himself. His first solo album, made in the two years after Pink Floyd removed him.",

  overview: [
    "He had written most of Pink Floyd's first album and was, by general agreement, the reason anyone noticed them. By early 1968 his behaviour on stage had become impossible — long silences, detuned playing, not turning up mentally — and the band simply stopped collecting him for shows, bringing in David Gilmour. The usual shorthand blames LSD; the fuller picture involves mental illness that drugs may have precipitated but did not invent, and he withdrew from music altogether within a few years.",

    "The sessions were accordingly chaotic, which is why five people have production credits across fourteen months. Gilmour's recollection is sympathetic and tired at once: \"Syd was very difficult, we got that very frustrated feeling,\" while being clear that Barrett \"was in trouble, and was a close friend.\" Two of his former bandmates finishing the record that documents his unravelling is a fact the album never escapes.",

    "The production decision everyone argues about is what was left in. False starts, studio instructions, Barrett audibly losing his place and being talked back into the song — all kept rather than edited out. Defenders call it honest and intimate; the objection, which has not gone away, is that it exhibits a man who was unwell to an audience that paid to hear it. Both readings are available on the same takes, and the record is more uncomfortable than its gentle reputation suggests.",

    "It reached No. 40 in Britain and sold around 6,000 copies at first, not appearing in America until 1974. Robert Christgau found parts of it \"funny, charming, catchy\" while noting how much of the rest reflected Barrett's state. Its influence has been long and specific — David Bowie and John Frusciante among those who have named it — and it is the founding document of English psychedelic songwriting as something fragile rather than cosmic.",
  ],

  listeningNotes: [
    {
      label: "Takes left unrepaired",
      text: "False starts, miscounts and spoken direction stay in the finished record. Nothing is tidied, which is either the album's honesty or its problem.",
    },
    {
      label: "Voice and acoustic guitar, barely accompanied",
      text: "Much of it is one man playing alone, with the band overdubbed afterwards onto performances that don't always keep steady time.",
    },
    {
      label: "Melodies that wander out of key",
      text: "Lines resolve somewhere other than where the chords expect, giving the songs their unsettled, slightly wrong sweetness.",
    },
    {
      label: "Nursery-rhyme phrasing",
      text: "The writing uses childlike cadence and wordplay — Edward Lear by way of Cambridge — set against subject matter that is not childlike at all.",
    },
    {
      label: "Very dry recording",
      text: "Almost no reverb, the voice close and unflattered, so you hear breath and room rather than atmosphere.",
    },
  ],

  sources: [
    { title: "The Madcap Laughs — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Madcap_Laughs" },
    { title: "Syd Barrett — Wikipedia", url: "https://en.wikipedia.org/wiki/Syd_Barrett" },
    { title: "Pink Floyd — Wikipedia", url: "https://en.wikipedia.org/wiki/Pink_Floyd" },
  ],

  influencedBy: [
    { artist: "Bob Dylan", album: "Highway 61 Revisited", year: "1965", note: "The model for free-associative, image-driven lyric writing delivered conversationally over acoustic guitar." },
    { artist: "The Beatles", album: "Revolver", year: "1966", note: "English psychedelia's starting point, and the studio licence Barrett took much further and much more loosely." },
  ],

  influenced: [
    { artist: "David Bowie", album: "The Rise and Fall of Ziggy Stardust and the Spiders from Mars", year: "1972", note: "Bowie named Barrett an influence and covered him; the fragile, English, slightly deranged persona starts here." },
    { artist: "Pink Floyd", album: "Wish You Were Here", year: "1975", note: "His former band's album about his absence, written and recorded while he was still alive and unreachable." },
    { artist: "Spiritualized", album: "Lazer Guided Melodies", year: "1992", note: "The English tradition of narcotic, gentle, structurally loose psychedelia descends from this record." },
  ],
});
