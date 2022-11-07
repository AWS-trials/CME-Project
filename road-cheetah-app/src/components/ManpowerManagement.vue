<template>
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
                    <th scope="col">No. of Orders Allocated</th>
                    <th scope="col">Orders Completed</th>
                    <th scope="col">Orders Incompleted</th> -->
                    <th scope="col" v-for="header in headers" :key="header">{{ header }}</th>
                </tr>
            </thead>
            <tbody>

                <tr v-for="driver in drivers" :key="driver">
                    <td>hi {{driver}}</td>
                    <td>{{ driver.driverId }}</td>
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
            drivers: computed(()=>drivers.value),
            drivers_count,
            Countdriverorder,


        }

    },
    methods: {

    }
})


</script>

<style>
h2 {
    color: navy;
}
</style>