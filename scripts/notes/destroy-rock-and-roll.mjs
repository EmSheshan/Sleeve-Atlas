import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Mylo",
  album: "Destroy Rock & Roll",
  year: "2004",
  heading: "Destroy Rock & Roll — Mylo (2004)",

  albumLine:
    "Released 24 May 2004 on Breastfed and produced by Myles MacInnes, the Scottish producer who records as Mylo. It's sample-built house and electropop, and it's his debut album — and, as it turned out, his only studio album.",

  overview: [
    "MacInnes grew up on the Isle of Skye, where, according to Wikipedia, the only station he could pick up was the Ireland-based Atlantic 252. He first heard house on that radio, and he also absorbed the soft rock of the 1970s and 1980s as a child. Later he studied in Los Angeles. The record is those two worlds fused: the glossy hooks of old radio rock rebuilt on a dance-floor chassis.",

    "It was made between November 2003 and April 2004 at various locations in Scotland, with the limited edition adding tracks recorded later. Sampling shaped the sound and the budget alike. Wikipedia reports that many rights holders demanded half of the new songs' earnings, so several originals were replayed rather than lifted, in one case on a Juno synthesiser. The title song's spoken sample has two descriptions: Wikipedia says MacInnes heard a fundamentalist Christian sermon in 2002 while working as a BBC journalist in Glasgow, while critic Dan Raper of PopMatters calls it a conservative politician on an anti-rock rampage. The sources don't reconcile, and I haven't found MacInnes's own account.",

    "Reception was mostly warm. The album holds an 80 on Metacritic from fourteen reviews, reached No. 26 in the UK and No. 10 on Billboard's US dance albums chart, and went Gold in the UK. Critic Tim DiGravina of AllMusic wrote that it \"only seems to cement his status among the elite of electronic cut-and-pasters of his time.\" Raper praised its \"catchiness without flippancy\" and heard Groove Armada and Felix da Housecat in it — his comparisons, not documented influences. The notable dissent came from critic Dave Simpson of The Guardian, who wrote that \"rock'n'roll faces a greater threat from a feather duster.\" Singer Elton John, per Wikipedia, said on a TV chat show that \"every home should own a copy.\" Resident Advisor later placed it 21st among the albums of the 2000s.",
  ],

  listeningNotes: [
    {
      label: "Soft-rock hits rebuilt as house",
      text: "Radio-friendly pop is replayed and recut over a four-on-the-floor pulse. \"In My Arms\" pairs Kim Carnes's hit with a Boy Meets Girl song, which is why it sounds instantly familiar and oddly new.",
    },
    {
      label: "Replayed instead of sampled",
      text: "Because rights holders wanted such large shares, parts of the record are re-performed, with one hook rebuilt on a Juno synth. The result sounds cleaner and more pop-forward than a typical crate-dug sample record.",
    },
    {
      label: "A sermon as a lead voice",
      text: "The title song builds around a spoken denunciation of rock music. PopMatters picked out the mispronounced names, among them \"David Boo-ey\" and \"Cindy Looper,\" which turns the lecture into the joke.",
    },
    {
      label: "Funk and pop in one hook",
      text: "\"Guilty of Love\" samples musician George Duke and a brief grunt from singer Prince's \"Kiss\" — Wikipedia notes the grunt is too short to be copyrighted. It's a small example of how much character the record gets from tiny fragments.",
    },
    {
      label: "A singles-collection feel",
      text: "Raper argued that after several UK singles the album played less like a debut than a greatest-hits set, and Wikipedia lists seven singles in all. The limited edition added a sanctioned mash-up of Miami Sound Machine's \"Dr. Beat\" with \"Drop the Pressure\", which reached No. 3.",
    },
  ],

  sources: [
    { title: "Destroy Rock & Roll — Wikipedia", url: "https://en.wikipedia.org/wiki/Destroy_Rock_%26_Roll" },
    { title: "Mylo: Destroy Rock & Roll — PopMatters (Dan Raper, 2006)", url: "https://www.popmatters.com/mylo_destroy_rock_roll-2495674945.html" },
  ],

  influencedBy: [
    { artist: "George Duke", album: "Night After Night", year: "1989", note: "Sampled directly: the funk track Mylo builds one of the album's hooks on." },
    { artist: "Prince", album: "Parade", year: "1986", note: "Sampled directly: a brief vocal grunt from the album's single is worked into the same track." },
  ],

  influenced: [],
});
