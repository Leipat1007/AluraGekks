const API_Services = 'http://localhost:3000/productos';
const products = () =>  fetch(API_Services).then(response => response.json());
export const productsServices = {
    products,
}