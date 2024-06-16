<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarCustom from "../..//examples/navbars/NavbarCustom.vue";
import DefaultFooterSimple from "../../examples/footers/FooterCustomSimple.vue";
import Header from "../../examples/Header.vue";

//Vue Material Kit 2 components
import MaterialSocialButton from "@/components/MaterialSocialButton.vue";

// sections
import TripOfferingLayout from "./Sections/TripOfferingLayout.vue";
import tripData from "./Sections/Data/tripData";
import PresentationTestimonials from "./Sections/PresentationTestimonials.vue";
import SauravPresentationInformation from "./Sections/SauravPresentationInformation.vue";
import PradipPresentationInformation from "./Sections/PradipPresentationInformation.vue";

//images
import imgAnnapurnaCircuitTrek from "@/assets/img/annapurna-circuit-trek.jpg";

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
          <h2 class="mb-0">Namaste!</h2>

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
    <PradipPresentationInformation />
    <SauravPresentationInformation />

    <!-- Socials -->

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
            <MaterialSocialButton
              route="https://www.instagram.com/adventurewithsaurav?utm_source=qr&igsh=b2I2dHRydHNxN3Bw"
              component="instagram"
              color="reddit"
              label="Instagram"
            />
          </div>
        </div>
      </div>
    </div>


    <hr class="horizontal dark my-1" />

    <PresentationTestimonials />

    <hr class="horizontal dark my-1" />

    <TripOfferingLayout :data="tripData" />
    <!-- <PresentationPages /> -->

  </div>
  <!-- TODO udpate footer to just store the date for update tracking -->
  <DefaultFooterSimple />
</template>
