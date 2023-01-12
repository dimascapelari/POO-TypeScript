// Curso POO Typescript Aula 02 - Herança e Polimorfismo

export default class Animal {
  tipo: string;
  nome: string;
  idade: number;

  constructor(t: string, n: string, i: number) {
    this.tipo = t;
    this.nome = n;
    this.idade = i;
  }

  protected comunicar(): void {
    console.log("Olá, sou método da classe mãe");
  }
}

class Cachorro extends Animal {
  raça: string;

  constructor(t: string, n: string, i: number, r: string) {
    super(t, n, i);
    this.raça = r;
  }

  public latir() {
    super.comunicar();
  }

  // public comunicar(): void {
  //   console.log("Olá sou da classe filha, classe Cachorro");
  // }
}

class Gente extends Animal {
  cor: string;

  constructor(t: string, n: string, i: number, c: string) {
    super(t, n, i);
    this.cor = c;
  }
  public comunicar(): void {
    console.log("Olá sou da classe filha, classe Gente");
  }
}

let c1 = new Cachorro("cachorro", "bob", 2, "poodle");

c1.latir();

let g1 = new Gente("Humano", "Marley", 25, "Negro");

g1.comunicar();
