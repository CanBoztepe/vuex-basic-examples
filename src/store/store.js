import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({

  // state can be used similar to regular data()
  state: {
    counter: 10
  },
  // mutations are used for changing the data in the state when executed by actions
  mutations: {
    incCounter: (state, payload) => {
      state.counter += payload;
    },
    decCounter: state => {
      state.counter--;
    }
  },
  // actions are used for executing mutations
  actions: {
    incCounter: (context, payload) => {
      context.commit('incCounter', payload);
    },
    decCounter: context => {
      context.commit('decCounter');
    }
  },
  // getters are used for getting the data from state, they can also be used to filter or map the data, so you dont have to in the components
  getters: {
    counter: state => state.counter,
    halfCounter: state => {
      // let halfCounter = state.counter / 2;
      // return halfCounter;
      return state.counter / 2;
    }
  }
})