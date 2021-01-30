<template>
  <div class="dashboard">
    <br>
    <center><h1>Dashboard</h1></center>
    
    <div class="row"> 
  <div class="column" style="background: #E94174;">
    <h3><span style="color: #fff;font-weight: bold;">TOTAL EARNINGS</span></h3>
    <center><v-icon x-large color="white">mdi-currency-inr</v-icon></center>
   <h2><center><span style="color: #fff;font-weight: bold;">{{stats.Total_Amount__sum}}</span></center></h2>
  </div>
  
  <div class="column" style="background: linear-gradient(60deg, #4297d4, #2a7db8);">
    <h3><span style="color: #fff;font-weight: bold;">TOTAL ORDERS</span></h3>
    <center><v-icon x-large color="white">mdi-bell-ring</v-icon></center>
   <h2><center><span style="color: #fff;font-weight: bold;">{{stats.total_sub_orders}} ({{stats.total_orders}})</span></center></h2>
    
  </div> 
   
  <div class="column" style="background: linear-gradient(60deg, #f55a4e, #f32c1e);">
    <h3><span style="color: #fff;font-weight: bold;">ACTIVE ORDERS</span></h3>
    <center><v-icon x-large color="white">mdi-alpha-a-circle</v-icon></center>
   <h2><center><span style="color: #fff;font-weight: bold;">{{stats.active_orders}}</span></center></h2>
    
  </div>

  <div class="column" style="background: #944dff;">
    <h3><span style="color: #fff;font-weight: bold;">OUT FOR DELIVERY ORDERS</span></h3>
    <center><v-icon x-large color="white">mdi-truck-delivery</v-icon></center>
   <h2><center><span style="color: #fff;font-weight: bold;">{{stats.out_of_delivery_orders}}</span></center></h2>
    
  </div>

  <div class="column" style="background: linear-gradient(60deg, #77b57b, #58a15c);">
    <h3><span style="color: #fff;font-weight: bold;">DELIVERED ORDERS</span></h3>
    <center><v-icon x-large color="white">mdi-home-city</v-icon></center>
   <h2><center><span style="color: #fff;font-weight: bold;">{{stats.delivered_orders}}</span></center></h2>
    
  </div>
  
  <div class="column" style="background: #DBAE58;">
    <h3><span style="color: #fff;font-weight: bold;">REJECTED ORDERS</span></h3>
    <center><v-icon x-large color="white">mdi-close-circle</v-icon></center>
   <h2><center><span style="color: #fff;font-weight: bold;">{{stats.rejected_orders}}</span></center></h2>
    
  </div>
</div>

  </div>
</template>

<script>
// @ is an alias to /src

import API from '../API/API'


export default {
  name: 'Dashboard',
  data: () => ({
    stats : '',
  }),
  components: {

  },
  created(){
    API.dashboard()
    .then((res)=>{
        this.stats = res.data
      })
      .catch(()=>{
        this.$notify({group: 'logout',title:"<h2>Error</h2>", text:'Some Server Error Is Occuring While Loading .', type:'error'})
      })
  }
}
</script>


<style scoped>

.row {
  margin-top: 15vh;
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  justify-content: space-around;
  align-content: space-around;
}

/* Create four equal columns that sits next to each other */
.column {
  /* flex: 25%; */
  width: 25vh;
  height: 30vh;
  max-width: 25%;
  padding: 30px 30px 0 30px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media (max-width: 800px) {
  .column {
    /* flex: 50%; */
    max-width: 50%;
    margin-top:3vh;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media (max-width: 600px) {
  .column {
    /* flex: 100%; */
    max-width: 100%;
  }
}

@media screen and (max-width: 426px)
{

  .row{
    margin-top:0%;
  }

}



</style>