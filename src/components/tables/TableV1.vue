<template>
  <div class="container-table-v1">
    <div class="menu-table-v1" v-if="perPageStatus || filterStatus">
      <div class="perpage-table-v1" v-if="perPageStatus">
        <span class="perpage-title">Entry</span>
        <select-option
          componentVersion="v1"
          :listOption="perPageOption"
          mainText="10"
          @changeOption="changeSorting"
        />
      </div>
      <div v-if="!perPageStatus"></div>
      <div class="filter-table-v1" v-if="filterStatus">
        <input
          class="input-v1 fade-in one"
          type="text"
          placeholder="Input Key"
          v-model="pagination.q"
          v-if="inputFilterStatus"
        />
        <box-icon
          @click="inputFilterStatus = false"
          v-if="inputFilterStatus"
          class="search-icon"
          type="solid"
          name="tag-x"
          animation="tada-hover"
        ></box-icon>
        <box-icon
          @click="inputFilterStatus = true"
          v-if="!inputFilterStatus"
          class="search-icon"
          name="search-alt"
          animation="tada-hover"
        ></box-icon>
      </div>
    </div>
    <div class="table-v1" v-dragscroll="true">
      <table class="table1">
        <tr>
          <th v-for="(value, index) in header" :key="index">{{ value }}</th>
        </tr>
        <tr
          v-for="(value, index) in data"
          :key="index"
          @click="actionDetailRow(value)"
        >
          <td
            v-for="(valueObject, indexObject) in Object.values(value)"
            :key="indexObject"
          >
            {{ valueObject }}
          </td>
        </tr>
      </table>
      <div class="loader-table-v1" v-if="loaders && data.length === 0">
        <box-icon name='loader-circle' animation='spin' size="65px" ></box-icon>
      </div>
      <div class="loader-table-v1" v-if="!loaders && data.length === 0">
        <div class="icon-empty-data fade-in one">
          <box-icon name="clipboard"></box-icon>
        </div>
        <span class="txt-notfound fade-in one">Data Empty</span>
      </div>
    </div>
    <div class="pagination-table-v1" v-if="paginationStatus">
      <div class="pagination-btn-left" @click="backPagination">
        <box-icon name="chevron-left" type="solid"></box-icon>
      </div>
      <div class="pagination-page">
        <span>{{ page }}</span>
      </div>
      <div class="pagination-btn-right" @click="nextPagination">
        <box-icon name="chevron-right" type="solid"></box-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { Capitalize, Decamelize } from "../../misc/string-manipulator";
import SelectOption from "../../components/select_options/Index.vue";
import Loader from "../loader/Index.vue";
import { ResponseMessage } from "../../misc/response";
export default {
  props: [
    "dataTable",
    "customHeaderTable",
    "filterStatus",
    "perPageStatus",
    "paginationStatus",
  ],
  components: {
    "select-option": SelectOption,
    "loader-custom": Loader,
  },
  data() {
    return {
      data: [],
      header: [],
      perPageOption: ["10", "20", "50", "100"],
      inputFilterStatus: false,
      page: 1,
      pagination: {
        per_page: 10,
        q: "",
        page: 1,
      },
      lastPageStatus: false,
      loaders: true,
      actionPagination: "",
      dataBackup: [],
      isLastPage: false,
    };
  },
  methods: {
    setDataTable() {
      typeof this.dataTable === "object" ? (this.data = this.dataTable) : "";
      this.setHeaderTable();
    },

    setHeaderTable() {
      if (typeof this.customHeaderTable === "object") {
        this.header = this.customHeaderTable;
      } else {
        if (typeof this.dataTable === "object") {
          this.dataTable.map((obeject, index) => {
            if (index === 0) {
              Object.keys(obeject).map((key) => {
                let decamelize = Decamelize(key);
                let result = Capitalize(decamelize);
                this.header.push(result);
                console.log(this.header);
              });
            }
          });
        }
      }
    },
    changeSorting(value) {
      this.pagination.page = 1;
      this.pagination.per_page = value;
    },
    nextPagination() {
      this.actionPagination = "NEXT";
      if (!this.isEmpty) {
        this.pagination.page = this.page + 1;
      }
    },
    backPagination() {
      this.dataBackup = this.data;
      this.actionPagination = "BACK";
      this.page !== 1 ? (this.pagination.page = this.page - 1) : "";
    },
    actionDetailRow(value) {
      this.$emit("actionDetailRow", value);
    },
  },
  beforeMount() {
    this.setHeaderTable();
  },
  watch: {
    inputFilterStatus() {
      if (!this.inputFilterStatus) {
        this.pagination.q = "";
      }
    },
    pagination: {
      handler: function () {
        this.loaders = true;
        this.dataBackup = this.data;
        if (this.pagination.q !== "") {
          this.actionPagination = "SEARCH";
          this.pagination.page = 1;
        }
        this.data = [];
        setTimeout(() => {
          if (!this.isEmpty) {
            this.$emit("actionTableCallBack", this.pagination);
          }
        }, 1500);
      },
      deep: true,
    },
    dataTable: {
      handler: function () {
        let isHaveData = true;
        if (this.actionPagination === "NEXT" && this.dataTable.length === 0) {
          isHaveData = false;
          this.data = this.dataBackup;
          this.isEmpty = true;
          ResponseMessage("warning", "Page " + this.page + " is last page");
        } else if (
          this.actionPagination === "SEARCH" &&
          this.dataTable.length === 0
        ) {
          isHaveData = false;
        } else {
          this.isEmpty = false;
          isHaveData = true;
        }
        if (isHaveData) {
          this.setDataTable();
          this.page = this.pagination.page;
          this.loaders = false;
        }
        if (this.dataTable.length === 0) {
          this.loaders = false;
          this.isEmpty = true;
        }
      },
      deep: true,
    },
  },
};
</script>