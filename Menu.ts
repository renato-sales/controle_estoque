import readlinesync = require("readline-sync");
import { CursoController } from "./src/controller/CursoController";
import { Programacao } from "./src/model/Programacao";
import { Vendas } from "./src/model/Vendas";

export function main() {
  let cursos: CursoController = new CursoController();

  let opcao, preco, categoria, modulos, codigo, cargaHoraria: number;
  let nome, opcaoCategoria: string;

  const categorias = ["Desenvolvimento de Software", "Vendas"];

  while (true) {
    console.log("======================================================");
    console.log("|                E-COMMERCE GENERATION               |");
    console.log("======================================================");
    console.log("|           1 - Criar Curso                          |");
    console.log("|           2 - Listar todos os Cursos               |");
    console.log("|           3 - Buscar Curso pelo Código             |");
    console.log("|           4 - Atualizar Dados do Curso             |");
    console.log("|           5 - Apagar Curso                         |");
    console.log("|           9 - Sair                                 |");
    console.log("======================================================");

    console.log("Entre com a opção desejada: ");
    opcao = readlinesync.questionInt("");

    if (opcao == 9) {
      console.log("\nE-commerce Generation - Venha estudar com os melhores!");
      sobre();
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log("\nCriar Curso\n");

        console.log("Digite a categoria do curso: ");
        categoria =
          readlinesync.keyInSelect(categorias, "", { cancel: false }) + 1;

        switch (categoria) {
          case 1:
            console.log("Digite o nome do  curso: ");
            nome = readlinesync.question("");

            console.log("Digite o preço do curso: ");
            preco = readlinesync.questionFloat("");

            console.log("Digite a quantidade de módulos do curso: ");
            modulos = readlinesync.questionInt("");

            opcaoCategoria = "Desenvolvimento de Software";

            cursos.cadastrar(
              new Programacao(
                cursos.getCodigo(),
                nome,
                opcaoCategoria,
                preco,
                modulos
              )
            );
            break;

          case 2:
            console.log("Digite o nome do  curso: ");
            nome = readlinesync.question("");

            console.log("Digite o preço do curso: ");
            preco = readlinesync.questionFloat("");

            console.log("Digite a carga horária do curso: ");
            cargaHoraria = readlinesync.questionInt("");

            opcaoCategoria = "Vendas";

            cursos.cadastrar(
              new Vendas(
                cursos.getCodigo(),
                nome,
                opcaoCategoria,
                preco,
                cargaHoraria
              )
            );
            break;

          default:
            console.log("\nOpção Inválida!\n");
            break;
        }

        keyPress();
        break;

      case 2:
        console.log("\nListar todos os Cursos\n");

        cursos.listar();

        keyPress();
        break;

      case 3:
        console.log("\nConsultar dados do Curso pelo código\n");

        if (cursos.isEmpty()) {
          console.log("Não há cursos cadastrados!");
        } else {
          console.log("Digite o código do curso: ");
          codigo = readlinesync.questionInt("");
          cursos.pesquisarCodigo(codigo);
        }

        keyPress();
        break;

      case 4:
        console.log("\nAtualizar dados do Curso\n");

        if (cursos.isEmpty()) {
          console.log("Não há cursos cadastrados!");
        } else {
          console.log("Digite o código do curso: ");
          codigo = readlinesync.questionInt("");

          let curso = cursos.pesquisarNaLista(codigo);

          if (curso != null) {
            console.log("Digite o nome do curso: ");
            nome = readlinesync.question("");

            console.log("\nDigite a categoria do curso: ");
            categoria =
              readlinesync.keyInSelect(categorias, "", { cancel: false }) + 1;

            console.log("\nDigite o preço do curso: ");
            preco = readlinesync.questionFloat("");

            switch (categoria) {
              case 1:
                opcaoCategoria = "Desenvolvimento de Software";
                console.log("Digite a quantidade de módulos do curso: ");
                modulos = readlinesync.questionInt("");
                cursos.atualizar(
                  new Programacao(codigo, nome, opcaoCategoria, preco, modulos)
                );
                break;

              case 2:
                opcaoCategoria = "Vendas";
                console.log("Digite a carga horária do curso: ");
                cargaHoraria = readlinesync.questionInt("");
                cursos.atualizar(
                  new Vendas(codigo, nome, opcaoCategoria, preco, cargaHoraria)
                );
                break;
            }
          } else {
            console.log("\nO curso código: " + codigo + " não foi encontrado!");
          }
        }
        keyPress();
        break;

      case 5:
        console.log("\nApagar um Curso\n");

        if (cursos.isEmpty()) {
          console.log("Não há cursos cadastrados!");
        } else {
          console.log("Digite o código do curso: ");
          codigo = readlinesync.questionInt("");
          cursos.deletar(codigo);
        }

        keyPress();
        break;

      default:
        console.log("\nOpção Inválida!\n");
        break;
    }
  }
}

function sobre(): void {
  console.log("\n=======================================================");
  console.log("| Projeto Desenvolvido por:                           |");
  console.log("| Renato Sales - renatos@genstudents.org              |");
  console.log("| github.com/renato-sales                             |");
  console.log("=======================================================");
}

function keyPress(): void {
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}

main();
