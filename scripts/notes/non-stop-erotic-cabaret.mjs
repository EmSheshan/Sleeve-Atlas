import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Soft Cell",
  album: "Non-Stop Erotic Cabaret",
  year: "1981",
  heading: "Non-Stop Erotic Cabaret — Soft Cell (1981)",

  albumLine:
    "Released 27 November 1981 on Some Bizzare, produced by Mike Thorne and recorded across 1980 and 1981 in London and New York. It's synth-pop with a sleazy streak — the debut by a duo of Leeds art students who briefly became a global singles act.",

  overview: [
    "Marc Almond sang and David Ball played everything else, a two-man format that British synth-pop made viable at exactly this moment — cheap keyboards meant you no longer needed a band. What separated Soft Cell from their contemporaries was tone. Where much early-eighties electronic pop aimed at cool futurism, this record is warm, grubby and theatrical, concerned with bedsits, cheap nightclubs, sex for money and the specific seediness of Soho.",

    "Almond has since described the album as a narrative: a protagonist escaping suburbia into London's underworld and eventually going home again. Neil Tennant of the Pet Shop Boys identified the form as essentially musical theatre, which is accurate — Almond sings in character, with the projection and diction of a stage performer rather than a pop singer.",

    "Their technical advantage was borrowed. Producer Mike Thorne owned a Synclavier, a digital synthesizer and sampler then costing around £120,000 — unreachable for a band on an indie label. Ball has been direct about what that meant: \"That was our technological advantage over the other synth bands at the time.\"",

    "The hit was a cover. \"Tainted Love\" had been a 1964 northern soul B-side by Gloria Jones; Soft Cell slowed it, stripped it to a two-note synth hook and a clipped percussive tick, and turned it into the second best-selling British single of 1981 and a No. 1 around the world. It generated over 200,000 US advance orders for the album, which reached No. 5 in the UK and No. 22 in the US and went platinum in Britain. Two more UK top-five singles followed. The duo never had anything like that reach again, and the record remains the definitive document of British synth-pop's seedier, more human wing.",
  ],

  listeningNotes: [
    {
      label: "Two instruments doing everything",
      text: "Ball's arrangements are built from very few elements — a bassline, a hook, a drum machine — with a great deal of empty space. The sparseness makes Almond's voice the whole event.",
    },
    {
      label: "Almond singing in character",
      text: "He performs rather than croons, with theatrical diction, sneers and audible sighs. It's closer to cabaret or music hall than to pop singing, which is what the title claims.",
    },
    {
      label: "The Synclavier underneath",
      text: "A borrowed digital synthesizer gave them sampled and layered sounds other synth-pop bands couldn't access, which is why the textures are richer than the minimal arrangements suggest.",
    },
    {
      label: "A northern soul song emptied out",
      text: "\"Tainted Love\" strips a brassy 1964 soul record down to a synth figure and a tick, leaving vast gaps where the original had a band. The restraint is the reason it worked.",
    },
    {
      label: "Drum machine, unhidden",
      text: "The percussion is obviously mechanical, dry and shallow, with no attempt to imitate a drummer. It gives the seedy subject matter a cold, unfeeling frame.",
    },
  ],

  sources: [
    { title: "Non-Stop Erotic Cabaret — Wikipedia", url: "https://en.wikipedia.org/wiki/Non-Stop_Erotic_Cabaret" },
    { title: "Soft Cell — Wikipedia", url: "https://en.wikipedia.org/wiki/Soft_Cell" },
    { title: "Tainted Love — Wikipedia", url: "https://en.wikipedia.org/wiki/Tainted_Love" },
  ],

  influencedBy: [
    { artist: "The Velvet Underground", album: "The Velvet Underground & Nico", year: "1967", note: "The precedent for pop songs about drugs, prostitution and urban squalor delivered deadpan." },
    { artist: "Kraftwerk", album: "The Man Machine", year: "1978", note: "The record that proved electronics could carry straightforward pop songs, which British synth duos built on." },
  ],

  influenced: [
    { artist: "Pet Shop Boys", album: "Please", year: "1986", note: "Neil Tennant has written about this album's theatricality; the arch, narrative British synth-pop duo descends directly from it." },
    { artist: "Nine Inch Nails", album: "Pretty Hate Machine", year: "1989", note: "Trent Reznor has cited Soft Cell; the pairing of electronic pop structure with sexual darkness runs from here." },
  ],
});
