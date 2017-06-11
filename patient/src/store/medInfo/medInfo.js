
const medInfo = {
  namespaced: true,
  state: {
    medInfo: {
      glucose: null,
      pressure: {
        systolic: null,
        diastolic: null
      }
    }
  },

  mutations: {
    
  },

  actions: { 
    save ({ commit, state, getters, rootGetters }, value) {
      console.log("FINAL SAVE");
    }
  },

  getters: {
    medInfo: (state, getters) => {
      return state.medInfo;
    },
  }
}

export default medInfo;
