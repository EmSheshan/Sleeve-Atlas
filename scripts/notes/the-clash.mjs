import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "The Clash",
  album: "The Clash",
  year: "1977",
  heading: "The Clash — The Clash (1977)",

  albumLine:
    "Released 8 April 1977 by CBS, produced by the band's live soundman Mickey Foote and engineered by CBS junior staffer Simon Humphrey. Punk with reggae and fifties rock and roll pulling at its edges — the Clash's debut, cut across three February weekends for £4,000.",

  overview: [
    "London punk in early 1977 was barely a year old in public and already being fought over. What marks this debut out is its specificity: dead-end jobs, council flats, the police, irritation at the Americanisation of British life. Singer and guitarist Joe Strummer, bassist Paul Simonon and manager Bernie Rhodes had been at the Notting Hill Carnival on 30 August 1976 when a crowd turned on police and over a hundred officers and sixty civilians were hospitalised. Strummer wrote about it, arguing in NME that poor black and white Londoners were \"in the same boat\"; a photograph from the riot went on the back cover.",

    "The record's other half is Jamaican. Its longest song is a straight reggae cover, held at its original slow tempo and run past six minutes — in 1977, heresy twice over, and an early sign that this band's record collection and their politics pointed the same way.",

    "CBS put them on the top floor at Studio 3 on Whitfield Street — to keep them \"out of the way,\" as engineer Simon Humphrey remembers it — on a late-sixties Neve desk that predated phantom power, with valve microphones. Humphrey was a junior; Foote, credited as producer, mainly acted as go-between. Strummer told him not to do anything he had done before: \"I don't know what separation is and I don't like it.\" Nobody from the label came to A&R the sessions, so the rough edges stayed. Humphrey's verdict on himself is the best line anyone has written about the record: \"I think I really contributed to that first album by not screwing it up for them.\"",

    "It reached No. 12 in Britain and the notices were enormous — writer Tony Parsons in NME heard \"some of the most exciting rock'n'roll in contemporary music,\" and Mark Perry, editor of the fanzine Sniffin' Glue, called it \"the most important album ever released.\" CBS's American arm turned it down as not radio friendly, which only made it the year's best-selling US import at over 100,000 copies; Epic issued an altered version in July 1979, four songs swapped out, that peaked at No. 126. Critic Robert Christgau knew which edition mattered: \"The U.K. version of The Clash is the greatest rock and roll album ever manufactured anywhere.\"",
  ],

  listeningNotes: [
    {
      label: "Drums left undamped and untuned",
      text: "Terry Chimes's kit was recorded with none of the muffling mid-seventies studios took for granted. The snare rings on and the toms sound like a room, not a product — most of why the record sounds unguarded.",
    },
    {
      label: "Guitar tone with the bottom removed",
      text: "Humphrey's word for Strummer's battered Telecaster through a Fender Twin Reverb was \"horrendously toppy\" — all treble, almost no low-mid, close-miked with a valve microphone. The rhythm guitar sounds less like a chord than a sheet being torn.",
    },
    {
      label: "Backing tracks cut live in one room",
      text: "Drums, bass and two guitars went down together with screens but little real separation. Mick Jones then stacked extra guitars on top, so the surface is more layered than the foundation.",
    },
    {
      label: "Lead vocals in one to three takes",
      text: "No double-tracking, no comping. Strummer overdubbed while strumming an unplugged guitar, and on the isolated vocals you can hear him hitting the strings.",
    },
    {
      label: "Phasing sweeps on the guitars",
      text: "A swooshing, jet-engine effect Humphrey proposed and the band tried — audible on \"Cheat.\" Studio trickery, from a group whose posture rejected it.",
    },
    {
      label: "Reggae played straight, not punked up",
      text: "They don't speed the cover up or hammer it into downstrokes. The guitars keep the offbeat chop and the bass holds the space, which is what lets punk and Jamaican music share a record without one swallowing the other.",
    },
  ],

  sources: [
    {
      title: "Classic Tracks: The Clash 'White Riot' — Sound on Sound",
      url: "https://www.soundonsound.com/techniques/classic-tracks-clash-white-riot",
    },
    {
      title: "Simon Humphrey, producer and recording engineer — RecordProduction.com",
      url: "http://www.recordproduction.com/interviews/simon-humphrey",
    },
    {
      title: "Caroline Coon, The Clash in the recording studio, CBS Studio 3, February 1977 — Artsy",
      url: "https://www.artsy.net/artwork/caroline-coon-the-clash-in-the-recording-studio-mickey-foote-engineer-and-the-clash-s-live-sound-man-at-the-mixing-desk-as-joe-strummer-confers-with-paul-simonon-cbs-studio-3-whitfield-street-london-february",
    },
    { title: "The Clash (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Clash_(album)" },
  ],

  influencedBy: [
    {
      artist: "Ramones",
      album: "Ramones",
      year: "1976",
      note: "Two-minute songs built on downstroked barre chords at maximum speed — the tempo and brevity the Clash adopted, then filled with local detail.",
    },
    {
      artist: "Junior Murvin",
      album: "Police & Thieves",
      year: "1977",
      note: "The Clash cover his 1976 single at the centre of this album, keeping its slow groove and offbeat guitar chop rather than converting it to punk tempo.",
    },
  ],

  influenced: [
    {
      artist: "The Specials",
      album: "The Specials",
      year: "1979",
      note: "Punk attack welded to Jamaican rhythm as a working method rather than a one-off cover, and the same habit of writing about specific British streets.",
    },
    {
      artist: "Rancid",
      album: "...And Out Come the Wolves",
      year: "1995",
      note: "Fast downstroked punk alternating with reggae and ska tracks, plus the dual rough-voiced frontmen — the structural template taken wholesale from this band.",
    },
  ],
});
