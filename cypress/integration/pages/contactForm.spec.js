// <reference types="cypress"/>
import ContactScreenPageObject from '../../../src/components/screens/contato/ContactScreen.pageObject';

describe('/contato', () => {
  describe('when click contact button and modal is open', () => {
    describe('fill forms fields correctly', () => {
      // it === test que estamos fazendo
      it('and submit the message', () => {
        // Pré teste - Arrange
        cy.intercept('POST', '/api/sendgrid', (req) => {
          req.reply({ statusCode: 200 });
        }).as('sendGrid');
        const contactScreen = new ContactScreenPageObject(cy);

        // Cenário - Act
        contactScreen
          .callModalForm()
          .fillContactForm({ name: 'Carol', email: 'teste@teste.com', message: 'Olá Mundo!' })
          .submitForm();

        // Assert
        cy.wait('@sendGrid')
          .should('have.property', 'state', 'Complete');

        cy.get('@sendGrid')
          .its('request.body')
          .should('deep.equal', {
            email: 'teste@teste.com',
            message: 'Olá Mundo!',
            name: 'Carol',
          });

        cy.get('[alt="Tudo certo!"]')
          .should('be.visible');
        contactScreen.closeForm();
      });
    });
  });
});
