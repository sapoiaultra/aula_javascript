/*let nome = "Rafael Galleani";
let n = 5;
let n1 = 3;
let frase = "Japão é o melhor time do mundo";
alert(nome + " tem " + idade + " anos")
console.log(nome);
console.log(n * n1);
console.log(frase.toUpperCase());
alert(frase.replace("Japão", "Argentina")) 

var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
console.log(fruta.cor); 

var frutas = [{nome:"maçã", cor:"vermelha"},
{nome:"uva", cor:"roxa"}];

console.log(frutas);
console.log(frutas[1].nome); 

var idade = prompt("Qual a sua idade?");
if(idade >= 18){
    alert("Maior de idade");
} else {
    alert("Menor de idade");
}; 

let count = 0;
while(count <= 5){
    console.log(count);
    count ++;
} 

var count;
for(count = 0; count <= 5; count++) {
    console.log(count);
}; 

var d = new Date();
console.log("Hoje é: " + (d.getMonth()+1) + " de " + d.getFullYear()); 

function soma(n1, n2){
    return n1 + n2;
}
alert(soma(10, 5)); 

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
console.log(setReplace("Vai Japão", "Japão", "Argentina")); 

var validar;

function validaIdade(idade){
    if(idade >= 18){
        validar = true
    } else {
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
validaIdade(idade)
console.log(validar); 

function clicou(){
    alert("Obrigado por clicar");
} */

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}

function funcaoChange(elemento){
    console.log(elemento.value);
}