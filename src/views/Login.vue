<template>
  <div class="login">
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
import Form from '@/components/Form.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Login',
  components: {
     Form, Footer
  }
}
</script>
<style>

</style>

