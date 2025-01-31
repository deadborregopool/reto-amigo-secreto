// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];

function agregarAmigo () {
    let entrada= document.getElementById("amigo")
    let validarAmigo = entrada.value.trim();

    if(validarAmigo===""){
        alert("Por favor, inserte un nombre")
    }else{
        amigos.push(validarAmigo);
        entrada.value="";
    }
    
}