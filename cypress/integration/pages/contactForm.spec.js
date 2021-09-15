// <reference types="cypress"/>
import ContactScreenPageObject from '../../../src/components/screens/contato/ContactScreen.pageObject';

describe('/contato', () => {
  describe('when click contact button and modal is open', () => {
    describe('fill forms fields correctly', () => {
      // it === test que estamos fazendo
      it('and submit the message', () => {
        // Pré teste

        // Cenário
        const data = {
          name: 'Carol',
          email: 'teste@teste.com',
          message: 'Olá Mundo!',
        };

        const contactScreen = new ContactScreenPageObject(cy);
        contactScreen
          .callModalForm()
          .fillContactForm(data)
          .submitForm()
          .closeForm();

        // o que esperar?
        cy.url().should('include', '/contato');
      });
    });
  });
});
