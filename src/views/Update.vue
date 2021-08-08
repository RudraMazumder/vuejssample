<template>
    <div class="container-md">
        <div>ID: <input type="text" class="form-control" v-model="product.id" readonly></div>
        <div>Name: <input type="text" class="form-control" v-model="product.name"></div>
        <div>price: <input type="text" class="form-control" v-model="product.price"></div>
        <div><button class="btn btn-primary" @click="update">Save</button></div>

    </div>
</template>
<script>
import { updateProduct } from "../product.service.js";
export default {
    data(){
        return {
            product: this.$route.params.product
        }
    },
    methods: {
        update(){
            updateProduct(this.product).then(this.$router.push("/home"))
        }
    }
}
</script>