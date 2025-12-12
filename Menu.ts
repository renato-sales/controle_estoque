import readlinesync = require("readline-sync");

export function main() {
  let opcao: number;

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
        console.log("\n\nCriar Curso\n\n");
        break;

      case 2:
        console.log("\n\nListar todos os Cursos\n\n");
        break;

      case 3:
        console.log("\n\nConsultar dados do Curso pelo código\n\n");
        break;

      case 4:
        console.log("\n\nAtualizar dados do Curso\n\n");
        break;

      case 5:
        console.log("\n\nApagar um Curso\n\n");
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
