"use strict";

var alunos = [];
// Notas = [5, 6, 7, 5];

alunos.push({
  nome: 'Felipe',
  nota: 5
});
alunos.push({
  nome: 'Rafael',
  nota: 6
});
alunos.push({
  nome: 'Juliana',
  nota: 7
});
alunos.push({
  nome: 'Carina',
  nota: 5
});
function filtraAprovados(aluno) {
  return aluno.nota >= 6;
}
var alunosAprovados = alunos.filter(filtraAprovados);
console.log(alunos);
console.log("Alunos aprovados:");
console.log(alunosAprovados);