import axios from "axios";
var instance=axios.create({
    baseURL:process.env.VUE_APP_SERVER
})
// const token = localStorage.getItem('ck')

export default {
    login()
    {   
        return instance.post("/login");
    },

    authenticate(username,password)
    {
        // console.log({"username":username,"password":password})
        return axios.post(process.env.VUE_APP_SERVER+'/accounts/login',{"username":username,"password":password})
    },

    UserInfo(){
        // const token = localStorage.getItem('ck')
        return axios.post(process.env.VUE_APP_SERVER+'/accounts/sellerlogin',{"token":localStorage.getItem('ck')})
    },

    logout(){
        
        return axios.post(process.env.VUE_APP_SERVER+'/accounts/logout',{"token":localStorage.getItem('ck')})
    },

    getProducts(){
        return axios.get(process.env.VUE_APP_SERVER+`/seller/products`)
    },

    EditProducts(product_id,formData2){
        return axios.put(process.env.VUE_APP_SERVER+`/seller/products/${product_id}`,formData2)
    },

    DeleteProducts(data){
        return axios.delete(process.env.VUE_APP_SERVER+`/seller/products/${data.id}`,{
            headers: {
              Authorization: localStorage.getItem("ck")
            }})
    },

    availability(id,Availability){
        return axios.put(process.env.VUE_APP_SERVER+`/seller/availability/${id}`,{'token':localStorage.getItem('ck'),'Availability':Availability})
    },

    getCategories(){
        return axios.get(process.env.VUE_APP_SERVER+'/seller/categories')
    },

    AddCategories(id,category_name){
        return axios.post(process.env.VUE_APP_SERVER+'/seller/categories',{'token':id,'Category_Name':category_name})
    },

    EditCategories(id,category_id,category_name){
        return axios.put(process.env.VUE_APP_SERVER+`/seller/categories/${category_id}`,{'token':id,'Category_Name':category_name})
    },

    DeleteCategories(id){
        return axios.delete(process.env.VUE_APP_SERVER+`/seller/categories/${id}`,{
            headers: {
              Authorization: localStorage.getItem("ck")
            }})
    },

    getOrders(type){
        return axios.get(process.env.VUE_APP_SERVER+`/orders/seller_get_orders/${type}`,{
            headers: {
              Authorization: localStorage.getItem("ck")
            }})
    },
    
    acceptOrder(id,acceptance_status){
        return axios.post(process.env.VUE_APP_SERVER+"/orders/seller_get_orders/",{'id':id,'Acceptance_Status':acceptance_status},{
            headers: {
              Authorization: localStorage.getItem("ck")
            }})
    },

    deliver_Orders(id,delivery_out){
        return axios.post(process.env.VUE_APP_SERVER+"/orders/delivery/",{'id':id,'Delivery_Out':delivery_out},{
            headers: {
              Authorization: localStorage.getItem("ck")
            }})
    },

    get_delivery_Orders(){
        return axios.get(process.env.VUE_APP_SERVER+"/orders/delivery/",{
            headers: {
              Authorization: localStorage.getItem("ck")
            }})
    },

    delivery_stats(id,Availability){
        console.log(Availability)
        return axios.put(process.env.VUE_APP_SERVER+`/orders/delivery/${id}`,{'token':localStorage.getItem('ck'),'Availability':Availability})
    },

    dashboard(){
        return axios.get(process.env.VUE_APP_SERVER+"/orders/dashboard/",{
            headers: {
              Authorization: localStorage.getItem("ck")
            }})
    }


    // login(data,token)
    // {
    //     return instance.post("/login");
    // },
    // register()
    // {
    //     return instance.post();
    // }
}

