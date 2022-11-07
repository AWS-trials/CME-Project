<template>
    <br/>
    <div class="p-3 mb-4 container bg-light">
        <h2>
            <b>Overview:</b>
        </h2>
        <h5 class="text-start">Deliveries in progress: {{numberInProgressDeliveries}} </h5>
        <h5 class="text-start">Deliveries completed: {{ numberCompletedDeliveries }}</h5>
        
    </div>
    <div class="p-3 mb-2 container bg-light">
        <h2>
            <b>My Deliveries:</b>
        </h2>
        <br>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Delivery ID</th>
                    <th scope="col">Delivery Recipient</th>
                    <th scope="col">Delivery Address</th>
                    <th scope="col">Postal Code</th>
                    <th scope="col">Delivery Zone</th>
                    <th scope="col">Current Delivery Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders">
                    <th scope="row">{{ order.orderID }}</th>
                    <td>{{ order.RecipientName}}</td>
                    <td>{{ order.RecipientAddress }}</td>
                    <td>{{ order.PostalCode }}</td>
                    <td>{{ order.AssignedWarehouse}}</td>
                    <td> {{ order.Status}}</td>
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
    name: "DriverDeliveries",
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
    },
    async created() {
            var date = moment();
            var currentDate = date.format('DD-MM-YYYY');
            console.log(currentDate);
            var url = "https://3mb16n3708.execute-api.ap-southeast-1.amazonaws.com/dev/orders"
            await axios.get(url)
			.then(response => {
               // console.log(response.data)
                var response = response.data.orders
                for (let each in response) {
                    if (response[each]["AssignedDateTime"] == currentDate && response[each]["AssignedDriver"]==2 ) {
                        console.log("yay")
                        this.orders.push(response[each])
                    }
                    //console.log(response[each])
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