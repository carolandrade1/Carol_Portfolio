// <reference types="cypress"/>
import ContactScreenPageObject from '../../../src/components/screens/contato/ContactScreen.pageObject';

describe('/contato', () => {
  describe('when click contact button and modal is open', () => {
    describe('fill forms fields correctly', () => {
      // it === test que estamos fazendo
      it('and submit the message', () => {
        // Pré teste

        // Cenário
        const contactScreen = new ContactScreenPageObject(cy);

        contactScreen
          .callModalForm()
          .fillContactForm({ name: 'Carol', email: 'teste@teste.com', message: 'Olá Mundo!' })
          .submitForm();

        // o que esperar?
        cy.get('[alt="Tudo certo!"]')
          .should('be.visible');
        contactScreen.closeForm();
      });
    });
  });
});
