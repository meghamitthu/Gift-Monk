<template>
    <v-container grid-list-lg>
        <v-layout row wrap>
            <v-flex xs12 sm12 md4>
                <v-card>
                    <div class="d-flex flex-column mb-6">
                        <v-card 
                            outlined
                            tile
                        >
                            <v-img id="image" alt="Grid 3" src="https://giftmonk-online.s3.ap-south-1.amazonaws.com/bg-grid01.jpg" height="235px">
                                <v-container fill-height fluid>
                                    <v-layout justify-center align-center column pa-5>
                                        <div class="display-2 font-italic black--text text-center mb-3">Of</div>
                                        <div class="display-2 font-italic black--text text-center mb-3">Tropical</div>
                                        <div class="display-1 font-weight-medium red--text text-center mb-3">COLLECTION</div>
                                        
                                    </v-layout>
                                </v-container>
                            </v-img>
                        </v-card>
                        <p></p>
                        <v-card
                            
                            outlined
                            tile
                            height="247px"
                        >
                            <v-img id="image" alt="Grid 3" src="https://giftmonk-online.s3.ap-south-1.amazonaws.com/bg-grid02.jpg" height="240px">
                                <v-container fill-height fluid>
                                    <v-layout justify-center align-center column pa-5>
                                        <div class="display-2 black--text text-center mb-3">&#9734</div>
                                        <div class="display-2 font-italic black--text text-center mb-3">5000+</div>
                                        <div class="display-1 font-weight-medium red--text text-center mb-3">CUSTOMERS</div>
                                        
                                    </v-layout>
                                </v-container>
                            </v-img>
                        </v-card>
                    </div>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-img id="image" alt="Grid 3" src="https://giftmonk-online.s3.ap-south-1.amazonaws.com/bg-grid03.jpg" height="500px">
                        <v-container fill-height fluid>
                            <v-layout justify-center align-center column pa-5>
                                <div class="display-2 font-italic red--text text-center mb-3">Summer Tags</div>
                                <p></p><p></p><p></p>
                                <div class="display-3 font-weight-bold black--text text-xs-center">30%</div>
                                <div class="display-3 font-weight-bold red--text text-xs-center">OFF</div>
                                <p></p> <p></p> <p></p>
                                <div class="display-3 font-weight-bold red--text text-xs-center"><v-btn class="white--text px-md-7" color= #B71C1C primary block large rounded><h3>SHOP NOW</h3></v-btn></div>
                                
                            </v-layout>
                        </v-container>
                    </v-img>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-img class="image" height="500px">
                        <v-container fill-height fluid>
                            <v-layout justify-center align-center column pa-5>
                                <div class="display-2 font-weight-black red--text text-center mb-3">ROMANTIC</div>
                                <div class="display-1 font-italic red--text text-xs-center">Collection</div>
                                
                            </v-layout>
                        </v-container>
                    </v-img>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    
}
</script>
<style>
.image {
    background-image: url("https://giftmonk-online.s3.ap-south-1.amazonaws.com/bg-grid04.jpg");
    
}
</style>