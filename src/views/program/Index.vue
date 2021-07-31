<template>
  <div>
    <component-form
      componentVersion="v1"
      titleForm="Program Detail"
      :dataForm="dataFormOption"
    />
  </div>
</template>

<script>
import ComponentForm from "../../components/forms/Index.vue";
export default {
  name: "PageProgram",
  components: {
    "component-form": ComponentForm,
  },
  data() {
    return {
      dataFormOption: [
        {
          title: "ID",
          value: "1",
          type: "text",
          component: "input",
        },
        {
          title: "Name",
          value: "ILham",
          type: "text",
          component: "input",
        },
        {
          title: "Detail",
          value: "asjdlkajdlkajdlkjsadklkajdlkjasdkjklajdlkasjd",
          type: "text",
          component: "textarea",
        },
      ],
    };
  },
};
</script>