<template>
  <div>
    <modal-v1 v-if="componentVersion === 'modal-v1'" />
  </div>
</template>

<script>
import ModalV1 from "./ModalV1.vue";
export default {
  props: ["componentVersion"],
  components: {
    "modal-v1": ModalV1,
  },
  data() {
    return {};
  },
};
</script>