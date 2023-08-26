//Elementos da página de cadastro para interação

const locatorsCadastro = {
    VOLTAR: {
        LINK_VOLTAR_HOME: "Voltar para home"
    },
    CADASTRO: {
        XP_INPUT_NAME: "//input[@name='name']",
        XP_INPUT_CPF: "//input[@name='cpf']",
        XP_INPUT_EMAIL: "//input[@name='email']",
        XP_INPUT_WHATSAPP: "//input[@name='whatsapp']",
        XP_INPUT_POSTAL_CODE: "//input[@name='postalcode']",
        XP_BTN_BUSCAR_CEP: "//input[@type='button']",
        XP_INPUT_NUMERO: "//input[@name='address-number']",
        BTN_METODO_ENTREGA: "//li[img[@alt='Moto']]",
        XP_UPLOAD_CNH: 'input[type="file"]',
        MODAL_SUCESSO: '.swal2-popup',
        TEXTO_SUCESSO: '.swal2-title',
        XP_ALERT_ERROR: "//span[@class='alert-error']",
        XP_BTN_CADASTRAR: "//button[@class='button-success']",
        BTN_FECHAR: '.swal2-confirm'
    }
};

export default locatorsCadastro;