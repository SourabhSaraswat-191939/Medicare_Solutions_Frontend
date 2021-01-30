import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


export default new Vuex.Store({

  state:{
        first_name:"",
        last_name:"",
        Mobile_No:"",
        pin_code:"",
        address:"",
        client_id:"",
        email:"",
        token:localStorage.getItem("ck"),
        prevArray:[],
        ordersArray:"",
        ordersAmount:"",


        orderName:"",
        orderAddress:"",
        orderMobile:"",
        orderPincode:"",

        

  },

  getters:{
    getPrevArray(state){
      return state.prevArray;
    },

    getEmail(state){
        return state.email;
    }
  },

  mutations:{
    AuthState(state, Token){
      state.token = Token
    },
    ClientDataState(state, User_info)
        {
            state.first_name = User_info.user.first_name;
            state.last_name = User_info.user.last_name;
            state.Mobile_No = User_info.Mobile_No;
            state.address = User_info.address;
            state.client_id = User_info.user.id;
            state.email = User_info.user.email;
            state.pin_code = User_info.Pin_Code;
            // state.last_name = Lname;
        },
        getPrevArray(state, array)
        {
            for(var i=0;i<array.length;i++)
            {
                state.prevArray.push(array[i])
            }
        },
        OrdersArray(state, order){
            state.ordersArray = order['order']
            state.ordersAmount = order['amount']
        },
        OrdersAddress(state, order_address)
        {
            state.orderName = order_address['name'];
            state.orderAddress = order_address['address'];
            state.orderMobile = order_address['mobile'];
            state.orderPincode = order_address['pincode'];
        }

  },


  actions:{
    orders_address({commit}, order_address){
        commit('OrdersAddress', order_address)
    },
    orders({commit}, order){
        // console.log(total)
        commit('OrdersArray', order)
    },

    getPrevArray({commit}, array){
        
        commit('getPrevArray', array)

    },
    AuthTokenState({commit},token){
        // console.log(token)
        commit('AuthState', token)
        
        // console.log("Second")
    },

    ClientData({commit}, Client_info){
        // console.log(Client_info)
        commit('ClientDataState', Client_info)
    },


    addState({commit},message){
        commit('NEW_STATE',message)
    },
    delete({commit},message){
        commit('DELETE_STATE',message)
    }
}


})