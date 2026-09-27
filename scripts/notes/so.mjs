import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Peter Gabriel",
  album: "So",
  year: "1986",
  heading: "So — Peter Gabriel (1986)",

  albumLine:
    "Released 19 May 1986 on Charisma, Virgin and Geffen, produced by Daniel Lanois with Gabriel, recorded across a year at his own Ashcombe House in Somerset plus studios in New York and Rio de Janeiro. It's art rock made deliberately accessible — his fifth solo album and by far his biggest.",

  overview: [
    "Gabriel had left Genesis in 1975 and spent a decade making increasingly experimental records, four of which he refused to title at all. This one has a name, which is itself the announcement. His stated aim was blunt: \"I wanted to write proper pop songs, albeit on my own terms.\" The terms turned out to include a Motown-style horn arrangement, a duet with Kate Bush about despair, and rhythms borrowed from West Africa and Brazil.",

    "The rhythm section is where the album's character lives. Manu Katché, a French-Ivorian drummer, plays with a fluidity quite unlike the gated snare sound that defined most 1986 production, and Tony Levin's bass is melodic and prominent. Lanois described the working method as unusual — \"like overdubbing the rhythm section on top of a demo\" — building outwards from Gabriel's sketches rather than recording a band playing together.",

    "Gabriel's interest in music from outside the Anglo-American tradition was already long-standing; he had founded the WOMAD festival in 1982, nearly bankrupting himself doing it. Youssou N'Dour, the Senegalese singer, appears here singing in Wolof on a track that became one of the album's most enduring. That engagement was more sustained and more collaborative than much of what got labelled world music in the eighties, though the broader critique of that period — Western stars borrowing selectively while keeping the billing — is worth keeping in view.",

    "Commercially it was transformative. \"Sledgehammer\" became his only US No. 1, propelled by a stop-motion video that won nine MTV Video Music Awards, still a record. The album went to No. 1 in the UK and No. 2 in the US, spent 93 weeks on the chart, and went five times platinum. Rolling Stone later placed it fourteenth among albums of the eighties. It remains the rare case of an experimental musician making a straightforwardly commercial record without noticeably lowering his ambitions.",
  ],

  listeningNotes: [
    {
      label: "Katché's drumming",
      text: "Loose, rolling and full of ghost notes rather than the rigid gated snare that dominated 1986. It's the main reason the record hasn't aged the way its contemporaries have.",
    },
    {
      label: "A Stax horn section on a pop-art record",
      text: "\"Sledgehammer\" opens with a shakuhachi flute sample and then drops into full soul-revue brass, borrowing sixties Memphis wholesale into a synth-era production.",
    },
    {
      label: "The Fairlight underneath everything",
      text: "Gabriel was an early adopter of the Fairlight CMI sampler, and much of the album's texture — flutes, breaking glass, unidentifiable percussion — is sampled material triggered as instruments.",
    },
    {
      label: "Two voices in argument",
      text: "The duet with Kate Bush is structured as a genuine exchange, his verses sunk in defeat and hers answering. It's a dialogue rather than a lead-plus-harmony arrangement.",
    },
    {
      label: "Wolof singing left untranslated",
      text: "Youssou N'Dour sings in his own language, uncushioned and un-subtitled, taking the emotional peak of the song rather than decorating it.",
    },
    {
      label: "Bass as melody",
      text: "Tony Levin plays high, singing bass lines — sometimes on a Chapman Stick — that function as counter-melody rather than root notes.",
    },
  ],

  sources: [
    { title: "So (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/So_(album)" },
    { title: "Peter Gabriel — Wikipedia", url: "https://en.wikipedia.org/wiki/Peter_Gabriel" },
    { title: "Daniel Lanois — Wikipedia", url: "https://en.wikipedia.org/wiki/Daniel_Lanois" },
  ],

  influencedBy: [
    { artist: "Talking Heads", album: "Remain in Light", year: "1980", note: "The template for art-rock musicians building songs on West African rhythmic structures rather than rock beats." },
    { artist: "Otis Redding", album: "Otis Blue", year: "1965", note: "The Stax soul horn vocabulary that \"Sledgehammer\" reproduces almost as pastiche." },
  ],

  influenced: [
    { artist: "Youssou N'Dour", album: "The Guide (Wommat)", year: "1994", note: "Gabriel's platform and label, Real World, were instrumental in N'Dour reaching Western audiences on his own terms." },
    { artist: "Radiohead", album: "OK Computer", year: "1997", note: "Part of the lineage of British art rock that sells in millions without simplifying — a path this record demonstrated." },
  ],
});
