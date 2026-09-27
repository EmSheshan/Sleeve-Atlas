import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "The Sugarcubes",
  album: "Life's Too Good",
  year: "1988",
  heading: "Life's Too Good — The Sugarcubes (1988)",

  albumLine:
    "Released 25 April 1988 on One Little Indian in the UK and Elektra in the US, this is the Sugarcubes' debut, produced by Ray Shulman and Derek Birkett. It's post-punk with pop instincts and a deliberately awkward streak, and it's the record that put Icelandic music on the international map.",

  overview: [
    "The band came out of Reykjavík's small, incestuous punk scene, where most of them had already done time in serious groups — several, including singer and keyboardist Björk Guðmundsdóttir and vocalist and trumpeter Einar Örn Benediktsson, in the black-clad anarcho-punk outfit Kukl. The Sugarcubes started as something closer to a joke, an antidote to that seriousness. Alongside members of the surrealist group Medusa they set up a label and collective called Smekkleysa — Bad Taste — named for a Picasso line about good taste being creativity's enemy. The band was one arm of that project rather than a career move.",

    "Which is why the record sounds the way it does. Björk sings with a clarity and range that made her famous almost immediately; Einar Örn interrupts her, shouts, declaims, and plays trumpet badly on purpose. Behind them Þór Eldon plays chiming guitar, Bragi Ólafsson bass and Sigtryggur Baldursson drums, in a mode much closer to conventional melodic post-punk than the vocals suggest. The friction between a beautiful lead voice and a man barging into it is the album's actual structure, and it was widely misread at the time as either novelty or nuisance.",

    "It was recorded between Studio Sýrland in Reykjavík and Berry Street and Orinoco in London. Warner Bros. and PolyGram both circled; the band went with One Little Indian and kept control, with Howard Thompson at Elektra handling the US. The single \"Birthday\" had already been NME's Single of the Week in August 1987, and the album followed to No. 14 in the UK, No. 1 on the UK indie chart, and No. 54 in the US — eventually a million copies worldwide, a figure with no Icelandic precedent.",

    "Most reviews were enthusiastic. Robert Hilburn in the Los Angeles Times called it \"one of those rare debuts… that not only influence the creative underground but stretch the overall boundaries of rock.\" Steven Wells in NME scored it 50 out of 10. The dissent is worth keeping: Robert Christgau in the Village Voice thought the band's \"sense of mischief\" was \"so imperfectly realized that most of their fans, critics included, barely notice it\" — a fair description of a record whose jokes often don't land as jokes. Its longer legacy runs through Björk's solo career and through Iceland's visibility as a music export.",
  ],

  listeningNotes: [
    {
      label: "Two vocalists at cross purposes",
      text: "Björk sings; Einar Örn talks over her. They aren't trading verses so much as competing for the same space, and whether that reads as funny or irritating is the album's central gamble.",
    },
    {
      label: "Björk's register jumps",
      text: "She moves from a low conversational tone to full-throated yelp inside a single line, with no audible transition. It's the thing every review fixed on, and it's already fully formed here.",
    },
    {
      label: "Deliberately amateur trumpet",
      text: "Einar Örn's trumpet is thin, sour and unresolved — played badly as a choice, in keeping with the Bad Taste principle the band's own label was named after.",
    },
    {
      label: "Conventional band behind unconventional vocals",
      text: "Strip the singing and the arrangements are melodic post-punk: clean chiming guitar, melodic bass, straight-ahead drums. The songs are far more traditionally built than their reputation suggests.",
    },
    {
      label: "English as a second language",
      text: "The lyrics are sung in English by non-native speakers and keep landing on slightly wrong, slightly vivid phrasings. The oddness is partly translation and partly intent, and it's hard to tell where one stops.",
    },
  ],

  sources: [
    { title: "Life's Too Good — Wikipedia", url: "https://en.wikipedia.org/wiki/Life%27s_Too_Good" },
    { title: "30 Years On: Life's Too Good By The Sugarcubes — The Quietus", url: "https://thequietus.com/opinion-and-essays/anniversary/the-sugarcubes-lifes-too-good-review/" },
    { title: "Rediscover The Sugarcubes' Debut Album 'Life's Too Good' — Albumism", url: "https://albumism.com/features/the-sugarcubes-debut-album-lifes-too-good-album-anniversary" },
  ],

  influencedBy: [
    { artist: "Kukl", album: "The Eye", year: "1984", note: "The anarcho-punk group several Sugarcubes came from; this band was formed partly as a reaction against its seriousness." },
    { artist: "The B-52's", album: "The B-52's", year: "1979", note: "An earlier template for a band built on male–female vocal interruption and deliberate silliness played by a competent group." },
  ],

  influenced: [
    { artist: "Björk", album: "Debut", year: "1993", note: "Björk's solo career starts directly from here; the vocal approach is already fully formed on this record." },
    { artist: "Florence + the Machine", album: "Lungs", year: "2009", note: "Cited among later acts influenced by the album's theatrical, large-voiced approach to art-pop." },
  ],
});
