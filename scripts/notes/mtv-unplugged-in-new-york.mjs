import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Nirvana",
  album: "MTV Unplugged In New York",
  year: "1994",
  heading: "MTV Unplugged in New York — Nirvana (1994)",

  albumLine:
    "Recorded at Sony Music Studios in Hell's Kitchen on 18 November 1993 and released on DGC on 1 November 1994, seven months after Kurt Cobain's death. Fourteen songs, played in one continuous take — their first live album, and the one everybody knows.",

  overview: [
    "The format was a format. MTV's Unplugged had by 1993 become a reliable way for a rock band to be respectable for an hour: play the hits on acoustic guitars, look sincere. Nirvana agreed and then declined nearly every part of the bargain. Of fourteen songs, six are covers — Lead Belly, David Bowie, the Vaselines, and three Meat Puppets songs played with Cris and Curt Kirkwood on stage — and only four come from \"Nevermind.\" \"Smells Like Teen Spirit\" was not played. Cobain, Krist Novoselic and Dave Grohl were joined by Pat Smear on second guitar and Lori Goldston on cello.",

    "Even the acoustics were a negotiation. Cobain ran his acoustic guitar through a Fender amplifier and effects pedals, with the amp hidden inside a fake stage monitor so the producers could keep calling it unplugged. The whole set was filmed in a single take rather than assembled from repeats, which is why the nerves are audible and nothing is smoothed over.",

    "The staging is the part that has become impossible to hear past. Cobain asked for stargazer lilies, black candles and a crystal chandelier; the producer Alex Coletti asked, \"You mean like a funeral?\" and Cobain said, \"Exactly. Like a funeral.\" He died on 5 April 1994, four and a half months later, and the album came out seven months after that. It is worth being careful here — the set is a deliberate piece of theatre by someone with a long-standing gothic sense of humour, not a document of a decision. But the performances, particularly the closing Lead Belly song, are sung in a way that has made calm listening difficult ever since.",

    "It entered the Billboard 200 at No. 1, has gone eight times platinum in America, and won the band their only Grammy. What it really did was rewrite the received idea of what Nirvana were: not the loud-quiet-loud band of 1991, but a group whose leader had spent his life listening to Appalachian murder ballads, Scottish twee-pop and the Meat Puppets, and who chose the moment of maximum visibility to say so.",
  ],

  listeningNotes: [
    {
      label: "An acoustic guitar through an amp",
      text: "Cobain's acoustic is amplified and effected, hidden inside a dummy monitor. It's why the tone has body and bite rather than the usual polite strum.",
    },
    {
      label: "Lori Goldston's cello",
      text: "A cello sits under several songs as a low sustained drone, doing the work distortion normally does — filling the space without adding volume.",
    },
    {
      label: "A voice with no cover left",
      text: "Stripped of the guitars he usually hid behind, Cobain sings audibly close and unsupported, cracking where the arrangements can't disguise it.",
    },
    {
      label: "One take, mistakes included",
      text: "False starts, tuning, and between-song mumbling stayed in because the whole set was filmed continuously rather than repaired afterwards.",
    },
    {
      label: "Six covers out of fourteen",
      text: "Nearly half the set is other people's songs, chosen from obscure corners rather than from a canon. It's a statement about lineage disguised as a running order.",
    },
    {
      label: "The final scream",
      text: "The last song, a Lead Belly ballad, ends with an unaccompanied howl that the band simply stop behind. Nothing follows it.",
    },
  ],

  sources: [
    { title: "MTV Unplugged in New York — Wikipedia", url: "https://en.wikipedia.org/wiki/MTV_Unplugged_in_New_York" },
    { title: "Nirvana (band) — Wikipedia", url: "https://en.wikipedia.org/wiki/Nirvana_(band)" },
    { title: "Where Did You Sleep Last Night — Wikipedia", url: "https://en.wikipedia.org/wiki/Where_Did_You_Sleep_Last_Night" },
  ],

  influencedBy: [
    { artist: "Lead Belly", album: "Lead Belly's Last Sessions", year: "1953", note: "Cobain named Lead Belly his favourite performer, and the set closes with one of his songs." },
    { artist: "Meat Puppets", album: "Meat Puppets II", year: "1984", note: "Three of its songs are played here with the Kirkwood brothers on stage, which is how most listeners found the band." },
    { artist: "Nirvana", album: "In Utero", year: "1993", note: "Recorded weeks after that album's release; three of its songs appear, stripped of Albini's room." },
  ],

  influenced: [
    { artist: "Johnny Cash", album: "American IV: The Man Comes Around", year: "2002", note: "The late-career stripped-back recording as a final statement, and the same trick of revealing a song by removing its arrangement." },
    { artist: "Jeff Buckley", album: "Grace", year: "1994", note: "Released the same year; the vogue for a raw solo voice carrying a borrowed song ran through both." },
  ],
});
