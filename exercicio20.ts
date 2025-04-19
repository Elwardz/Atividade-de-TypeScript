function carrosRecentes(carros: { marca: string, modelo: string, ano: number }[], ano: number) {
  return carros.filter(carro => carro.ano > ano);
}