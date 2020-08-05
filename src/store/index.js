import Vue from 'vue'
import Vuex from 'vuex'
import datas from "./modules/datas"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    datas
 }
})
