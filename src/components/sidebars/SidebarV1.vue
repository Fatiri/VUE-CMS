<template>
  <div
    class="sidebar-v1"
    @mouseenter="statusMinimize = false && WIDTH_SCREEN > 1200"
    @mouseleave="statusMinimize = true && WIDTH_SCREEN > 1200"
  >
    <div class="container-sidebar-v1">
      <div class="title-sidebar-v1">
        <box-icon
          id="iconSidebarv1"
          class="icon-title-sidebar-v1"
          name="spa"
          animation="tada"
        ></box-icon>
        <div class="txt-title-sidebar-v1 fade-in two">CMS Lion BETA</div>
        <!-- <box-icon name="like"></box-icon> -->
      </div>
      <div class="container-sidebar-v1-list">
        <div
          class="sub-menu-sidebar-v1-list"
          v-for="(data, index) in routes"
          :key="index"
        >
          <div v-if="data.path === '/'">
            <div
              class="sub-menu-sidebar-v1-list"
              v-for="(dataMain, index) in data.children"
              :key="index"
            >
              <div
                class="title-sidebar-v1-list fade-in one"
                v-if="
                  !statusMinimize || (WIDTH_SCREEN < 1200 && data.title_sidebar)
                "
              >
                {{ dataMain.name }}
              </div>
              <div
                class="title-sidebar-v1-list"
                v-if="statusMinimize && WIDTH_SCREEN > 1200"
              >
                <box-icon
                  id="iconSidebarv1"
                  name="dots-horizontal-rounded"
                  class="fade-in one"
                ></box-icon>
              </div>
              <router-link
                class="sidebar-v1-list"
                v-for="(dataChild, indexChild) in dataMain.children"
                :key="indexChild"
                :to="'/'+dataMain.path+'/'+dataChild.path"
                :id="dataChild.path"
              >
                <div class="group-icon-sidebar-v1">
                  <badge-v1
                  :style="dataChild.meta.badge ? 'visibility: visible;':'visibility: hidden;'"
                    :value="2"
                    class="badge-sidebar-v1 fade-in one"
                    componentVersion="badge-v1"
                  />
                  <box-icon
                    id="iconSidebarv1"
                    class="icon-list-sidebar-v1"
                    :name="dataChild.meta.icon"
                    animation="tada-hover"
                  ></box-icon>
                </div>
                <div>
                  <span class="txt-sidebar-v1-list">{{ dataChild.name }}</span>
                  <span
                    v-if="WIDTH_SCREEN < 1200"
                    class="txt-sidebar-v1-list"
                    >{{ dataChild.name }}</span
                  >
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BadgeV1 from "../badges/BadgeV1.vue";
export default {
  components: {
    "badge-v1": BadgeV1,
  },
  data() {
    return {
      statusMinimize: true,
      routes: this.$router.options.routes,
    };
  },
  computed: {
    ...mapGetters(["WIDTH_SCREEN"]),
  },
  methods: {
    ...mapActions(["initMenuListStatus"]),
  },
};
</script>
