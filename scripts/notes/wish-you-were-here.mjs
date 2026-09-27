import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Pink Floyd",
  album: "Wish You Were Here",
  year: "1975",
  heading: "Wish You Were Here — Pink Floyd (1975)",

  albumLine:
    "Released 12 September 1975 on Harvest in the UK and Columbia in the US, self-produced by the band and recorded at EMI Studios in London. It's progressive rock built from long instrumental stretches and studio texture — the follow-up to The Dark Side of the Moon, and the album the band themselves tend to name as their favourite.",

  overview: [
    "Dark Side had been an enormous, disorienting success, and the sessions for this record — 13 January to 28 July 1975 — were unhappy. Bassist and lyricist Roger Waters called them \"torturous\"; keyboardist Richard Wright said they fell \"within a difficult period.\" The four rarely worked in the room together. Engineer Brian Humphries at one point ruined backing tracks by printing echo onto them, forcing a re-record.",

    "The subject is absence, and it works on two levels the album keeps deliberately tangled. One is Syd Barrett, the band's original singer and songwriter, who had left in 1968 after a breakdown. The other is the music business, attacked directly on two tracks — one of which quotes a real question an executive had asked the band: \"which one's Pink?\" Waters resisted the simple reading. \"'Shine On' is not really about Syd,\" he said. \"He's just a symbol for all the extremes of absence some people have to indulge in because it's the only way they can cope.\"",

    "Then the famous coincidence. On 5 June 1975, while the band were mixing the Barrett piece, Barrett himself walked into the studio unannounced — overweight, head and eyebrows shaved, unrecognised at first. Drummer Nick Mason was \"horrified\"; designer Storm Thorgerson recalled \"two or three people cried. He sat round and talked for a bit but he wasn't really there.\" The broad account is consistent across sources, though accounts differ on detail and some biographers give slightly different dates — worth flagging, because it's the kind of story that gets smoothed in retelling. It was also, by several accounts, guitarist David Gilmour's wedding day.",

    "Reviews on release were lukewarm — Ben Edmonds in Rolling Stone found it short on \"sincere passion\" — though Robert Christgau in the Village Voice argued it achieved \"some of the symphonic dignity\" Dark Side only simulated. The public disagreed immediately: No. 1 in both the UK and US, with 900,000 US advance orders, and around 13 million copies sold by 2004. Its critical standing rose steadily afterwards. Wright later said it was \"an album I can listen to for pleasure, and there aren't many Floyd albums that I can.\"",
  ],

  listeningNotes: [
    {
      label: "Wine glasses as a keyboard",
      text: "The opening drone is glasses filled to different levels and played with wet fingers, then multi-tracked into chords. It's the first thing you hear and it isn't a synthesiser, though it's designed to be mistaken for one.",
    },
    {
      label: "Space as an instrument",
      text: "Long stretches pass with almost nothing happening — single held notes, slow fades. The patience is the point; the record uses duration to create the sense of something missing.",
    },
    {
      label: "A radio tuning in",
      text: "The title track fades up out of a radio being tuned, recorded off Gilmour's car radio and catching the end of Tchaikovsky's Fourth Symphony. The song appears to arrive from somewhere else rather than simply starting.",
    },
    {
      label: "A guest lead vocal",
      text: "Waters couldn't manage the vocal on one of the industry tracks after the demands of the long piece, so folk singer Roy Harper sang it instead — a decision Waters later said he regretted. It's the one voice on the record that isn't the band.",
    },
    {
      label: "The EMS synthesiser wash",
      text: "Much of the machine-like texture comes from an EMS VCS 3, with acoustic guitar layered over it to keep things from turning purely electronic. That contrast carries most of the album's middle.",
    },
    {
      label: "Packaging that hides itself",
      text: "Hipgnosis wrapped the sleeve in opaque black shrink-wrap so you couldn't see the cover — absence applied to the object. The burning-handshake image underneath used stuntmen, one of whom was actually burned when the wind turned.",
    },
  ],

  sources: [
    { title: "Wish You Were Here (Pink Floyd album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Wish_You_Were_Here_(Pink_Floyd_album)" },
    { title: "Syd Barrett's surprise visit to Pink Floyd's studio — Louder", url: "https://www.loudersound.com/features/syd-barrett-visits-pink-floyd-1975" },
    { title: "When Syd Barrett Visited a Pink Floyd Recording Session — Ultimate Classic Rock", url: "https://ultimateclassicrock.com/syd-barrett-wish-you-were-here-sessions/" },
  ],

  influencedBy: [
    { artist: "Pink Floyd", album: "The Dark Side of the Moon", year: "1973", note: "Its immediate predecessor and the pressure this album was made under; the studio-texture approach carries straight over." },
    { artist: "Pink Floyd", album: "The Piper at the Gates of Dawn", year: "1967", note: "The Barrett-led debut whose author is the absent subject here; the album quotes his song \"See Emily Play\"." },
  ],

  influenced: [
    { artist: "Radiohead", album: "OK Computer", year: "1997", note: "A widely drawn line: long-form alienation rock built on studio texture and anti-industry themes." },
    { artist: "Porcupine Tree", album: "In Absentia", year: "2002", note: "Part of the progressive rock lineage that took this album's patience and space as a working model." },
  ],
});
