/**
 * Calcula a média de notas de alunos.
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
