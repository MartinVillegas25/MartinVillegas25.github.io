
//menu

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

//Contact form


let nombre = document.querySelector(`#floatingname`);
let correo = document.querySelector(`#floatingemail`);
let mensaje= document.querySelector(`#floatingtextarea`);
let formulario = document.querySelector(`#form`);   

function enviarFormulario(event){
event.preventDefault()
if(nombre.value === null || nombre.value === ''){
    alert("You must to complete the Name");
}
if(mensaje.value=== null || mensaje.value=== ''){
    alert("You must to complete the Message");    
}
if(correo.value===null || correo.value ===''){
    alert("You must to complete the Email");
}

mensajeEnviado()
}

document.querySelector(`#botonformulario`).addEventListener(`click`, enviarFormulario);

async function mensajeEnviado(){
const form = new FormData(formulario);
const response = await fetch(formulario.action,{
    method: formulario.method,
    body: form,
    headers:{
        'Accept': 'application/json'
    }
})
if(response.ok){
    formulario.reset()
    alert("Message Sent"); 
}

}