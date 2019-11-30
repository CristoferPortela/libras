'use strict'
import '../libraries/lizFramework/css/generals/liz.css'
import './app.less'
import './components'

window.onload = async () => {

    let tooMuchTime = setInterval(() => {
        alert('Olá? Ainda está ai?')
    }, 1000*120)
    
    document.addEventListener('scroll', () => {
        clearInterval(tooMuchTime)
    
        tooMuchTime = setTimeout(() => {
            alert('Olá? Ainda está ai?')
    
        }, 1000*120)
    })
}

document.forms[1][0].addEventListener('blur', () => {
    document.forms[1][0].pattern = /^[\W\w]+@{1}\w+(\.[\w]+((\.[\w+]+)+)?)$/
    if (document.forms[1][0].validity.patternMismatch)
        document.forms[1][0].setCustomValidity('Por favor, me revise')
})

const validar = e => {

    if (e.validity.valueMissing) 
        e.setCustomValidity('Acho que você me esqueceu');
    if (e.validity.typeMismatch) 
        e.setCustomValidity('Tem alguma coisa errada aqui');
    if (e.validity.tooLong || e.validity.rangeOverflow) 
        e.setCustomValidity('Este campo precisa ser um pouco menor');
    if (e.validity.tooShort || e.validity.rangeUnderflow) 
        e.setCustomValidity('Este campo precisa ser um pouco maior');
}

const email = document.getElementById('email')
const nome = document.getElementById('nome')

email.addEventListener('invalid', () => { validar(email) })
nome.addEventListener('invalid', () => { validar(nome) })

const radioValidate = () => {
    const radio = Array.from(document.getElementsByName('sexo'))
    const email = document.querySelector('#email')

    let checked = radio.filter(e => {
        if (e.checked === true)
            return e.checked
    })
    if (checked === []) {
        document.querySelector['#irrelevante'].checked = true
    }

    nome.value = nome.value.length === 0 ? 'Não informado' : nome.value.charAt(0).toUpperCase() + nome.value.slice(1)

    let informacoes = confirm(`Estas informações estão corretas? 
                        Email: ${email.value}
                        Nome: ${nome.value}
                    `)

    if (informacoes === false)
        return false
}

document.querySelector('form[method=post]').onsubmit = () => { return radioValidate() }
    