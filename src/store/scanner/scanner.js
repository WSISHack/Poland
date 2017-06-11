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
    process ({ commit, state }, data) {
        commit('setScanState', true);

        const barcode = data.codeResult.code;
        console.log("processing barcode", barcode);

        setTimeout(() => {
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
