<template>
  <v-app>
    
   <router-view >
   </router-view>

  </v-app>
</template>

<script>
// import home from './components/home'
// import foter from './components/footer'

import axios from 'axios'

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    //
  }),
  mounted(){
  
    const token=localStorage.getItem("ck");
    
    if(token)
    {
      axios.post(process.env.VUE_APP_SERVER+'/accounts/sellerlogin',{"token":localStorage.getItem("ck")})
      .then((response)=>
      {
        this.$store.dispatch('SellerData', response.data)
        this.$router.push("/");
      })
      .catch(()=>{
            localStorage.removeItem('ck')   
            this.$router.push("/login");
      })
    }
    else{
        this.$router.push("/login")
        }
    
  },
};
</script>