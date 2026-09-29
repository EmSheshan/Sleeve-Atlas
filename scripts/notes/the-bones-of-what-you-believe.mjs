import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "CHVRCHES",
  album: "The Bones Of What You Believe",
  year: "2013",
  heading: "The Bones of What You Believe — CHVRCHES (2013)",

  albumLine:
    "Released 20 September 2013 on Virgin and Goodbye Records, written, performed and produced by the band themselves at Alucard, their own basement studio in Glasgow, between 2011 and 2013. Synth-pop built from eighties hardware and very modern engineering — their debut.",

  overview: [
    "They were not a new band in the usual sense. Iain Cook and Martin Doherty had both spent years in Scottish guitar groups — Aereogramme and the Twilight Sad respectively — before deciding to make electronic pop instead, and Lauren Mayberry had drummed and sung in smaller projects while training as a journalist. The record is the work of experienced musicians choosing a genre deliberately rather than beginners finding one.",

    "Self-producing in their own basement is the fact that shapes everything. There is no outside producer smoothing the edges, which is why the synth sounds are so specific — harsh saw-tooth leads, hard-clipped drums, sub-bass mixed as loud as the vocal — and why the songs are structured around drops rather than choruses in the traditional sense. It is pop made by people who mix their own records.",

    "The timing put them at a junction. In 2013 electronic dance music had gone stadium-sized in America while British indie was still recovering from landfill guitar bands; a Glasgow trio making precise, melancholy synth-pop with a clear-voiced singer fitted neither, and so got adopted by both. Mayberry became visible enough to start writing publicly about the abuse directed at women in music, which is part of the band's history rather than a footnote to it.",

    "It entered the UK chart at No. 9 on roughly 12,400 copies, reached the top fifteen in America, Ireland and Australia, and has sold around half a million worldwide. Metacritic settles at 80 across 39 reviews, and Pitchfork later placed it 180th among the albums of the 2010s. Its influence is audible in the decade of synth-pop that followed, where the specific combination of icy production and a plainly emotional vocal became close to a default.",
  ],

  listeningNotes: [
    {
      label: "Synths that bite",
      text: "Lead lines use hard, detuned saw-tooth tones rather than soft pads, sitting right at the front where a guitar would be.",
    },
    {
      label: "Mayberry's voice left clean",
      text: "Almost no processing on the lead vocal, set against heavily processed everything else. The contrast is the band's main trick.",
    },
    {
      label: "Drops instead of choruses",
      text: "Sections build tension and release it into an instrumental hook rather than a sung one — dance structure inside pop songwriting.",
    },
    {
      label: "Sub-bass as a lead instrument",
      text: "The low end is mixed as loud as the voice and carries melody, which is a mixing decision only self-producing bands usually make.",
    },
    {
      label: "Two other singers",
      text: "Doherty takes lead on a track and harmonies elsewhere, so the record isn't only one voice over machines.",
    },
  ],

  sources: [
    { title: "The Bones of What You Believe — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Bones_of_What_You_Believe" },
    { title: "Chvrches — Wikipedia", url: "https://en.wikipedia.org/wiki/Chvrches" },
    { title: "Lauren Mayberry — Wikipedia", url: "https://en.wikipedia.org/wiki/Lauren_Mayberry" },
  ],

  influencedBy: [
    { artist: "Depeche Mode", album: "Music for the Masses", year: "1987", note: "The template for synth-pop that is hard-edged and melancholy rather than bright, with the machines left audible." },
    { artist: "The Knife", album: "Silent Shout", year: "2006", note: "Scandinavian electronic pop built on cold synth tones under a distinctive clear vocal." },
    { artist: "Kate Bush", album: "Hounds of Love", year: "1985", note: "Self-produced pop where the studio is an instrument and the voice is left unprocessed at the centre." },
  ],

  influenced: [
    { artist: "Lorde", album: "Melodrama", year: "2017", note: "Emotionally direct pop over spare, hard electronic production with the vocal mixed dry and forward." },
  ],
});
