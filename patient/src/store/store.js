import Vue from 'vue'

import Vuex from 'vuex'

import User from './user/user'
import Scanner from './scanner/scanner'
import MedIfno from './medInfo/medInfo'

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    title: "Default",

    sidenavEnabled: true,
    toolbarEnabled: true,
    bottomBarEnabled: true,

    sidenavRef: null,
    dialog: {
      ref: null,
      title: "",
      content: ""
    }
  },

  mutations: {
    setTitle (state, title) {
      state.title = title;
    },

    setAllBarsVisible (state, visible) {
      state.sidenavEnabled = visible;
      state.toolbarEnabled = visible;
      state.bottomBarEnabled = visible;
    },

    setSidenavRef (state, ref) {
        state.sidenavRef = ref;
    },
    toggleSidenav (state) {
        state.sidenavRef.toggle();
    },

    setDialogRef (state, ref) {
        state.dialog.ref = ref;
    },
    openDialog (state, data) {
      state.dialog.title = data.title;
      state.dialog.content = data.content;
      state.dialog.clickOutToClose = data.clickOutToClose != null ? data.clickOutToClose : false;
      state.dialog.ref.open();
    },
    closeDialog (state) {
      state.dialog.ref.close();
    }
  },

  modules: {
      user: User,
      scanner: Scanner,
      medInfo: MedIfno
  }
})

export default store;
