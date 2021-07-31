
const state = {
  statusSidebar: true,
}

const actions = {
  setStatusSidebar({
    commit
  }, payload) {
    commit('SET_STATUS_SIDEBAR', payload)
  }
}

const mutations = {
  'SET_STATUS_SIDEBAR'(state, payload) {
    state.statusSidebar = payload
  }
}

const getters = {
  STATUS_SIDEBAR: state => {
    return state.statusSidebar
  },
}

export default {
  state,
  actions,
  mutations,
  getters
}
