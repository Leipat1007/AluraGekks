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
                            <span class="productsPrice"><span>$</span> ${price}</span>
                            <a href="productsDetails.html?id=${id}" class="productsLink">Ver producto</a>
                        </div>`
    content.innerHTML = contentCard;
    return content;
}
productsServices.products().then((productos) => {
    productos.forEach(({id, urlImage, nameProduct, price}) => {
        const card = productsList(urlImage, nameProduct, price, id);
        cardProducts.appendChild(card);
    });
}).catch((err) => alert("Ocurrió un error"))