import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Barry Adamson",
  album: "Moss Side Story",
  year: "1989",
  heading: "Moss Side Story — Barry Adamson (1989)",

  albumLine:
    "Released 6 March 1989 on Mute Records and produced by musician Barry Adamson himself. It's a largely instrumental concept album — a soundtrack to a crime film that doesn't exist — and it's his debut solo studio album.",

  overview: [
    "Adamson was born in Moss Side, the Manchester district named in the title, and had played bass in Magazine and in singer Nick Cave's Bad Seeds. Writer Ian Johnston of The Quietus reports the album began with a sampler: \"I was transfixed with this sampler I'd bought,\" Adamson says, and Mute offered a publishing deal. He sampled the main theme of Elmer Bernstein's score for The Man with the Golden Arm, slowing it by playing lower on the keys — \"the genius of the sampler is that you move further down the keys to slow the sample down\" — and went into the studio and \"sat at the drum kit like Frank Sinatra in the film.\" Bernstein's response, relayed by Adamson: \"Sounds good to me.\" That one piece, Adamson says, became the idea for the album.",

    "He made it largely alone. Wikipedia credits him with all instruments except as noted, plus string arrangements, treatments, samples and sequencing, with John Fryer and Paul Kendall mixing and Kendall engineering. Guests include singer Diamanda Galás, guitarist Rowland S. Howard and saxophonist Gary Barnacle. The record is laid out in three acts with titles that read like a film-noir plot outline, and the inner sleeve carries a short story by musician Dave Graney. The title plays on West Side Story. Adamson has called it a \"calling card\" to get hired to score films, and it worked: he later scored Delusion, and director Oliver Stone used tracks in Natural Born Killers. \"People thought it was a soundtrack,\" he says, \"and I did nothing to dissuade them.\"",

    "It's in the book 1001 Albums You Must Hear Before You Die (2010 revised edition, per Wikipedia), and NME ranked it 34th among 1989's albums. NME critic S. Marconie called it \"one of the best soundtracks ever, the fact that it has no accompanying movie is a trifling irrelevance.\" Critic Ritchie Unterberger of AllMusic called it \"a sinister and edgy soundscape.\" Reviewer mare-C of Head Heritage called the opener \"one of THE great opening salvos to any album\" and the whole \"a plunge down into jeopardy,\" good for \"dark-night walks on difficult days.\" Fan taste is more divided; one listener site rates it lower, with many finding the concept more interesting than the listening.",
  ],

  listeningNotes: [
    {
      label: "A film theme slowed on a sampler",
      text: "The Golden Arm theme comes in at the start, slowed by playing lower on the keys, with Adamson playing drums over it. Trouser Press calls the result \"a great, throbbing version.\"",
    },
    {
      label: "Voices as sound effects",
      text: "Wikipedia notes occasional screams, vocal samples and a choir. On \"On the Wrong Side of Relaxation\" the voice is Diamanda Galás, used as a sound as much as a singer.",
    },
    {
      label: "Noir guitar and brass",
      text: "Rowland S. Howard plays guitar on \"Autodestruction\" and Gary Barnacle saxophone on \"Sounds from the Big House,\" the kind of guest touches that fill in the film's imaginary scenes.",
    },
    {
      label: "A news-and-effects collage",
      text: "Trouser Press hears \"an exquisite assemblage of sampled newscasts, period sound effects\" with \"a strong aura of '60s mod London.\"",
    },
    {
      label: "A TV theme rebuilt",
      text: "A bonus section on CD versions includes \"Alfred Hitchcock Presents,\" which reworks the show's theme and Gounod's \"Funeral March of a Marionette.\"",
    },
  ],

  sources: [
    { title: "Memento Mori: The Strange World Of… Barry Adamson — The Quietus (Ian Johnston, 2018)", url: "https://thequietus.com/?p=25566" },
    { title: "Moss Side Story — Wikipedia", url: "https://en.wikipedia.org/wiki/Moss_Side_Story" },
    { title: "Barry Adamson: Moss Side Story — Head Heritage (mare-C, 2002)", url: "https://headheritage.co.uk/?p=6139" },
    { title: "Barry Adamson — Trouser Press", url: "https://trouserpress.com/reviews/barry-adamson/" },
  ],

  influencedBy: [
    { artist: "Elmer Bernstein", album: "The Man with the Golden Arm", year: "1956", note: "Adamson told The Quietus, \"I actually sampled the main theme from 'The Man With The Golden Arm' at the beginning\"; Trouser Press describes the album's \"great, throbbing version\" of it. The score is for a 1955 film; the soundtrack album came out in 1956." },
  ],

  influenced: [],
});
