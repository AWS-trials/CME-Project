<template>
    <br/>
    
    <div class="p-3 mb-2 container bg-light">
        <h2>
            <b>Manpower Management</b>
        </h2>

        <br>
        <table class="table">
            <thead>
                <tr>                     
                    <th scope="col">Driver ID</th>
                    <th scope="col">Working Status</th>
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
                    <td>{{ driver.isWorking}}</td>

                    <!-- update driver status ,dropdown
                    <td>{{ driver.isWorking }}</td>  -->
                    driver.status
                    <td>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {{ driver.status }}
                            </button>
                            <ul class="dropdown-menu">
                                <li>
                                    <a class="dropdown-item" href="#" @click="updateDriverStatus(driver,'Active')">
                                        Active
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#" @click="updateDriverStatus(order,'On Leave')">
                                        On Leave
                                    </a>
                                </li>
                            </ul>
                        </div> 

                    </td>


    


                <!-- Get  numberInProgressDeliveries from DriverDeliveries and driver ID / or route table -->
             
                    <td>{{ driver.Orders}}</td>

                    <!--   Get  numberCompletedDeliveries  from DriverDeliveries and driver ID / or route table -->
                    <td>{{ driver.Orders}}</td>





                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: "ManpowerManagement",
    data(){
        return{
       
        }
    },
    components:{},
    methods: {
        updateDriverStatus(driver, status){
            driver.status = status
        },

    },
 
    }
</script>

<style>
h2 {
    color:navy;
}
</style>