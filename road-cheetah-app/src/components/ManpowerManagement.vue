<template>
    <div class="p-3 mb-2 container bg-light">
        <h2>
            <b>Manpower Management</b>
        </h2>
        <br>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col" v-for="header in headers" :key="header">{{ header }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="driver in driversList" :key="driver.driverId">
                    <td>{{ driver.driverId}}</td>
                    <td>{{ driver.isWorking }}</td>
                    <td>{{ Object.keys(driver.OrderStatuses).length }}</td>
                    <!-- return count of orderstatuses that are incomplete -->
                    <td>{{ Object.keys(driver.OrderStatuses).filter(key => driver.OrderStatuses[key] === "Complete").length }}</td>
                    <td>{{ Object.keys(driver.OrderStatuses).filter(key => driver.OrderStatuses[key] === "Incomplete").length }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "ManpowerManagement",
    data() {
        return {
            driversList: [],
            headers: ["Driver ID", "Is Working?", "No. of Orders Allocated", "Orders Completed", "Orders Incompleted"],
        }
    },
    methods: {
        async getAllDrivers(){
            const response = await axios.get('https://3mb16n3708.execute-api.ap-southeast-1.amazonaws.com/dev/drivers')
            // console.log("here:", response.data.drivers)
            this.driversList = response.data.drivers
        },
    },
    created() {
        this.getAllDrivers();
    }
}
</script>

<style>
h2 {
    color: navy;
}
</style>