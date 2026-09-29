import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Sex Pistols",
  // curly apostrophe — the generator's own spelling, and saveNote matches exactly
  album: "Never Mind The Bollocks, Here’s The Sex Pistols",
  year: "1977",
  heading: "Never Mind the Bollocks, Here's the Sex Pistols (1977)",

  albumLine:
    "Released 28 October 1977 on Virgin, produced by Chris Thomas and Bill Price at Wessex Sound Studios in London between October 1976 and August 1977. The only studio album they made, and the one everything called punk is measured against.",

  overview: [
    "The first thing to correct is the sound. Punk's legend is of amateurs thrashing in a garage, and this record is nothing of the kind: Chris Thomas had engineered for the Beatles and produced Roxy Music, and the guitars here are layered many times over into a single enormous wall. It is one of the most meticulously constructed rock albums of the decade, made to sound like a riot.",

    "The second is who played it. Glen Matlock wrote or co-wrote most of the material and then left in February 1977; he plays bass on one track. Sid Vicious, who replaced him and became the band's defining image, could barely play and contributes partial bass to two. The bass on everything else is Steve Jones, the guitarist. So the most famous punk record ever made is largely one man overdubbing himself, with Johnny Rotten singing and Paul Cook drumming.",

    "The title did real legal work. A Virgin shop manager in Nottingham was arrested for displaying it, and the November 1977 prosecution turned on whether \"bollocks\" was obscene; the defence argued successfully that the word historically meant nonsense, and he was acquitted. That a High Court had to rule on a sleeve is a fair measure of what the band were actually doing — the offence was the point, and the establishment obliged by taking it seriously.",

    "It entered the UK chart at No. 1 on 125,000 advance orders and was gold within weeks; it is twice platinum in Britain and platinum in America. The band dissolved within three months of release. Rolling Stone later placed it second only to \"Sgt. Pepper\" among all albums to that point, and it entered the Grammy Hall of Fame in 2015 — a fate its makers would have found either hilarious or unbearable.",
  ],

  listeningNotes: [
    {
      label: "Guitars stacked into a wall",
      text: "Jones's parts are multi-tracked many times over into one dense, mid-heavy slab. There is nothing accidental or thin about it.",
    },
    {
      label: "Rotten's sneer",
      text: "He rolls his r's, stretches vowels into a whine and lands consonants like spit — a delivery that is theatrical music-hall as much as it is aggression.",
    },
    {
      label: "Cook's drumming, straight and hard",
      text: "Almost no fills, almost no variation, played fast and dead on the beat. It is the floor everything else stands on.",
    },
    {
      label: "Pop songs underneath",
      text: "The chord sequences are conventional and the choruses are hooks; Matlock's writing owes more to the Beatles and the Faces than the noise suggests.",
    },
    {
      label: "No bass guitar hero",
      text: "The bass mostly doubles the guitar root notes, which is a consequence of the guitarist playing it and part of why the record sounds like one mass.",
    },
  ],

  sources: [
    { title: "Never Mind the Bollocks, Here's the Sex Pistols — Wikipedia", url: "https://en.wikipedia.org/wiki/Never_Mind_the_Bollocks,_Here%27s_the_Sex_Pistols" },
    { title: "Sex Pistols — Wikipedia", url: "https://en.wikipedia.org/wiki/Sex_Pistols" },
    { title: "Glen Matlock — Wikipedia", url: "https://en.wikipedia.org/wiki/Glen_Matlock" },
  ],

  influencedBy: [
    { artist: "The Stooges", album: "Raw Power", year: "1973", note: "The immediate American precedent for compressed, hostile guitar rock played at maximum density." },
    { artist: "New York Dolls", album: "New York Dolls", year: "1973", note: "Managed briefly by Malcolm McLaren before he assembled this band; the look and the shambolic pose come from there." },
    { artist: "The Who", album: "My Generation", year: "1965", note: "The English template for youth aggression as pop, which Matlock's songwriting works directly from." },
  ],

  influenced: [
    { artist: "Dexys Midnight Runners", album: "Searching For The Young Soul Rebels", year: "1980", note: "Rowland and Archer came out of punk, carrying its tempos and confrontation into soul." },
    { artist: "Pretenders", album: "Pretenders", year: "1980", note: "Chrissie Hynde spent years inside the London scene this record defined before forming her own band." },
    { artist: "X-Ray Spex", album: "Germfree Adolescents", year: "1978", note: "Poly Styrene has said seeing the Pistols prompted her to start a band." },
  ],
});
