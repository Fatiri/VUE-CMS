<template>
  <div>
    <sidebar-v1 v-if="componentVersion === 'sidebar-v1'" />
  </div>
</template>

<script>
import SideBarV1 from "./SidebarV1.vue";
export default {
  props: ["componentVersion"],
  components: {
    "sidebar-v1": SideBarV1,
  },
  data() {
    return {};
  },
};
</script>