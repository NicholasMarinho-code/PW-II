import { Pessoa } from "./Pessoa.js";

export class Professor extends Pessoa{
    constructor(nome, idade, dt_nascimento, disciplina){
        super(nome, idade, dt_nascimento)
        this.disciplina = disciplina
    }
    exibirInfo(){
    console.log(`Nome: ${this.nome} - Idade: ${this.idade} - Data de Nascimento: ${this.dt_nascimento} - Disciplina: ${this.disciplina}`)
}
}