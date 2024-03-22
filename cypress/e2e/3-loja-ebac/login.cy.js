/// <reference types="cypress" />

describe('Funcionalidade:login', () => {
    it('deve fazer login', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('testfot@ebac.com.br');
        cy.get('#password').type('Self@145!=');
        cy.get('.woocommerce-form > .button').click();

        // Resultado esperado
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, testfot (não é testfot? Sair)')
    })
    
    it('Deve exibir mensagem de erro ao inserir usuario inválido', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
        cy.get('#username').type('test@ebac.com.br');
        cy.get('#password').type('Self@145!=');
        cy.get('.woocommerce-form > .button').click();

      ///Resultado esperado
     ///duas formas de inavlidar
     ///cy.get('.woocommerce-error > li').should('contain' , 'Endereço de e-mail desconhecido. ')
       cy.get('.woocommerce-error > li').should('exist')
        
    });
     it('Deve exibir mensagem de erro ao inserir senha inválida', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
        cy.get('#username').type('testfot@ebac.com.br');
        cy.get('#password').type('@145!=');
        cy.get('.woocommerce-form > .button').click();
        cy.get('.woocommerce-error > li').should('contain', 'A senha fornecida para o e-mail testfot@ebac.com.br está incorreta.')
});
})
