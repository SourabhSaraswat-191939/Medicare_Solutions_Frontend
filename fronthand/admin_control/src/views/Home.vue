<template>
  <div class="home">
   <navbar />
    <router-view class="router" style="margin-top:10vh"></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from '../components/navbar'
// import axios from 'axios'

export default {
  name: 'Home',
  components: {
    navbar,
  },

  
}
</script>

<style scoped>

.router{
  margin-left:10vh;
}

@media screen and (max-width: 426px)
{

  .router{
    margin-left:0%;
  }

}

</style>
