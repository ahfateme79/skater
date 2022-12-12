
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




