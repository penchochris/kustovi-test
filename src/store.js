import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {}
  },
  getters: {},
  mutations: {
    SET_EDITING_USER(state, user) {
      state.user = user;
    }
  },
  actions: {
    setUser({ commit }, user) {
      commit("SET_EDITING_USER", user);
    }
  }
});
