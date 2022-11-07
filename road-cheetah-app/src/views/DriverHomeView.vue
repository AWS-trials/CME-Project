<template>
    <!-- My Deliveries -->
    <h1 class="pt-3">
        <b>Welcome, {{ userName }}</b>
    </h1>
    <DriverDeliveries/>
</template>

<script>
import DriverDeliveries from "@/components/DriverDeliveries.vue"

export default{
    name: "DriverHomeView",
    data(){
        return {
            userName: null,
            userRole: null,
        }
    },
    components: {
        DriverDeliveries,
    },
    methods: {
    },
}
</script>