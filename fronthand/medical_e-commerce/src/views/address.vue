<template>
    <v-card>
    <v-tabs
      v-model="tab"
      background-color="#3399ff"
      centered
      dark
      icons-and-text
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
        Account Address
        <v-icon>mdi-city</v-icon>
      </v-tab>

      <v-tab href="#tab-2">
        New Address
        <v-icon>mdi-map-marker-plus</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items  v-model="tab">
      <v-tab-item
        :value="'tab-' + 1"
      >
        <v-card flat>
          <v-card-text >
            <center>
            <div class="text">Deliver To :- <br> <strong>{{$store.state.first_name}} {{$store.state.last_name}}</strong> <br>
                              Mob.- {{$store.state.Mobile_No}}<br>
                              {{$store.state.address}}, Pincode- {{$store.state.pin_code}}
            </div><br>
            <v-btn
              class="ma-2"
              color="primary"
              dark
              @click="proceed"
            >
              Proceed 
              <v-icon dark left> mdi-arrow-right</v-icon>
            </v-btn>
            </center>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item
        :value="'tab-' + 2"
      >
        <v-card flat>
          <v-card-text>
            <form>
              <v-text-field
                v-model="name"
                label="Name"
                required
                outlined
                shaped
              ></v-text-field>
              <v-text-field
                  v-model="mobile"
                  :counter="10"
                  type="number"
                  min=10
                  max=10
                  label="Mobile"
                  required
                  outlined
                  shaped
                ></v-text-field>
               <v-text-field
                  v-model="pincode"
                  :counter="9"
                  type="number"
                  min=10
                  max=10
                  label="Pincode"
                  required
                  outlined
                  shaped
                ></v-text-field>
                <v-textarea
                  v-model="address"
                  label="Address"
                  required
                  outlined
                  shaped
                ></v-textarea>
              <center>
                <v-btn
                  class="mr-4 ma-2"
                  color="primary"
                  @click="submit"
                >
                  submit
                </v-btn>
                <v-btn @click="clear" color="warning">
                  clear
                </v-btn>
                </center>
            </form>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        name:'',
        mobile:'',
        address:'',
        pincode:'',
        tab: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
    methods: {
      proceed(){
          this.$store.dispatch("orders_address",{"name":this.$store.state.first_name+' '+this.$store.state.last_name,"address": this.$store.state.address,"mobile": this.$store.state.Mobile_No,"pincode":this.$store.state.pin_code})
          this.$router.push("/paytm_gateway")

      },
      submit () {
          this.$store.dispatch("orders_address",{"name":this.name,"address": this.address,"mobile": this.mobile,"pincode":this.pincode})
          this.$router.push("/paytm_gateway")

      },
      clear(){
        // this.$v.$reset()
        this.name = ''
        this.mobile = ''
        this.address = ''
      },
    },
  }
</script>


<style scoped>
.text{
  font-size: 20px;
}
</style>