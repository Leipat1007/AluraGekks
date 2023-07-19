import { productsServices } from "../Services/API.js";
const cardProducts = document.querySelector('[data-content]');
const productsList = (img, name, price, id) => {
    const content = document.createElement('div');
    content.classList.add("productsItem");
    const contentCard = `<div class="productsImagen">
                            <img src="${img}" alt="Consola Portatil X7">
                        </div>
                        <div class="productsDescription">
                            <span class="productsTitle">${name}</span>
                            <span class="productsPrice">$ ${price}</span>
                            <a href="#" class="productsLink">Ver producto</a>
                        </div>`
    content.innerHTML = contentCard;
    return content;
}
productsServices.products().then((productos) => {
    productos.forEach(({id, urlImage, name, price}) => {
        const card = productsList(urlImage, name, price, id);
        cardProducts.appendChild(card);
        console.log("entra")
    });
}).catch((err) => alert("Ocurrió un error"))