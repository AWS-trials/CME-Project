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
                    <th scope="col">Driver ID</th>
                    <th scope="col">Is Working?</th>
                    <th scope="col">Update Working Status</th>
                    <th scope="col">No. of Orders Allocated</th>
                    <th scope="col">Orders Completed</th>
                    <th scope="col">Orders Incompleted</th>
                    <!-- <th scope="col" v-for="header in headers" :key="header">{{header}}</th> -->
                </tr>
            </thead>
            <tbody>
                <!-- populate info from driver table! -->

                <tr v-for="driver in drivers" :key="driver" :drivers="drivers">
                    <th scope="row">{{ driver.driverID }}</th>
                    <td>{{ driver.isWorking }}</td>

                    <!-- update driver status ,dropdown-->
                    <td>{{ driver.isWorking }}
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                {{ driver.isWorking }}
                            </button>
                            <ul class="dropdown-menu">
                                <li>
                                    <a class="dropdown-item" href="#" @click="updateDriverStatus(driver, True)">
                                        True
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#" @click="updateDriverStatus(driverFalse)">
                                        False
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </td>
                    <!-- No. of Orders Allocated -->

                    <td>{{ driver.OrderStatuses.length }}</td>

                    <!--   Orders Completed -->
                    <td>{{ driver.OrderStatuses }}</td>
                     <!--   Orders Incompleted -->
                    <td>{{ driver.OrderStatuses }}</td>


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
  setup(){
    const driverId = '1'
    let drivers = ref({})
    let order_count = ref(0)
    const headers = ["Driver ID", "Is Working?","Update Working Status", "No. of Orders Allocated","Orders Completed","Orders Incompleted"]
    // const completeOrder = async (orderIndex)=>{
    //   console.log(routes)
    //   routes.value.OrderStatuses[orderIndex] = 'Complete'
    //   let patch_request = {
    //     "routeId":routeId,
    //     "updateKey":"OrderStatuses",
    //     "updateValue": routes.value.OrderStatuses,
    //     "orderId":routes.value.Order[orderIndex],
    //     "driverId": routes.value.driverId,
    //   }
    //   console.log('routes',  routes.value)
    //   console.log('patch_request',patch_request)
    //   const response = await axios.patch('https://3mb16n3708.execute-api.ap-southeast-1.amazonaws.com/dev/drivers', patch_request)
    //   console.log(response.data)
    // }
    onBeforeMount(async ()=>{
      const getDriverById = async (driverId)=> {
        const response = await axios.get('https://3mb16n3708.execute-api.ap-southeast-1.amazonaws.com/dev/driver?driverId=' + driverId)
        return response.data
      }
      await getRouteById(routeId).then((response)=> {routes.value = response})
      order_count = driver.OrderStatuses.length
    })

    return{
      
      headers,
      order_count,
      completeOrder
    }

  },
  methods:{
//     async getRoute(){
//       const getRouteById = async (routeId)=> {
//         const response = await axios.get('https://3mb16n3708.execute-api.ap-southeast-1.amazonaws.com/dev/route?routeId=' + routeId)
//         return response.data
//       }
//       await getRouteById(routeId).then((response)=> {routes.value = response})
//       order_count = routes.value.Orders.length
//       console.log(routes)
//       console.log('count',order_count)
//     }
//   },
//   async beforeCreate (){
//     await this.getRoute(routeId)
//     await setTimeout(()=>{console.log(timeout)}, 500)
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