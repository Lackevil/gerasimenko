// Burger Menu

const body = document.querySelector('body')
const header = document.querySelector('.header')
const burger = document.querySelector('#burger')

burger.addEventListener('click', () => {
  header.classList.toggle('active')
  body.classList.toggle('scroll-lock')
})

const headerLinks = document.querySelectorAll('.header__link')

for (let link of headerLinks) {
  link.addEventListener('click', () => {
    body.classList.remove('scroll-lock')
    header.classList.remove('active')
  })
}