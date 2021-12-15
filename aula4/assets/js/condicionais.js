printOnHTML(LINEBREAK);

output = "<h3>Condicionais (IF)</h3>";
printOnHTML();

const tempoDeJogo = 92;
const pointsPlayerOne = 3;
const pointsPlayerTwo = 2;
let overtime;

output = `Tempo de Jogo: ${tempoDeJogo}<br>`;
output += `Pontuação Jogador1: ${pointsPlayerOne}<br>`;
output += `Pontuação Jogador3: ${pointsPlayerTwo}<br>`;
printOnHTML();

output = `1- If time > 90 && Pontuação Jogador 1 != Pontuação Jogador 2<br>`;
output += `${TAB + TAB}{Overtime = false}<br>`;
output += `2- Else if Time <= 90<br>`;
output += `${TAB + TAB}{Overtime = false}<br>`;
output += `3- Else<br>`;
output += `${TAB + TAB}{Overtime = true}<br>`;
printOnHTML();

if (tempoDeJogo > 90 && pointsPlayerOne != pointsPlayerTwo) {
  overtime = false;
} else if (tempoDeJogo <= 90) {
  overtime = false;
} else {
  overtime = true;
}

output = `Overtime = ${overtime}`;
printOnHTML();