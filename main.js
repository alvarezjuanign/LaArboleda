const btn = document.querySelectorAll('[btn-nav]')


btn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        btn.classList.add('selected')
    })
})


console.log('HOLA CONSOLA')