import axios from "axios";

let config = {
    headers: {
        'Content-Type': 'application/json',
    }
  }
export function getAllProducts(){
    return axios.get("http://localhost:8080/products")
}

export function addProduct(product){
    return axios.post("http://localhost:8080/products",product,config);
}

export function updateProduct(product) {
    return axios.put(`http://localhost:8080/products/${product.id}`,product, config)
}

export function deleteProduct(id) {
    return axios.delete(`http://localhost:8080/products/${id}`)
}
