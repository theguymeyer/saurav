<script setup>
import CustomReviewCard from "@/examples/cards/reviewCards/CustomReviewCard.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import testimonialData from "@/assets/json/testimonials.json";

function getRandomSubArrayEntry(data, numEntries) {
  let subArray = [];
  let randomIndexes = [];
  while (randomIndexes.length < numEntries) {
    let rand = parseInt(Math.random() * data.length);
    if (!randomIndexes.includes(rand)) {
      randomIndexes.push(rand);
    }
  }

  for (let i = 0; i < randomIndexes.length; i++) {
    subArray.push(data[randomIndexes[i]]);
  }
  
  return subArray;
}

const numOfTestimonials = 3;
const testimonials = getRandomSubArrayEntry(testimonialData, numOfTestimonials);

</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mx-auto text-center">
          <h2 class="mb-0">Hear from our reviews!</h2>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-lg-4 col-md-8" v-for="user in testimonials" :key="user.id">
          <CustomReviewCard
            :name=user.name
            :review=user.review
            :rating="5.0"
          />
        </div>
      </div>
        <div class="row mt-4">
          <div class="col-lg-6 mx-auto text-center">
            <MaterialButton
              variant="gradient"
              color="success"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <a 
                href="https://maps.app.goo.gl/tujWZMNBX6Hdw5uP9" 
                target="_blank" 
                style="color: inherit !important">
                  More reviews on Google...
              </a>
            </MaterialButton>
          </div>
        </div>
    </div>
  </section>
</template>
