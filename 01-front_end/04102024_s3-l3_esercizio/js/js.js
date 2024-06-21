const gestioneFunzioni=function (event) {
    event.preventDefault();
    newTask();
    taskSvolto();
    rimuoviTask();
}


const newTask=function(){
    let textField, tasks, text;

    textField=document.querySelector("#newTask input");
    tasks=document.querySelector("#tasks");

    text=
        `
        <div id="task">
            <span>
                ${textField.value}
            </span>
            <button id="delete">
                <i class="far fa-trash-alt fa-beat"></i>
            </button
        </div
        `

    tasks.innerHTML+=text;
    textField.value="";
}

const taskSvolto=function () {
    let task;

    task=document.querySelectorAll("#task span");

    for(i=0; i<task.length; i++){
        task[i].addEventListener("click", function (){
            this.classList.toggle("complete");
        })
    }
}

const rimuoviTask=function (){
    let remove;

    remove=document.querySelectorAll("#delete");

    for(i=0; i<remove.length; i++){
        remove[i].addEventListener("click", function() {
            this.parentNode.remove();
        })
    }


}

window.onload = function(){
    let form;

    form=document.querySelector("form");
    form.addEventListener("submit", gestioneFunzioni);
}

