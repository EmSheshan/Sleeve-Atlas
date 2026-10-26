import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Sigur Rós",
  album: "Ágætis Byrjun",
  year: "1999",
  heading: "Ágætis Byrjun — Sigur Rós (1999)",

  albumLine:
    "Released 12 June 1999 on the Icelandic label Smekkleysa, produced by Ken Thomas. It's post-rock pulled toward dream pop and chamber music — bowed guitar, strings, brass, choir. The band's second album, after Von (1997), and the one that took them out of Iceland.",

  overview: [
    "It was made in Reykjavík studios between August 1998 and April 1999, at night, because night rates were cheap. All four had day jobs: singer and guitarist Jón Þór \"Jónsi\" Birgisson worked at his father's smithy, bassist Georg Hólm at a television station, and keyboardist Kjartan Sveinsson was a kindergarten teacher who mixed overnight and turned up to work at eight. Tape was expensive and reels held around fifteen minutes, so takes were recorded over rather than kept. Sveinsson, on his first album with the band, remembers the confidence rather than the constraints — \"the world is ours\" — and remembers the room mattering: a new SSL desk, the first proper one in the country, where \"you had never heard sound like that in Iceland.\"",

    "Post-rock at that point largely meant long instrumentals and a suspicion of singing. This record put a voice at the front and built most of it on verse-and-chorus shapes, which is part of why it travelled; Treble noted these sounded like pop songs next to what other post-rock bands were recording. The language was the other half. Birgisson sings mostly in Icelandic, and elsewhere in Vonlenska — a made-up language of vowel sounds, later used exclusively on the follow-up — so the record arrives with nothing to translate. The outside world leaks in once: one title was lifted from a radio bulletin that ran the weather forecast straight into news of the NATO bombing of Yugoslavia, a campaign still underway as the album was finished.",

    "Nothing about the release was engineered. Smekkleysa paid for it, it hit No. 1 in Iceland that autumn, and reached Britain over a year later and America nine months after that — carried by word of mouth and support slots with Godspeed You! Black Emperor and, in 2000, Radiohead. Three songs turned up in Vanilla Sky in 2001, the year it won the inaugural Shortlist Music Prize. Pitchfork later placed it eighth among albums of the 2000s, Rolling Stone twenty-ninth.",
  ],

  listeningNotes: [
    {
      label: "The cello-bowed guitar",
      text: "The drone that defines the opening came from drawing a cello bow across electric guitar strings, one at a time. Accounts differ on the particulars but agree the bow reached Birgisson after Hólm tried and failed with it on bass; Sveinsson says it suited him because \"Jónsi is a minimalist essentially in what he does.\"",
    },
    {
      label: "A broken amp's radar tone",
      text: "The submarine-like pulse under the opening is an organ's high E through a faulty amplifier. Sveinsson: \"The high 'E' that I play there came out like a radar.\" The band nicknamed the song after it.",
    },
    {
      label: "Tape-speed tricks",
      text: "Whole pieces were pitched by changing tape speed — one sped up a half step because it dragged, and the closing track is an earlier passage slowed to roughly a quarter speed. The intro is the title track backwards.",
    },
    {
      label: "Found percussion and workplace noise",
      text: "Rhythm in places is a fist hitting the ground and handfuls of grass being torn, caught on an old Coles microphone. Elsewhere: a saw from the smithy where Birgisson worked, a printing machine from drummer Ágúst Ævar Gunnarsson's job. The day jobs got into the record.",
    },
    {
      label: "Chamber scoring done on a fax machine",
      text: "Sveinsson's string and brass arrangements are what lift this above the band's first album, and they were produced under farcical conditions: bad notation software and no photocopier, so parts were faxed to players who had already been kept waiting an hour.",
    },
    {
      label: "Vonlenska",
      text: "The invented vowel language the band call Hopelandic appears here for the first time. It doesn't sit over words — it replaces them, and points directly at the next album, sung in it from end to end.",
    },
  ],

  sources: [
    { title: "Ágætis byrjun — Sigur Rós official website (track-by-track notes)", url: "https://sigurros.com/music/agaetis-byrjun/" },
    { title: "Kjartan Sveinsson of Sigur Rós on 'Ágætis byrjun' — Life of the Record (notes and transcript)", url: "https://lifeoftherecord.com/sigur-ros-notes" },
    { title: "Sigur Rós' Former Keyboardist Tells the Story of Their Breakthrough Album, 20 Years Later — Paste", url: "https://www.pastemagazine.com/music/sigur-ros/sigur-ros-agaetis-byrjun-20th-anniversary" },
    { title: "Sigur Rós: Ágætis byrjun — A new beginning — Treble", url: "https://www.treblezine.com/sigur-ros-agaetis-byrjun-20th-anniversary-hall-of-fame/" },
    { title: "Ágætis byrjun — Wikipedia", url: "https://en.wikipedia.org/wiki/%C3%81g%C3%A6tis_byrjun" },
  ],

  influencedBy: [
    { artist: "Nirvana", album: "Nevermind", year: "1991", note: "Sveinsson has said one of this album's riffs came out of the band messing about with a Nirvana bass line — an unlikely root for a song that ends in brass and a choir." },
    { artist: "Stina Nordenstam", album: "And She Closed Her Eyes", year: "1994", note: "Her hushed, close-miked delivery sitting inside sparse arrangements shaped Birgisson's vocal approach; the band nicknamed one song after her while writing it." },
  ],

  influenced: [],
});
