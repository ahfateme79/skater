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





// menu
let openbtn=document.querySelector('.open-btn')
let menu=document.querySelector('.menu')

openbtn.addEventListener('click',()=>{
    menu.classList.toggle('open')
})