import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Public Enemy",
  album: "Apocalypse 91… The Enemy Strikes Black",
  year: "1991",
  heading: "Apocalypse 91… The Enemy Strikes Black — Public Enemy (1991)",

  albumLine:
    "Released 1 October 1991 on Def Jam and Columbia, produced by a new team calling itself the Imperial Grand Ministers of Funk — Gary \"G-Wiz\" Rinaldo, Stuart Robertz, Cerwin \"C-Dawg\" Depper and The JBL — with the Bomb Squad demoted to executive producers. Hardcore, political hip hop, and Public Enemy's fourth album, after Fear of a Black Planet.",

  overview: [
    "By 1991 most of the argument about Public Enemy was about things other than the music: Professor Griff expelled, readmitted and expelled again over antisemitic remarks, replaced as the group's political voice by the rapper and activist Sister Souljah; rapper Flavor Flav in the tabloids. The record answers specific, datable grievances rather than a mood. Arizona voters had rejected a statewide Martin Luther King Jr. holiday in 1990, and Governor Evan Mecham was quoted saying \"I guess King did a lot for the colored people, but I don't think he deserves a national holiday\" — one song is a revenge fantasy aimed squarely at the state. Elsewhere rapper Chuck D goes after malt liquor marketed into Black neighbourhoods, sportswear firms profiting off the hip hop audience, and Black radio keeping rap off daytime playlists.",

    "The sound changed because of a theft. Producer Hank Shocklee of the Bomb Squad says the disks holding four or five years of their work were lifted out of the studio: \"once you lose all your data, it's very difficult to get that data back,\" and \"that was like a funeral for me, man.\" Chuck D later said the loss stunted the group's growth. So the Bomb Squad's hundred-sample collages gave way to leaner tracks built around single prominent loops, assembled by younger producers with live musicians added for the first time — bassist Al MacDowell, guitarist Fred Wells, keyboardist Frank Abel and a horn section. Critic Angus Batey's verdict is the fair one: \"The Bomb Squad may have lost some of their tools, but they had retained all their techniques.\"",

    "It worked: number four on the Billboard 200, number one on the R&B/Hip-Hop chart, number eight in the UK, platinum by 26 November 1991, and the group's biggest-ever single off the front of it. Critic Anthony DeCurtis wrote in Rolling Stone that it \"attempts nothing short of setting a sociopolitical agenda for the black community\"; critic Robert Christgau, in Playboy, called the first half \"Public Enemy's most exciting sustained sequence ever\" while finding the second half patchier. It came second in the Village Voice's Pazz & Jop poll, behind Nirvana's Nevermind. Its long-term standing is odder: Batey argues it was \"doomed to be received as PE Lite,\" and its most visible legacy is the closing thrash-metal collaboration with Anthrax, which began Chuck D's long run of work with rock bands.",
  ],

  listeningNotes: [
    {
      label: "One loop, left in the open",
      text: "Where the previous albums buried hundreds of samples in collage, most tracks here ride a single loop high in the mix — the malt liquor song is built on a sped-up lift from Zapp's \"More Bounce to the Ounce.\" Cheaper, clearer, far easier to rap over.",
    },
    {
      label: "Live players in the mix",
      text: "Bass, guitar, keys, horns and percussion were played rather than sampled, a first for the group. It's why the record breathes where its predecessors clatter.",
    },
    {
      label: "Four short sides",
      text: "This was Public Enemy's first album across two LPs, sequenced with brief intros and interludes rather than one continuous assault. Christgau's split verdict on the halves maps almost exactly onto the sides.",
    },
    {
      label: "Chuck D's throttle, Flav's brake",
      text: "Shocklee put the group's mechanics plainly: \"In Public Enemy, Chuck is the throttle, Flav is the brake.\" It's audible as structure here, with Flav handed solo turns that deliberately break the momentum.",
    },
    {
      label: "Thrash guitar grafted onto a rap track",
      text: "The closer remakes a three-year-old Public Enemy single with the metal band Anthrax at double the tempo. It sounds less like a crossover experiment than two bands playing the same song at once.",
    },
  ],

  sources: [
    { title: "Apocalypse 91... The Enemy Strikes Black — Wikipedia", url: "https://en.wikipedia.org/wiki/Apocalypse_91..._The_Enemy_Strikes_Black" },
    { title: "Angus Batey, \"20 Years On\" — The Quietus", url: "https://thequietus.com/opinion-and-essays/anniversary/public-enemy-apocalypse-91/" },
    { title: "Jesse Ducker, album anniversary feature — Albumism", url: "https://albumism.com/features/public-enemy-apocalypse-91-the-enemy-strikes-black-album-anniversary" },
  ],

  influencedBy: [
    { artist: "Zapp", album: "Zapp", year: "1980", note: "Directly sampled: a sped-up loop from \"More Bounce to the Ounce\" carries one of the album's central tracks." },
    { artist: "Public Enemy", album: "Fear of a Black Planet", year: "1990", note: "The record this one was built away from — after the Bomb Squad lost their working disks, the dense sample collage of that album was replaced by single exposed loops and live players." },
  ],

  influenced: [
    { artist: "The Notorious B.I.G.", album: "Ready to Die", year: "1994", note: "Critic Angus Batey reports that producer DJ Premier was still sampling Chuck D's vocal lines off this album while working with the rapper, enough that Chuck D went legal over it." },
    { artist: "Jay-Z", album: "The Black Album", year: "2003", note: "Batey hears the guest verse by rapper True Mathematics on this album turned into the cadence of \"99 Problems\"; Jay-Z does not acknowledge the debt, so treat it as one critic's reading." },
  ],
});
