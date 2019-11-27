'use strict'
import $ from 'jquery'
import htmlHome from './components/Home.html'
import htmlSobre from './components/Sobre.html'
import htmlMais from './components/Mais.html'
import sobreAjax from './sobre'
import mainPage from './mainPage'
import mais from './mais'


function routes() {
    if (location.pathname === '/' && (location.hash === '#/' || location.hash.search('/') === -1)) {

        $('#principal').remove()
        $('nav').after(htmlHome)
        mainPage()

        document.title = 'Home - SignScript'
    } else if (location.pathname === '/' && location.hash === '#/sobre') {
        $('#principal').remove()
        $('nav').after(htmlSobre);
        sobreAjax()
        document.title = 'Sobre - SignScript'
    } else if (location.pathname === '/' && location.hash === '#/mais') {
        $('#principal').remove()
        $('nav').after(htmlMais);
        mais()
        document.title = 'Mais - SignScript'
    }
}

export default routes