const state = { // store/ initial data 
    widthScreen : 0,
}

const actions = { // untuk function global
    initialWidthScreen({commit}) {
        let widthScreen =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;

        commit('SET_WIDTH_SCREEN', widthScreen)
    }
}

const mutations = { // buat mutasi atau change data state
    'SET_WIDTH_SCREEN'(state, payload) {
        state.widthScreen = payload
    }
}

const getters = { // getter data state 
    WIDTH_SCREEN: state => {
        return state.widthScreen
    }
}

export default {
    state, actions, mutations, getters
}