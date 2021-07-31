<template>
  <div>
    <form-v1
      v-if="componentVersion === 'v1'"
      :titleForm="titleForm"
      :listFieldOption="listFieldOption"
      :listAction="listAction"
      :dataObject="dataObject"
      @actionButtonBack="actionButtonBack"
      @actionButtonUpdate="actionButtonUpdate"
      @actionButtonDelete="actionButtonDelete"
      @actionButtonPrint="actionButtonPrint"
    />
  </div>
</template>

<script>
import FromV1 from "./FormV1.vue";
export default {
  props: ["componentVersion", "titleForm", "listFieldOption", "listAction", "dataObject"],
  name: "ComponentForm",
  components: {
    "form-v1": FromV1,
  },
  data() {
    return {};
  },
  methods:{
    actionButtonBack(){
      this.$emit("actionButtonBack")
    },
     actionButtonUpdate(){
      this.$emit("actionButtonUpdate")
    },
     actionButtonDelete(){
      this.$emit("actionButtonDelete")
    },
     actionButtonPrint(){
      this.$emit("actionButtonPrint")
    }
  }
};
</script>