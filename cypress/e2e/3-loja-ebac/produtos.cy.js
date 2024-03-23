/// <reference types="cypress" />

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        cy.visit('produtos')
    });
    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block').first().click()

        cy.get('#tab-title-additional_information > a').should('contain','Informação adicional')

        });
    it('Deve selecionar o terceiro nome da lista', () => {
    cy.get('.block-inner').eq(2).click();
    cy.get('#tab-title-description > a').should('contain','Descrição');
    });
    it('Deve selecionar produto da lista pelo nome', () => {
        cy.get('.product-block').contains('Arcadio Gym Short');

    });
    });