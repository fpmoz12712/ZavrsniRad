<template>
  <div id="app">

   <app-header/>

   <router-view name="showcase" />

    <router-view  />
    
   <app-footer/>
   <app-overlay/>

  </div>
</template>



<script>


import Header from './components/Header';
import Footer from './components/Footer';
import FooterOverlay from './components/FooterOverlay';


export default {
  components:{
    appHeader: Header,
    appFooter: Footer,
    appOverlay: FooterOverlay,
    
  },


  
  created(){
    this.$store.dispatch('proizvodiDb');
    this.$store.dispatch('phoneNumbersDb');
    this.$store.dispatch('listOfFiles');
     this.$store.dispatch('getProizvodListFiles');
   
  }
}
</script>



<style lang="scss">

  @import "./scss/main.scss";

</style>
