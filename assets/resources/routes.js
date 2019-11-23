'use strict'
import $ from 'jquery'
import htmlHome from './components/Home.html'
import htmlSobre from './components/Sobre.html'
import sobreAjax from './sobre'
import mainPage from './mainPage'


function routes() {
    if (location.pathname === '/' && (location.hash === '#/' || location.hash.search('/') === -1)) {

        $('#principal').remove()
        $('nav').after(htmlHome)
        mainPage()
    
    } else if (location.pathname === '/' && location.hash === '#/sobre') {
        $('#principal').remove()
        $('nav').after(htmlSobre);
        sobreAjax()
    }
}

export default routes