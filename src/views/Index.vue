<template>
  <div class="home">
    <div class="sidebar-home" v-if="STATUS_SIDEBAR">
      <sidebar :componentVersion="SIDEBAR_VERSION" />
    </div>
    <div class="navbar-home">
      <navbar :componentVersion="NAVBAR_VERSION" />
    </div>
    <div class="content-home fade-in one" v-dragscroll="true">
      <div class="box-content-home fade-in one">
        <router-view class="fade-in one"/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/navbars/Index.vue";
import Sidebar from "../components/sidebars/Index.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    sidebar: Sidebar,
    navbar: Navbar,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      "WIDTH_SCREEN",
      "STATUS_SIDEBAR",
      "SIDEBAR_VERSION",
      "NAVBAR_VERSION",
    ]),
  },
  methods: {
    ...mapActions(["initialWidthScreen", "setStatusSidebar"]),
    initSideBarStatusMobileView() {
      if (this.WIDTH_SCREEN < 1200) {
        this.setStatusSidebar(false);
      } else {
        this.setStatusSidebar(true);
      }
    },
  },
  created() {
    window.addEventListener("resize", this.initialWidthScreen);
    window.addEventListener("resize", this.initSideBarStatusMobileView);
  },
  destroyed() {
    window.addEventListener("resize", this.initialWidthScreen);
    window.addEventListener("resize", this.initSideBarStatusMobileView);
  },
  mounted() {
    this.initialWidthScreen();
    this.initSideBarStatusMobileView();
  },
};
</script>
