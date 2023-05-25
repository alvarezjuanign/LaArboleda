'use strict'

const btn = document.querySelectorAll('[btn-nav]')

const modal = document.getElementById('modal')
const modalImg = document.getElementById('modal-img')
const overlay = document.getElementById('overlay')

const yearCopy = document.getElementById('year')
yearCopy.textContent = new Date().getFullYear()

if ('Notification' in window) {
    Notification.requestPermission()
      .then(function(permission) {
        if (permission === 'granted') {
          var options = {
            body: 'Esta es una notificación de ejemplo.',
            icon: 'ruta/al/icono.png' // Ruta de la imagen del icono
          };
  
          var notification = new Notification('¡Hola!', options);
  
          notification.onclick = function() {
            console.log('El usuario hizo clic en la notificación.');
          };
        }
      });
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