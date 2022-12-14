//scroll-top

let scroll_btn = document.querySelector('#back_to_top')
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scroll_btn.classList.add('opacity')
    } else {
        scroll_btn.classList.remove('opacity')
    }
})





// menu
let openBtn = document.querySelector('.open-btn')
let menu = document.querySelector('.menu')
let close = document.querySelector('.close-btn')

openBtn.addEventListener('click', menuhandle)
close.addEventListener('click', menuhandle)

function menuhandle() {
    menu.classList.toggle('open')
}



// tab
let tab = document.querySelectorAll('.tab ul li')
let content = document.querySelectorAll('.content')


tab.forEach(n => {
    n.addEventListener('click', (e) => {
        for (let i = 0; i < tab.length; i++) {
            tab[i].classList.remove('active')
        }
        for (let d = 0; d < content.length; d++) {
            content[d].classList.remove('active')
        }
        n.classList.add('active')

        let id = e.target.dataset.name
        document.getElementById(id).classList.add('active')
    })
})


// befor-aftre
function beforeAfter() {
    document.getElementById('compare').style.width = document.getElementById('slider').value + "%";
}


// week
let week = document.querySelectorAll('.week ul li')
let hour = document.querySelectorAll('.hour-content')


week.forEach(n => {
    n.addEventListener('click', (e) => {
        for (let i = 0; i < week.length; i++) {
            week[i].classList.remove('active')
        }
        for (let d = 0; d < hour.length; d++) {
            hour[d].classList.remove('active')
        }
        n.classList.add('active')

        let id = e.target.dataset.name
        document.getElementById(id).classList.add('active')
    })
})




// hour

let hour_content = document.querySelectorAll('.hour-content p label')
let hour_inp = document.querySelector(".hour-inp input")

hour_content.forEach(n => {
    n.addEventListener('click', () => {
        hour_inp.value = n.innerHTML
    })
})