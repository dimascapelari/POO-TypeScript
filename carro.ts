class Carro {
  private cor: string;
  private ano: number;
  private valor: number;

  constructor(c: string, a: number, v: number) {
    this.cor = c;
    this.ano = a;
    this.valor = v;
  }

  public getValor() {
    return this.valor;
  }

  public setValor(valor: number) {
    this.valor = valor;
  }

  public getLog() {
    console.log("Segue o log desta informação: ");
    this.getInfo();
  }

  private getInfo() {
    console.log(`${this.cor}, ${this.ano}, ${this.valor}`);
    // console.log(`${this.cor}, ${this.ano}, ${this.getValor()}`);
  }
}

let c = new Carro("preto", 2020, 20000);
c.getLog();
