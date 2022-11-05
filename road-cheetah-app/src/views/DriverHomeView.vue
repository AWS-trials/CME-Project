<template>
    <!-- My Deliveries -->
    <div class="container d-flex ms-auto pt-5">
        <img class="mx-2" src="../../public/man.png" alt="" width="100" height="100">
        <h1 class="pt-5 text-align-start">
            <b>Welcome, user</b>
        </h1>

    </div>
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