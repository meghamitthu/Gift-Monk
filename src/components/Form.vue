<template>
  <v-card>
    <div id="app">
  <v-container>
    <v-layout row class="text-xs-center">
        <v-card height="500px" ></v-card>
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
        color= #B71C1C
        tile
      >
        <v-flex>
        <v-container style="position: relative;top: 13%;" class="text-xs-center">
          <v-card color= #B71C1C flat>
            <v-card-title class="white--text text-center justify-center">
              <h3>LOGIN</h3>
            </v-card-title>
            <v-card-subtitle class="white--text font-weight-light text-center justify-center">Use the registered e-mail and password</v-card-subtitle>
            <p></p>
            <v-form>
            <v-text-field dark solo-inverted outlined prepend-icon="mdi-account-circle" v-model="email" label="Email"></v-text-field>
            <v-text-field dark solo-inverted outlined prepend-icon="mdi-lock-outline" v-model="password" label="Password" type="password"></v-text-field>
            <v-card-actions class="text-center justify-center">
              <v-btn @click="login(email ,password)" class="px-md-7" primary large rounded><h3>LOGIN NOW</h3></v-btn>
            </v-card-actions>
            <p></p>
            <v-layout justify-center>
            <h5><a href="#" class="white--text font-weight-thin px-md-16">I don't remember my password</a></h5>
            </v-layout>
            </v-form>
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
            <v-card-title class="text-center justify-center">
              <h3>NOT A MEMBER YET?</h3>
            </v-card-title>
            <p></p>
            <v-card-subtitle class=" font-weight-light text-center justify-center">USE YOUR SOCIAL MEDIA ACCOUNT</v-card-subtitle>
            <v-form>
              <v-card-actions class="text-center justify-center">
            <v-btn class="white--text px-md-7" color= #3b5998 primary block large rounded><h3>FACEBOOK</h3></v-btn>
            </v-card-actions>
            <v-card-actions class="text-center justify-center">
            <v-btn class="white--text px-md-7" color= #ea4335 primary block large rounded><h3>GOOGLE</h3></v-btn>
            </v-card-actions>
            <p></p>
            <v-card-actions class="text-center justify-center">
            <h3>OR</h3>
            </v-card-actions>
            <p></p>
            <v-card-actions class="text-center justify-center">
              <v-btn class="px-md-7" primary block outlined color= #6200EA large rounded><h3>SIGN UP</h3></v-btn>
            </v-card-actions>
            <v-layout justify-center>
              <p></p>
            <h5><a href="#" @click="changepassword()" class="white--text font-weight-thin px-md-16">I don't remember my password</a></h5>
            </v-layout>
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
  
  export default {
    
    data(){
      return {
        email : "",
        password : ""
      };
    },
    
    methods: {
    login() 
         {
           let payload = {
          "email": this.email,
          "password": this.password
        };
        this.$store.dispatch('ADMIN_LOGIN',payload)
            },
            changepassword() {
        prompt("Change password")
      }
            
           
    
  },
  }
</script>
<style>
</style>