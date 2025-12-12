import readlinesync = require("readline-sync");
import { Produto } from "./src/model/Produto";

export function main() {
  let opcao: number;

  while (true) {
    console.log("======================================================");
    console.log("|                E-COMMERCE GENERATION               |");
    console.log("======================================================");
    console.log("|           1 - Criar Produto                        |");
    console.log("|           2 - Listar todos os Produtos             |");
    console.log("|           3 - Buscar Produto pelo Código           |");
    console.log("|           4 - Atualizar Dados do Produto           |");
    console.log("|           5 - Apagar Produto                       |");
    console.log("|           9 - Sair                                 |");
    console.log("======================================================");

    console.log("Entre com a opção desejada: ");
    opcao = readlinesync.questionInt("");

    if (opcao == 9) {
      console.log("\nE-commerce Generation - Vem realizar seus sonhos!");
      sobre();
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log("\n\nCriar Produto\n\n");
        break;

      case 2:
        console.log("\n\nListar todos os Produtos\n\n");
        break;

      case 3:
        console.log("\n\nConsultar dados do Produto - por código\n\n");
        break;

      case 4:
        console.log("\n\nAtualizar dados do Produto\n\n");
        break;

      case 5:
        console.log("\n\nApagar um Produto\n\n");
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
