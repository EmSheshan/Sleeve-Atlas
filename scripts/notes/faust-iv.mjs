import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Faust",
  album: "Faust IV",
  year: "1973",
  heading: "Faust IV — Faust (1973)",

  albumLine:
    "Released 21 September 1973 on Richard Branson's new Virgin Records, produced by Uwe Nettelbeck and recorded that June at The Manor, Virgin's own studio in Oxfordshire — not, as often assumed, at the band's old schoolhouse in Wümme. It's a German free-noise collective given an English pop label's budget: tape collage and cut-up editing sitting right next to something close to an actual song.",

  overview: [
    "Faust formed in Hamburg in 1970 at the instigation of Uwe Nettelbeck, a music journalist turned producer who pulled together Jean-Hervé Péron, Hans Joachim Irmler, Rudolf Sosna, Gunther Wüsthoff and drummer Werner \"Zappi\" Diermaier, with engineer Kurt Graupner, and sold Polydor on backing a German answer to the Beatles' own studio experiments. Polydor financed a private studio for them: a converted schoolhouse in the village of Wümme, near Bremen, where the band lived and recorded for three years with no deadlines and no outside interference. The first two albums sold almost nothing, and Polydor dropped them in 1972.",

    "What saved them was a stunt. Nettelbeck assembled The Faust Tapes largely from studio off-cuts and licensed it to the fledgling Virgin Records, who released it in Britain that May at the price of a single — 49 pence — alongside Mike Oldfield's Tubular Bells, one of the label's first four titles. It was a loss-making dare by Richard Branson to put a difficult German band into British homes, and it worked: the record reportedly sold past 50,000 copies, too cheap to chart but impossible to ignore. Virgin's reward was a real budget for Faust IV, recorded that June at the label's own Manor Studio rather than Wümme.",

    "The album opens with its own joke: an eleven-minute track called \"Krautrock,\" a single hypnotic guitar drone, named after the dismissive tag British journalists had pinned on a whole scene of otherwise unrelated German bands. Péron later said the English use of the word made the band feel the press was \"just taking the piss\"; naming a track after it was grabbing the insult before shrugging it off again. From there the record swings between musique concrète techniques — abrupt edits, found sound, a stray voice dropped in and yanked out — and passages that are disarmingly pretty, \"Jennifer\" being the clearest case, a drifting near-ballad Pitchfork singled out as proof the band could write an actual song.",

    "Faust IV was the last record the original lineup made and the band's last for Virgin, who dropped them soon after; Faust effectively dissolved for the rest of the decade. Contemporary response was bemused — Spin later called it their \"handsomely failed attempt to sound normal\" — but its reputation grew steadily. It's listed in 1001 Albums You Must Hear Before You Die as a krautrock classic, and the band's tape-collage method became a reference point for later noise, industrial and post-punk acts.",
  ],

  listeningNotes: [
    {
      label: "\"Krautrock\" as rebuttal",
      text: "The opener is named after the term British critics used to lump together unrelated German bands; the answer is an eleven-minute drone that refuses to resolve into a song.",
    },
    {
      label: "The pivot to pop",
      text: "\"Jennifer\" follows as a genuine, slow-burning near-ballad on pulsing bass and clean guitar — the record's biggest surprise, and proof Faust could write conventionally when it suited them.",
    },
    {
      label: "Cut-and-splice editing",
      text: "Listen for sudden, unexplained edits throughout: a voice or a loop dropped in and yanked out again, inherited from musique concrète technique rather than studio polish.",
    },
    {
      label: "\"Giggy Smile\" plays it straight",
      text: "The one track left almost entirely alone, with no splices and a real rock arrangement — and still the strangest-sounding song here, baffling melody included.",
    },
    {
      label: "A nod to Kraftwerk",
      text: "The synth pulse and handclaps on \"Läuft...\" sound close to Kraftwerk's Autobahn, released the same year, before dissolving back into acoustic guitar.",
    },
    {
      label: "A deadpan ending",
      text: "\"It's a Bit of a Pain\" closes the record as a gentle acoustic number interrupted by ugly synth bursts and a woman's voice talking over the fade.",
    },
  ],

  sources: [
    { title: "Faust IV — Wikipedia", url: "https://en.wikipedia.org/wiki/Faust_IV" },
    { title: "Faust (band) — Wikipedia", url: "https://en.wikipedia.org/wiki/Faust_(band)" },
    { title: "Krautrock — Wikipedia", url: "https://en.wikipedia.org/wiki/Krautrock" },
    { title: "Nurse with Wound list — Wikipedia", url: "https://en.wikipedia.org/wiki/Nurse_with_Wound_list" },
    { title: "Faust IV — AllMusic", url: "https://www.allmusic.com/album/faust-iv-mw0000102835" },
  ],

  influencedBy: [
    { artist: "Karlheinz Stockhausen", album: "Gesang der Jünglinge", year: "1956", note: "Landmark electronic/musique concrète composition that established the tape-splice, found-sound vocabulary the band pushed into a rock context." },
    { artist: "The Beatles", album: "The Beatles (White Album)", year: "1968", note: "\"Revolution 9\" was the prominent prior example of musique concrète tape collage surfacing on a rock record; Faust built an entire method out of what was there a one-off novelty." },
    { artist: "Pierre Schaeffer", album: "Cinq études de bruits", year: "1948", note: "The foundational musique concrète work — composing directly with recorded, edited sound rather than notation — that the band's tape-based studio method descends from." },
  ],

  influenced: [
    { artist: "Nurse with Wound", album: "Chance Meeting on a Dissecting Table of a Sewing Machine and an Umbrella", year: "1979", note: "Faust appears by name on the sleeve's famous \"NWW list\" of acts acknowledged as influences on the band's own collage-noise method." },
    { artist: "The Fall", album: "Live at the Witch Trials", year: "1979", note: "Mark E. Smith named Faust alongside Can as a touchstone for the band's repetitive, tape-experiment-inflected early sound." },
    { artist: "Throbbing Gristle", album: "The Second Annual Report", year: "1977", note: "Industrial music's founding record carries forward Faust's tape-loop noise-collage approach into a more hostile, confrontational register." },
    { artist: "Sonic Youth", album: "Confusion Is Sex", year: "1983", note: "Sonic Youth have named Faust among their influences; this is the most abrasive, detuned, collage-built record in their early catalogue." },
  ],
});
