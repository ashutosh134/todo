let form = document.querySelector('form');

let input = document.querySelector('input');

let ul = document.querySelector('ul');


const saveTodo = (e) => {
    e.preventDefault()
    
    let li = document.createElement('li');

    li.innerText = input.value;
    li.className = "list-group-item"

    let delBtn = document.createElement('button');

    delBtn.innerText = "Delete";
    delBtn.className = 'btn btn-danger rounded-0 float-end'
   
    li.appendChild(delBtn);

    ul.appendChild(li);

    form.reset();

};

form.addEventListener('submit', saveTodo);;


const deleteTodo = (e) => {

   if(e.target.className.includes('btn-danger')){
    if(window.confirm("Are you Sure ?")){
        ul.removeChild(e.target.parentElement)
    }
   }

};

ul.addEventListener('click', deleteTodo)

