import axios from 'axios'
// var instance = axios.create({
//     baseURL:process.env.VUE_APP_SERVER,
//     xsrfCookieName: 'csrftoken',
//     xsrfHeaderName: "X-CSRFTOKEN",  
// })
// axios.defaults.headers['x-csrf-token'] = localStorage.getItem('checks');
// const token = localStorage.getItem("token");






// class API{
//     constructor()
//     {
//         this.instance=axios.create({
//             baseURL:"http://localhost:8000"
//         })
//         this.token=localStorage.getItem("token");
//     }
//     reset(){
//         return this.instance.post('/accounts/reset_password/',{"email":'saraswatsourabh5@gmail.com'}
//         )
//     }
//     log_in(username,password){
//         return axios.post(process.env.VUE_APP_SERVER+'/accounts/login',{"username":username,"password":password})
//     }
//     log_out(){
//         return axios.post(process.env.VUE_APP_SERVER+'/accounts/logout',{"token":this.token})
//     }

//     update_info(f_name,l_name,mobile,address,email,pin_code){
//         return axios.put(process.env.VUE_APP_SERVER+'/accounts/update_client_info',{"first_name":f_name,"last_name":l_name,"Mobile_No":mobile,"address":address,"email":email,"Pin_Code":pin_code})
//     }

//     sign_up(user){
//         console.log(user)
//         return axios.post(process.env.VUE_APP_SERVER+'/accounts/sign_up/',{"email":user.email,"password":user.password,"mobile":user.mobile_number,"address":user.address,"first_name":user.first_name,"last_name":user.last_name,"Pin_Code":user.pin_code})
//     }
//     AddToCart(product_id,seller_id,client_id,quantity){
//         return axios.post(process.env.VUE_APP_SERVER+'/client/cart/',{"token":token,"Product_Id": product_id,"Client_Id": client_id,"Quantity":quantity})
//     }
//     GetCart(){
//         return axios.get(process.env.VUE_APP_SERVER+`/client/cart/`,{
//             headers: {
//               Authorization: localStorage.getItem("token")
//             }})
//     }
//     DeleteCart(cart_product_id){
        
//         return axios.delete(process.env.VUE_APP_SERVER+`/client/cart/${cart_product_id}/`,{
//             headers: {
//               Authorization: localStorage.getItem("token")
//             }})
//     }

//     checkout(amount){
//         return axios.post(process.env.VUE_APP_SERVER+'/paytm_gateway/payment/',{"amount":amount})
//     }

//     search(search_text){
//         return axios.get(process.env.VUE_APP_SERVER+`/client/search/?search=${search_text}`)
//     }

//     get_orders(){
//         return axios.get("http://localhost:8000/orders/client_get_orders/",{
//             headers: {
//               Authorization: localStorage.getItem("token")
//             }})
//     }


// }

// const ServerAPI=new API;
// export default ServerAPI;

export default  {
    reset(){
        return axios.post(process.env.VUE_APP_SERVER+'/accounts/reset_password/',{"email":'saraswatsourabh5@gmail.com'}
        )
    },
    log_in(username,password){
        // console.log(token)
        return axios.post(process.env.VUE_APP_SERVER+'/accounts/login',{"username":username,"password":password})
    },
    log_out(){
        // console.log(token)
        return axios.post(process.env.VUE_APP_SERVER+'/accounts/logout',{"token":localStorage.getItem("token")})
    },

    update_info(f_name,l_name,mobile,address,email,pin_code){
        // console.log(token)
        return axios.put(process.env.VUE_APP_SERVER+'/accounts/update_client_info',{"first_name":f_name,"last_name":l_name,"Mobile_No":mobile,"address":address,"email":email,"Pin_Code":pin_code})
    },

    sign_up(user){
        // console.log(user)
        return axios.post(process.env.VUE_APP_SERVER+'/accounts/sign_up/',{"email":user.email,"password":user.password,"mobile":user.mobile_number,"address":user.address,"first_name":user.first_name,"last_name":user.last_name,"Pin_Code":user.pin_code})
    },
    AddToCart(product_id,seller_id,client_id,quantity){
        return axios.post(process.env.VUE_APP_SERVER+'/client/cart/',{"token":localStorage.getItem("token"),"Product_Id": product_id,"Client_Id": client_id,"Quantity":quantity})
    },
    GetCart(){
        // console.log(user_id)
        return axios.get(process.env.VUE_APP_SERVER+`/client/cart/`,{
            headers: {
              Authorization: localStorage.getItem("token")
            }})
    },
    DeleteCart(cart_product_id){
        // console.log(cart_product_id+' sda')
        
        return axios.delete(process.env.VUE_APP_SERVER+`/client/cart/${cart_product_id}/`,{
            headers: {
              Authorization: localStorage.getItem("token")
            }})
    },

    checkout(amount){
        return axios.post(process.env.VUE_APP_SERVER+'/paytm_gateway/payment/',{"amount":amount})
    },

    search(search_text){
        return axios.get(process.env.VUE_APP_SERVER+`/client/search/?search=${search_text}`)
    },

    get_orders(){
        return axios.get(process.env.VUE_APP_SERVER+"/orders/client_get_orders/",{
            headers: {
              Authorization: localStorage.getItem("token")
            }})
    },
    // token
    
}






// {'verified': True, 'paytm': {'TXNID': '20200823111212800110168307401930305', 'BANKTXNID': '12889548728', 'ORDERID': 'eTJ9nz', 'TXNAMOUNT': '100.00', 'STATUS': 'TXN_SUCCESS', 'TXNTYPE': 'SALE', 'GATEWAYNAME': 'SBI', 'RESPCODE': '01', 'RESPMSG': 'Txn Success', 'BANKNAME': 'SBI', 'MID': 'zwfsDv38259108810773', 'PAYMENTMODE': 'NB', 'REFUNDAMT': '0.00', 'TXNDATE': '2020-08-23 16:45:38.0'}}
