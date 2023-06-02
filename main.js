'use strict'

const btn = document.querySelectorAll('[btn-nav]')

const modal = document.getElementById('modal')
const modalImg = document.getElementById('modal-img')
const overlay = document.getElementById('overlay')

const body = document.body
const darkModeButton = document.getElementById('darkModeButton')
const lightModeButton = document.getElementById('lightModeButton')

const yearCopy = document.getElementById('year')
yearCopy.textContent = new Date().getFullYear()

darkModeButton.addEventListener('click', () => {
    darkModeButton.style.display = 'none'
    lightModeButton.style.display = 'block'
    body.classList.add('dark-mode')
})

lightModeButton.addEventListener('click', () => {
    darkModeButton.style.display = 'block'
    lightModeButton.style.display = 'none'
    body.classList.remove('dark-mode')
})

Notification.requestPermission()
if (Notification.permission === 'granted') {
    const options = {
        body: 'Bienvenido a La Arboleda'
    }
    new Notification('¡Hola!', options)
}

btn.forEach(button =>{
    button.addEventListener('click', () => {
        btn.forEach(button => {
            button.classList.remove('selected')
        })
        button.classList.add('selected')
    })
})

const openModal = (imgSrc) => {
    modal.style.display = 'flex'
    modalImg.src = imgSrc
    overlay.style.display = 'block'
}

const closeModal = () => {
    modal.style.display = 'none'
    overlay.style.display = 'none'
}
