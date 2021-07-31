<template>
  <div>
    <component-form
      componentVersion="v1"
      titleForm="Account Detail"
      :listFieldOption="option"
      :listAction="actionOption"
      :dataObject="data"
      @actionButtonBack="actionBack"
      @actionButtonUpdate="actionUpdate"
      @actionButtonDelete="actionDelete"
      @actionButtonPrint="actionPrint"
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
  methods: {
    actionBack() {
      this.$router.push(`/admin/account/list`);
    },
    actionUpdate() {
      console.log("masuk delete");
    },
    actionDelete() {
      console.log("masuk delete");
    },
    actionPrint() {
      console.log("masuk print");
    },
  },
  data() {
    return {
      actionOption:["Preview", "Update", "Delete", "Print"],
      option: [
        // {
        //   keyOfObject: "line",
        //   label: "Acoount",
        //   type: "",
        //   component: "line",
        //   maxLength: "",
        // },
        // {
        //   keyOfObject: "line",
        //   label: "",
        //   type: "",
        //   component: "line",
        //   maxLength: "",
        // },
        {
          keyOfObject: "account_group",
          label: "Group",
          type: "text",
          component: "input",
          maxLength: "5",
          mandatory: false,
        },
        {
          keyOfObject: "account_name",
          label: "Name",
          type: "text",
          component: "input",
          maxLength: "10",
          mandatory: true,
        },
        {
          keyOfObject: "username",
          label: "Username",
          type: "text",
          component: "input",
          maxLength: "100",
          mandatory: true,
        },
      ],
      data: {
        account_group: 1,
        account_name: "ilham",
        username: 20,
      },
    };
  },
};
</script>