<template>
    <div class="mt-4 p-3 mb-2 container bg-light">
        <h2>
            <b>All Orders:</b>
        </h2>
        <br>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Order ID</th>
                    <th scope="col">Delivery Recipient</th>
                    <th scope="col">Driver Assigned</th>
                    <th scope="col">Delivery Status</th>
                    <th scope="col">Scheduled Delivery Date</th>
                    <th scope="col">Actual Delivery Date</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders">
                    <th scope="row">{{ order.orderID }}</th>
                    <td>{{ order.RecipientName}}</td>
                    <td>{{ order.RecipientAddress }}</td>
                    <td>{{ order.PostalCode }}</td>
                    <td>{{ order.AssignedWarehouse}}</td>
                    <td> {{ order.Status}}
                        <!-- <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {{ order.status }}
                            </button>
                            <ul class="dropdown-menu">
                                <li>
                                    <a class="dropdown-item" href="#" @click="updateDeliveryStatus(order,'Delivered')">
                                        Delivered
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#" @click="updateDeliveryStatus(order,'In-Progress')">
                                        In-Progress
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#" @click="updateDeliveryStatus(order,'Pending')">
                                        Pending
                                    </a>
                                </li>
                            </ul>
                        </div> -->
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios';
import moment from 'moment';
import { isProxy, toRaw } from 'vue';
export default {
    name: "allOrders",
    data(){
        return{
            orders:[],
            numberInProgressDeliveries:0,
            numberCompletedDeliveries:0
        }
    },
    components:{},
    methods: {
        updateDeliveryStatus(order, status){
            order.status = status
        },
        // calculateCompletedDeliveries(orders){

        //     let completedDeliveries = 0
        //     for(let i = 0; i < this.orders.length; i++){
        //         console.log(this.orders[i])
        //         if(orders[i].status === "Delivered"){
        //             completedDeliveries++
        //         }
        //     }
        //     this.numberCompletedDeliveries = completedDeliveries
        // }
    },
    async created() {
            var date = moment();
            var currentDate = date.format('DD-MM-YYYY');
            //console.log(currentDate);
            var url = "https://6x9208fr4j.execute-api.ap-southeast-1.amazonaws.com/dev/DistributeOrderToEachDriver"
            await axios.get(url)
			.then(response => {
                var response = response.data
                console.log("here")
                console.log(response.json)
                for(var key in response) {
                    //console.log(response[key])2
                    var delivery_obj = response[key];
                    //console.log(delivery_obj)
                    for (let each in delivery_obj) {
                        //console.log(typeof(delivery_obj[each]["AssignedDateTime"]),delivery_obj[each]["AssignedDateTime"])
                        //console.log(typeof(currentDate),currentDate)
                        if (delivery_obj[each]["AssignedDateTime"]==currentDate) {
                            //console.log("woof")
                            // console.group(typeof(delivery_obj[each]))
                            this.orders.push(delivery_obj[each])
                        }
                    }
                    console.log(typeof(this.orders))
                }
			})
			.catch(error => {
				// process error object
			});
            var totalDeliveries= this.orders.length;
            var undelivered = 0;
           // console.log(completedDeliveries)
            let rawOrders = toRaw(this.orders)
            rawOrders.forEach(o => 
            {   console.log(o)
                if (o["Status"] == "Undelivered") {
                    console.log("dog",o)
                    undelivered++;
                }
            })
            this.numberInProgressDeliveries=undelivered
            this.numberCompletedDeliveries=totalDeliveries-undelivered
            // return completedDeliveries + "/" + this.orders.length
        }
    }
</script>

<style>
h2 {
    color:navy;
}
</style>