<template>
<v-container>
    <v-layout row class="text-xs-center">
        <v-card height="350px" ></v-card>
    <v-card width="100%"
      class="d-flex justify-center mb-6"
      flat
      tile
    >
      <v-card
        class="pa-2"
        width="100%"
        flat
      >
      <v-flex>
    <v-container style="position: relative;top: 13%;" class="text-xs-center">
        <v-card flat>
            <v-card
                class="d-flex justify-space-between mb-6"
                flat
                
                >
                <v-card
                    flat
                    width="40%"
                    height="150px"
                    class="justify-center"
                >
                    <h3>ABOUT</h3>
                    <p></p>
                    <h4>&#8226 News And Stories</h4>
                    <h4>&#8226 Our Studio</h4>
                    <h4>&#8226 Stocklists</h4>
                </v-card>
                <v-card
                    width="40%"
                    flat
                    
                >
                    <h3>CATEGORIES</h3>
                    <p></p>
                    <h4>&#8226 Customizable Gifts</h4>
                    <h4>&#8226 Custom Plates</h4>
                    <h4>&#8226 Custom Clocks</h4>
                </v-card>
            </v-card>
        </v-card>
        <v-card flat>
           <v-card
            class="d-flex mb-6 text-center"
            flat
            >
                <v-card
                    flat
                    width="80%"
                >
                    <h3>FOLLOW US</h3>
                    <v-btn icon> <v-icon large class="pa-md-4 mx-lg-auto">mdi-facebook</v-icon></v-btn>
                    <v-btn icon> <v-icon large class="pa-md-4 mx-lg-auto">mdi-instagram</v-icon> </v-btn>
                    <v-btn icon> <v-icon large class="pa-md-4 mx-lg-auto">mdi-twitter</v-icon> </v-btn>
                </v-card>
            </v-card>
        </v-card>
    </v-container>
      </v-flex>
      </v-card>
      <v-card>
          <v-container grid-list-lg>
        <v-layout row wrap>
            <v-flex xs12 sm12 >
                <v-card flat width="450px">
                    <v-card-title primary-title>
                        <div>
                            <h2 class="headline mb-0 font-weight-black">NEWSLETTER</h2>
                        </div>
                    </v-card-title>
                    <v-card-subtitle>
                        <h3 class="font-weight-light">Sign up for our mailing list to get latest updates and offers</h3>
                    </v-card-subtitle>
                    <p></p>
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-textarea
                                    label="Your Email"
                                    
                                    outlined
                                    rows="1"
                                    row-height="15"
                                    ></v-textarea>
                            </v-layout>
                        </v-container>
                    <v-card-title primary-title>
                        <v-btn 
                            @click="Savemail(email)"
                            large
                            class="white--text"                             
                            color= #962a28>
                            Subscribe
                        </v-btn>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
</v-container>
      </v-card>
    </v-card>
      </v-layout>
</v-container>
</template>
<script>
export default {
    data() {
        return{
            emails:[]
        }
    },
 methods:{
     Savemail(email){
        this.emails.push(email)
        alert(JSON.stringify(emails))
     }
 },
    
}
</script>
<style>

</style>