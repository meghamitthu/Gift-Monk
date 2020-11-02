<template>
  <div class="login">
    <div>
      <Navigation/>
    </div>
    <div>
      <Form/>
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
import Form from '@/components/Form.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Login',
  components: {
     Navigation, Form, Footer
  }
}
</script>
<style>

</style>

