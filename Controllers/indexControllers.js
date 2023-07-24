import { productsServices } from "../Services/ProductServices.js";
const sectionConsole = document.querySelector('[data-product1]');
const sectionVideoGame = document.querySelector('[data-product2]');
const sectionVaried = document.querySelector('[data-product3]');
const createProduct = (product) => {
    const {urlImage, nameProduct, price, id} = product;
    const item = document.createElement("div");
    item.classList.add("productsItem");
    const content = `<div class="productsImagen">
                        <img src="${urlImage}" alt="${nameProduct}">
                    </div>
                    <div class="productsDescription">
                        <span class="productsTitle">${nameProduct}</span>
                        <span class="productsPrice"><span>$</span>${price}</span>
                        <a href="productsDetails.html?id=${id}" class="productsLink">Ver producto</a>
                    </div>`
    item.innerHTML = content;
    return item;
};
const createProductGeneral = async() => {
    const data = await productsServices.products();
    data.filter(product => {
        if (product.category === 'Consolas'){
            const card = createProduct(product);
            sectionConsole.appendChild(card);
        }
        if (product.category === 'Video juegos'){
            const card = createProduct(product);
            sectionVideoGame.appendChild(card);
        }
        if (product.category === 'Variados'){
            const card = createProduct(product);
            sectionVaried.appendChild(card);
        }
    })
};
createProductGeneral();