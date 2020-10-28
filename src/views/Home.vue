<template>
  <div class="home">
    <div>
      <Navigation/>
    </div>
    <div>
      <Slider/>
    </div>
    <div>
      <Products/>
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
import Products from '@/components/Products.vue'
export default {
  name: 'Home',
  components: {
    Navigation, Slider, Products
  }
}
</script>
<style>

</style>
