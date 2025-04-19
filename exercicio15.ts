function palavraMaisLonga(frase: string): string {
  return frase.split(" ").reduce((a, b) => a.length > b.length ? a : b);
}