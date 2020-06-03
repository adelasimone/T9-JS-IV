// class Cliente {
//     constructor(nome, email, cpf) {
//         this.nome = nome;
//         this.email = email;
//         this.cpf = cpf;
//     }
// }

// //  ARMAZEANDO PRIMEIRA CLIENT
// const cliente1 = new Cliente('Adela', 'adelasimoneac@gmail.com', 'XXX.XXX.XXX-XX')

// console.log("Dados cliente: ", cliente1)

// ----------------------------------------

class Celular {
    constructor(nome, modelo, valor){
        this.nome = nome;
        this.modelo = modelo;
        this.valor = valor;
    }
}

const celular1 = new Celular('Super X', 'XX-Y', 900);
console.log(celular1)
