import { Curso } from "../model/Curso";

export interface CursoRepository {
  cadastrar(curso: Curso): void;
  deletra(codigo: number): void;
  atualizar(curso: Curso): void;
  listar(): void;
}
