const btn = document.querySelectorAll('[btn-nav]')




btn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        btn.classList.toggle('selected')
    })
})