import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Cream",
  album: "Disraeli Gears",
  year: "1967",
  heading: "Disraeli Gears — Cream (1967)",

  albumLine:
    "Released in November 1967 on Reaction in the UK and Atco in the US, and produced by Felix Pappalardi. It's psychedelic and blues-rock from a power trio, and it's Cream's second album, following Fresh Cream (1966) and preceding Wheels of Fire (1968).",

  overview: [
    "The first New York sessions, writer Matt Frost reports in MusicRadar, were on 3 and 4 April 1967 at Atlantic Studios. Atlantic executive Ahmet Ertegun produced the first day and asked for a blues cover; overnight, Felix Pappalardi — then brought in as producer — rewrote the lyrics with his wife Gail Collins and persuaded guitarist Eric Clapton to sing lead. Clapton said Pappalardi turned the 12-bar blues into \"a kind of McCartney-esque pop song.\" Bassist and singer Jack Bruce said the change was \"very much against my wishes but at that moment I had absolutely no power in the band, in the studio.\" The band also refused the smaller amps engineer Tom Dowd offered and brought Marshall stacks; Bruce said Dowd \"wasn't used to it but he very quickly got used to it,\" and called him \"a genius of an engineer.\"",

    "The main sessions came in May, and sources disagree on how long they took: Wikipedia and Louder say 11–15 May, uDiscover writer Richard Havers says 8–16 May over three and a half days. Bruce told Louder, \"We worked very fast. A lot of the tracks were first and second takes.\" Bruce wanted \"really heavy instruments with really light vocals.\" Guitar World's Chris Gill describes Clapton's tone on the signature riff: a 1964 Gibson SG Standard through a 1966 Marshall JTM45/100 head and a 4x12 cabinet, with the neck pickup and tone controls turned to the \"woman tone\" — \"less percussive attack, focused, vocal-like midrange and smooth, singing sustain.\" He also played a psychedelic, paint-daubed SG called The Fool.",

    "Ertegun dismissed the signature song as \"psychedelic hogwash\" until musician Booker T. Jones and singer Otis Redding praised it, per Wikipedia; Rolling Stone's list entry says Dowd suggested a tribal drum beat from Ginger Baker, and Bruce told Louder he wrote the riff on double bass as the sun came up. The title came from roadie Mick Turner's joke, \"Has it got them Disraeli gears?\", and the cover is a collage by artist Martin Sharp.",

    "Reaction at the time was mixed: Rolling Stone said it \"does not totally hang together,\" and NME's Allen Evans noted that, unlike their stage shows, \"the sound is mercifully muted.\" It's now treated as a landmark. Rolling Stone ranked it 170th on its 2020 list and calls it the sharpest and most focused of Cream's studio records; it entered the Grammy Hall of Fame in 1999; BBC critic Chris Jones calls it \"a perfect encapsulation of the point where the blues got psychedelic and in turn got heavy,\" and Louder says it \"became a touchstone recording of the '60s counterculture.\"",
  ],

  listeningNotes: [
    {
      label: "The woman tone",
      text: "On \"Sunshine of Your Love,\" Gill describes a tone with \"a less percussive attack, focused, vocal-like midrange and smooth, singing sustain,\" from a neck-pickup setting with the tone control turned down.",
    },
    {
      label: "Marshall stacks in the studio",
      text: "The band refused the smaller amps Dowd offered and brought Marshall stacks; per MusicRadar, Dowd adapted quickly, and the volume is part of why the record sounds so thick.",
    },
    {
      label: "A blues cover turned pop",
      text: "\"Strange Brew\" began as a blues cover and was transformed by Pappalardi; Clapton says he wrote the music \"while listening to the Lovin' Spoonful's 'Summer in the City,'\" per uDiscover.",
    },
    {
      label: "A head-voice vocal",
      text: "Bruce sang \"We're Going Wrong\" in a high head voice, in line with his stated wish, in Louder, for \"really heavy instruments with really light vocals.\"",
    },
    {
      label: "A tribal drum pattern",
      text: "On \"Sunshine of Your Love,\" Rolling Stone's entry says Dowd suggested the tribal-style drum beat from Baker, and uDiscover says Baker's drumming \"emphasized beats one and three.\"",
    },
  ],

  sources: [
    { title: "The making of Cream's Strange Brew — MusicRadar (Matt Frost, 2024)", url: "https://www.musicradar.com/news/guitars/the-making-of-creams-strange-brew-556626" },
    { title: "How we made Disraeli Gears in five days — Louder (David Sinclair, 2023)", url: "https://loudersound.com/features/cream-how-we-made-disraeli-gears-in-five-days" },
    { title: "Rediscover Disraeli Gears — uDiscover Music (Richard Havers)", url: "https://www.udiscovermusic.com/stories/rediscover-disraeli-gears/" },
    { title: "Eric Clapton's Sunshine of Your Love tone — Guitar World (Chris Gill, 2022)", url: "https://www.guitarworld.com/features/eric-clapton-cream-sunshine-of-your-love-tone" },
    { title: "Cream, Disraeli Gears — Rolling Stone 500 Greatest Albums (2020)", url: "https://au.rollingstone.com/music/music-lists/best-albums-of-all-time-32520/cream-disraeli-gears-2-32851" },
    { title: "Disraeli Gears — Wikipedia", url: "https://en.wikipedia.org/wiki/Disraeli_Gears" },
    { title: "Disraeli Gears — Classic Rock Review (Ric Albano, 2012)", url: "https://www.classicrockreview.com/?p=2786" },
  ],

  influencedBy: [
    { artist: "Albert King", album: "Born Under a Bad Sign", year: "1967", note: "Wikipedia says Clapton's solo on the \"Strange Brew\" single was taken nearly note for note from King's solo on a song from this album." },
    { artist: "The Jimi Hendrix Experience", album: "Are You Experienced", year: "1967", note: "Guitar World's editors describe Disraeli Gears as taking the baton from the Experience; Clapton said the Sunshine riff was \"strictly a dedication to Jimi.\"" },
  ],

  influenced: [
    { artist: "Mountain", album: "Climbing!", year: "1970", note: "Guitarist Leslie West told Guitar Player that when Disraeli Gears came out he saw it was produced by Felix Pappalardi, who then produced Mountain's album; Rolling Stone called the band a louder version of Cream." },
  ],
});
