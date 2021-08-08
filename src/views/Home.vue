<template>
  <div>
    <table class="table-bordered">
      <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>

      </tr>
      <tr v-for="p in products" :key="p.id">
          <td>{{p.id}}</td>
          <td>{{p.name}}</td>
          <td>{{p.price}}</td>
          <td><router-link :to="{name: 'up', params: {product: p}}" class="btn btn-success">update</router-link></td>
          <td><button class="btn btn-danger" @click="removeProduct(p.id)">delete</button></td>
      </tr>
      <router-link to="/add" class="btn btn-warning">Add</router-link>

    </table>
  </div>
</template>
<script>
import { getAllProducts } from "../product.service.js";
import { deleteProduct } from "../product.service.js";

export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {

      getAllProducts().then((response)=>this.products=response.data)
  },

  methods: {
    removeProduct(id){
      deleteProduct(id).then(()=>this.$router.go())
    }
  }

};
</script>