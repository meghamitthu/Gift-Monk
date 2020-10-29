<template>
    <div>
        <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h3>
        CUSTOMIZABLE COLLECTIONS
      </h3>
    </v-card-title></v-card>
        <v-row class="px-md-16 mx-lg-auto">
        <v-col cols="12" md="3" v-for="product in products" :key="product.product_name">
            <img height="200px" width="100%" :src="product.product_image"/>
            <h1 class="text-center justify-center">{{product.product_name}}</h1>
            <p class="text-center justify-center">{{product.product_price}}</p>
        </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
   data(){
        return{
            
            products : [
                {
                    "product_name" : "Custom T-shirts",
                    "product_price" : "Rs.800",
                    "product_image" : "../assets/tshirt.png",
                },
                {
                    "product_name" : "Custom Clocks",
                    "product_price" : "Rs.1000",
                    "product_image" : "../assets/clock.png",
                },
                // {
                //     "product_name" : "Custom Plate",
                //     "product_price" : "250",
                //     "product_image" : "../assets/plate.png",
                // },
                // {
                //     "product_name" : "Custom Mug",
                //     "product_price" : "250",
                //     "product_image" : "../assets/mug.png",
                // },
                // {
                //     "product_name" : "Custom Keychain",
                //     "product_price" : "250",
                //     "product_image" : "../assets/keychain.png",
                // },
                // {
                //     "product_name" : "Custom Pillow",
                //     "product_price" : "250",
                //     "product_image" : "../assets/pillow.png",
                // },
                // {
                //     "product_name" : "Custom Cap",
                //     "product_price" : "250",
                //     "product_image" : "../assets/cap.png",
                // },
            ]
        }
    }, 
}
</script>
<style>

</style>