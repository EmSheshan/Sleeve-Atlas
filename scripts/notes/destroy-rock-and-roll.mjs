import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Mylo",
  album: "Destroy Rock & Roll",
  year: "2004",
  heading: "Destroy Rock & Roll — Mylo (2004)",

  albumLine:
    "Released 24 May 2004 on Breastfed, the Glasgow label co-founded by Myles MacInnes, who records as Mylo, and produced by him. It's electro-pop and house built from loops and soft-rock samples, and it's his debut and only studio album.",

  overview: [
    "MacInnes started around 2001, aged 22, on a £350 computer with a six-gigabyte hard drive and a free eight-track version of Pro Tools. He told writer Tom Doyle of Sound On Sound that his first demos used drums from ReBirth and keyboard sounds from Absynth. The idea that set everything going came in 2002, when a friend played him a spoken-word clip of a preacher attacking 80s pop; he laid it over a four-on-the-floor beat. Sources disagree on the speaker: Wikipedia says a fundamentalist sermon he heard while working as a BBC journalist, while PopMatters describes a conservative politician.",

    "His first finished track sampled Toto, and the clearance never came, so he co-founded Breastfed instead. With the label's early money he bought a G4 for about £1,200 and moved to Pro Tools LE, which gave him 24 tracks instead of eight. Most of the album was then built inside the computer: keyboard parts, drums and basslines made as loops in Reason and recorded into Pro Tools, with drum sounds chopped from sample CDs in Recycle and then pushed through distortion and compression. Copyright holders usually asked for half the publishing, and where they did, some parts were replayed rather than sampled — a Juno synth part was cheaper. Engineer Kevin Kennedy mixed on NS10 monitors, often stripping out compression Mylo had added. For the 2006 US release, XLR8R writer Ken Taylor reports, some samples had to be flat-out re-recorded to skirt US copyright law.",

    "It's in the book 1001 Albums You Must Hear Before You Die (2010 edition, per Wikipedia), and Resident Advisor ranked it 21st among the albums of the 2000s. Critic Will Hermes of Spin called the sound \"the melodic boing-boing of synth pop,\" while Guardian critic Dave Simpson was unmoved: \"rock'n'roll faces a greater threat from a feather duster.\" Singer Elton John said on a TV chat show that \"every home should own a copy.\"",
  ],

  listeningNotes: [
    {
      label: "A vocoder joke at the centre",
      text: "\"Drop the Pressure\" is a speech loop fed through a vocoder — \"just me with a microphone\" — which Mylo called \"quite an unsubtle pisstake of vocoder music.\" The sound is cheap on purpose, and that's why it works.",
    },
    {
      label: "Soft rock on a house pulse",
      text: "\"In My Arms\" pairs singer Kim Carnes's hit with a Boy Meets Girl song, one of them replayed on a Juno. Familiar radio melodies sit over a club beat, which is the album's whole idea in one track.",
    },
    {
      label: "One loop cut into 25 parts",
      text: "On \"Rikki\" Mylo chopped a three-second loop into many hits and mapped them across a MIDI keyboard — \"by the end I had 25 constituent parts.\" Listen for how a single phrase becomes a whole arrangement.",
    },
    {
      label: "The preacher as lead voice",
      text: "The title song builds around the spoken sample over a four-on-the-floor beat. In the UK edition it's the original recording; the US edition replaced it with a replay.",
    },
    {
      label: "A glossy, gaudy finish",
      text: "Critic Richard Foster of Incendiary Mag hears \"a brilliant 'Klaus Dinger was a robot' drum beat\" and a \"fabulously glossy, Eurotrash, high eighties feel\" on \"Musclecar Reform Reprise.\"",
    },
  ],

  sources: [
    { title: "Mylo: Producing Destroy Rock & Roll — Sound On Sound (Tom Doyle, 2005)", url: "https://www.soundonsound.com/people/mylo" },
    { title: "Destroy Rock & Roll — Wikipedia", url: "https://en.wikipedia.org/wiki/Destroy_Rock_%26_Roll" },
    { title: "Mylo, Destroy Rock & Roll — XLR8R (Ken Taylor, 2006)", url: "https://xlr8r.com/?p=114125" },
    { title: "Diplo / Mylo reviews — Spin (Will Hermes, 2005)", url: "https://www.spinmagazine.com/2005/12/diplo-fabriclive-24-fabric-mylo-destroy-rock-and-roll-breastfed/" },
    { title: "Mylo: Destroy Rock & Roll — Incendiary Mag (Richard Foster, 2004)", url: "https://incendiarymag.com/wordpress/?p=57" },
    { title: "Mylo: Destroy Rock & Roll — PopMatters (Dan Raper, 2006)", url: "https://www.popmatters.com/mylo_destroy_rock_roll-2495674945.html" },
  ],

  influencedBy: [
    { artist: "Judie Tzuke", album: "Welcome to the Cruise", year: "1979", note: "Her song is sampled directly; Mylo told Sound On Sound he particularly loves its string break." },
    { artist: "Kim Carnes", album: "Mistaken Identity", year: "1981", note: "Her hit is replayed on a Juno synth and combined with a Boy Meets Girl song, per Wikipedia citing Sound On Sound." },
    { artist: "Boy Meets Girl", album: "Reel Life", year: "1988", note: "Their lead single from this album is the other half of the main sample; Mylo told Sound On Sound the two records are \"both cheesy pop records really.\"" },
    { artist: "George Duke", album: "Night After Night", year: "1989", note: "Sampled directly: the funk track Mylo builds one of the album's hooks on." },
    { artist: "Prince", album: "Parade", year: "1986", note: "Sampled directly: a brief vocal grunt from the album's single is worked into the same track." },
  ],

  influenced: [],
});
