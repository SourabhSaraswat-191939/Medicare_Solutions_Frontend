<template>
    <div class="your_orders">
        <div class="container-fluid my-5 d-flex justify-content-center">
    <div class="card card-1">
        <div class="card-header bg-white">
            <div class="media flex-sm-row flex-column-reverse justify-content-between ">
                <div class="col my-auto">
                    <h4 class="mb-0">Thanks for your Orders,<span class="change-color">{{$store.state.first_name}}</span> !</h4>
                </div>
                <div class="col-auto text-center my-auto pl-0 pt-sm-4"> <v-icon x-large id="medical_bag">mdi-medical-bag</v-icon><v-icon x-large id="medical_pill">mdi-pill</v-icon>
                    <p class="mb-4 pt-10 Glasses">Medical For Everyone</p>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="row justify-content-between mb-3">
                <div class="col-auto">
                    <h6 class="color-1 mb-0 change-color">Receipt</h6>
                </div>
                <!-- <div class="col-auto "> <small>Receipt Voucher : 1KAU9-84UIL</small> </div> -->
            </div>
            <div class="row" v-for="(data,key) in my_orders" :key="key">
                <div class="col">
                    <div class="card card-2">
                        <div class="card-body">
                                <div class="col mb-3"> <small><v-icon>mdi-cart</v-icon> Order Id : {{data.Orders_ID.Order_ID}}<span></span></small> </div>
                            <div class="media">
                                <div class="sq align-self-center "> <img class="img-fluid my-auto align-self-center mr-2 mr-md-4 pl-0 p-0 m-0" :src="'http://45.15.25.219/api/seller'+data.Product.Product_Image" width="135" height="135" /> </div>
                                <div class="media-body my-auto text-right">
                                    <div class="row my-auto flex-column flex-md-row">
                                        <div class="col my-auto">
                                            <h6 class="mb-0"> {{data.Product.Product_Name}}</h6>
                                        </div>
                                        <!-- <div class="col-auto my-auto"> <small>Golden Rim </small></div> -->
                                        <div class="col my-auto"> <small>Categ. : {{data.Product.Product_Category}}</small></div>
                                        <div class="col my-auto"> <small>Qty : {{data.Quantity}}</small></div>
                                        <div class="col my-auto">
                                            <h6 class="mb-0">&#8377;{{data.Product.Product_Price}}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr class="my-3 ">
                            <div class="row">
                                <div class="col-md-3 mb-3"> <small> Track Order <span><i class=" ml-2 fa fa-refresh" aria-hidden="true"></i></span></small> </div>
                                <div class="col mt-auto">
                                    <div class="progress my-auto">
                                            <div v-if="data.Delivery_Status==null & data.Acceptance_Status==true" class="progress-bar progress-bar rounded" style="width: 30%" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div v-if="data.Delivery_Status==false & data.Acceptance_Status==true" class="progress-bar progress-bar rounded" style="width: 60%" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div v-if="data.Delivery_Status==true & data.Acceptance_Status==true" class="progress-bar progress-bar rounded" style="width: 100%" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div v-else class="progress-bar progress-bar rounded" style="width: 0%" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        
                                    </div>
                                    <div class="media row justify-content-between ">
                                        <div class="col-auto text-right"><span> <small class="text-right mr-sm-2"> Order Acceptence</small> <i class="fa fa-circle active"></i> </span></div>
                                        <div class="flex-col"> <span> <small class="text-right mr-sm-2">Out for delivary</small><i class="fa fa-circle active"></i></span></div>
                                        <div class="col-auto flex-col-auto"><small class="text-right mr-sm-2">Delivered</small><span> <i class="fa fa-circle active"></i></span></div>
                                    </div>
                                    
                                    <div v-if="data.Acceptance_Status==false">
                                    <v-alert 
                                        dense
                                        type="error">
                                         Rejected
                                         </v-alert>
                                         Refund Will Be Transferred Soon.
                                    </div>
                                    <div v-else-if="data.Delivery_Status==true & data.Acceptance_Status==true">
                                    <v-alert 
                                        dense
                                        type="success">
                                         Successfully Delivered
                                         </v-alert>
                                         Hope You Liked It .
                                    </div>
                                    <div v-else>
                                        <v-alert 
                                        dense
                                        icon="mdi-clock"
                                        type="#FF9100">
                                         Under Process
                                         </v-alert>
                                         Order Will Reach To You Soon.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- <div class="row mt-4">
                <div class="col">
                    <div class="row justify-content-between">
                        <div class="col-auto">
                            <p class="mb-1 text-dark"><b>Order Details</b></p>
                        </div>
                        <div class="flex-sm-col text-right col">
                            <p class="mb-1"><b>Total</b></p>
                        </div>
                        <div class="flex-sm-col col-auto">
                            <p class="mb-1">&#8377;4,835</p>
                        </div>
                    </div>
                    <div class="row justify-content-between">
                        <div class="flex-sm-col text-right col">
                            <p class="mb-1"> <b>Discount</b></p>
                        </div>
                        <div class="flex-sm-col col-auto">
                            <p class="mb-1">&#8377;150</p>
                        </div>
                    </div>
                    <div class="row justify-content-between">
                        <div class="flex-sm-col text-right col">
                            <p class="mb-1"><b>GST 18%</b></p>
                        </div>
                        <div class="flex-sm-col col-auto">
                            <p class="mb-1">843</p>
                        </div>
                    </div>
                    <div class="row justify-content-between">
                        <div class="flex-sm-col text-right col">
                            <p class="mb-1"><b>Delivery Charges</b></p>
                        </div>
                        <div class="flex-sm-col col-auto">
                            <p class="mb-1">Free</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row invoice ">
                <div class="col">
                    <p class="mb-1"> Invoice Number : 788152</p>
                    <p class="mb-1">Invoice Date : 22 Dec,2019</p>
                    <p class="mb-1">Recepits Voucher:18KU-62IIK</p>
                </div>
            </div> -->
        </div>
        <div class="card-footer">
            <div class="jumbotron-fluid">
                <div class="row justify-content-between ">
                    <div class="col-sm-auto col-auto my-auto"><v-icon x-large color="blue">mdi-medical-bag</v-icon><v-icon x-large color="blue">mdi-pill</v-icon></div>
                    <div class="col-auto my-auto ">
                        <h2 class="mb-0 font-weight-bold">TOTAL ORDERS</h2>
                    </div>
                    <div class="col-auto my-auto ml-auto">
                        <h1 class="display-3 ">{{orders_count}}</h1>
                    </div>
                </div>
                <!-- <div class="row mb-3 mt-3 mt-md-0">
                    <div class="col-auto border-line"> <small class="text-white">PAN:AA02hDW7E</small></div>
                    <div class="col-auto border-line"> <small class="text-white">CIN:UMMC20PTC </small></div>
                    <div class="col-auto "><small class="text-white">GSTN:268FD07EXX </small> </div>
                </div> -->
            </div>
        </div>
    </div>
</div>
    </div>
</template>



<script>
// import axios from 'axios'
import API from '../API/API'

export default {
    data(){
        return{
            my_orders:'',
            orders_count:'',
        }
    },
    created() {
        this.orders()
    },
    methods: {
        orders(){
            API.get_orders()
            .then((res) => {
            // console.log(response.data)
            this.my_orders= res.data
            this.orders_count = (res.data).length
          })
          .catch((err) => {
            // console.log(err)
            alert(err.data)
          })
        }
    },
}
</script>






<style scoped>
#medical_bag:hover,#medical_pill:hover{
    color:  rgb(23, 201, 100) ;
}

body {
    min-height: 100vh;
    background-size: cover;
    font-family: 'Lato', sans-serif;
    color: rgba(116, 116, 116, 0.667);
    background: linear-gradient(140deg, #fff, 50%, #BA68C8)
}

.container-fluid {
    margin-top: 200px
}

p {
    font-size: 14px;
    margin-bottom: 7px
}

.small {
    letter-spacing: 0.5px !important
}

.card-1 {
    box-shadow: 2px 2px 10px 0px rgb(3, 201, 80)
}

hr {
    background-color: rgba(248, 248, 248, 0.667)
}

.bold {
    font-weight: 500
}

.change-color {
    color: rgb(23, 201, 100) !important
}

.card-2 {
    box-shadow: 1px 1px 3px 0px rgb(112, 115, 139)
}

.fa-circle.active {
    font-size: 8px;
    color: rgb(23, 201, 100)
}

.fa-circle {
    font-size: 8px;
    color: #aaa
}

.rounded {
    border-radius: 2.25rem !important
}

.progress-bar {
    background-color: rgb(23, 201, 100) !important
}

.progress {
    height: 5px !important;
    margin-bottom: 0
}

.invoice {
    position: relative;
    top: -70px
}

.Glasses {
    position: relative;
    top: -12px !important
}

.card-footer {
    background-color: rgb(23, 201, 100);
    color: #fff
}

h2 {
    color: rgb(78, 0, 92);
    letter-spacing: 2px !important
}

.display-3 {
    font-weight: 500 !important
}

@media (max-width: 479px) {
    .invoice {
        position: relative;
        top: 7px
    }

    .border-line {
        border-right: 0px solid rgb(226, 206, 226) !important
    }
}

@media (max-width: 700px) {
    h2 {
        color: rgb(78, 0, 92);
        font-size: 17px
    }

    .display-3 {
        font-size: 28px;
        font-weight: 500 !important
    }
}

.card-footer small {
    letter-spacing: 7px !important;
    font-size: 12px
}

.border-line {
    border-right: 1px solid rgb(226, 206, 226)
}
</style>