import { Curso } from "../model/Curso";
import { CursoRepository } from "../repository/CursoRepository";

export class CursoController implements CursoRepository {
  private cursos: Array<Curso> = new Array<Curso>();
  codigo: number = 0;

  cadastrar(curso: Curso): void {
    this.cursos.push(curso);
    console.log("\nO Curso: " + curso.nome + " foi cadastrado com sucesso!");
  }

  deletar(codigo: number): void {
    if (this.isEmpty()) {
      console.log("Não há cursos cadastrados!");
      return;
    }

    let pesquisaCurso = this.pesquisarNaLista(codigo);

    if (pesquisaCurso != null) {
      this.cursos.splice(this.cursos.indexOf(pesquisaCurso), 1);
      console.log("\nO curso código: " + codigo + " foi apagado com sucesso!");
    } else {
      console.log("\nO curso código: " + codigo + " não foi encontrado!");
    }
  }

  atualizar(curso: Curso): void {
    if (this.isEmpty()) {
      console.log("Não há cursos cadastrados!");
      return;
    }

    let pesquisaCurso = this.pesquisarNaLista(curso.codigo);

    if (pesquisaCurso != null) {
      this.cursos[this.cursos.indexOf(pesquisaCurso)] = curso;
      console.log(
        "\nO curso código: " + curso.codigo + " foi atualizado com sucesso!"
      );
    } else {
      console.log("\nO curso: " + curso.codigo + " não foi encontrado!");
    }
  }

  listar(): void {
    if (this.isEmpty()) {
      console.log("Não há cursos cadastrados!");
      return;
    }

    this.cursos.forEach((curso) => {
      curso.visualizar();
    });
  }

  isEmpty(): boolean {
    if (this.cursos.length == 0) {
      return true;
    }

    return false;
  }

  getCodigo(): number {
    return ++this.codigo;
  }

  pesquisarNaLista(codigo: number): Curso | null {
    for (let curso of this.cursos) {
      if (curso.codigo === codigo) {
        return curso;
      }
    }

    return null;
  }

  pesquisarCodigo(codigo: number): void {
    let pesquisaCurso = this.pesquisarNaLista(codigo);

    if (pesquisaCurso != null) {
      pesquisaCurso.visualizar();
    } else {
      console.log("\nO curso código: " + codigo + " não foi encontrado!");
    }
  }
}
