function livrosPorAutor(livros: { titulo: string, autor: string, ano: number }[], autor: string) {
  return livros.filter(livro => livro.autor === autor);
}