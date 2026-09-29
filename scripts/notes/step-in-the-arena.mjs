import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Gang Starr",
  album: "Step In The Arena",
  year: "1991",
  heading: "Step in the Arena — Gang Starr (1991)",

  albumLine:
    "Released 15 January 1991 on Chrysalis and EMI, produced by DJ Premier with Guru, and recorded across three New York studios. Their second album, and the one where the East Coast boom-bap template arrives complete.",

  overview: [
    "The duo were Christopher Martin, who produced as DJ Premier, and Keith Elam, who rapped as Guru — a Texan and a Bostonian who met in Brooklyn, which already complicates the idea of a New York sound as something local. Their first album had a track called \"Jazz Music,\" and Spike Lee liked it enough to commission \"Jazz Thing\" for \"Mo' Better Blues.\" The label drew the obvious conclusion and expected an album of jazz-rap. Premier has been clear that this misread what they were doing.",

    "What they actually built here is the thing everyone copied. Premier's method — chopping obscure jazz and soul records into single-bar fragments, looping them under hard, dry drums, and scratching vocal phrases from other rappers into the hook position instead of singing one — became the default grammar of East Coast hip-hop for the rest of the decade. The jazz is raw material rather than atmosphere; the samples are often unrecognisable as jazz at all.",

    "Guru's contribution is the opposite of flashy. He raps in a flat, unhurried monotone with almost no pitch variation, which in 1991 was unusual and is the reason his delivery has aged so well: there is no performance style to date. The two halves are exactly matched — an intricate producer and a deliberately plain rapper — and the balance is what makes the record listenable a hundred times over.",

    "It sold modestly, reaching only No. 121 on the Billboard 200 while going to No. 19 on the R&B chart. The critical standing is enormous: five stars from AllMusic, a perfect score from Record Mirror, and in 2007 IGN named it the greatest hip-hop album ever made. Rob \"Reef\" Tewlow's summary is the fair one — it \"stands alone on a musical level, yet it also remains true to hip-hop's underground heritage.\"",
  ],

  listeningNotes: [
    {
      label: "One-bar chops, not loops",
      text: "Premier cuts samples into fragments and reassembles them, so the underlying record is often unidentifiable. It's the difference between borrowing a groove and building one.",
    },
    {
      label: "Scratched hooks instead of choruses",
      text: "The chorus is usually a phrase from another rapper's record cut in rhythmically. It became the standard East Coast hook for a decade.",
    },
    {
      label: "Drums dry and forward",
      text: "Hard, unreverbed kick and snare sitting louder than the sample. The bareness is the point — there is nothing to hide behind.",
    },
    {
      label: "Guru's monotone",
      text: "Level pitch, steady pace, no shouting. The information is in the words and the rhythm rather than in the delivery.",
    },
    {
      label: "Upright bass under the beat",
      text: "Sampled walking bass lines give several tracks a swing that the drums deliberately do not have, and the friction is the groove.",
    },
  ],

  sources: [
    { title: "Step in the Arena — Wikipedia", url: "https://en.wikipedia.org/wiki/Step_in_the_Arena" },
    { title: "Gang Starr — Wikipedia", url: "https://en.wikipedia.org/wiki/Gang_Starr" },
    { title: "DJ Premier — Wikipedia", url: "https://en.wikipedia.org/wiki/DJ_Premier" },
  ],

  influencedBy: [
    { artist: "Eric B. & Rakim", album: "Paid in Full", year: "1987", note: "Rakim's calm, internally rhymed delivery is the direct model for Guru's refusal to shout." },
    { artist: "Public Enemy", album: "It Takes a Nation of Millions to Hold Us Back", year: "1988", note: "Established dense, aggressive sample collage as a producer's art rather than a backing track." },
  ],

  influenced: [
    { artist: "Wu-Tang Clan", album: "Enter the Wu-Tang (36 Chambers)", year: "1993", note: "Dusty chopped samples under hard dry drums — the New York grammar this album codified." },
    { artist: "Nas", album: "Illmatic", year: "1994", note: "Premier produced on it; this record is where the sound he brought was assembled." },
    { artist: "Common", album: "Like Water For Chocolate", year: "2000", note: "Premier produced here too, and the conversational-rapper-over-jazz-derived-beats lineage runs straight through." },
  ],
});
