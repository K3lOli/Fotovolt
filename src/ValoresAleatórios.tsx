export function gerarValoresAleatorios(): { x: string; y: string }[] {
  const dados: { x: string; y: string }[] = [];
  const maximoCaracteres = 1;

  for (let hora = 0; hora < 24; hora++) {
    let temperatura = Math.random() * (50 - 20) + 20;
    
    const ponto = {
      x: `${hora.toString().padStart(2, "0")}:00`,
      y: temperatura.toFixed(maximoCaracteres)
    };
    dados.push(ponto);
  }

  return dados;
}
