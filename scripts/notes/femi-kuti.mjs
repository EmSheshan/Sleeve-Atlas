import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Femi Kuti",
  album: "Femi Kuti",
  year: "1995",
  heading: "Femi Kuti — Femi Kuti (1995)",

  albumLine:
    "Released in 1995 on Motown's Tabu imprint, performed with his band Positive Force. Afrobeat with more jazz and funk in it than his father's, and shorter songs — his international debut, and the start of a career spent proving the form belonged to more than one man.",

  overview: [
    "He is Fela Kuti's eldest son, born in London in 1962, and the grandson of Funmilayo Ransome-Kuti, the anti-colonial organiser who was thrown from a window during the 1977 army raid on his father's commune. He was raised largely by his mother and rejoined Fela in 1977, aged fifteen — which is to say he arrived in his father's household in the year it was destroyed.",

    "He played in Egypt 80, Fela's band, before forming Positive Force in 1986 with Dele Sosimi, who had been that band's keyboard player. Starting a rival Afrobeat group while the inventor of Afrobeat was still alive and working was not a modest thing to do, and it took most of a decade before it read internationally as anything other than an inheritance.",

    "What he changed is structural. Fela's pieces ran to fifteen minutes or more, built on a single groove with the vocal arriving late; Femi writes shorter, faster, more compressed songs with more jazz harmony and a harder funk attack, and sings earlier. Whether that counts as development or dilution is the argument that has followed him throughout, and both sides have a case. The politics carried over without softening — corruption, poverty and Nigerian governance remain the subject.",

    "This record is where that case was first made to an audience outside Nigeria, and the reception was strong enough to sustain a thirty-year career; he has since had six Grammy nominations and was made a Chevalier des Arts et des Lettres by France in 2022. Fela died in 1997, two years after it came out. The unusual thing about the Kutis is that the second generation did not simply curate the first — there are now three of them recording, and the form has outlived its inventor as a living music rather than a repertoire.",
  ],

  listeningNotes: [
    {
      label: "Shorter songs, faster tempos",
      text: "Where his father's pieces ran past fifteen minutes, these are compressed to a few, with the vocal entering early rather than after a long instrumental build.",
    },
    {
      label: "His own saxophone",
      text: "Femi plays alto with a hard, bright, jazz-schooled tone, taking solos his father would have given to a section.",
    },
    {
      label: "Horn section as one voice",
      text: "Unison stabs and riffs punctuate the groove rather than harmonising — the Africa '70 arrangement logic carried straight over.",
    },
    {
      label: "Call-and-response in Pidgin",
      text: "He shouts lines and the group answers, the Yoruba and West African device that makes the politics collective rather than delivered.",
    },
    {
      label: "Funk tightness under the cycle",
      text: "The rhythm section plays with more clipped, American funk precision than the looser Africa '70 feel, which is the clearest generational difference.",
    },
  ],

  sources: [
    { title: "Femi Kuti — Wikipedia", url: "https://en.wikipedia.org/wiki/Femi_Kuti" },
    { title: "Positive Force — Wikipedia", url: "https://en.wikipedia.org/wiki/Positive_Force_(band)" },
    { title: "Fela Kuti — Wikipedia", url: "https://en.wikipedia.org/wiki/Fela_Kuti" },
  ],

  influencedBy: [
    { artist: "Fela Kuti", album: "Zombie", year: "1977", note: "His father's band, which he played in; the horn writing, the call-and-response and the political frame all come from it." },
    { artist: "Fela Kuti", album: "Live!", year: "1971", note: "The Africa '70 ensemble at work, including Tony Allen's drumming, which is the rhythmic grammar he grew up inside." },
    { artist: "James Brown", album: "Sex Machine", year: "1970", note: "The tighter, more clipped funk attack that distinguishes his rhythm section from his father's looser feel." },
  ],

  influenced: [
    { artist: "Antibalas", album: "Who Is This America?", year: "2004", note: "The Brooklyn Afrobeat revival worked from the living, touring version of the form that Femi kept going." },
  ],
});
