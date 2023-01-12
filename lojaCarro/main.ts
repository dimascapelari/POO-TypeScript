import Carro from "./carro";
import Cliente from "./cliente";
import CompraCarro from "./compraCarro";
import Funcionario from "./funcionario";

let car = new Carro("Logan", 1999, 10000);
let cliente = new Cliente("Dimas", 5000);
let funcionario = new Funcionario("João");
let compra = new CompraCarro(cliente, funcionario, car);

compra.detalharCompra();
