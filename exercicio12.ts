function advinheNumero(): void {
  const numeroSecreto = Math.floor(Math.random() * 100) + 1;
  let tentativas = 0;
  let chute: number | null = null;
  while (chute !== numeroSecreto) {
    chute = parseInt(prompt("Digite um número entre 1 e 100:") || "0");
    tentativas++;
    if (chute > numeroSecreto) alert("É menor!");
    else if (chute < numeroSecreto) alert("É maior!");
  }
  alert(`Parabéns! Você acertou em ${tentativas} tentativas.`);
}
