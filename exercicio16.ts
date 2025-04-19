function quadro(strings: string[]): void {
  const largura = Math.max(...strings.map(s => s.length));
  const borda = "*".repeat(largura + 4);
  console.log(borda);
  for (let str of strings) {
    console.log(`* ${str.padEnd(largura)} *`);
  }
  console.log(borda);
}
