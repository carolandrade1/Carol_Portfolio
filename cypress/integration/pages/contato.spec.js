describe('abra a página inicial, vá para a página contato e abra o modal', () => {
  // it === test que estamos fazendo
  it('preencha os campos do form (Vamos conversar?) e volte para página contato', () => {
    cy.visit('/');

    // clique no link Contato no NavBar na página inicial
    cy.get('body');
    cy.get('ul').contains('Contato').invoke('show').click();

    // encontre e clique no botão 'vamos conversar?' para chamar o modal
    cy.url();
    cy.get('#button').click().invoke('show');

    // encontrar e preencher input Nome (erro, Text também com o name=nome dentro do TextField)
    cy.get('#formContato input[name=nome]').last().invoke('show').type('Carol');

    // encontrar e preencher input Nome
    cy.get('#formContato input[name=email]').last().invoke('show').type('carolandrades11@gmail.com');

    // encontrar e preencher input Nome
    cy.get('#formContato input[name=mensagem]').last().invoke('show').type('Olá Mundo');

    // clicar no botão de submit
    cy.get('#formContato button[type="submit"]').last().click();

    // clicar no botão de fechar o modal
    cy.get('button:contains(Fechar)').last().invoke('show').click();

    // o que esperar?
    cy.url().should('include', '/contato');
  });
});
