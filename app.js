let amigos = [];
let sorteioFeito = false;

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome) {
        
        if (sorteioFeito) {
            amigos = [];
            limparResultado();
            sorteioFeito = false; 
        }

        if (!amigos.includes(nome)) {
            amigos.push(nome);
            atualizarLista();
            input.value = '';
        } else {
            alert('Nome já adicionado!');
        }
    } else {
        alert('Nome inválido!');
    }
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
}

function limparResultado() {
    const resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = '';
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    }

    let sorteioValido = false;
    let sorteados = [];

    while (!sorteioValido) {
        sorteados = [...amigos].sort(() => Math.random() - 0.5);
        sorteioValido = amigos.every((amigo, index) => amigo !== sorteados[index]);
    }

    const resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = amigos.map((amigo, index) => 
        `<li>${amigo} → ${sorteados[index]}</li>`).join('');

    sorteioFeito = true; 
}
