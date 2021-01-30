<template>
  <v-app>
    
   <navbar />
   <router-view style="height:unset;" class="router_view">
   </router-view>

  <!-- <home class="my-16" />
    <div style="height:200vh;background:white;"></div>-->
  <foter style="width:100%;"/> 
  </v-app>
</template>

<script>
import navbar from './components/navbar'
// import home from './components/home'
import foter from './components/footer'

import axios from 'axios'

export default {
  name: 'App',
  components: {
    navbar,
    // home,
    foter
  },
  data: () => ({
    //
  }),

   mounted(){
  
    const token=localStorage.getItem("token");
    
    if(token)
    {
      axios.post(process.env.VUE_APP_SERVER+'/accounts/clientlogin',{"token":token})
      .then((response)=>
      {
        // console.log(response.data)
        this.$store.dispatch('ClientData', response.data)
        
        // this.$router.push("/");
      })
      .catch(()=>{
            localStorage.removeItem('token')   
      })
    }
    
  },

};
</script>

<style scoped>
.router_view{
  margin-top: 8vh;
  min-height: 60vh;
}
</style>