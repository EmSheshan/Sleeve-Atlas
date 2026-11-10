import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Wu-Tang Clan",
  album: "Enter The Wu-Tang (36 Chambers)",
  year: "1993",
  heading: "Enter The Wu-Tang (36 Chambers) — Wu-Tang Clan (1993)",

  albumLine:
    "Released 9 November 1993 on Loud and RCA, produced, mixed, arranged and programmed single-handedly by Robert Diggs, the producer and rapper known as RZA. It's hardcore East Coast hip-hop — pitched soul loops, kung fu dialogue, nine MCs — and it's the Wu-Tang Clan's debut, cut at Firehouse Studio in New York on almost no money.",

  overview: [
    "By 1991 two of the group's founders had been signed and dropped — rapper Gary Grice, now GZA, by Cold Chillin', and RZA by Tommy Boy, which, he wrote in The Wu-Tang Manual, \"made the decision to sign House of Pain over us.\" He and rapper Dennis Coles — Ghostface Killah — planned a group built on \"Eastern philosophy picked up from kung fu movies, watered-down Five-Percent Nation preaching picked up on the New York streets, and comic books.\" They came from Staten Island, which rapper Raekwon has called \"still a mystery to everybody\"; getting signed was \"a revenge move for us to get back on.\"",

    "In 1993 hip-hop belonged to West Coast G-funk, to the jazz-leaning A Tribe Called Quest — whose third album arrived the same day as this one. The Clan went the other way, pressing their own 12-inch in December 1992, which RZA funded by charging each rapper who wanted an A-side verse (Wikipedia says $100; Ghostface Killah remembers $50). Labels balked at the headcount: \"Nah, it's not gonna work. There's too many a y'all.\" Steve Rifkind, who founded Loud Records, heard the single in his car — \"Wow, this record's really hard. It's amazing. But there's no hook\" — and signed them on the spot. What won them, per Ghostface, was terms rather than money: \"we wanted creative control over our shit,\" plus freedom for each member to sign solo deals elsewhere.",

    "The budget bought a small, cheap room with up to eight of the nine crowded in at once. RZA made the rappers battle for slots on each beat; one such contest became a track dropped from the album. Masta Killa, who joined while it was in production, won the single open verse that way: \"It was like, who's going to throw the slickest dart.\"",

    "It reached only number 41 on the Billboard 200 on 30,000 first-week copies, then never stopped selling — platinum by 1995, four times platinum by late 2025. Critic Robert Christgau, looking back, advised expecting \"a glorious human mess, as opposed to the ominous platinum product of their opposite numbers.\" It's now credited with pulling New York back to the centre of hip-hop and licensing a generation of producers to build beats from obscure soul records. Rolling Stone ranked it 27th of the 500 greatest albums in 2020, and the Library of Congress added it to the National Recording Registry in 2022.",
  ],

  listeningNotes: [
    {
      label: "Cheap gear as the sound",
      text: "Small rooms and worn equipment became the signature: drums blunt and bass-heavy rather than crisp, samples ringing with a hollow echo. How deliberate it was is contested — asked whether the stripped-down approach was intentional, Raekwon said only \"Natural. All that was natural.\"",
    },
    {
      label: "Pitched and warped soul loops",
      text: "RZA slowed samples to meet his tempo or sped them up into a thin, hurried register. Sampling soul piano and drums wasn't new; running them this far from their original pitch was.",
    },
    {
      label: "Kung fu dialogue as scene-setting",
      text: "Spoken clips from Shaolin and Wu Tang (1983) and Ten Tigers from Kwangtung (1979) open tracks and bridge between them, giving the record the shape of a film rather than a run of singles.",
    },
    {
      label: "Nine voices, no house style",
      text: "The most distinctive belong to rappers Ol' Dirty Bastard, an unsteady sing-song, and Method Man, blurred and low, against Raekwon's clipped speed. Because verse order was settled by battle, the running order doubles as a ranking.",
    },
    {
      label: "A whole track off one slowed loop",
      text: "\"C.R.E.A.M.\" rests on the Charmels' 1967 \"As Long As I've Got You,\" dropped in speed until the piano turns mournful.",
    },
  ],

  sources: [
    { title: "Wu-Tang Clan lecture (Raekwon, Ghostface Killah, Cappadonna, Masta Killa, Allah Mathematics) — Red Bull Music Academy", url: "https://www.redbullmusicacademy.com/lectures/wu-tang-lecture/" },
    { title: "Steve Rifkind Reflects on 30 Years of Loud Records — Okayplayer", url: "https://www.okayplayer.com/regrets-success-challenges-steve-rifkind-reflects-on-30-years-of-loud-records/428431" },
    { title: "Enter the Wu-Tang (36 Chambers) — Wikipedia", url: "https://en.wikipedia.org/wiki/Enter_the_Wu-Tang_(36_Chambers)" },
    { title: "Classic Album Review: Enter the Wu-Tang (36 Chambers) Still Sets the Gold Standard — Consequence", url: "https://consequence.net/2018/11/classic-album-review-wu-tang-clan-enter-the-wu-tang-36-chambers/" },
  ],

  influencedBy: [
    { artist: "Eric B. & Rakim", album: "Paid in Full", year: "1987", note: "RZA has called Rakim one of the greatest rap lyricists, and Raekwon named this a formative record; critic Gavin Mueller traced the Clan's dense, metaphor-packed battle rhymes straight back to him." },
    { artist: "Marley Marl", album: "In Control, Volume 1", year: "1988", note: "RZA has named Marl's Juice Crew as the structural model for Wu-Tang — a roster of distinct MCs built around one producer — and praised his chopped mid-eighties kicks and snares." },
    { artist: "De La Soul", album: "3 Feet High and Rising", year: "1989", note: "Produced by Prince Paul, whom RZA credits with pioneering the album skit and interlude; the spoken breaks that stitch this record together work the same way." },
  ],

  influenced: [
    { artist: "Mobb Deep", album: "The Infamous", year: "1995", note: "AllMusic calls its production directly indebted to RZA's early Wu-Tang work — the same dry, minor-key loops and blunt drums." },
    { artist: "Raekwon", album: "Only Built 4 Cuban Linx...", year: "1995", note: "RZA produced it alone in his home studio, carrying the pitched-soul-loop method of this album further into film-like narrative." },
    { artist: "Kanye West", album: "The College Dropout", year: "2004", note: "Critics credit this record's reliance on obscure soul samples as the precedent for West's sped-up soul vocal loops." },
  ],
});
