import faker from "faker";

class generateName {
    generateCompleteName() {
        //Gerar Nome
        const nome = faker.name.findName()
        const completeName = nome;

        return completeName;
    }
}

export default generateName;
