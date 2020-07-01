
const state = {
  display: false,
  image: null
}

const getters = {

}

const mutations = {
  open: (state, payload) => {
    state.image = payload;
    state.display = true;
  },
  close: (state) => {
    state.image = null;
    state.display = false;
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}