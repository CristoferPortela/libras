'use strict'
import './Footer.less'
import './Menu.less'
import './Home.less'
import './Sobre.less'
import $ from 'jquery'
import htmlMenu from './Menu.html'
import htmlFooter from './Footer.html'
import { routing } from '../routes'
import { hashing } from '../routes'
import 'jquery-touchswipe'

(function() {
    $('body').prepend(htmlMenu)
    $('script').before(htmlFooter)

    routing()

    window.addEventListener('hashchange', () => routing())
    window.addEventListener('hashchange', (e) => { 
        window.scrollTo(0,0);
        $('#guias').html(`<a href="${e.oldURL}" class="teri-gaki-persimmon">Voltar página anterior {${e.oldURL}}</a>`)
    })

    const hashIndex = () => {
        for (let i in hashing) {
            if (location.hash === hashing[i].nome)
                return Number(i)
        }
    }

    let index = hashIndex()

    document.addEventListener('keydown', async e => {
        if (e.keyCode === 39) {
            index += 1
            if (index >= hashing.length)
                index = 0
            location.hash = hashing[index].nome
        }
    })
    document.addEventListener('keydown', async e => {
        if (e.keyCode === 37) {
            index -= 1
            if (index < 0)
                index = hashing.length - 1
            location.hash = hashing[index].nome
        }
    })

    $('body').swipe({
        swipe:function(event, direction, distance) {
            if (direction === 'left' && distance >= 150) {
                index += 1
                if (index >= hashing.length)
                    index = 0
                location.hash = hashing[index].nome
            } else if (direction === 'right' && distance >= 150) {
                index -= 1
                if (index < 0)
                    index = hashing.length - 1
                location.hash = hashing[index].nome
            }
        }
    })
})()

// The menu action on clicking it

const change = (changed, class1, class2) => {
    let toChange = document.querySelector(changed)
    if (toChange.classList.contains(class1)) {
        toChange.classList.remove(class1)
        toChange.classList.add(class2)
    }
    else {
        toChange.classList.remove(class2)
        toChange.classList.add(class1)
    }
}

let toggler = document.querySelector('.toggler')

toggler.addEventListener('click', () => change('#main-menu', 'toggled', 'toggled-change'))