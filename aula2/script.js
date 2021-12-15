let output;
const lineBreak = "<br> ------------------ <> -------------------- <br>";

function printOnHTML(input = output){
    document.getElementById("overwriteMe").innerHTML += "<br>" + input;
}

const genericBool = false;
const genericNum = 1;
const genericString = "John Doe";
let genericUndefiend;

document.getElementById("overwriteMe").innerHTML = "";

output = "<h3>Tipos de Variáveis<h3>";
printOnHTML();

output =`A variável 'genericBool' é do tipo (typeof): ${typeof(genericBool)}<br>`;
output +=`A variável 'genericNum' é do tipo (typeof): ${typeof(genericNum)}<br>`;
output +=`A variável 'genericString' é do tipo (typeof): ${typeof(genericString)}<br>`;
output +=`A variável 'genericUndefiend' é ${genericUndefiend}<br>`;
printOnHTML();

printOnHTML(lineBreak);

output = "<h3>Operadores<h3>";
printOnHTML();

output = "var a = a //Atribuição do valor 0 à variável a<br>";
output += "0 == '0' //Compara valor 'parsed' das variáveis. No caso, retorna true.<br>";
output += "0 ==='0' //Compara o valor e tipo das variáveis. No caso, retorna false.<br>";
output += "0 < 1 //Compara o valor e retorna true se o primeiro operador é menor do que o segundo.<br>";
output += "1 > 0 //Compara o valor e retorna true se o primeiro operador é maior do que o segundo.<br>";
output += "0 <= 1 //Compara o valor e retorna true se o primeiro operador é menor ou igual ao segundo.<br>";
output += "1 >= 0 //Compara o valor e retorna true se o primeiro operador é maior ou igual ao segundo.<br>";
output += "x >= 0 && x < 10 //Executa duas comparações e retorna true se ambas forem verdadeiras, ou false se qualquer uma for falsa.<br>";
output += "x >= 0 || x < 10 //Executa duas comparações e retorna true se qualquer uma for verdadeira, ou false se ambas forem falsa.<br>";

printOnHTML();

printOnHTML(lineBreak);

output = "<h3>Operadores Aritiméticos<h3>";
printOnHTML();

output = `+  → Soma dois valores. 2 + 2 = ${(2+2)}<br>`;
output += `- → Subtrai dois valores. 2 - 2 = ${(2-2)}<br>`;
output += `* → Multiplica dois valores. 2 * 3 = ${(2*3)}<br>`;
output += `/ → Divide dois valores. 2 / 2 =  ${(2/2)}<br>`;
output += `% → Calcula o resto de divisão 12%5 = ${(12%5)}<br>`; 

printOnHTML();