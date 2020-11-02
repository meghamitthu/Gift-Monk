import Axios from 'axios'

const state={
    loggedInAdmin:null,
    token:'',
    }

const getters = {
    LOGGED_IN_ADMIN: state =>{
        return state.loggedInAdmin
    },
    TOKEN: state =>{
        return state.token
    }
}
const mutations ={
    SET_TOKEN: (state,payload)=>{
        state.token=payload
    },
    SET_ADMIN :(state,payload)=>{
        state.loggedInAdmin=payload
    },
}

const actions = {
    ADMIN_LOGIN : async (context ,payload) => {
        let {data} = await Axios.post("http://localhost:5000/api/v1/admin/login",payload)
        if (data.success) {
            context.commit("SET_TOKEN",data.token)
            context.commit("SET_ADMIN",data.admin)
            alert(JSON.stringify(data.success))
        } else {
            alert(JSON.stringify(data.msg))
        }

    }
}
export default {
    state,
    getters,
    mutations,
    actions
}