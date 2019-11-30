'use strict'
import $ from 'jquery'

async function ajax() {
    $.get('http://localhost:80/sobre', (data) => {
        data = JSON.parse(data)
        $('#sobre h2').text(data.sobre.titulo)
        $('#sobre .content p').text(data.sobre.conteudo)
    })
}

export default ajax