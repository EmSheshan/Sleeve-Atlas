import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "The Prodigy",
  album: "The Fat Of The Land",
  year: "1997",
  heading: "The Fat Of The Land — The Prodigy (1997)",

  albumLine:
    "Released 30 June 1997 on XL Recordings and produced by Liam Howlett, the group's keyboardist and songwriter. It's big beat crossed with punk and metal attitude, and it's The Prodigy's third studio album, following Music for the Jilted Generation (1994).",

  overview: [
    "By 1997 The Prodigy had come up through British rave and the festival circuit, and two UK number-one singles had made them far bigger than a dance act was expected to be. Howlett wrote almost everything; this was the first album to include contributions from Keith Flint, who sings on several tracks, alongside Maxim Reality (Keith Palmer). Wikipedia notes the release date differs inside the same article: the infobox says 30 June, while the prose says the first week of July.",

    "The delay was partly Howlett's own doing. Wikipedia says he joined a PlayStation league for dance musicians run by Muzik reporter Martin James, and that his Tomb Raider habit held the album up for months while the label pressed him. The work itself ran from 1995 to 1997 at Strongroom in London and Earthbound in Braintree, Essex. Writer Angus Batey of The Quietus says Howlett was working with software as well as hardware for the first time, using Cubase to sequence and mix loops he had sampled or played himself.",

    "Howlett was explicit about his audience. He told Batey, \"I write for one person, that's me,\" and added that \"The Prodigy is too hard for some people: good.\" That attitude drew trouble. The National Organization for Women objected to what it saw as misogyny in one single; Howlett's answer was, \"That record was for the fans. Only brainless people get some stupid message out of it,\" and the band has said the title means doing anything intensely. Readers can weigh the dispute themselves — the sources document the complaint and the reply, not a resolution.",

    "The commercial result was enormous. It went to No. 1 in the UK and on the Billboard 200 (19 July 1997), sold 2.6 million copies in the US, and has passed ten million worldwide, according to Wikipedia. Guinness World Records named it the fastest-selling dance album in the UK. It was nominated for a Grammy and the Mercury Prize. Critics were mostly enthusiastic then; later opinion is split, with writer Martin James of Electronic Sound calling it \"almost too laboured\" in 2015, while Metal Hammer in 2020 praised it as the point where rave culture collided with metal culture.",
  ],

  listeningNotes: [
    {
      label: "Punk snarl over breakbeats",
      text: "Flint's shouted vocals sit on top of sampled drums and distorted synths. \"Firestarter\" began as an instrumental that Flint was then given lyrics for, which is why the voice feels bolted on in the best way.",
    },
    {
      label: "Two front men",
      text: "Maxim Reality shares the vocal duties with Flint. Per Batey,the pair finished the vocals for \"Breathe\" in half an hour once the instrumental existed.",
    },
    {
      label: "Guest voices and guitars",
      text: "Rapper Kool Keith appears on \"Diesel Power\", and Kula Shaker singer Crispian Mills on \"Narayan\", with drummer Matt Cameron. The record is more of a collaboration than a solo producer's showcase.",
    },
    {
      label: "Hip-hop writing credits",
      text: "Credits on \"Smack My Bitch Up\" include members of Ultramagnetic MCs, and \"Funky Shit\" credits the Beastie Boys. The credits show the hip-hop debt even where the page doesn't spell out what was sampled.",
    },
    {
      label: "A punk cover in a rave setting",
      text: "\"Fuel My Fire\" is a cover of an L7 song, with guitarist Gizz Butt on guitars. It's the plainest sign of the band's rock leanings.",
    },
  ],

  sources: [
    { title: "The Fat of the Land — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Fat_of_the_Land" },
    { title: "20 Years On: The Prodigy's The Fat Of The Land — The Quietus (Angus Batey, 2017)", url: "https://thequietus.com/?p=22716" },
    { title: "The Prodigy: The Sound and the Fury — Electronic Sound (Martin James, 2015)", url: "https://www.electronicsound.co.uk/features/long-reads/the-prodigy-the-sound-and-the-fury/" },
  ],

  influencedBy: [
    { artist: "L7", album: "Bricks Are Heavy", year: "1992", note: "The band covers an L7 song on this album, credited on Wikipedia to L7's Donita Sparks and co-writers." },
    { artist: "Ultramagnetic MCs", album: "Critical Beatdown", year: "1988", note: "Wikipedia's track credits for one song list Ultramagnetic MCs members Ced-Gee, TR Love and Kool Keith as writers, reflecting a borrowed hip-hop source." },
  ],

  influenced: [],
});
