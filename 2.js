const palavras = ['Livro', 'Caneta', 'Sol', 'Carro', 'Orelha'];

const existePalavrasInvalida = palavras.some(function (valor) {
    return valor.length > 5;
});

if (existePalavrasInvalida) {
    console.log('Existe palavra invalida');
} else {
    console.log('Array validado');
}