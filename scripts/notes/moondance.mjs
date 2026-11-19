import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Van Morrison",
  album: "Moondance",
  year: "1970",
  heading: "Moondance — Van Morrison (1970)",

  albumLine:
    "Released 27 January 1970 in the UK and 28 February 1970 in the US on Warner Bros., and produced by Van Morrison himself. It's a blend of R&B, soul, jazz and rock, and it's his third studio album, after Astral Weeks (1968).",

  overview: [
    "After the commercial failure of Astral Weeks, Morrison moved to the Woodstock area with his wife Janet Planet and wrote the songs there, per WPDH. Writer Mark Leviton of Best Classic Bands says the forests, mountains and lakes inspired them; writer Melanie Davis of American Songwriter says Morrison wanted to become friends with Bob Dylan, whom she says he regarded as \"the only contemporary worthy of his attention.\" Warner Bros. executive Joe Smith had first seen him at Boston's Catacombs club in 1968, according to Wikipedia.",

    "Wikipedia says it was recorded in August and September 1969 at A&R Studios in New York; Leviton gives September to December, so the dates are contested. Musicians were recruited from Woodstock, including guitarist John Platania, saxophonist Jack Schroer, flautist Collin Tilton, keyboardist Jef Labes, bassist John Klingberg and drummer Gary Mallaber. Drummer Mallaber told writer Martin Kielty that Morrison treated the music \"more like a jazz artist than a rock or R&B artist,\" choosing takes by the lead vocal. Tilton told Mix that the band went over rhythm takes \"until Van got what he wanted\" and added horns later.",

    "Production credits are not uniform. Wikipedia lists Morrison as producer and Lewis Merenstein as executive producer; Leviton says Morrison fired Merenstein and took over production himself. Engineers are also disputed: Mix writer Gary Eskow reports different recollections about who engineered the title song, and says Elliot Scheiner mixed the album just before Christmas 1969.",

    "It did not top the charts, reaching No. 29 on the Billboard 200 and No. 32 in the UK, but Wikipedia says it \"sold continuously for the next 40 years\" and is three-times platinum in the US. Critics Greil Marcus and Lester Bangs wrote in Rolling Stone in 1970 that Morrison had reached \"that point where the influences on his music no longer mattered,\" and that \"the horn arrangements are absolutely exquisite.\" Critic Robert Christgau gave it an A in 1970, saying, \"Forget Astral Weeks—this is a brilliant, catchy, poetic, and completely successful LP.\" Rolling Stone placed it 65th on its 2003 list of the 500 greatest albums.",
  ],

  listeningNotes: [
    {
      label: "Horn arrangements built in the studio",
      text: "Tilton says he \"basically wrote the arrangement on 'Moondance,'\" with the horns overdubbed after the rhythm section had played the take.",
    },
    {
      label: "A jazz-inflected rhythm section",
      text: "Mallaber's drumming and Klingberg's walking bass lines give the record a swing underneath the R&B; Louder writer David Sinclair credits \"nimble drums, walking bass lines and exuberant horn and vocal arrangements.\"",
    },
    {
      label: "Backing vocals on two songs",
      text: "Singers Judy Clay, Emily Houston and Jackie Verdell sing backing vocals on \"Crazy Love\" and \"Brand New Day,\" adding a gospel-soul layer.",
    },
    {
      label: "Clavinet and organ colour",
      text: "Labes plays clavinet, organ and piano, giving the arrangements their keyboard colour.",
    },
    {
      label: "Vocals chosen over perfect takes",
      text: "Mallaber says takes were chosen by the lead vocal and Morrison did not re-record it, which is part of why the singing sounds so immediate.",
    },
  ],

  sources: [
    { title: "Moondance — Wikipedia", url: "https://en.wikipedia.org/wiki/Moondance" },
    { title: "Classic Tracks: Van Morrison's Moondance — Mix (Gary Eskow, 2005)", url: "https://www.mixonline.com/recording/classic-tracks/classic-tracks-van-morrisons-moondance-375246" },
    { title: "Van Morrison, Moondance review — Best Classic Bands (Mark Leviton)", url: "https://bestclassicbands.com/van-morrison-moondance-review-4-27-222/" },
    { title: "Moondance — Rolling Stone review reposted by Greil Marcus (1970)", url: "https://greilmarcus.net/2018/04/14/van-morrison-moondance-3-19-70-w-lester-bangs/" },
    { title: "Van Morrison's Moondance began in the Hudson Valley — WPDH", url: "https://wpdh.com/van-morrisons-moondance-began-in-the-hudson-valley/" },
  ],

  influencedBy: [
    { artist: "John Coltrane", album: "A Love Supreme", year: "1965", note: "Saxophonist and flautist Collin Tilton told Mix that a horn figure behind the vocal is \"sort of a cop from Coltrane's A Love Supreme. It's the same interval.\"" },
  ],

  influenced: [],
});
