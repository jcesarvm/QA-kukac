Cypress.Commands.add('CriarLista', (NomeLista) => {
    cy.contains('p', 'Adicionar outra lista')
        .type(NomeLista)
    cy.get('.btn')
        .click()
    cy.contains(NomeLista).should('be.visible')

})

Cypress.Commands.add('AdicionarTarefa', (Tarefa) => {
    cy.get('#ListaAutomaçãoCreateTask')
        .type(Tarefa)
    cy.get('.btn').click()

    cy.contains(Tarefa).should('be.visible')
})


Cypress.Commands.add('AdicionarTag', (Tag) => {
    cy.contains('TarefaAutomação').click()
    cy.contains('p', 'Adicionar nova Tag')
        .type(Tag)
    cy.get('#0Color').click()
    cy.get('.btn')
        .click()

    cy.get('body').click(0, 0) // clica fora pra fechar

})



    //cy.get('#ListaAutomaçãotrash').click()
    Cypress.Commands.add('ExcluirLista', (NomeLista) => {
cy.contains(NomeLista)
  .parent()
  .find('.trash')
  .click()

})





