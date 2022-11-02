<template>
    <h1>This is driver home view</h1>

    <!-- My Deliveries -->
    <DriverDeliveries/>
</template>

<script>
import { DriverDeliveries } from "@/components/DriverDeliveries.vue";

export default {
    name: "DriverHomeView",
    components: {
        DriverDeliveries,
    }
};
</script>