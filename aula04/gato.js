"use strict";
class Gato {
    constructor(n, c) {
        this.nome = n;
        this.cor = c;
    }
    miar() {
        console.log("miau!");
    }
}
class Tom extends Gato {
    constructor(n, c, i) {
        super(n, c);
        this.idade = i;
    }
}
let g = new Tom("Tom", "cinza", 2);
console.log(g.nome);
console.log(g.cor);
console.log(g.idade);
g.miar();
