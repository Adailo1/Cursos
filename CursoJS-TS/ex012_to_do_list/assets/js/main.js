const btnAdicionar = document.querySelector('.btn-adicionar');
const inputTarefa = document.querySelector('.input-tarefa');
const listaTarefas = document.querySelector('.lista-tarefas');

function criaTarefa(){
    const li = document.createElement('li');
    li.innerText = `${inputTarefa.value}`;
    return li;
}

function criaBotaoApagar(){
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';
    btnApagar.setAttribute('class', 'btn-apagar');
    btnApagar.setAttribute('onclick', 'apagaTarefa(this)');
    return btnApagar;
}

function adicionaTarefa(tarefa){
    tarefa.appendChild(criaBotaoApagar());
    listaTarefas.appendChild(tarefa);
    inputTarefa.value = '';
    inputTarefa.focus();
}

function apagaTarefa(button){
    button.parentElement.remove();
}

btnAdicionar.addEventListener('click', function(){
    if (inputTarefa.value != "") {
        const tarefa = criaTarefa();
        adicionaTarefa(tarefa);
    }
});

document.addEventListener('keypress', function(e){
    if (inputTarefa.value != "") {
        if (e.keyCode == 13){
            const tarefa = criaTarefa();
            adicionaTarefa(tarefa);
        }
    }
});