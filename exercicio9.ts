function calcularMediaAlunos(alunos: { nome: string, nota: number }[]): number {
  const total = alunos.reduce((acc, aluno) => acc + aluno.nota, 0);
  return total / alunos.length;
}