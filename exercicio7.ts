function calcularMediaArredondada(numeros: number[]): number {
  const total = numeros.reduce((acc, num) => acc + num, 0);
  return Math.round(total / numeros.length);
}