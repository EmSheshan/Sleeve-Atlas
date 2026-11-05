import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Willie Colón & Rubén Blades",
  album: "Siembra",
  year: "1978",
  heading: "Siembra — Willie Colón & Rubén Blades (1978)",

  albumLine:
    "Released 21 December 1978 on Fania, produced by trombonist and bandleader Willie Colón with label boss Jerry Masucci as executive producer. It's salsa, cut in New York and engineered by Jon Fausty. It was the second of five albums Colón made with Panamanian singer and songwriter Rubén Blades, and the best-selling salsa record of its era.",

  overview: [
    "Salsa in 1970s New York largely meant Fania Records, whose roster and all-star band carried a Puerto Rican and Cuban dance music out of uptown clubs across the hemisphere. Colón was central to it: a Bronx-born trombonist making hits since his teens, his sound built on layers of trombone riffs rather than a conventional brass section. Blades arrived by a stranger route — a law degree from the University of Panama (sources date it to 1972 or 1974), then New York, where the job Fania gave him was in the mailroom.",

    "What he wanted to write was not dance-floor romance but narrative: barrio characters, violence, consumer emptiness, Latin American subjects treated as subjects. He has described the choice as building songs on \"our own experiences, our urban and existential reality, without avoiding political themes or difficult scenes.\" By his own account the record exists because Colón took the risk — \"Willie agreed to back my songs when everyone else refused,\" Blades wrote in 2024, adding that without Colón's run of hits Fania might not have recorded it. Blades says he conceived the content, title and cover concept and wrote six of the seven songs, music as well as lyrics, swapping one of his own for \"Ojos\" by Puerto Rican composer Johnny Ortiz. Colón ran the sessions and approved the arrangements.",

    "It sold in quantities salsa had not seen: over three million copies worldwide by most accounts, half a million in Venezuela alone. It entered the Latin Grammy Hall of Fame in 2007, and in 2024 topped both Rolling Stone's fifty greatest salsa albums, compiled by critic Ernesto Lechner, and Los 600 de Latinoamérica. The consensus isn't total — reviewing a reissue for Jazz Journal, critic Matthew Wright found the arrangements cluttered and the record \"too slick and stylised,\" praising only the trombones. Blades's answer to that line is blunt: \"When a record survives 45 years, denying its value is a futile exercise.\" He re-recorded it live in Puerto Rico in 2022 to own a master of his own compositions; that version won a Grammy in 2024 and Colón objected publicly, which tells you it is still contested property.",
  ],

  listeningNotes: [
    {
      label: "Trombones stacked in blocks",
      text: "Colón fronts five trombones — his own plus Leopoldo Pineda, José Rodríguez, Angel \"Papo\" Vázquez and Sam Burtis — riffing in thick parallel lines where most bands used trumpets and saxes. Even Wright called the writing first rate.",
    },
    {
      label: "A disco intro that collapses into salsa",
      text: "The opening track starts on the straight four-on-the-floor pulse of 1978, with a drum kit played by Bryan Brake, before the clave takes over. Critic John Bush at AllMusic hears the band slip into \"a devastating salsa groove.\"",
    },
    {
      label: "Four arrangers, four textures",
      text: "Per Blades: Luis \"Perico\" Ortiz arranged two songs, Louie Cruz three, Carlos Franzetti the title track, Colón one. It's why the record keeps changing shape rather than settling into one house sound.",
    },
    {
      label: "Narrative verse over a held vamp",
      text: "Songs run six and seven minutes because the vocal is telling a story; the band parks on a repeating montuno and lets it. \"Pedro Navaja\" is the clearest case, modelled on Bertolt Brecht's The Threepenny Opera.",
    },
    {
      label: "Coro answering the lead",
      text: "The chorus ensemble — Colón, Blades, José Mangual Jr and Adalberto Santiago — answers in fixed refrains while the lead improvises against them, the engine of the long closing sections.",
    },
    {
      label: "Strings and choir at the end of the record",
      text: "Franzetti's arrangement for the final track drops the trombone format for brass, strings and a vocal choir. Blades notes his spoken thanks to Colón are audible on it.",
    },
  ],

  sources: [
    { title: "Con respecto a \"Siembra, 45º Aniversario\" — Rubén Blades (rubenblades.com)", url: "https://www.rubenblades.com/la-esquina/siembra-45-aniversario-grabado-en-pr-en-2022" },
    { title: "Willie Colón and Rubén Blades: Siembra — Jazz Journal (Matthew Wright)", url: "https://jazzjournal.co.uk/2021/10/08/willie-colon-and-ruben-blades-siembra/" },
    { title: "Rubén Blades — Britannica", url: "https://www.britannica.com/biography/Ruben-Blades" },
    { title: "Siembra — Wikipedia", url: "https://en.wikipedia.org/wiki/Siembra" },
  ],

  influencedBy: [
    { artist: "Willie Colón", album: "El Malo", year: "1967", note: "Colón's own debut established the trombone-led front line and the barrio-narrative subject matter he brought here as producer and arranger." },
    { artist: "Fania All Stars", album: "Live at the Cheetah, Vol. 1", year: "1971", note: "The Fania house band's long single-vamp jams, which left room for improvised vocal pregones — the structure Blades stretched further to fit full narratives." },
  ],

  influenced: [
    { artist: "Rubén Blades", album: "Buscando América", year: "1984", note: "Blades took the same method — story-driven lyrics, political subjects, extended narrative form — off Fania and onto his own band, which this album had proved commercially viable." },
  ],
});
