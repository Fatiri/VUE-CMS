<template>
  <div>
    <navbar-v1 v-if="componentVersion === 'navbar-v1'" />
  </div>
</template>

<script>
import NavbarV1 from "../navbars/NavbarV1.vue";
export default {
  props: ["componentVersion"],
  components: {
    "navbar-v1": NavbarV1,
  },
  data() {
    return {};
  },
};
</script>