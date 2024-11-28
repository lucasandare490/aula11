/**
 * Jogo de adivinhação de número entre 1 e 10.
 *
 * Este script gera um número aleatório entre 1 e 10 e solicita ao usuário
 * que adivinhe o número. O jogo continua até que o usuário acerte ou digite "sair".
 *
 * @function jogoAdivinhacao
 */

const readline = require("readline");

// Configuração do input e output no Node.js
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function jogoAdivinhacao() {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;

    function perguntar() {
        rl.question("Adivinhe o número entre 1 e 10 ou digite 'sair': ", (resposta) => {
            if (resposta.toLowerCase() === "sair") {
                console.log("Você saiu do jogo.");
                rl.close();
            } else if (parseInt(resposta) === numeroSecreto) {
                console.log("Parabéns! Você acertou!");
                rl.close();
            } else {
                console.log("Tente novamente.");
                perguntar(); // Continua o jogo
            }
        });
    }

    perguntar();
}

jogoAdivinhacao();
