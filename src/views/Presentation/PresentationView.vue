<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarCustom from "../..//examples/navbars/NavbarCustom.vue";
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
import DefaultFooterSimple from "../../examples/footers/FooterCustomSimple.vue";
import Header from "../../examples/Header.vue";
import FilledInfoCard from "../../examples/cards/infoCards/FilledInfoCard.vue";

//Vue Material Kit 2 components
import MaterialSocialButton from "@/components/MaterialSocialButton.vue";

// sections
import PresentationCounter from "./Sections/PresentationCounter.vue";
import PresentationPages from "./Sections/PresentationPages.vue";
import PresentationExample from "./Sections/PresentationExample.vue";
import data from "./Sections/Data/designBlocksData";
import TripOfferingLayout from "./Sections/TripOfferingLayout.vue";
import tripData from "./Sections/Data/tripData";
import BuiltByDevelopers from "./Components/BuiltByDevelopers.vue";
import PresentationTestimonials from "./Sections/PresentationTestimonials.vue";
import PresentationInformation from "./Sections/PresentationInformation.vue";

//images
import bannerAnnapurnaNighttime from "@/assets/img/annapurna-nighttime.jpg";
import imgAnnapurnaCircuitTrek from "@/assets/img/annapurna-circuit-trek.jpg";
import imgAnnapurnaFlags from "@/assets/img/annapurna-flags.jpg";
import imgEverestBaseCamp from "@/assets/img/everest-base-camp.jpg";
import imgKanchenjungaBaseCamp from "@/assets/img/kanchenjunga-base-camp.jpg";
import imgMakaluBaseCamp from "@/assets/img/makalu-base-camp.jpg";
import vueMkHeader from "@/assets/img/vue-mk-header.jpg";
import wavesWhite from "@/assets/img/waves-white.svg";
import logoBootstrap from "@/assets/img/logos/bootstrap5.jpg";
import logoTailwind from "@/assets/img/logos/icon-tailwind.jpg";
import logoVue from "@/assets/img/logos/vue.jpg";
import logoAngular from "@/assets/img/logos/angular.jpg";
import logoReact from "@/assets/img/logos/react.jpg";
import logoSketch from "@/assets/img/logos/sketch.jpg";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});

var descriptionArray = ['Item 1', 'Item 2', 'Item 3'];

var trip_offerings = [
  {
    title: "Annapurna Region",
    upperTitle: "Favourite",
    description: ["Annapurna Circuit", 
      "Nar-Phu Trek", 
      "Annapurna Base Camp", 
      "Mardi Himal base camp trek", 
      "Ghorepani poonhill trek", 
      "North Annapurna Base Camp", 
      "upper mustang trek"],
    backgroundImage: imgAnnapurnaFlags
  },
  {
    title: "Everest Region",
    upperTitle: "Adventureous",
    description: ["Everest Base Camp Trek", 
      "Pikey peak",  
      "Everest three passes trek", 
      "Everest Base trek with gokyo Lake via cholapass"],
    backgroundImage: imgEverestBaseCamp
  },
  {
    title: "Kanchenjunga",
    upperTitle: "Remote",
    description: ["Kanchenjunga Base Camp"],
    backgroundImage: imgKanchenjungaBaseCamp
  },
  {
    title: "Makalu",
    upperTitle: "Exciting",
    description: ["Makalu Base Camp"],
    backgroundImage: imgMakaluBaseCamp
  }



];

</script>

<style scoped>

.titles {
  text-shadow: 0 0 15px #000;
  font-family: Verdana, Geneva, sans-serif;
}

#mainTitle {
  display: 'inline-block';
}

#mainSubTitle {
  font-size: x-large;
  font-weight: 500;
}
</style>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarCustom :sticky="true" />
      </div>
    </div>
  </div>
  <Header>
    <div
      class="page-header min-vh-75"
      :style="{backgroundImage: 
        `linear-gradient(153deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.15) 100%),
        url(${imgAnnapurnaCircuitTrek})`}"
      loading="lazy"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-10 text-center mx-auto position-relative" >
            <h1
              id="mainTitle"
              class="titles text-white pt-3 mt-n5 me-2"
            >
              Adventure with Saurav
            </h1>
            <h5
              id="mainSubTitle"
              class="titles lead text-white px-5 mt-2">
              Your local guide
            </h5>
          </div>
        </div>
      </div>
    </div>
  </Header>


  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">

    <div class="container">
      <div class="row mt-6">
        <div class="col-lg-6 mx-auto text-center">
          <h2 class="mb-0">Who are we?</h2>

          <h6 class="text-secondary font-weight-normal mt-3">
            <a 
              href="https://maps.app.goo.gl/tujWZMNBX6Hdw5uP9" 
              target="_blank"
              :style="{ textDecoration: 'underline' }">
              Adventure with Saurav</a> is a full service 
              trekking company based in Kathmandu, Nepal. 
              We specialize in small group treks and tours to the Himalayas and around Nepal.
            </h6>
        </div>
      </div>
    </div>


    <hr class="horizontal dark mt-5 my-1" />

    <!-- <PresentationCounter /> -->
    <PresentationInformation />
    <TripOfferingLayout :data="tripData" />
    <!-- <PresentationPages /> -->

    <hr class="horizontal dark my-1" />

    <PresentationTestimonials />

    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 ms-auto">
            <h4 class="mb-1">Follow on Social Media!</h4>
            <!-- <p class="lead mb-0">We deliver the best web products</p> -->
          </div>
          <div class="col-lg-5 me-lg-auto my-lg-auto text-lg-end mt-5">
            <!-- <MaterialSocialButton
              route="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23bootstrap5&url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-design-system-pro"
              component="twitter"
              color="twitter"
              label="Tweet"
            /> -->
            <MaterialSocialButton
              route="https://www.facebook.com/simson.puri?mibextid=rS40aB7S9Ucbxw6v"
              component="facebook-square"
              color="facebook"
              label="Facebook"
            />
            <!-- <MaterialSocialButton
              route=""
              component="pinterest"
              color="pinterest"
              label="Pin it"
            /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- TODO udpate footer to just store the date for update tracking -->
  <DefaultFooterSimple />
</template>
