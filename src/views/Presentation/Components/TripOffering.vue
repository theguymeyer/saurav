<script setup>

const props = defineProps({
  title: String,
  upperTitle: String,
  description: Array,
  backgroundImage: String
});
</script>
<template>
  <div class="container mt-sm-5">
    <div
      class="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl"
      :style="{
        backgroundImage:
          `linear-gradient(90deg, rgba(48,44,44,1) 0%, rgba(82,66,66,0.7875744047619048) 33%, rgba(0,0,0,0) 100%),
          url(${props.backgroundImage})`,
      }"
      loading="lazy"
    >
      <span class="enable-gradients"></span>
      <div class="container">
        <div class="row">
          <div class="col-lg-12 ms-lg-3">
            <h1 class="text-white">{{ props.title }}</h1>
            <ul>
              <li class="lead text-white opacity-8" v-for="(item, index) in props.description" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
