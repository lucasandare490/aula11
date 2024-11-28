/**
 * Gerencia o estoque.
 */
function gerenciarEstoque() {
    // Criação do array com 4 itens
    const estoque = ["Item A", "Item B", "Item C", "Item D"];

    // Atualização do segundo item
    estoque[1] = "Item B atualizado";

    // Exibição do total de itens
    console.log("Estoque atualizado:", estoque);
    console.log("Total de itens:", estoque.length);
}

gerenciarEstoque();
