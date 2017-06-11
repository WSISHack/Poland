
const loginForm = {
  namespaced: true,

  state: { 
    email: null,
    password: null
  },

  mutations: { 
    setEmail (state, value) {
      state.email = value;
    },

    setPassword (state, value) {
      state.password = value;
    },
  },

  actions: { 
    updateEmail ({ commit, state }, value) {
      commit('setEmail', value);
    },

    updatePassword ({ commit, state }, value) {
      commit('setPassword', value);
    }
  },

  getters: { 
    emailValid: (state, getters) => {
      return state.email && state.email.length > 0;
    },

    passwordValid: (state, getters) => {
      return state.password && state.password.length > 0;
    },

    valid: (state, getters) => {
      return getters.emailValid && getters.passwordValid;
    }
  }
}

export default loginForm;
