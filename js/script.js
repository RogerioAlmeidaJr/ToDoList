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

    const divBtn = document.createElement("nav");
    divBtn.classList.add("div-btn");

    const checkTarefa = document.createElement("i");
    checkTarefa.classList.add("fa-solid");
    checkTarefa.classList.add("fa-check-double");
    checkTarefa.classList.add("checkBtn");

    const delTarefa = document.createElement("i");
    delTarefa.classList.add("fa-solid");
    delTarefa.classList.add("fa-trash-can");
    delTarefa.classList.add("deleteBtn");


    tarefa.appendChild(p);
    tarefa.appendChild(divBtn);

    divBtn.appendChild(checkTarefa);
    divBtn.appendChild(delTarefa);

    divTarefas.appendChild(tarefa);

    inputTxt.value = "";
    inputTxt.focus();

    attLS();
}

document.addEventListener("click", (e) => {

    const trgEl = e.target;
    const prtEl = trgEl.closest("div");

    if(trgEl.classList.contains("checkBtn")){

        prtEl.classList.toggle("check");
        attLS();

    }

    if(trgEl.classList.contains("deleteBtn")){

        prtEl.remove();
        attLS();

    }

})

const changeText = () => {
    const valida = validaInput();

    if(valida){
        return inputTxt.classList.remove("erro");
    }
}

inputBtn.addEventListener("click", () => addTarefa());
inputTxt.addEventListener("change", () => changeText());