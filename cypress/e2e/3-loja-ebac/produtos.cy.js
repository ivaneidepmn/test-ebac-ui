/// <reference types="cypress" />
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {
    let qtd = 1;

    beforeEach(() => {
        produtosPage.visitarUrl();
    });

    it('Deve selecionar um produto da lista', () => {
        // Testa se é possível selecionar um produto da lista
        produtosPage.buscarProdutoLista('Aero Daily Fitness Tee');
        cy.get('#tab-title-additional_information > a').should('contain', 'Informação adicional');
    });

    it('Deve buscar um produto com sucesso', () => {
        // Testa se é possível buscar um produto com sucesso
        let produto = 'Caesar Warm-Up Pant';
        produtosPage.buscarProdutos(produto);
        cy.get('.product_title').should('contain', produto);
    });

    it('Deve visitar a página do produto', () => {
        // Testa se é possível visitar a página de um produto específico
        let produto = 'Abominable hoodie';
        produtosPage.visitarProduto(produto);
        cy.get('.product_title').should('contain', produto);
    });

    it('Deve adicionar produto ao carrinho', () => {
        // Testa se é possível adicionar um produto ao carrinho
        let qtd = 7;
        produtosPage.addProdutoCarrinho('M', 'Blue', qtd); 
        cy.get('.woocommerce-message').should('contain', `${qtd} x "Abominable Hoodie"`);
    });

    it('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        // Testa se é possível adicionar um produto ao carrinho buscando da massa de dados
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProdutos(dados[1].nomeProduto);
            produtosPage.addProdutoCarrinho(
                dados[1].tamanho,  
                dados[1].cor, 
                dados[1].quantidade 
            );
            cy.get('.product_title').should('contain', dados[1].nomeProduto);
        }).catch(error => {
            // Trata erro caso a massa de dados não seja encontrada
            throw new Error('Erro ao carregar dados da massa de teste: ' + error.message);
        });
    });
});
