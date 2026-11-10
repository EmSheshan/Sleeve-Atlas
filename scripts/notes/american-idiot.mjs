import { saveNote } from "../save-note.mjs";

await saveNote({
  artist: "Green Day",
  album: "American Idiot",
  year: "2004",
  heading: "American Idiot — Green Day (2004)",

  albumLine:
    "Released 21 September 2004 on Reprise, produced by Rob Cavallo with the band. It's Green Day's seventh album and their first concept record — a self-declared punk rock opera that keeps pop-punk's chord shapes and builds them into nine-minute suites. It took ten months and $650,000, after they scrapped a finished album.",

  overview: [
    "Warning, in 2000, sold poorly for a band this size, and relations were bad enough that bassist Mike Dirnt told Rolling Stone breaking up was an option. Through 2002 they cut twenty songs at Studio 880 in Oakland for an album called Cigarettes and Valentines; that November the demo master tapes were stolen. Producer Rob Cavallo asked whether the missing songs were really their best work, and singer and guitarist Billie Joe Armstrong said they \"couldn't honestly look at ourselves and say, 'That was the best thing we've ever done.'\"",

    "Cavallo's advice was to go bigger — \"Let's make something that's just monumental.\" Each member started writing thirty-second songs in competition. \"It started getting more serious as we tried to outdo one another,\" Armstrong said. \"We kept connecting these little half-minute bits until we had something.\" Those became the two long suites, and the band began thinking in chapters. They played the Who's Quadrophenia and David Bowie's Ziggy Stardust in the studio alongside cast recordings of Jesus Christ Superstar and Grease, and Armstrong pointed at OutKast, who were \"kicking rock's ass, because there's so much ambition.\"",

    "It came out of post-9/11 America in the second year of the Iraq war, heading into the 2004 election. Armstrong was blunt about the war offstage — he called it \"basically to build a pipeline and put up a fucking Wal-Mart\" — and thought cable news had crossed into reality television. But only two songs here are overtly political, and Armstrong later told Spin he \"would never think of American Idiot as being about the Bush administration specifically.\" The actual story is a suburban teenager leaving home, and the band left its ending unresolved on purpose.",

    "It entered the Billboard 200 at number one on 267,000 copies — their first American chart-topper — and has sold around 23 million worldwide. Early US dates ran two-thirds full with crowds booing the new material; by 2005 it was America's third-biggest seller of the year. It won Best Rock Album at the 2005 Grammys. AllMusic critic Stephen Thomas Erlewine called it \"something of a masterpiece\"; critic Robert Christgau, in the Village Voice, called it a \"dud\" with \"no economics, no race, hardly any compassion.\" A stage version reached Broadway in 2010 and won two Tony Awards.",
  ],

  listeningNotes: [
    {
      label: "Les Pauls into modified Marshalls",
      text: "Armstrong's instruction was \"let's just go balls-out on the guitar sound.\" The main amp was a Marshall nicknamed the Idiot Amp, given an extra gain stage for an unusually thick crunch; a tweed Fender Tremolux handled the small, clean tones, like the one opening the title track.",
    },
    {
      label: "Tape drums, digital everything else",
      text: "Drums were cut in one high-ceilinged room at Ocean Way and printed to two-inch tape for its natural compression, then moved into Pro Tools. Tré Cool brought over seventy-five snares.",
    },
    {
      label: "Bass as a wall, not a countermelody",
      text: "Dirnt played a Precision through an Ampeg SVT, aiming with Cavallo for something \"solid, big, thunderous\" — the opposite of the running melodic lines that carried Dookie. It's what lets the guitars stack so high without the low end thinning.",
    },
    {
      label: "Orchestral percussion in a punk band",
      text: "Timpani, glockenspiel and hammer bells turn up across the record, and one intro is played on tablas. The most inventive rigging is a bead gourd welded to a remote hi-hat pedal, used on \"Wake Me Up When September Ends.\"",
    },
    {
      label: "Audible seams in the long suites",
      text: "Assembled from separately written half-minute fragments, the suites lurch between keys and tempos rather than modulating. The joins are the point — they make nine minutes feel like five scenes, not one song.",
    },
  ],

  sources: [
    {
      title: "\"Every band wants to have a Sgt. Pepper's type of moment\": Billie Joe Armstrong on the making of American Idiot — Guitar World",
      url: "https://www.guitarworld.com/features/green-day-billie-joe-armstrong-on-the-making-of-american-idiot",
    },
    { title: "American Idiot — Wikipedia", url: "https://en.wikipedia.org/wiki/American_Idiot" },
    { title: "American Idiot by Green Day — Songfacts", url: "https://www.songfacts.com/facts/green-day/american-idiot" },
    { title: "American Idiot — Rolling Stone review", url: "https://www.rollingstone.com/music/music-album-reviews/american-idiot-184555/" },
  ],

  influencedBy: [
    { artist: "The Who", album: "Quadrophenia", year: "1973", note: "Played in the studio while writing; Armstrong said he felt closer to its power-chord mod-pop than to any other rock opera." },
    { artist: "David Bowie", album: "The Rise and Fall of Ziggy Stardust and the Spiders from Mars", year: "1972", note: "The other record the band played during sessions — the model for hanging an album on an invented character who turns out to be the singer." },
    { artist: "Pink Floyd", album: "The Wall", year: "1979", note: "Named among the concept albums they studied, though Armstrong said its approach was further from what he wanted than the Who's." },
  ],

  influenced: [
    { artist: "My Chemical Romance", album: "The Black Parade", year: "2006", note: "Made with Rob Cavallo, the producer of this record; guitarist Ray Toro has compared its multi-part title song to the long suites here, and Armstrong has said he was told this album was a big influence on it." },
  ],
});
