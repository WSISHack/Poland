import jquery from 'jquery'
import $ from 'jquery'

import keys from './../../keys.json'

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
        //console.log("processing barcode", barcode);

        return new Promise((resolve, reject) => {

          setTimeout(() => {
            commit('setScanState', false);
          }, 2000)

          resolve(barcode);
        });
    },

    translate ({ commit, state }, data) {
      return jquery.get("https://translate.googleapis.com/translate_a/single", 
        { 
          client: "gtx", 
          sl: 'auto', 
          tl: 'en', 
          dt: "t", 
          q: data.text
        } 
      );
    },

    getProductById({ commit, state }, id) {
      return $.ajax({
        method: "GET",
        url: "https://www.openfood.ch/api/v3/products/" +id,
        dataType: 'json',
        headers: {
          "Authorization": "Token token=" + keys.openFoodKey,
        },
      });
    },

    getProducts({ commit, state }, barcodesArray) {
      return $.ajax({
        method: "GET",
        url: "https://www.openfood.ch/api/v3/products?barcodes="+barcodesArray.join(","),
        dataType: 'json',
        headers: {
          "Authorization": "Token token=" + keys.openFoodKey,
        }
      });
    },

    search({ commit, state }, query) {
      return $.ajax({
        method: "POST",
        url: "https://www.openfood.ch/api/v3/products/_search",
        dataType: 'json',
        headers: {
          "Authorization": "Token token=" + keys.openFoodKey,
        },
        data: JSON.stringify({
          "query": {
            "query_string": {
              "query" : query
            }
          }
        })
      });
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
