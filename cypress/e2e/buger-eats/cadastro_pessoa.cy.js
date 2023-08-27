/// reference types="cypress"/>

import "../../navigation/navigationHome"
import "../../navigation/navigationCadastro"
import locatorsCadastro from "../../locators/locatorsCadastro";
import textCadastro from "../../text/textCadastro";
import {expect} from "chai";

beforeEach(() => {
    cy.acessarSiteBugerEats();
});

describe("Acessar cadsatro de pessoa", () => {
    it("Acessar tela de cadastro", () => {
        cy.acessarPaginaCadastro()

        cy
            .contains(locatorsCadastro.VOLTAR.LINK_VOLTAR_HOME)
            .should("contain", textCadastro.LINK.VOLTAR_HOME);
    });
    it("Cadastrar nova pessoa", () => {
        cy.acessarPaginaCadastro();
        cy.cadastrarPessoa();
        cy
            .get(locatorsCadastro.CADASTRO.MODAL_SUCESSO)
            .within(() => {
                // Verifica se o título está correto
                cy
                    .get(locatorsCadastro.CADASTRO.TEXTO_SUCESSO)
                    .should('contain', textCadastro.MENSAGEM.SUCESSO_CADASTRO);
                //Clica no botão "Fechar"
                cy
                    .get(locatorsCadastro.CADASTRO.BTN_FECHAR)
                    .click();
            });

    });
    it("Cadastrar entregador sem nome", () => {
        cy.acessarPaginaCadastro();
        cy.cadastrarPessoaFalha();
        cy
            .xpath(locatorsCadastro.CADASTRO.XP_ALERT_ERROR)
            .should('contain', textCadastro.MENSAGEM.ERRO_NOME)
    })
});
