function valorBebida(opcao) {
    let valor;
  
    switch (opcao) {
      case 'cafe':
        valor = 14.80;
        break;
      case 'leite':
        valor = 6.48;
        break;
      case 'cha':
        valor = 9.50;
        break;
      default:
        console.log('Opção inválida. Escolha entre café, leite ou chá.');
        return;
    }
  
    console.log(`Você escolheu ${opcao}. Valor a ser pago: R$ ${valor.toFixed(2)}`);
  }
  
  valorBebida('cafe');  // Café escolhido. Valor a ser pago: R$ 2.50
  valorBebida('leite'); // Leite escolhido. Valor a ser pago: R$ 3.00
   valorBebida('cha');   // Chá escolhido. Valor a ser pago: R$ 2.00
   valorBebida('vodka');  // Opção inválida. Escolha entre café, leite ou chá.
  