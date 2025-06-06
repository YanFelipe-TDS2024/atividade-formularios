let botaoEnviar = document.getElementById("botao-enviar")
function processarFormulario() {
    const nome = document.getElementById("nome").value;
    let nome_erro = document.getElementById("nome_erro");

    const dataNasc = document.getElementById("data_nascimento").value;

    const email = document.getElementById("email").value;
    let email_erro = document.getElementById("email_erro");

    const endereco = document.getElementById("endereco").value;
    let endereco_erro = document.getElementById("endereco_erro");

    const cpf = document.getElementById("cpf").value;
    let cpf_erro = document.getElementById("cpf_erro");

    const pais = document.getElementById("pais").value;
    const comentarios = document.querySelector("#comentarios").value;

    nome_erro.textContent = "";
    endereco_erro.textContent = "";
    cpf_erro.textContent = "";
    email_erro.textContent = "";

    let invalido = false

    if (nome === '' || nome.length < 3) {
        nome_erro.textContent = "Informe um nome válido!"

        invalido = true
    }

    if (endereco === '' || endereco.length < 3) {
        endereco_erro.textContent = "Informe um endereço válido!"

        invalido = true
    }

    if (cpf === '' || cpf.length < 11) {
        cpf_erro.textContent = "Informe um CPF válido!"

        invalido = true
    }

    if (email === '' || email.length < 6) {
        email_erro.textContent = "Informe um email válido!"

        invalido = true
    }

    if(!invalido) alert("Formulário enviado com sucesso!")

    return false
};