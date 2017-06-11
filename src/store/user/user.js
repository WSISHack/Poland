import firebase from 'firebase'

import LoginForm from './loginForm'

const user = {
  namespaced: true,

  state: { 
    current: null
  },

  mutations: { 
   
  },

  actions: { 
    isLoggedIn ({ commit, state }) { 
      return new Promise(resolve => {
        if(state.current){
          return resolve(true);
        }

        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            state.current = firebase.auth().currentUser;
            
            resolve(true);
          } else {
            resolve(false);
          }
        });
      });
    },

    login ({ commit, state }) {
      return new Promise((resolve, reject) => {
        const email = state.loginForm.email;
        const pass = state.loginForm.password;
        
        firebase.auth().signInWithEmailAndPassword(email, pass).then(() => {
          resolve();
        }).catch(function(error) {
          reject("[" + error.code + "] " + error.message);
        });
      });
    },

    logout ({ commit, state }) {
      return new Promise((resolve, reject) => {
        firebase.auth().signOut().then(function() {
          resolve();
        }, function(error) {
          reject();
        });
      });
    },
  },

  getters: { 
    current: (state, getters) => {
      return state.current;
    },
  },

  modules: {
    loginForm: LoginForm
  }
}

export default user;
