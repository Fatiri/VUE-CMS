<template>
  <div v-if="showModal">
    <transition name="fade" appear>
      <div class="my-modal-overlay" @click="onClose"></div>
    </transition>
    <transition name="pop" appear>
      <!-- WITH CUSTOM CONTENT -->
      <div
        class="my-modal"
        :style="widthScreen > 738 ? 'width: 58em;' : 'width:22em;'"
        v-if="withFooterAndHeader"
      >
        <div v-if="customHeader">
          <slot name="header"> </slot>
        </div>
        <div class="my-modal-header" v-else>
          <p class="title-modal-header">{{ header }}</p>
          <div class="icon-container-modal">
            <box-icon type="solid" name="x-circle"></box-icon>
          </div>
        </div>
        <div
          :class="` ${isScroll && 'my-modal-content'}`"
          :style="`
          ${
            showBorderTopBottomContent &&
            'border-top: 1px solid #eeeeee;border-bottom: 1px solid #eeeeee;'
          }`"
        >
          <slot name="content" />
        </div>
        <div v-if="customFooter">
          <slot name="footer"> </slot>
        </div>
        <div class="my-modal-footer" v-else></div>
      </div>
      <div
        v-else
        class="my-modal"
        :style="`${
          widthScreen > 1024 ? `width: 27em;` : `width:24em;`
        }padding: 2rem;`"
        role="dialog"
      >
        <img :src="getImage(imageUrl)" />
        <p class="title-my-modal" style="font-size: 16px">
          {{ title }}
        </p>

        <p class="subtitle-my-modal" style="margin-bottom: 6%">
          {{ subtitle }}
        </p>
        <button class="button is-danger" style="" @click="onClose">
          <p class="my-modal-text-submit">{{ buttonTitle }}</p>
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "modal-v2",
  props: {
    buttonTitle: {
      type: String,
      default: "Oke",
    },
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    showModal: {
      type: Boolean,
    },
    withFooterAndHeader: {
      type: Boolean,
    },
    customHeader: {
      type: Boolean,
      default: false,
    },
    customFooter: {
      type: Boolean,
      default: false,
    },
    header: {
      type: String,
    },
    isScroll: {
      default: true,
      type: Boolean,
    },
    showBorderTopBottomContent: {
      default: true,
      type: Boolean,
    },
  },
  data() {
    return {
      widthScreen: 0,
    };
  },
  created() {
    this.getWidthScreen();
    window.addEventListener("resize", this.getWidthScreen);
  },
  destroyed() {
    window.removeEventListener("resize", this.getWidthScreen);
  },
  methods: {
    getWidthScreen() {
      this.widthScreen =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    },
    getImage(url) {},
    onClose() {
      this.$emit("close", !this.$props.showModal);
    },
  },
};
</script>