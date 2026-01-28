
const input = document.getElementById('input-tarefa');
const btnAdicionar = document.getElementById('btn-adicionar');
const lista = document.getElementById('lista-tarefas');


let tarefas = JSON.parse(localStorage.getItem('minhasTarefas')) || [];


function salvarDados() {
    localStorage.setItem('minhasTarefas', JSON.stringify(tarefas));
}


function renderizarTarefas() {
    lista.innerHTML = ''; 
    tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');
        if (tarefa.concluida) li.classList.add('concluida');

        const span = document.createElement('span');
        span.innerText = tarefa.texto;
        
        // Marcar como concluída
        span.addEventListener('click', function() {
            tarefas[index].concluida = !tarefas[index].concluida;
            salvarDados();
            renderizarTarefas();
        });

        const btnExcluir = document.createElement('button');
        btnExcluir.innerText = '🗑️';
        btnExcluir.classList.add('btn-excluir');

        
        btnExcluir.addEventListener('click', function() {
            tarefas.splice(index, 1); 
            salvarDados();
            renderizarTarefas();
        });

        li.appendChild(span);
        li.appendChild(btnExcluir);
        lista.appendChild(li);
    });
}


function adicionarTarefa() {
    const textoTarefa = input.value.trim();

    if (textoTarefa === '') {
        alert('Por favor, digite uma tarefa!');
        return;
    }

    
    tarefas.push({ texto: textoTarefa, concluida: false });

    input.value = '';
    salvarDados();
    renderizarTarefas();
}

btnAdicionar.addEventListener('click', adicionarTarefa);
input.addEventListener('keypress', function(evento) {
    if (evento.key === 'Enter') {
        adicionarTarefa();
    }
});


renderizarTarefas();