import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  areaChoice: ['tech'],
  levelChoice: 2,
};

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  // toggleArea(area) {
  //   const a = state.areaChoice;
  //   if (a.includes(area)) {
  //     a.splice(a.indexOf(area), 1);
  //   } else {
  //     a.push(area);
  //   }
  // },
  chooseAll(state) {
    state.areaChoice = ['tech', 'biz'];
    // state.levelChoice++;
  },
};

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  // toggleArea: ({ commit }) => commit('toggleArea'),
  chooseAll: ({ commit }) => commit('chooseAll'),
};
//   increment: ({ commit }) => commit('increment'),
//   decrement: ({ commit }) => commit('decrement'),
//   incrementIfOdd({ commit, state }) {
//     if ((state.count + 1) % 2 === 0) {
//       commit('increment');
//     }
//   },
//   incrementAsync({ commit }) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         commit('increment');
//         resolve();
//       }, 1000);
//     });
//   },
// };

// getters are functions
// const getters = {
//   levelChoice: state => parseInt(state.levelChoice, 10),
// };

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  // getters,
  actions,
  mutations,
});
