const API_Services = 'http://localhost:3000/productos/';
const products = () =>  fetch(API_Services).then(response => response.json());
const newProduct = (urlImage, category, nameProduct, price, description) => {
    return fetch(API_Services, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({id:uuid.v4(),urlImage,category,nameProduct,price,description})
    })
};
export const productsServices = {
    products,
    newProduct,
}
