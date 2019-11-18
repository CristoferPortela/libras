'use strict'
import '../libraries/lizFramework/css/generals/liz.css'
import './app.less'
import './components'
import './mainPage'


let tooMuchTime = setInterval(() => {
    confirm('Olá? Ainda está ai?')
}, 1000*90)

document.addEventListener('scroll', () => {
    clearInterval(tooMuchTime)

    tooMuchTime = setInterval(() => {
        confirm('Olá? Ainda está ai?')
    }, 1000*90)
})



