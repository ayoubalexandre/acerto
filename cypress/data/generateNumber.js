import faker from "faker";

class generateNumber {
    generateAddressNumber() {
        //Gerar número de endereço
        const numeroCasa = faker
            .random
            .number()

        return numeroCasa;
    }
}

export default generateNumber;