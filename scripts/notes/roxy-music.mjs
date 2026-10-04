import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Roxy Music",
  album: "Roxy Music",
  year: "1972",
  heading: "Roxy Music — Roxy Music (1972)",

  albumLine:
    "Released 16 June 1972 on Island, produced by Peter Sinfield and recorded in a fortnight at Command Studios in London that March. Glam rock built by art students — their debut, paid for by their own managers before any label would sign them.",

  overview: [
    "The £5,000 came from the band's management, who financed the sessions on spec. That detail explains a lot: nobody commissioned this, and it does not sound like anything a label would have asked for. Bryan Ferry sang and played keyboards, Andy Mackay played oboe and saxophone, Phil Manzanera guitar, Paul Thompson drums, Graham Simpson bass — and Brian Eno, who was not a musician in any conventional sense, handled synthesizer and tape.",

    "Eno's role is the strangest and most consequential thing on it. He often worked the mixing desk rather than an instrument, running the others' playing through a VCS3 and tape manipulation in real time, which makes him something closer to a live processor than a keyboard player. That idea — that treating other people's sound could itself be a performance — is one he spent the next fifty years developing, and it starts here.",

    "The frame around it is knowingly second-hand. The record is full of old films and older glamour: a Humphrey Bogart tribute, a song taking its cue from \"Brief Encounter,\" and Karl Stoecker's sleeve photograph of the model Kari-Ann Moller styled as a fifties pin-up. In 1972, when rock still largely believed in authenticity, building a band out of borrowed images was close to heretical — and it is the direct ancestor of everything art-school and self-conscious that followed.",

    "It reached No. 10 in Britain. Robert Christgau's verdict caught the split reaction, granting it \"enough weird hooks to earn an A for side one\" while complaining about the synthesizers on side two. Rolling Stone later placed it 62nd among the greatest debut albums. Eno left after the second record, and both careers — his and the band's — are unimaginable without these two weeks.",
  ],

  listeningNotes: [
    {
      label: "Eno treating the band live",
      text: "Synthesizer and tape are used to process the others as they play, so a saxophone or guitar suddenly warps mid-phrase. He is mixing, not accompanying.",
    },
    {
      label: "Oboe in a rock band",
      text: "Mackay plays oboe as often as saxophone, a reedy classical tone that nothing else in 1972 rock was using.",
    },
    {
      label: "Ferry's affected croon",
      text: "He sings with an exaggerated vibrato and clipped diction, somewhere between a lounge singer and a parody of one, and never breaks character.",
    },
    {
      label: "Songs that lurch between styles",
      text: "Tracks change idiom mid-way — doo-wop into free noise, ballad into stomp — with no transition offered.",
    },
    {
      label: "Quotation as a method",
      text: "The opening track drops in fragments of other music, from the Beatles to Wagner, as deliberate citations rather than influences absorbed.",
    },
    {
      label: "Recorded fast and rough",
      text: "Two weeks start to finish, and the playing has the raggedness of a band still working out what it is, which the arrangements turn into an asset.",
    },
  ],

  sources: [
    { title: "Roxy Music (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Roxy_Music_(album)" },
    { title: "Roxy Music — Wikipedia", url: "https://en.wikipedia.org/wiki/Roxy_Music" },
    { title: "Brian Eno — Wikipedia", url: "https://en.wikipedia.org/wiki/Brian_Eno" },
  ],

  influencedBy: [
    { artist: "The Velvet Underground", album: "The Velvet Underground & Nico", year: "1967", note: "The precedent for an art-world project operating as a rock band, with noise and deadpan pose as legitimate material." },
    { artist: "The Beatles", album: "Sgt. Pepper's Lonely Hearts Club Band", year: "1967", note: "Quoted directly on the opening track, and the model for a band adopting a costume and a persona wholesale." },
  ],

  influenced: [
    { artist: "David Bowie", album: "\"Heroes\"", year: "1977", note: "Eno went on to co-make the Berlin records, taking the treat-the-band-live method with him." },
    { artist: "Talking Heads", album: "Remain in Light", year: "1980", note: "Eno produced it; the idea of the producer as a processing instrument rather than a recordist starts with his Roxy role." },
    { artist: "Soft Cell", album: "Non-Stop Erotic Cabaret", year: "1981", note: "Synth-pop's arch, theatrical, deliberately artificial wing descends from Ferry's refusal of authenticity." },
  ],
});
