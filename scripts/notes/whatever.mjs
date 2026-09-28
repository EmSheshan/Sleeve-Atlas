import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Aimee Mann",
  album: "Whatever",
  year: "1993",
  heading: "Whatever — Aimee Mann (1993)",

  albumLine:
    "Released 11 May 1993 on Imago, produced by Mann with Tony Berg, Michael Hausman and Jon Brion, and recorded across seven studios. It's guitar-led power pop with sixties bones — her first solo album, made after three years in which she was legally forbidden to release anything.",

  overview: [
    "She had already had the hit. 'Til Tuesday's \"Voices Carry\" reached No. 8 in 1985 and fixed her in the public mind as a new wave singer with asymmetric hair, which is close to the least useful summary of her available. When the band broke up in 1990 she wanted to go solo and Epic Records refused to release her from her contract for three years. That is the fact behind this record: a working songwriter, at the height of her powers, barred from putting out a note.",

    "So the album is partly about the industry that produced it — one track addresses her label frustrations directly — and partly a statement of what she actually wanted to be doing. Her stated reference points were the Kinks, the Zombies and Squeeze, and she had moved towards what she called acoustic guitar music. Her old bandmate Michael Hausman became her manager; Jon Brion, who had toured with 'Til Tuesday, became her collaborator, and she has said working with him made her songwriting markedly better. That partnership is audible in the arrangements, which are far stranger than the songs' surfaces let on.",

    "In 1993 this was commercially hopeless. Alternative rock meant loud guitars and self-laceration, and a record of immaculately built melodic pop with Beatles chord changes and wry, observational lyrics had no radio format waiting for it. It sold around 170,000 copies over eight years. The reviews were another matter: the Los Angeles Times wrote that she \"mixes words like a master, catching lifetimes of ache,\" Rolling Stone paired \"sunny, surreal\" melodies with \"razor-sharp\" lyrics, and Elvis Costello later put it on his own list of the 500 greatest albums.",

    "The pattern set here repeated for the rest of the decade and eventually broke it. Imago collapsed, Geffen rejected her third album as uncommercial, and in 1999 she and Hausman founded their own label, used royalties from Paul Thomas Anderson's \"Magnolia\" to buy back the masters, and sold 25,000 copies by mail order. \"Save Me\" was nominated for an Academy Award. She became, more or less by exhaustion, one of the first well-known American musicians to prove an artist could simply leave the major-label system — and this album is where the argument starts.",
  ],

  listeningNotes: [
    {
      label: "Sixties chord movement under nineties production",
      text: "The songs turn on unexpected changes borrowed from the Kinks and the Zombies rather than the era's verse-chorus alternation, which is why they resist getting old.",
    },
    {
      label: "Mann's flat, unstraining delivery",
      text: "She sings low in her range, conversationally and almost without vibrato, so the lyrics land as speech. None of the emotion is in the performance's volume.",
    },
    {
      label: "Jon Brion's arrangement oddities",
      text: "Chamberlin, vibraphone, odd keyboards and unplaceable textures appear briefly inside otherwise conventional pop songs. He is the reason this doesn't sound like a singer-songwriter record.",
    },
    {
      label: "Acoustic guitar as the spine",
      text: "Strummed acoustic carries most tracks with electric guitars layered around it, a deliberate move away from the synth-forward sound of her old band.",
    },
    {
      label: "Harmony vocals stacked thickly",
      text: "Multi-tracked backing parts arrive on choruses in the Beach Boys manner, which is where much of the album's sweetness comes from.",
    },
    {
      label: "Jokes buried in sad songs",
      text: "The lyrics run dry and sardonic against warm melodies, so a line lands as funny a beat before it lands as bleak. That timing is her signature.",
    },
  ],

  sources: [
    { title: "Whatever (Aimee Mann album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Whatever_(Aimee_Mann_album)" },
    { title: "Aimee Mann — Wikipedia", url: "https://en.wikipedia.org/wiki/Aimee_Mann" },
    { title: "'Til Tuesday — Wikipedia", url: "https://en.wikipedia.org/wiki/%27Til_Tuesday" },
  ],

  influencedBy: [
    { artist: "The Kinks", album: "Something Else by the Kinks", year: "1967", note: "Named by Mann as an influence; the model of wry character sketches set to melodic English guitar pop." },
    { artist: "The Beatles", album: "Rubber Soul", year: "1965", note: "The chord vocabulary and stacked harmony the album's construction depends on." },
    { artist: "The Zombies", album: "Odessey and Oracle", year: "1968", note: "Also named by Mann — minor-key melodic pop with unusual changes and close vocal arrangements." },
  ],

  influenced: [
    { artist: "Elliott Smith", album: "XO", year: "1998", note: "Jon Brion produced it; the same marriage of Beatles-descended arrangement to plainly sung, unsparing lyrics." },
    { artist: "Fiona Apple", album: "Extraordinary Machine", year: "2005", note: "Another Brion collaboration, and the same tradition of a woman writing sardonic, structurally restless pop on her own terms." },
  ],
});
