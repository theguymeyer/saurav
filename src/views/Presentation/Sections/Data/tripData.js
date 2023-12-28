/*
=========================================================
* Vue Material Kit 2 - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vue-material-kit-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const imagesPrefix =
  "https://raw.githubusercontent.com/theguymeyer/saurav/master/src/assets/img";

import imgPricing from "@/assets/img/pricing.png";
import imgFeatures from "@/assets/img/features.png";
import imgBlogPosts from "@/assets/img/blog-posts.png";
import imgTestimonials from "@/assets/img/testimonials.png";
import imgTeam from "@/assets/img/team.png";
import imgStat from "@/assets/img/stat.png";
import imgContent from "@/assets/img/content.png";
import imgPagination from "@/assets/img/pagination.png";
import imgAlert from "@/assets/img/alerts.jpg";
import imgPopover from "@/assets/img/popovers.jpg";
import imgModal from "@/assets/img/modals.jpg";
import imgDropdowns from "@/assets/img/dropdowns.jpg";

export default [
  {
    heading: "Annapurna Region",
    description:
      "Recommended for beginners and experienced trekkers alike",
    items: [
      {
        image: `${imagesPrefix}/annapurna-circuit-trek2.jpg`,
        title: "Annapurna Circuit",
        subtitle: ["Elevation: 5,416m (Thorong La Pass)", "At least 14 days", "Connects to: Tilicho Lake, Ghorepani, and more"],
      },
      {
        image: `${imagesPrefix}/tilicho-lake.jpeg`,
        title: "Tilicho Lake",
        subtitle: ["Elevation: 4,919m", "2 to 3 day excursion from Annapurna Circuit", "Great for acclimatization before the Pass"],
      },
      {
        image: `${imagesPrefix}/ghorepani-poon-hill-trek.jpg`,
        title: "Ghorepani Poon Hill Trek",
        subtitle: ["Elevation: 3,210m", "2 to 3 day excursion from Annapurna Circuit", "Amazing nightsky and sunrise!"],
      },
    ]
  },
  {
    heading: "Everest Region",
    description: "Highest peak in the world (8,848m)",
    items: [
      {
        image: `${imagesPrefix}/everest-base-camp-trek.jpeg`,
        title: "Everest Base Camp Trek",
        subtitle: [
          "Elevation: 5,364m",
          "Highlights: Namche Bazaar, Tengboche Monastery",
        ],
      },
      {
        image: `${imagesPrefix}/gokyo-lake-trek.jpg`,
        title: "Gokyo Lakes Trek",
        subtitle: [
          "Scenic Gokyo Lakes at high altitudes",
          "Panoramic views of Everest, Lhotse, Cho Oyu",
          "Less crowded than Everest Base Camp trek",
        ],
      },
      {
        image: `${imagesPrefix}/three-passes-trek.jpg`,
        title: "Three Passes Trek",
        subtitle: [
          "Challenging trek with three high mountain passes",
          "Includes Kongma La, Cho La, and Renjo La",
          "Stunning views and less-explored paths",
        ],
      }
    ]
  },
  {
    heading: "Langtang Region",
    description:
      "Closest trekking region to Kathmandu",
    items: [
      {
        image: `${imagesPrefix}/langtang-valley-trek.jpg`,
        title: "Langtang Valley Trek",
        subtitle: [
          "Scenic trek in the Langtang National Park",
          "Cultural exploration of Tamang villages",
          "Panoramic views of Langtang Lirung and Ganesh Himal",
        ],
      },
      {
        image: `${imagesPrefix}/gosainkunda-lake-trek.jpg`,
        title: "Gosainkunda Lake Trek",
        subtitle: [
          "Visit sacred alpine lakes including Gosainkunda",
          "Pass through lush forests and traditional villages",
          "Stunning views of Langtang Himalayan range",
        ],
      },
      {
        image: `${imagesPrefix}/helambu-circuit-trek.jpg`,
        title: "Helambu Circuit Trek",
        subtitle: [
          "Cultural trek in the Helambu region",
          "Explore charming Sherpa and Tamang villages",
          "Views of Langtang and Annapurna mountain ranges",
        ],
      }
    ]
  },
  {
    heading: "City Trips",
    description:
      "Even the cities are beautiful!",
    items: [
      {
        image: `${imagesPrefix}/kathmandu-valley-trek.jpg`,
        title: "Kathmandu Valley Trek",
        subtitle: [
          "Nagarkot sunset view",
          "Explore the outskirts of the capital city",
          "Visit traditional villages and cultural sites",
        ],
      },
      {
        image: `${imagesPrefix}/sarangkot-sunrise-view.jpg`,
        title: "Pohkara Sunrise View",
        subtitle: [
          "Early morning trek to Sarangkot",
          "Panoramic sunrise views over the Himalayas",
          "Perfect vantage point for capturing Pokhara Valley",
        ],
      },
      {
        image: `${imagesPrefix}/kathmandu-durbar-square.jpg`,
        title: "Durbar Square Heritage Walk",
        subtitle: [
          "Explore the historic Kathmandu Durbar Square",
          "Visit ancient temples, palaces, and courtyards",
          "Witness traditional Newari architecture and art",
        ],
      }
    ]
  },
  {
    heading: "Manaslu Region",
    description:
      "Remote and off-the-beaten-path",
    items: [
      {
        image: `${imagesPrefix}/manaslu-circuit-trek.jpg`,
        title: "Manaslu Circuit Trek",
        subtitle: [
          "Circumvent the majestic Manaslu massif",
          "Remote trek with diverse landscapes",
          "Cross the challenging Larke Pass",
        ],
      },
      {
        image: `${imagesPrefix}/tsum-valley.jpg`,
        title: "Tsum Valley Exploration",
        subtitle: [
          "Discover the hidden gem of Tsum Valley",
          "Visit ancient monasteries and traditional villages",
          "Breathtaking views of the Ganesh Himal range",
        ],
      }
    ]
  },
  {
    heading: "Kanchenjunga Region",
    description:
      "Eastern Nepal, close to India. Near my hometown!",
    items: [
      {
        image: `${imagesPrefix}/kanchenjunga-base-camp-trek.jpg`,
        title: "Kanchenjunga Base Camp Trek",
        subtitle: [
          "Trek to the base of the world's third-highest peak",
          "Explore diverse landscapes and remote villages",
          "Witness stunning views of Kanchenjunga and surrounding peaks",
        ],
      },
    ]
  },
  {
    heading: "Makalu Region",
    description:
      "World's fifth-highest peak",
    items: [
      {
        image: `${imagesPrefix}/makalu-trek.jpg`,
        title: "Makalu Base Camp Trek",
        subtitle: [
          "Duration: 18 days",
          "Explore diverse landscapes and alpine meadows",
          "Experience the wilderness of Makalu Barun National Park",
        ],
      },
    ]
  }
];



