import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "PJ Harvey",
  album: "Dry",
  year: "1992",
  heading: "Dry — PJ Harvey (1992)",

  albumLine:
    "Released 30 March 1992 on Too Pure, produced by Head, Rob Ellis and Harvey, and recorded at the Icehouse in Yeovil between September and December 1991. It's blues-rooted alternative rock played by a trio — her debut, and one of the loudest quiet-selling records of the decade.",

  overview: [
    "Polly Jean Harvey was born in Bridport in 1969 and grew up on a farm at Corscombe in Dorset, where her parents ran a quarrying business and fed her blues, Captain Beefheart and Bob Dylan; she took guitar lessons from the folk musician Steve Knightley. She formed the band in January 1991 after leaving Automatic Dlamini, and the album is played by three people — Harvey on vocals, guitar and violin, Steve Vaughan on bass, Rob Ellis on drums, harmonium and voice.",

    "The naming was deliberate. She called it the PJ Harvey Trio rather than inventing a band name, which let her write alone while playing as a group, and she has consistently refused the \"female singer-songwriter\" frame that 1992 was very keen to put her in. The record makes the refusal audible: it is loud, rhythmically blunt and built on blues forms, with no acoustic confessional register anywhere in it.",

    "What it is about is bodies and wanting, told without euphemism, and the title of its best-known single is the key to the whole thing. A sheela-na-gig is a medieval stone carving of a woman displaying her genitals, found on churches across Ireland and Britain — an image the culture built into its own walls and then found unmentionable. Songs that place female desire and disgust in the same line, in 1992, landed on an alternative-rock scene whose vocabulary for that was almost entirely male.",

    "Reviews were immediate and extreme. Entertainment Weekly graded it A+ and called it \"a scorching portrait of the dark side of the female psyche\"; NME gave it 9 out of 10 for its \"clever, repetitive, low-slung guitar poems\"; Pitchfork later described it as \"ripped with landsliding guitars, cowpunk mania, twisted blues.\" It reached No. 11 in Britain, Rolling Stone named her Songwriter of the Year, and Kurt Cobain listed it as his sixteenth-favourite album in the journals published after his death. Rolling Stone place it 70th among the best debut albums ever made.",
  ],

  listeningNotes: [
    {
      label: "Three instruments and nothing hidden",
      text: "Guitar, bass and drums recorded dry and close, with no overdub thickening. When the guitar stops there is simply a hole.",
    },
    {
      label: "Harvey's voice across its whole range",
      text: "She moves from a low contralto mutter to a full shriek inside a verse, and neither end is treated as the exception.",
    },
    {
      label: "Blues structures played hard",
      text: "Many tracks sit on repeating riff figures straight out of country blues, taken at rock volume with no swing softening them.",
    },
    {
      label: "Rob Ellis's backing vocals",
      text: "A man's voice answers hers on several choruses, which turns songs about being looked at into arguments with two sides.",
    },
    {
      label: "Violin and harmonium as intrusions",
      text: "Both appear sparingly and untreated, dragging a folk texture into the middle of a rock record.",
    },
    {
      label: "Silence used as structure",
      text: "Songs stop dead mid-phrase and restart. The gaps are as deliberate as the noise and are most of what makes the record feel threatening.",
    },
  ],

  sources: [
    { title: "Dry (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Dry_(album)" },
    { title: "PJ Harvey — Wikipedia", url: "https://en.wikipedia.org/wiki/PJ_Harvey" },
    { title: "Sheela na gig — Wikipedia", url: "https://en.wikipedia.org/wiki/Sheela_na_gig" },
  ],

  influencedBy: [
    { artist: "Captain Beefheart & His Magic Band", album: "Trout Mask Replica", year: "1969", note: "Played to her at home as a child; the blues broken into angular, unlovely shapes is the clearest inheritance." },
    { artist: "Patti Smith", album: "Horses", year: "1975", note: "The precedent for a woman fronting a rock band as a writer first, with no concession to how she was expected to sound." },
    { artist: "Pixies", album: "Surfer Rosa", year: "1988", note: "Loud-quiet dynamics and a trio recorded dry and close, the production register this record works in." },
  ],

  influenced: [
    { artist: "Fiona Apple", album: "Tidal", year: "1996", note: "The wave of women writing frankly about desire and anger without softening it for a rock audience." },
    { artist: "Yeah Yeah Yeahs", album: "Fever to Tell", year: "2003", note: "A woman fronting a small, loud, blues-descended band with the same refusal to be decorative." },
  ],
});
