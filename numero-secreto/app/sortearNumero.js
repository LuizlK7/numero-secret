const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()


function gerarNumeroAleatorio() {
    // + 1 porque o Math.random vai até um valor menor do número referenciado
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('Número secreto: ' + numeroSecreto)

const elementoMenorValor = document.querySelector('#menor-valor')
const elementoMaiorValor = document.querySelector('#maior-valor')

elementoMenorValor.textContent = menorValor
elementoMaiorValor.textContent = maiorValor