<template>
  <div>
    <Conteiner></Conteiner>
        
    <router-view/>


    <Footer></Footer>

    
  </div>
</template>

<script lang="ts">
import Conteiner from "./components/Conteiner.vue";
import Footer from "./components/Footer.vue";
import $ from 'jquery';
import 'animate.css';



export default {
  name: "App",
  components: {
    Conteiner,
    Footer,
      
  },
  
  data() {
    return {
      projects: null,
    };
  },
  mounted(){
    console.log($("a"))
    
  }
   
  

};








  
</script>

<style>

</style>
