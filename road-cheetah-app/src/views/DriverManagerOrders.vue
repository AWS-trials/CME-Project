<template>
    <!-- My Deliveries -->
    <allOrders/>
</template>

<script>

import allOrders from "@/components/allOrders.vue";

export default{
    name: "DriverManagerOrders",
    data(){
        // return {
        //     userName: null,
        //     userRole: null
        // }
    },
    components: {
        allOrders,
    },
    methods: {
    },
    created(){

    }
}
</script>