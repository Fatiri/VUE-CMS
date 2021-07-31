<template>
  <div>
    <badge-v1 />
  </div>
</template>

<script>
import BadgeV1 from "./BadgeV1.vue";
export default {
  props: ["componentVersion"],
  components: {
    "badge-v1": BadgeV1,
  },
  data() {
    return {};
  },
};
</script>