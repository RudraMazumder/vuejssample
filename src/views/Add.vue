<template>
<div class="container-md">

    Name : <input type="text" class="form-control" v-model="product.name"/><br>
    Price : <input type="number" class="form-control" v-model="product.price"/>
    <button class="btn btn-primary" @click="add">Add</button>
</div>
    
</template>
<script>
import { addProduct } from "../product.service.js";
export default {
    data(){
        return {
            product: {name: '',price: ''}
        }
    },
    methods:{
        add(){
            addProduct(this.product).then(()=>this.$router.push("/home"))
        }
    }
}
</script>
