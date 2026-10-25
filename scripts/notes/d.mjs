import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "White Denim",
  album: "D",
  year: "2011",
  heading: "D — White Denim (2011)",

  albumLine:
    "Released 24 May 2011 on Downtown Records, produced by the band with Mike McCarthy. Garage-rock energy pulled toward progressive rock, psychedelia and Southern rock. It's White Denim's fourth album, and the first they made in a professional studio rather than a trailer.",

  overview: [
    "White Denim started gigging in Austin in 2006, a trio playing prog-rock technicality with garage-rock swagger. Their first three records were made in the trailer drummer Joshua Block lived in out in Driftwood, Texas, built up track by track rather than song by song. By 2010 that approach had priced itself out — Block's assessment was that \"the old method doesn't work unless we have like 100 Grand to spend.\"",

    "So this became, in Block's words, \"our first really standard studio album, as far as the process goes.\" Singer and guitarist James Petralli wrote on his porch and sent demos around; the band rehearsed them, then went into Lakeside Studio and Mob House in Austin with producer Mike McCarthy — known for a long run of Spoon records — and cut them live to tape, working through fourteen or fifteen songs. Petralli: \"We were more relaxed about takes and we spent more time on single sounds than we had before.\" Second guitarist Austin Jenkins, a country-rock student who had joined in 2010, arrived after basic tracking was finished, so most of his playing is overdubbed onto an album already standing.",

    "The record sits on a fault line. Petralli has called it \"a 'music obsessed' exercise,\" and the touchstones were deeply unfashionable for 2011: he named Yes as \"the big touchstone for that record,\" praised Soft Machine's debut — \"Soft Machine really got it right with their first record\" — and the band were listening to guitarist Albert Lee's country-rock group Heads, Hands & Feet. Pulling the other way was a label that wanted \"big songs and big hooks and stuff like that,\" plus the band's own nerves: \"We had put a lot of pressure on ourselves.\" Petralli's compromise was to make the prog legible rather than drop it. \"We don't want to alienate people and become a full-on prog band,\" he told The Quietus, but \"we are not going to make music that we don't like.\"",

    "It worked critically and almost nowhere else. AllMusic called it a masterpiece; Uncut placed it fourth on its 2011 list and Mojo sixth, while commercially it peaked at No. 16 on Billboard's Heatseekers chart. Its clearest afterlife is personnel: Jenkins and Block left in 2015 and produced Leon Bridges' debut.",
  ],

  listeningNotes: [
    {
      label: "Stacked guitars",
      text: "Petralli piled parts up rather than picking between them — \"I stacked up all these guitars,\" he said, and once Jenkins joined they added more. \"There are tracks on that record that have 10 guitars.\" They work as a mass, not as separate voices.",
    },
    {
      label: "Odd meters as the default",
      text: "Block reckoned unusual time signatures account for \"like, half the record.\" Riffs land a beat early or late often enough that the groove never quite settles.",
    },
    {
      label: "Live-to-tape band takes",
      text: "After three albums assembled piece by piece in a trailer, this one was rehearsed and then played as a band onto tape. The playing has the slight forward lean of people watching each other.",
    },
    {
      label: "Overdubbed solos from a late arrival",
      text: "Jenkins came in after the basics were down; Block credits him with the lead guitar on \"Street Joy,\" \"Keys\" and \"Drug.\" They sit on top of the arrangements rather than inside them.",
    },
    {
      label: "Flute and strings in a garage band",
      text: "Alex Coke plays flute, and a string section turns up on \"Keys.\" These are the acoustic textures that had reviewers calling the record warmer and swirlier than its predecessors.",
    },
    {
      label: "A buried quotation",
      text: "Petralli said he slipped partial quotes of the Grateful Dead's \"St. Stephen\" in for Deadheads to find — the kind of referencing he has since said he was trying to grow out of.",
    },
  ],

  sources: [
    { title: "Working Nine To Five: An Interview With White Denim — The Quietus (2011)", url: "https://thequietus.com/interviews/white-denim-interview-d/" },
    { title: "White Denim's Third Wind — Relix", url: "https://relix.com/features/detail/white_denims_third_wind" },
    { title: "Is and Is and Is: An Interview with White Denim — PopMatters", url: "https://www.popmatters.com/144556-is-and-is-and-is-an-interview-with-white-denim-2495989135.html" },
    { title: "D (White Denim album) — Wikipedia", url: "https://en.wikipedia.org/wiki/D_(White_Denim_album)" },
  ],

  influencedBy: [
    { artist: "Soft Machine", album: "The Soft Machine", year: "1968", note: "Petralli singled it out — \"Soft Machine really got it right with their first record.\" Jazz-schooled playing kept inside pop song lengths, which is the balance this album attempts." },
    { artist: "Yes", album: "Close to the Edge", year: "1972", note: "Petralli named the band, not a specific record, as \"the big touchstone\"; the stacked guitar counterpoint and mid-song meter changes are built the way this kind of prog is built." },
    { artist: "Heads Hands & Feet", album: "Heads Hands & Feet", year: "1971", note: "Guitarist Albert Lee's country-rock group, named by Petralli as session listening; the country guitar playing threaded under the heavier riffs comes from that direction." },
    { artist: "Grateful Dead", album: "Aoxomoxoa", year: "1969", note: "Petralli said he hid partial quotes of \"St. Stephen,\" which this album introduced, in the record for Deadheads." },
  ],

  influenced: [
    { artist: "Leon Bridges", album: "Coming Home", year: "2015", note: "Guitarist Austin Jenkins and drummer Joshua Block left White Denim and produced Bridges' debut — shared personnel, and the same preference for a band playing live to tape." },
  ],
});
