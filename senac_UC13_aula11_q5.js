/**
 * Jogo de adivinhação.
 */
function jogoAdivinhacao() {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let tentativa;

    while (tentativa !== "sair") {
        tentativa = prompt("Adivinhe o número entre 1 e 10 ou digite 'sair':");

        if (tentativa === "sair") {
            console.log("Você saiu do jogo.");
            break;
        }

        if (parseInt(tentativa) === numeroSecreto) {
            console.log("Parabéns! Você acertou!");
            break;
        } else {
            console.log("Tente novamente.");
        }
    }
}

jogoAdivinhacao();
