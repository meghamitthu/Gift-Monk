import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({paths: ['user.token','user.loggedinuser']})],
  state: {
    products: [],
    cart: [],
    details: [],
    loggedinuser: null,
    token: ''
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
    },
    LOGGED_IN_USER: state => {
      return state.token
    },
    TOKEN: state => {
      return state.loggindinuser
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
    SET_TOKEN : (state,payload) => {
      state.token=payload
    },
    SET_USER : (state,payload) => {
      state.loggedinuser=payload
    }
  },
  actions: {
    GET_PRODUCTS : async(context,payload) => {
      let {data} = await Axios.get('http://localhost:5000/api/v1/product/allproducts')
      // headers: {
      //   'Authorization': context.getters.TOKEN.replace()
      // }
      context.commit("SET_PRODUCTS",data);
      
    },
    GET_DETAILS : async(context,payload) => {
      let {data} = await Axios.get('http://localhost:5000/api/v1/product/productdetails')
      // headers: {
      //   'Authorization': context.getters.TOKEN.replace()
      // }
      context.commit("SET_DETAILS",data)
    },
    USER_LOGIN : async(context,payload) => {
      let {data} = await Axios.post(payload)
      if(data.success){
        context.commit("SET_TOKEN",data.token)
        context.commit("SET_USER",data.loggedinuser)
      }
      else{
        alert(JSON.stringify(data.msg))
      }
    }
},
  modules: {
  }
})
