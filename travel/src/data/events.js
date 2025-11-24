import baalbekfestival from "../assets/Events/baalbekfestival.jpg";
import beirutmarathon from "../assets/Events/beirutmarathon.jpg";
import tyresunset from "../assets/Events/tyresunset.jpg";
import coastalride from "../assets/Events/coastalride.jpg";

export const events = [
  {
    id: 1,
    name: "Beirut Marathon ",
    place: "Beirut",
    type: "Running",
    season: "Usually in November",
    description:
      "Large road race that passes through many streets of Beirut. Good for people who like sport events.",
    image: beirutmarathon
  },
  {
    id: 2,
    name: "Coastal Bike Ride",
    place: "Between Byblos and Batroun",
    type: "Cycling",
    season: "Spring and Autumn",
    description:
      "Informal bike rides along the sea road with sea views, small climbs and stops in coastal towns.",
    image: coastalride
  },
  {
    id: 3,
    name: "Tyre Sunset Walk",
    place: "Tyre seafront",
    type: "Walking",
    season: "Summer evenings",
    description:
      "Relaxed walk on the sand and along the promenade to watch the sunset. Good for visitors who prefer a calm beach activity.",
    image: tyresunset
  },
  {
    id: 4,
    name: "Baalbek Summer Festival",
    place: "Baalbek Roman temples",
    type: "Music & culture",
    season: "Summer",
    description:
      "Open-air concerts and cultural shows held around the famous temples in Baalbek. Combines history with live performances.",
    image: baalbekfestival
  }
];
