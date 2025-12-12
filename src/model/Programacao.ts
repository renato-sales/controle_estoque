import { Curso } from "./Curso";

export class Programacao extends Curso {
  private _modulos: number;

  constructor(
    codigo: number,
    nome: string,
    categoria: number,
    preco: number,
    modulos: number
  ) {
    super(codigo, nome, categoria, preco);
    this._modulos = modulos;
  }

  public get modulos() {
    return this._modulos;
  }

  public set modulos(modulos: number) {
    this._modulos = modulos;
  }

  public visualizar(): void {
    super.visualizar();
    console.log("| Quantidade de módulos: " + this._modulos);
    console.log("======================================================");
  }
}
