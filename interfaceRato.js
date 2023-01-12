"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Jerry {
    constructor(n) {
        this.nome = n;
    }
    fugir() {
        console.log("corre, lá vem o Tom");
    }
}
let r = new Jerry("Jerry");
r.idade = "2 anos";
console.log(r.nome);
console.log(r.idade);
