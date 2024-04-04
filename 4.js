const numeros = [0, 122, 4, 6, 7, 8, 44];

const arrayNumerosPares = numeros.every((numero) => {
    return numero % 2 === 0;

});

if (arrayNumerosPares) {
    console.log('Array valido');
} else {
    console.log('Array invalido');
}