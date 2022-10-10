var box = document.getElementById('box');
var qtdeTask = 0;
var idDelete = 1;

function novaTarefa(){
    var max = document.getElementById('max');
    var textoTarefa = document.getElementById('texto-tarefa').value;
    if(qtdeTask < 7 && textoTarefa.length){
        box.innerHTML += `
        <div id="${idDelete}">
        <h3>₪ ${textoTarefa}</h3>
        <button onclick="deletar(${idDelete})">x</button>
        </div>
        `;
        document.getElementById('texto-tarefa').value = '';
        qtdeTask += 1;
        idDelete += 1;
    }else if(qtdeTask == 7){
        max.innerText = "MAX"
        document.getElementById('texto-tarefa').value = '';
    } 
}

function max(){
    var max = document.getElementById('max');
    if(qtdeTask == 7){
        max.style.display = 'block';
        max.innerText = "MAX"
    }else{
        max.style.display = 'none';
    } 
}
setInterval(max,1)

function deletar(indice){
    var lixo = document.getElementById(indice)
    box.removeChild(lixo)
    qtdeTask--;
}

function conferevazio(){
    var label = document.getElementById('label')
    if(qtdeTask == 0){
        box.innerHTML = "<label id='label'>Vazio...</label>"
    }else{
        label.style.display = 'none';
    }
}
setInterval(conferevazio, 1)

window.addEventListener("load",max);
window.addEventListener("load",conferevazio)