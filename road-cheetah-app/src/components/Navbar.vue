<template>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #f3faff;">
        <!-- <div class="container-fluid"> -->
            <a class="navbar-brand nav-link" href="/driverHomeView" tabindex="-1" >
                <img src="../../public/favicon.png" alt="" width="40" height="24" class="d-inline-block align-text-top">
                Logistics Management
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="nav navbar" style="color:black">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Driver Deliveries</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/driverRouteView">Delivery Route</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/driverManager">Delivery Manager Dashboard</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/driverManagerManpowerManagement">Driver Manpower Management</router-link>
                    </li>
                    <li class="nav-item" @click="signOut()">
                        <a class="nav-link" href="#">Sign Out</a>
                    </li>
                </ul>
            </div>
        <!-- </div> -->
    </nav>
</template>

<script>
import { Auth } from 'aws-amplify';

export default {
    name: "Navbar",
    data(){
        return{
            currentUserRole: null
        }
    },
    methods:{
        async signOut() {
            try {
                await Auth.signOut();
            } catch (error) {
                console.log('error signing out: ', error);
            }
        }
    },
    created(){
        this.currentUserRole = this.$store.state.currentUserRole
        console.log(this.currentUserRole)
    }
};
</script>