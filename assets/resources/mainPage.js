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
        const likeP = document.getElementById('likeP')
        const liked =  document.getElementById('liked')

        if (localStorage.like === true || localStorage.like === 'true') {
            likeP.classList.remove('_center-flex', 'show')
            liked.classList.remove('hide-none')

            likeP.classList.add('hide-none')
            liked.classList.add('show')
        } else {
            liked.classList.remove('_center-flex', 'show')
            likeP.classList.remove('hide-none')

            liked.classList.add('hide-none')
            likeP.classList.add('show')
        }
    }

    like()
        
    document.getElementById('like').addEventListener('click', () =>{
        localStorage.like = true
        like()
        alert('Obrigado!')
    })    
}
export default mainPage