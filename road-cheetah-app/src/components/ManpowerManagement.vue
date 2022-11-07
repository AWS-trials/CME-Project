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
export default {
    name: "ManpowerManagement",
    data() {
        return {

        }
    },
    components: {},
    methods: {
        updateDriverStatus(driver, status) {
            driver.status = status
        },

        calculateCompletedDeliveries(orders) {

            let completedDeliveries = 0
            for (let i = 0; i < this.orders.length; i++) {
                console.log(this.orders[i])
                if (orders[i].status === "Delivered") {
                    completedDeliveries++
                }
            }
            this.numberCompletedDeliveries = completedDeliveries
        }

    },

}
</script>

<style>
h2 {
    color: navy;
}
</style>