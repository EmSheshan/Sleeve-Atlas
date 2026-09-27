import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "ABC",
  album: "The Lexicon Of Love",
  year: "1982",
  heading: "The Lexicon of Love — ABC (1982)",

  albumLine:
    "Released 21 June 1982 on Neutron Records, produced by Trevor Horn with Steve Brown and engineered by Gary Langan. It's new pop at its most lavish — disco strings, synthesizers and heartbreak — and it's ABC's debut.",

  overview: [
    "The band came out of Sheffield, a city then producing austere electronic and post-punk music, and singer Martin Fry's stated ambition was to fuse two things that weren't supposed to go together: the orchestration of Chic and Earth, Wind & Fire \"with the likes of the Cure and Joy Division.\" That's the record in a sentence. The emotional content is post-punk — bitterness, self-consciousness, romantic failure — delivered in a gold lamé suit over arrangements built for a dancefloor.",

    "The sound is inseparable from Trevor Horn, who was in the middle of reinventing himself as pop's most maximalist producer. Recording ran across 1981 and 1982 through five London studios — Sarm East, Abbey Road, Townhouse, RAK and Good Earth — with Anne Dudley writing the orchestrations and playing keyboards, and J.J. Jeczalik programming the Fairlight CMI, then a new and enormously expensive sampling machine. The same core team would shortly become Art of Noise.",

    "Horn's methods were exacting. Fry's vocals were spread across seven tracks on the desk, with each song sung seven times and the final performance assembled from the best fragments of all of them. The effect is a record where nothing is accidental: every string stab, every sax entrance and every gated drum hit is placed. In 1982 that was still a relatively new way to make pop, and it's part of why the album reads as a landmark of studio craft rather than of songwriting alone.",

    "It entered the UK chart at No. 1 and stayed on it for fifty weeks, going platinum and finishing as the fourth biggest-selling British album of the year, with four Top 20 singles. In the US it reached No. 24 and went gold. Robert Christgau gave it an A− and credited Fry's \"clever\" handling of \"synthetic funk rhythms.\" Its reputation has held up well; it's routinely named among the best albums of the eighties, and its particular combination — real orchestras, new sampling technology, and irony worn openly — became a template a great deal of mid-eighties British pop worked from.",
  ],

  listeningNotes: [
    {
      label: "Orchestra used like a rhythm section",
      text: "Anne Dudley's strings don't swell in the background; they punch in short, sharp stabs on the beat, doing the job a guitar would. It's the disco-orchestra approach of Chic, scaled up.",
    },
    {
      label: "A vocal assembled from seven takes",
      text: "Horn had Fry sing each song seven times across seven desk tracks, then built the keeper from the best pieces. The result is unnaturally consistent — no weak lines, and very little of the wobble a single take leaves in.",
    },
    {
      label: "The Fairlight underneath",
      text: "J.J. Jeczalik programmed a Fairlight CMI, then a brand-new sampler. Some percussive and orchestral hits you take for real players are sampled and triggered, which is why they repeat with machine precision.",
    },
    {
      label: "Saxophone as a pop hook",
      text: "Stephen Singleton's sax carries melodic lines rather than solos, sitting in the arrangement like a second voice — a sound that would be everywhere in British pop within two years.",
    },
    {
      label: "Spoken asides and studio chatter",
      text: "Dialogue, count-ins and spoken interjections are left in and mixed forward, breaking the polish on purpose and keeping the record's arch, self-aware tone visible.",
    },
    {
      label: "Misery in a major key",
      text: "Almost every song is about rejection or self-deception, set to arrangements that are glossy and upbeat. That mismatch is the album's governing joke, and it's sustained from first track to last.",
    },
  ],

  sources: [
    { title: "The Lexicon of Love — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Lexicon_of_Love" },
    { title: "Classic Album: The Lexicon Of Love — Classic Pop", url: "https://www.classicpopmag.com/features/classic-album/abc-lexicon-love-classic-album/" },
    { title: "Revisiting: ABC — The Lexicon of Love — DCS Audio", url: "https://dcsaudio.com/edit/revisiting-abc-the-lexicon-of-love" },
  ],

  influencedBy: [
    { artist: "Chic", album: "Risqué", year: "1979", note: "Fry named Chic's string arrangements as a direct model; the staccato disco-orchestra attack is lifted from here." },
    { artist: "Roxy Music", album: "Avalon", year: "1982", note: "Bryan Ferry's lounge-lizard persona and sleek art-pop are the clearest precedent for Fry's gold-suited frontman act." },
    { artist: "Joy Division", album: "Closer", year: "1980", note: "Named by Fry alongside the Cure as the post-punk half of the equation — the emotional register the glossy arrangements are carrying." },
  ],

  influenced: [
    { artist: "Art of Noise", album: "Who's Afraid of the Art of Noise?", year: "1984", note: "Horn, Dudley and Jeczalik formed Art of Noise directly out of this team, taking the Fairlight work much further." },
    { artist: "Frankie Goes to Hollywood", album: "Welcome to the Pleasuredome", year: "1984", note: "Horn's maximalist production method, proven here, applied on a still larger scale." },
    { artist: "Scritti Politti", album: "Cupid & Psyche 85", year: "1985", note: "Part of the same new pop turn — post-punk musicians making immaculate, ironic chart records." },
  ],
});
