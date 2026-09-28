import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Nirvana",
  album: "In Utero",
  year: "1993",
  heading: "In Utero — Nirvana (1993)",

  albumLine:
    "Released 13 September 1993 in Britain and 21 September in America on DGC, produced by Steve Albini across two weeks at Pachyderm Studio in Cannon Falls, Minnesota, that February. It's abrasive, dry-sounding alternative rock — their third and last studio album, made to be the opposite of the one that made them famous.",

  overview: [
    "\"Nevermind\" had sold in numbers nobody involved wanted or expected, and the follow-up is audibly a reply to that. Kurt Cobain on guitar and vocals, Krist Novoselic on bass and Dave Grohl on drums hired Steve Albini, an engineer known for documenting bands as they sound in a room rather than sculpting them, and recorded the whole thing in a fortnight. Cobain's own framing was less absolute than the legend suggests — he told Rolling Stone it would be \"more raw with some songs and more candy pop on some of the others,\" which is exactly what it is.",

    "Albini's terms are part of the story. He took a flat $100,000 and refused royalties that would likely have been worth half a million, on principle: he didn't take points on records, from Nirvana or anyone. That stance, and the recording method that went with it — few overdubs, ambient room mics, first takes kept — is why the album sounds like four walls and three people.",

    "Then the argument started. Rumours spread that DGC might not release it, and a Newsweek piece by Jeff Giles framed the band as being strong-armed by their label; the band wrote back publicly, saying Giles \"ridiculed our relationship with our label based on totally erroneous information.\" Cobain's stated position was flatly unrepentant: \"I should just re-record this record and do the same thing we did last year because we sold out last year — there's no reason to try and redeem ourselves as artists at this point.\" What actually happened was a compromise — Scott Litt remixed two tracks, \"Heart-Shaped Box\" and \"All Apologies,\" to make them work on radio, and the rest stood.",

    "The commercial worry turned out to be unfounded. It entered the Billboard 200 at No. 1 with 180,000 copies, has gone six times platinum in America and sold around fifteen million worldwide. Early reviews were mixed, with a strand of opinion holding it inferior to \"Nevermind\"; that has comprehensively reversed, and Pitchfork now give it 10 out of 10. Cobain died in April 1994, seven months after release, which makes the album both the band's last statement and a record that people find very hard to hear as just a record.",
  ],

  listeningNotes: [
    {
      label: "Drums recorded as a room, not a kit",
      text: "Albini mic'd the space as much as the instrument, so Grohl's playing arrives huge, live and slightly distant. It's the single most recognisable thing about the production.",
    },
    {
      label: "Guitars left dry and untidy",
      text: "Almost no overdub layering and very little reverb, with string noise, feedback and mistuning left in. Where the previous album was polished, this one is deliberately unfinished.",
    },
    {
      label: "Cobain's voice shredded",
      text: "He moves from a flat murmur to a full-throat scream, often inside a phrase, and Albini kept the first takes rather than hunting for a clean one.",
    },
    {
      label: "Two tracks that sound different",
      text: "\"Heart-Shaped Box\" and \"All Apologies\" were remixed by Scott Litt and sit brighter and more centred than everything around them. Once you hear the seam you can't unhear it.",
    },
    {
      label: "Cello on a grunge record",
      text: "Kera Schaley plays cello on a couple of tracks, a sombre acoustic colour that cuts against the noise and points at where Cobain's writing was going.",
    },
    {
      label: "Songs that collapse on purpose",
      text: "Several end in atonal noise, runaway feedback or an abrupt stop rather than a resolution, refusing the clean fade a hit record is supposed to have.",
    },
  ],

  sources: [
    { title: "In Utero — Wikipedia", url: "https://en.wikipedia.org/wiki/In_Utero" },
    { title: "Steve Albini on working with Nirvana on In Utero — MusicRadar", url: "https://www.musicradar.com/news/nirvana-in-utero-steve-albini" },
    { title: "Inside the making of Nirvana's In Utero — MOJO", url: "https://www.mojo4music.com/articles/stories/inside-the-making-of-nirvanas-in-utero/" },
  ],

  influencedBy: [
    { artist: "Pixies", album: "Surfer Rosa", year: "1988", note: "Albini engineered it, and its dry, room-mic'd drum sound is precisely what Nirvana hired him to reproduce." },
    { artist: "The Breeders", album: "Pod", year: "1990", note: "Cobain repeatedly named it a favourite; another Albini recording, and a model for songs that stay ragged." },
    { artist: "John Lennon", album: "John Lennon/Plastic Ono Band", year: "1970", note: "Cobain listed it among his favourite albums — screamed self-laceration over minimal rock instrumentation." },
  ],

  influenced: [
    { artist: "Foo Fighters", album: "Foo Fighters", year: "1995", note: "Grohl's own band began within two years of this, carrying the same dry, live-band recording instincts." },
    { artist: "Death Grips", album: "The Money Store", year: "2012", note: "The lineage of a commercially successful act deliberately making its follow-up hostile to the audience it just won." },
  ],
});
