printOnHTML(LINEBREAK);

output = "<h3>Switch</h3>";
printOnHTML();

let placar;

if (pointsPlayerOne > pointsPlayerTwo) {
  placar = pointsPlayerOne > pointsPlayerTwo;
} else if (pointsPlayerTwo > pointsPlayerTwo) {
  placar = pointsPlayerTwo > pointsPlayerOne;
}

output = "switch (placar) {<br>"
output += "case (placar = pointsPlayerOne > pointsPlayerTwo):<br>"
output += TAB + "output = `Jogador 1 ganhou!<br>`";
output += TAB + "break;<br>";
output += "case (placar = pointsPlayerTwo > pointsPlayerOne):<br>";
output += TAB + "output = `Jogador 2 ganhou!`;<br>";
output += TAB + "break;<br>";
output += "default:<br>";
output += TAB + "output = `Empate!`;<br>";
output += " };<br>";
printOnHTML();     
 

switch (placar) {
  case (placar = pointsPlayerOne > pointsPlayerTwo):
    output = `Jogador 1 ganhou!`;
    break;
  case (placar = pointsPlayerTwo > pointsPlayerOne):
    output = `Jogador 2 ganhou!`;
    break;
  default:
    output = `Empate!`;
}

printOnHTML();