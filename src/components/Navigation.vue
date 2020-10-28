<template>
  <div id="nav">
    <span>
    <v-toolbar height="150" app color= #962a28 dark>
    <v-spacer class="pa-md-2 mx-lg-auto"></v-spacer>
    <v-btn icon class="pa-md-4 mx-lg-auto"><v-icon>mdi-facebook</v-icon></v-btn>
    <v-btn icon class="pa-md-4 mx-lg-auto"><v-icon>mdi-instagram</v-icon></v-btn>
    <v-btn icon class="pa-md-4 mx-lg-auto"><v-icon>mdi-twitter</v-icon></v-btn>
    <v-spacer></v-spacer>
    <img class="pa-md-4" alt="Gift Monk logo" src="../assets/logo.png">
    <v-spacer></v-spacer>
    <v-btn icon class="pa-md-4 mx-lg-auto"><v-icon>mdi-magnify</v-icon></v-btn>
    <v-btn icon class="pa-md-4 mx-lg-auto"><v-icon>mdi-account-circle</v-icon></v-btn>
    <v-btn icon class="pa-md-4 mx-lg-auto"><v-icon>mdi-cart-plus</v-icon></v-btn>
    <v-spacer></v-spacer>
    </v-toolbar>
    <!-- <v-divider
        class="mx-4"
        horizontal
    ></v-divider> -->
    <v-card>
    <v-tabs
      v-model="tab"
      background-color="white"
      centered
      light
      color="black"
      height="75"
      slider-color="white"
    >

      <v-tab href="#tab-1">
        Customizable Gifts
      </v-tab>

      <v-tab href="#tab-2">
        Custom Plates
      </v-tab>

      <v-tab href="#tab-3">
        Custom Clocks
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="i in 3"
        :key="i"
        :value="'tab-' + i"
      >
        {{ text }}
      </v-tab-item>
    </v-tabs-items>
  </v-card>
    </span>     
  </div>
</template>
<script>
export default {
    
}
</script>
<style>

</style>