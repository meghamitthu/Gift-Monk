<template>

<v-container grid-list-lg>
        <v-layout reverse row wrap>
            <v-flex xs12 sm12 md4>
                <v-card>
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
</template>
<script>
export default {
    
}
</script>
<style>

</style>