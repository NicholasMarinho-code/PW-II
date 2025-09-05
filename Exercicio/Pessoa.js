export class Pessoa{
    constructor(nome, idade, dt_nascimento){
        this.nome = nome
        this.idade = idade
        this.dt_nascimento = dt_nascimento
    }
    exibirInfo(){
        console.log(`Nome: ${this.nome} - Idade: ${this.idade} - Data de Nascimento: ${this.dt_nascimento}`)
    }
}