<template>
  <div class="products">
    <div>
      <Navigation/>
    </div>
    <div>
      <Details/>
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
import Navigation from '@/components/Navigation.vue'
import Details from '@/components/Details.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Products',
  components: {
     Navigation, Details, Footer
  }
}
</script>
<style>

</style>