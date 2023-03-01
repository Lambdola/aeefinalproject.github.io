
// let input = document.getElementById('input');
let div = document.querySelectorAll('div');
div.forEach(divg1 => {
    let p = Array.from((divg1.getElementsByTagName('p').getElementsByTagName('a')));
    for (let i = 0; i < p.length; i++){
        ul.innerHTML += '<li>' + div[i] + '</li>'; 

    }
})

   

