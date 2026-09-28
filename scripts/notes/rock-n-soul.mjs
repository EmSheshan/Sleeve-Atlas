import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Solomon Burke",
  album: "Rock 'N Soul",
  year: "1964",
  heading: "Rock 'N Soul — Solomon Burke (1964)",

  albumLine:
    "Released July 1964 on Atlantic, produced by Bert Berns. It gathers a run of singles — seven of them charting in the Hot 100 — from the man Atlantic were selling as the King of Rock 'n' Soul, and it is as close as the label came to defining the genre it had just named.",

  overview: [
    "He was a preacher first, and never stopped being one. Born James Solomon McDonald in West Philadelphia in 1940, he was consecrated a bishop at birth by his grandmother Eleanor Moore, who had founded the congregation he grew up in; he began preaching at seven and was billed as the Boy Wonder Preacher, with a gospel radio show and tent revivals through Maryland, Virginia and the Carolinas. After a false start at Apollo Records and a spell trained as a mortician, he signed to Atlantic in November 1960 on what he described as a handshake with Jerry Wexler and Ahmet Ertegun.",

    "The title is literal. In November 1963 a Baltimore disc jockey, Fred \"Rockin' Robin\" Robinson, crowned him King of Rock 'n' Soul on stage at the Royal Theatre, with an ermine-trimmed cape and a replica of the British crown jewels. His defence of the name is the clearest short statement of what the music was doing: \"without soul, there'd be no rock and without rock, there'd be no soul.\" James Brown later paid him $7,500 for the robe and crown; Burke took the money and kept the title.",

    "That showmanship is usually credited to Brown, and the order matters — Burke's capes, crowns and revival-meeting staging came first. So did the word. He is generally credited with coining \"soul music\" in conversation with a Philadelphia DJ, which makes this album a founding document by the person who named the thing.",

    "Bert Berns produced, and the material is built to carry a voice rather than a production: gospel phrasing over country chord changes and a Memphis rhythm section. Wexler called him \"the greatest male soul singer of all time,\" praising a delivery that was \"churchy without being coarse.\" Despite that, and seventeen million records sold by 2005, he is routinely described as soul's most overlooked major figure — the one whose name doesn't come up beside Otis Redding and Wilson Pickett. \"Everybody Needs Somebody to Love,\" which he wrote here with Berns and Wexler, is the song most people know without knowing it is his.",
  ],

  listeningNotes: [
    {
      label: "A sermon's timing",
      text: "He builds by repeating and delaying a phrase, letting the band hang while he talks over it. The structure is preaching, applied to a three-minute single.",
    },
    {
      label: "Country songs sung as gospel",
      text: "Several tracks take Nashville chord movement and plain narrative lyrics and deliver them with church phrasing — the hybrid Atlantic were calling soul.",
    },
    {
      label: "Spoken introductions",
      text: "He opens songs by addressing the listener directly before any singing starts, a revival-tent device that predates almost everyone who copied it.",
    },
    {
      label: "Restraint held until it breaks",
      text: "He sings much of each song well within himself and only opens up at the end, so the climax is a genuine event rather than the default volume.",
    },
    {
      label: "Female backing voices as congregation",
      text: "The responses behind him answer rather than harmonise, which keeps the call-and-response of a church service intact inside a pop arrangement.",
    },
  ],

  sources: [
    { title: "Rock 'N Soul (Solomon Burke album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Rock_%27N_Soul_(Solomon_Burke_album)" },
    { title: "Solomon Burke — Wikipedia", url: "https://en.wikipedia.org/wiki/Solomon_Burke" },
    { title: "Everybody Needs Somebody to Love — Wikipedia", url: "https://en.wikipedia.org/wiki/Everybody_Needs_Somebody_to_Love" },
  ],

  influencedBy: [
    { artist: "Ray Charles", album: "Modern Sounds in Country and Western Music", year: "1962", note: "The immediate precedent for a gospel-trained Black singer taking country material seriously, which is much of what this album does." },
    { artist: "Sam Cooke", album: "Live at the Harlem Square Club, 1963", year: "1963", note: "The move from the gospel circuit into secular song without losing the delivery, and the same preacher's control of an audience." },
  ],

  influenced: [
    { artist: "The Rolling Stones", album: "The Rolling Stones", year: "1964", note: "They covered \"Everybody Needs Somebody to Love\" within months, and it became a fixture of their live set for decades." },
    { artist: "Otis Redding", album: "Otis Blue", year: "1965", note: "The Atlantic-and-Stax soul voice as its own commercial category, which Burke's run of hits established first." },
  ],
});
