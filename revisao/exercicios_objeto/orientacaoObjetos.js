class Signos {
    constructor(nome, elemento, regente) {
        this.nome = nome;
        this.elemento = elemento;
        this.regente = regente;
        // this.decanato = decanato; ---> ver o erro
    }
}

const pessoa1 = new Signos('Aries', 'Fogo', 'Marte')