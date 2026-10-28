import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Elvis Costello & The Attractions",
  album: "This Year's Model",
  year: "1978",
  heading: "This Year's Model — Elvis Costello & The Attractions (1978)",

  albumLine:
    "Released 17 March 1978 in the UK on Radar, produced by Nick Lowe and engineered by Roger Béchirian at Eden Studios in Acton, London. New wave with punk's speed grafted onto mid-sixties pop construction. Costello's second album, and his first with the Attractions.",

  overview: [
    "Less than a year before these sessions, singer and songwriter Elvis Costello was working as a computer operator. His debut, My Aim Is True (1977), had been backed by American country-rock band Clover, whose understated playing made him sound like a solo singer-songwriter. He wanted something harder. The Attractions were assembled through blind auditions a few weeks before that debut appeared: keyboardist Steve Nieve, not yet 20, classically trained with no rock experience at all, plus bassist Bruce Thomas and drummer Pete Thomas, no relation, both already seasoned.",

    "Punk had broken in Britain the year before, and Costello was adjacent to it rather than in it. He took its speed and its contempt but built the songs out of the previous decade's pop records. In the 2002 reissue notes he named the Rolling Stones' Aftermath (1966) as a major influence; his own notes trace one song's rhythm to a Byrds track colliding with the sound of the London Underground's Metropolitan line, and guitar figures on another to two 1964 singles by the Who and the Kinks. The lyrics circle advertising, logos, rallies and mass persuasion on one side, relationships at their beginning or end on the other. Critics read misogyny in them — Jon Pareles called the record \"so wrong-headed, so full of hatred\" — and Costello answered in his 2016 memoir Unfaithful Music & Disappearing Ink that the lyrics \"were full of regret and a little sympathy.\" That December he had stopped a song ten seconds into a Saturday Night Live broadcast to play an unapproved attack on the music business instead, getting himself banned from the show until 1989 and made an early face of new wave.",

    "It was made in about eleven days across late December and early January. The band had road-tested most of the songs on the 1977 American tour, so they played them live in the room with minimal overdubs; Bruce Thomas said some went down in a single afternoon — \"It was like Motown.\" Lowe's stated aim was to make it louder than the debut, and Costello didn't want lead-guitar heroics. Designer Barney Bubbles built the sleeve around a photograph by Chris Gabrin of Costello behind a tripod camera, the observer rather than the observed; the first UK pressing was printed off-centre so it read \"His Year's Model\" by \"Lvis Costello.\" Costello: \"We wanted to catch people's eyes.\"",

    "It reached No. 4 in the UK and No. 30 in the US, went gold in both, and was voted best album of 1978 by Melody Maker and The Village Voice alike — Allan Jones in Melody Maker called it \"an achievement so comprehensive, so inspired, that it exhausts superlatives.\" The US edition dropped two songs and closed with the radio broadside from the television stunt instead.",
  ],

  listeningNotes: [
    {
      label: "Organ in the lead guitar's chair",
      text: "Nieve's conservatory training and total lack of rock habits left him playing flourishes a rock keyboardist wouldn't, and his organ takes the space a lead guitarist normally would.",
    },
    {
      label: "Bass written against the vocal",
      text: "Bruce Thomas builds countermelodies running contrary to the sung line rather than propping it up, which is why the arrangements feel crowded at speed.",
    },
    {
      label: "Live band takes, almost no overdubs",
      text: "Pre-tested on tour and cut in a fortnight, the songs were played together rather than assembled, and the near-misses survive in the mixes.",
    },
    {
      label: "Quiet opening, full-throttle exit",
      text: "A recurring shape: a song starts sparse, often voice and one instrument, then the band arrives and it ends at maximum volume.",
    },
    {
      label: "Consonants used as percussion",
      text: "Costello clips and spits syllables, so his diction carries rhythm as much as the drums do — the sneer doing structural work.",
    },
  ],

  sources: [
    { title: "This Year's Model — Wikipedia", url: "https://en.wikipedia.org/wiki/This_Year%27s_Model" },
    { title: "Rediscover Elvis Costello's 'This Year's Model' (1978) — Albumism", url: "https://albumism.com/features/elvis-costello-this-years-model-album-anniversary" },
    { title: "Behind the Album: 'This Year's Model' — American Songwriter, 14 July 2024", url: "https://americansongwriter.com/behind-the-album-this-years-model-the-lp-where-elvis-costello-introduced-the-world-to-the-attractions/" },
    { title: "This Year's Model — AllMusic review", url: "https://www.allmusic.com/album/this-years-model-mw0000189632" },
  ],

  influencedBy: [
    { artist: "The Rolling Stones", album: "Aftermath", year: "1966", note: "Costello named this record directly in the 2002 reissue notes as a major influence; the sneering vocal address to an unnamed woman, and one song here written as an answer to one of its own, come straight from it." },
    { artist: "The Byrds", album: "Fifth Dimension", year: "1966", note: "Costello's own album notes credit a song from this record, colliding with the rhythm of a London Underground train, as the source of one track's drive." },
  ],

  influenced: [
    { artist: "Pixies", album: "Surfer Rosa", year: "1988", note: "Singer and guitarist Black Francis has named this a favourite, describing playing it through his college years until his ears hurt." },
  ],
});
