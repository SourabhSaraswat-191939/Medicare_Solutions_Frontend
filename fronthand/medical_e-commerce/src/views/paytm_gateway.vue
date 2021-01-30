<template>

    <div>

         <center>
         <h1>Please do not refresh this page...</h1>
      </center>
      <form method="POST" name="payment_form" action="http://45.15.25.219/api/paytm_gateway/payment/">
               <input type="number" :value="Mobile_No" name="mobile" hidden>
               <input type="number" step="0.01" :value="total_amount" name="amount" hidden>
               <input type="text" :value="address" name="address" hidden>
               <input type="text" name="order_items" :value="orders" hidden>
               <!-- <input type="submit" value="SUBMIT"> -->
      </form>
      
    </div>
    
</template>

<script>


export default {
   data() {
      return {
         Mobile_No:'',
         total_amount:'',
         address:'',
         orders:'',
         status:0,
      }
   },
   created() {
      this.orders = JSON.stringify(this.$store.state.ordersArray)
      this.total_amount = this.$store.state.ordersAmount
      this.address = this.$store.state.orderName+', '+this.$store.state.orderAddress+", Pincode- "+this.$store.state.orderPincode
      this.Mobile_No = this.$store.state.orderMobile
   },
   watch: {
    status: function () {
       document.payment_form.submit();
    },
  },

   mounted() {
      // this.formAutoSubmit()
      this.status = 1
   },
   // methods: {
   //    formAutoSubmit(){
   //       console.log("ok")
   //    // var frm = document.getElementById("payment_form");
   //    document.payment_form.submit();
   //    // frm.submit();
   //    }
   // },
}
</script>

<style scoped>

</style>