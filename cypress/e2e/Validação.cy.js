describe('Validações de Interface - Quadro Kanban', () => {


    beforeEach(() => {
        cy.visit('/');
    });

    it('Verifica a presença das colunas padrão do Kanban', () => {
        // Conferir se as três colunas padrão existem
        cy.get('h1:contains("📝  To Do")').should('exist');
        cy.get('h1:contains("💻  In Progress")').should('exist');
        cy.get('h1:contains("🚀  Done")').should('exist');  

        // Conferir se cada coluna possui o botão de criação de tarefa
        cy.get('[id="📝  To DoCreateTask"]').should('exist');
        cy.get('[id="💻  In ProgressCreateTask"]').should('exist');
        cy.get('[id="🚀  DoneCreateTask"]').should('exist');
    });

    it('Valida a alternância do tema', () => {
        cy.get('input[role="switch"]').should('be.checked');
        cy.get('input[role="switch"]').parent().click();
        cy.get('input[role="switch"]').should('not.be.checked');
    });

    it('Confere a responsividade da tela', () => {
        // Desktop
        cy.viewport(1280, 720);
        cy.get('h1:contains("📝  To Do")').should('be.visible');

        // Tablet
        cy.viewport(768, 1024);
        cy.get('h1:contains("📝  To Do")').should('be.visible');

        // Mobile
        cy.viewport(375, 667);
        cy.get('h1:contains("📝  To Do")').should('be.visible');
    });
});
