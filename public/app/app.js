const menu = document.querySelector("#menu");
const secciones = document.querySelector('.secciones');
const links = document.querySelectorAll('a');

menu.addEventListener("click", function activar(){
    menu.classList.toggle("is-active")
    if(secciones.style.display == "block"){
        secciones.style.display = "none"
    }else{
        secciones.style.display = "block"
    }
})