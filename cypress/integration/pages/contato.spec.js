describe('abra a página inicial, vá para a página contato, abra o modal, preencha o formulário e envie', () => {
  // it === test que estamos fazendo
  it('preencha os campos do form e volte para página contato', () => {
    cy.visit('/');

    // clique no link Contato no Nav na página inicial
    cy.get('body').first('div').first('div').first('ul');
    cy.get('ul').contains('Contato').click().invoke('show');

    // encontre e clique no botão 'vamos conversar?' para chamar o modal
    cy.get('#button').click();

    // encontrar e preencher input Nome (erro, Text também com o name=nome dentro do TextField)
    cy.get('#formContato input[name=nome]').last().type('Carol');

    // encontrar e preencher input Nome
    cy.get('#formContato input[name=email]').last().type('carolandrades11@gmail.com');

    // encontrar e preencher input Nome
    cy.get('#formContato input[name=mensagem]').last().type('Olá');

    // clicar no botão de submit!
    cy.get('#formContato button[type="submit"]').last().click();

    // o que esperar?
    cy.url().should('include', '/contato');
  });
});
