
const profile = {
  namespaced: true,

  state: { 
      user: {
        name: "",
        surname: "",
        age: "",
        growth: "",
        weight: "",
        address: "",
        city: "",
        state: "",
        zipCode: ""
      }
  },

  mutations: {
    save (state, value) {
      state.user = value;
    }
  },

  actions: { 
    save ({ commit, state }, value) {
      commit('save', value);
    }
  },

  // getters: { 
  //   emailValid: (state, getters) => {
  //     return state.email && state.email.length > 0;
  //   },

  //   passwordValid: (state, getters) => {
  //     return state.password && state.password.length > 0;
  //   },

  //   valid: (state, getters) => {
  //     return getters.emailValid && getters.passwordValid;
  //   }
  // }
}

export default profile;
