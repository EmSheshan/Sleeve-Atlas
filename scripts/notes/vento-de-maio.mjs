import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Elis Regina",
  album: "Vento De Maio",
  year: "1978",
  heading: "Vento De Maio — Elis Regina (1978)",

  albumLine:
    "Worth saying first: the 1978 date attached to this title isn't supported by the discographies. Vento de Maio is a collection EMI assembled for listeners outside Brazil, issued on Capitol and Metro Blue in 1997–98, drawn mainly from the nine tracks of her 1980 Brazilian LP Elis plus extra material. That album was produced by Renato Corrêa with musical direction and arrangements by pianist César Camargo Mariano — MPB tilted toward electric jazz, and among the last work she finished.",

  overview: [
    "Elis Regina, born in Porto Alegre in 1945, is routinely called the greatest singer Brazil produced, and her method from the mid-sixties onward was as much curatorial as vocal: she picked up songs by then-unknown post-bossa writers — Gilberto Gil, Milton Nascimento, Jorge Ben — and sang them into the mainstream. By the end of the seventies that habit had narrowed to one circle. Almost everything here comes from Clube da Esquina, the collective of songwriters around Belo Horizonte in Minas Gerais: Lô Borges, Telo Borges, Márcio Borges, Marilton Borges, Fernando Brant, Beto Guedes, Ronaldo Bastos and Nascimento all hold writing credits, with two songs by Gil and one by the São Paulo samba writer Adoniran Barbosa. Lô Borges sings on the title track. Where other interpreters of the period reached for standards, she was recording a regional songwriting school more or less entire.",

    "Mariano, her husband and most frequent arranger, had been shaping her records since the early seventies and took a best-arranger award in 1978; his electric keyboards are what push these arrangements away from acoustic MPB and toward fusion. This is late Elis — she died in January 1982, at 36. The year before, she had recorded a João Bosco and Aldir Blanc song that became the unofficial hymn of Brazil's amnesty campaign, played by returning exiles after President João Batista Figueiredo signed the amnesty law in August 1979. That is where her standing sat when she made this. The record itself carries no comparable programme, and nothing in the available sources links it to a political statement; it should not be read as one.",

    "As a package it has been criticised more than the performances have. The Slipcue guide finds the title track and one other \"solid (though lavishly produced) fusion-y ballads\" before the \"EMI collection gets pretty overwrought really quickly,\" and objects that \"the company's song selection is at odds with what I... would like to hear\" — a fair complaint about a label-built sequence rather than about her. Reviewers agree the arrangements lean further into electric jazz than was usual for her. Her standing in Brazil has not moved: tribute records by the singer Joyce and by the Zimbo Trio followed.",
  ],

  listeningNotes: [
    {
      label: "Mariano's electric keyboards",
      text: "Fender-style electric piano and synthesiser carry most of the harmony instead of guitar or strings, giving even the gentlest songs a glassy, late-seventies fusion surface.",
    },
    {
      label: "Samba attack on Minas harmony",
      text: "The Clube da Esquina songs move in long, floating, modal lines, and she sings them with a hard, forward sambista's consonant. The friction between the two is the record's real signature.",
    },
    {
      label: "Phrasing pushed against the bar",
      text: "She habitually enters late and crowds the end of a line, treating the beat as something to argue with. It is the single most imitated thing about her.",
    },
    {
      label: "Strain at the top of the range",
      text: "On the louder passages she tears at notes rather than floating them, a quality late-period reviewers compared to Billie Holiday's final recordings.",
    },
    {
      label: "A songwriter's voice beside hers",
      text: "Lô Borges sings alongside her on the title track, so one of the writers is audibly in the room — a reminder of how close she worked to the people supplying the songs.",
    },
    {
      label: "A running order she never chose",
      text: "The nine tracks of the 1980 album appear resequenced with bonus material appended, including an Adoniran Barbosa samba that sits oddly against the fusion. The abrupt gear changes are the compiler's, not hers.",
    },
  ],

  sources: [
    { title: "Elis Regina Discography — Slipcue.com Brazilian Music Guide", url: "https://www.slipcue.com/music/brazil/elis.html" },
    { title: "Elis Regina: Elis (1980) (aka Vento De Maio) — Dusty Groove", url: "https://www.dustygroove.com/item/105965/Elis-Regina:Elis-1980-aka-Vento-Do-Maio" },
    { title: "ELIS — VENTO DE MAIO: track and composer credits — Discografia Brasileira, Instituto Moreira Salles", url: "https://discografia.discosdobrasil.com.br/discos/elis-vento-de-maio" },
    { title: "Elis Regina — Vento De Maio (release and label details) — Discogs", url: "https://www.discogs.com/master/429610-Elis-Regina-Vento-De-Maio" },
    { title: "Elis Regina — Wikipedia", url: "https://en.wikipedia.org/wiki/Elis_Regina" },
  ],

  influencedBy: [
    { artist: "Milton Nascimento", album: "Clube da Esquina", year: "1972", note: "The songwriting source for most of this record: Lô Borges, Márcio Borges, Fernando Brant, Beto Guedes and Ronaldo Bastos all carry credits here, and Lô Borges sings on the title track." },
  ],

  influenced: [
    { artist: "Joyce", album: "Astronauta: Songs of Elis", year: "1998", note: "A full album of Elis's repertoire by a singer who had also written for her, including one of her later hits — a direct songwriting link, not just homage." },
    { artist: "Zimbo Trio", album: "Tributo a Elis Regina", year: "2004", note: "Reworks her song choices instrumentally, treating her arrangements rather than her voice as the thing worth transcribing." },
  ],
});
