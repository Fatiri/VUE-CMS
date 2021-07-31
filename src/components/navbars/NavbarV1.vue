<template>
  <div class="navbar-v1">
    <div class="navbar-v1-left">
      <!-- <div class="navbar-v1-menus">
        <input type="text">
      </div> -->
      <div class="navbar-v1-menus">
        <box-icon name="search-alt" animation="tada-hover"></box-icon>
      </div>
    </div>

    <div class="navbar-v1-center">
      <div class="navbar-v1-menus">
        <box-icon
          :name="route.meta.icon"
          animation="tada-hover"
        ></box-icon>
      </div>
      <div class="navbar-v1-menus">
        {{ route.name }}
      </div>
    </div>

    <div class="navbar-v1-right">
      <div class="navbar-v1-menus">
        <box-icon
          name="message-detail"
          animation="tada-hover"
        ></box-icon>
      </div>
      <div class="navbar-v1-menus">
        <box-icon
          name="bell"
          animation="tada-hover"
        ></box-icon>
      </div>
      <div class="navbar-v1-menus">
        <box-icon name="user" animation="tada-hover"></box-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      route: useRoute(),
    };
  },
  computed: {
    ...mapGetters([]),
  },
  methods: {
    ...mapActions([]),
  },
  beforeMount() {},
};
</script>