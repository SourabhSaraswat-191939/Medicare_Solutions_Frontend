<template>
    <div style="margin-top:10vh;">

        <main>
        <notifications position="bottom right" group="delete_product"/>
        
        <div class="basket">
          
          <div class="basket-king">
          <center style="color: #fff; font-size: 2vh;"><b>Your Cart Items  {{distance}}</b></center>
          <div class="basket-labels">
            <ul>
              <li class="item item-heading"><b>Item</b></li>
              <li class="price"><b>Price</b></li>
              <li class="quantity"><b>Quantity</b></li>
              <li class="subtotal"><b>Subtotal</b></li>
            </ul>
          </div>
          <div class="basket-product" v-for="(datas,key) in cart_items" :key="key">
            <div class="item">
              <div class="remove">
                <button @click="DeleteCart(datas.id,key)" class="crossbutton">&times;</button>
             </div>
              <div class="product-image">
              
                <img :src="datas.Product_Id.Image | ImageUrl" alt="Placholder Image 2" class="product-frame">
              </div>
              <div class="product-details">
                <h1><strong><span class="item-quantity">{{datas.Product_Id.Product_Name}}</span></strong></h1>
                
                
              </div>
            </div>
            <div class="price price1">{{datas.Product_Id.Price}}</div>
            <div class="wrap quantity">
              <button :disabled="datas.Quantity<=1" type="button" id="sub" style="width:20%;" class="sub" @click="datas.Quantity--">-</button>
              <input style="width:20px;" :value="datas.Quantity" min="1" max="100" />
              <button type="button" id="sub" style="width:20%;" class="sub" @click="datas.Quantity++">+</button>
            </div>
            <div class="subtotal subtotal1">{{datas.Quantity * datas.Product_Id.Price}}</div>
          </div>
          
          
          
        </div>
        </div>
        <aside>
          <div class="summary">
            <div class="summary-total-items"><span class="total-items"></span><strong>PRICE DETAILS</strong></div>
            <div class="summary-subtotal">
              <div class="subtotal-title">Grand Total</div>
              <div class="subtotal-value final-value" id="basket-subtotal">{{Grand_Total}}</div>
              <div class="summary-promo hide">
                <div class="promo-title">Promotion</div>
                <div class="promo-value final-value" id="basket-promo"></div>
              </div>
            </div>
            
              <!-- <div class="summary-subtotal">
                <div class="subtotal-title">Service Charges</div>
                <div class="subtotal-value final-value" id="basket-subtotal">{{service_charge}}</div>
              </div> -->
                <div class="summary-subtotal">
                    <div class="subtotal-title">Total Delivery Charges</div>
                    <div class="subtotal-value final-value" id="basket-subtotal">40</div>
                </div>
                <div class="basket-module">
                  <label for="promo-code">Check Product Availability At Your Pincode</label>
                  <input id="promo-code" v-model="client_pincode" type="text" name="promo-code" maxlength="10" placeholder="Enter Pincode" class="promo-code-field">
                  <button class="promo-code-cta" @click="check_delivery">Apply</button>
                </div> 
                  <center>{{delivery_status}}</center>
            
        
            <div class="summary-total">
              <div class="total-title">Total</div>
              <div class="total-value final-value" id="basket-total">{{Grand_Total_Price}}</div>
            </div>
            <div class="summary-checkout">
              <router-link to="Address">
              <button class="checkout-cta" @click="address_page">Go to Secure Checkout</button>
              </router-link>
            </div>
          </div>
        </aside>
      </main> 


<!-- <button @click="print">Print</button> -->
    </div>
</template>



<script>

// import axios from 'axios'
import API from '../API/API'
import pincode from 'pincode-distance'


export default {

    data(){
      return{
        client_pincode:'',
        delivery_status:'',
        distance:'',
        service_charge:0,
        delivery_charge:0,
        cart_items:'',
        Total_Price:0,
        Grand_Total_Price:0,
      }
    },
    computed:{
      // var(){
      //   return this.$store.getters.
      //   }
      Grand_Total()
      {
        var total=0;
        for (var key in this.cart_items) {
              total = total + this.cart_items[key].Product_Id.Price * this.cart_items[key].Quantity
        }  
              return total;
      }
    },
    watch: {
      Grand_Total:{
        handler: function (total) {
          this.Total_Price=total  
          this.Grand_Total_Price = total
          this.Grand_Total_Price = Number((this.Grand_Total_Price).toFixed(2))
      } 
      }
    },

    mounted(){
      
    },


    beforeMount(){
      this.GetCart();
    },
    created(){
        
    },

    methods:{

        check_delivery(){
          const Pincode = new pincode()
          this.distance = Pincode.getDistance("263153", this.client_pincode);
          if(0< parseInt(this.distance) &&  parseInt(this.distance)<=100)
          {
            this.delivery_status = 'Delivery Available'
          }
          else
            this.delivery_status = 'Delivery Not Available'
          
        },

    //     // print(){
    //     //   console.log(this.cart_items)
    //     //   this.$store.dispatch('orders',JSON.stringify(this.cart_items)) 
    //     // },
        
        GetCart(){     
            // const user_id = this.$store.state.client_id
            if(this.$store.state.client_id)
            {
              API.GetCart()
              .then((res) => {
                this.cart_items = res.data
              })
              .catch((err) => {
                this.cart_items = err.data
              })
            }
            else{
              alert("Login First")
              this.$router.push('/login')
            }
        },
        DeleteCart(id,index){     
            var cart_product_id = id
            
            API.DeleteCart(cart_product_id)
            .then(() => {
              this.cart_items.splice(index,1);
              this.$notify({ group: 'delete_product',title: "Successfull", text: 'Product Deleted From Cart Successfully' ,type:'success'})
            })
            .catch((err) => {
              this.$notify({ group: 'delete_product',title: "Error", text: 'Some Server Side Error Is Occuring While Product Deleting From Cart . Please Try Again After Some Time .' ,type:'error'})
              this.cart_items.splice(index,0);
              this.cart_items = err.data
            })
        },


      address_page(){
        var payload = {'amount':this.Grand_Total_Price,'order':this.cart_items}
        this.$store.dispatch('orders',payload) 
          this.$router.push("/address")
      },

    },
    filters:
    {
      ImageUrl(value)
      {
        // alert(value)
        var result = process.env.VUE_APP_SERVER+"/client"+value
        return result;
      }
    },



}
</script>




<style scoped>

  @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700,600);

html,
html a {
  -webkit-font-smoothing: antialiased;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
}

body {

  color: #666;
  font-family: 'Open Sans', sans-serif;
  font-size: 62.5%;
  margin: 0 auto;
}





a {
  border: 0 none;
  outline: 0;
  text-decoration: none;
}

strong {
  font-weight: bold;
}

p {
  margin: 0.75rem 0 0;
}

h1 {
  font-size: 0.75rem;
  font-weight: normal;
  margin: 0;
  padding: 0;
}

input,
button {
  border: 0 none;
  outline: 0 none;
  border-radius: 3px;
  
  margin: 0 5px !important;
}

button {
  background-color: #3399ff;
  color: #fff;
}

button:hover,
button:focus {
  background-color: #0066ff;
  box-shadow: 0 2px 5px rgba(0,0,0,.5)
}

img,
.basket-module,
.basket-labels,
.basket-product {
  width: 100%;
}

input,
button,
.basket,
.basket-labels,
.item,
.price,
.quantity,
.subtotal,
.basket-product,
.product-image,
.product-details {
  float: left;
}

.price:before,
.subtotal:before,
.subtotal-value:before,
.total-value:before,
.promo-value:before {
  content: '₹ ';
}

.hide {
  display: none;
}

main {
  clear: both;
  font-size: 0.75rem;
  margin: 0 auto;
  margin-bottom: 10vh;
  overflow: hidden;
  padding: 1rem 0;
  width: 960px;
}
.basket-king{
  background-color: #3399ff;
  border: 1px solid #aaa;
  padding: 1rem;
  position: relative;
  width: 600px;
  height: auto;
  box-sizing: border-box;
/*  margin-top: 80px;*/
}
.basket,
aside {
  padding: 0 1rem;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.basket {
  width: 70%;
  height: unset;
  min-height: 60vh;
}

.basket-module {
  color: #111;
  justify-content: center;
  margin-left: 17px;
  margin-top: 10px;
  display: block;
  padding-bottom:20%;
}

label {
  display: block;
  margin-bottom: 0.3125rem;
}

.promo-code-field {
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-transform: uppercase;
  transition: all 0.2s linear;
  width: 48%;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  -o-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
}

.promo-code-field:hover,
.promo-code-field:focus {
  border: 1px solid #3399ff;
}

.promo-code-cta {
  border-radius: 4px;
  font-size: 0.625rem;
  margin-left: 0.625rem;
  padding: 0.6875rem 1.25rem 0.625rem;
}

.basket-labels {
  border-top: 1px solid  #3399ff;
  border-bottom: 1px solid #3399ff;
  margin-top: 1.625rem;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  color: #111;
  display: inline-block;
  padding: 0.625rem 0;
}

li.price:before,
li.subtotal:before {
  content: '';
}

.item {
  width: 55%;
}

.price,
.quantity,
.subtotal {
  width: 15%;
}
.wrap{
  display: flex;
}
.count{
  width: 20px;
  text-align: center;
  border: 1px solid #aaa;
}
.count:hover{
 background-color: #99d6ff;
}

.subtotal {
  text-align: right;
}
.price1, 
.wrap, 
.subtotal1{
  margin-top: 25px;
}
.remove {
  /* bottom: 1.125rem; */
  top:0;
  float: right;
  position: absolute;
  right: 0;
  text-align: right;
  width: 45%;
}

.remove button {
  background-color: transparent;
  color: #777;
  float: none;
  width: 10%;
  font-size: 2vh;
  /* text-decoration: underline; */
  text-transform: uppercase;
}

.item-heading {
  padding-left: 4.375rem;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.basket-product {
  border-bottom: 1px solid #ccc;
  padding: 1rem 0;
  position: relative;
}

.product-image {
  width: 30%;
}

.product-details {
  width: 65%;
  height: 10%;
}

/* .product-frame {
  border: 1px solid #aaa;
} */

.product-details {
  padding: 0 1.5rem;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.quantity-field {
  background-color: #fff;
  border: 1px solid #aaa;
  border-radius: 4px;
  font-size: 0.625rem;
  padding: 2px;
  width: 3.75rem;
}
.quantity-field:hover{
  background: #cce0ff;
}
aside {
  float: right;
  position: relative;
  width: 30%;
}

.summary {
  background-color: #fff;
  border: 1px solid #aaa;
  padding: 1rem;
  position: fixed;
  margin-top: 80px;
  width: 300px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.summary-total-items {
  color: #666;
  font-size: 0.875rem;
  text-align: center;
}

.summary-subtotal,
.summary-total {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  clear: both;
  margin: 1rem 0;
    font-weight: bold;
  overflow: hidden;
  padding: 0.5rem 0;
}

.subtotal-title,
.subtotal-value,
.total-title,
.total-value,
.promo-title,
.promo-value {
  color: #111;
  float: left;
  width: 50%;
}

.summary-promo {
  -webkit-transition: all .3s ease;
  -moz-transition: all .3s ease;
  -o-transition: all .3s ease;
  transition: all .3s ease;
}

.promo-title {
  float: left;
  width: 70%;
}

.promo-value {
  color: #8B0000;
  float: left;
  text-align: right;
  width: 30%;
}

.summary-delivery {
  padding-bottom: 3rem;
}

.subtotal-value,
.total-value {
  text-align: right;
}

.total-title {
  font-weight: bold;
  text-transform: uppercase;
}

.summary-checkout {
  display: block;
}

.checkout-cta {
  display: block;
  float: none;
  font-size: 0.75rem;
  text-align: center;
  text-transform: uppercase;
  padding: 0.625rem 0;
  width: 100%;
}

.summary-delivery-selection {
  background-color: #ccc;
  border: 1px solid #aaa;
  border-radius: 4px;
  display: block;
  font-size: 0.625rem;
  height: 34px;
  width: 100%;
}
/* number-button*/
.nice-number {
  display: inline-flex;
  justify-content: stretch;
}

.nice-number input {
  vertical-align: middle;
  -moz-appearance: textfield;
  box-sizing: content-box;
  margin: 0;
  text-align: center;
}

.nice-number input::-webkit-inner-spin-button,
.nice-number input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
@media screen and (max-width: 640px) {
  /* .basket{ */
    /* height: 10vh; */
  /* } */
  aside,
  .basket,
  .summary,

  .item,
  .remove {
    width: 100%;
  }
  .basket-king{
    width: 100%;
    height: auto;
    margin-bottom: 20vh;
  }

  .basket-labels {
    display: none;
  }
.basket-module{
  margin-left: 6px;
}
  .item {
    margin-bottom: 1rem;
  }
  .product-image {
    width: 40%;
  }
  .product-details {
    width: 60%;
  }
  .price,
  .subtotal {
    width: 33%;
  }
  .price1, 
  .wrap, 
  .subtotal1{
  margin-top: 0px;
  }
  .quantity {
    text-align: center;
    width: 34%;
  }
  .quantity-field {
    float: none;
  }
  .remove {
    bottom: 0;
    text-align: right;
    margin-top: 0.75rem;
    position: relative;
  }
  .remove button {
    padding: 0;
  }
  .summary {
    margin-top: 1.25rem;
    position: relative;
  }
}

@media screen and (min-width: 641px) and (max-width: 960px) {
  aside {
    padding: 0 1rem 0 0;
  }
  .summary {
    width: 28%;
  }
  .basket-king{
    width: 100%;
  
  }
}

@media screen and (max-width: 960px) {
  main {
    width: 100%;
  }
  .product-details {
    padding: 0 1rem;
  }
  
}




</style>