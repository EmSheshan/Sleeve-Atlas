import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Aretha Franklin",
  album: "I Never Loved a Man the Way I Love You",
  year: "1967",
  heading: "I Never Loved a Man the Way I Love You — Aretha Franklin (1967)",

  albumLine:
    "Released 10 March 1967 on Atlantic, produced by Jerry Wexler and recorded that January and February between FAME Studios in Muscle Shoals, Alabama and Atlantic's own rooms in New York. It's Southern soul — and the record where Aretha Franklin, after eight albums, finally sounded like herself.",

  overview: [
    "She had been at Columbia since 1960, where producers had aimed her at jazz standards and supper-club material. She was plainly gifted and the records plainly didn't work. Wexler's insight at Atlantic was simple: put her behind a piano, surround her with a Southern rhythm section, and let her arrange her own vocals the way she'd learned in her father's church in Detroit.",

    "The first session, at Rick Hall's FAME Studios in Muscle Shoals, produced the title track and then collapsed. An altercation involving Franklin's husband Ted White, the trumpeter Ken Laxton and Hall ended the trip; Wexler moved everything to New York and flew the Muscle Shoals players up to finish. The racial dynamics of a Black singer from Detroit recording with an all-white Alabama rhythm section in 1967 are part of the story, as is how quickly it went wrong.",

    "What survived is extraordinary. Franklin plays piano throughout, which matters — the gospel phrasing in her right hand shapes the arrangements. Her sisters Carolyn and Erma sing backing vocals alongside Cissy Houston, and the call-and-response between them is church practice imported wholesale. King Curtis plays saxophone. The rhythm section is loose, unhurried and sits behind the beat.",

    "The song everyone knows is a cover. Otis Redding had recorded \"Respect\" in 1965 as a man asking for deference when he got home; Franklin rearranged it — adding the spelled-out chorus and the \"sock it to me\" backing line — and turned it into a demand. Redding reportedly acknowledged she had taken the song from him. It went to No. 1 and became a civil rights and feminist anthem neither writer had planned. The album reached No. 2 on the Billboard 200, spent fourteen weeks atop the R&B chart, and now sits thirteenth on Rolling Stone's list of the greatest albums ever made.",
  ],

  listeningNotes: [
    {
      label: "Franklin's own piano",
      text: "She plays throughout, in a gospel style full of rolling triplets and church cadences. The arrangements follow her hands rather than the other way round.",
    },
    {
      label: "Call and response with her sisters",
      text: "Carolyn and Erma Franklin, with Cissy Houston, answer her lines directly rather than harmonising underneath. It's the structure of a congregation responding to a preacher.",
    },
    {
      label: "A rhythm section playing late",
      text: "The Muscle Shoals players sit noticeably behind the beat, which gives even the fast songs a dragging, unhurried weight. It's the defining feel of Southern soul.",
    },
    {
      label: "Melisma used as argument",
      text: "She bends single syllables across many notes, but always to intensify meaning rather than to decorate — a gospel device deployed with unusual discipline.",
    },
    {
      label: "The rearranged cover",
      text: "\"Respect\" is restructured from its original: the spelled-out chorus and the answering backing vocals are Franklin's additions, and they change what the song is about.",
    },
    {
      label: "Audible session seams",
      text: "Overdubs finished in New York after the Alabama session collapsed left small tuning inconsistencies. They're faint, and knowing the story makes them audible.",
    },
  ],

  sources: [
    { title: "I Never Loved a Man the Way I Love You — Wikipedia", url: "https://en.wikipedia.org/wiki/I_Never_Loved_a_Man_the_Way_I_Love_You" },
    { title: "Aretha Franklin — Wikipedia", url: "https://en.wikipedia.org/wiki/Aretha_Franklin" },
    { title: "Respect (song) — Wikipedia", url: "https://en.wikipedia.org/wiki/Respect_(song)" },
  ],

  influencedBy: [
    { artist: "Ray Charles", album: "Modern Sounds in Country and Western Music", year: "1962", note: "The figure who first moved gospel technique wholesale into secular music, and the model for Franklin's approach." },
    { artist: "Otis Redding", album: "Otis Blue", year: "1965", note: "Source of \"Respect,\" and the Stax Southern soul idiom this record works within." },
  ],

  influenced: [
    { artist: "Whitney Houston", album: "Whitney Houston", year: "1985", note: "Cissy Houston sang backing vocals here; her daughter's career descends directly from this gospel-into-pop lineage." },
    { artist: "Amy Winehouse", album: "Back to Black", year: "2006", note: "The revival of live Southern soul arrangement behind a singer working in gospel phrasing." },
    { artist: "Alicia Keys", album: "Songs in A Minor", year: "2001", note: "The model of a singer accompanying herself at the piano in a soul idiom, writing the material as well as performing it." },
  ],
});
