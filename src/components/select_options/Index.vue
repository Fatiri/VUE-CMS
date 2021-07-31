<template>
  <div>
    <select-option-v1
      v-if="componentVersion === 'v1'"
      :listOption="listOption"
      :mainText="mainText"
      @childToParent="changeData($event)"
    />
  </div>
</template>

<script>
import SelectOptionV1 from "./SelectOptionV1.vue";
export default {
  props: ["componentVersion", "mainText", "listOption"],
  components: {
    "select-option-v1": SelectOptionV1,
  },
  data() {
    return {
        data:"",
    };
  },
  methods:{
      changeData(value){
        this.data = value
      }
  },
  watch:{
      'data'(){
          this.$emit('changeOption', this.data)
      }
  }
};
</script>