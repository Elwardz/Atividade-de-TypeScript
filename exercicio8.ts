function contarDigitosParesImpares(numero: number): { pares: number, impares: number } {
  const digitos = numero.toString().split('');
  let pares = 0, impares = 0;
  for (let d of digitos) {
    if (parseInt(d) % 2 === 0) pares++;
    else impares++;
  }
  return { pares, impares };
}