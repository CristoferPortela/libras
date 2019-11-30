'use strict'
import $ from 'jquery'
import htmlHome from './components/Home.html'
import htmlSobre from './components/Sobre.html'
import htmlMais from './components/Mais.html'
import sobreAjax from './sobre'
import mainPage from './mainPage'
import mais from './mais'

const route = [
    {nome: '', tpl: htmlHome, func() {mainPage()}},
    {nome: '#/sobre', tpl: htmlSobre, func() {sobreAjax()}},
    {nome: '#libras', tpl: null, func() {return null}},
    {nome: '#/mais', tpl: htmlMais, func() {mais()}},
]

async function routes() {
    route.forEach(e => {
        if (location.hash === e.nome) {
            $('#principal').remove()

            $('nav').after(e.tpl)
    
            e.func()
    
            let name = e.nome.slice(2)
            name = e.nome === '' ? 'Home' : name.charAt(0).toUpperCase() + name.slice(1)
            document.title = `${name} - SignScript`
        }
    })
}

export const routing = routes
export const hashing = route