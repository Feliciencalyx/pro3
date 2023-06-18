<script setup>

</script>

<template>
  <img src="scr/images/logo.png" alt="" srcset="">
<!-- <h1>Welcome To my single Page aplication</h1> -->
<router-link to="/signup" style="text-decoration: none;" >SignUp</router-link>
<router-link to="/Home" style="text-decoration: none;">Home</router-link>
<router-link to="/About" style="text-decoration: none;">About</router-link>
<!-- <router-link to="/webdev" style="text-decoration: none;"></router-link> -->


  <router-view></router-view>

  


</template>

<style scoped>

</style>
<script>

function me(){
const form=document.querySelector('.form')
form.style.display="none"

}


</script>