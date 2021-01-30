<template>
    <div>
        <div class="flex-container">
      <div class="main">
        <!-- {{mine}} -->
        <!-- {{products}} -->
        <notifications position="bottom right" group="add_product"/>
        <h1 class="mainhead">We serve <span>The Best</span></h1>
        <p>here , for what you were searching.....</p>
        <ul class="cards">
          {{$store.getters.getPreviousPageArray}}
          <li class="cards_item" v-for=" (datas,key) in products" :key="key">
            <div class="card">
              <div class="card_image">
                
                <!-- <a target="_blank"><img :src="'http://localhost:8000/seller'+datas.Image"></a> -->
                
                <a target="_blank"><img :src="datas.Image | ImageUrl"></a>

              </div>
              
              <div class="card_content">
                <router-link :to="{ name:'Product_Details' , query: {product_id:JSON.stringify(datas)}}" style="text-decoration: none;" >
                <h2 class="card_title">{{datas.Product_Name}}</h2>
                <p class="card_text">
                  Price: <span>{{datas.Price}}</span> 
                </p>
                <p class="card_text">
                  Category: <span>{{datas.Category.Category_Name}}</span> 
                </p>
                <p class="card_text">
                  <!-- {{datas.Seller.first_name}} {{datas.Seller.last_name}} -->
                </p>
              </router-link>

                <button class="btn card_btn" @click="AddToCart(datas)">Add To Cart</button>
              </div>
            </div>
          </li>
          
          
          
        </ul>
      </div>
    </div>
<center>
  <!-- <div class="text-center"> -->
    <!-- <v-pagination
      v-model="page"
      :length="4"
      next-icon="ok"
      
    ></v-pagination> -->
  <!-- </div> -->
  <div style="display:block;">
    <button class="page_change" :disabled="page<=1" @click="page--">Previous</button> 
    &nbsp;
    <button class="page_change" :disabled="!next" @click="page++">Next</button>
  </div>
      <!-- {{next}}<br><br>
      {{msg}}
      {{page}} -->

     
</center>




    
    </div>
</template>
<script>
import axios from 'axios'
import API from '../API/API'

export default {
  data(){
    return{
      products:'',
      product_id:'',
      seller_id:'',
      client_id:'',
      next:'',
      page:1,
      msg:'',
    }
  },

    created(){

        axios.get(process.env.VUE_APP_SERVER+'/client/products')
        .then((response) => {
            // console.log(response.data)
            this.next = response.data.next
            this.$store.state.prevArray = response.data.results
            // console.log(this.$store.state.prevArray)
            this.products = response.data.results
        })
        .catch((err) =>{
            console.log(err.data)
        })
    },
    watch: {
      page: function(){
        console.log(this.page)
        this.changePage()
      }
    },
    methods:{
      // reset(){
      //   location.href="http://127.0.0.1:8000/accounts/reset_password/"
      // },
      AddToCart(datas){
        
        this.product_id = datas.id
        this.client_id = this.$store.state.client_id
        
        if(this.$store.state.client_id)
        {
          API.AddToCart(this.product_id,this.seller_id,this.client_id,1)
          .then(() => {
            // console.log(response.data)
            this.$notify({ group: 'add_product',title: "Successfull", text: 'Product Added Successfully' ,type:'success'})
          })
          .catch(() => {
            // console.log(err)

            this.$notify({ group: 'add_product',title: "Error", text: 'Error While Adding Product' ,type:'error'})
          })
        }
        else{
          alert("Login First")
          this.$router.push('/login')
        }
      },
    changePage()
    {
        axios.get('http://45.15.25.219/api/client/products/?page='+this.page)
        .then((response) => {
            this.$store.dispatch('getPrevArray',response.data.results)
            this.next = response.data.next
            this.products = response.data.results
            window.scroll({
              top: 0,
              behavior: 'smooth'
            });
        })
        .catch((err) =>{
            console.log(err.data)
            if(!this.next)
            {
              this.page--;
            }
        })
    },
  
     
    },


    computed:{
      getPrevPageArray()
      {
        return this.$store.getters.getPrevArray;
      },
      currentPageArray()
      {
        return this.products;
      },
      

    },

    filters:{
        ImageUrl(value)
        {
          // var url="http://localhost:8000/seller/"+value.split("http://localhost:8000/")[1];
          return "http://45.15.25.219/api/seller/"+value.split("http://45.15.25.219/")[1];
        }
    }

}
</script>

<style scoped>

/* Font */
@import url("https://fonts.googleapis.com/css?family=Quicksand:400,700");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.page_change {
  margin-top: 40px;
  margin-bottom: 10px;
  margin-left: 10px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  width: 10%;
  font-size: 15px;
  font-weight: bold;
}
.page_change:hover {
  background-color: rgb(23, 201, 100);
  color: white;
  transition: 0.5s;
  cursor: pointer;
}


body {
  color: #272727;
  font-family: "Quicksand", serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
  padding: 0;
  margin: 0;
}
.flex-container {
  display: flex;
  /* margin-top: 10vh; */
  margin-left: 1vw;
  margin-right: 1vw;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
}
.main {
  /* max-width: 1200px; */
  margin: 0;
  margin-top: 2vh;
  width: 70vw;
  flex: 5;
  order: 2;
  border: 1px solid rgba(0, 0, 0, 0.3);
}
.mainhead {
  font-size: 45px;
  font-weight: 400;
  text-align: start;
}
.mainhead span {
  font-weight: 800;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
  margin: 0;
  padding: 1rem 0 0 0;
  /* border: 1px solid rgba(0, 0, 0, 0.3); */
}
.cards_item {
  display: flex;
  justify-content: center;
  margin: 0 0 0 0;
  /* padding: 0 10px 0 10px; */
  /* padding: 0; */
  width: 100%;
  /* border: 1px solid rgba(0, 0, 0, 0.3); */
}
.card {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 300px;
  margin-bottom: 30px;
  /* border: 1px solid rgba(0, 0, 0, 0.3); */
  
}

.card_content {
  padding: 1rem;
  height: 178px;
  /* background: linear-gradient(to bottom left, #ef8d9c 40%, #ffc39e 100%); */
}

.card_title {
  color: #000000;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0px;
}

.card_text {
  color: #000000;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  font-weight: 400;
}
.card_text span{
  font-weight: 800;
}
img {
  height: 150px;
  width: 300px;
  vertical-align: middle;
}

.btn {
  color: #fff;
  padding: 0.8rem;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: 400;
  display: block;
  width: 100%;
  cursor: pointer;
  border: none;
  background: #3399ff;
}
.btn:hover {
  background-color: rgb(23, 201, 100);
}
footer {
  text-align: center;
}
/* Responsive */
@media (min-width: 40rem) {
  .cards_item {
    width: 50%;
  }
 
}

@media (min-width: 56rem) {
  .cards_item {
    width: 33.3333%;
  }
}

@media (max-width: 768px) {
  .page_change{
    width: 10%;
    font-size: 10px;
  }
  .flex-container {
    flex-direction: column;
  }
  .main {
    width: 100%;
    /* border-top: 1px solid rgba(0, 0, 0, 0.3); */
  }
  .mainhead {
    font-size: 40px;
  }

}
@media (max-width: 428px) {

  .page_change{
    width: 16%;
    font-size: 10px;
  }

  .flex-container {
    flex-direction: column;
  }
  .sidemenu {
    width: 100%;
  }
  .main {
    width: 100%;
  }
  .card{
    display: flex;
    flex-direction: row;
    width: 400px;
    box-shadow: none;
  }
  .cards_item{
    margin: 0 0 0.5rem 0;
    border-bottom: 1px solid lightgray;
    padding: 0;
  }
  .card_image{
    width: 100px;
    height: 100px;
  }
  .card_image img{
    height:80px ;
    width:80px ;
    margin: 10px;
  }
  .card_content{
    width: 300px;
    height: 100px;
    padding: 0.5rem;
  }
  .card_title{
    font-size: 15px;
    margin: 0;
  }
  .card_text{
    font-size: 10px;
    margin: 0;
  }
  .card_btn{
    font-size: 15px;
    margin: 10px 0 0 0;
    height: 17px;
    line-height: 15px;
    justify-content: center;
    height: 20px;
    padding: 0;
  }
  .cards li:first-child{
   border-top: 1px solid lightgrey; 
  } 
}


</style>