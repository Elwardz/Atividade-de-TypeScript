function calcularImpostoRenda(salario: number): string | number {
  if (salario <= 1903.98) return "Isento";
  if (salario <= 2826.65) return salario * 0.075;
  if (salario <= 3751.05) return salario * 0.15;
  if (salario <= 4664.68) return salario * 0.225;
  return salario * 0.275;
}