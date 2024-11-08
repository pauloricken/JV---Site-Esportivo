// 1. Função para mostrar uma mensagem de boas-vindas quando o cara for logar no site 
// o login é bem simples e só vai solicitar um nome 
function mostrarBoasVindas() {
    const nome = prompt("Olá! Qual é o seu nome?");
    if (nome) {
        const mensagem = document.getElementById('mensagem-boas-vindas');
        mensagem.textContent = `Bem-vindo(a) ao mundo do tênis, ${nome}!`;
        mensagem.style.display = 'block'; // Vai exibir a mensagem
    }
}

// 2. Função para curtir um jogador
function curtirJogador(elemento) {
    const contador = elemento.querySelector('.contador-curtidas');
    let curtidas = parseInt(contador.textContent);
    curtidas++;
    contador.textContent = curtidas; // Atualiza contador
    elemento.classList.add('curtido'); // Adiciona Classe para  mostrar para o usuário
    alert('Você curtiu este jogador!'); // confirma a ação de curtir 
}

// 3. Função para alternar entre modo claro/escuro
function alternarModo() {
    const body = document.body;
    const botao = document.getElementById('botao-modo'); 
    
    if (body.classList.toggle('modo-escuro')) {
        botao.textContent = 'Modo Claro';
    } else {
        botao.textContent = 'Modo Escuro';
    }
}

// 4. Função para filtrar jogadores por categoria
function filtrarJogadores(categoria) {
    const jogadores = document.querySelectorAll('.cartao-jogador');
    jogadores.forEach(jogador => {
        if (categoria === 'todos' || jogador.dataset.categoria === categoria) {
            jogador.style.display = 'block';
        } else {
            jogador.style.display = 'none';
        }
    });
}

// 5. Função para validar e enviar formulário
function enviarFormulario(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    
    if (nome.length < 3) {
        alert('Você precisa digitar um nome válido');
        return;
    }
    
    alert(`Obrigado pelo contato, ${nome}! Responderemos em breve.`);
    event.target.reset();
}