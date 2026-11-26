import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Nas",
  album: "Illmatic",
  year: "1994",
  heading: "Illmatic — Nas (1994)",

  albumLine:
    "Released 19 April 1994 on Columbia Records, and produced by DJ Premier, Large Professor, Pete Rock, Q-Tip, L.E.S. and Nas, with MC Serch as executive producer. It's East Coast boom-bap and jazz rap, and it's rapper Nas's debut album.",

  overview: [
    "The XXL oral history, compiled by editors including Rob Markman, says Def Jam co-founder Russell Simmons reportedly passed on Nas, and A&R executive Faith Newman signed him to Columbia. Serch said, \"Her and David Kahne pretty much locked me in a room and said, 'Whatever deal you wanna make, let's make it.'\" Wikipedia lists the studios as Chung King, D&D, Battery and Unique in New York. The oral history says bootlegs were circulating, so Columbia rushed out a ten-song album rather than collecting more material.",

    "The album was assembled from a roster of producers. Nas told HotNewHipHop, \"It's my first album, man, and I had a dream team of those guys,\" and, \"So, here I am this new guy and I get to have Q-Tip, Premier, and Pete Rock all on my album?\" Large Professor, he said, put him in touch with the others. Wikipedia quotes Serch saying, \"Primo and Nas, they could have been separated at birth.\"",

    "Wikipedia says the album is in the 2010 edition of 1001 Albums You Must Hear Before You Die; the book's text wasn't found. It lists Rolling Stone ranking it 44th in 2020, and says reviews were mixed at release, with the LA Times giving it two stars and The Source five mics. Critic Jeff Weiss of Pitchfork wrote, \"No album better reflected the sound and style of New York, 94,\" per Wikipedia. Music executive Steve Stoute told Andscape writer Bonsu Thompson, \"Those stories are timeless. Those beats are timeless,\" and rapper Rakim recalled, \"There was something that just felt like my little brother was about to come into the game.\"",
  ],

  listeningNotes: [
    {
      label: "Film breaks looped by the engineer",
      text: "Per the XXL oral history, Nas brought a VHS of Wild Style and had the engineer loop its breaks for \"The Genesis,\" and Newman said it was \"his first introduction to hip-hop.\"",
    },
    {
      label: "A Gap Band sample after a lost rhyme book",
      text: "Per XXL, Nas wanted a Mtume sample for \"Life's a Bitch\" but producer L.E.S. brought the Gap Band's \"Yearning for Your Love,\" and Nas said, \"it ain't 'Juicy,' but it's a whole 'nother monster!\"",
    },
    {
      label: "A bar-by-bar studio split",
      text: "XXL says Nas had about 60 bars written for \"N.Y. State of Mind\" and split them up in the studio, over Premier's second beat for the album.",
    },
    {
      label: "A beat heard in a basement",
      text: "XXL says Large Professor took Nas to Q-Tip's basement in Jamaica, Queens, where he heard the beat for \"One Love,\" a song Nas said he wrote \"the way life really was,\" about friends in prison.",
    },
    {
      label: "A borrowed verse",
      text: "Wikipedia's page on Main Source's Breaking Atoms says the sampled voice on \"The Genesis\" is Nas's own verse from Main Source's \"Live at the Barbeque.\"",
    },
  ],

  sources: [
    { title: "An oral history of Nas' Illmatic — XXL (Rob Markman and others, 2014)", url: "https://www.xxlmag.com/making-of-nas-illmatic/" },
    { title: "Nas discusses the dream team behind Illmatic — HotNewHipHop", url: "https://www.hotnewhiphop.com/19704-nas-discusses-the-dream-team-behind-illmatic-news" },
    { title: "Nas' Illmatic 30th anniversary — Andscape (Bonsu Thompson, 2024)", url: "https://andscape.com/features/nas-illmatic-30th-anniversary-a-look-back-at-raps-perfect-album/" },
    { title: "Illmatic — Wikipedia", url: "https://en.wikipedia.org/wiki/Illmatic" },
    { title: "Breaking Atoms — Wikipedia", url: "https://en.wikipedia.org/wiki/Breaking_Atoms" },
    { title: "Yearning for Your Love — Wikipedia", url: "https://en.wikipedia.org/wiki/Yearning_for_Your_Love" },
  ],

  influencedBy: [
    { artist: "Main Source", album: "Breaking Atoms", year: "1991", note: "Per Wikipedia, \"The Genesis\" samples Nas's verse from \"Live at the Barbeque\" on this album, and Large Professor produced it and later worked on Illmatic." },
    { artist: "The Gap Band", album: "The Gap Band III", year: "1980", note: "XXL and Wikipedia say \"Life's a Bitch\" samples the Gap Band's \"Yearning for Your Love,\" which is on this album." },
  ],

  influenced: [],
});
