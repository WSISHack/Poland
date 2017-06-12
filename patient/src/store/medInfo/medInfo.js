import firebase from 'firebase'

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

      return new Promise(resolve => { 
        const user = rootGetters['user/current'];

        value.time = firebase.database.ServerValue.TIMESTAMP;

        var path = 'users/' + user.uid + "/data/";
        var key = firebase.database().ref(path).push().key;
        var updates = {};
        updates[path + key] = value;

        firebase.database().ref().update(updates)
          .then(() => {

            state.medInfo = {
              glucose: null,
              pressure: {
                systolic: null,
                diastolic: null
              }
            };

            resolve();
          });
      });
    }
  },

  getters: {
    medInfo: (state, getters) => {
      return state.medInfo;
    },
  }
}

export default medInfo;
