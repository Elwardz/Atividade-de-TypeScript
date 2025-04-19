function calcularPrecoProduto(custo: number, margem: number, frete: number): number {
  return custo + (custo * margem / 100) + frete;
}