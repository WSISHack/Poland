
const profile = {
  namespaced: true,

  state: { 
      user: {
        name: null,
        surname: null,
        age: null,
        growth: null,
        weight: null,
        address: null,
        city: null,
        state: null,
        zipCode: null
      }
  },

  mutations: {
    save (state, value) {
      console.log("save mutation", value)
      state.user = value;
    }
  },

  actions: { 
    save ({ commit, state }, value) {
      commit('save', value);
    }
  },

  getters: {
    user: (state, getters) => {
      return state.user;
    },
  }
}

export default profile;
