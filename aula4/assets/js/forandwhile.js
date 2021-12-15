printOnHTML(LINEBREAK);

output = "<h3>For e While</h3>"
printOnHTML();

let primeiroTrimestre = ['janeiro', 'fevereiro', 'março'];
let segundoTrimestre = ['abril', 'maio', 'junho'];
let terceiroTrimestre = ['julho', 'agosto', 'setembro'];

let gato = {
    patas: 4,
    nome: 'fluffy',
    raça: 'srd'
}

output = `Printando primeiroTrimestre (array) com 'for' clássico:`;
printOnHTML();

output = "";
for(let i = 0; i < primeiroTrimestre.length; i++){
    output += `index ${i} = ${primeiroTrimestre[i]}<br>`;
}
printOnHTML();

output = `Printando segundoTrimestre (array) com 'for i of <i>variable<i>':`;
printOnHTML();

output = "";
for(month of segundoTrimestre){
    output += `index ${segundoTrimestre.indexOf(month)} = ${month}<br>`;
}
printOnHTML();

output = `Printando terceiroTrimestre (array) com 'while':`;
printOnHTML();

output = "";
let i = 0;
while(i < terceiroTrimestre.length){
    output += `index ${i} = ${terceiroTrimestre[i]}<br>`;
    i++;
}
printOnHTML();