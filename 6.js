const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const NovoArray = cidades.filter((cidade) => {
    return cidade.length <= 8;

})

const arrayFormatado = NovoArray.join(',');

console.log(NovoArray);
console.log(arrayFormatado);