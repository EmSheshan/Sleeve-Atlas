import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Ella Fitzgerald",
  album: "The Gershwin Songbook",
  year: "1959",
  heading: "Ella Fitzgerald Sings the George and Ira Gershwin Song Book (1959)",

  albumLine:
    "Released December 1959 on Verve, produced by Norman Granz and arranged and conducted by Nelson Riddle, recorded at Capitol Studio A in Hollywood across January, March and July that year. Fifty-nine Gershwin songs over five LPs — the largest and most ambitious of her eight Song Books.",

  overview: [
    "The Song Books were a deliberate argument, not a series of records. Norman Granz had become Fitzgerald's manager in 1956 and founded Verve specifically to release her, and the project set her against the catalogues of Porter, Ellington, Rodgers and Hart and the rest, one composer at a time. The claim being made was that American popular song of the twenties to the forties was a body of work deserving the treatment a European art song would get — and that Fitzgerald was the singer to establish it.",

    "Granz is worth knowing about beyond the credit. He refused to take his concerts to segregated venues even when it meant cancelling, personally tore down segregation signs at a Houston hall in 1955 before Fitzgerald and Dizzy Gillespie played, and defended the musicians in court when they were arrested. He insisted on equal pay and equal treatment at a point when neither was normal. The dignity of these records — the budget, the packaging, the seriousness — is continuous with that.",

    "Ira Gershwin was alive and involved, choosing songs and revising some lyrics for the set; George had died in 1937. His response has become the standard line about the whole enterprise: \"I never knew how good our songs were until I heard Ella Fitzgerald sing them.\" Nelson Riddle, who had built Sinatra's sound at Capitol, wrote the arrangements, and this is among the most expansive orchestral writing he did.",

    "It was packaged like a monument. The French painter Bernard Buffet made five original paintings for the five sleeves, and a deluxe walnut-boxed edition with the works as lithographs sold for $100 — at a time when the ordinary mono set was $25. \"But Not for Me\" took the 1960 Grammy for Best Vocal Performance, Female. AllMusic give the set 4.5 stars and the Encyclopedia of Popular Music five. The reason it endures is unglamorous: it is the most complete single document of what these songs are, sung by someone with no interest in improving them.",
  ],

  listeningNotes: [
    {
      label: "Almost no ornament",
      text: "She sings the melody as written, with very little of the scat or embellishment she was famous for live. The restraint is the interpretive choice.",
    },
    {
      label: "Diction you could transcribe from",
      text: "Every consonant lands, which is why Ira Gershwin heard his own lyrics differently. The words are treated as the point rather than as material.",
    },
    {
      label: "Riddle's orchestra with room in it",
      text: "Strings and woodwind move in long lines with space around the voice, closer to film scoring than to a big band chart.",
    },
    {
      label: "Tempos taken slowly",
      text: "Many of these were written as brisk stage numbers and are unhurried here, which turns show tunes into songs about something.",
    },
    {
      label: "Verses nobody else sang",
      text: "She includes the introductory verses most performers cut, so songs arrive with their setup intact rather than starting at the chorus.",
    },
  ],

  sources: [
    { title: "Ella Fitzgerald Sings the George and Ira Gershwin Song Book — Wikipedia", url: "https://en.wikipedia.org/wiki/Ella_Fitzgerald_Sings_the_George_and_Ira_Gershwin_Song_Book" },
    { title: "Norman Granz — Wikipedia", url: "https://en.wikipedia.org/wiki/Norman_Granz" },
    { title: "The Complete Ella Fitzgerald Song Books — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Complete_Ella_Fitzgerald_Song_Books" },
  ],

  influencedBy: [
    { artist: "Billie Holiday", album: "Lady in Satin", year: "1958", note: "The other great model for a jazz singer treating standards as text; Holiday's approach is the opposite pole to Fitzgerald's clarity." },
    { artist: "Frank Sinatra", album: "In the Wee Small Hours", year: "1955", note: "Nelson Riddle arranged it, and it established the idea of a themed album of standards as a serious artistic statement." },
  ],

  influenced: [
    { artist: "Nina Simone", album: "I Put a Spell on You", year: "1965", note: "The lineage of a Black woman singer taking the American songbook on her own terms and being read as an artist rather than an entertainer." },
    { artist: "Dusty Springfield", album: "Dusty in Memphis", year: "1969", note: "The model of a singer's voice carried by a lavish, unhurried orchestral arrangement." },
  ],
});
