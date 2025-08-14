# QA Kukac - Testes Automatizados do Quadro Kanban

Este projeto contém testes automatizados da interface do **Quadro Kanban** utilizando **Cypress**. O objetivo é garantir que a aplicação funcione corretamente e que a interface seja consistente e responsiva.

---

## Estrutura do Projeto

- `cypress/e2e/` - Contém os arquivos de testes (`.cy.js`).
- `cypress/fixtures/` - Dados de teste (opcional).
- `cypress/support/` - Configurações e comandos personalizados do Cypress.
- `package.json` - Gerencia dependências e scripts do projeto.

---

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/jcesarvm/QA-kukac.git
   cd QA-kukac
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

---

## Como Executar os Testes

- Abrir Cypress em modo interativo (GUI):

  ```bash
  npx cypress open
  ```

- Rodar todos os testes no modo headless:

  ```bash
  npx cypress run
  ```

- Para rodar um teste específico:

  ```bash
  npx cypress run --spec "cypress/e2e/nome-do-teste.cy.js"
  ```

---

## Bugs Identificados no Quadro Kanban

Durante os testes de interface, foram identificados os seguintes problemas:

| Bug                             | Comportamento Atual                                       | Comportamento Esperado                                           |
| ------------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------- |
| Botão de modo noturno fixo      | Permanece fixo ao adicionar listas e atrapalha o conteúdo | O botão deve acompanhar a tela ao rolar                          |
| Adicionar outra lista no mobile | Botão sobrepõe a última lista                             | Botão deve ficar abaixo da última lista                          |
| Adicionar nova tag              | Opção não é clicável                                      | Botão/Opção deve ser visível e intuitivo                         |
| Cor das tags                    | Tags adicionadas aparecem azul escuro                     | Tags devem ter cor consistente definida pelo design              |
| Arrastar card para lista vazia  | Não é possível                                            | Deve ser possível arrastar para qualquer lista, mesmo vazia      |
| Limite de caracteres nas tags   | Tags ultrapassam o card                                   | Tags devem ter limite ou truncamento para não ultrapassar o card |

---

## Cenários BDD (Exemplos)

Exemplo de cenário para o bug do botão de modo noturno:

```gherkin
Funcionalidade: Botão de modo noturno no Kanban
  Cenário: Botão permanece fixo ao adicionar listas
    Dado que estou na página Kanban
    E o botão de modo noturno está visível
    Quando adiciono várias listas
    Então o botão permanece fixo (BUG)
    Mas o esperado é que acompanhe a tela
```

---

## Branches

- `main` - Branch principal com versão estável.
- `qa/cypress-kanban` - Branch de desenvolvimento dos testes do Kanban.

---

## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature ou correção:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça o commit das suas alterações:
   ```bash
   git commit -m "Descrição da alteração"
   ```
4. Envie para o repositório remoto:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.

---

## Sugestões de Melhorias Futuras

- Criar testes automatizados para **responsividade completa** em múltiplos dispositivos.
- Implementar testes de **arrastar e soltar cards** em listas vazias.
- Validar limites de caracteres e cores das tags dinamicamente.
- Automatizar testes em **diferentes temas (modo claro/escuro)**.
- Criar relatório visual dos testes com capturas de tela.

---

## Contato

Desenvolvido por **Julio Cesar**\
E-mail: [seuemail@exemplo.com](mailto\:seuemail@exemplo.com)\
GitHub: [https://github.com/jcesarvm](https://github.com/jcesarvm)

