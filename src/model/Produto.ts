export class Produto {
  private _codigo: number;
  private _nome: string;
  private _quantidade: number;
  private _preco: number;

  constructor(codigo: number, nome: string, quantidade: number, preco: number) {
    this._codigo = codigo;
    this._nome = nome;
    this._quantidade = quantidade;
    this._preco = preco;
  }

  public get codigo() {
    return this._codigo;
  }

  public set codigo(codigo: number) {
    this._codigo = codigo;
  }

  public get nome() {
    return this._nome;
  }

  public set nome(nome: string) {
    this._nome = nome;
  }

  public get quantidade() {
    return this._quantidade;
  }

  public set quantidade(quantidade: number) {
    this._quantidade = quantidade;
  }

  public get preco() {
    return this._preco;
  }

  public set preco(preco: number) {
    this._preco = preco;
  }

  public visualizar(): void {
    console.log("\n\n======================================================");
    console.log("|              Informações do Produto:               |");
    console.log("======================================================");
    console.log("| Código do Produto: " + this._codigo);
    console.log("| Nome: " + this._nome);
    console.log("| Quantidade: " + this._quantidade);
    console.log("======================================================");
  }
}
