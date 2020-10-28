import Vue from 'vue'
import Vuetify from 'vuetify'
import '../../node_modules/vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
 
Vue.use(Vuetify)
 
const opts = {
    icons: {
        iconfont: 'mdi',
},} 
export default new Vuetify(opts)