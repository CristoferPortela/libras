'use strict'
import $ from 'jquery'
import woman from '../images/woman.jpg'

function mainPage() {

    const indexArticles = []
    const porqueImg = $('.porque')
    porqueImg.attr('src', woman)

    indexArticles[0] = $('#sobre')
    indexArticles[1] = $('#porque')
    indexArticles[2] = $('#mais')

    indexArticles.forEach((e) => {
        e.css('opacity','0')
        e.css('margin-left','-50%')
        e.addClass('delay')
    })

    $(window).scroll(function(){
        let windowPos = $(window).scrollTop()

        for (let i in indexArticles) {
            let sobrePos = indexArticles[i].position()
    
            if (windowPos >= (sobrePos.top-300) && windowPos <= (sobrePos.top+500)) {
                indexArticles[i].css('opacity','1')
                indexArticles[i].css('margin-left','0')
            } else {
                indexArticles[i].css('opacity','0')
                indexArticles[i].css('margin-left','-50%')
            }
        }
    })

    function like(){
        const likeP = $('#likeP')
        const liked =  $('#liked')

        if (localStorage.like === true || localStorage.like === 'true') {
            likeP.fadeOut('10')
            liked.fadeIn('100')
        } else {
            likeP.fadeIn('100')
            liked.fadeOut('10')
        }
    }

    like()
    $('#like').click(() =>{
        localStorage.like = true
        like()
        alert('Obrigado!')
    })    
}
export default mainPage