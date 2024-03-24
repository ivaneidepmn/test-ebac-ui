///<reference types = "cypress"/>

describe('Funcionalidade : Detalhes da conta', () => {
    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then (login => {
            cy.login (login.usuario, login.senha)

        })
        
    });

    it('Deve completar detalhes da conta con sucesso', () => {
        cy.detalhesConta('Ivaneide', 'Nascimento', 'ivaneide.qa')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
        
    });
    
});
