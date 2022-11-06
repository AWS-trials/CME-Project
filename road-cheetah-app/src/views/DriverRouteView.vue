<template>
  <div class="pt-3">
    <div class=" mx-auto card bg-light m-3" style="width: 80%; ">
      map
      <MapPane></MapPane>
    </div>
    <div class=" mx-auto card bg-light m-3" style="width: 80%; ">
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
             <b>
              Deliveries table
             </b> 
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              <!-- Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body. -->
              <table class="table" :route="routes">
                <thead>
                  <tr>
                    <!-- <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Current Status</th>
                    <th scope="col">Edit Status</th> -->
                    <th scope="col" v-for="header in headers" :key="header">{{header}}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="index in routes.Orders.length" :key="index" :routes="routes">
                    <th scope="row">{{routes.Orders[index -1 ]}}</th>
                    <td>{{ routes.Locations[index] }}</td>
                    <td>{{Math.floor(routes.route_legs[index - 1].DurationSeconds / 60)}}</td>
                    <td>{{routes.OrderStatuses[index - 1]}}</td>
                    <td><button @click="completeOrder(index - 1)"> Complete Order</button></td>
                    
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
// @ is an alias to /src
import MapPane from '@/components/MapPane.vue'
import axios from 'axios';
import { computed, defineComponent, onBeforeMount, ref } from 'vue';
  
export default defineComponent({
  name: 'DriverRouteView',
  components: {
    MapPane
  },
  setup(){
    const routeId = '0b07d7cb-f077-4af3-b169-1c1d6954341f'
    let routes = ref({})
    let order_count = ref(0)
    const headers = ["Order Id", "Location","Estimated time (mins)", "Status","Action"]
    const completeOrder = async (orderIndex)=>{
      console.log(routes)
      routes.value.OrderStatuses[orderIndex] = 'Complete'
      let patch_request = {
        "routeId":routeId,
        "updateKey":"OrderStatuses",
        "updateValue": routes.value.OrderStatuses,
        "orderId":routes.value.Order[orderIndex],
        "driverId": routes.value.driverId,
      }
      console.log('routes',  routes.value)
      console.log('patch_request',patch_request)
      const response = await axios.patch('https://3mb16n3708.execute-api.ap-southeast-1.amazonaws.com/dev/route', patch_request)
      console.log(response.data)
    }
    onBeforeMount(async ()=>{
      const getRouteById = async (routeId)=> {
        const response = await axios.get('https://3mb16n3708.execute-api.ap-southeast-1.amazonaws.com/dev/route?routeId=' + routeId)
        return response.data
      }
      await getRouteById(routeId).then((response)=> {routes.value = response})
      order_count = routes.value.Orders.length
    })

    return{
      routes: computed(()=> routes.value),
      headers,
      order_count,
      completeOrder
    }

  },
  // methods:{
  //   async getRoute(){
  //     const getRouteById = async (routeId)=> {
  //       const response = await axios.get('https://3mb16n3708.execute-api.ap-southeast-1.amazonaws.com/dev/route?routeId=' + routeId)
  //       return response.data
  //     }
  //     await getRouteById(routeId).then((response)=> {routes.value = response})
  //     order_count = routes.value.Orders.length
  //     console.log(routes)
  //     console.log('count',order_count)
  //   }
  // },
  // async beforeCreate (){
  //   await this.getRoute(routeId)
  //   await setTimeout(()=>{console.log(timeout)}, 500)
  // }
})
</script>
