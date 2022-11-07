<template>
    <div class="mt-4 p-3 mb-2 container bg-light">
        <h2>
            <b>Order Management</b>
        </h2>
        <br>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Order ID</th>
                    <th scope="col">Delivery Recipient</th>
                    <th scope="col">Driver ID Assigned</th>
                    <th scope="col">Delivery Status</th>
                    <th scope="col">Scheduled Delivery Date</th>
                    <th scope="col">Warehouse</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders">
                    <th scope="row">#{{ order.orderID }}</th>
                    <td>{{ order.RecipientName}}</td>
                    <td>{{order.AssignedDriver}}</td>
                    <td> {{ order.Status}} </td>
                    <td>{{ order.AssignedDateTime }}</td>
                    <td>{{ order.AssignedWarehouse}}</td>
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
    },
    async created() {
            var date = moment();
            var currentDate = date.format('DD-MM-YYYY');
            //console.log(currentDate);
            var url = "https://3mb16n3708.execute-api.ap-southeast-1.amazonaws.com/dev/orders"
            await axios.get(url)
			.then(response => {
                console.log("woof")
                var response = response.data.orders
                console.log(response)
                for (let each in response) {
                    if (response[each]["AssignedDateTime"] == currentDate) {
                        console.log("yay")
                        this.orders.push(response[each])
                    }
                    //console.log(response[each])
                }
			})
			.catch(error => {
				// process error object
			});
        }
    }
</script>

<style>
h2 {
    color:navy;
}
</style>