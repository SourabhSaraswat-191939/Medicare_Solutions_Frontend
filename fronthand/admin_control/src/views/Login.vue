<template>
  <v-app style="background-image: linear-gradient(-45deg, #002984 50%, #f76e2a 0%);">
    
    <notifications position="center" group="login"/>


    <v-card width="400" class="mx-auto my-auto" style="margin-top:0">
      <v-card-title>
      <h1 class="display-1">LOGIN</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
          label="USERNAME"
          v-model="username"
          prepend-icon="mdi-account-circle"
          />
          <v-text-field 
          :type="showPassword ? 'text':'password'" 
          v-model="password"
          label="PASSWORD" 
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye':'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
      <!-- <v-btn color="success">Register</v-btn> -->
      <v-spacer />
      <v-btn color="info" @click="authenticate">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
import axios from 'axios'
import API from "../API/API"
export default {
  name: 'SellerLogin',
  props: {
    // msg: String
  },
  data() {
    return {
      showPassword:false,
      verification:false,
      username : '',
      password : '',
      requestStatus:'not requested',
      
    }
  },
  methods: {

    authenticate(){
    API.authenticate(this.username,this.password)
    // axios.post(process.env.VUE_APP_SERVER+'/accounts/login',{"username":this.username,"password":this.password})
      .then(response => {
          localStorage.setItem("ck",response.data.token);
          this.verification = true;
          this.$store.dispatch('AuthTokenState', response.data.token)
          // code for securing normal user login
    
        
          axios.post(process.env.VUE_APP_SERVER+'/accounts/sellerlogin',{"token":localStorage.getItem("ck")})
          .then((response)=>
          {
            this.$store.dispatch('SellerData', response.data)
            this.$router.push("/")
          })
          .catch(()=>{
                // localStorage.removeItem('token')   
                console.log("failed token")
                this.$router.push("/login")

          })
        
        
          this.$router.push("/login")
        

        // end of code for securing normal user login
      })
      .catch(()=> {
        
        this.verification=false;
        this.$notify({ group: 'login',title: "<h2>Error</h2>", text: 'Please Check Your Email or Password .' ,type:'error'})
      })
    }
  },

  async beforeRouteEnter (to, from, next) {
  
    const token=localStorage.getItem("ck");
    
    if(token)
    {
      await axios.post(process.env.VUE_APP_SERVER+'/accounts/sellerlogin',{"token":token})
      .then((response)=>
      {
        this.$store.dispatch('SellerData', response.data)
        next("/");
      })
      .catch(()=>{
            // localStorage.removeItem('token')   
      })
    }
    next();
  },


 mounted(){
  
    const token=localStorage.getItem("ck");
    
    if(token)
    {
      axios.post(process.env.VUE_APP_SERVER+'/accounts/sellerlogin',{"token":token})
      .then((response)=>
      {
        this.$store.dispatch('SellerData', response.data)
        
        this.$router.push("/");
      })
      .catch(()=>{
            localStorage.removeItem('token')   
      })
    }
    
  },
 
}
</script>
