import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Boston",
  album: "Boston",
  year: "1976",
  heading: "Boston — Boston (1976)",

  albumLine:
    "Released in late August 1976 on Epic and produced by guitarist and engineer Tom Scholz with producer John Boylan. It's arena rock built from layered guitars and stacked harmony vocals, and it's Boston's debut — assembled, in large part, before the band properly existed.",

  overview: [
    "By 1976 American FM rock radio was being squeezed from both sides, disco on one flank and punk arriving on the other, and this record landed in the gap sounding like nothing in a club and everything like a stadium. It wasn't made that way. Scholz was an MIT-trained mechanical engineer with more than a dozen patents from his day job designing products at Polaroid, and he built most of the album in the basement of his house in Watertown, Massachusetts, on recorders and effects he had designed or modified himself.",

    "The demos came first, in 1974, with Scholz playing everything but drums and singer Brad Delp on vocals. Epic turned the tape down, then signed the band in 1975 after promoters Charlie McKenzie and Paul Ahern got it back in front of the label. Epic wanted a proper Los Angeles studio; Scholz refused. Boylan, sent east to supervise, made a handshake deal to co-produce and split royalties, then spent much of the project shielding the basement arrangement from his own employer — including flying Delp, guitarist Barry Goudreau, bassist Fran Sheehan and drummer Sib Hashian to Los Angeles so it would look as though a band had recorded there. Scholz has said the album is mostly the work of himself, Delp and drummer Jim Masdea, who plays on one song while Hashian replays his parts elsewhere.",

    "Critics heard the slickness and distrusted it: a Los Angeles Times writer called it the apotheosis of corporate rock, a phrase that stuck to the band for decades, and the Best New Artist Grammy went to Starland Vocal Band. Listeners disagreed on a scale nobody predicted — gold within two months, a million copies by Thanksgiving, over seventeen million in the US, and the biggest-selling American debut to that point. Sources no longer agree where it now ranks among debuts, second or third. Its influence runs two ways. The guitar sound reappears in the massed overdubs of nineties alternative rock, and the method — one person, a basement, a record that sounded like a budget — anticipated how most music would eventually get made.",
  ],

  listeningNotes: [
    {
      label: "Double-tracked guitars panned hard apart",
      text: "Engineer Steve Hulse at Natural Sound Studios showed Scholz how to play a part twice and push the two takes to opposite sides of the stereo field. Repeated across layers, that one trick is most of what people mean by the Boston sound.",
    },
    {
      label: "The power soak",
      text: "A basement can't hold a cranked 100-watt Marshall, so Scholz built a heat-sink attenuator that let the amp distort fully while staying quiet in the room. The overdriven tone here is a loud amp heard at living-room volume.",
    },
    {
      label: "Harmonised lead lines",
      text: "Scholz credits Todd Rundgren as the first musician he heard putting lead guitars in harmony with each other. He built it into the solos — two or three lines moving in parallel rather than one out front.",
    },
    {
      label: "A wah pedal used as an EQ",
      text: "Rather than rocking it, Scholz parked the pedal in a fixed position to push the midrange, then added an Eventide Harmonizer for pitch-shifted doubling and a homemade tape echo with its own pedal for feedback and sustain.",
    },
    {
      label: "Vocals stacked by one singer",
      text: "Delp's leads and harmonies were cut at Capitol Studios in Hollywood onto instrumental tracks Scholz had already finished and mailed over, with no band in the room. Scholz later called him the best male studio singer he had ever heard.",
    },
    {
      label: "Organ buried under the riffs",
      text: "Scholz played the keyboards as well as the guitars and bass, and there's organ sitting beneath the guitar beds adding weight without ever reading as a keyboard part.",
    },
  ],

  sources: [
    { title: "Boston (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Boston_(album)" },
    {
      title: "He was an MIT grad with dreams of stardom. His 1976 debut album with Boston resuscitated rock music. — The Boston Globe",
      url: "https://www.bostonglobe.com/2026/09/16/magazine/boston-debut-album/",
    },
    {
      title: "How the Legendary Rock Band Boston Recorded Their Debut Album in a Basement in the 1970s — Songfacts",
      url: "https://www.songfacts.com/articles/how-the-legendary-rock-band-boston-recorded-their-debut-album-in-a-basement-in-the-1970s/",
    },
    {
      title: "\"I've spent six months making a recording of a song that I've thrown out\" — Tom Scholz on the secrets of Boston's first album, Louder",
      url: "https://www.loudersound.com/features/boston-tom-scholz-first-album-interview",
    },
    { title: "Boston — AllMusic review", url: "https://www.allmusic.com/album/boston-mw0000189319" },
  ],

  influencedBy: [
    {
      artist: "Todd Rundgren",
      album: "Something/Anything?",
      year: "1972",
      note: "Scholz names singer and multi-instrumentalist Todd Rundgren as the first player he heard harmonising lead guitars against each other — the device that defines Boston's solos. Rundgren also played nearly everything himself, which is how this album was built.",
    },
    {
      artist: "Led Zeppelin",
      album: "Led Zeppelin II",
      year: "1969",
      note: "Scholz cites guitarist Jimmy Page as an influence; the overdubbed guitar army, where one player becomes a wall, is the technique he took furthest.",
    },
    {
      artist: "James Gang",
      album: "Rides Again",
      year: "1970",
      note: "Scholz singles out guitarist Joe Walsh's James Gang work specifically — thick, melodic riff guitar carrying a whole arrangement rather than decorating one.",
    },
  ],

  influenced: [
    {
      artist: "The Smashing Pumpkins",
      album: "Siamese Dream",
      year: "1993",
      note: "Boston's obsessively massed guitar overdubs were an acknowledged reference point for this album's sound; singer and guitarist Billy Corgan has also pointed at Boston's chord movement directly.",
    },
    {
      artist: "Nirvana",
      album: "Nevermind",
      year: "1991",
      note: "Singer Kurt Cobain said his most famous riff was \"so close to a Boston riff\" and the band quoted Boston onstage at Reading in 1992, though the musicologist Rikky Rooksby notes the two songs' chord progressions differ — the resemblance is in the guitar's shape and tone, not the harmony.",
    },
  ],
});
