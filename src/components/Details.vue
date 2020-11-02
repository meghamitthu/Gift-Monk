<template>
  <v-card>
    <div id="app">
  <v-container>
    <v-layout row class="text-xs-center">
        <v-card height="400px" ></v-card>
        <v-card width="100%"
      class="d-flex justify-center mb-6"
      :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
      flat
      tile
    >
      <v-card
        class="pa-2"
        width="100%"
        outlined
        
        tile
      >
        <v-flex>
        <v-container style="position: relative;top: 13%;" class="text-xs-center">
          <v-card flat>
            
             
          </v-card>
        </v-container>
      </v-flex>
      </v-card>
      <v-card
        class="pa-2"
        width="100%"
        outlined
        tile
        
      >
        <v-flex>
        <v-container style="position: relative;top: 13%;" class="text-xs-center">
          <v-card flat>
            <v-card-title class="text-left">
              <h3>Custom T-shirts</h3>
            </v-card-title>
        
            <v-card-subtitle class="red--text font-weight-light"><a href="#"><h5>Have a Question?</h5> </a></v-card-subtitle>
            <hr>
            <p></p>
            <v-form>
            <v-card-actions class="px-md-7 text--secondary">
            <h5>MRP</h5><h3 class="px-md-2 red--text">Rs. 800</h3><h5 class="px-md-1 text--secondary">(inclusive of all taxes)</h5>
            </v-card-actions>
            <v-card-actions class="px-md-7 text--secondary">
            <h4>This is a sample.</h4>
            </v-card-actions>
            <p></p>
            <v-card-actions class="px-md-7">
            <v-btn class="px-md-7" small outlined @click="decrement()">-</v-btn>
            <v-chip label outlined medium class="ma-2 red--text">{{count}}</v-chip> 
            <v-btn class="px-md-7" small outlined @click="increment()">+</v-btn>
            </v-card-actions>
            <p></p>
            <v-card-actions class="px-md-7">
            <v-chip label color= #962a28 large class="ma-2 white--text"><h4 class="font-weight-light">Don't forget to save your customizations before adding the item to the bag</h4></v-chip> 
            </v-card-actions>
            <v-card-actions class="px-md-7">

              <v-expansion-panels focusable>
                <v-expansion-panel>
                  <v-expansion-panel-header class="red--text">
                  Personalise Product
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p></p>
                    <v-radio-group
                      v-model="row"
                      row
                    >
                      <v-radio
                        label="XS"
                        color= #962a28
                        value="radio-1"
                      ></v-radio>
                      <v-radio
                        label="S"
                        color= #962a28
                        value="radio-2"
                      ></v-radio>
                      <v-radio
                        label="M"
                        color= #962a28
                        value="radio-3"
                      ></v-radio>
                      <v-radio
                        label="L"
                        color= #962a28
                        value="radio-4"
                      ></v-radio>
                      <v-radio
                        label="XL"
                        color= #962a28
                        value="radio-5"
                      ></v-radio>
                    </v-radio-group>
                    <v-chip medium class="ma-2 red--text">Colors</v-chip>
                    <p></p>
                    <v-file-input
                      chips
                      label="Upload the image"
                      dense
                      outlined
                      prepend-icon="mdi-camera"
                    ></v-file-input>
                    <p class="text-center justify-center">OR</p>
                    <v-text-field dense outlined prepend-icon="mdi-pencil-box" name="Custom Text" label="Custom text"></v-text-field>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-actions>
            <p></p> 
            <v-card-actions class="px-md-7">
              <v-btn @click ="addToCart(details)" class="px-md-7 white--text" primary color= #962a28 large rounded><h3>ADD TO CART</h3></v-btn>
              <v-btn class="px-md-10" elevation=3 icon color= #962a28 outlined rounded><v-icon color="red">mdi-heart</v-icon></v-btn>
            </v-card-actions>
            </v-form>
          </v-card>
        </v-container>
      </v-flex>
      </v-card>
    </v-card>
    </v-layout>
  </v-container>
</div>
  </v-card>
</template>
<script>
  import {mapGetters} from 'vuex';
  export default {
    
    data(){
      return {
        count: 0,
        row: null,
      };
    },
    methods:{
        increment(){
        this.count += 1;
        },
        decrement(){
          if(this.count>0){
            this.count -= 1;
          }
          else{
            this.count = 0;
          }
        },
        addToCart(details){
          this.$store.commit("ADD_TOCART",details)
          alert(JSON.stringify(details))
        },
    },
    async mounted ()
    {
      this.$store.dispatch("GET_DETAILS")
    },
     computed : {
    ...mapGetters(['DETAILS']),
    ...mapGetters(['CART'])
  },
  }
</script>
<style>

</style>