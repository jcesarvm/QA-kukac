

describe('template spec', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Adicionar Lista', () => {
    cy.CriarLista('ListaAutomação')
  })

  it('Adicionar Tarefas', () => {
    cy.CriarLista('ListaAutomação')
    cy.AdicionarTarefa('TarefaAutomação')
  })

  it('Adicionar Tags', () => {
    cy.CriarLista('ListaAutomação')
    cy.AdicionarTarefa('TarefaAutomação')
    cy.AdicionarTag('TagTeste')
  })

  it('Excluir Lista', () => {
    cy.CriarLista('ListaAutomação')
    cy.ExcluirLista('ListaAutomação')
  })

it('Mudar modo noturno', () => {
  cy.get('input[role="switch"]', { timeout: 10000 })
    .should('be.visible')
    .should('have.attr', 'aria-checked', 'true') // ligado
    .click({ force: true });

  // Espera dinamicamente até mudar para false = desligado 
  cy.get('input[role="switch"]', { timeout: 10000 })
    .should('have.attr', 'aria-checked', 'false');
})
})


