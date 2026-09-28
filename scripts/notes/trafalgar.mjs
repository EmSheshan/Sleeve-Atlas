import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Bee Gees",
  album: "Trafalgar",
  year: "1971",
  heading: "Trafalgar — Bee Gees (1971)",

  albumLine:
    "Released September 1971 in America and November in Britain, produced by Robert Stigwood with the group, and recorded at IBC Studios in London between January and April. It's orchestral pop and soft rock, almost entirely ballads — their ninth album, and the one that gave them their first American No. 1.",

  overview: [
    "The three brothers — Barry Gibb on guitar and vocals, Robin Gibb on vocals, Maurice Gibb on vocals and keyboards — were born on the Isle of Man, raised in Manchester and then in Queensland, and had been a working act since childhood. Geoff Bridgford played drums, his only full album as an official member, and Alan Kendall joined on guitar. The name, incidentally, does not come from \"Brothers Gibb\": a Brisbane radio presenter coined \"the BGs\" from his own initials, a speedway promoter's and Barry's.",

    "They had come very close to not existing. In 1969 Robin left, feeling Stigwood was pushing Barry as the frontman, after an argument over which side of a single should be the A-side; Barry and Maurice went their own ways that December. The reunion was almost casual — Barry's account is that \"Robin rang me in Spain where I was on holiday [saying] 'let's do it again'\" — and they agreed never to split again. This is the second album after that, and the sound of a band being deliberately careful with something they nearly lost.",

    "What they made is unfashionable in an interesting way. 1971 was the year of \"Led Zeppelin IV\", \"Who's Next\" and \"What's Going On\" — rock getting heavier and soul getting political — and the Bee Gees responded with a set of orchestrated ballads about heartbreak, with strings, restraint and nothing resembling a riff. It sounds less like its contemporaries than like the Brill Building a decade earlier, or like film music.",

    "\"How Can You Mend a Broken Heart?\" went to No. 1 in America, their first, and did not chart in Britain at all — a split that says something about both markets. The album itself reached only No. 34. What followed was worse: by 1973 they were selling badly and playing small clubs, until the producer Arif Mardin pushed them towards soul and R&B, they moved to Miami, and \"Jive Talkin'\" in 1975 began the run that ended in \"Saturday Night Fever.\" So this record is the last clear look at the group as balladeers before the falsetto and the dance floor rewrote what their name means.",
  ],

  listeningNotes: [
    {
      label: "Three-part sibling harmony",
      text: "The blend is unusually tight because they had been singing together since childhood, and the voices share a timbre no assembled group can fake.",
    },
    {
      label: "Robin's vibrato lead",
      text: "His quavering, almost keening delivery carries much of the album — the sound of the early Bee Gees, and nothing like the falsetto Barry became famous for later.",
    },
    {
      label: "Orchestra as the main instrument",
      text: "Strings and horns do the work a band would normally do, with guitar and drums pushed well back. Several tracks have almost no rhythm section presence at all.",
    },
    {
      label: "Ballad tempos throughout",
      text: "Nothing here is fast. The album commits entirely to one pace, which is either its weakness or the reason it holds together, depending on the listener.",
    },
    {
      label: "An instrumental title track",
      text: "The closing piece is orchestral and wordless, closer to a film cue than to pop, and shows how far from a rock band they were willing to sit.",
    },
  ],

  sources: [
    { title: "Trafalgar (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Trafalgar_(album)" },
    { title: "Bee Gees — Wikipedia", url: "https://en.wikipedia.org/wiki/Bee_Gees" },
    { title: "How Can You Mend a Broken Heart — Wikipedia", url: "https://en.wikipedia.org/wiki/How_Can_You_Mend_a_Broken_Heart" },
  ],

  influencedBy: [
    { artist: "The Beatles", album: "Rubber Soul", year: "1965", note: "The model for a British group writing their own melodic pop with expanding studio ambition, which the Bee Gees followed closely." },
    { artist: "The Ronettes", album: "Presenting the Fabulous Ronettes", year: "1964", note: "The orchestrated heartbreak ballad as a complete form, which this album returns to almost unchanged." },
  ],

  influenced: [
    { artist: "Bee Gees", album: "Saturday Night Fever", year: "1977", note: "Their own pivot six years later — same three voices and songwriting, rebuilt around rhythm instead of strings." },
    { artist: "Al Green", album: "Let's Stay Together", year: "1972", note: "His reading of \"How Can You Mend a Broken Heart\" appeared within months and is for many listeners the definitive version." },
  ],
});
