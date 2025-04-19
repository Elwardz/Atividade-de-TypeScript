function pessoaMaisVelha(pessoas: { nome: string, idade: number }[]): string {
  return pessoas.reduce((maisVelha, pessoa) => pessoa.idade > maisVelha.idade ? pessoa : maisVelha).nome;
}