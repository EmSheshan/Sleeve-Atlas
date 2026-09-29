import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Carpenters",
  album: "Close To You",
  year: "1970",
  heading: "Close to You — Carpenters (1970)",

  albumLine:
    "Released 19 August 1970 on A&M, produced by Jack Daugherty and recorded at A&M Studios in Hollywood between November 1969 and July 1970. Soft pop built on Richard Carpenter's arrangements and his sister Karen's voice — their second album, and the one that made them enormous.",

  overview: [
    "The division of labour is the whole act. Richard Carpenter wrote, arranged, played keyboards and stacked the backing vocals; Karen Carpenter sang and, importantly, drummed. She had started as a drummer and thought of herself as one, and the fact that the most admired pop voice of the decade belonged to someone sat behind a kit is the detail most often left out of the story.",

    "The material came from several directions. The title song was a Burt Bacharach and Hal David composition that had been recorded before without success; \"We've Only Just Begun\" began life as a jingle written by Paul Williams and Roger Nichols for a bank advertisement. Around those, Richard's own compositions and arrangements did the work, played by the Wrecking Crew — the Los Angeles session players who had made most of the previous decade's hits, Hal Blaine on drums among them.",

    "In 1970 this was counter-programming, and was heard as such. Rock had just been through Altamont, Woodstock and the collapse of the sixties consensus, and the Carpenters offered immaculate, un-ironic, conservatively arranged pop about wanting to be loved. That earned them enormous sales and, for the next two decades, near-total critical contempt — they became shorthand for square.",

    "The reassessment has been comprehensive. AllMusic now call it \"a surprisingly strong album,\" crediting Richard's arranging alongside Karen's singing. It reached No. 2 in America, topped the Canadian chart, and spent 76 weeks in the UK top 50 across the early seventies; it drew eight Grammy nominations and won Best New Artist. Rolling Stone, who once had no time for them at all, placed it 175th among the 500 greatest albums. Karen Carpenter died in 1983, aged 32, of heart failure caused by anorexia nervosa — an illness barely publicly understood at the time, and one her death did a great deal to make visible.",
  ],

  listeningNotes: [
    {
      label: "Karen Carpenter's lower register",
      text: "She sings in a contralto, close-mic'd and almost without vibrato, so the tone is conversational and startlingly intimate on a record this lavishly arranged.",
    },
    {
      label: "Vocal stacks built from two people",
      text: "Richard multi-tracks their voices into choirs of a dozen or more, all of them siblings, which is why the harmony blends the way no session group could.",
    },
    {
      label: "Wrecking Crew precision",
      text: "The backing is played by Los Angeles's top session musicians, tight and unfussy, giving the arrangements a polish that never draws attention to itself.",
    },
    {
      label: "Woodwind and flugelhorn",
      text: "Oboe, flute and soft brass replace strings in places, a chamber-pop palette closer to Bacharach than to anything in rock.",
    },
    {
      label: "Drums played by the singer",
      text: "Karen drums on much of the album as well as singing, which is audible in how the vocal phrasing sits so exactly with the beat.",
    },
  ],

  sources: [
    { title: "Close to You (The Carpenters album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Close_to_You_(The_Carpenters_album)" },
    { title: "Carpenters — Wikipedia", url: "https://en.wikipedia.org/wiki/Carpenters" },
    { title: "Karen Carpenter — Wikipedia", url: "https://en.wikipedia.org/wiki/Karen_Carpenter" },
  ],

  influencedBy: [
    { artist: "The Beach Boys", album: "Pet Sounds", year: "1966", note: "The model for stacked close harmony and chamber instrumentation arranged by one obsessive at the centre of a family group." },
    { artist: "Burt Bacharach", album: "Reach Out", year: "1967", note: "The title song is his; the woodwind-led arrangements and unusual chord movement are the direct model." },
  ],

  influenced: [
    { artist: "k.d. lang", album: "Ingénue", year: "1992", note: "lang has repeatedly named Karen Carpenter her central vocal influence, and the close-mic'd contralto over lush arrangement is the same instrument." },
    { artist: "Aimee Mann", album: "Whatever", year: "1993", note: "Immaculately arranged melodic pop with a conversational, unstrained vocal — the register the Carpenters made possible and critics spent twenty years punishing." },
  ],
});
