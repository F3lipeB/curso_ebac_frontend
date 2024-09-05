"use strict";
function olaNome(nome) {
    return `Olá ${nome}!`;
}
;
const nome = "Teobaldo";
const saldacao = olaNome(nome);
function multiplica(n1, n2) {
    return n1 * n2;
}
const resposta = `A resposta da multiplicação é ${multiplica(2, 3)}`;
console.log(saldacao);
console.log(resposta);
