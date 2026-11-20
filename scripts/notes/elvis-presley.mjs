import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Elvis Presley",
  album: "Elvis Presley",
  year: "1956",
  heading: "Elvis Presley — Elvis Presley (1956)",

  albumLine:
    "Released 23 March 1956 on RCA Victor, with Sun Records founder Sam Phillips credited for the older Sun tracks and RCA's head of A&R, Steve Sholes, for the new sessions. It's rock and roll and rockabilly, and it's Presley's debut album.",

  overview: [
    "RCA bought Presley's contract from Phillips on 21 November 1955. Wikipedia says the label then booked sessions at RCA's studio at 1525 McGavock Street in Nashville on 10 and 11 January 1956, and in New York on 30 and 31 January. The Nashville room was monaural and single-track. No producer was officially credited for these sessions, which Wikipedia says has led to the belief that Presley produced them. A page summarising writer James V. Roy's 2004 article says Chet Atkins, the guitarist running RCA's Nashville operation, told guitarist Scotty Moore to \"just do what they normally do,\" effectively leaving the band to produce itself.",

    "Moore played electric guitar, Bill Black played bass and D. J. Fontana, in his first session with the group, played drums. Pianist Floyd Cramer joined for the Nashville dates, Atkins played acoustic guitar on two songs and Gordon Stoker supplied backing vocals. To copy Phillips's slapback echo, the same account says Atkins and engineer Bob Farris put a speaker at one end of a long hallway and a microphone at the other and recorded the echo live; Phillips had added his after the fact.",

    "The album was built to a running time. Wikipedia says five previously unreleased Sun recordings were added to seven RCA tracks, and \"Heartbreak Hotel\" was left off. Sholes had promised Phillips not to release \"Blue Suede Shoes\" as a single, to protect its writer Carl Perkins, so it opens the album instead. RCA also balanced Sun's country-leaning songs with recent R&B covers. Who took the cover photograph is contested: it was first credited to Popsie Randolph, but in 2002 collector Joseph A. Tunzi documented William V. \"Red\" Robertson, saying, \"Forget about Popsie. Popsie did not take that photo.\"",

    "Wikipedia says it is one of three Presley albums in the book 1001 Albums You Must Hear Before You Die; the book's own text wasn't found. It lists Rolling Stone ranking it 56th in 2003 and 2012 and 332nd in 2020. Writer Matthew Puddister calls the music \"stunning from beginning to end\" and \"as good a place as any to start\" with Presley. He also quotes Presley saying, \"rock 'n' roll was here a long time before I came along,\" and naming Fats Domino \"the real King of Rock 'n' Roll.\"",
  ],

  listeningNotes: [
    {
      label: "Slapback echo on the voice",
      text: "The doubled echo that RCA copied from Sun's records gives the singing its snap, and it comes from a hallway rather than a gadget.",
    },
    {
      label: "A plaintive ballad",
      text: "Puddister praises \"I'm Counting on You\" as a plaintive ballad, with Atkins on acoustic guitar.",
    },
    {
      label: "An eerie falsetto",
      text: "Puddister points to the \"eerie falsetto\" on \"Blue Moon,\" one of the five Sun recordings added to fill the album.",
    },
    {
      label: "Playful energy in an R&B cover",
      text: "\"I Got a Woman\" covers a Ray Charles song and Puddister hears \"playful energy\" in it, with Presley fronting a trio and a pianist.",
    },
    {
      label: "Presley at the piano",
      text: "On \"Tryin' to Get to You,\" Presley plays piano himself, per Wikipedia's personnel list.",
    },
  ],

  sources: [
    { title: "Elvis Presley (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Elvis_Presley_(album)" },
    { title: "RCA Studio on McGavock Street — scottymoore.net (summarising James V. Roy, 2004)", url: "https://scottymoore.net/studio_mcgavock.html" },
    { title: "Elvis Presley's debut album, still — Matthew Puddister, Substack (2022)", url: "https://matthewpuddister.substack.com/p/elvis-presleys-debut-album-still" },
    { title: "Keith Richards' favourite Elvis Presley record — Far Out (Tyler Golsen, 2021)", url: "https://faroutmagazine.co.uk/keith-richards-favourite-elvis-presley-record/" },
    { title: "London Calling — Wikipedia (cover homage)", url: "https://en.wikipedia.org/wiki/London_Calling" },
  ],

  influencedBy: [],

  influenced: [
    { artist: "The Clash", album: "London Calling", year: "1979", note: "Wikipedia says artist Ray Lowry designed the cover as a homage to this album's cover, with the logotype modelled on it; a visual rather than musical tie." },
  ],
});
