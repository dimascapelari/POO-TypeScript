export default class Carro {
  modelo: string;
  ano: number;
  valor: number;

  constructor(m: string, a: number, v: number) {
    this.modelo = m;
    this.ano = a;
    this.valor = v;
  }

  public getModelo(): string {
    return this.modelo;
  }

  public setModelo(modelo: string) {
    this.modelo = modelo;
  }

  public getAno(): number {
    return this.ano;
  }

  public setAno(ano: number) {
    this.ano = ano;
  }

  public getValor(): number {
    return this.valor;
  }

  public setValor(valor: number): number {
    return (this.valor = valor);
  }
}
