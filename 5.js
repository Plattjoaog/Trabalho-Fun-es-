const usuarios = [
    {
        nome: "André",
        idade: 29,
        habilitado: false,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: false,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
];

const UsuariosFaixaEtaria = usuarios.filter(function (usuario) {
    return usuario.idade > 18 && usuario.idade < 65;
});

const todosHabilitados = UsuariosFaixaEtaria.every((usuario) => {
    return usuario.habilitado === true;
});


if (todosHabilitados) {
    console.log('Todos passaram no teste');

} else {
    console.log('Todos precisam estar habilitados');

}