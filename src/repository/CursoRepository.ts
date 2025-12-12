import { Curso } from "../model/Curso";

export interface CursoRepository {
  cadastrar(curso: Curso): void;
  deletar(codigo: number): void;
  atualizar(curso: Curso): void;
  listar(): void;
  pesquisarCodigo(codigo: number): void;
}
