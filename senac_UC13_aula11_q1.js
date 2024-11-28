/**
 * Gerencia uma lista de tarefas.
 */
function gerenciarTarefas() {
    // Criação do array de tarefas
    const tarefas = [];

    // Adicionar três tarefas
    tarefas.push("Estudar JavaScript");
    tarefas.push("Fazer exercícios");
    tarefas.push("Revisar aulas");

    console.log("Tarefas após adicionar:", tarefas);

    // Remover a última tarefa
    tarefas.pop();

    console.log("Tarefas após remover a última:", tarefas);
}

gerenciarTarefas();
