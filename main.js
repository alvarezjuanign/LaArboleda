const btn = document.querySelectorAll('[btn-nav]')


btn.forEach(button =>{
    button.addEventListener('click', () => {
            btn.forEach(button => {
                button.classList.remove('selected')
            })
            button.classList.add('selected')
        })
    })