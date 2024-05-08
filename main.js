const form = document.getElementById('form-contato');
let linhas = ''
const nome = []
const numero = []


form.addEventListener('submit', function(e) {
    e.preventDefault();

    adcionalinha();
    atualizatabela();

})

function adcionalinha() {
    const nomectt = document.getElementById('nome-contato')
    const numeroctt = document.getElementById('numero-contato')

    nome.push(nomectt.value)
    numero.push(numeroctt.value)
    
    let linha = '<tr>'
    linha += `<td> ${nomectt.value} </td>`;
    linha += `<td> ${numeroctt.value} </td>`;
    linha += '<tr>'

    linhas += linha

    nomectt.value = ''
    numeroctt.value = ''
}

function atualizatabela() {
    const corpoTabela = document.getElementById('tabby')
    corpoTabela.innerHTML = linhas
}
