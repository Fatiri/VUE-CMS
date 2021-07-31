import {
  AxiosGETS
} from '../../misc/api'

const state = { // store/ initial data 
  accounts: [],
}

const actions = { // untuk function global
  initDataAccounts({
    commit
  }, params) {
    AxiosGETS("/v1/account/data", params).then(data => {
        data.filter(item=>{
            delete item.token
            delete item.created_at
            delete item.created_by
            delete item.updated_at
            delete item.updated_by
        })
      commit('SET_DATA_ACCOUNTS', data)
    })

  }
}

const mutations = { // buat mutasi atau change data state
  'SET_DATA_ACCOUNTS'(state, payload) {
    state.accounts = payload
  }
}

const getters = { // getter data state 
  ACCOUNTS: state => {
    return state.accounts
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
