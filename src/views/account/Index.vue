<template>
  <section class="account">
    <div class="account-container">
      <table-custom
        :componentName="TABLE_VERSION"
        :perPageStatus="true"
        :filterStatus="true"
        :paginationStatus="true"
        :dataTable="ACCOUNTS"
        :customHeaderTable="header"
        @actionTableCallBack="resultParameterTable"
        @actionDetailRow="goToDetail"
      />
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Table from "../../components/tables/Index.vue";
export default {
  components: {
    "table-custom": Table,
  },
  data() {
    return {
      header: [
        "ID",
        "Account Group",
        "Account Name",
        "Username",
        "Email",
        "Status",
        "Position",
      ],
      params: {
        per_page: 10,
        q: "",
        page: 1,
      },
    };
  },
  computed: {
    ...mapGetters(["TABLE_VERSION", "ACCOUNTS"]),
  },
  methods: {
    ...mapActions(["initDataAccounts"]),
    resultParameterTable(value) {
      this.params = value;
    },
    goToDetail(value) {
      this.$router.push(`/admin/account/${value.account_id}`);
    },
  },

  beforeMount() {
    this.initDataAccounts(this.params);
  },
  watch: {
    params: {
      handler: function () {
        this.initDataAccounts(this.params);
      },
      deep: true,
    },
  },
};
</script>