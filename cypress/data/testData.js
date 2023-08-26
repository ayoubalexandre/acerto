import generatePhoneNumber from "./generatePhoneNumber";
import generateCpf from "./generateCpf";
import generateName from "./generateName";
import generateEmail from "./generateEmail";
import generateCep from "./generateCep";
import generateNumber from "./generateNumber";
import generateImage from "./generateImage";

const phoneNumberInstance = new generatePhoneNumber();
const cpfInstance = new generateCpf();
const nameInstance = new generateName();
const emailInstance = new generateEmail();
const cepInstance = new generateCep();
const numberInstance = new generateNumber();
const imageInstance = new generateImage();

export {
    phoneNumberInstance,
    cpfInstance,
    nameInstance,
    emailInstance,
    cepInstance,
    numberInstance,
    imageInstance
};
