import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "The Notorious B.I.G.",
  album: "Ready To Die",
  year: "1994",
  heading: "Ready To Die — The Notorious B.I.G. (1994)",

  albumLine:
    "Released 13 September 1994 on Bad Boy Records, distributed by Arista, with Sean \"Puffy\" Combs as executive producer. It's East Coast hip-hop, and it's the debut album from Brooklyn rapper Christopher Wallace, who recorded as The Notorious B.I.G.",

  overview: [
    "It was made in two stages. According to XXL's oral history, the first sessions in 1993, at Uptown Records, produced the darker songs — Wallace sounds higher-pitched and more paranoid. Then Combs was fired from Uptown, launched Bad Boy, and Wallace finished the record in 1994 with a smoother, more confident delivery. His writing changed too: he filled notebooks in 1993, but by 1994 he was memorising lyrics. Producer Chucky Thompson recalled him writing only a few words at a time between breaks: \"It was like he knew what he wanted to say.\" Writer Justin Tinsley, in an excerpt from his book, describes him sitting in a corner mumbling and smoking while a beat looped for hours, then going into the booth and recording a verse in one take.",

    "Combs was a hands-on executive producer. He gave producer Easy Mo Bee a list of records to sample and asked for a storyline. He pushed the radio-friendly side — Tinsley says he proposed sampling Mtume's \"Juicy Fruit\" and Wallace resisted at first as \"too soft\" — and he opposed the working title The Teflon Don as too New York-specific. Easy Mo Bee made the album's harder beats; producer Poke built the lead single on a reworked Mtume sample on an MPC60; Chucky Thompson and Nashiem Myrick reworked another after a sample-clearance problem; DJ Premier chopped a break for one song, recorded at D&D Studios. Rapper Method Man is the only guest. Credits for the lead single are contested: producer Pete Rock says, \"I did the original version, didn't get credit for it.\"",

    "It's in the book 1001 Albums You Must Hear Before You Die (2005 edition, per Wikipedia), and the Library of Congress added it to the National Recording Registry in 2024. Rolling Stone's 2022 list entry says it \"marked the precise moment when hip-hop's golden age transitioned into its modern age.\" Writer Tom Breihan of Stereogum called it \"the best rap album ever made\"; producer Dante Ross called Wallace \"the greatest storyteller since Slick Rick.\" The dissent comes from rapper Open Mike Eagle, who told Grammy.com he \"never loved this album,\" while granting its importance.",
  ],

  listeningNotes: [
    {
      label: "Story songs built from small details",
      text: "Complex's Peter A. Berry calls \"Warning\" \"a narrative exhibition that essentially defines great rap storytelling,\" with Wallace \"more Martin Scorsese than Pablo Picasso, writing and directing his own tales.\"",
    },
    {
      label: "Soft samples, hard voice",
      text: "\"Juicy\" and \"Big Poppa\" sit on smooth R&B grooves from Mtume and the Isley Brothers while Wallace's baritone stays deadpan, the mix of hard and soft that Rolling Stone calls a \"template for decades of artists.\"",
    },
    {
      label: "A chopped break and a borrowed hook",
      text: "\"Unbelievable\" is built on a chopped break by DJ Premier, with verses written and recorded in one long night at D&D, per Tinsley, and a hook that borrows from R. Kelly's \"Your Body's Calling.\"",
    },
    {
      label: "Two voices on one track",
      text: "On \"Gimme the Loot\" Wallace raps in his normal voice and in a higher-pitched alter ego, with DJ Mister Cee scratching.",
    },
    {
      label: "A staged ending",
      text: "\"Suicidal Thoughts\" ends with a staged gunshot and a body hitting the floor; engineer Charles Alexander said Wallace fell hard once the lights were off.",
    },
  ],

  sources: [
    { title: "The Making of Ready to Die: Family Business — XXL (2014 reprint)", url: "https://www.xxlmag.com/the-making-of-ready-to-diefamily-business/" },
    { title: "Behind the Scenes of Ready to Die — Literary Hub, excerpt from Justin Tinsley's It Was All a Dream (2022)", url: "https://lithub.com/behind-the-scenes-of-ready-to-die-an-excerpt-from-it-was-all-a-dream-biggie-and-the-world-that-made-him" },
    { title: "Ready To Die Turns 20 — Stereogum (Tom Breihan, 2014)", url: "https://stereogum.com/1704713/ready-to-die-turns-20/reviews/the-anniversary" },
    { title: "Every Song on Ready to Die Ranked — Complex UK (2024)", url: "https://uk.complex.com/music/a/dimassanfiorenzo/the-notorious-big-ready-to-die-ranked" },
    { title: "Ready to Die 30th anniversary — Okayplayer (Peter A. Berry, 2024)", url: "https://www.okayplayer.com/ready-to-die-30th-anniversary" },
    { title: "Ready to Die — Wikipedia", url: "https://en.wikipedia.org/wiki/Ready_to_Die" },
  ],

  influencedBy: [
    { artist: "Mtume", album: "Juicy Fruit", year: "1983", note: "Sampled directly for the lead single, per Wikipedia; Tinsley says Combs proposed the sample." },
    { artist: "The Isley Brothers", album: "Between the Sheets", year: "1983", note: "Sampled directly: the title song's groove underpins the second single." },
    { artist: "Ice Cube", album: "AmeriKKKa's Most Wanted", year: "1990", note: "Producer Easy Mo Bee told XXL, \"I'm sure Ice Cube and N.W.A and stuff like that had a profound effect on him\"; producer Chucky Thompson said Biggie's style reminded him of Ice Cube." },
    { artist: "Slick Rick", album: "The Great Adventures of Slick Rick", year: "1988", note: "Complex says Biggie's style fused Big Daddy Kane's polysyllables, Kool G Rap's rawness, Too $hort's boasting and Slick Rick's \"genius for spinning narratives out of dramatic dialog amongst distinct characters.\"" },
  ],

  influenced: [
    { artist: "YG", album: "My Krazy Life", year: "2014", note: "Rapper YG told HotNewHipHop he listened to Ready to Die alongside Doggystyle, Chronic 2001 and Get Rich or Die Tryin' while making this album: \"I put in them albums, them classic albums.\"" },
  ],
});
