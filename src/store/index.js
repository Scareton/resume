import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import imageDialog from "./imageDialog"
import links from "./links"

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    imageDialog,
    links
  }
})
