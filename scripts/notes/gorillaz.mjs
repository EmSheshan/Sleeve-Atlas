import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Gorillaz",
  album: "Gorillaz",
  year: "2001",
  heading: "Gorillaz — Gorillaz (2001)",

  albumLine:
    "Released 26 March 2001 on Parlophone, produced by Dan the Automator with Damon Albarn, Tom Girling and Jason Cox, and recorded between 1998 and 2000 at Studio 13 in London and Geejam in Jamaica. Trip-hop, dub, Latin music and punk rock under a cartoon — the debut of a band that does not exist.",

  overview: [
    "The idea came from Damon Albarn, then coming out of Blur, and the artist Jamie Hewlett, who had created the comic Tank Girl. Their stated target was music television: Hewlett's line was that \"if you watch MTV for too long, it's a bit like hell – there's nothing of substance there.\" The answer was a band with four animated members and no faces to put on camera — a joke about image-driven pop that was also a very effective piece of image-driven pop.",

    "Musically it works because Albarn used the disguise to leave Britpop entirely. Dan the Automator, a Californian hip-hop producer, built the beats; Del the Funky Homosapien raps on two tracks; Ibrahim Ferrer of the Buena Vista Social Club sings in Spanish on another; members of Tom Tom Club appear. Nothing on it would have been permitted on a Blur record without an argument about authenticity, and the cartoon made the argument unnecessary.",

    "The timing was right in a way that is easy to miss now. In 2001 guitar bands and hip-hop still occupied separate commercial worlds in Britain, and the crossover attempts had mostly been embarrassing. Gorillaz got away with it partly by being fictional — a virtual band has no scene to betray — and partly because the production was genuinely good rather than a gesture.",

    "It went triple platinum in Britain, platinum in America and has sold over seven million worldwide, which earned them a Guinness entry as the most successful virtual band. Metacritic settles at 71, which reads as slightly grudging now; the longer verdict is that the format itself proved durable, and that Albarn's habit here of assembling collaborators from unrelated traditions became the working method for everything he has done since.",
  ],

  listeningNotes: [
    {
      label: "Dub bass and space",
      text: "Heavy, rounded basslines with long gaps and echo trails, a Jamaican production logic applied to pop songs and partly recorded there.",
    },
    {
      label: "Albarn singing at half-mast",
      text: "He mutters and drawls in a flat, sedated register rather than projecting, which is what gives the record its melancholy under the cartoon.",
    },
    {
      label: "Melodica as a lead instrument",
      text: "A small breath-blown keyboard carries hooks where a guitar would, borrowed from Augustus Pablo's dub records.",
    },
    {
      label: "Guests from unconnected worlds",
      text: "A Californian rapper, a Cuban son singer and New York post-punk veterans appear across the same album without being blended into one style.",
    },
    {
      label: "Lo-fi drum machines",
      text: "The beats are deliberately thin and slightly grubby rather than polished, which keeps a record made by professionals sounding provisional.",
    },
  ],

  sources: [
    { title: "Gorillaz (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Gorillaz_(album)" },
    { title: "Gorillaz — Wikipedia", url: "https://en.wikipedia.org/wiki/Gorillaz" },
    { title: "Dan the Automator — Wikipedia", url: "https://en.wikipedia.org/wiki/Dan_the_Automator" },
  ],

  influencedBy: [
    { artist: "Massive Attack", album: "Blue Lines", year: "1991", note: "The British template of a producer-led project assembling guest vocalists over dub-informed beats." },
    { artist: "The Specials", album: "The Specials", year: "1979", note: "Albarn's habit of putting Jamaican rhythm under English melancholy runs back through two-tone." },
    { artist: "Beastie Boys", album: "Paul's Boutique", year: "1989", note: "Dense, playful, sample-built hip-hop made by people from outside the tradition, and produced in the same Californian orbit." },
  ],

  influenced: [
    { artist: "Damon Albarn", album: "Mali Music", year: "2002", note: "The collaborative method established here — gather musicians from unrelated traditions and build around them — becomes his working practice." },
  ],
});
