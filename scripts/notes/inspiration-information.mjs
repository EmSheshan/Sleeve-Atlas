import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Shuggie Otis",
  album: "Inspiration Information",
  year: "1974",
  heading: "Inspiration Information — Shuggie Otis (1974)",

  albumLine:
    "Released in October 1974 on Epic Records — the last record owed under his three-album contract — written, played and largely engineered alone by Shuggie Otis, who had just turned twenty-one, across three years in a studio his father had built in the family's backyard. It's psychedelic soul made as a one-man home recording rather than a band performance.",

  overview: [
    "Shuggie Otis was born in 1953 into the middle of the Los Angeles R&B world his father, bandleader Johnny Otis, had helped build. He started on guitar at two and was sitting in with his father's band by eleven, disguised in dark glasses and a false mustache to get into after-hours clubs underage. At fifteen his guitar playing turned up on his father's Cold Shot!; that year he also recorded Al Kooper's Kooper Session in New York, in a single weekend. He made his own first album, Here Comes Shuggie Otis, at sixteen, and Freedom Flight — produced by his father, and the source of \"Strawberry Letter 23\" — at seventeen. Inspiration Information was the first record he made without Johnny Otis producing.",

    "It wasn't made in isolation from his family — Johnny Otis persuaded Columbia to fund a sixteen-track studio, Hawk Sound, in the Otis family's backyard in West Athens, and served as the album's executive producer. Inside that studio, though, Shuggie did almost everything himself — guitar, bass, drums, organ, piano, electric piano, vibraphone, percussion, and lead and backing vocals, engineering his own overdubs across three years of sessions, with outside players brought in only for horns, flute, harp and some strings.",

    "What made it strange for 1974 was the drum machine. Otis built several tracks around an analog rhythm box instead of a live kit, a choice almost nobody else in soul or funk was making — the nearest precedent is Sly Stone's use of a Maestro Rhythm King on There's a Riot Goin' On three years earlier, also on Epic. Paired with Otis's hushed, close-mic'd vocals and unhurried tempos, it gives the record a private, interior quality: less a studio band's performance than a long, solitary conversation with a tape machine.",

    "The album stalled at No. 181 on the Billboard 200, the title single peaked at No. 56 on the R&B chart, and Epic dropped him. Otis effectively disappeared from recording for decades, kept alive by his reputation among crate-diggers and by praise from musicians including Prince and Lenny Kravitz. In 2001, David Byrne's label Luaka Bop reissued Inspiration Information with four bonus tracks pulled from Freedom Flight, introducing it to an audience shaped by neo-soul's own interest in self-played, self-produced records. Sharon Jones & the Dap-Kings covered the title track for the 2009 compilation Dark Was the Night. It's now treated as a quietly foundational record rather than a curiosity.",
  ],

  listeningNotes: [
    {
      label: "The drum machine pulse",
      text: "Several tracks run on a boxy analog rhythm box instead of a live kit — rare in soul music this early, and part of what makes the record feel private rather than performed.",
    },
    {
      label: "Otis's guitar",
      text: "His lead lines are fluid and unhurried, closer to a quiet conversation than a solo. Listen for how rarely he reaches for a flashy run.",
    },
    {
      label: "Stacked, solitary vocals",
      text: "The backing harmonies are Otis overdubbing himself alone in the room, which gives the vocal blend a slightly uncanny evenness no group session would produce.",
    },
    {
      label: "The hush of a backyard studio",
      text: "Everything sits close and dry rather than big and reverberant — the sound of a record made at home, not in a commercial room built for a full band.",
    },
    {
      label: "\"Island Letter\" and \"Sparkle City\"",
      text: "The two longer tracks stretch toward six minutes and carry the blues and jazz chording he absorbed from his father's circle, underneath the electric surface.",
    },
    {
      label: "\"Not Available\"",
      text: "The closing track runs barely two and a half minutes, a brief, unresolved sketch that ends the album mid-thought rather than on a statement.",
    },
  ],

  sources: [
    { title: "Inspiration Information — Wikipedia", url: "https://en.wikipedia.org/wiki/Inspiration_Information" },
    { title: "Shuggie Otis — Wikipedia", url: "https://en.wikipedia.org/wiki/Shuggie_Otis" },
    { title: "Freedom Flight (Shuggie Otis album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Freedom_Flight_(Shuggie_Otis_album)" },
    { title: "There's a Riot Goin' On — Wikipedia", url: "https://en.wikipedia.org/wiki/There%27s_a_Riot_Goin%27_On" },
    { title: "Shuggie Otis: the heir to the throne who followed his own path — Louder", url: "https://loudersound.com/features/shuggie-otis-the-heir-to-the-throne-who-followed-his-own-path" },
  ],

  influencedBy: [
    { artist: "Johnny Otis", album: "Cold Shot!", year: "1968", note: "His father's R&B and blues bandleading world, which Shuggie grew up playing inside from early childhood and which still surfaces in the record's blues and jazz chording." },
    { artist: "Sly & the Family Stone", album: "There's a Riot Goin' On", year: "1971", note: "Also on Epic — Sly's overdubbed Maestro Rhythm King drum machine is the nearest contemporary precedent for building tracks without a live kit." },
    { artist: "Stevie Wonder", album: "Music of My Mind", year: "1972", note: "The clearest parallel for an R&B artist taking total creative control and playing almost every instrument on the record himself." },
  ],

  influenced: [
    { artist: "Prince", album: "For You", year: "1978", note: "Prince is on the record as an admirer, and the method is the same one: a teenager producing, arranging and playing essentially every instrument on his own debut." },
    { artist: "D'Angelo", album: "Voodoo", year: "2000", note: "Hushed, multi-tracked, one-man-band soul built the same way — Otis is routinely named as the precedent for it." },
  ],
});
