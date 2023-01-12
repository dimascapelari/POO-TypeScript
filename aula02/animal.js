"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(t, n, i) {
        this.tipo = t;
        this.nome = n;
        this.idade = i;
    }
    comunicar() {
        console.log("Olá, sou método da classe mãe");
    }
}
exports.default = Animal;
class Cachorro extends Animal {
    constructor(t, n, i, r) {
        super(t, n, i);
        this.raça = r;
    }
    latir() {
        super.comunicar();
    }
}
class Gente extends Animal {
    constructor(t, n, i, c) {
        super(t, n, i);
        this.cor = c;
    }
    comunicar() {
        console.log("Olá sou da classe filha, classe Gente");
    }
}
let c1 = new Cachorro("cachorro", "bob", 2, "poodle");
c1.latir();
let g1 = new Gente("Humano", "Marley", 25, "Negro");
g1.comunicar();
