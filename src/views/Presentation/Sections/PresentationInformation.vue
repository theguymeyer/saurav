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
            <h3>
              Meet your guide! 
            </h3>
            <h6 class="text-secondary font-weight-normal mt-3">
              Hello friends, I am Saurav! I am a seasoned expert of the Himalayas. 
              I have been guiding people through the Himalayas for over 10 years. 
              My brother and I started this company to share our love of the Himalayas with others.
              I am a certified guide and have travelled the Himalayas many times. 
              I am looking forward to meeting you and sharing my knowledge with you!
            </h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
