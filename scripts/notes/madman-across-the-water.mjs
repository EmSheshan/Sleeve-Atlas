import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Elton John",
  album: "Madman Across The Water",
  year: "1971",
  heading: "Madman Across The Water — Elton John (1971)",

  albumLine:
    "Released 5 November 1971 on DJM/Uni and produced by Gus Dudgeon, this is Elton John's fourth studio album and his most heavily orchestrated — built around Paul Buckmaster's string arrangements rather than the touring band. It sits between the Americana of Tumbleweed Connection and the glam turn of Honky Château, the last record of its particular kind before John's sound changed.",

  overview: [
    "By 1971, John and lyricist Bernie Taupin had already broken through in America, John's August 1970 run at Los Angeles's Troubadour club turning him into a star almost overnight, and they'd been touring hard ever since. Taupin later said they wrote only about eight songs that year against a normal twenty-five, a sign of how stretched the partnership was. Rather than cut the record live with his road band, John and producer Gus Dudgeon leaned on session players and Buckmaster's orchestrations; only one track, \"All the Nasties,\" uses bassist Dee Murray and drummer Nigel Olsson, backed by a full choir. Guitarist Davey Johnstone and keyboardist Rick Wakeman, between session work and joining Yes, both appear throughout.",

    "Taupin's lyrics carried forward the fascination with America he'd brought to Tumbleweed Connection, which he has said was directly shaped by The Band's Music from Big Pink. Here that interest turns into a set of character studies: a derelict named for his razor-sharp face, a boy born on Christmas Day into a hard household, a man confined and uncertain in \"a sunken dream\" on the title track, and, on \"Indian Sunset,\" a fictionalized account of a Native American warrior's defeat by white settlers that John described as \"a story, not a protest song\" but which blends unrelated tribal history and gets Geronimo's death wrong. \"Tiny Dancer\" grew out of Taupin's first trip to the US in 1970 and his impression of the free-spirited women he met in California — a composite he has said was not solely about his then-girlfriend Maxine Feibelman, though the album credits her by name.",

    "Reception at the time split. Rolling Stone's Alex Dubro called it \"a difficult, sometimes impossibly dense record\" that brought out the worst in Taupin's lyrics, while Sounds critic Penny Valentine praised John's \"immense feeling and power.\" It undersold in Britain, peaking at No. 41, but broke him open in America, reaching No. 8 on the Billboard 200 and going gold within months; it's since been certified triple platinum there. \"Tiny Dancer\" flopped as a single at the time, its six-minute length working against radio, and only became one of John's signature songs decades later after Cameron Crowe used it in Almost Famous. John has called this record \"the very last album of its kind\" the pair made before moving on.",
  ],

  listeningNotes: [
    {
      label: "Buckmaster's competing string lines",
      text: "Rather than pad the chords, the orchestra is given its own countermelodies that argue with the vocal instead of cushioning it — most striking under the title track and across the long build of \"Tiny Dancer.\"",
    },
    {
      label: "The one-off gospel choir",
      text: "The only track with John's actual touring rhythm section also brings in a full choir, giving it a texture nothing else on the record has.",
    },
    {
      label: "A rustic, front-porch detour",
      text: "Accordion and a loosely played Hammond organ give one track a New Orleans, almost barroom warmth that stands apart from the orchestral sweep around it.",
    },
    {
      label: "Songs that run like short films",
      text: "Several tracks stretch past six minutes and unfold scene by scene rather than verse-chorus-verse, closer to narrated vignettes than pop songs.",
    },
    {
      label: "Quiet verse into huge chorus",
      text: "The record's best-known song builds from a spare, intimate opening into a full orchestral swell, a dynamic jump that's become one of its most recognizable features.",
    },
  ],

  sources: [
    { title: "Madman Across the Water — Wikipedia", url: "https://en.wikipedia.org/wiki/Madman_Across_the_Water" },
    { title: "'Madman Across The Water': A Big Splash For Elton John — uDiscover Music", url: "https://www.udiscovermusic.com/stories/elton-john-madman-across-the-water-album/" },
    { title: "Tiny Dancer by Elton John — Songfacts", url: "https://www.songfacts.com/facts/elton-john/tiny-dancer" },
    { title: "Madman Across The Water — Rolling Stone", url: "https://www.rollingstone.com/music/music-album-reviews/madman-across-the-water-100068/" },
    { title: "Indian Sunset — Wikipedia", url: "https://en.wikipedia.org/wiki/Indian_Sunset" },
  ],

  influencedBy: [
    { artist: "David Bowie", album: "Space Oddity", year: "1969", note: "Shares arranger/conductor Paul Buckmaster, whose aggressive, countermelodic string writing on Bowie's record carried directly into the dramatic orchestration here." },
    { artist: "The Band", album: "Music from Big Pink", year: "1968", note: "Taupin named this record as the source of the Americana fascination he carried over from Tumbleweed Connection into this album's story-songs." },
  ],

  influenced: [
    { artist: "Tupac Shakur", album: "Loyal to the Game", year: "2004", note: "The single 'Ghetto Gospel,' produced by Eminem, sampled 'Indian Sunset's' strings and vocal melody directly, topping the UK chart in 2005." },
    { artist: "Brandi Carlile", album: "By the Way, I Forgive You", year: "2018", note: "Producer Dave Cobb brought in Paul Buckmaster himself, in one of his final sessions before his death, to extend the string-arranger lineage Carlile cited from John's Buckmaster-era records." },
  ],
});
