function active(option){
    let a_base = document.querySelector('#a_base');
    let a_form = document.querySelector('#a_form');
    if (option == "base"){
        a_base.style.backgroundColor = 'green';
        a_form.style.backgroundColor = 'gray';
    }
    else{
        a_base.style.backgroundColor = 'gray';
        a_form.style.backgroundColor = 'green';
    }
}

let input = document.getElementById('search');
let li = document.getElementById('search_ul');
let p = document.getElementsByTagName('p');

input.addEventListener('keyup', function(){
    var i, j, k;
    let val = input.value.toUpperCase();
    li.innerHTML = '';
    for (i = 0; i < p.length; i++){
        j = p[i].innerHTML
        k = j.toUpperCase();
        if (k.indexOf(val) > 0){
            li.innerHTML += '<li>' + j + '</li>' + '<br>';
        }

    }
}
);





