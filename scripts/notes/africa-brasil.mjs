import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Jorge Ben Jor",
  album: "Africa Brasil",
  year: "1976",
  heading: "Africa Brasil — Jorge Ben Jor (1976)",

  albumLine:
    "Released in 1976 on Philips, cut in ten days at Phonogram Studios in Rio de Janeiro. Samba-funk and samba-rock braided with soul and Afro-Brazilian percussion, and the first album on which singer, songwriter and guitarist Jorge Ben played electric rather than acoustic guitar. Credited at the time simply to Jorge Ben — he took the name Jorge Ben Jor in 1989.",

  overview: [
    "Brazil had been under military rule since 1964, and 1976 sat inside the stretch known as the Years of Lead: censorship, disappearances, extrajudicial killing. The regime also promoted the idea that Brazil was a racial democracy. Writing in Spectrum Culture, critic Christopher J. Lee argues that Ben's choice to look outward — across the Atlantic to Africa and to Black America — drew less official scrutiny than commentary on Brazil itself would have, while making a point about inheritance the official story preferred not to hear. Ben had passed through the orbit of Tropicália after moving to São Paulo in 1967, and its taste for creolisation over a pure national culture sits behind this. The title declares a continuity outright, and the record closes by reworking a song of his from 1974 named for Zumbi, the leader of Palmares, Brazil's largest settlement of escaped slaves. Journalist Kamille Viola quotes Ben describing the album as \"a tribute to the African rhythms that arrived here, which took roots in Brazil,\" and, more flatly: \"Everything comes from Africa. Everything.\"",

    "His band Admiral Jorge V was joined by around fourteen extra instrumentalists and five backing vocalists, with keyboardist José Roberto Bertrami — of the group Azymuth — writing the orchestral parts and Dadi on bass. Reviewers reach for Dylan at Newport to describe the switch to electric guitar; Lee's objection is that Ben's sounds entirely unforced. The sessions were not harmonious. Marco Mazzola was credited as producer and mixing engineer, but Philips removed him partway through over Ben's objections, and Ben ended up unhappy with both the final mix and the sleeve. He left the label for Som Livre afterwards.",

    "It sold modestly at home — around 60,000 copies — and travelled slowly. Musician David Byrne put the opening track on his 1989 compilation Brazil Classics: Beleza Tropical, which is how most listeners outside Brazil met it; singer Miriam Makeba had already covered one of its songs in 1977. Rolling Stone placed it 22nd on its 2002 list of the 50 coolest records, and Brazil's Discoteca Básica ranked it 42nd in 2022. Lee's summary is hard to improve on: \"a statement album that refuses to go by that name.\"",
  ],

  listeningNotes: [
    {
      label: "Electric guitar used as percussion",
      text: "Ben's chopped, muted chording locks into the drums instead of laying out harmony underneath them — the guitar is a rhythm instrument here in the most literal sense. It's the central change from his acoustic records and it drives nearly everything.",
    },
    {
      label: "Atabaques, cuícas and surdos mixed forward",
      text: "Afro-Brazilian hand percussion sits at the front rather than decorating the edges, which is what keeps the record from simply sounding like American funk with Portuguese lyrics. The cuíca's squeezed, vocal-sounding tone is especially audible.",
    },
    {
      label: "Vamps that refuse to resolve",
      text: "Songs settle onto one riff and ride it for their whole length. That's funk's structural lesson rather than samba's, and it's why several tracks feel like they could continue indefinitely.",
    },
    {
      label: "Chanted group refrains",
      text: "Five backing vocalists turn hooks into crowd chants — call-and-response rather than harmony. The opening track's football chant is the clearest case, and why it works as terrace music.",
    },
    {
      label: "Bertrami's orchestral writing",
      text: "Strings and horns arrive in short stabs rather than sustained beds, so the arrangements add weight without smoothing the rhythm section over. Bertrami was doing related work in jazz-funk with Azymuth at the same time.",
    },
    {
      label: "A dry, close mix",
      text: "Very little reverb — voices and percussion sit right up against the listener. Worth knowing Ben disliked the finished mix, so this is not quite what he wanted.",
    },
  ],

  sources: [
    { title: "Jorge Ben: África Brasil — Spectrum Culture (Christopher J. Lee)", url: "https://spectrumculture.com/2024/09/04/jorge-ben-africa-brasil-review/" },
    { title: "Jorge Ben: África Brasil — AllMusic", url: "https://www.allmusic.com/album/%C3frica-brasil-mw0000439520" },
    { title: "Classic Copyright Cases: Rod Stewart v Jorge Ben Jor — Briffa", url: "https://www.briffa.com/blog/classic-copyright-cases-rod-stewart-v-jorge-ben-jor/" },
    { title: "África Brasil — Wikipedia", url: "https://en.wikipedia.org/wiki/%C3%81frica_Brasil" },
  ],

  influencedBy: [
    { artist: "James Brown", album: "The Payback", year: "1973", note: "The model for treating guitar as a percussion instrument over a single unresolving vamp, which is the engine of this record's rhythm playing." },
    { artist: "Fela Kuti", album: "Gentleman", year: "1973", note: "Extended one-riff forms carried by layered hand percussion and chanted refrains rather than chord movement — named among the album's influences by critics." },
  ],

  influenced: [
    { artist: "Miriam Makeba", album: "Country Girl", year: "1977", note: "She covered one of this album's songs the following year, carrying it into a South African exile's repertoire within months of release." },
    { artist: "Rod Stewart", album: "Blondes Have More Fun", year: "1978", note: "Stewart lifted the chorus melody of a Ben song that appears here in re-recorded form, first cut in 1972; Ben sued, it settled, and the royalties went to UNICEF. Stewart told The Times in 2025: \"Oh yeah, I nicked it.\"" },
  ],
});
