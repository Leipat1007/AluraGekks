import { productsServices } from "../Services/API.js";
const formProducts = document.querySelector("[data-form]");
formProducts.addEventListener("submit", (event) => {
    event.preventDefault();
    const imgProduct = document.querySelector("[data-img]").value;
    const categoryProduct = document.querySelector("[data-category]").value;
    const nameProduct = document.querySelector("[data-name]").value;
    const priceProduct = document.querySelector("[data-price]").value;
    const descriptionProduct = document.querySelector("[data-description]").value;
    productsServices.newProduct(imgProduct,categoryProduct,nameProduct,priceProduct,descriptionProduct)
    .then(respuesta => {
        window.location.href="/productos.html";
    })
});