///<reference types="cypress" />
import faker from 'faker';

describe('Funcionalidade: Cadastro', () => {
    beforeEach(() => {
        cy.visit('/minha-conta');
    });

    it('Deve completar o cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email());
        cy.get('#reg_password').type('carD52$.A');
        cy.get(':nth-child(4) > .button').click();
        
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist');
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();
        cy.get('#account_first_name').type(faker.name.firstName());
        cy.get('#account_last_name').type(faker.name.lastName());
        cy.get('.woocommerce-Button').click();
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.');       
    });

    it('Deve completar o cadastro com sucesso - Usando variáveis', () => {
        var nome = faker.name.firstName();
        var email = faker.internet.email(nome);
        var sobrenome = faker.name.lastName();

        cy.get('#reg_email').type(email);
        cy.get('#reg_password').type('carD52$.A');
        cy.get(':nth-child(4) > .button').click();
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist');///<reference types="cypress" />
        import faker from 'faker';
        
        // Define o comando customizado preCadastro
        Cypress.Commands.add('preCadastro', (email, senha, nome, sobrenome) => {
            cy.get('#reg_email').type(email);
            cy.get('#reg_password').type(senha);
            cy.get(':nth-child(4) > .button').click();
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist');
            cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();
            cy.get('#account_first_name').type(nome);
            cy.get('#account_last_name').type(sobrenome);
            cy.get('.woocommerce-Button').click();
        });
        
        describe('Funcionalidade: Cadastro', () => {
            beforeEach(() => {
                cy.visit('/minha-conta');
            });
        
            it('Deve completar o cadastro com sucesso', () => {
                cy.get('#reg_email').type(faker.internet.email());
                cy.get('#reg_password').type('carD52$.A');
                cy.get(':nth-child(4) > .button').click();
                
                cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist');
                cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();
                cy.get('#account_first_name').type(faker.name.firstName());
                cy.get('#account_last_name').type(faker.name.lastName());
                cy.get('.woocommerce-Button').click();
                cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.');       
            });
        
            it('Deve completar o cadastro com sucesso - Usando variáveis', () => {
                var nome = faker.name.firstName();
                var email = faker.internet.email(nome);
                var sobrenome = faker.name.lastName();
        
                cy.get('#reg_email').type(email);
                cy.get('#reg_password').type('carD52$.A');
                cy.get(':nth-child(4) > .button').click();
                cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist');
                cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();
                cy.get('#account_first_name').type(nome);
                cy.get('#account_last_name').type(sobrenome);
                cy.get('.woocommerce-Button').click();
                cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.');
            });
        
            it('Deve completar o cadastro com sucesso - Usando Comando Customizado', () => {
                cy.preCadastro(faker.internet.email(), 'carD52$.A', faker.name.firstName(), faker.name.lastName());
                cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();
                cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.');
            });
        });
        
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();
        cy.get('#account_first_name').type(nome);
        cy.get('#account_last_name').type(sobrenome);
        cy.get('.woocommerce-Button').click();
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.');
    });

    it('Deve completar o cadastro com sucesso - Usando Comando Customizado', () => {
        cy.preCadastro(faker.internet.email(), 'carD52$.A', faker.name.firstName(), faker.name.lastName());
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.');
    });
});
