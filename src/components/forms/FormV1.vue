<template>
  <div class="form-v1">
    <div class="container-form-v1">
      <div class="header-form-v1">
        <div class="title-form-v1">{{ titleForm }}</div>
        <select-option
          componentVersion="v1"
          :listOption="listAction"
          :mainText="actionForm"
          @changeOption="changeAction"
        />
      </div>
      <div
        class="box-form-v1"
        v-if="fields.length !== 0 && dataObject !== undefined"
      >
        <div v-for="(field, index) in fields" :key="index">
          <div
            class="field-line-vertical-form-v1"
            v-if="field.component === 'line'"
          >
            <span class="title-input">{{ field.label }}</span>
          </div>
          <div class="field-vertical-form-v1" v-if="field.component !== 'line'">
            <div>
              <span class="title-input">{{ field.label }}</span>
            </div>
            <div class="container-input-form-v1">
              <input
                v-if="field.component === 'input'"
                class="input-v3"
                spellcheck="false"
                min="1"
                :type="field.type"
                :maxlength="field.maxLength"
                :placeholder="field.label"
                :disabled="formActionEnable"
                v-model="data[field.keyOfObject]"
              />
              <textarea
                class="text-area-form-v1 textarea-v1"
                v-if="field.component === 'textarea'"
                name=""
                id=""
                cols="30"
                rows="10"
                :maxlength="field.maxLength"
                v-model="data[field.keyOfObject]"
                :placeholder="field.label"
                :disabled="formActionEnable"
              ></textarea>
              <box-icon
                name="edit"
                class="icon-update-field fade-in fade-out one"
                v-if="actionForm === 'Update'"
              ></box-icon>
            </div>
          </div>

          <!-- <select name="" id="">
            <option value=""></option>
          </select> -->
        </div>
      </div>
      <div class="footer-form-v1">
        <button
          class="button-v1"
          style="vertical-align: middle"
          @click="actionButtonBack"
        >
          <span>Back</span>
        </button>
        <button
          class="button-v2 fade-in one"
          style="vertical-align: middle"
          v-if="actionForm === 'Delete'"
          @click="actionButtonDelete"
        >
          <span>Delete</span>
        </button>
        <button
          class="button-v3 fade-in one"
          style="vertical-align: middle"
          v-if="actionForm === 'Update'"
          @click="actionButtonUpdate"
        >
          <span>Update</span>
        </button>
        <button
          class="button-v4 fade-in one"
          style="vertical-align: middle"
          v-if="actionForm === 'Print'"
          @click="actionButtonPrint"
        >
          <span>Print</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
// import { Capitalize, Decamelize } from "../../misc/string-manipulator";
import SelectOption from "../../components/select_options/Index.vue";
import { ValidateValueObjectForm } from "../../misc/validate-object";
import { ResponseMessage } from "../../misc/response";
export default {
  name: "FormV1",
  props: ["titleForm", "listFieldOption", "listAction", "dataObject"],
  components: {
    "select-option": SelectOption,
  },
  data() {
    return {
      fields: [],
      data: {},
      dataBackUp: {},
      formActionEnable: true,
      actionForm: "Preview",
    };
  },
  methods: {
    changeAction(value) {
      if (value === "Update") {
        this.formActionEnable = false;
      } else {
        this.changeDataState(this.dataBackUp);
        this.formActionEnable = true;
      }
      this.actionForm = value;
    },
    initData() {
      this.data = { ...this.dataObject };
      this.dataBackUp = { ...this.dataObject };
    },
    changeDataMain(payload) {
      Object.keys(payload).map((key, indexKey) => {
        Object.values(payload).map((value, indexValue) => {
          if (indexKey === indexValue) {
            this.dataObject[key] = value;
          }
        });
      });
    },
    changeDataState(payload) {
      Object.keys(payload).map((key, indexKey) => {
        Object.values(payload).map((value, indexValue) => {
          if (indexKey === indexValue) {
            this.data[key] = value;
          }
        });
      });
    },
    actionButtonBack() {
      this.$emit("actionButtonBack");
    },
    actionButtonUpdate() {
      let response = ValidateValueObjectForm(this.fields, this.data);
      if (response.isNull) {
        ResponseMessage("warning", response.message);
      }else{
        this.$emit("actionButtonUpdate");
      }
    },
    actionButtonDelete() {
      this.$emit("actionButtonDelete");
    },
    actionButtonPrint() {
      this.$emit("actionButtonPrint");
    },
  },
  beforeMount() {
    this.fields = this.listFieldOption;
    this.initData();
  },

  watch: {
    data: {
      handler: function () {
        this.changeDataMain(this.data);
      },
      deep: true,
    },
  },
};
</script>