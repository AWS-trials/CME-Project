<template>
    <br />

    <div class="p-3 mb-2 container bg-light">
        <h2>
            <b>Manpower Management</b>
        </h2>

        <br>
        <table class="table">
            <thead>
                <tr>
                    <!-- <th scope="col">Driver ID</th>
                    <th scope="col">Is Working?</th>
                    <th scope="col">Update Working Status</th>
                    <th scope="col">No. of Orders Allocated</th>
                    <th scope="col">Orders Completed</th>
                    <th scope="col">Orders Incompleted</th> -->
                    <th scope="col" v-for="header in headers" :key="header">{{ header }}</th>
                </tr>
            </thead>
            <tbody>
                <!-- populate info from driver table! -->

                <tr v-for="driver in drivers" :key="driver" :drivers="drivers">
                    <th scope="row">{{ driver.driverId }}</th>
                    <td>{{ driver.isWorking }}</td>

                    <!-- <td>{{ driver.OrderStatuses.length }}</td> -->
                    


                    <!-- <td>{{ Countdriverorder(driver)[0] }}</td>
                    <td>{{ Countdriverorder(driver)[1]  }}</td>
                    <td>{{ Countdriverorder(driver)[2]  }}</td> -->
                    


                </tr>


            </tbody>
        </table>
    </div>
</template>

<script>

//Method 1 
// import axios from 'axios';
// import moment from 'moment';
// import { isProxy, toRaw } from 'vue';
// export default {
//     name: "ManpowerManagement",
//     data(){
//         return{
//             orders:[],
//             numberInProgressDeliveries:0,
//             numberCompletedDeliveries:0
//         }
//     },
//     components:{},
//     methods: {
//         updateDriverStatus(driver, status) {
//             driver.status = status
//         },
// //         calculateCompletedDeliveries(OrderStatuses) {

// //             let completedDeliveries = 0
// //             for (let i = 0; i < this.OrderStatuses.length; i++) {
// //                 console.log(this.orders[i])
// //                 if (orders[i].OrderStatuses === True) {
// //                     completedDeliveries++
// //                 }
// //             }
// //             this.numberCompletedDeliveries = completedDeliveries
// //         }

//     },
//     async created() {
//             var date = moment();
//             var currentDate = date.format('DD-MM-YYYY');
//             //console.log(currentDate);
//             var url = "https://6x9208fr4j.execute-api.ap-southeast-1.amazonaws.com/dev/DistributeOrderToEachDriver"
//             await axios.get(url)
// 			.then(response => {
//                 var response = response.data
//                 console.log("here")
//                 var driver_id = 2
//                 var order_for_driver = response[driver_id]
//                 console.log(order_for_driver)
//                 for(var key in order_for_driver) {
//                     //console.log(key)
//                     console.log("in for")
//                     console.log(order_for_driver[key]);
//                     this.orders.push(order_for_driver[key])

//                     console.log(order_for_driver[key]["AssignedWarehouse"])

//                 }
// 			})
// 			.catch(error => {
// 				// process error object
// 			});
//             var totalDeliveries= this.orders.length;
//             var undelivered = 0;
//            // console.log(completedDeliveries)
//             let rawOrders = toRaw(this.orders)
//             rawOrders.forEach(o => 
//             {   console.log(o)
//                 if (o["Status"] == "Undelivered") {
//                     console.log("dog",o)
//                     undelivered++;
//                 }
//             })
//             this.numberInProgressDeliveries=undelivered
//             this.numberCompletedDeliveries=totalDeliveries-undelivered
//             // return completedDeliveries + "/" + this.orders.length
//         }
//     }








import axios from 'axios';
import { computed, defineComponent, onBeforeMount, ref } from 'vue';

export default defineComponent({
    name: 'ManpowerManagement',
    components: {
    },
    setup() {

        let drivers = ref({})
        let drivers_count = 0
        const headers = ["Driver ID", "Is Working?", "No. of Orders Allocated", "Orders Completed", "Orders Incompleted"]

        function Countdriverorder(driver) {
            let driver_success = 0
            let driver_incomplete = 0
            var totalDeliveries = driver.OrderStatuses.length;

            for (var orderID in driver.OrderStatuses) {
                if (driver.OrderStatuses[orderID] == "Incomplete") {

                    driver_incomplete++;
                }
              
            }

            driver_success = totalDeliveries - driver_incomplete
            return [totalDeliveries, driver_success, driver_incomplete]
        }

        onBeforeMount(async () => {
            const getDrivers = async () => {
                const response = await axios.get('https://3mb16n3708.execute-api.ap-southeast-1.amazonaws.com/dev/drivers'
                )
                return response.data
            }
            await getDrivers().then((response) => { drivers.value = response })
            console.log(drivers.value)
            drivers_count = drivers.length
        })




        return {

            headers,
            drivers,
            drivers_count,
            Countdriverorder,


        }

    },
    methods: {

    }
})












// export default {
//     name: "ManpowerManagement",
//     data() {
//         return {

//         }
//     },
//     components: {},
//     methods: {
//         updateDriverStatus(driver, status) {
//             driver.status = status
//         },

//         calculateCompletedDeliveries(OrderStatuses) {

//             let completedDeliveries = 0
//             for (let i = 0; i < this.OrderStatuses.length; i++) {
//                 console.log(this.orders[i])
//                 if (orders[i].OrderStatuses === True) {
//                     completedDeliveries++
//                 }
//             }
//             this.numberCompletedDeliveries = completedDeliveries
//         }

//     },

// }
</script>

<style>
h2 {
    color: navy;
}
</style>