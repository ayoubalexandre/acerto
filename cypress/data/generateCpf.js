import gerarCpf from "gerar-cpf";

class generateCpf {
    generateNewCpf() {
        //Gerar uma cpf
        const cpf = gerarCpf();

        return cpf;
    }
}

export default generateCpf;