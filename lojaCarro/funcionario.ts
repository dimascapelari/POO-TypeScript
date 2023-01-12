export default class Funcionario {
  nome: string;
  comissao: number = 0;

  constructor(n: string) {
    this.nome = n;
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(nome: string): string {
    return (this.nome = nome);
  }

  public getComissao(): number {
    return this.comissao;
  }

  public setComissao(comissao: number): number {
    return (this.comissao = comissao);
  }
}
