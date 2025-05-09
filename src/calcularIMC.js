// ## Calculadora de IMC (1 ponto)

// **Enunciado:**

// Crie a função calcularIMC que receba peso e altura e retorne:

// - `"Abaixo do peso"` se < 18.5
// - `"Peso normal"` se entre 18.5 e 24.9
// - `"Sobrepeso"` se entre 25 e 29.9
// - `"Obesidade"` se ≥ 30
// - `"Erro"` para dados inválidos

// **Fórmula IMC**: peso / (altura * altura)

function calcularIMC(peso, altura) {
  let resultadoIMC = peso / (altura * altura)

  if (resultadoIMC == 0) {
    return ("Erro")
  }
  else if (resultadoIMC == undefined) {
    return ("Erro")
  }
  else if (peso == 0) {
    return ("Erro")
  }
  else if (altura == 0) {
    return ("Erro")
  }
  else if (resultadoIMC < 18.5) {
    return ("Abaixo do peso")
  }
  else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.9) {
    return ("Peso normal")
  }
  else if (resultadoIMC >= 25 && resultadoIMC <= 29.9) {
    return ("Sobrepeso")
  }
  else if (resultadoIMC >= 30) {
    return ("Obesidade")
  }
  else {
    return ("Erro")
  }
}

// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcularIMC };