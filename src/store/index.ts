import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    agile: [],
    darkMode: false
  },
  mutations: {
    setAgile(state, value) {
      state.agile = value;
    },
    switchDarkMode(state) {
      state.darkMode = !state.darkMode;
    }
  },
  actions: {},
  modules: {}
});
