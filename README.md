# Exercícios de JavaScript - Aula 11

Este repositório contém as soluções para os exercícios propostos na aula 11, abordando **Arrays** e **Estruturas de Repetição** em JavaScript. 

Cada exercício foi desenvolvido em um arquivo separado seguindo o padrão de nomenclatura: **senac_UC13_aula11_qx.js**, onde `x` é substituído pelo número da questão. As funções foram documentadas usando **JSDoc**, e as soluções foram testadas no Node.js.

---

## **Questões e Soluções**

### **Questão 1: Gerenciar uma lista de tarefas**
- **O que foi pedido:**
  - Criar um array vazio chamado `tarefas`.
  - Adicionar três tarefas usando o método `.push()`.
  - Remover a última tarefa adicionada usando `.pop()`.
  - Exibir o array final no console.
- **Como foi resolvido:**
  - Criamos uma função `gerenciarTarefas` que implementa todas as etapas descritas.
  - Utilizamos os métodos `.push()` e `.pop()` para manipular o array.

---

### **Questão 2: Gerenciar um estoque**
- **O que foi pedido:**
  - Criar um array `estoque` com quatro itens iniciais.
  - Atualizar o segundo item no array.
  - Exibir o número total de itens no estoque usando `.length`.
- **Como foi resolvido:**
  - A função `gerenciarEstoque` foi implementada para criar e manipular o array, incluindo a atualização do segundo item e a exibição do total de itens.

---

### **Questão 3: Calcular médias de alunos**
- **O que foi pedido:**
  - Criar um array `alunos` onde cada elemento é um array contendo as notas de um aluno.
  - Usar um loop aninhado para calcular a média das notas de cada aluno.
  - Exibir o nome de cada aluno e sua respectiva média.
- **Como foi resolvido:**
  - Implementamos a função `calcularMediaAlunos`, que utiliza um array aninhado para armazenar as notas e calcula as médias usando `forEach` e `reduce`.

---

### **Questão 4: Exibir palavras em ordem reversa**
- **O que foi pedido:**
  - Criar um array `palavras` com pelo menos 5 palavras.
  - Usar um loop for reverso para exibir cada palavra no console.
- **Como foi resolvido:**
  - A função `exibirPalavrasReverso` foi criada para percorrer o array de trás para frente, exibindo cada palavra no console.

---

### **Questão 5: Jogo de adivinhação**
- **O que foi pedido:**
  - Criar um jogo que peça ao usuário para adivinhar um número entre 1 e 10.
  - Continuar pedindo números até que o usuário acerte ou digite "sair".
  - Exibir mensagens para respostas corretas e para o comando "sair".
- **Como foi resolvido:**
  - Implementamos a função `jogoAdivinhacao` utilizando `prompt` para interação com o usuário e um loop `while` para manter o jogo ativo até a condição de parada ser atendida.

---

## **Documentação das Funções**

### **Questão 1: `gerenciarTarefas`**
```javascript
/**
 * Gerencia uma lista de tarefas.
 */
function gerenciarTarefas() {
    const tarefas = [];

    // Adiciona três tarefas
    tarefas.push("Estudar JavaScript");
    tarefas.push("Fazer exercícios");
    tarefas.push("Revisar aulas");

    console.log("Tarefas após adicionar:", tarefas);

    // Remove a última tarefa
    tarefas.pop();

    console.log("Tarefas após remover a última:", tarefas);
}

gerenciarTarefas();
Questão 2: gerenciarEstoque
javascript
Copiar código
/**
 * Gerencia o estoque, permitindo a atualização de itens.
 * 
 * Este script cria um array com quatro itens iniciais, 
 * atualiza o segundo item do array e exibe o número total de itens.
 * 
 * @function gerenciarEstoque
 */
function gerenciarEstoque() {
    const estoque = ["Item A", "Item B", "Item C", "Item D"];

    // Atualiza o segundo item
    estoque[1] = "Item B atualizado";

    // Exibe o array atualizado e o total de itens
    console.log("Estoque atualizado:", estoque);
    console.log("Total de itens:", estoque.length);
}

gerenciarEstoque();
Questão 3: calcularMediaAlunos
javascript
Copiar código
/**
 * Calcula a média das notas de alunos e exibe o nome e a média de cada aluno.
 * 
 * Este script utiliza um array de objetos onde cada objeto representa um aluno
 * e suas respectivas notas. A média das notas é calculada utilizando o método
 * reduce para somar as notas e o forEach para iterar pelos alunos.
 * 
 * @function calcularMediaAlunos
 */
function calcularMediaAlunos() {
    const alunos = [
        { nome: "Alice", notas: [8, 7, 9] },
        { nome: "Bob", notas: [6, 5, 7] },
        { nome: "Carol", notas: [9, 9, 10] }
    ];

    alunos.forEach((aluno) => {
        const soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
        const media = soma / aluno.notas.length;

        console.log(`${aluno.nome} tem média: ${media.toFixed(2)}`);
    });
}

calcularMediaAlunos();
Questão 4: exibirPalavrasReverso
javascript
Copiar código
/**
 * Exibe as palavras de um array em ordem reversa.
 * 
 * Este script recebe um array de palavras e utiliza um loop for reverso
 * para exibir cada palavra no console na ordem inversa.
 * 
 * @function exibirPalavrasReverso
 * @param {string[]} palavras - Lista de palavras a serem exibidas.
 */
function exibirPalavrasReverso(palavras) {
    for (let i = palavras.length - 1; i >= 0; i--) {
        console.log(palavras[i]);
    }
}

exibirPalavrasReverso(["café", "livro", "código", "javascript", "aprendizado"]);
Questão 5: jogoAdivinhacao
javascript
Copiar código
/**
 * Jogo de adivinhação de número entre 1 e 10.
 * 
 * Este script gera um número aleatório entre 1 e 10 e solicita ao usuário
 * que adivinhe o número. O jogo continua até que o usuário acerte ou digite "sair".
 * 
 * @function jogoAdivinhacao
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