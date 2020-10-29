<template>
  <div class="home">
    <div>
      <Navigation/>
    </div>
    <div>
      <Slider/>
    </div>
    <div>
      <Grid/>
    </div>
    <div>
      <Products/>
    </div>
    <div>
      <Newsletter/>
    </div>
    <div>
      <Footer/>
    </div>
     <div>
      <components/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import Slider from '@/components/Slider.vue'
import Grid from '@/components/Grid.vue'
import Products from '@/components/Products.vue'
import Newsletter from '@/components/Newsletter.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Navigation, Slider, Grid, Products, Newsletter, Footer
  }
}
</script>
<style>

</style>
