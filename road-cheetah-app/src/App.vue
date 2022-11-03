<template>
  <Navbar></Navbar>
  <router-view />
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: "App",
  components: {
    HelloWorld,
    Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  color:rgb(59, 59, 59);
}

nav a {
  font-weight: bold;
  /* color: #2c3e50; */
}


.nav-link {
  color:rgb(59, 59, 59);
}

/* .nav-link a:hover, .nav-link a:hover {
  color:rgb(59, 59, 59);
} */


#navbarNav > ul > a:active{
  color: #397dbd;
}
nav a.router-link-exact-active {
  color: #397dbd;
}
</style>
