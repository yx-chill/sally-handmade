import { createStore } from "vuex";

const store = createStore({
  state: {
    test:1
  },
  getters:{
    getTest(state){
      return state.test
    }
  },
  mutations: {
    addTest(state){
      ++state.test
    }
  },
  actions: {},
  modules: {}
});

export default store