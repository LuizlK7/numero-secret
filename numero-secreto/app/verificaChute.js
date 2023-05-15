function verificaChute(chute) {

    // assim já converto a string para um número inteiro
    const numero = +chute

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido!</div>'
    }

    if (numeroMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: fale um número entre ${menorValor} e ${maiorValor}</div>`
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id='jogar-novamente' class='btn-jogar-novamente'>Jogar novamente</button>

        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
           <div>O número secreto é menor <i class="fa-sharp fa-solid fa-down-long"></i></div> 
        `
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-sharp fa-solid fa-up-long"></i></div> 
     `
    }
    
}


function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        
        // reiniciar a página
        window.location.reload()
    } 
})
     
