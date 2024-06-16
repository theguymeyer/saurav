<script setup>
import RotatingCard from "../../../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../examples/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue";

// images
import sauravHeadshot from "@/assets/img/saurav-headshot.jpeg";

</script>
<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 ms-auto ">
          <figure class="figure">
            <img :src='sauravHeadshot' class="figure-img img-fluid rounded" alt="Image of Saurav. A seasoned expert of the Himalayas.">
            <figcaption class="figure-caption text-right">Saurav</figcaption>
          </figure>
        </div>
        <div class="col-lg-6 ms-auto mt-3">
          <div class="position-sticky">
            <h3 class="justify-content-center text-center">
              Meet your guide! 
            </h3>
            <h6 class="text-secondary font-weight-normal mt-3">
Saurav is a seasoned expert of the Himalayas and has been guiding people through them for over 10 years. Along with his brother, they started this company to share their love of the Himalayas with others. Saurav is a certified guide in both <strong>English</strong> and <strong>German</strong> who has traveled the Himalayas many times. 
            </h6>
            <h6>
              Reach out via WhatsApp or social media to learn more!
            </h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
