<template>
    <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="white--text text-center"
      color= #962a28
    >
    <img class="pa-md-4" alt="Gift Monk logo" src="../assets/logo.png">
      <v-card-text class="white--text font-weight-light px-md-16 mx-lg-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </v-card-text>
        <p></p>
      <v-divider inset width="89%"></v-divider>
      <p></p> <p></p>
      <v-layout justify-center>
        <a href="#" class="white--text font-weight-thin px-md-16">About Us</a>
        <v-divider vertical class="mx-4"></v-divider>
        <a href="#" class="white--text font-weight-thin px-md-16">Terms of Use</a>
        <v-divider vertical class="mx-4"></v-divider>
        <a href="#" class="white--text font-weight-thin px-md-16">Privacy Policy</a>
        <v-divider vertical class="mx-4"></v-divider>
        <a href="#" class="white--text font-weight-thin px-md-16">Contact Us</a>
        <p></p>
        <p></p>
      </v-layout>
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} www.giftmonkonline.com. All Rights Reserved
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
    
}
</script>
<style>

</style>