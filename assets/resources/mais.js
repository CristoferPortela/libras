'use strict'

const mais = () => {
    const validateEmail = email => {
        if (email !== null & email !== '' && email.match(/^[\W\w]+@{1}\w+(\.[\w]+((\.[\w+]+)+)?)$/)) {
            localStorage.email = email
        }
    }
    if (localStorage.email === null || localStorage.email === '' || localStorage.email === undefined) {
        // precisa se ronload, caso a pagina seja carregada para não ficar tudo branco
        window.addEventListener('load', () => {
            let email = prompt('Gostaria de receber novidades em seu emai? Digite ele abaixo!')
            validateEmail(email)
        })
        window.addEventListener('hashchange', () =>{
            if (location.hash === '#/mais') {
                let email = prompt('Gostaria de receber novidades em seu emai? Digite ele abaixo!')
                validateEmail(email)
            }
        })
    } 
    if (localStorage.email !== null && localStorage.email !== undefined)
        document.getElementsByTagName('strong')[0].textContent = 'Muito obrigado pelo interesse'
    
}
export default mais