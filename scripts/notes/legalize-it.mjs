import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Peter Tosh",
  album: "Legalize It",
  year: "1976",
  heading: "Legalize It — Peter Tosh (1976)",

  albumLine:
    "Released in June 1976 on Virgin in the UK and Columbia in the US, self-produced by Peter Tosh and recorded at Treasure Isle and Randy's studios in Kingston across 1975 and 1976. It's roots reggae with a campaigning edge — Tosh's solo debut after leaving the Wailers.",

  overview: [
    "Tosh had been one third of the Wailers alongside Bob Marley and Bunny Wailer, and left as the group was breaking internationally. His stated grievance was that Chris Blackwell, who ran Island Records, had pushed Marley forward as the star — a decision Tosh connected to Marley's lighter skin. Sources differ on exactly when he went, giving 1973 or 1974, so the date is best treated as the early seventies rather than pinned down. Either way, 1976 saw all three former Wailers release solo albums within months of each other.",

    "The title track had already caused trouble. Issued as a single in 1975, it was banned from Jamaican radio; Tosh responded by buying newspaper advertising space and printing the lyrics. The song is usually remembered as a stoner anthem, which undersells it — it argues specifically for medical use and, more pointedly, it was written out of Tosh's own repeated harassment and beatings by Jamaican police, for whom cannabis possession was a reliable pretext. \"We are the victims of Rasclot circumstances,\" he said. \"Victimization, colonialism, gonna lead to bloodbath.\" The ban did what bans do and made him internationally visible.",

    "On the timeline, some care is needed. 1976 is remembered in Jamaica for a state of emergency and for the attempt on Marley's life that December, and it's tempting to hear this record against that backdrop. But the album was recorded before and released in June, so it isn't a response to either. What it does document is the ongoing, everyday condition underneath those events — police power, Rastafarian persecution, and a political establishment Tosh had no patience for.",

    "The playing is first-rate: Robbie Shakespeare on bass, Al Anderson on guitar, Tyrone \"Organ D\" Downie on keyboards, with Rita Marley, Judy Mowatt and Bunny Wailer on backing vocals. It barely charted on release, reaching only No. 199 in the US, but sold steadily for decades and was certified platinum in 1999. Critical opinion was warmer than the sales — four and a half stars from AllMusic, a more reserved B from Robert Christgau. Tosh's reputation has always run second to Marley's, and this record is the main argument that the gap is larger than it should be.",
  ],

  listeningNotes: [
    {
      label: "Bass carrying the melody",
      text: "Robbie Shakespeare's bass is mixed enormous and plays melodic, roaming figures rather than holding down a root. In reggae the bass is the lead instrument, and this is a textbook demonstration.",
    },
    {
      label: "The one drop",
      text: "The drums leave the first beat of the bar empty and land heavily on the third. That gap is what gives roots reggae its lurching, unhurried gait, and it's consistent across the record.",
    },
    {
      label: "Organ bubble",
      text: "Downie's keyboard plays a rapid, muted off-beat pattern under everything — a percolating texture that fills the space between the bass and the guitar chop.",
    },
    {
      label: "Tosh's low, flat delivery",
      text: "He sings in a deep register with very little ornament or rise, closer to stating than performing. Against Marley's warmth it reads as cold, and it suits material this confrontational.",
    },
    {
      label: "Guitar skank on the off-beat",
      text: "The rhythm guitar plays short, clipped chords on the upbeats only, never on the downbeat. It's the most recognisable sound in reggae and it's doing rhythmic rather than harmonic work.",
    },
  ],

  sources: [
    { title: "Legalize It — Wikipedia", url: "https://en.wikipedia.org/wiki/Legalize_It" },
    { title: "Peter Tosh: Legalizing the legacy of the other reggae icon — Pan African Music", url: "https://pan-african-music.com/en/peter-tosh-legalizing-the-legacy-of-the-other-reggae-icon/" },
    { title: "Peter Tosh — Britannica", url: "https://www.britannica.com/biography/Peter-Tosh" },
  ],

  influencedBy: [
    { artist: "The Wailers", album: "Catch a Fire", year: "1973", note: "Tosh's own former group; the record that broke reggae internationally and whose star billing prompted his departure." },
    { artist: "Burning Spear", album: "Marcus Garvey", year: "1975", note: "The uncompromising Rastafarian roots reggae template — political, unsweetened, released the year before." },
  ],

  influenced: [
    { artist: "Bob Marley & The Wailers", album: "Exodus", year: "1977", note: "Part of the same post-split wave; the three former Wailers' solo records pushed each other and defined roots reggae's international moment." },
    { artist: "Black Uhuru", album: "Red", year: "1981", note: "Militant roots reggae built on the same Kingston rhythm-section approach, with Shakespeare again on bass." },
  ],
});
