import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Destiny's Child",
  album: "Survivor",
  year: "2001",
  heading: "Survivor — Destiny's Child (2001)",

  albumLine:
    "Released 1 May 2001 in the US on Columbia, with international dates from 25 April. Singer Beyoncé Knowles produced almost all of it herself alongside Anthony Dent, Rob Fusari, Cory Rooney and a dozen others — R&B-leaning pop with hard programmed beats. It's Destiny's Child's third album, and the first by the trio left standing after 2000.",

  overview: [
    "The group came out of Houston as Girls Tyme, losing contestants on Star Search, drilled by manager Mathew Knowles — Beyoncé's father — and dressed by her mother Tina Knowles. Writing for Stereogum, critic Jaelani Turner-Williams reads the structure as a deliberate copy of Motown's handling of the Supremes: one member pushed to the front. By 2001 they were the biggest girl group in pop, still working a market that belonged to white teen-pop. Knowles, speaking to Interview that year: \"We did an interview yesterday, and a woman asked us, 'Where did you meet? In the 'hood?'\"",

    "Then the group broke apart. In December 1999 LaTavia Roberson and LeToya Luckett tried to split from Mathew Knowles over profits and favouritism; that February they discovered from a video premiere that they had been replaced by Michelle Williams, until then a backing vocalist for singer Monica, and Farrah Franklin. They sued in March for breach of partnership and fiduciary duties. Franklin was gone by July — the group said she missed appearances, she said there was no room to make decisions. Critics read much of this album as score-settling, and in 2002 the pair sued again over a line they said breached their settlement; it settled out of court.",

    "The title came from a radio DJ joking that the group was like the reality show, seeing who'd last longest. \"I'm going to use that negative thing and turn it into a positive thing and try to write a great song out of it,\" Knowles said. It was recorded May 2000 to February 2001 across seventeen studios, mostly SugarHill in Houston; by that December the group said they'd taken one day off. Knowles is careful about how her new authority happened: \"I only wanted to do like three songs... It wasn't planned.\"",

    "It entered the Billboard 200 at number one on 663,000 copies and was the first studio album by an American girl group to top the UK chart; ten million had sold by 2004. The title song won a Grammy. Reviews split hard — AllMusic critic Stephen Thomas Erlewine found it \"as contrived and calculated as a Mariah Carey record, only without the joy,\" while critic Alexis Petridis in the Guardian heard \"a rare individuality, and a hint of genius, hidden in its grooves.\"",
  ],

  listeningNotes: [
    {
      label: "Three leads instead of one",
      text: "Nearly every track hands each member her own passage rather than keeping two voices behind one. Williams's gospel-trained rasp sits against Rowland's steadier mid-range and Knowles's wider reach.",
    },
    {
      label: "Live strings over an abrasive beat",
      text: "The title track loops real strings, played by violinist Kerren Berz, across a hard programmed hip-hop track. The friction between orchestral sweep and brittle drum machine is where its scale comes from.",
    },
    {
      label: "A rock riff slowed into an R&B hook",
      text: "Producer Rob Fusari lifted a guitar figure from Stevie Nicks's \"Edge of Seventeen\" and slowed it for \"Bootylicious.\" He wanted to replay it rather than sample it, to keep the publishing — \"It was Guitar 101! One note!\" — but Mathew Knowles refused.",
    },
    {
      label: "Lyrics written in the room",
      text: "Engineer Dan Workman says Knowles picked tracks in the car on the way over, wrote the words on arrival, \"then she taught the song to Kelly and Michelle, and all three of them worked on the vocals together.\" It's why the phrasing sits so tight to the beat.",
    },
    {
      label: "The production dropping out for gospel",
      text: "Near the end the beats stop entirely for unaccompanied harmony on pieces by gospel artists Kirk Franklin and Richard Smallwood, dedicated to the group's late former manager Andretta Tillman.",
    },
  ],

  sources: [
    { title: "Destiny's Child's Survivor Turns 20 — Stereogum", url: "https://stereogum.com/2145824/destinys-child-survivor-turns-20/reviews/the-anniversary" },
    { title: "Survivor (Destiny's Child album) — Wikipedia", url: "https://en.wikipedia.org/wiki/Survivor_(Destiny%27s_Child_album)" },
    { title: "Former Members Sue Destiny's Child — MTV News", url: "https://www.mtv.com/news/qkp2z4/former-members-sue-destinys-child" },
    { title: "Bootylicious by Destiny's Child — Songfacts", url: "https://www.songfacts.com/facts/destinys-child/bootylicious" },
  ],

  influencedBy: [
    { artist: "En Vogue", album: "Funky Divas", year: "1992", note: "Named by group members among their key influences; the stacked close-harmony arrangement, with each voice carrying a distinct line, is the model for how this record blends its three singers." },
    { artist: "TLC", album: "FanMail", year: "1999", note: "Also named among the group's influences, and the nearest precedent for the move here away from warm nineties R&B toward colder, more synthetic programming." },
    { artist: "Janet Jackson", album: "janet.", year: "1993", note: "Cited by group members as an influence; MTV critic Brian Hiatt heard one of this album's ballads as directly reminiscent of the production on Jackson's \"Again.\"" },
  ],

  influenced: [
    { artist: "Beyoncé", album: "Dangerously in Love", year: "2003", note: "A direct carry-over: the song that gave her solo debut its title was written and produced by Knowles with Errol McCalla Jr. during these sessions, then re-recorded with a changed arrangement." },
  ],
});
