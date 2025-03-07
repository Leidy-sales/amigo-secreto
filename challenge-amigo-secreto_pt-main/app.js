let InputVazio = '';
let amigos = [];
let numeroDeParticipantes = 0;
let nomeJaSorteado = []

function texto(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo() {
    let campo = document.querySelector('input').value;
    if (amigos.includes(campo)|| campo == ''){
        alert('Digite um nome, por favor!');
    }else{
        amigos.push(campo);
        numeroDeParticipantes++;
        console.log(numeroDeParticipantes);
        console.log(amigos);
        limparNome();
        exibirAmigosNaTela();
    }
}

function limparNome (){
    let campo = document.querySelector('input');
    campo.value = '';
}
function nomeAleatorio (){
    let campo = Math.floor(Math.random()*amigos.length);
    return campo

}
let nomeSorteado;
function sortearAmigo (){
    do {
        nomeAleatorio();
        nomeSorteado = nomeAleatorio();

    } while(nomeJaSorteado.includes(nomeSorteado));
        nomeJaSorteado.push(nomeSorteado);
        alert(`Seu amigo secreto é: ${amigos[nomeSorteado]}`);

}

function exibirAmigosNaTela (){
    let campo = document.getElementById ('listaAmigos');
    campo.innerHTML = '';
    for(let i=0; i < amigos.length; i++){
        let item = document.createElement ('li');
        item.textContent = amigos[i];
        campo.appendChild(item);
    }
}