import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    payType: '',
  },
  mutations: {
    'updatePayType': (state,data) => {
      state.payType = data;
    }
  }
});