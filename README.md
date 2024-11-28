# Exercícios de JavaScript - Aula 11

## **Visão Geral do Projeto**

Este repositório contém as soluções explicações para os **exercícios de JavaScript** da **Aula 11**, com foco em **Arrays** e **Estruturas de Repetição**. O objetivo é justamente praticar a manipulação de arrays utilizando métodos como `.push()`, `.pop()`, `.shift()`, `.filter()`, e `.includes()`, que são essenciais para dados em JavaScript.

A seguir, vou explicar cada código desenvolvido, abordando o que foi pedido e como cada função foi construída. Cada bloco de código está acompanhado de uma explicação de seu funcionamento e do que ele representa.

---


## **Questões e Soluções**

### **Questão 1: Gerenciar uma lista de tarefas**
- **O que foi pedido:**
  - Criar um array vazio chamado `tarefas`.
  - Adicionar três tarefas usando o método `.push()`.
  - Remover a última tarefa adicionada usando `.pop()`.
  - Exibir o array final no console.
- **Como foi resolvido:**
  - Crie uma função `gerenciarTarefas` que implementa todas as etapas descritas.
  - Utilizei os métodos `.push()` e `.pop()` para manipular o array. O `.push()` adiciona um novo item ao final do array e o `.pop()` remove o último item.

#### **Código**
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
```

## **Questão 2: Gerenciar um estoque**
### **O que foi pedido:**
- Criar um array estoque com quatro itens iniciais.
- Atualizar o segundo item no array.
- Exibir o número total de itens no estoque usando .length.
- Como foi resolvido: Criei uma função gerenciarEstoque que implementa todas as etapas descritas.
- Utilizei a indexação do array para atualizar o segundo item (acessando o índice 1) e o método .length para exibir o número total de itens.

### ***Código*** 
```javascript
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
    estoque[1] = "Item X";

    console.log("Estoque atualizado:", estoque);
    console.log("Número total de itens no estoque:", estoque.length);
}

gerenciarEstoque();
```
## ***Questão 3: Manipular uma lista de números***
### ***O que foi pedido:***
- Criar um array de números inteiros.
- Adicionar um número ao final do array usando .push().
- Remover o primeiro número usando .shift().
- Exibir o array no console.
- Como foi resolvido:
Criei uma função manipularNumeros para adicionar e remover números do array. O .push() é usado para adicionar um número ao final do array, e o .shift() remove o primeiro número.

### ***Código***
```javascript
/**
 * Manipula uma lista de números inteiros.
 * 
 * Este script cria um array de números inteiros, adiciona
 * um número ao final do array e remove o primeiro número.
 * 
 * @function manipularNumeros
 */
function manipularNumeros() {
    const numeros = [10, 20, 30, 40];

    // Adiciona um número ao final
    numeros.push(50);

    console.log("Números após adicionar:", numeros);

    // Remove o primeiro número
    numeros.shift();

    console.log("Números após remover o primeiro:", numeros);
}

manipularNumeros();
```
### ***Questão 4: Filtrar números positivos***
## ***O que foi pedido:***
- Criar um array de números com valores positivos e negativos.
- Filtrar apenas os números positivos usando o método .filter().
- Exibir o array resultante no console.
- Como foi resolvido:
Criei uma função filtrarPositivos que utiliza o método .filter() para selecionar apenas os números positivos do array. O .filter() retorna um novo array com os valores que atendem à condição.

### ***Código***
```javascript
/**
 * Filtra os números positivos de uma lista.
 * 
 * Este script cria um array de números e filtra
 * apenas os números positivos usando o método `.filter()`.
 * 
 * @function filtrarPositivos
 */
function filtrarPositivos() {
    const numeros = [-10, 15, -5, 30, 40];

    // Filtra os números positivos
    const positivos = numeros.filter(num => num > 0);

    console.log("Números positivos:", positivos);
}

filtrarPositivos();
```
### ***Questão 5: Verificar a presença de um número***
## O que foi pedido:
- Criar um array de números.
- Verificar se um número específico está presente no array usando o método .includes().
- Exibir o resultado no console.
- Como foi resolvido:
- Criei uma função verificarNumero que usa o método .includes() para verificar se um número específico está presente no array. O método .includes() retorna um valor booleano (verdadeiro ou falso).

### ***Código***
```javascript
/**
 * Verifica a presença de um número em uma lista.
 * 
 * Este script cria um array de números e verifica se um número
 * específico está presente no array usando o método `.includes()`.
 * 
 * @function verificarNumero
 */
function verificarNumero() {
    const numeros = [10, 20, 30, 40, 50];

    // Verifica se o número 20 está no array
    const presente = numeros.includes(20);

    console.log("Número 20 está presente:", presente);
}

verificarNumero();