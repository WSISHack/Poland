
const profile = {
  namespaced: true,
  state: {
      diseases: [
        "Iron-deficiency anaemia",
        "Protein-energy malnutrition",
        "Stomach cancer",
        "Colon and rectum cancers",
        "Liver cancer",
        "Kidney cancer",
        "Diabetes mellitus",
        "Anorexia",
        "Bulimia",
        "Ischaemic heart disease",
        "Celiac disease",
        "Peptic Ulcer",
        "Cholelithiasis",
        "Atherosclerosis",
        "Cirrhosis"
      ],
      alergens: [
        "Eggs",
        "Milk",
        "Peanuts",
        "Tree nuts",
        "Fish",
        "Shellfish",
        "Wheat",
        "Soy"
      ],
      user: {
        name: null,
        surname: null,
        age: null,
        sex: null,
        growth: null,
        weight: null,
        address: null,
        city: null,
        state: null,
        zipCode: null,
        diseases: []
      }
  },

  mutations: {
    save (state, value) {
      state.user = value;
    },
    addDisease (state, value) {
      let id = state.diseases.indexOf(value);
      state.diseases.splice(id, 1);
      state.user.diseases.push(value);
    },
    removeDisease (state, value) {
      let id = state.user.diseases.indexOf(value);
      state.user.diseases.splice(id, 1);
      state.diseases.push(value);
    }
  },

  actions: { 
    save ({ commit, state }, value) {
      commit('save', value);
    },
    addDisease ({commit, state}, value) {
      commit('addDisease', value);
    },
    removeDisease ({commit, state}, value) {
      commit('removeDisease', value);
    }
  },

  getters: {
    user: (state, getters) => {
      return state.user;
    },
    diseases: (state, getters) => {
      return state.diseases;
    },
    alergens: (state, getters) => {
      return state.alergens;
    }
  }
}

export default profile;
