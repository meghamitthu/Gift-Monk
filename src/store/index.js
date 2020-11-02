import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    details: []
  },
  getters : {
    PRODUCTS: state => {
        return state.products
    },
    CART: state => {
        return state.cart
    },
    DETAILS: state => {
      return state.details
  }
  },
  mutations: {
    SET_PRODUCTS : (state,payload) => {
      state.products = payload
      // alert(JSON.stringify(state.products))
  },
  SET_DETAILS : (state,payload) => {
    state.details = payload
    // alert(JSON.stringify(state.products))
},
  ADD_TOCART : (state,payload) => {
      state.cart.push(payload)
      alert(JSON.stringify(state.cart))
    },
  },
  actions: {
    GET_PRODUCTS : async(context,payload) => {
      let {data} = await Axios.get('http://localhost:5000/api/v1/product/allproducts')
      context.commit("SET_PRODUCTS",data)
  },
  GET_DETAILS : async(context,payload) => {
    let {data} = await Axios.get('http://localhost:5000/api/v1/product/allproducts')
    context.commit("SET_DETAILS",data)
},
},
  modules: {
  }
})
