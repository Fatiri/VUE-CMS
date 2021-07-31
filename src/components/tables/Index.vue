<template>
  <div>
    <table-v1
      v-if="componentName === 'table-v1'"
      :dataTable="dataTable"
      :customHeaderTable="customHeaderTable"
      :perPageStatus="perPageStatus"
      :filterStatus="filterStatus"
      :paginationStatus="paginationStatus"
      @actionTableCallBack="actionTable"
      @actionDetailRow="actionDetailRow"
    />
  </div>
</template>

<script>
import Tablev1 from "./TableV1.vue";
export default {
  props: [
    "componentName",
    "dataTable",
    "customHeaderTable",
    "filterStatus",
    "perPageStatus",
    "paginationStatus",
  ],
  components: {
    "table-v1": Tablev1,
  },
  data() {
    return {};
  },
  methods: {
    actionTable(value) {
      this.$emit("actionTableCallBack", value);
    },
    actionDetailRow(value){
      this.$emit("actionDetailRow", value);
    }
  },
};
</script>