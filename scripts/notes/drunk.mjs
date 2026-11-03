import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Thundercat",
  album: "Drunk",
  year: "2017",
  heading: "Drunk — Thundercat (2017)",

  albumLine:
    "Released 24 February 2017 on Brainfeeder, the label founded by producer Steven \"Flying Lotus\" Ellison, who also mixed the record and added production across most of it. Twenty-three tracks in a little over fifty minutes, moving between jazz fusion, funk, soul and soft rock. It's bassist Stephen Bruner's third album as Thundercat.",

  overview: [
    "Bruner is a Los Angeles bass player who spent the four years after his previous album appearing on more than a dozen other people's records — Suicidal Tendencies, saxophonist Kamasi Washington, Childish Gambino, Mac Miller, Ty Dolla $ign, Kendrick Lamar. The one he treats as a dividing line is rapper Kendrick Lamar's To Pimp a Butterfly. \"There's a part where you know the greatness of the person you're working with,\" he told Relix; Lamar, he said, \"put himself on the chopping block,\" and \"I remember seeing how this guy was putting his all into it.\" Session work, he added, \"has made me very open.\" Drunk is what that did to a player who had previously been, in his own phrase, \"hiding behind my instrument.\"",

    "Two worlds meet on it. One is jazz fusion, the music Bruner grew up chasing in LA and the reason he still names bassist Stanley Clarke as a major influence; everything here is written on his six-string electric bass, and he told Exclaim! he still thinks of himself as a bass player first. The other is American AM-radio soft rock — the stuff since rebranded yacht rock, usually invoked as a joke. Bruner invoked it both ways. Asked on a radio show who he'd want to be stranded on an island with, he named singer-songwriter Kenny Loggins and singer Michael McDonald, formerly of the Doobie Brothers. \"I was very serious at the same time I was joking about it,\" he said, with \"a lot of respect for them as songwriters.\" Loggins was intrigued, brought McDonald in, and asked what they should do; Bruner's answer was \"I want you to do exactly what you've always done.\"",

    "It was assembled loosely rather than tracked as a project — \"a bit of a never-ending process,\" he said, that \"stopped when I stopped\" — with Pharrell Williams, Wiz Khalifa and Washington turning up alongside Lamar, and no attempt to keep things tidy: \"I didn't try to put any boundaries on the idea of what the album's supposed to be.\" Reviews were strongly positive, aggregating in the low eighties, and it landed at the point where the musicians behind big rap records were becoming names themselves. It's the record that made Bruner one of them.",
  ],

  listeningNotes: [
    {
      label: "Six-string bass as the writing desk",
      text: "Every song starts on a six-string electric bass, which has four strings' worth of low end plus two more above it. Lines that would be a guitar part anywhere else stay down in the bass register.",
    },
    {
      label: "Soft-rock harmony played completely straight",
      text: "The soft-rock duet that became the first single works because nobody winks. Loggins and McDonald sing exactly as they would have in 1979, and the arrangement around them is sincere rather than pastiche.",
    },
    {
      label: "Song-length as a joke",
      text: "Twenty-three tracks across fifty minutes means most are fragments — a verse, a groove, a punchline, gone. The sequence works by accumulation, so skipping breaks it in a way it wouldn't on a conventionally paced record.",
    },
    {
      label: "Falsetto sitting high above the low end",
      text: "Bruner sings in a thin, high, unguarded voice, deliberately far from the dense bass underneath. The gap between the two registers is most of the record's texture.",
    },
    {
      label: "Ellison's smeared mixes over live playing",
      text: "The playing is real and extremely accurate; the processing around it pitch-bends, blurs and drops out. That tension — flawless musicianship heard through a woozy filter — is what makes it sound like a Brainfeeder record rather than a fusion one.",
    },
  ],

  sources: [
    { title: "Bass of Operations: Thundercat Brings Kendrick, Pharrell and Kenny Loggins to Fusion Project 'Drunk' — Exclaim!", url: "https://exclaim.ca/music/article/bass_of_operations_thundercat_brings_kendrick_pharrell_and_kenny_loggins_to_fusion_project_drunk" },
    { title: "Swing Time: Thundercat Talks Drunk, Working with Kendrick Lamar — Relix", url: "https://relix.com/features/detail/swing_time_thundercat_talks_drunk_working_with_kendrick_lamar" },
    { title: "Drunk (album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Drunk_(album)" },
  ],

  influencedBy: [
    { artist: "Stanley Clarke", album: "School Days", year: "1976", note: "Bruner repeatedly names Clarke, the bassist who made the electric bass a lead melodic instrument, as a major influence; that approach is the whole basis of his playing." },
    { artist: "Flying Lotus", album: "Cosmogramma", year: "2010", note: "Bruner played bass on it, and producer Steven Ellison returned the favour by mixing and co-producing this album on his own Brainfeeder label." },
    { artist: "Kendrick Lamar", album: "To Pimp a Butterfly", year: "2015", note: "Bruner played on it and describes it as the experience that pushed him to stop hiding behind the instrument and write as a frontman." },
    { artist: "The Doobie Brothers", album: "Minute by Minute", year: "1978", note: "Bruner had performed this album's biggest hit live with its singer, Michael McDonald, before recruiting him here; its chord voicings and harmony are the soft-rock half of the record's vocabulary." },
  ],

  influenced: [],
});
