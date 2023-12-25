<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  // icon: {
  //   type: String,
  //   default: "",
  // },
  // label: {
  //   type: String,
  //   default: "",
  // },
  title: {
    type: String,
    required: true,
  },
  // description: {
  //   type: String,
  //   required: true,
  // },
});
</script>
<template>
  <div
    class="front-background"
    :style="{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
    }"
  >
    <div class="card-body py-7 text-center">
      <h3 class="text-white" v-html="title" />
    </div>
  </div>
</template>
