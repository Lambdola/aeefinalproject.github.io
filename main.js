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

function highlight(option){
    let title = document.getElementById(option).getElementsByTagName('h1');
    title.style.backgroundColor = 'yellow';
}
