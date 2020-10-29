<template>
  <div class="login">
    <div>
      <Navigation/>
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
import Footer from '@/components/Footer.vue'
export default {
  name: 'Login',
  components: {
     Navigation, Footer
  }
}
</script>
<style>

</style>