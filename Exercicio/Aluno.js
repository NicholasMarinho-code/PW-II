import { Pessoa } from "./Pessoa.js";

export class Aluno extends Pessoa{
    constructor(nome, idade, dt_nascimento, frequencia){
        super(nome, idade, dt_nascimento)
        this.frequencia = frequencia
    }
    exibirInfo(){
        console.log(`Nome: ${this.nome} - Idade: ${this.idade} - Data de Nascimento: ${this.dt_nascimento} - Frequência: ${this.frequencia}`)
    }
}