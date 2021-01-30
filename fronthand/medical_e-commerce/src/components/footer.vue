<template>
    <div>


  <v-footer
    dark
    padless
    color="primary lighten-1"
  >
    
    <v-card
      flat
      class="mx-auto primary lighten-1 lighten-1 white--text d-flex justify-space-around"
    >
    
      <!-- <v-card-text> -->
        <!-- <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn> -->
      <!-- </v-card-text> -->
<v-card class="transparent my-auto">
      <v-img 
      alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../assets/company_logo.png"
          transition="fab-transition"
          width="120"
       />
    </v-card>

  <v-card flat class="primary lighten-1 lighten-1 white--text text-center" width="auto">
    <v-card-text class="white--text">
      <h2><b> CONTACT US </b></h2>
    </v-card-text>
      <v-row class="white--text pt-0 mx-0">
        MEDICARES SOLUTION
      </v-row>
      <v-row class="white--text pt-0 mx-0">
        Awas Vikas, Rudrapur
      </v-row>
      <v-row class="white--text pt-0 mx-0">
        Distt. U. S. Nagar,Uttarakhand 
      </v-row>
      <v-row class="white--text pt-0 mx-0">
        medicaressolution@gmail.com
      </v-row>
      <v-row class="white--text pt-0 mx-0">
        Mob. No. 7454048125, 9917409907
      </v-row>
      </v-card>
    </v-card>
    <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <a style="text-decoration: none;color:#fff" href="https://www.linkedin.com/in/sourabh-saraswat-1681b61a5/" target="_blank"><strong href="https://www.linkedin.com/in/sourabh-saraswat-1681b61a5/">Designed By :- Sourabh Saraswat <v-avatar>
      <img
        src="../assets/developer.jpg"
        alt="Sourabh Saraswat"
      >
    </v-avatar></strong></a>
      </v-col>
  </v-footer>




        <!-- <v-footer
    color="primary lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        :to="link.to"
        class="my-2"
      >
        {{ link.name }}
      </v-btn>
      <v-btn 
        color="white"
        text
        rounded
        
        href="Guide_Medicare_Solutions.pdf"
        target="_blank"
        class="my-2">
        Contact Us
        </v-btn>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Designed By :- Sourabh Saraswat <v-avatar>
      <img
        src="../assets/developer.jpg"
        alt="John"
      >
    </v-avatar></strong>
      </v-col>
    </v-row>
  </v-footer> -->
    </div>
</template>



<script>
  export default {
    data: () => ({
      // pdf_guide:require("@/assets/cross.png"),
      // links: [
      //   {name:'Home',to:''},
      //   {name:'About Us',to:''},
      //   {name:'Team',to:''},
      //   {name:'Services',to:''},
      //   {name:'Guide',to:''},
      //   // {name:'Contact Us',to:'/cart'},
      // ],
      // icons: [
      //   'mdi-facebook',
      //   'mdi-twitter',
      //   'mdi-linkedin',
      //   'mdi-instagram',
      // ],
    }),
  }
</script>