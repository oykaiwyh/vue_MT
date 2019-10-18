import Vue from 'vue'
import Vuex from 'vuex'
import global from './modules/index'

Vue.use(Vuex)


export default new Vuex.Store({
    ...global,
    modules:{

    }
    
})




