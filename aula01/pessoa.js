"use strict";
// Curso POO Typescript Aula 01 - Classes e Objetos
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(n, i) {
        this.nome = n;
        this.idade = i;
    }
}
exports.default = Pessoa;
let p1 = new Pessoa("Dimas", 40);
console.log(`Nome: ${p1.nome}, Idade: ${p1.idade}`);
