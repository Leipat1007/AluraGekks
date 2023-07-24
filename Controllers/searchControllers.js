import { productsServices } from "../Services/ProductServices.js";
const btnSearch = document.querySelector('[data-btn-search]');
const search = document.querySelector('[data-search]');
const filter = async() => {
    const data = await productsServices.products();
    if (search.value.toLowerCase() !== '' && search.value.toLowerCase() !== ' ') {
        data.forEach(({id, nameProduct}) => {
            if (search.value.toLowerCase() === nameProduct.toLowerCase()) {
                window.location.href=`productsDetails.html?id=${id}`;
            }
        });
        alert('Producto no encontrado');
    }else {
        alert('La busqueda no puede estar vacío');
    }
};
btnSearch.addEventListener('click',filter);