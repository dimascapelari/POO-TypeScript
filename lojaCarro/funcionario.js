"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    constructor(n) {
        this.comissao = 0;
        this.nome = n;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        return (this.nome = nome);
    }
    getComissao() {
        return this.comissao;
    }
    setComissao(comissao) {
        return (this.comissao = comissao);
    }
}
exports.default = Funcionario;
