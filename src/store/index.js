import Vue from 'vue'
import Vuex from 'vuex'
import admin from './admin'
import cart from './cart'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({paths:['admin.token','loggedInAdmin']})],
  state: {
    progress :false
  },
  getters : {
    PROGRESS: state => {
        return state.progress
    },
       
  },
  mutations: {
    SET_PROGRESS : (state,payload) => {
      state.products = payload
      
  },
    },
  actions: {
    GET_PRODUCTS : async(context,payload) => {
      let {data} = await Axios.get('http://localhost:5000/api/v1/product/allproducts')
      context.commit("SET_PRODUCTS",data)
 },
  SET_PROGRESS : async(context,payload) => {
  
    context.commit("SET_PROGRESS",payload)
},
},
  modules: {
    admin,
    cart

  }
})
