import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "The Replacements",
  album: "Let It Be",
  year: "1984",
  heading: "Let It Be — The Replacements (1984)",

  albumLine:
    "Released 2 October 1984 on Twin/Tone, an independent Minneapolis label, and produced by Steve Fjelstad with Peter Jesperson and the band. It's the record where a scrappy hardcore outfit became a real songwriting band without sanding off the mess.",

  overview: [
    "The Replacements started as a hardcore punk band in Minneapolis, and for two albums that was mostly the point: fast, drunk, deliberately sloppy, more interested in wrecking a show than finishing one. By 1983 that act was wearing thin even on the band. Paul Westerberg later said flatly that \"playing that kind of noisy, fake hardcore rock was getting us nowhere, and it wasn't a lot of fun\" — and they'd taken to needling their own hardcore audience onstage, breaking into covers of soft pop acts like the DeFranco Family just to watch the crowd that demanded strict punk orthodoxy squirm.",

    "Let It Be is the record where the needling turns into actual songwriting. Fast, dumb, juvenile tracks are still there — \"We're Comin' Out,\" \"Gary's Got a Boner,\" \"Favorite Thing\" — but they're sequenced right next to songs that are plainly, unguardedly sincere: \"Unsatisfied,\" \"Sixteen Blue,\" \"Answering Machine,\" \"Androgynous.\" Westerberg's lyrics turn toward adolescence, rejection, and self-consciousness, handled with humor rather than pure angst, and the arrangements for the first time sound like someone worked them out rather than just banging riffs into titles.",

    "The album was recorded in pieces between August 1983 and February 1984 at Blackberry Way Studios in Minneapolis, with Fjelstad, Jesperson, and the band sharing production, which kept the sessions loose rather than polished. The clearest sign of the shift is the opener, \"I Will Dare\": a jangly shuffle instead of noise, with Peter Buck of R.E.M. dropping in to play the guitar solo after lead guitarist Bob Stinson said he simply couldn't come up with one.",

    "The title is a deliberate jab at the Beatles, and the band told the story themselves: unable to settle on a name, they decided the next song to come on the radio would supply it, and \"Let It Be\" came on. Westerberg later put the joke's point plainly — \"our way of saying that nothing is sacred, that the Beatles were just a fine rock & roll band\" — aimed partly at Jesperson's own Beatles devotion. Critics took the record seriously regardless: Robert Christgau gave it an A+ and ranked it second for 1984, and it's since been treated as a cornerstone of American alternative rock, cited directly by bands from the Goo Goo Dolls to the Gaslight Anthem to Uncle Tupelo.",
  ],

  listeningNotes: [
    {
      label: "Two records at once",
      text: "Leftover hardcore ragers sit back to back with plainly sincere songs rather than blending into each other — the sequencing doesn't smooth over the whiplash.",
    },
    {
      label: "\"I Will Dare\" opens it",
      text: "A jangly shuffle, not a blast of noise, with Peter Buck guesting on the solo because Bob Stinson couldn't land one himself.",
    },
    {
      label: "\"Androgynous\" at the piano",
      text: "Westerberg alone at the piano singing sympathetically about two people who don't fit gender roles — startling material for a hardcore band's third album in 1984.",
    },
    {
      label: "\"Unsatisfied\" and \"Sixteen Blue\"",
      text: "Open-chord ache about adolescent loneliness, played straight, with no punchline to undercut it.",
    },
    {
      label: "\"Gary's Got a Boner\"",
      text: "The band still willing to be stupid on purpose — proof the songwriting growth wasn't a personality transplant.",
    },
    {
      label: "Loose, unfussy sound",
      text: "The Blackberry Way sessions sound like a bar band caught live in a room, seams and all, not a tidied-up studio record.",
    },
  ],

  sources: [
    { title: "Let It Be (The Replacements album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Let_It_Be_(The_Replacements_album)" },
    { title: "I Will Dare — Wikipedia", url: "https://en.wikipedia.org/wiki/I_Will_Dare" },
    { title: "Androgynous (song) — Wikipedia", url: "https://en.wikipedia.org/wiki/Androgynous_(song)" },
    { title: "The Replacements (band) — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Replacements_(band)" },
  ],

  influencedBy: [
    { artist: "Black Flag", album: "Damaged", year: "1981", note: "The hardcore punk template the Replacements emerged from and, by this record, were visibly pulling away from." },
    { artist: "Big Star", album: "Radio City", year: "1974", note: "The power-pop melodicism Westerberg increasingly leaned on as a songwriter; he'd later write 'Alex Chilton' as an outright homage." },
    { artist: "Small Faces / The Rolling Stones", album: "—", year: "1960s", note: "British Invasion hooks and swagger that Westerberg mixed with punk rage to build the album's more structured songs." },
  ],

  influenced: [
    { artist: "The Goo Goo Dolls", album: "Superstar Car Wash", year: "1993", note: "Johnny Rzeznik calls Westerberg an obvious influence; Westerberg co-wrote 'We Are the Normal' for this album." },
    { artist: "Uncle Tupelo", album: "No Depression", year: "1990", note: "Cited the Replacements as a key influence in fusing punk energy with plain, sincere songwriting." },
    { artist: "The Gaslight Anthem", album: "The '59 Sound", year: "2008", note: "Brian Fallon has said flatly that without the Replacements there would be no Gaslight Anthem." },
  ],
});
