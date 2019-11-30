'use strict'
import validateEmail from './validation'

const mais = () => {

    if (localStorage.email === null || localStorage.email === '' || localStorage.email === undefined || localStorage.email === 'null') {
        
        // precisa ser onload, caso a pagina seja carregada para não ficar tudo branco
        window.addEventListener('load', () => {
            let email = prompt('Gostaria de receber novidades em seu emai? Digite ele abaixo!')
            if (validateEmail(email))
                localStorage.email = email
        })

        window.addEventListener('hashchange', () =>{
            console.log(this)
            if (location.hash === '#/mais') {
                let email = prompt('Gostaria de receber novidades em seu emai? Digite ele abaixo!')
                if (validateEmail(email))
                localStorage.email = email 
            }
        })
    } 
    if (localStorage.email !== null && localStorage.email !== undefined && localStorage.email !== 'null') {
        
        document.getElementsByTagName('strong')[0].textContent = 'Muito obrigado pelo interesse'
    }    
}
export default mais