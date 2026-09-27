import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Led Zeppelin",
  album: "Led Zeppelin",
  year: "1969",
  heading: "Led Zeppelin — Led Zeppelin (1969)",

  albumLine:
    "Released 12 January 1969 in the US and 31 March in the UK on Atlantic Records, this is Led Zeppelin's debut, produced by guitarist Jimmy Page. It's blues-rock pushed toward something heavier — the record usually named as the prototype for hard rock and an ancestor of heavy metal.",

  overview: [
    "The band existed because another one died. Page had spent the mid-sixties in the Yardbirds, the London group that also passed Eric Clapton and Jeff Beck through its ranks; when it finally collapsed in August 1968 he was left holding the name and a set of contracted Scandinavian dates he had to fill. He recruited Robert Plant on vocals, John Paul Jones on bass and keyboards, and John Bonham on drums, and took them into Olympic Studios in London that September.",

    "The sessions are famous for how little time and money they took: roughly 36 hours of studio work, spread over several weeks, costing £1,782 — and Page and manager Peter Grant paid for it themselves. That detail matters more than it sounds. Because no label had funded the record, no label had notes on it; the band delivered Atlantic a finished album rather than a project to be supervised.",

    "What they were working with was the British blues boom, by then several years old. English bands had been rebuilding Chicago blues at volume for most of the decade, and this record sits squarely in that tradition — two Willie Dixon songs, \"You Shook Me\" and \"I Can't Quit You Baby\", sit alongside the originals. What Zeppelin added was scale and dynamic range: the same material played louder, slower and with far more space around it. The borrowing was not always credited, and that has followed the band for decades; Jake Holmes, who wrote and recorded \"Dazed and Confused\" in 1967, sued in 2010 and the matter was settled.",

    "Reviews split hard. In Rolling Stone, John Mendelsohn called Page a \"limited producer\" and said the band offered \"little that its twin, the Jeff Beck Group, didn't say as well or better.\" In Melody Maker, Chris Welch praised it, noting the material \"does not rely on obvious blues riffs.\" The public was less conflicted — No. 10 in the US, No. 6 in the UK — and the critical position eventually reversed almost completely. It now reads as the blueprint: the riff-plus-space architecture that hard rock ran on for the next decade.",
  ],

  listeningNotes: [
    {
      label: "Distance makes depth",
      text: "Page miked amplifiers from as far as twenty feet back rather than pressing a microphone to the speaker, the industry norm. That's why the guitars sound like they're in a room with you instead of pinned to the speaker — you're hearing the hall as much as the amp.",
    },
    {
      label: "The bowed guitar",
      text: "On \"Dazed and Confused\" Page plays his guitar with a violin bow, producing long, scraping tones with no attack. It's the sound most people remember from the record and it's a technique, not an effect pedal.",
    },
    {
      label: "Backwards echo",
      text: "On \"You Shook Me\" the echo arrives before the sound that caused it, achieved by flipping the tape so the reverb prints in reverse. It creates a swelling approach into notes that shouldn't be physically possible.",
    },
    {
      label: "Drums as a lead instrument",
      text: "Bonham is recorded loud, open and with the room audible, where most 1969 records buried the kit. The drums carry weight and swing rather than just keeping time, which is much of why the album feels heavy.",
    },
    {
      label: "Acoustic and Eastern turns",
      text: "\"Black Mountain Side\" drops the band entirely for Page's acoustic guitar and tabla, played by Viram Jasani. The folk and raga excursions sit right next to the loudest material, a contrast the band kept using.",
    },
    {
      label: "Spill left in",
      text: "Vocal bleed into other microphones was kept rather than cleaned up, so the performances sound like four people in one space. Combined with the speed of the sessions, it gives the record a live, unpolished edge.",
    },
  ],

  sources: [
    { title: "Led Zeppelin (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Led_Zeppelin_(album)" },
    { title: "Led Zeppelin — Britannica", url: "https://www.britannica.com/topic/Led-Zeppelin" },
    { title: "Led Zeppelin's Debut Becomes a Hard Rock Paradigm — Ultimate Classic Rock", url: "https://ultimateclassicrock.com/led-zeppelin-first-album/" },
  ],

  influencedBy: [
    { artist: "Willie Dixon", album: "I Am the Blues", year: "1970", note: "Two Dixon songs are covered here; his Chicago blues writing is the raw material the album reworks at volume." },
    { artist: "Cream", album: "Disraeli Gears", year: "1967", note: "Part of the British blues boom Zeppelin emerged from — loud power-trio blues that set the template Page pushed further." },
    { artist: "The Jeff Beck Group", album: "Truth", year: "1968", note: "Released months earlier by Page's fellow Yardbirds guitarist, with overlapping repertoire; critics at the time treated the two as rivals." },
  ],

  influenced: [
    { artist: "Black Sabbath", album: "Paranoid", year: "1970", note: "The riff-and-space architecture here is the immediate ancestor of the heavier British rock that followed." },
    { artist: "Guns N' Roses", album: "Appetite for Destruction", year: "1987", note: "The blues-rooted hard rock band with a high-register singer and a riff-writing guitarist is a model this record established." },
  ],
});
