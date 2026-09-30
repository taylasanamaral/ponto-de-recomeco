const formulario = document.getElementById('form-cadastro');
const mensagem = document.getElementById('mensagem-formulario');

const dadosSalvos = localStorage.getItem('cadastro');
if (dadosSalvos) {
    const cadastro = JSON.parse(dadosSalvos);
    ['nome','cpf','email','telefone','nascimento','cep','endereco','cidade','estado'].forEach(function (campo) {
        const elemento = document.getElementById(campo);
        if (elemento && cadastro[campo]) elemento.value = cadastro[campo];
    });
}

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!formulario.checkValidity()) {
        formulario.reportValidity();
        mensagem.hidden = false;
        mensagem.textContent = 'Confira os campos destacados antes de enviar.';
        return;
    }

    const dados = {};
    ['nome','cpf','email','telefone','nascimento','cep','endereco','cidade','estado'].forEach(function (campo) {
        dados[campo] = document.getElementById(campo).value;
    });
    localStorage.setItem('cadastro', JSON.stringify(dados));
    mensagem.hidden = false;
    mensagem.textContent = 'Cadastro salvo com sucesso.';
});

const menu = document.getElementById('menu-toggle');
const botaoMenu = document.querySelector('.menu-hamburguer');
if (botaoMenu) {
    botaoMenu.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            menu.checked = !menu.checked;
        }
    });
}
