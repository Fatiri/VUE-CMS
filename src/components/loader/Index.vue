<template>
  <div>
    <pulse-loader
      :loading="loading"
      color="rgb(193, 193, 250)"
      :size="size"
    ></pulse-loader>
  </div>
</template>



<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
export default {
  components: {
    PulseLoader,
  },
  data() {
    return {};
  },
};
</script>