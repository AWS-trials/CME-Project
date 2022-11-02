<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand nav-link disabled" href="#" tabindex="-1" aria-disabled="true" >
                <img src="../../public/favicon.png" width="50" height="30" alt="">
                Logistics Management
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="nav nav-pills" style="color:black">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/driverHomeView">My Deliveries</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/driverRouteView">Delivery Route</router-link>
                    </li>
                    <!-- <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li> -->
                </ul>
            </div>
        <!-- </div> -->
    </nav>
</template>

<script>
export default {
    name: "Navbar",
};
</script>