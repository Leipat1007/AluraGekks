const API_Services = 'http://localhost:3000/productos/';
const products = () =>  fetch(API_Services).then(response => response.json());
const newProduct = (urlImage, category, nameProduct, price, description) => {
    return fetch(API_Services, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({id:uuid.v4(),urlImage,category,nameProduct,price,description})
    })
};
const information = (id) => {
    const infoProduct = API_Services + id;
    return fetch (infoProduct).then(response => response.json());
};
const updateProduct = (id, urlImage, category, nameProduct, price, description) => {
    const update = API_Services + id;
    return fetch(update, {
        method: "PUT",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({urlImage, category, nameProduct, price, description})
    })
};
const deleteProduct = (id) => {
    const deleteProd = API_Services + id;
    return fetch(deleteProd, {
        method: "DELETE"
    })
};
export const productsServices = {
    products,
    newProduct,
    information,
    updateProduct,
    deleteProduct,
}
