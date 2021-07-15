import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mobileMenu: false
  },
  mutations: {
    toggleMenu(state, is) {
      state.mobileMenu = is;
    }
  },
  actions: {
  },
  modules: {
  }
})
