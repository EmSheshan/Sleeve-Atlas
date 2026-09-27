import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Jungle Brothers",
  album: "Done By The Forces Of Nature",
  year: "1989",
  heading: "Done by the Forces of Nature — Jungle Brothers (1989)",

  albumLine:
    "Released 7 November 1989 on Warner Bros., self-produced by the group and recorded at Calliope Studios in New York, with Kool DJ Red Alert as executive producer. It's Afrocentric, jazz-inflected hip-hop — the Jungle Brothers' second album and a cornerstone of the Native Tongues.",

  overview: [
    "The Native Tongues were a loose collective rather than a group: the Jungle Brothers, De La Soul, A Tribe Called Quest, Queen Latifah, Monie Love and others, all connected through friendship and shared sessions. Their common position was a refusal of hip-hop's hardening tendencies at the end of the eighties — bohemian rather than street-tough, interested in African identity and jazz records rather than in confrontation. Most of the collective turns up on this album, along with KRS-One.",

    "Mike Gee, Afrika Baby Bam and DJ Sammy B had already done something unusual the year before: their debut included \"I'll House You,\" among the first records to fuse hip-hop and Chicago house, at a point when the two scenes barely acknowledged each other. That instinct for sources outside the obvious carries through here, with samples drawn from jazz, funk, R&B and African music, and a production style that's warm and loose rather than hard-hitting.",

    "The Afrocentricity is genuine but light-handed — a matter of framing and reference rather than lecture. Robert Christgau caught what makes the record work, describing samples \"evoking everything tolerant and humane in recent black-music memory\" and calling it \"music designed to comfort and sustain.\" AllMusic's Steve Huey judged it \"more realized in many respects\" than their first album.",

    "It never sold in quantity — No. 46 on the R&B and hip-hop chart, No. 41 in the UK — and the Jungle Brothers have consistently been the least famous of the Native Tongues despite arguably getting there first. The album appeared on The Source's 100 Best Albums list in 1998 and is now routinely described as underrated, which is accurate and slightly beside the point: it's a foundational record for the entire jazz-rap and alternative hip-hop tradition that followed.",
  ],

  listeningNotes: [
    {
      label: "Jazz records as raw material",
      text: "Horn lines, upright bass and drum breaks lifted from jazz sit under the rhythms, giving the album a swing and warmth distinct from the harder sampling of its contemporaries.",
    },
    {
      label: "House tempo showing through",
      text: "The group had already bridged hip-hop and Chicago house, and several tracks here carry that faster, four-on-the-floor pulse under the rapping.",
    },
    {
      label: "Percussion layered thick",
      text: "African and Latin hand percussion runs alongside the programmed drums, so the rhythm beds are busy and organic rather than sparse and mechanical.",
    },
    {
      label: "Relaxed, conversational rapping",
      text: "Mike Gee and Afrika Baby Bam trade verses in an unhurried, almost chatty style, frequently finishing each other's lines rather than competing.",
    },
    {
      label: "Guests woven in, not featured",
      text: "Most of the Native Tongues appear, but usually as voices inside a track rather than as marquee guest verses — the record sounds like a room of friends.",
    },
    {
      label: "An hour long and unhurried",
      text: "At just over sixty minutes it takes its time, with interludes and grooves allowed to run. The pacing is closer to a DJ set than to a sequence of singles.",
    },
  ],

  sources: [
    { title: "Done by the Forces of Nature — Wikipedia", url: "https://en.wikipedia.org/wiki/Done_by_the_Forces_of_Nature" },
    { title: "Jungle Brothers — Wikipedia", url: "https://en.wikipedia.org/wiki/Jungle_Brothers" },
    { title: "Native Tongues — Wikipedia", url: "https://en.wikipedia.org/wiki/Native_Tongues" },
  ],

  influencedBy: [
    { artist: "Afrika Bambaataa", album: "Planet Rock: The Album", year: "1986", note: "Afrika Baby Bam took his name from Bambaataa, whose Zulu Nation supplied the Afrocentric framing the Native Tongues extended." },
    { artist: "James Brown", album: "In the Jungle Groove", year: "1986", note: "The funk break vocabulary underpinning nearly all golden-age sampling, including this record's rhythm beds." },
  ],

  influenced: [
    { artist: "A Tribe Called Quest", album: "The Low End Theory", year: "1991", note: "Fellow Native Tongues, and the record that took this album's jazz-sampling approach to its most refined form." },
    { artist: "De La Soul", album: "De La Soul Is Dead", year: "1991", note: "The other central Native Tongues group, working the same bohemian, sample-eclectic territory." },
  ],
});
