/// <reference types="cypress" />
     const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade:login', () => {
    beforeEach(( ) => {
        cy.visit('minha-conta')
    });
    afterEach(() => {
        cy.screenshot()
  });
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('testfot@ebac.com.br');
        cy.get('#password').type('Self@145!=');
        cy.get('.woocommerce-form > .button').click();
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, testfot (não é testfot? Sair)')
    })
    
    it('Deve exibir mensagem de erro ao inserir usuario inválido', () => {
        cy.get('#username').type('test@ebac.com.br');
        cy.get('#password').type('Self@145!=');
        cy.get('.woocommerce-form > .button').click();
       cy.get('.woocommerce-error > li').should('exist')
        
    });
     it('Deve exibir mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('testfot@ebac.com.br');
        cy.get('#password').type('@145!=');
        cy.get('.woocommerce-form > .button').click();
        cy.get('.woocommerce-error > li').should('contain', 'A senha fornecida para o e-mail testfot@ebac.com.br está incorreta.')
});
it('Deve fazer login com sucesso - usando massa de dados', () => {
    cy.get('#username').type(perfil.usuario)
    cy.get('#password').type(perfil.senha)
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, testfot (não é testfot? Sair)')
});
it.only('Deve fazer login com sucesso - usando fixtures', () => {
    cy.fixture( 'perfil').then(dados => {
        cy.get('#username').type(dados.usuario, {log: false})
        cy.get('#password').type(dados.senha , {log:false})
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, testfot (não é testfot? Sair)')
    })
});
});
