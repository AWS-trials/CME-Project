<template>
    <!-- My Deliveries -->
    <h1 class="pt-3">
        <b>Welcome, user</b>
    </h1>
    <DriverDeliveries/>
</template>

<script>

import DriverDeliveries from "@/components/DriverDeliveries.vue"

export default{
    name: "DriverHomeView",
    components: {
        DriverDeliveries,
    }
}
</script>