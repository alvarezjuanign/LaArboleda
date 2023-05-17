'use strict'

const btn = document.querySelectorAll('[btn-nav]')

const modal = document.getElementById('modal')
const modalImg = document.getElementById('modal-img')
const overlay = document.getElementById('overlay')

const nameReq = document.querySelector('.name')
const emailReq = document.querySelector('.email')
const btnReq = document.querySelector('.btn')


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

btnReq.addEventListener("click", (e)=>{
    let error = validate()
    if (error[0]){
        return
    } else{
        alert("Solicitud enviada correctamente")
    }
})


const validate = ()=>{
    let error = []
    if (nameReq.value.length < 5 || nameReq.value.length > 40){
        error[0] = true
        error[1] = "El nombre es inválido"
        return error
    } else if (emailReq.value.length < 5 || emailReq.value.length > 40 || emailReq.value.indexOf("@") == -1 || emailReq.value.indexOf(".") == -1){
        error[0] = true
        error[1] = "El email es inválido"
        return error
    }

    error[0] = false
    return error 
}