const form = document.getElementById('form-submit');

const input1 = document.getElementById('numeroA');
const input2 = document.getElementById('numeroB');
const mensagemDiv = document.getElementById('mensagem')

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorA = parseFloat(numeroA.value);
    const valorB = parseFloat(numeroB.value);

    if (valorA > valorB) {
        mensagemDiv.textContent = `O número ${valorA} é maior que o número ${valorB}, Formulário Valido`
        mensagemDiv.className = "sucesso"
    } else if (valorB > valorA) {
        mensagemDiv.textContent = `O número ${valorB} é maior que o número ${valorA}, Formulário invalido`
        mensagemDiv.className = "erro"
    } else {
        mensagemDiv.textContent = "Os dois campos são iguais, Formulário invalido"
        mensagemDiv.className = "erro"
    }
})