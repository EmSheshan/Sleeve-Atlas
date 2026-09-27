import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Fela Kuti",
  album: "Zombie",
  year: "1977",
  heading: "Zombie — Fela Kuti (1977)",

  albumLine:
    "Released in Nigeria on Coconut Records in 1976 and in Britain on Creole in 1977, self-produced, and performed with his band Africa '70. It's Afrobeat at full strength — two side-long tracks — and it is the record that got his home destroyed and his mother killed.",

  overview: [
    "He was born Olufela Olusegun Oludotun Ransome-Kuti in Abeokuta in 1938, studied at Trinity College of Music in London from 1958, and spent ten months in Los Angeles in 1969 where Sandra Smith, later Sandra Izsadore, a member of the Black Panther Party, introduced him to Black Power politics. He came home with a new argument and a new music: Afrobeat, which fuses Yoruba rhythm and highlife with American funk and jazz. He later dropped \"Ransome\" as a slave name and took \"Anikulapo.\" Robert Christgau's summary of the result is hard to improve on — \"real fusion music — if James Brown's stuff is Afro-American, his is American-African.\"",

    "Nigeria in the mid-seventies was under military government, and had been for most of the decade. Kuti's commune in Lagos, the Kalakuta Republic, founded in 1970, housed his band, his studio and his family, and he had declared it independent of the Nigerian state — a provocation the army had already raided more than once. The word \"zombie\" here means a soldier: a man who moves only when ordered, who stands still until told to stand still. The song mocks the army's drill commands as the vocabulary of a corpse.",

    "The retaliation came on 18 February 1977. Around a thousand soldiers attacked Kalakuta, burned it to the ground, destroyed the studio, the instruments and the master tapes, and beat Kuti badly. His mother, Funmilayo Ransome-Kuti — an anti-colonial organiser who had led the Abeokuta women's revolt of 1946, and one of the most significant Nigerian activists of her century — was thrown from a window. She died of her injuries; most accounts give April 1978, though some date her death to 1977. Kuti later carried her coffin to the army barracks and left it there.",

    "This is the reason the album cannot be discussed as music alone, and also the reason it should be: nobody destroys a commune over a bad record. It works because the groove is irresistible and the insult is funny, which is a far more dangerous combination than anger. AllMusic rate it 4.5 stars, Christgau graded it A−, Pitchfork placed it 90th among the albums of the seventies, and in 2025 it became the first Nigerian album inducted into the Grammy Hall of Fame.",
  ],

  listeningNotes: [
    {
      label: "Tracks that run past ten minutes",
      text: "Each side is a single piece that spends several minutes establishing the groove instrumentally before any singing. The length is structural, not indulgent — the trance has to be built before it can be broken.",
    },
    {
      label: "Interlocking guitar and bass patterns",
      text: "Two or three short cyclical figures lock against each other and simply do not change. Everything else happens over the top of that fixed grid.",
    },
    {
      label: "Horn section as a blunt instrument",
      text: "Saxophones and trumpets punch out unison riffs in short bursts rather than playing melodies, used percussively in the manner of James Brown's band.",
    },
    {
      label: "Call-and-response with the chorus",
      text: "He shouts a line in Pidgin English and a group answers it. The form comes from Yoruba tradition and makes the audience complicit — you cannot listen without joining in.",
    },
    {
      label: "Military drill turned into a hook",
      text: "The vocal imitates the shouted commands of a parade ground — attention, fall in, double up — so the joke is legible to anyone who has ever watched soldiers march.",
    },
    {
      label: "Drums and shekere layered deep",
      text: "A full percussion section runs underneath the kit, with shakers and congas filling every subdivision. That density is what makes a two-chord piece stay interesting for fifteen minutes.",
    },
  ],

  sources: [
    { title: "Zombie (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Zombie_(album)" },
    { title: "Fela Kuti — Wikipedia", url: "https://en.wikipedia.org/wiki/Fela_Kuti" },
    { title: "Funmilayo Ransome-Kuti — Wikipedia", url: "https://en.wikipedia.org/wiki/Funmilayo_Ransome-Kuti" },
  ],

  influencedBy: [
    { artist: "James Brown", album: "Sex Machine", year: "1970", note: "The one-chord, horn-punctuated, endlessly extended funk vamp that Kuti reworked with West African rhythm underneath." },
    { artist: "Miles Davis", album: "Bitches Brew", year: "1970", note: "Long-form modal improvisation over a fixed groove, which gives the Africa '70 arrangements their jazz licence." },
  ],

  influenced: [
    { artist: "Talking Heads", album: "Remain in Light", year: "1980", note: "David Byrne and Brian Eno built the album explicitly on Afrobeat's interlocking cyclical parts, with Fela as the acknowledged source." },
    { artist: "Antibalas", album: "Who Is This America?", year: "2004", note: "The Brooklyn Afrobeat revival that eventually staged the Broadway musical about him works directly from these arrangements." },
  ],
});
