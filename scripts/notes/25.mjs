import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Adele",
  album: "25",
  year: "2015",
  heading: "25 — Adele (2015)",

  albumLine:
    "Released 20 November 2015 on XL Recordings and Columbia, eleven tracks over forty-eight minutes, built with a rotating cast of producers including Greg Kurstin, Paul Epworth, Max Martin and Mark Ronson. It's mainstream pop and soul balladry — her third album, and the last record to sell like it was 1997.",

  overview: [
    "The situation she was answering was mostly her own. \"21\" had been the biggest album of the decade to that point, which left her four years with nothing to write about except being famous and being a new mother. She wrote a whole album on the second subject and threw it away, telling the BBC's Nick Grimshaw she found it \"boring.\" What she settled on instead she described as a \"make-up record\" — the counterpart to \"21\" being a break-up record — largely about nostalgia and the distance between who you were and who you have become.",

    "The commercial facts are the reason it's in a canon list. It sold 3.38 million copies in America in its first week, a record that still stands, and 800,307 in Britain, the fastest-selling UK album ever. Globally it moved 5.7 million in seven days and has passed 22 million. Shops that had spent a decade shrinking their CD racks ran out of stock.",

    "That happened partly because she withheld it from streaming. In November 2015 it went on sale to buy and nowhere else — not Spotify, not Apple Music — a decision she was personally behind, and one of the last times an artist had the leverage to make it work. The industry read it as a test of whether ownership still had a market. It did, once, and then the window closed; treating \"25\" as the final data point of the album-sales era is not an exaggeration.",

    "Musically it is looser and more electronic than her earlier work, with eighties R&B colouring and a set of producers who mostly make hits for other people — which is the record's one real tension, since the songs are personal and the production is professionalised. Danger Mouse produced \"River Lea\"; Tobias Jesso Jr. co-wrote \"When We Were Young.\" Rolling Stone gave it five stars, Entertainment Weekly an A−, and Metacritic settles at 75, which is respectful rather than rapturous. It took the Grammy for Album of the Year in 2017 and the BRIT for British Album of the Year in 2016.",
  ],

  listeningNotes: [
    {
      label: "The voice recorded close and dry",
      text: "Her vocal sits right at the front with very little reverb, so you hear breath, cracks and the catch in her lower register. Most of the album's emotional information is in that texture.",
    },
    {
      label: "Piano or nothing, then everything",
      text: "Several songs open with a single keyboard and a voice and hold there for a long time before the full arrangement arrives. The withheld entrance is the record's main structural device.",
    },
    {
      label: "Eighties R&B production touches",
      text: "Gated drums, synth pads and slap-bass inflections appear where her earlier records used sixties soul instrumentation. It's the clearest sign of the shift in collaborators.",
    },
    {
      label: "Choirs and stacked backing vocals",
      text: "Gospel-style massed voices come in at climaxes, often her own multi-tracked, turning a confessional song into something congregational.",
    },
    {
      label: "Hooks written for volume",
      text: "The choruses are pitched high in her range and built on long-held notes, designed to be sung badly by a lot of people at once. That's a Max Martin instinct applied to soul material.",
    },
  ],

  sources: [
    { title: "25 (Adele album) — Wikipedia", url: "https://en.wikipedia.org/wiki/25_(Adele_album)" },
    { title: "Adele's '25' won't be available on any streaming services — NBC News", url: "https://www.nbcnews.com/pop-culture/music/adeles-25-wont-be-available-any-streaming-services-n467486" },
    { title: "River Lea (song) — Wikipedia", url: "https://en.wikipedia.org/wiki/River_Lea_(song)" },
  ],

  influencedBy: [
    { artist: "Dusty Springfield", album: "Dusty in Memphis", year: "1969", note: "The template of a British woman singing American soul with complete conviction and no affectation of Blackness." },
    { artist: "Amy Winehouse", album: "Back to Black", year: "2006", note: "Reopened the British soul-revival lane Adele walked into, and shares her early producer Mark Ronson." },
  ],

  influenced: [
    { artist: "Lewis Capaldi", album: "Divinely Uninspired to a Hellish Extent", year: "2019", note: "The British piano-and-big-voice heartbreak album as a mass-market format, which this record proved still had buyers." },
  ],
});
