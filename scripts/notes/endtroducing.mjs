import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "DJ Shadow",
  album: "Endtroducing.....",
  year: "1996",
  heading: "Endtroducing..... — DJ Shadow (1996)",

  albumLine:
    "Released in September 1996 on Mo' Wax and produced, engineered and mixed by Josh Davis, who records as DJ Shadow. It's instrumental, downtempo hip-hop assembled from samples, and it's his debut album.",

  overview: [
    "Davis grew up outside Sacramento and got his first turntables in 1987, aged 15. Writer Tom Doyle of Sound On Sound reports that the key shop was Rare Records in Sacramento, whose owner let him into the basement only after \"a good five years\" of visits. He bought an Akai MPC60 sampler in October 1992 and called learning it \"this endless fever dream of trying to get through the manual.\" Early mixes went to a Yamaha four-track cassette; in 1994 he added an Alesis ADAT tape recorder, using timecode on one track to bounce passes and adding scratches afterwards.",

    "The method was about subtraction. \"It was a reductive process of trying to strip everything down to only its most important elements,\" Davis told Doyle. Samples went through the MPC to tape, and memory was so small that he chopped breaks into roughly nine slices and rebuilt them into new patterns. He told Keyboard in 1997, \"I never use reissues or bootlegs or compilations. I didn't use any CDs on the album.\" Drum sounds were sequenced to fade in and out rather than hit hard on the beat. He mixed at producer Dan Nakamura's Glue Factory studio in San Francisco: \"I didn't know how to bus anything.\" He told Clash writer Richard Bowes it took around two years, in stretches — \"I would have two months to work on it and then I'd get called away for two months.\"",

    "The album is in the book 1001 Albums You Must Hear Before You Die, per Wikipedia, and Rolling Stone ranked it 329th on its 2020 list. Critic David Bennun of The Guardian called it \"not only one of the most daring and original albums of recent times\"; critic Will Hermes of Spin called it \"trip-hop's crowning achievement.\" Sound On Sound says it entered the Guinness Book of Records in 2001 as the first completely sampled album; Davis's own claim is more modest — it was his intention to make it \"entirely sample-based,\" and he was unaware at the time that it was a first. One source conflicts on the kit: Red Bull Music Academy says a borrowed Pro Tools rig, while Keyboard, Tape Op and Wikipedia say ADAT. Critic Andy Battaglia of the A.V. Club offers the counterpoint that its influence \"has been partially diluted by the symphonic beat-collage culture it helped spawn.\"",
  ],

  listeningNotes: [
    {
      label: "Stripping loops back to essentials",
      text: "Davis resampled to mono to save memory and kept only a few clean kicks, snares and hats. On \"Midnight in a Perfect World\" he spent three or four hours just on the drum beat.",
    },
    {
      label: "Sources from far outside hip-hop",
      text: "Doyle names the sources of \"Midnight in a Perfect World\": a slowed break from Rotary Connection, a piano figure from composer David Axelrod's Songs of Experience, phased Fender Rhodes chords from musician Pekka Pohjola, flute-like strings from composer Meredith Monk's Dolmen Music, a vocal from the group Baraka found in a 50-cent bin, and a one-word loop from rapper Akinyele.",
    },
    {
      label: "Piano and choir under a drum barrage",
      text: "uDiscover writer Jim Bell hears classical piano and choral singing under heavy drums on \"Building Steam With a Grain of Salt,\" which he calls a \"haunting, war-torn atmosphere.\"",
    },
    {
      label: "Film clips and segues",
      text: "Bell notes that film clips drift in and out and tracks segue, so the album feels like one continuous piece rather than a collection of beats.",
    },
    {
      label: "Scratching added afterwards",
      text: "Doyle says \"The Number Song\" was built on the MPC and scratches were added later, so the turntable work sits on top of the sampled beat rather than being part of it.",
    },
  ],

  sources: [
    { title: "Classic Tracks: DJ Shadow 'Midnight In A Perfect World' — Sound On Sound (Tom Doyle, 2017)", url: "https://www.soundonsound.com/techniques/classic-tracks-dj-shadow-midnight-perfect-world" },
    { title: "DJ Shadow interview — Keyboard (October 1997)", url: "https://www.solesides.com/dj-shadow-mdj-shadow-keyboard-october-1997.html" },
    { title: "DJ Shadow On 30 Years Of 'Endtroducing' — Clash (Richard Bowes, 2026)", url: "https://www.clashmusic.com/features/dj-shadow-on-30-years-of-endtroducing/" },
    { title: "The Vinyl-Hunting Exploits of DJ Shadow — Red Bull Music Academy Daily (Bill Brewster, 2018)", url: "https://daily.redbullmusicacademy.com/2018/04/dj-shadow-interview" },
    { title: "Endtroducing..... — Wikipedia", url: "https://en.wikipedia.org/wiki/Endtroducing....." },
  ],

  influencedBy: [
    { artist: "David Axelrod", album: "Songs of Experience", year: "1969", note: "Sound On Sound identifies a piano figure from this album as the main hook of one of Davis's best-known pieces." },
    { artist: "Public Enemy", album: "It Takes a Nation of Millions to Hold Us Back", year: "1988", note: "Wikipedia, citing Keyboard (1997), says the sample-based work behind this album was inspired by it; Davis told Clash, \"I always use Public Enemy as the perfect example of conveying emotion through sampling.\"" },
    { artist: "Meredith Monk", album: "Dolmen Music", year: "1981", note: "Sound On Sound names this album as the source of the flute-like strings in one of Davis's best-known pieces." },
    { artist: "Baraka", album: "Love Is As Open As Your Heart", year: "1976", note: "Sound On Sound says the vocal carrying the main melody of one piece was sampled from this album, found in a 50-cent bin." },
  ],

  influenced: [
    { artist: "Radiohead", album: "OK Computer", year: "1997", note: "Guitarist Jonny Greenwood said the band's opening track was a case of \"Let's make it sound like DJ Shadow\"; Wikipedia, citing Guitar World, says this album inspired them to edit and loop drums on OK Computer." },
  ],
});
