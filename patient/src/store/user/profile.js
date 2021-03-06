import firebase from 'firebase'

const profile = {
  namespaced: true,
  state: {
      static: {
        disease: "",
        allergen: "",
      },
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
      allergens: [
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
        sex: 0,
        height: null,
        weight: null,
        address: null,
        city: null,
        state: null,
        zipCode: null,
        lifestyle: null,
        diseases: [],
        allergens: [],
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
      state.static.disease = "";
    },
    removeDisease (state, value) {
      let id = state.user.diseases.indexOf(value);
      state.user.diseases.splice(id, 1);
      state.diseases.push(value);
    },
    addAllergen (state, value) {
      let id = state.allergens.indexOf(value);
      state.allergens.splice(id, 1);
      state.user.allergens.push(value);
      state.static.allergen = "";
    },
    removeAllergen (state, value) {
      let id = state.user.allergens.indexOf(value);
      state.user.allergens.splice(id, 1);
      state.allergens.push(value);
    }
  },

  actions: { 
    save ({ commit, state, getters, rootGetters }, value) {
      return new Promise(resolve => { 
        const user = rootGetters['user/current'];

        commit('save', value);

        firebase.database().ref('users/' + user.uid + "/profile").set(value).then(() => {
          resolve();
        });
      });
    },
    addDisease ({commit, state}, value) {
      commit('addDisease', value);
    },
    removeDisease ({commit, state}, value) {
      commit('removeDisease', value);
    },
    addAllergen ({commit, state}, value) {
      commit('addAllergen', value);
    },
    removeAllergen ({commit, state}, value) {
      commit('removeAllergen', value);
    }
  },

  getters: {
    user: (state, getters) => {
      return state.user;
    },
    diseases: (state, getters) => {
      return state.diseases;
    },
    allergens: (state, getters) => {
      return state.allergens;
    },
    static: (state, getters) => {
      return state.static;
    }
  }
}

export default profile;
