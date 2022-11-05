<template>
    <!-- <div class=" mt-5 p-3 mb-2 container bg-light ">
        <h2 class="text-start">
            Delivery Progress
        </h2>
        <h5 class="text-start">
            {{ calculateCompletedDeliveries }} Orders are completed
        </h5>
    </div> -->

    <br/>

    <div class="p-3 mb-2 container bg-light">
        <h2 class="text-start">My Deliveries</h2>
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
export default {
    name: "DriverDeliveries",
    data(){
        return{
            orders:[],
            // orders: [
            //     {
            //         id: 1,
            //         recipient: "Mark",
            //         address: "Sembawang",
            //         postalCode: "123445",
            //         zone: "North",
            //         status: "Pending"
            //     },
            //     {
            //         id: 2,
            //         recipient: "Jacob",
            //         address: "Yishun",
            //         postalCode: "123445",
            //         zone: "North",
            //         status: "Pending"
            //     },
            //     {
            //         id: 3,
            //         recipient: "Larry the Bird",
            //         address: "Yishun",
            //         postalCode: "123445",
            //         zone: "North",
            //         status: "Pending"
            //     }
            // ],
        }
    },
    components:{},
    methods: {
        updateDeliveryStatus(order, status){
            order.status = status
        },
        calculateCompletedDeliveries(orders){
            let completedDeliveries = 0
            for(let i = 0; i < orders.length; i++){
                if(orders[i].status === "Delivered"){
                    completedDeliveries++
                }
            }
            this.numberCompletedDeliveries = completedDeliveries
        }
    },
    created() {
            var date = moment();
            var currentDate = date.format('DD-MM-YYYY');
            //console.log(currentDate);
            var url = "https://6x9208fr4j.execute-api.ap-southeast-1.amazonaws.com/dev/DistributeOrderToEachDriver"
            axios.get(url)
			.then(response => {
                var response = response.data
                for(var key in response) {
                    //console.log(response[key])
                    var delivery_obj = response[key];
                    //console.log(delivery_obj)
                    for (let each in delivery_obj) {
                        //console.log(typeof(delivery_obj[each]["AssignedDateTime"]),delivery_obj[each]["AssignedDateTime"])
                        //console.log(typeof(currentDate),currentDate)
                        if (delivery_obj[each]["AssignedDateTime"]==currentDate) {
                            //console.log("woof")
                            //console.group(delivery_obj[each])
                            this.orders.push(delivery_obj[each])
                        }
                    }
                }
			})
			.catch(error => {
				// process error object
			});
            console.log("woof")
            console.log(this.orders)
            let completedDeliveries = 0;
            for (let i = 0; i < this.orders.length; i++) {
                if (this.orders[i].status === "Delivered") {
                    completedDeliveries++
                }
            }
            return completedDeliveries + "/" + this.orders.length
        }
    }
</script>

<style>
h2 {
    color:navy;
}
</style>