
import Axios from 'axios'

const state = {
    products: [],
    cart: [],
    details: []
  }
 const getters = {
    PRODUCTS: state => {
        return state.products
    },
    CART: state => {
        return state.cart
    },
    DETAILS: state => {
      return state.details
  }
  }
  const mutations = {
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
  }
  const actions = {
    GET_PRODUCTS : async(context,payload) => {
      let {data} = await Axios.get('http://localhost:5000/api/v1/product/allproducts')
      context.commit("SET_PRODUCTS",data)
  },
  GET_DETAILS : async(context,payload) => {
    let {data} = await Axios.get('http://localhost:5000/api/v1/product/allproducts')
    context.commit("SET_DETAILS",data)
}
}
export default {
    state,
    getters,
    mutations,
    actions
}