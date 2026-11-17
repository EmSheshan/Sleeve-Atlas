import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "DJ Shadow",
  album: "Endtroducing.....",
  year: "1996",
  heading: "Endtroducing..... — DJ Shadow (1996)",

  albumLine:
    "Released in September 1996 on Mo' Wax and produced, engineered and mixed by Josh Davis, who records as DJ Shadow. It's instrumental, downtempo hip-hop assembled from samples, and it's Davis's debut album.",

  overview: [
    "Davis bought an Akai MPC60 sampler in October 1992 and spent the next few years learning what a single machine could do with other people's records. According to writer Tom Doyle in Sound On Sound, he first sampled a break from a 45 by a group called the O'Jahs, and in 1994 added an Alesis ADAT tape recorder to his home setup. The first Mo' Wax single, from 1993, was mixed at producer Dan Nakamura's San Francisco studio, The Glue Factory. Mo' Wax was run by James Lavelle, and Davis told Clash writer Richard Bowes that the album was \"the template for the sound James was looking for, for Mo' Wax.\"",

    "The ideas behind it came from hip-hop rather than from the downtempo scene it was soon filed under. Doyle reports Davis citing Afrika Bambaataa, Steinski and Grandmaster Flash, and Pete Rock's drum programming on Mecca and the Soul Brother (1992); Bowes adds Prince Paul, A Tribe Called Quest and Public Enemy. Davis also argued that hip-hop was more than \"sampling a James Brown drum break.\" Doyle says the music was labelled trip-hop; neither piece says whether Davis accepted that label.",

    "Bowes says the album took around two years, with its earliest seeds in late 1993 or early 1994, and that Davis worked on headphones with just three pieces of equipment. There are no rappers or singers on it. Both writers call it widely acclaimed, though neither names a critic or gives chart figures, so sales and individual reviews aren't covered here. Doyle states that it entered the Guinness Book of Records in 2001 as the first completely sampled album; Bowes says it is widely recognised as the first, a distinction Davis was unaware of at the time. Guinness's own listing was not checked.",

    "Its reputation has only grown. Doyle calls it one of the greatest hip-hop albums ever made, and Bowes writes that generations of hip-hop artists trace a stylistic lineage to it and that Radiohead \"famously copied his methods for the drums\" on a song from OK Computer — his claim, not confirmed elsewhere.",
  ],

  listeningNotes: [
    {
      label: "Stacked, isolated elements",
      text: "Davis described building each piece by layering separate sampled parts, then fading hi-hats and kicks in and out during sequencing. It gives the music its slow, breathing arrangement.",
    },
    {
      label: "Slowed-down drum breaks",
      text: "On \"Midnight In A Perfect World\", Doyle says the drum track is a slowed-down break from the 1960s psychedelic soul band Rotary Connection, which gives the beat its heavy, unhurried weight.",
    },
    {
      label: "Samples from far outside hip-hop",
      text: "The same track draws on a piano figure from composer David Axelrod's 1969 album Songs Of Experience, phased Fender Rhodes chords from Finnish musician Pekka Pohjola, and a vocal from the group Baraka. Doyle's article lists them; the effect is a collage that feels like one piece.",
    },
    {
      label: "Scratching on top of sampler beats",
      text: "Doyle says \"The Number Song\" was built on the MPC, with turntable scratches added afterwards. The two layers stay audibly distinct.",
    },
    {
      label: "One sampler, one tape machine",
      text: "A sampler, a tape recorder and headphones were the core kit. Nothing here depends on a studio budget, which is much of the album's mythology.",
    },
  ],

  sources: [
    { title: "Classic Tracks: DJ Shadow 'Midnight In A Perfect World' — Sound On Sound (Tom Doyle, 2017)", url: "https://www.soundonsound.com/techniques/classic-tracks-dj-shadow-midnight-perfect-world" },
    { title: "DJ Shadow On 30 Years Of 'Endtroducing' — Clash (Richard Bowes, 2026)", url: "https://www.clashmusic.com/features/dj-shadow-on-30-years-of-endtroducing/" },
  ],

  influencedBy: [
    { artist: "David Axelrod", album: "Songs of Experience", year: "1969", note: "Sampled directly: Sound On Sound identifies a piano figure from this album as the main hook of one of Davis's best-known pieces." },
    { artist: "Public Enemy", album: "It Takes a Nation of Millions to Hold Us Back", year: "1988", note: "Named by Davis in Clash as part of the hip-hop grounding for his approach to dense sample collage." },
  ],

  influenced: [
    { artist: "Radiohead", album: "OK Computer", year: "1997", note: "Davis told Pitchfork (2020) that Radiohead said they were big fans of this album; Wikipedia, citing Guitar World, says it inspired the band to edit and loop drums on OK Computer." },
  ],
});
