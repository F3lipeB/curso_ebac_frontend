/// <reference types="cypress" />

describe('Testes para o cadastro de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve incluir um contato', () => {
        cy.get('[type="text"]').type('Teobaldo')
        cy.get('[type="email"]').type('teotav@teste.com')
        cy.get('[type="tel"]').type('21 987654321')
        cy.get('.adicionar').click()
    })

    it('Deve alterar os dados do contato de teste', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').type('Tavares')
        cy.get('.alterar').click()
    })

    it ('Deve remover o contato de Teste', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
        cy.contains('TeobaldoTavares').should('not.exist')
    })
})