<template>
    <!-- My Deliveries -->
    <h1 class="pt-3">
        <b>Welcome, {{ userName }}</b>
    </h1>
    <DriverDeliveries/>
</template>

<script>

import DriverDeliveries from "@/components/DriverDeliveries.vue"

import { Auth } from 'aws-amplify';

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
    // created(){
    //     Auth.currentAuthenticatedUser().then(user => {
    //         console.log('username', user.username)
    //         // split username by "." and store userName and userRole
    //         this.userName = user.username.split(".")[0]
    //         this.userRole = user.username.split(".")[1]
    //         // console.log(this.userName)
    //         // console.log(this.userRole)
    //         this.$store.commit('setCurrentAuthenticatedUser', user);
    //         this.$store.commit('setCurrentUserRole', user.username.split(".")[1]);
    //         console.log("store user role:", this.$store.state.currentUserRole)
    //     }).catch(err => console.log(err));
    // }
}
</script>