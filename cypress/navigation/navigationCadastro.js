import locatorsCadastro from "../locators/locatorsCadastro";
import 'cypress-file-upload';
import {
    phoneNumberInstance,
    cpfInstance,
    nameInstance,
    emailInstance,
    cepInstance,
    numberInstance,
    imageInstance
} from "../data/testData";

//Cadastro de pessoa com sucesso - buger eats
Cypress
    .Commands
    .add("cadastrarPessoa", () => {

        const whatsapp = phoneNumberInstance.generatePhoneNumber();
        const cpf = cpfInstance.generateNewCpf();
        const nomeCompleto = nameInstance.generateCompleteName();
        const email = emailInstance.generateNewEmail();
        const cep = cepInstance.generateCorrectCep();
        const numeroCasa = numberInstance.generateAddressNumber();
        const imageUrl = imageInstance.generateUploadImage();

        cy
            .xpath(locatorsCadastro.CADASTRO.XP_INPUT_NAME)
            .type(nomeCompleto);
        cy
            .xpath(locatorsCadastro.CADASTRO.XP_INPUT_CPF)
            .type(cpf)
        cy
            .xpath(locatorsCadastro.CADASTRO.XP_INPUT_EMAIL)
            .type(email)
        cy
            .xpath(locatorsCadastro.CADASTRO.XP_INPUT_WHATSAPP)
            .type(whatsapp)
        cy
            .xpath(locatorsCadastro.CADASTRO.XP_INPUT_POSTAL_CODE)
            .type(cep)
        cy
            .xpath(locatorsCadastro.CADASTRO.XP_BTN_BUSCAR_CEP)
            .click()
        cy
            .xpath(locatorsCadastro.CADASTRO.XP_INPUT_NUMERO)
            .type(numeroCasa)
        cy
            .xpath(locatorsCadastro.CADASTRO.BTN_METODO_ENTREGA)
            .click()
        cy
            .get(locatorsCadastro.CADASTRO.XP_UPLOAD_CNH)
            .attachFile(
                {fileContent: imageUrl, fileName: 'imagem.jpg', mimeType: 'image/jpeg'}
            );
        cy
            .xpath(locatorsCadastro.CADASTRO.XP_BTN_CADASTRAR)
            .click()

    });

//Cenário de cadastro de pessoa com falha - nome não preenchido - buger eats
Cypress
    .Commands
    .add("cadastrarPessoaFalha", () => {

        const whatsapp = phoneNumberInstance.generatePhoneNumber();
        const cpf = cpfInstance.generateNewCpf();
        const email = emailInstance.generateNewEmail();
        const cep = cepInstance.generateCorrectCep();
        const numeroCasa = numberInstance.generateAddressNumber();
        const imageUrl = imageInstance.generateUploadImage();

        cy
            .xpath(locatorsCadastro.CADASTRO.XP_INPUT_CPF)
            .type(cpf)
        cy
            .xpath(locatorsCadastro.CADASTRO.XP_INPUT_EMAIL)
            .type(email)
        cy
            .xpath(locatorsCadastro.CADASTRO.XP_INPUT_WHATSAPP)
            .type(whatsapp)
        cy
            .xpath(locatorsCadastro.CADASTRO.XP_INPUT_POSTAL_CODE)
            .type(cep)
        cy
            .xpath(locatorsCadastro.CADASTRO.XP_BTN_BUSCAR_CEP)
            .click()
        cy
            .xpath(locatorsCadastro.CADASTRO.XP_INPUT_NUMERO)
            .type(numeroCasa)
        cy
            .xpath(locatorsCadastro.CADASTRO.BTN_METODO_ENTREGA)
            .click()
        cy
            .get(locatorsCadastro.CADASTRO.XP_UPLOAD_CNH)
            .attachFile(
                {fileContent: imageUrl, fileName: 'imagem.jpg', mimeType: 'image/jpeg'}
            );
        cy
            .xpath(locatorsCadastro.CADASTRO.XP_BTN_CADASTRAR)
            .click()
    });