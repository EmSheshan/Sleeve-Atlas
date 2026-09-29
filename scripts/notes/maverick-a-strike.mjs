import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Finley Quaye",
  album: "Maverick A Strike",
  year: "1997",
  heading: "Maverick a Strike — Finley Quaye (1997)",

  albumLine:
    "Released 6 August 1997 on 550 Music and Epic, produced by Quaye with Kevin Bacon. Fifty minutes of reggae crossed with soul and pop — his debut, and a record that went double platinum in Britain on the back of five charting singles.",

  overview: [
    "He was born in Edinburgh in 1974 into a family with a substantial musical history he barely knew. His father was Cab Kaye, born Nii Lante Augustus Kwamlah Quaye, a vaudeville pianist and a chief of the Ga people in Jamestown, Accra; his half-brother Caleb Quaye is a guitarist. Finley did not grow up with his father and only learned the extent of that legacy in his twenties, meeting him for the first time in Amsterdam while on tour. That biography — Scottish, Ghanaian, discovered late — is the shape of the record.",

    "What he made from it is deliberately unpurist reggae. The rhythms are Jamaican, the singing is closer to soul, and the production has the warm, slightly hazy quality of mid-nineties British studio work rather than the dryness of roots recordings. It sits alongside trip-hop and the end of Britpop without belonging to either, which in 1997 was an unusual and quite marketable position.",

    "It worked immediately and enormously. The album reached No. 3 in Britain, was certified double platinum for around 600,000 copies, and produced five hit singles. He took the MOBO for best reggae act in 1997 and the BRIT for Best British Male Solo Artist in 1998 — which, for a debut by someone nobody had heard of eighteen months earlier, is a very steep curve.",

    "The critics did not agree with each other at all. Pitchfork gave it 9.4 and The Guardian five stars, while NME gave it 5 out of 10; Rolling Stone four stars, Entertainment Weekly a B+. That spread is unusually wide and is essentially an argument about whether easy-going, well-made, commercially aimed reggae-pop is a legitimate thing to do well. Nothing he released afterwards repeated the success, which has left this album standing slightly on its own.",
  ],

  listeningNotes: [
    {
      label: "Reggae rhythm, soul singing",
      text: "The off-beat guitar chop and bass-led arrangements are Jamaican; the vocal phrasing is not, which is the tension the record runs on.",
    },
    {
      label: "A light, unforced voice",
      text: "He sings high and easily, without the strain or the patois affectation that British reggae singers often reached for.",
    },
    {
      label: "Warm, hazy production",
      text: "Rounded low end and soft-edged highs give it a mid-nineties British sheen rather than the sharp separation of roots reggae.",
    },
    {
      label: "Guitar figures over the groove",
      text: "Clean, melodic guitar lines float above the rhythm section rather than locking into it, borrowing from soul and pop arrangement.",
    },
    {
      label: "Songs built for radio",
      text: "Five of these charted, and the writing shows it — short, hook-forward structures with the choruses arriving early.",
    },
  ],

  sources: [
    { title: "Maverick a Strike — Wikipedia", url: "https://en.wikipedia.org/wiki/Maverick_a_Strike" },
    { title: "Finley Quaye — Wikipedia", url: "https://en.wikipedia.org/wiki/Finley_Quaye" },
    { title: "Cab Kaye — Wikipedia", url: "https://en.wikipedia.org/wiki/Cab_Kaye" },
  ],

  influencedBy: [
    { artist: "Bob Marley & The Wailers", album: "Exodus", year: "1977", note: "The template for reggae written as international pop without losing the rhythm section's identity." },
    { artist: "Massive Attack", album: "Blue Lines", year: "1991", note: "The British studio aesthetic he works in — warm, hazy, bass-forward — comes out of this Bristol lineage." },
  ],

  influenced: [
    { artist: "Damien Rice", album: "O", year: "2002", note: "The strand of easy, warmly produced British and Irish songwriting that followed into the same commercial space." },
  ],
});
