import faker from "faker";

class generateCep {
    generateNewCep() {
        // Gerar os primeiros 5 dígitos do CEP
        const primeiroBloco = faker.random.number({ min: 10000, max: 99999 }).toString();

        // Gerar os últimos 3 dígitos do CEP
        const segundoBloco = faker.random.number({ min: 100, max: 999 }).toString();

        // Combinar os blocos para formar o CEP
        const cep = primeiroBloco + segundoBloco;
        return cep;
    }

    generateCorrectCep(){
        const cep = "36046030"

        return cep;
    }
}

export default generateCep;