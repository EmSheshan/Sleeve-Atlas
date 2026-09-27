import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Cyndi Lauper",
  album: "She's So Unusual",
  year: "1983",
  heading: "She's So Unusual — Cyndi Lauper (1983)",

  albumLine:
    "Released 13 October 1983 on Portrait, produced by Rick Chertoff and recorded at the Record Plant in New York between May and August that year. It's new wave pop, thirty-eight minutes long — Lauper's solo debut at thirty, after one failed band and a bankruptcy.",

  overview: [
    "She had already had a career and lost it. Lauper formed Blue Angel in 1978 with saxophonist John Turi; their 1980 album flopped, and legal trouble afterwards left her bankrupt and singing in New York clubs. The manager David Wolff got her a Portrait deal in spring 1983, and this was made fast — three months, start to finish.",

    "The band behind it matters more than the credits suggest: Rob Hyman and Eric Bazilian of the Hooters play and arrange throughout, with Anton Fig on drums. They give the record a genuine new wave springiness — cheap-sounding keyboards, hard snare, everything bright and slightly artificial — which keeps it from becoming the standard-issue eighties pop production it could easily have been.",

    "The song that made her is a cover, and what she did to it is the interesting part. Robert Hazard had written \"Girls Just Want to Have Fun\" from a man's point of view; Lauper altered the lyrics to sing it as a woman about women, and it became an anthem rather than a leer. That reframing is the whole album in miniature — she was thirty, orange-haired, thrift-shopped, and presenting a version of femininity that was neither demure nor packaged for male approval. MTV, then two years old and desperate for visually distinctive artists, gave her enormous reach.",

    "The results were historic: the first woman to place four top-five singles from a single album, including her first No. 1. It reached No. 4 on the Billboard 200, spent 65 weeks in the top forty, and sold around 16 million copies worldwide. She took the Grammy for Best New Artist; Annie Leibovitz's Coney Island cover photograph won one too. Rolling Stone has moved it up their greatest-albums list over time, from 494th to 184th, and the Library of Congress added it to the National Recording Registry in 2019.",
  ],

  listeningNotes: [
    {
      label: "A voice with enormous range and no polish",
      text: "Lauper swoops from a low Queens rasp to a full-throated top register inside single lines, with hiccups and yelps left in. Kurt Loder in Rolling Stone called it a \"wild and wonderful skyrocket of a voice.\"",
    },
    {
      label: "Cheap keyboards on purpose",
      text: "The synths are thin and toy-like rather than lush, giving the record a bright, plastic quality that dates it precisely to 1983 and is much of its charm.",
    },
    {
      label: "A gender-flipped lyric",
      text: "The opening hit was written by a man about women; Lauper rewrote it to be sung by one. The change is small on the page and total in effect.",
    },
    {
      label: "The ballad in the middle",
      text: "\"Time After Time,\" co-written with Rob Hyman, drops the novelty entirely for something plain and slow. It's the track that proved she wasn't a novelty act, and it went to No. 1.",
    },
    {
      label: "A song about masturbation on pop radio",
      text: "\"She Bop\" is about exactly what it sounds like and still reached No. 3, obliquely enough that much of its audience missed it. It later landed on the PMRC's list of objectionable records.",
    },
  ],

  sources: [
    { title: "She's So Unusual — Wikipedia", url: "https://en.wikipedia.org/wiki/She%27s_So_Unusual" },
    { title: "Cyndi Lauper — Wikipedia", url: "https://en.wikipedia.org/wiki/Cyndi_Lauper" },
    { title: "National Recording Registry — Library of Congress", url: "https://www.loc.gov/programs/national-recording-preservation-board/recording-registry/complete-national-recording-registry-listing/" },
  ],

  influencedBy: [
    { artist: "Blondie", album: "Parallel Lines", year: "1978", note: "The New York template for a distinctive woman fronting sharp, hook-driven new wave pop." },
    { artist: "The Pretenders", album: "Pretenders", year: "1980", note: "Chrissie Hynde's precedent for a woman fronting a rock band entirely on her own terms." },
  ],

  influenced: [
    { artist: "Madonna", album: "Like a Virgin", year: "1984", note: "The two were treated as rivals; this album's MTV-era proof that a visually distinctive woman could dominate pop came first." },
    { artist: "Gwen Stefani", album: "Love. Angel. Music. Baby.", year: "2004", note: "The lineage of playful, image-forward pop built on an unmistakable voice and thrift-shop styling." },
  ],
});
