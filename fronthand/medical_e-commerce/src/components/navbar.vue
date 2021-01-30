<template>
<div class="header"> 
    <notifications position="center" group="logout"></notifications>

    <v-app-bar
      app
      color="success"
      elevate-on-scroll
      style="min-height:70px;"
    >
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-img 
      alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../assets/company_logo.png"
          transition="fab-transition"
          width="70"
       />
      <v-toolbar-title class="hidden-sm-and-down" style="font-weight: bold;color:#FFF;">MEDICARES SOLUTION</v-toolbar-title>
     
     
      <v-spacer></v-spacer>

     <v-text-field
        class="mx-0"
        flat
        dark
        hide-details
        label="Search"
        solo-inverted
        v-model="search_text"
      >
      </v-text-field>
    <router-link :to="{ name:'Search' , query: {'searching_data':search_text}}" style="text-decoration: none;" >
      <v-btn class="hidden-md-and-up" color="white" icon>
        <v-icon large>mdi-magnify</v-icon>
      </v-btn> 
      </router-link>
    <router-link :to="{ name:'Search' , query: {'searching_data':search_text}}" style="text-decoration: none;" >
      <v-btn class="hidden-md-and-down" color="yellow" large yellow>
        <v-icon large>mdi-magnify</v-icon>
        Search
      </v-btn> 
    </router-link>

      <v-spacer></v-spacer>

      <v-btn to="/" color="white" class="hidden-sm-and-down mr-2"  text x-large>
        <v-icon large>mdi-home</v-icon>
        Home
      </v-btn>

      <v-btn  color="white" class="b2 mr-2 hidden-sm-and-down" icon>
        <v-menu transition="slide-y-transition">
           
                <template v-slot:activator="{ on, attrs }">
                  <v-icon 
                    dark
                    v-bind="attrs"
                    v-on="on"
                  large>mdi-account-circle</v-icon>
                </template>
                <br><br>
                <v-list width="300">
                  <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title v-if="$store.state.email != ''">
                      Hello, {{$store.state.first_name}}
                    </v-list-item-title>
                    <v-list-item-title v-if="$store.state.email == ''">
                      Hello, Guest
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item to="/products">
                      <v-list-item-icon>
                        <v-icon>mdi-storefront-outline</v-icon>
                      </v-list-item-icon>
                    <v-list-item-title>Products</v-list-item-title>
                  </v-list-item>
                  <v-list-item v-if="$store.state.email == ''" to="/login">
                      <v-list-item-icon>
                        <v-icon>mdi-key-outline</v-icon>
                      </v-list-item-icon>
                    <v-list-item-title>Login</v-list-item-title>
                  </v-list-item>
                  <v-list-item v-if="$store.state.email == ''" to="/sign_up">
                      <v-list-item-icon>
                        <v-icon>mdi-fountain-pen-tip</v-icon>
                      </v-list-item-icon>
                    <v-list-item-title>Sign Up</v-list-item-title>
                  </v-list-item>
                  <v-list-item v-if="$store.state.email != ''" to="/user_orders">
                    <v-list-item-icon>
                      <v-icon>mdi-truck-delivery-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Your Orders</v-list-item-title>
                  </v-list-item>
                  <v-list-item v-if="$store.state.email != ''" to="/user_settings">
                    <v-list-item-icon>
                      <v-icon>mdi-cog-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Settings</v-list-item-title>
                  </v-list-item>
                  <v-list-item v-if="$store.state.email != ''" @click="logout">
                    <v-list-item-icon>
                      <v-icon>mdi-logout</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Log Out</v-list-item-title>
                  </v-list-item>
                </v-list>
        </v-menu>      
      </v-btn>

      <v-btn to="/cart" color="white" class="hidden-sm-and-down mr-2 " text x-large>
        <v-icon large>mdi-cart</v-icon>
        Cart
      </v-btn>
      
      <v-btn to="/cart" color="white" class="hidden-md-and-up" text y-large>
        <v-icon large>mdi-cart</v-icon>
        
      </v-btn>

      
      
    </v-app-bar>



<v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-icon>mdi-account</v-icon>
        </v-list-item-avatar>

        <v-list-item-content v-if="$store.state.email != ''">
          <v-list-item-title>Hello, {{$store.state.first_name}}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-content v-if="$store.state.email == ''">
          <v-list-item-title>Hello, Demo</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <!-- <v-list-item
          v-for="item in navitems"
          :key="item.title"
          link
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>mdi-{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->




        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon>mdi-home-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>HOME</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/products">
          <v-list-item-icon>
            <v-icon>mdi-storefront-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>PRODUCTS</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="$store.state.email != ''" to="/user_orders">
          <v-list-item-icon>
            <v-icon>mdi-truck-delivery-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>YOUR ORDERS</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="$store.state.email != ''" to="/user_settings">
          <v-list-item-icon>
            <v-icon>mdi-cog-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>SETTINGS</v-list-item-title>
          </v-list-item-content>
        </v-list-item>


        <v-list-item v-if="$store.state.email == ''" to="/login">
          <v-list-item-icon>
            <v-icon>mdi-key-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>LOG IN</v-list-item-title>
          </v-list-item-content>
        </v-list-item>


        <v-list-item v-if="$store.state.email == ''" to="/sign_up">
          <v-list-item-icon>
            <v-icon>mdi-fountain-pen-tip</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>SIGN UP</v-list-item-title>
          </v-list-item-content>
        </v-list-item>


        <v-list-item v-if="$store.state.email != ''" @click="logout">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>LOG OUT</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      
      
    </v-navigation-drawer>




    



</div>
  
</template>

<script>

import API from '../API/API'

export default {
  methods: {
    logout(){
      console.log(API)
      API.log_out()
      .then(()=>{
        localStorage.removeItem("token");
        // var token_status=localStorage.removeItem("token");
        // if(token_status)
        // {
        
        
        this.$store.state.first_name = '';
        this.$store.state.last_name = '';
        this.$store.state.Mobile_No = '';
        this.$store.state.address = '';
        this.$store.state.client_id = '';
        this.$store.state.email = '';
        this.$store.state.pin_code = '';
        this.$store.state.token = '';
        // }
        this.$router.push("/")
      })
      .catch(()=>{
        this.$notify({group: 'logout',title:"<h2>Error</h2>", text:'Some Server Error Is Occuring While Logout .', type:'error'})
      })
    }
  },
    

  created() {
    
  },

  data: () => ({
      search_text:'',
      showSearchBoxIcon:true,
      drawer:false,
      verification:false,
      navitems:[
        { title: 'Home', icon: 'home', link:'/' },
          { title: 'Products', icon: 'alpha-p-circle', link:'products',},
          { title: 'Your Orders', icon: 'alpha-p-circle', link:'user_orders',},
          { title: 'Login', icon: 'alpha-p-circle', link:'login',},
          { title: 'Signup', icon: 'alpha-p-circle', link:'sign_up',},
          { title: 'Setting', icon: 'alpha-p-circle', link:'user_setting',},
          
          
      ]

  }),

  // computed: {
  //   getNav_info(){
  //     var email = this.$store.getters.getPrevArray;
  //     if(email=='')
  //     {
  //       this.navitems[1].show = "True";
  //       this.navitems[3].show = "True";
  //       this.navitems[4].show = "True";

  //     }
  //     return True
  //   }
  // },
  
};
</script>


<style>
header{
  height: 70px !important;
}
@media only screen and (max-width: 600px) {
  header{
    height: 50px !important;
  }
}
</style>