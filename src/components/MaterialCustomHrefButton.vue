<script setup>
defineProps({
  route: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <a :href="route" class="btn me-2 btn-slack" target="_blank">
    {{ label }}
  </a>
</template>
