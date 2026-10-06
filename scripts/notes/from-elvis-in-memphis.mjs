import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Elvis Presley",
  album: "From Elvis In Memphis",
  year: "1969",
  heading: "From Elvis In Memphis — Elvis Presley (1969)",

  albumLine:
    "Released 2 June 1969 on RCA Victor, produced by Chips Moman and recorded that January and February at American Sound Studio in Memphis. It's Elvis cut loose from Hollywood and Nashville alike, singing soul, country and blues songs with a working R&B session band rather than his usual studio crew — his first album of real, non-soundtrack material in the better part of a decade.",

  overview: [
    "For most of the 1960s Elvis Presley made movies, not records. He starred in more than two dozen pictures and the albums were soundtracks — cheap, built around whatever songs the publishing arm could clear rather than what suited him — and he had barely performed live since 1961. The NBC special that aired 3 December 1968, the '68 Comeback Special, broke that pattern: stripped down, sweating in black leather, singing old rock and roll and blues in front of a small audience, he reminded everyone, including himself, what he actually sounded like. He reportedly told the special's director he was through making records and movies he didn't believe in.",

    "Making good on that meant leaving his usual studios and Nashville players for American Sound Studio, a converted garage in Memphis run by producer Chips Moman with his own house band, the Memphis Boys — Reggie Young on guitar, Tommy Cogbill and Mike Leech on bass, Bobby Wood on piano, Bobby Emmons on organ, Gene Chrisman on drums. By January 1969 that studio had already cut well over a hundred chart records with the same six musicians: the Box Tops' \"The Letter\" and \"Cry Like a Baby,\" King Curtis's \"Memphis Soul Stew,\" Dusty Springfield's Dusty in Memphis sessions just months earlier. Moman and his band were a proven hit machine before Elvis walked in.",

    "The sessions, spread across two weeks in January and another in February, were productive and tense. The friction that's actually documented was over publishing: Freddy Bienstock, who ran the Hill & Range operation tied to Colonel Parker's business, tried to steer Elvis back toward songs the Parker machine had a stake in, and clashed hard enough with Moman that Moman told him to take the tapes and leave rather than let outside material get pushed off the session. RCA's Harry Jenkins backed Moman and sent Bienstock away — which is why \"In the Ghetto\" and \"Suspicious Minds\" survived to be recorded at all.",

    "Twelve songs from the sessions made the LP; \"In the Ghetto\" had already gone out as a single in April and closes the record, while \"Suspicious Minds,\" cut at the same sessions, was held back for a non-album single that August and became Elvis's last American No. 1. The album reached No. 13 on Billboard, went gold, and got a lead review in Rolling Stone the next month with Elvis on the cover — a serious magazine treating him as a serious artist again. AllMusic later called it one of the greatest soul albums ever cut by a white singer.",
  ],

  listeningNotes: [
    {
      label: "\"In the Ghetto\" closes it",
      text: "Mac Davis's song about a child born into rural poverty; Elvis sings it flat and unornamented, no vocal tricks, which is why it works.",
    },
    {
      label: "The Memphis Boys' pocket",
      text: "Chrisman's drums and Cogbill's bass sit far back in the mix on \"Long Black Limousine\" — a patient soul-single groove now carrying a story about a funeral.",
    },
    {
      label: "\"I'm Movin' On\" turned inside out",
      text: "A 1950 Hank Snow country hit rebuilt as a horn-driven soul stomp — the whole argument for why this studio made sense for him.",
    },
    {
      label: "Restraint on the ballads",
      text: "\"Any Day Now\" and \"True Love Travels on a Gravel Road\" are sung quietly, almost conversationally, far from his movie-era bombast.",
    },
    {
      label: "What isn't here",
      text: "\"Suspicious Minds,\" cut in the same room days apart from everything else, was held off the LP entirely — this is one edit of a much bigger session.",
    },
  ],

  sources: [
    { title: "From Elvis in Memphis — Wikipedia", url: "https://en.wikipedia.org/wiki/From_Elvis_in_Memphis" },
    { title: "From Memphis to Vegas / From Vegas to Memphis — Wikipedia", url: "https://en.wikipedia.org/wiki/From_Memphis_to_Vegas_/_From_Vegas_to_Memphis" },
    { title: "From Elvis in Memphis — AllMusic", url: "https://www.allmusic.com/album/from-elvis-in-memphis-mw0000262451" },
    { title: "Marty Lacker on Elvis' 1969 Memphis recording sessions — elvis.com.au", url: "https://www.elvis.com.au/presley/marty-lacker-on-elvis-1969-memphis-recording-sessions.shtml" },
  ],

  influencedBy: [
    { artist: "The Box Tops", album: "The Letter / Cry Like a Baby", year: "1967", note: "Chips Moman and the Memphis Boys were already a proven hit factory at American Sound before Elvis arrived — these were two of the studio's biggest records." },
    { artist: "King Curtis", album: "Memphis Soul Stew", year: "1967", note: "Cut by the same house band at the same studio, a record that literally names the musicians as it introduces them — the sound Elvis was walking into." },
    { artist: "Dusty Springfield", album: "Dusty in Memphis", year: "1969", note: "Recorded at American Sound with the same Memphis Boys only months before Elvis's sessions, proof the studio could turn a non-Southern singer into a convincing soul record." },
  ],

  influenced: [
    { artist: "Elvis Presley", album: "From Memphis to Vegas / From Vegas to Memphis", year: "1969", note: "RCA's follow-up double LP paired a live Las Vegas disc with ten more leftover American Sound tracks, packaging the studio comeback and the live comeback as one story." },
    { artist: "Elvis Presley", album: "Suspicious Minds", year: "1969", note: "Cut at the same sessions but held off this LP and released as a single that August; it became his last U.S. No. 1 and is now inseparable from this record's story." },
    { artist: "Elvis Presley", album: "Elvis Country (I'm 10,000 Years Old)", year: "1971", note: "The next studio album to lean this hard on roots material and serious reviews, carrying forward the credibility this one had re-established." },
  ],
});
