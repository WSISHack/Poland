const scanner = {
  namespaced: true,

  state: { 
    scanning: false
  },

  mutations: { 
      setScanState (state, scanning) {
        state.scanning = scanning;
      }
  },

  actions: { 
    process ({ commit, state }, barcode) {
        commit('setScanState', true);

        console.log("processing barcode", barcode);

        setTimeout(() => {
            console.log("barcode processed", barcode);

            commit('setScanState', false);
        }, 2000)
    }
  },

  getters: { 
    scanning: (state, getters) => {
      return state.scanning;
    },
  },

  modules: {

  }
}

export default scanner;
