class Cliente {
    constructor(
        nome,
        cpf,
        valor,
        modeloDoCelular,
        anoDoCelular,
        corDoCelular,
        loja,
        nomeDaAtendente) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataDaCompra = new Date();
        this.valor = valor;
        this.modeloDoCelular = modeloDoCelular;
        this.anoDoCelular = anoDoCelular;
        this.corDoCelular = corDoCelular;
        this.loja = loja;
        this.nomeDaAtendente = nomeDaAtendente;
    }

    descontar() {
        // ternário
        const desconto = this.valor < 1500 ? `Terá desconto de 10%` : `Não terá desconto`
        return desconto;
        
        // bloco
        // if(this.valor < 1500) {
        //     return 'Terá um desconto de 10%'
        // } else {
        //     return 'Não terá desconto'
        // }
    }

    verificaCor() {
        if(this.corDoCelular === 'Roxo') {
            return `Cor disponível`
        } else {
            return `Cor indisponível!`
        }
    }
}

let cliente1 = new Cliente(
    'Dora Barreto',
    '223.001.221-29',
    2000,
    'XXX-12',
    2020,
    'Amarelo',
    'RJ-BR',
    'Joana Maria',
)
let cliente2 = new Cliente(
    'Marcela Janino Silva',
    '321.101.231-29',
    1300,
    'XXM-y',
    2019,
    'Roxo',
    'SP-BR',
    'Drielly Gomes Almeida',
)
let cliente3 = new Cliente(
    'Raquel Borges Figueredo',
    '910.311.425-01',
    4000,
    'MDM-PRO',
    2020,
    'Azul',
    'MG-BR',
    'Fran Carneiro de Pinha',
)





// console.table([cliente1, cliente2, cliente3])

// console.log("Desconto?", cliente1.descontar())
// console.log("Desconto?", cliente2.descontar())
// console.log("Desconto?", cliente3.descontar())
console.log(cliente1.verificaCor())
console.log(cliente2.verificaCor())
console.log(cliente3.verificaCor())