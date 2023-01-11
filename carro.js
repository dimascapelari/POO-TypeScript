"use strict";
class Carro {
    constructor(c, a, v) {
        this.cor = c;
        this.ano = a;
        this.valor = v;
    }
    getValor() {
        return this.valor;
    }
    setValor(valor) {
        this.valor = valor;
    }
    getLog() {
        console.log("Segue o log desta informação: ");
        this.getInfo();
    }
    getInfo() {
        console.log(`${this.cor}, ${this.ano}, ${this.valor}`);
        // console.log(`${this.cor}, ${this.ano}, ${this.getValor()}`);
    }
}
let c = new Carro("preto", 2020, 20000);
c.getLog();
