let qntdInicial = parseFloat(prompt("Por favor, informe o saldo inicial."));

let opcao;

do {
  opcao = prompt(
    "CONTROLE FINANCEIRO\n" +
      "Saldo: " +
      "R$ " +
      qntdInicial +
      "\n\n1. Depositar" +
      "\n2. Sacar" +
      "\n3. Sair"
  );

  switch (opcao) {
    case "1":
      const deposito = parseFloat(
        prompt("Por favor, informe o valor que deseja depositar.")
      );
      qntdInicial += deposito;
      alert("Aguarde...");
      alert("Depósito realizado com sucesso!");
      break;

    case "2":
      const saque = parseFloat(
        prompt("Por favor, informe o valor que deseja sacar.")
      );

      if (qntdInicial < saque) {
        alert("Saldo insuficiente para saque.");
      } else {
        qntdInicial -= saque;
        alert("Aguarde...");
        alert("Saque realizado com sucesso!");
      }
      break;

    case "3":
      alert("Saindo...");
      break;

    default:
      alert("Opção inválida.");
  }
} while (opcao != 3);
