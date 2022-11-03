<template>
    <div class="container">
        <h1 class="text-start">
            Delivery Progress
        </h1>
        <h3 class="text-start">
            {{ calculateCompletedDeliveries }} Orders are completed
        </h3>
    </div>

    <br/>

    <div class="container">
        <h1 class="text-start">My Deliveries</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Delivery ID</th>
                    <th scope="col">Delivery Recipient</th>
                    <th scope="col">Delivery Address</th>
                    <th scope="col">Postal Code</th>
                    <th scope="col">Delivery Zone</th>
                    <th scope="col">Delivery Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders">
                    <th scope="row">{{ order.id }}</th>
                    <td>{{ order.recipient}}</td>
                    <td>{{ order.address }}</td>
                    <td>{{ order.postalCode }}</td>
                    <td>{{ order.zone }}</td>
                    <td>
                        <div class="dropdown">
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
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: "DriverDeliveries",
    data(){
        return{
            orders: [
                {
                    id: 1,
                    recipient: "Mark",
                    address: "Sembawang",
                    postalCode: "123445",
                    zone: "North",
                    status: "Pending"
                },
                {
                    id: 2,
                    recipient: "Jacob",
                    address: "Yishun",
                    postalCode: "123445",
                    zone: "North",
                    status: "Pending"
                },
                {
                    id: 3,
                    recipient: "Larry the Bird",
                    address: "Yishun",
                    postalCode: "123445",
                    zone: "North",
                    status: "Pending"
                }
            ],
            numberCompletedDeliveries: 0
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
    computed: {
        calculateCompletedDeliveries(){
            let completedDeliveries = 0;
            for (let i = 0; i < this.orders.length; i++) {
                if (this.orders[i].status === "Delivered") {
                    completedDeliveries++
                }
            }
            return completedDeliveries + "/" + this.orders.length
        }
    },
};
</script>