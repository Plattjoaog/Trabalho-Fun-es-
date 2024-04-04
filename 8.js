const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]


const arrayModificado = frutas.map((fruta, indice) => {
    return `${indice} - ${fruta.slice(0, 1).toUpperCase()} - ${fruta.slice(1).toUpperCase()}`;
});

console.log(arrayModificado);