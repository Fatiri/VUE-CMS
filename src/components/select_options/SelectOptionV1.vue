<template>
  <div class="select-opyion-v1">
    <details class="custom-select">
      <summary class="radios">
        <input
          type="radio"
          name="item"
          id="default"
          :title="mainText"
          checked
        />
        <input
          v-for="(option, index) in listOption"
          :key="index"
          type="radio"
          name="item"
          :id="index"
          :title="option"
        />
      </summary>
      <ul class="list">
        <li v-for="(option, index) in listOption" :key="index">
          <label :for="index" @click="emitToParent(option)">{{ option }}</label>
        </li>
      </ul>
    </details>
  </div>
</template>

<script>
export default {
  props: ["mainText", "listOption"],
  data() {
    return {};
  },
  methods: {
    emitToParent(event) {
      this.$emit("childToParent", event);
    },
  },
};
</script>