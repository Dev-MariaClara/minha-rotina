// 1. Pegando os elementos da tela
const input = document.getElementById('input-tarefa');
const btnAdicionar = document.getElementById('btn-adicionar');
const lista = document.getElementById('lista-tarefas');

// 2. Função que cria uma nova tarefa
function adicionarTarefa() {
    const textoTarefa = input.value;

    // Verifica se a pessoa digitou algo (não deixa adicionar vazio)
    if (textoTarefa === '') {
        alert('Por favor, digite uma tarefa!');
        return;
    }

    // Cria o item da lista (li)
    const li = document.createElement('li');

    // Cria o texto dentro do li
    const span = document.createElement('span');
    span.innerText = textoTarefa;
    
    // Ao clicar no texto, marca como concluída (risca o texto)
    span.addEventListener('click', function() {
        li.classList.toggle('concluida');
    });

    // Cria o botão de excluir (X)
    const btnExcluir = document.createElement('button');
    btnExcluir.innerText = '🗑️';
    btnExcluir.classList.add('btn-excluir');

    // Ao clicar no X, remove a tarefa da tela
    btnExcluir.addEventListener('click', function() {
        li.remove();
    });

    // Coloca o texto e o botão dentro do li
    li.appendChild(span);
    li.appendChild(btnExcluir);

    // Coloca o li dentro da lista (ul)
    lista.appendChild(li);

    // Limpa o campo de digitação
    input.value = '';
}

// 3. Faz o botão "Adicionar" funcionar ao clicar
btnAdicionar.addEventListener('click', adicionarTarefa);

// 4. Faz funcionar também se apertar "Enter" no teclado
input.addEventListener('keypress', function(evento) {
    if (evento.key === 'Enter') {
        adicionarTarefa();
    }
});