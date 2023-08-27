/// reference types="cypress"/>

import textHome from "../../text/textHome";

beforeEach(() => {
    cy.acessarSiteBugerEats();
});

//validação do acesso ao site buger eats
it("Validar site aesop", () => {
    cy
        .title()
        .should("be.equal", textHome.TITULO.HOME);
});
