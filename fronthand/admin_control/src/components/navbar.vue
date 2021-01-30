<template>
<div class="header">

    <notifications position="center" group="logout" />
    <v-app-bar
      app
      color="#003f5c"
      elevate-on-scroll
      style="height:10vh;"
      dark  
    >
    <v-btn class="hidden-md-and-up" round @click="drawer=!drawer"><v-icon>mdi-menu</v-icon></v-btn>

     <v-spacer></v-spacer>
      
      <v-img 
      alt="Vuetify Logo"
          class="shrink mr-4"
          contain
          src="@/assets/company_logo2.png"
          transition="fab-transition"
          width="70"
       />
      <v-toolbar-title class="font-weight-bold ">MEDICARES SOLUTIONS</v-toolbar-title>
     
      <v-spacer></v-spacer>
      <v-btn @click="logout">
     <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>



<v-card>
    <v-navigation-drawer
      v-model="drawer"
      dark
      fixed
      :mini-variant.sync="size_check"
      :permanent="size_check"
    
      :expand-on-hover="size_check"
      style="margin-top:10vh;height:90%;"
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="@/assets/company_logo2.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>MEDICARES</v-list-item-title>

        <!-- <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn> -->
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in navitems"
          :key="item.title"
          link
          :to='item.link'
        >
          <v-list-item-icon>
            <v-icon>mdi-{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>



    



</div>
  
</template>

<script>

import API from '../API/API'

export default {
  components: {
    
  },

  computed: {
    size_check(){
      const width = screen.availWidth
      if (width<960)
        return false
      else
        return true


    }
  },

  data: () => ({
      perm:true,
      showSearchBoxIcon:true,
      drawer:false,
      navitems:[
        { title: 'Dashboard', icon: 'home', link:'/' },
          { title: 'Products', icon: 'bottle-tonic-plus', link:'/products' },
          { title: 'Categories', icon: 'beaker-plus-outline', link:'/categories' },
          { title: 'Orders', icon: 'bell-ring', link:'/orders' },
          { title: 'Active', icon: 'alpha-a-circle', link:'/active_orders' },
          { title: 'Delivery', icon: 'truck-delivery', link:'/delivery' },
          { title: 'Rejected', icon: 'alpha-r-circle', link:'/rejected_orders' },


          // { title: 'Admin', icon: 'gavel', link: '' },
      ],
      mini:true,

  }),

  methods: {
    logout(){
      API.logout()
      .then(()=>{
        localStorage.removeItem("ck")

        this.$store.state.first_name = '';
        this.$store.state.last_name = '';
        this.$store.state.email = '';
        this.$store.state.token = '';

        this.$router.push("/login")
      })
      .catch(()=>{
        this.$notify({group: 'logout',title:"<h2>Error</h2>", text:'Some Server Error Is Occuring While Logout .', type:'error'})
      })
    }

  },
};
</script>
