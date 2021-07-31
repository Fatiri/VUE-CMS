import {
  ComponentController
} from '../../controllers/component'

const state = {
  navbarVersion: 'navbar-' + ComponentController().navbar_version,
  sidebarVersion: 'sidebar-' + ComponentController().sidebar_version,
  tableVersion: 'table-' + ComponentController().table_version,
}

const actions = {
}

const mutations = {

}

const getters = {
  NAVBAR_VERSION: state => {
    return state.navbarVersion
  },

  SIDEBAR_VERSION: state => {
    return state.sidebarVersion
  },
  TABLE_VERSION: state => {
    return state.tableVersion
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
