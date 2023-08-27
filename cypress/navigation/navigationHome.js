import locatorsHome from "../locators/locatorsHome";


//Navegação na home buger eats
Cypress.Commands.add("acessarPaginaCadastro", () => {
        cy.contains(locatorsHome.HOME.BTN_CADASTRE_SE).click();
  });