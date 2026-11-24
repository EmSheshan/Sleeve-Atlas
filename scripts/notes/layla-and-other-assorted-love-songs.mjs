import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Derek & The Dominos",
  album: "Layla And Other Assorted Love Songs",
  year: "1970",
  heading: "Layla and Other Assorted Love Songs — Derek and the Dominos (1970)",

  albumLine:
    "Released 9 November 1970 in the US on Atco (the UK issue came later on Polydor), and produced by Tom Dowd, a producer and engineer, with the band. It's blues rock on a double album, and it's the band's only studio album.",

  overview: [
    "The band was guitarist Eric Clapton, keyboardist Bobby Whitlock, bassist Carl Radle and drummer Jim Gordon, who had played together in Delaney and Bonnie's group. Wikipedia says they recorded at Criteria Studios in Miami, with guitarist Duane Allman on eleven of fourteen songs. Writers Richard Havers of uDiscover and Neil Crossley of MusicRadar say Clapton and Dowd saw Allman play on 26 August 1970, the bands jammed, and Allman joined the sessions. The dates and room are contested: Wikipedia gives 28 August to 1 October, while Havers says the main sessions ran to about 9 September and names Studio A; writer Richard Buskin of Sound on Sound says Studio B.",

    "Buskin says the room had a custom MCI console and a sixteen-track MCI recorder nicknamed \"Dumbo,\" with small Fender Tweed Champ amps sitting on the lid of a piano. Engineer Ron Albert said, \"We recorded everything and always had tape rolling,\" and his brother Howard Albert, also an engineer, said, \"Basically, I would do crazy stuff just because I didn't know any better.\" Dowd told Guitar Player writer Christopher Scapelliti, \"The spontaneity of that whole session was absolutely frightening.\" Whitlock said, \"It was a purist sound. There was no slapback echo, no fuzz tones.\" Havers says the title song was inspired by Nizami Ganjavi's story of Layla and Majnun and is about Pattie Boyd.",

    "Credit for the title song's piano coda is disputed. It is credited to Gordon, but singer Rita Coolidge says she co-wrote it, per Crossley citing her memoir. Whitlock told Louder writer Hugh Fielder, \"Layla would have been just as great without Duane on it.\" Reception at the time was mixed: critic Roy Hollingworth of Melody Maker wrote \"from the magnificent to a few lengths of complete boredom,\" and critic Ellen Sander of Saturday Review called it \"a basket case of an album,\" per Wikipedia. Critic Robert Christgau gave it an A+ in the Village Voice, per Wikipedia, which also puts it at 117th on Rolling Stone's 2003 list. Wikipedia confirms the album is in the book 1001 Albums You Must Hear Before You Die, but the book's text wasn't found.",
  ],

  listeningNotes: [
    {
      label: "Two guitars like hands in a glove",
      text: "Dowd said of Clapton and Allman, \"It was like two hands in a glove,\" and the interplay on the title song is the clearest example.",
    },
    {
      label: "A song recorded in three parts",
      text: "Buskin says \"Layla\" was cut as a guitar section, then Gordon's piano, then the full band returning, with Clapton's lead vocal assembled over several nights.",
    },
    {
      label: "A Hendrix tribute",
      text: "Whitlock said Clapton \"wanted to do 'Little Wing' as a tribute, because he really revered Jimi Hendrix,\" and Havers says Whitlock had never heard the song and had the words written on his organ.",
    },
    {
      label: "Strat and a tiny tweed amp",
      text: "Whitlock said Clapton got his tone from \"just his Fender Strat and a tiny little tweed Champ,\" which keeps the guitars close and unfussy.",
    },
    {
      label: "Echo, loops and backwards cymbals",
      text: "Buskin says engineers used EMT echo, tape loops and backwards cymbals, and mixed by hand without automation over about a week.",
    },
  ],

  sources: [
    { title: "Classic Tracks: Derek and the Dominos, Layla — Sound on Sound (Richard Buskin, 2006)", url: "https://www.soundonsound.com/techniques/classic-tracks-derek-dominos-layla" },
    { title: "The Layla sessions — uDiscover Music (Richard Havers)", url: "https://www.udiscovermusic.com/stories/layla-sessions/" },
    { title: "The genius of Eric Clapton's Layla — MusicRadar (Neil Crossley, 2025)", url: "https://www.musicradar.com/artists/there-had-to-be-some-sort-of-telepathy-going-on-because-ive-never-seen-spontaneous-inspiration-happen-at-that-level-the-genius-of-eric-claptons-controversial-masterpiece-layla" },
    { title: "An oral history of Layla — Guitar Player (Christopher Scapelliti, 2020)", url: "https://guitarplayer.com/players/an-oral-history-of-derek-and-the-dominos-layla" },
    { title: "The story behind Layla — Louder (Hugh Fielder, 2012)", url: "https://www.loudersound.com/features/the-story-behind-the-song-layla-by-derek-and-the-dominos" },
    { title: "Derek Trucks on Layla Revisited — GRAMMY.com (Morgan Enos, 2021)", url: "https://www.grammy.com/news/derek-trucks-tedeschi-trucks-bands-layla-revisited-concert-album-interview" },
    { title: "Layla and Other Assorted Love Songs — Wikipedia", url: "https://en.wikipedia.org/wiki/Layla_and_Other_Assorted_Love_Songs" },
    { title: "Layla Revisited (Live at LOCKN') — Wikipedia", url: "https://en.wikipedia.org/wiki/Layla_Revisited_(Live_at_LOCKN%27)" },
    { title: "Axis: Bold as Love — Wikipedia", url: "https://en.wikipedia.org/wiki/Axis:_Bold_as_Love" },
  ],

  influencedBy: [
    { artist: "The Jimi Hendrix Experience", album: "Axis: Bold as Love", year: "1967", note: "The band covers \"Little Wing\" from this album, which Whitlock said Clapton wanted to do as a tribute to guitarist Jimi Hendrix." },
  ],

  influenced: [
    { artist: "Tedeschi Trucks Band", album: "Layla Revisited (Live at LOCKN')", year: "2021", note: "The band plays the whole album live, and guitarist Derek Trucks, who was named after it, says it has been \"a huge presence from the very beginning.\"" },
  ],
});
