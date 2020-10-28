<template>
    <div>
        <v-row width="100%">
            <v-col>
            <v-card-title>CUSTOMIZABLE COLLECTIONS</v-card-title>
            </v-col>
        <v-col cols="12" md="3" justify-center v-for="product in PRODUCTS" :key="product.product_name">
            <img height="200px" width="230px" :src="product.product_image"/>
            <v-card-title><h1>{{product.product_name}}</h1></v-card-title>
            <v-card-subtitle><p><h1>{{product.product_price}}</h1></v-card-subtitle>
            <v-card>
              <v-card-actions>
                <v-btn
                outlined
                text
                @click ="addToCart(product)">
                Add to Cart
                </v-btn>
                <v-btn
                outlined
                rounded
                text
                color="orange">
                Buy Now
                </v-btn>
                <v-btn
                icon
                dark
                color="red"
                @click="addToWishlist(product)">
                <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
        </v-col>
</v-row>


    </div>
</template>
<script>
export default {
    
}
</script>
<style>

</style>