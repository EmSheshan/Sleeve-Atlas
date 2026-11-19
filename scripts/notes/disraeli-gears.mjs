import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Cream",
  album: "Disraeli Gears",
  year: "1967",
  heading: "Disraeli Gears — Cream (1967)",

  albumLine:
    "Released in November 1967 on Reaction in the UK and Atco in the US, and produced by Felix Pappalardi. It's psychedelic and blues-rock from a power trio, and it's Cream's second album, following Fresh Cream (1966) and preceding Wheels of Fire (1968).",

  overview: [
    "Cream began as a blues band and made this record at the point where blues turned psychedelic. Wikipedia says the main sessions ran 11–15 May 1967 at Atlantic Studios in New York with engineer Tom Dowd, who told the story that they took about three and a half days; the writer Richard Havers of uDiscover gives 8–16 May. Havers calls it the least blues-influenced of the band's records, with just one straight blues cover.",

    "The first New York session shaped the album's sound. According to writer Matt Frost in MusicRadar, Atlantic Records executive Ahmet Ertegun produced day one and asked for a blues cover; bassist and singer Jack Bruce said overnight changes by new producer Pappalardi, who rewrote lyrics with his wife Gail Collins and talked guitarist Eric Clapton into singing lead, were \"very much against my wishes.\" Clapton said Pappalardi turned a standard 12-bar into \"a kind of McCartney-esque pop song.\" Ertegun was cooler on the psychedelic direction at first, calling it \"psychedelic hogwash\" before relenting after musician Booker T. Jones and singer Otis Redding praised one song, per Wikipedia.",

    "The title came from roadie Mick Turner's malapropism for derailleur gears. Wikipedia has drummer Ginger Baker telling the story; uDiscover has Clapton discussing a bicycle at the time, and the accounts agree on Turner and the joke. The cover is a collage by artist Martin Sharp, who worked for OZ magazine and lived in the same Chelsea building as Clapton.",

    "It was a hit: No. 5 in the UK, No. 4 on the Billboard 200, platinum in the US. Reviews at the time were mixed — Rolling Stone said it \"does not totally hang together,\" while NME critic Allen Evans noted that, unlike their stage shows, \"the sound is mercifully muted on this LP.\" Later writers were warmer: critic Thomas Erlewine of AllMusic called it \"a quintessential heavy rock album of the '60s,\" and Rolling Stone placed it 112th on its 2003 list of the 500 greatest albums.",
  ],

  listeningNotes: [
    {
      label: "A blues riff rewritten as pop",
      text: "\"Strange Brew\" began as a blues cover before Pappalardi reworked it; Clapton said it became \"a kind of McCartney-esque pop song.\" It shows the producer's role in shifting the band's sound.",
    },
    {
      label: "A borrowed blues solo",
      text: "Wikipedia says Clapton's solo on \"Strange Brew\" was copied from bluesman Albert King's solo on another song, a reminder of how deeply the blues sits under the psychedelia.",
    },
    {
      label: "Heavy riffing from a trio",
      text: "\"Sunshine of Your Love\" has a riff Bruce wrote after he and Clapton saw Jimi Hendrix play, per uDiscover. It became the band's signature and a template for heavy rock.",
    },
    {
      label: "A straight blues cover",
      text: "\"Outside Woman Blues\" is based on a 1929 song by bluesman Blind Joe Reynolds, the one conventional blues track on an otherwise psychedelic record.",
    },
    {
      label: "Loud amps in a studio built for jazz",
      text: "Bruce said engineer Dowd \"wasn't used to it but he very quickly got used to it,\" meaning the volume. The sound the band got in New York is part of why the record feels so thick.",
    },
  ],

  sources: [
    { title: "Disraeli Gears — Wikipedia", url: "https://en.wikipedia.org/wiki/Disraeli_Gears" },
    { title: "Rediscover Disraeli Gears — uDiscover Music (Richard Havers)", url: "https://www.udiscovermusic.com/stories/rediscover-disraeli-gears/" },
    { title: "The making of Cream's Strange Brew — MusicRadar (Matt Frost, 2024)", url: "https://www.musicradar.com/news/guitars/the-making-of-creams-strange-brew-556626" },
    { title: "Cream: Disraeli Gears — Louder (Classic Rock)", url: "https://www.loudersound.com/reviews/cream-disraeli-gears-album-of-the-week-club-review" },
  ],

  influencedBy: [
    { artist: "Albert King", album: "Born Under a Bad Sign", year: "1967", note: "Wikipedia says Clapton's solo on the title-era single was taken nearly note for note from King's solo on a song from this album." },
  ],

  influenced: [],
});
