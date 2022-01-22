const state = {
  // SEARCH RESULT
  searchResult: { sell: [{ value: null, showResult: false }], rent: [{ value: null, showResult: false }] },
  // COMPONENT IS LOADED
  componentIsLoaded: false
}
const mutations = {
  'SET_COMPONENT_IS_LOADED' (state, data) {
    state.componentIsLoaded = data;
  },
  'SET_PANEL_RESULT' (state, data) {
    state.componentIsLoaded = data;
  }
}
const actions = {
  set_panel_result: ({ commit }, data) => {
    commit('SET_PANEL_RESULT', data)
  },
  set_component_is_loaded: ({ commit }, data) => {
    commit('SET_COMPONENT_IS_LOADED', data)
  }
}
const getters = {
  // COMPONENT IS LOADED
  componentIsLoaded: state => {
    return state.componentIsLoaded
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
