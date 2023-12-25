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
          `linear-gradient(153deg, rgba(36,148,149,1) 0%, rgba(113,85,25,0.6) 100%),
          url(${props.backgroundImage})`,
      }"
      loading="lazy"
    >
      <span class="enable-gradients"></span>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 ms-lg-5">
            <h4 class="text-white"><i>{{ props.upperTitle }}</i></h4>
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
