"use strict";
class Moto {
    constructor(cor, potencia) {
        this.cor = cor;
        this.potencia = potencia;
    }
}
let mt = new Moto("Preta", 125);
console.log(`Cor: ${mt.cor}, Potencia: ${mt.potencia}cc`);
