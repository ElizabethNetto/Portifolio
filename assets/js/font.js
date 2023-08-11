const Nome = document.querySelector('.nome');
const fName = Nome.innerHTML;
const node = document.querySelector('#fundo')
Nome.innerHTML='';

function typeWriter (nome) {
    setTimeout( () => {
    const meuNomeF = nome.split('');
    Nome.innerHTML='';
    meuNomeF.forEach( (letra, index) => {
        setTimeout(function (){
            Nome.innerHTML += letra;
        }, 150 * index)
    })}, 1500)
    
}