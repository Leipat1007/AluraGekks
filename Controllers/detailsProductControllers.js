import { productsServices } from "../Services/ProductServices.js";
const container = document.querySelector("[data-content]");
const informationProduct = (img, nameProduct, price, description, id) => {
    const cardProduct = document.createElement("div");
    cardProduct.classList.add("cardProduct");
    const product = `<a href="productos.html" class="linkProduct">
                        <i class='bx bx-arrow-back'></i>
                        Atrás
                    </a>
                    <div class="cardProduct-image">
                        <img src="${img}" alt="producto ${nameProduct}">
                    </div>
                    <div class="cardDescription">
                        <div class="cardProduct-description">
                            <h2 class="descriptionTitle">${nameProduct}</h2>
                            <p class="descriptionPrice"><span>$ </span>${price}</p>
                            <p class="descriptionText">${description}</p>
                        </div>
                        <div class="icons">
                            <a href="updateProduct.html?id=${id}" class="linkEdit">
                                <i class='bx bx-edit'></i>
                                Editar
                            </a>
                            <button class="btnDelete" id=${id}>
                                <i class='bx bx-trash'></i>
                                Eliminar
                            </button>
                        </div>
                    </div>`
    cardProduct.innerHTML = product;
    const btnDelete = cardProduct.querySelector("button");
    btnDelete.addEventListener("click", deleteProduct);
    return cardProduct;
};
const info =  () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    productsServices.information(id).then(({urlImage, nameProduct, price, description, id}) => {
        container.appendChild(informationProduct(urlImage, nameProduct, price, description, id));
    })
};
info();
const deleteProduct = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    productsServices.deleteProduct(id).then(() => {
        window.location.href="productos.html";
    })
    .catch(err => alert("Ocurrio un error"))
};