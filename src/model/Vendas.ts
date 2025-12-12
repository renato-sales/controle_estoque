import { Curso } from "./Curso";

export class Vendas extends Curso {
  private _cargaHoraria: number;

  constructor(
    codigo: number,
    nome: string,
    categoria: string,
    preco: number,
    cargaHoraria: number
  ) {
    super(codigo, nome, categoria, preco);
    this._cargaHoraria = cargaHoraria;
  }

  public get cargaHoraria() {
    return this._cargaHoraria;
  }

  public set cargaHoraria(cargaHoraria: number) {
    this._cargaHoraria = cargaHoraria;
  }

  public visualizar(): void {
    super.visualizar();
    console.log("| Carga Horária: " + this._cargaHoraria);
    console.log("======================================================");
  }
}
