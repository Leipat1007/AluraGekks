import { usersServices } from "../Services/API_Users.js";
const formLogin = document.querySelector("[data-form-login]");
formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    const userLogin = document.querySelector("[data-user]").value;
    const passwordLogin = document.querySelector("[data-password]").value;  
    if (userLogin !== '' && passwordLogin !== '') {
        usersServices.users().then((user) => {
            user.forEach(({user, password}) => {
                if (userLogin === user && passwordLogin === password){
                    window.location.href="/productos.html";
                }
            });
            if (userLogin !== user || passwordLogin !== password){
                alert("Usuario y/o contraseña invalido");
            }
        }).catch(err => alert("Usuario invalido"))
    }else {
        alert("Los datos no pueden estar en blanco")
    }
});