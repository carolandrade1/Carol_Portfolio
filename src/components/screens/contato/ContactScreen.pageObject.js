export default class ContactScreenPageObject {
  constructor(cy) {
    this.cy = cy;

    this.cy.visit('/contato');
  }

  callModalForm() {
    this.cy.get('#button').click().invoke('show');

    return this;
  }

  fillContactForm({ name, email, message }) {
    // encontrar e preencher input Nome (erro, Text também com o name=nome dentro do TextField)
    this.cy.get('#contactForm input[name=nome]').last().type(name);
    this.cy.get('#contactForm input[name=email]').last().type(email);
    this.cy.get('#contactForm input[name=mensagem]').last().type(message);

    return this;
  }

  submitForm() {
    this.cy.get('#contactForm button[type="submit"]').last().click();

    return this;
  }

  closeForm() {
    this.cy.get('#contactForm button[type="button"]').last().click();

    return this;
  }
}
