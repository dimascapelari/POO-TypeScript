export default class Moto {
  cor: string;
  potencia: number;

  constructor(cor: string, potencia: number) {
    this.cor = cor;
    this.potencia = potencia;
  }
}

let mt = new Moto("Preta", 125);

console.log(`Cor: ${mt.cor}, Potencia: ${mt.potencia}cc`);
