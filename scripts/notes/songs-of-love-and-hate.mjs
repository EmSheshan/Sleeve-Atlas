import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Leonard Cohen",
  album: "Songs Of Love And Hate",
  year: "1971",
  heading: "Songs of Love and Hate — Leonard Cohen (1971)",

  albumLine:
    "Released 19 March 1971 on Columbia, produced by Bob Johnston and cut at Columbia Studio A in Nashville over five days that September, with further work at Trident in London. Eight songs, guitar and voice under orchestration — his third album, and the bleakest thing he made until the very end.",

  overview: [
    "He was a poet and novelist before he recorded anything, and by 1971 he had two albums behind him and a growing reputation as the most literate man in the folk revival. What this record adds is temperature. The title is not a decorative pairing: several of these songs are about wanting someone and despising them in the same breath, and the writing gives no indication which it prefers.",

    "Cohen was explicit about the state he was in. He told Throat Culture that \"absolutely everything was beginning to fall apart around me: my spirit, my intentions, my will. So I went into a deep and long depression.\" It is audible in the performances rather than described in them — the singing is flatter and more strained than on the earlier records, sometimes barely in pitch, and none of it has been tidied.",

    "The arrangements pull hard against that. Bob Johnston, who had produced Dylan and Cash, assembled a Nashville band the musicians called \"the Army\" — Ron Cornelius on guitar, Charlie Daniels on acoustic guitar, bass and fiddle, Johnston himself on piano — and Paul Buckmaster, who had scored \"Space Oddity\" and worked with Elton John, wrote the strings and horns. Children from the Corona Academy in London sing on some tracks. A children's choir over a song like this is not consolation; it is the most unsettling decision on the album, and the BBC's judgement that it is \"one of the scariest albums of the last forty years\" turns largely on choices like that.",

    "It sold along the usual Cohen lines for the period — No. 4 in Britain, No. 8 in Australia, and only No. 145 in America, where he never made much commercial sense. \"Famous Blue Raincoat,\" \"Joan of Arc\" and \"Avalanche\" have been covered ever since by people who found in them a register nobody else was writing in. AllMusic call it \"one of Leonard Cohen's most emotionally intense albums,\" and Rolling Stone placed it 295th among the 500 greatest.",
  ],

  listeningNotes: [
    {
      label: "Nylon-string guitar, fingerpicked",
      text: "The same circling classical-guitar patterns under almost everything, played by Cohen himself, which is what makes eight very different songs sound like one argument.",
    },
    {
      label: "A voice that isn't quite reaching the notes",
      text: "He sings higher here than later in his life and audibly strains. Nothing has been re-taken to fix it, and the effort carries the feeling.",
    },
    {
      label: "Buckmaster's strings arriving late",
      text: "Orchestration enters partway through several songs rather than underpinning them, so the arrangement feels like something closing in.",
    },
    {
      label: "A children's choir",
      text: "Young voices from a London stage school sing behind material about betrayal and violence. The mismatch is the effect.",
    },
    {
      label: "A letter set to music",
      text: "\"Famous Blue Raincoat\" is written and sung as correspondence, signed off by name at the end — a structural device almost nothing else in pop uses.",
    },
    {
      label: "Long verses, few choruses",
      text: "The songs advance by accumulating stanzas rather than returning to a hook, which is the habit of someone who wrote poems first.",
    },
  ],

  sources: [
    { title: "Songs of Love and Hate — Wikipedia", url: "https://en.wikipedia.org/wiki/Songs_of_Love_and_Hate" },
    { title: "Leonard Cohen — Wikipedia", url: "https://en.wikipedia.org/wiki/Leonard_Cohen" },
    { title: "Famous Blue Raincoat — Wikipedia", url: "https://en.wikipedia.org/wiki/Famous_Blue_Raincoat" },
  ],

  influencedBy: [
    { artist: "Leonard Cohen", album: "Songs of Leonard Cohen", year: "1967", note: "His own debut established the voice-and-nylon-guitar frame this record darkens." },
    { artist: "Bob Dylan", album: "Blonde on Blonde", year: "1966", note: "Also produced by Bob Johnston with Nashville musicians, and the precedent for treating song lyrics as literature." },
  ],

  influenced: [
    { artist: "Nick Cave and the Bad Seeds", album: "The Boatman's Call", year: "1997", note: "The template of a baritone writing about love as something closer to a wound, over spare piano and guitar." },
    { artist: "Leonard Cohen", album: "You Want It Darker", year: "2016", note: "His last album returns to the same materials — scripture, betrayal, a choir behind him — forty-five years later." },
  ],
});
