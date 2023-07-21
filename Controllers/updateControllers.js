import { productsServices } from "../Services/API.js";
const formUpdate = document.querySelector("[data-form]");
const info = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const urlUpdate = document.querySelector("[data-img]");
    const categoryUpdate = document.querySelector("[data-category]");
    const nameUpdate = document.querySelector("[data-name]");
    const priceUpdate = document.querySelector("[data-price]");
    const descriptionUpdate = document.querySelector("[data-description]");
    productsServices.information(id).then(({urlImage, category, nameProduct, price, description}) => {
        urlUpdate.value = urlImage;
        categoryUpdate.value = category;
        nameUpdate.value = nameProduct;
        priceUpdate.value = price;
        descriptionUpdate.value = description;
    })
};
info();
formUpdate.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const urlUpdate = document.querySelector("[data-img]").value;
    const categoryUpdate = document.querySelector("[data-category]").value;
    const nameUpdate = document.querySelector("[data-name]").value;
    const priceUpdate = document.querySelector("[data-price]").value;
    const descriptionUpdate = document.querySelector("[data-description]").value;
    productsServices.updateProduct(id, urlUpdate, categoryUpdate, nameUpdate, priceUpdate, descriptionUpdate).then(() => {
        window.location.href = `productsDetails.html?id=${id}`;
    })
});