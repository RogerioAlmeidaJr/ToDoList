const inputTxt = document.querySelector('.inputTxt');
const inputBtn = document.querySelector('.insertBtn');
const divTarefas = document.querySelector('.div-tarefas');

const validaInput = () => {
    if(inputTxt.value.trim().length > 0){
        return true;
    }else{
        return false;
    }
}

const addTarefa = () => {
    const valida = validaInput();

    if(!valida){
        return inputTxt.classList.add("erro");
    }

    const tarefa = document.createElement("div");
    tarefa.classList.add("item-adicionado");

    const p = document.createElement("p");
    p.innerText = inputTxt.value;

    const delTarefa = document.createElement("i");
    delTarefa.classList.add("fa-solid");
    delTarefa.classList.add("fa-trash-can");

    tarefa.appendChild(p);
    tarefa.appendChild(delTarefa);

    divTarefas.appendChild(tarefa);

    inputTxt.value = "";
}

const changeText = () => {
    const valida = validaInput();

    if(valida){
        return inputTxt.classList.remove("erro");
    }
}

inputBtn.addEventListener("click", () => addTarefa());
inputTxt.addEventListener("change", () => changeText());