'use strict'

const btn = document.querySelectorAll('[btn-nav]')

const modal = document.getElementById('modal')
const modalImg = document.getElementById('modal-img')
const overlay = document.getElementById('overlay')

const yearCopy = document.getElementById('year')
yearCopy.textContent = new Date().getFullYear()


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