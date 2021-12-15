let output;
const lineBreak = "<br> ------------------ <> -------------------- <br>";

function organizeVectorOutput(){
    vetor.forEach(function(item, index){
        output += `Item ${index} = ${item}<br>`;
    });
}

function printOnHTML(input = output){
    document.getElementById("overwriteMe").innerHTML += "<br>" + input;
}

let vetor = ['string', 1, true];

output = `Criando um vetor misto: ${vetor}`;
printOnHTML();

output = `<h3>Manipulando Arrays</h3>`
printOnHTML();

output = `Selecionando e Escrevendo Cada Item do Array:<br>`
output += `Item 0 = ${vetor[0]}<br>`;
output += `Item 1 = ${vetor[1]}<br>`;
output += `Item 2 = ${vetor[2]}<br>`;
printOnHTML();

output = `Usando 'forEach' pra imprimir o vetor:<br>`
organizeVectorOutput();
printOnHTML();

output = `Usando 'push' pra adicionar um item ao vetor:<br>`
vetor.push('Este Item foi Incluído via Push');
organizeVectorOutput();
printOnHTML();

output = `Usando 'pop' pra remover um item do vetor:<br>`
vetor.pop();
organizeVectorOutput();
printOnHTML();

output = `Usando 'shift' pra remover um item do vetor:<br>`
vetor.shift();
organizeVectorOutput();
printOnHTML();

output = `Usando 'unshift' pra adicionar um item do vetor:<br>`
vetor.unshift("Este item foi incluído via 'unshift'");
organizeVectorOutput();
printOnHTML();

output = `Usando 'splice' pra remover um item (index 1) do vetor:<br>`
vetor.splice(1, 1);
organizeVectorOutput();
printOnHTML();

printOnHTML(lineBreak);

output = `<h3>Manipulando Objetos</h3>`
printOnHTML();

let dummyObject = {
    nome:  "dummyObject",
    dateOfBirth: "15.12.2021",
    isDummy: true,
    vectorLibrary: ['second vector', 1, true]
}

output = `Constructed then Deconstructed Object: <br>`
let {nome, dateOfBirth, isDummy, vectorLibrary} = dummyObject;
output += `Nome: ${nome} <br> Date of Birth:${dateOfBirth} <br> Is Dummy:${isDummy} <br> Vector Library: ${vectorLibrary}`; 
printOnHTML();