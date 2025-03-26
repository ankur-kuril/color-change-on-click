let btn = document.querySelectorAll('.button');
let body = document.querySelector('body');

let change = btn.forEach ((i) => {
    i.addEventListener('click', (e) =>{
        body.style.backgroundColor = e.target.id
    })
})