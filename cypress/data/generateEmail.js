import faker from "faker";

class generateEmail {
    generateNewEmail() {
        //Gerar Email
        const email = faker.internet.email()
        
        return email;
    }
}

export default generateEmail;