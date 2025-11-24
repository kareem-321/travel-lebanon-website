// ===== Mount Lebanon images =====
import mountLebanonMain from "../assets/Mount Lebanon/mount.jpg";
import choufCedars from "../assets/Mount Lebanon/chouf cedars/Barouk_Mountain.jpg";
import deirElQamar from "../assets/Mount Lebanon/deir el qamar/5-2.jpg";
import beitEdDeen from "../assets/Mount Lebanon/beit el deen/beiteldeen.jpg";

// ===== Tyre images =====
import tyreMain from "../assets/tyre/road-ruins-Lebanon-Tyre.jpg";
import tyreOldHarbor from "../assets/tyre/old harbor area/harbor.jpg";
import tyreRomanRuins from "../assets/tyre/roman hippodrome/roman.jpg";
import tyreBeach from "../assets/tyre/tyre beach/beach.jpg";

// ===== Baalbek images =====
import baalbekMain from "../assets/Baalbek/baalbek.jpg";
import baalbekValley from "../assets/Baalbek/beqq valey/bekaa-valley.jpg";
import templeBacchus from "../assets/Baalbek/temple of bacchus/Baalbeck_Temple.jpg";
import templeJupiter from "../assets/Baalbek/Temple of jupiter/jupiter.jpg";

export const cities = [
  {
    id: 1,
    name: "Mount Lebanon",
    image: mountLebanonMain,
    short: "Mountain area with cedar forests, villages and wide views.",
    places: [
      {
        id: "chouf-cedars",
        title: "Chouf Cedars",
        type: "Nature",
        image: choufCedars,
        description:
          "Cedar forest with walking paths and fresh air in the mountains.",
        maps:
          "https://www.google.com/maps/search/?api=1&query=Chouf+Cedars+Reserve+Lebanon"
      },
      {
        id: "deir-el-qamar",
        title: "Deir el Qamar",
        type: "History",
        image: deirElQamar,
        description:
          "Traditional village with stone houses, a main square and old churches.",
        maps:
          "https://www.google.com/maps/search/?api=1&query=Deir+el+Qamar+Lebanon"
      },
      {
        id: "beit-ed-deen",
        title: "Beiteddine Palace",
        type: "History",
        image: beitEdDeen,
        description:
          "Historic palace with courtyards and arches, showing classic Mount Lebanon architecture.",
        maps:
          "https://www.google.com/maps/search/?api=1&query=Beiteddine+Palace+Lebanon"
      }
    ]
  },

  {
    id: 2,
    name: "Tyre",
    image: tyreMain,
    short: "Coastal city in the south with sandy beaches and Roman ruins.",
    places: [
      {
        id: "tyre-beach",
        title: "Tyre Public Beach",
        type: "Nature",
        image: tyreBeach,
        description:
          "Long sandy public beach where people swim, walk and watch the sunset.",
        maps:
          "https://www.google.com/maps/search/?api=1&query=Tyre+Public+Beach+Lebanon"
      },
      {
        id: "tyre-hippodrome",
        title: "Roman Hippodrome",
        type: "History",
        image: tyreRomanRuins,
        description:
          "Archaeological site with the remains of a Roman race track and ruins.",
        maps:
          "https://www.google.com/maps/search/?api=1&query=Tyre+Roman+Hippodrome+Lebanon"
      },
      {
        id: "tyre-harbor",
        title: "Old Harbor Area",
        type: "History",
        image: tyreOldHarbor,
        description:
          "Fishing harbor with boats, cafes and narrow old streets by the sea.",
        maps:
          "https://www.google.com/maps/search/?api=1&query=Tyre+Old+Harbor+Lebanon"
      }
    ]
  },

  {
    id: 3,
    name: "Baalbek",
    image: baalbekMain,
    short: "City in the Beqaa Valley famous for its Roman temples.",
    places: [
      {
        id: "temple-jupiter",
        title: "Temple of Jupiter",
        type: "History",
        image: templeJupiter,
        description:
          "Huge Roman columns and platform that dominate the site.",
        maps:
          "https://www.google.com/maps/search/?api=1&query=Temple+of+Jupiter+Baalbek+Lebanon"
      },
      {
        id: "temple-bacchus",
        title: "Temple of Bacchus",
        type: "History",
        image: templeBacchus,
        description:
          "One of the best-preserved Roman temples with detailed carvings.",
        maps:
          "https://www.google.com/maps/search/?api=1&query=Temple+of+Bacchus+Baalbek+Lebanon"
      },
      {
        id: "beqaa-valley",
        title: "Beqaa Valley View",
        type: "Nature",
        image: baalbekValley,
        description:
          "Fields and open views around Baalbek on the way through the valley.",
        maps:
          "https://www.google.com/maps/search/?api=1&query=Beqaa+Valley+Lebanon"
      }
    ]
  }
];
