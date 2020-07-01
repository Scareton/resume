
import linkService from "../services/linkService"

const state = {
  list: null
};

const getters = {
  contacts: state => {
    if (state.list)
      return state.list.filter(link => link.type === "contact")
  },
  socials: state => {
    if (state.list)
      return state.list.filter(link => link.type === "social")
  }
}

const mutations = {
  update: (state, payload) => {
    state.list = payload;
  }
}

const actions = {
  get: ({ commit }) => {
    linkService.getLinks().then(response => {
      commit("update", response.data)
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}