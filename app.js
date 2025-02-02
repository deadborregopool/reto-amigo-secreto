// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];

function agregarAmigo () {
    let entrada= document.getElementById("amigo")
    let validarAmigo = entrada.value.trim();

    if(validarAmigo===""){
        alert("Por favor, Ingrese su nombre");
    }else{
        amigos.push(validarAmigo);
        ActualizarMostrarArreglo();
        entrada.value="";
    }
    
}
function ActualizarMostrarArreglo(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML="";
    for(i=0;i<amigos.length;i++){
        let amigoListado = document.createElement("li");
        amigoListado.textContent = amigos[i];
        lista.appendChild(amigoListado);
    }
}

function sortearAmigo () {
    if(amigos.length===0){
        alert("Por favor, Ingrese nombres para empezar el Sorteo")
    }
    else if(amigos.length===1){
        alert("Donde esta la gracia en tener un participante?, Por favor Agregue mas nombres a lista");
    }else{
        document.getElementById("listaAmigos").innerHTML="";
        let indiceAleatorio=Math.floor(Math.random()*amigos.length);
        let amigoSecreto=amigos[indiceAleatorio];
        document.getElementById("resultado").innerHTML = `<li>El amigo secreto sorteado es : ${amigoSecreto}</li>`;
    }
} 