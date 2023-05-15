const elementoChute = document.querySelector('#chute')

// consumindo API para utilizar o microfone do usuário no site
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {

    // Acessando o que foi falado no microfone
    chute = (e.results[0][0].transcript)
    exibeChuteNaTela(chute)
    verificaChute(chute)

}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = ` 
    <div>Você disse</div>
    <span class ='box'>${chute}</span>
    `
}

// quando a função acabar o reconhecimento de voz é ligado novamente
recognition.addEventListener('end', () => recognition.start())