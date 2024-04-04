const palavras = ['Arroz', 'feijão', 'Carne', 'Cerveja', 'Macarrão'];

const existeBebidaAlcoolica = palavras.some(function (valor) {
    return valor === 'cerveja' || valor === 'Vodka';
});


if (existeBebidaAlcoolica) {
    console.log('Revise sua lista, João. possui bebida com venda proibida!');
} else {
    console.log('tudo certo, vamos as compras!')
}