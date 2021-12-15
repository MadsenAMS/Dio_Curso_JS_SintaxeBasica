printOnHTML(LINEBREAK);

output = "<h3>IF Ternário</h3>";
printOnHTML();

output = `!overtime && tempo > 90 ? jogoAcabou = true : jogoAcabou = false`;
printOnHTML();

let jogoAcabou;
!overtime && tempoDeJogo > 90 ? (jogoAcabou = true) : (jogoAcabou = false);

output = `Jogo Acabou? → ${jogoAcabou}`;
printOnHTML();