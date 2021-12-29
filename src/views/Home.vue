<template>
  <div class="home">
    <Avelo></Avelo>
    <Description></Description>
    <MainMenu></MainMenu>
    <Gallery></Gallery>
  </div>
</template>

<script lang="ts">
import Avelo from "../components/Avelo.vue";
import Description from "../components/Description.vue";
import MainMenu from "../components/MainMenu.vue";
import Gallery from "../components/Gallery.vue";

export default {
  name: 'Home',
  components: {
    Avelo,
    Description,
    MainMenu,
    Gallery,  
   
  },
};

</script>
