import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    first_name:"",
    last_name:"",
    email:"",
    token:localStorage.getItem("ck"),
  },
  mutations: {

    SellerDataState(state, seller_info){
      
      state.first_name = seller_info.first_name;
      state.last_name = seller_info.last_name;  
      state.email = seller_info.email;
    },
    AuthState(state, Token)
        {
            
            state.token = Token             
        },

  },
  actions: {
    SellerData({commit}, Seller_info){
      commit('SellerDataState', Seller_info)
  },
  AuthTokenState({commit},token){
    commit('AuthState', token)
},

  },
  modules: {
  }
})
