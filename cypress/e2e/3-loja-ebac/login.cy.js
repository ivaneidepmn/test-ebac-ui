/// <reference types="cypress" />

// Remova a linha abaixo, pois não é necessário importar o jQuery explicitamente
// const { contains } = require("cypress/types/jquery")

describe('Funcionalidade:login', () => {
    it('deve fazer login', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
        cy.get('#username').type('testfot@ebac.com.br');
        cy.get('#password').type('Self@145!=');
        cy.get('.woocommerce-form > .button').click();

        // Resultado esperado
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, testfot (não é testfot? Sair)');
    });
});
