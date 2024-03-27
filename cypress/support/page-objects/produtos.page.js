class ProdutosPage {
    visitarUrl() {
        cy.visit('/produtos');
    }

    buscarProdutos(nomeProduto) {
        cy.get('[name="s"]').eq(1).type(nomeProduto);
        cy.get('.button-search').eq(1).click();
    }

    buscarProdutoLista(nomeProduto) {
        cy.get('.products > .row').contains(nomeProduto).click();
    }

    visitarProduto(nomeProduto) {
        const UrlFormatada = nomeProduto.replace(/ /g, '-');
        cy.visit(`/produtos/${UrlFormatada}`);
    }

    addProdutoCarrinho(tamanho, cor, quantidade) {
       
        cy.get('.button-variable-item-' + tamanho).click();
        cy.get('.product_title').should('exist').click(); 
        cy.get('.input-text').clear().type(quantidade).should('have.value', quantidade);

        cy.get('.single_add_to_cart_button').click();
    }

    buscarProduto(nomeProduto) {
        cy.get('.products > .row').contains(nomeProduto).click();
    }
}

export default new ProdutosPage();
