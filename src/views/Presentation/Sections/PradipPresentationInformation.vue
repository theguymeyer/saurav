<script setup>
import RotatingCard from "../../../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../examples/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue";

// images
import pradipHeadshot from "@/assets/img/pradip-headshot.jpeg";

</script>
<template>
  <section class="my-2 py-2">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 ms-auto ">
          <figure class="figure">
            <img :src='pradipHeadshot' class="figure-img img-fluid rounded" alt="Image of Saurav. A seasoned expert of the Himalayas.">
          </figure>
        </div>
        <div class="col-lg-6 ms-auto mt-3">
          <div class="position-sticky">
            <h3 class="justify-content-center text-center">
              Pradip
            </h3>
            <h6 class="text-secondary font-weight-normal mt-3">
Pradip has a deep appreciation for the Himalayas' hidden gems and cultural treasures.  Along with his brother, they started this company to share their love of the Himalayas with others. He has embarked on numerous adventures, from exploring remote villages to discovering lesser-known trails. Along with his brother, he started this company to share their love of the Himalayas with others. Pradip is committed to creating memorable experiences for their guests!
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
