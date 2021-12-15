printOnHTML(LINEBREAK);

function Calculadora() {
  const operacao = Number(
    prompt(
      "Escolhar uma operação:\n 1- Soma (+) \n 2- Subtração (-) \n 3- Multiplicação (*) \n4- Divisão Real (/)\n5- Resto (%)\n6- Potenciação (**)"
    )
  );

  let resultado;
  let n1, n2;

  switch (operacao) {
    case 1:
      captureNumbers();
      soma();
      break;
    case 2:
      captureNumbers();
      subtracao();
      break;
    case 3:
      captureNumbers();
      multiplicacao();
      break;
    case 4:
      captureNumbers();
      divisaoReal();
      break;
    case 5:
      captureNumbers();
      divisaoInteira();
      break;
    case 6:
      captureNumbers();
      potenciacao();
      break;
    default:
      alert("Opção Inválida! Digite um número entre 1 e 6!");
      Calculadora();
      return;
  }

  function captureNumbers() {
    n1 = Number(prompt("Insira o Primeiro Valor:"));
    n2 = Number(prompt("Insira o Segundo Valor:"));
  }

  function soma() {
    resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`);
  }

  function subtracao() {
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`);
  }

  function multiplicacao() {
    resultado = n1 * n2;
    alert(`${n1} * ${n2} = ${resultado}`);
  }

  function divisaoReal() {
    resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`);
  }

  function divisaoInteira() {
    resultado = n1 % n2;
    alert(`${n1} % ${n2} = ${resultado}`);
  }

  function potenciacao() {
    resultado = n1 ** n2;
    alert(`${n1} ** ${n2} = ${resultado}`);
  }

  function repetir() {
    let opcao = Number(prompt("Realizar Novo Cálculo?\n1- Sim\n2- Não"));

    if (opcao === 1) {
      Calculadora();
    } else if (opcao === 2) {
      alert("Calculadora Terminada!");
    } else {
      alert("Opção Inválida! Digite 1 ou 2!");
      repetir();
      return;
    }
  }

  repetir();
}

Calculadora();
